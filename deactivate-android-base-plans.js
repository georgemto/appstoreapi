#!/usr/bin/env node

/**
 * Deactivate Google Play subscription base plans.
 *
 * Deactivating a base plan makes it unavailable to new subscribers but keeps
 * the subscription product intact and reversible (just activate it again).
 *
 * Usage:
 *   node deactivate-android-base-plans.js --package-name <pkg> --product-id <id> [--base-plan-id <id>] [--confirm]
 *   node deactivate-android-base-plans.js --package-name <pkg> --from-json <file> [--confirm]
 */

require('dotenv').config();
const fs = require('fs');
const googlePlayClient = require('./src/services/googleplay-client');
const logger = require('./src/utils/logger');

function parseArgs(argv) {
  const args = {
    packageName: null,
    productIds: [],
    basePlanId: null,
    fromJson: null,
    fromCsv: null,
    onlyActive: false,
    dryRun: false,
    confirm: false,
    help: false
  };

  const rest = argv.slice(2);
  for (let i = 0; i < rest.length; i++) {
    const a = rest[i];
    const takeValue = (flag) => {
      if (a === flag) return rest[++i];
      if (a.startsWith(flag + '=')) return a.slice(flag.length + 1);
      return undefined;
    };

    if (a === '--help' || a === '-h') {
      args.help = true;
    } else if (a === '--dry-run') {
      args.dryRun = true;
    } else if (a === '--confirm') {
      args.confirm = true;
    } else if (a === '--only-active') {
      args.onlyActive = true;
    } else {
      const pkg = takeValue('--package-name') ?? takeValue('--package');
      const pid = takeValue('--product-id');
      const bp = takeValue('--base-plan-id');
      const fj = takeValue('--from-json');
      const fc = takeValue('--from-csv');
      if (pkg !== undefined) args.packageName = pkg;
      else if (pid !== undefined) args.productIds.push(pid);
      else if (bp !== undefined) args.basePlanId = bp;
      else if (fj !== undefined) args.fromJson = fj;
      else if (fc !== undefined) args.fromCsv = fc;
    }
  }

  return args;
}

function showHelp() {
  console.log(`
Deactivate Google Play subscription base plans

Usage:
  node deactivate-android-base-plans.js --package-name <pkg> --product-id <id> [--base-plan-id <id>] [options]
  node deactivate-android-base-plans.js --package-name <pkg> --from-json <file> [options]

Required:
  --package-name <name>     Android package name / application ID
  --product-id <id>         Product ID to deactivate (repeatable)
  --from-json <file>        JSON from get-android-product-ids.js
                            (deactivates each listed productId+basePlanId pair)
  --from-csv <file>         CSV from get-android-product-ids.js --csv
                            (uses Product ID + Base Plan ID columns)

Options:
  --base-plan-id <id>       Only deactivate this specific base plan on the
                            given --product-id(s). Ignored for --from-json.
  --only-active             Skip base plans that aren't currently ACTIVE
  --dry-run                 Print what would happen (default)
  --confirm                 Actually deactivate (required to apply changes)
  --help, -h                Show this help

Notes:
  - With --product-id and no --base-plan-id: fetches the subscription and
    deactivates every base plan on it.
  - With --from-json: deactivates exactly the (productId, basePlanId) pairs
    present in the file (the dump from get-android-product-ids.js flattens
    one entry per base plan).
  - Deactivation is reversible; re-activate via the Play Console or by
    calling basePlans.activate.

Examples:
  node deactivate-android-base-plans.js --package-name com.example.app \\
    --product-id sub.monthly --base-plan-id monthly-autorenew --confirm

  node deactivate-android-base-plans.js --package-name com.example.app \\
    --from-json product-ids-android-com.example.app.json --only-active --confirm
`);
}

function parseCsvRow(line) {
  const cells = [];
  let cur = '';
  let inQuotes = false;
  for (let i = 0; i < line.length; i++) {
    const ch = line[i];
    if (inQuotes) {
      if (ch === '"') {
        if (line[i + 1] === '"') { cur += '"'; i++; }
        else { inQuotes = false; }
      } else { cur += ch; }
    } else {
      if (ch === ',') { cells.push(cur); cur = ''; }
      else if (ch === '"') { inQuotes = true; }
      else { cur += ch; }
    }
  }
  cells.push(cur);
  return cells;
}

function loadPairsFromCsv(filePath) {
  const raw = fs.readFileSync(filePath, 'utf8');
  const lines = raw.split(/\r?\n/).filter(l => l.length > 0);
  if (lines.length === 0) return [];

  const header = parseCsvRow(lines[0]).map(h => h.trim().toLowerCase());
  const pidIdx = header.indexOf('product id');
  const bpIdx = header.indexOf('base plan id');
  const stateIdx = header.indexOf('state');

  if (pidIdx === -1 || bpIdx === -1) {
    throw new Error('CSV must contain "Product ID" and "Base Plan ID" columns');
  }

  const pairs = [];
  const seen = new Set();
  for (let i = 1; i < lines.length; i++) {
    const cells = parseCsvRow(lines[i]);
    const productId = (cells[pidIdx] || '').trim();
    const basePlanId = (cells[bpIdx] || '').trim();
    const stateHint = stateIdx >= 0 ? (cells[stateIdx] || '').trim() || null : null;
    if (!productId || !basePlanId) continue;
    const key = `${productId}::${basePlanId}`;
    if (seen.has(key)) continue;
    seen.add(key);
    pairs.push({ productId, basePlanId, stateHint });
  }
  return pairs;
}

