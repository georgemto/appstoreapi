#!/usr/bin/env node

/**
 * Activate Android Subscription Offers
 *
 * Activates DRAFT offers so users can see them. Reads identifiers from a CSV
 * (--from-csv), a results/rollback JSON (--from-json), or single-offer flags
 * (--product-id / --base-plan-id / --offer-id).
 *
 * Offers remain invisible to users until activated.
 *
 * ⚠️ CRITICAL: ONLY use the test package for testing.
 *
 * Usage:
 *   node activate-android-offers.js --package-name <pkg> --from-csv <offers.csv>
 *   node activate-android-offers.js --package-name <pkg> --from-json <results-or-rollback.json>
 *   node activate-android-offers.js --package-name <pkg> \
 *     --product-id <id> --base-plan-id <id> --offer-id <id>
 */

require('dotenv').config();
const fs = require('fs');
const androidOffersService = require('./src/services/android-offers');
const logger = require('./src/utils/logger');

const TEST_PACKAGE = 'com.vtech.app.plus.uat';

function parseArgs(argv) {
  const args = {
    packageName: null,
    fromCsv: null,
    fromJson: null,
    productId: null,
    basePlanId: null,
    offerId: null,
    help: false
  };

  const rest = argv.slice(2);
  for (let i = 0; i < rest.length; i++) {
    const a = rest[i];
    const take = (flag) => {
      if (a === flag) return rest[++i];
      if (a.startsWith(flag + '=')) return a.slice(flag.length + 1);
      return undefined;
    };

    if (a === '--help' || a === '-h') { args.help = true; continue; }

    const pkg = take('--package-name') ?? take('--package');
    const fc = take('--from-csv');
    const fj = take('--from-json');
    const pid = take('--product-id');
    const bp = take('--base-plan-id');
    const oid = take('--offer-id');

    if (pkg !== undefined) args.packageName = pkg;
    else if (fc !== undefined) args.fromCsv = fc;
    else if (fj !== undefined) args.fromJson = fj;
    else if (pid !== undefined) args.productId = pid;
    else if (bp !== undefined) args.basePlanId = bp;
    else if (oid !== undefined) args.offerId = oid;
  }

  return args;
}