function loadPairsFromJson(filePath) {
  const raw = fs.readFileSync(filePath, 'utf8');
  const data = JSON.parse(raw);
  const pairs = [];
  const seen = new Set();
  for (const g of data.subscriptionGroups || []) {
    for (const s of g.subscriptions || []) {
      if (!s.productId || !s.basePlanId) continue;
      const key = `${s.productId}::${s.basePlanId}`;
      if (seen.has(key)) continue;
      seen.add(key);
      pairs.push({
        productId: s.productId,
        basePlanId: s.basePlanId,
        stateHint: s.state || null
      });
    }
  }
  return pairs;
}

async function expandProductId(packageName, productId, basePlanIdFilter) {
  const sub = await googlePlayClient.getSubscription(packageName, productId);
  const basePlans = sub.basePlans || [];
  const filtered = basePlanIdFilter
    ? basePlans.filter(bp => bp.basePlanId === basePlanIdFilter)
    : basePlans;
  return filtered.map(bp => ({
    productId,
    basePlanId: bp.basePlanId,
    stateHint: bp.state || null
  }));
}

async function deactivatePair(packageName, pair, args) {
  const { productId, basePlanId, stateHint } = pair;
  console.log(`\n→ ${productId} / ${basePlanId}${stateHint ? ` (state: ${stateHint})` : ''}`);

  if (args.onlyActive && stateHint && stateHint !== 'ACTIVE') {
    console.log(`    [SKIP] not ACTIVE (--only-active)`);
    return { ...pair, status: 'skipped' };
  }

  if (args.dryRun) {
    console.log(`    [DRY-RUN] Would deactivate`);
    return { ...pair, status: 'dry-run' };
  }

  try {
    await googlePlayClient.deactivateBasePlan(packageName, productId, basePlanId);
    console.log(`    [DEACTIVATED]`);
    return { ...pair, status: 'deactivated' };
  } catch (error) {
    console.error(`    [ERROR] ${error.message}`);
    return { ...pair, status: 'failed', error: error.message };
  }
}

async function main() {
  const args = parseArgs(process.argv);

  if (args.help) {
    showHelp();
    process.exit(0);
  }

  if (!args.packageName) {
    console.error('Error: --package-name is required');
    showHelp();
    process.exit(1);
  }

  if (!args.confirm && !args.dryRun) args.dryRun = true;

  let pairs = [];

  if (args.fromJson) {
    try {
      pairs.push(...loadPairsFromJson(args.fromJson));
    } catch (error) {
      console.error(`Error reading ${args.fromJson}: ${error.message}`);
      process.exit(1);
    }
  }

  if (args.fromCsv) {
    try {
      pairs.push(...loadPairsFromCsv(args.fromCsv));
    } catch (error) {
      console.error(`Error reading ${args.fromCsv}: ${error.message}`);
      process.exit(1);
    }
  }

  for (const productId of args.productIds) {
    try {
      const expanded = await expandProductId(args.packageName, productId, args.basePlanId);
      if (expanded.length === 0) {
        console.warn(`Warning: no base plans found for ${productId}${args.basePlanId ? ` matching ${args.basePlanId}` : ''}`);
      }
      pairs.push(...expanded);
    } catch (error) {
      console.error(`Error fetching ${productId}: ${error.message}`);
      pairs.push({ productId, basePlanId: args.basePlanId || null, stateHint: null, status: 'failed', error: error.message });
    }
  }

  // Dedupe
  const seen = new Set();
  pairs = pairs.filter(p => {
    if (!p.basePlanId) return false;
    const key = `${p.productId}::${p.basePlanId}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });

  if (pairs.length === 0) {
    console.error('Error: no base plans to deactivate (use --product-id or --from-json)');
    process.exit(1);
  }

  console.log('─'.repeat(80));
  console.log('DEACTIVATE Android base plans');
  console.log(`Package: ${args.packageName}`);
  console.log(`Pairs:   ${pairs.length}`);
  console.log(`Mode:    ${args.dryRun ? 'DRY-RUN (no changes)' : 'LIVE'}`);
  if (args.onlyActive) console.log('Filter:  --only-active');
  console.log('─'.repeat(80));

  const results = [];
  for (const pair of pairs) {
    const result = await deactivatePair(args.packageName, pair, args);
    results.push(result);
  }

  const summary = results.reduce((acc, r) => {
    acc[r.status] = (acc[r.status] || 0) + 1;
    return acc;
  }, {});

  console.log('\n' + '─'.repeat(80));
  console.log('Summary:');
  for (const [status, count] of Object.entries(summary)) {
    console.log(`  ${status}: ${count}`);
  }
  console.log('─'.repeat(80));

  if (args.dryRun && !args.confirm) {
    console.log('\nThis was a dry run. Re-run with --confirm to apply changes.');
  }

  const failed = results.filter(r => r.status === 'failed').length;
  process.exit(failed > 0 ? 1 : 0);
}

main().catch(error => {
  console.error(`Fatal: ${error.message}`);
  logger.error('deactivate-android-base-plans failed', {
    error: error.message,
    stack: error.stack
  });
  process.exit(1);
});