async function run() {
  const args = parseArgs(process.argv);

  if (args.help || process.argv.slice(2).length === 0) {
    showHelp();
    process.exit(args.help ? 0 : 1);
  }

  if (!args.packageName) {
    console.error('❌ Error: --package-name is required\n');
    showHelp();
    process.exit(1);
  }
  if (args.packageName !== TEST_PACKAGE) {
    console.error(`\n❌ SAFETY ERROR: For testing, you MUST use '${TEST_PACKAGE}'\n`);
    process.exit(1);
  }

  const sourcesGiven = [args.fromCsv, args.fromJson, (args.productId || args.basePlanId || args.offerId) ? 'direct' : null].filter(Boolean).length;
  if (sourcesGiven === 0) {
    console.error('❌ Error: provide one of --from-csv, --from-json, or --product-id/--base-plan-id/--offer-id\n');
    showHelp();
    process.exit(1);
  }

  let targets = [];

  if (args.fromCsv) {
    if (!fs.existsSync(args.fromCsv)) {
      console.error(`❌ Error: --from-csv "${args.fromCsv}" not found\n`);
      process.exit(1);
    }
    const { packagesSeen, triples } = loadTriplesFromCsv(args.fromCsv);
    if (packagesSeen.length > 1) {
      console.error(`❌ Error: CSV mixes multiple package names: ${packagesSeen.join(', ')}\n`);
      process.exit(1);
    }
    if (packagesSeen.length === 1 && packagesSeen[0] !== args.packageName) {
      console.error(`❌ Error: CSV is for package "${packagesSeen[0]}" but --package-name is "${args.packageName}"\n`);
      process.exit(1);
    }
    targets.push(...triples.map(t => ({ packageName: args.packageName, ...t })));
  }

  if (args.fromJson) {
    if (!fs.existsSync(args.fromJson)) {
      console.error(`❌ Error: --from-json "${args.fromJson}" not found\n`);
      process.exit(1);
    }
    const data = JSON.parse(fs.readFileSync(args.fromJson, 'utf8'));
    let jsonTargets;
    if (Array.isArray(data.createdOffers)) {
      // rollback-android-*.json
      jsonTargets = data.createdOffers;
    } else if (Array.isArray(data.created)) {
      // bulk-android-offers-*.json
      jsonTargets = data.created.map(o => ({
        packageName: data.packageName,
        productId: o.productId,
        basePlanId: o.basePlanId,
        offerId: o.offerId
      }));
    } else {
      console.error(`❌ Error: --from-json "${args.fromJson}" isn't a recognized bulk results or rollback log.\n`);
      process.exit(1);
    }

    const uniquePkgs = new Set(jsonTargets.map(t => t.packageName).filter(Boolean));
    if (uniquePkgs.size > 1) {
      console.error(`❌ Error: JSON mixes multiple package names: ${[...uniquePkgs].join(', ')}\n`);
      process.exit(1);
    }
    if (uniquePkgs.size === 1 && [...uniquePkgs][0] !== args.packageName) {
      console.error(`❌ Error: JSON is for package "${[...uniquePkgs][0]}" but --package-name is "${args.packageName}"\n`);
      process.exit(1);
    }
    // Stamp the package on entries that lacked it (rollback log usually carries it; results do).
    targets.push(...jsonTargets.map(t => ({ packageName: args.packageName, productId: t.productId, basePlanId: t.basePlanId, offerId: t.offerId })));
  }

  // Direct/single form. When --from-csv or --from-json is also given, these act
  // as filters on the loaded set (matches delete-android-offers.js behavior).
  if (args.productId || args.basePlanId || args.offerId) {
    if (args.fromCsv || args.fromJson) {
      let filtered = targets;
      if (args.productId)  filtered = filtered.filter(t => t.productId === args.productId);
      if (args.basePlanId) filtered = filtered.filter(t => t.basePlanId === args.basePlanId);
      if (args.offerId)    filtered = filtered.filter(t => t.offerId === args.offerId);
      console.log(`Filtered ${targets.length} → ${filtered.length} target(s).`);
      targets = filtered;
    } else {
      if (!args.productId || !args.basePlanId || !args.offerId) {
        console.error('❌ Error: --product-id, --base-plan-id, and --offer-id must all be given together (or use --from-csv / --from-json)\n');
        process.exit(1);
      }
      targets = [{
        packageName: args.packageName,
        productId: args.productId,
        basePlanId: args.basePlanId,
        offerId: args.offerId
      }];
    }
  }

  // Dedupe across sources
  const seen = new Set();
  targets = targets.filter(t => {
    const key = `${t.productId}::${t.basePlanId}::${t.offerId}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });

  if (targets.length === 0) {
    console.error('❌ Error: 0 offers to activate after parsing/filters.\n');
    process.exit(1);
  }

  console.log('\n⚡ Activate Android Offers\n');
  console.log('─'.repeat(80));
  console.log(`Package: ${args.packageName}`);
  if (args.fromCsv) console.log(`Source:  ${args.fromCsv}`);
  if (args.fromJson) console.log(`Source:  ${args.fromJson}`);
  console.log(`Targets: ${targets.length} offer(s)`);
  console.log('─'.repeat(80));

  const results = { activated: [], failed: [] };

  for (const t of targets) {
    try {
      await androidOffersService.activateOffer(t.packageName, t.productId, t.basePlanId, t.offerId);
      results.activated.push(t);
      console.log(`✅ Activated: ${t.productId} / ${t.basePlanId} / ${t.offerId}`);
    } catch (err) {
      results.failed.push({ ...t, error: err.message });
      console.log(`❌ Failed: ${t.productId} / ${t.basePlanId} / ${t.offerId} — ${err.message}`);
      logger.error('Failed to activate offer', { ...t, error: err.message });
    }
  }

  console.log('\n' + '═'.repeat(80));
  console.log(`⚡ Activation: ${results.activated.length} activated, ${results.failed.length} failed`);
  console.log('═'.repeat(80));

  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const outputPath = `./activate-android-results-${timestamp}.json`;
  fs.writeFileSync(outputPath, JSON.stringify({
    packageName: args.packageName,
    source: args.fromCsv || args.fromJson || 'direct',
    summary: {
      total: targets.length,
      activated: results.activated.length,
      failed: results.failed.length
    },
    activated: results.activated,
    failed: results.failed,
    completedAt: new Date().toISOString()
  }, null, 2));
  console.log(`\n💾 Results saved to: ${outputPath}`);

  process.exit(results.failed.length > 0 ? 1 : 0);
}

// Minimal RFC4180-style CSV parser: handles quoted fields, doubled-quote escapes,
// and commas / newlines inside quoted fields. Returns an array of rows.
function parseCsv(text) {
  const rows = [];
  let row = [];
  let field = '';
  let inQuotes = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (inQuotes) {
      if (c === '"') {
        if (text[i + 1] === '"') { field += '"'; i++; }
        else { inQuotes = false; }
      } else {
        field += c;
      }
    } else {
      if (c === '"') inQuotes = true;
      else if (c === ',') { row.push(field); field = ''; }
      else if (c === '\n') { row.push(field); field = ''; rows.push(row); row = []; }
      else if (c === '\r') { /* swallow */ }
      else field += c;
    }
  }
  if (field !== '' || row.length) { row.push(field); rows.push(row); }
  return rows.filter(r => r.some(v => v !== ''));
}

// Read a CSV emitted by get-android-offers.js (--csv) or any CSV with
// 'Package Name', 'Product ID', 'Base Plan ID', 'Offer ID' columns.
function loadTriplesFromCsv(filePath) {
  const raw = fs.readFileSync(filePath, 'utf8');
  const rows = parseCsv(raw);
  if (rows.length < 2) return { packagesSeen: [], triples: [] };

  const header = rows[0].map(h => h.trim().toLowerCase());
  const idx = (name) => header.indexOf(name.toLowerCase());
  const packageCol = idx('Package Name');
  const productCol = idx('Product ID');
  const basePlanCol = idx('Base Plan ID');
  const offerCol = idx('Offer ID');

  if (productCol < 0 || basePlanCol < 0 || offerCol < 0) {
    throw new Error('CSV is missing one of the required columns: Product ID, Base Plan ID, Offer ID');
  }

  const triples = [];
  const packagesSeen = new Set();
  const seen = new Set();
  for (let r = 1; r < rows.length; r++) {
    const row = rows[r];
    const productId = (row[productCol] || '').trim();
    const basePlanId = (row[basePlanCol] || '').trim();
    const offerId = (row[offerCol] || '').trim();
    if (!productId || !basePlanId || !offerId) continue;
    const key = `${productId}::${basePlanId}::${offerId}`;
    if (seen.has(key)) continue;
    seen.add(key);
    triples.push({ productId, basePlanId, offerId });
    if (packageCol >= 0 && row[packageCol]) packagesSeen.add(row[packageCol].trim());
  }

  return { packagesSeen: [...packagesSeen], triples };
}

function showHelp() {
  console.log(`
⚡ Activate Android Subscription Offers

Activates DRAFT offers so users can see them. Offers created via
bulk-create-android-offers.js (without --activate) are left in DRAFT.

⚠️  CRITICAL: ONLY use package '${TEST_PACKAGE}' for testing.

Usage:
  node activate-android-offers.js --package-name <pkg> --from-csv <offers.csv>
  node activate-android-offers.js --package-name <pkg> --from-json <results-or-rollback.json>
  node activate-android-offers.js --package-name <pkg> \\
    --product-id <id> --base-plan-id <id> --offer-id <id>

Required:
  --package-name <pkg>     Android application ID (must be '${TEST_PACKAGE}' for testing)

Sources (provide one; --product-id/--base-plan-id/--offer-id act as filters when
combined with --from-csv or --from-json):
  --from-csv <file>        CSV with Package Name / Product ID / Base Plan ID / Offer ID
                           columns (e.g. output of get-android-offers.js --csv)
  --from-json <file>       results JSON (bulk-android-offers-*.json) or rollback log
                           (rollback-android-*.json)
  --product-id <id>        Single-offer form (all three required together)
  --base-plan-id <id>
  --offer-id <id>

Other:
  --help, -h               Show this help

Examples:
  # Activate every offer listed in a CSV
  node activate-android-offers.js --package-name ${TEST_PACKAGE} \\
    --from-csv android-offers-${TEST_PACKAGE}-correct-offers.csv

  # Activate everything from the last bulk run
  node activate-android-offers.js --package-name ${TEST_PACKAGE} \\
    --from-json bulk-android-offers-promo-xxx-2026-04-22T...Z.json

  # Activate only the rows for one offer ID inside a CSV (filter form)
  node activate-android-offers.js --package-name ${TEST_PACKAGE} \\
    --from-csv android-offers-${TEST_PACKAGE}.csv \\
    --offer-id promo-mocxv55l-u5sm

  # Single offer
  node activate-android-offers.js --package-name ${TEST_PACKAGE} \\
    --product-id com.vtech.plus.monthly --base-plan-id monthly-autorenew --offer-id promo-xxx

Output:
  activate-android-results-<timestamp>.json

Notes:
  - Activating is idempotent on the Google side — activating an already-active offer
    returns success, not an error.
  - A base plan must be ACTIVE before its offers can be activated. Draft base plans
    will block offer activation with 400.
`);
}

run();
