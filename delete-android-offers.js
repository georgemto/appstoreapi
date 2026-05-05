#!/usr/bin/env node

/**
 * Delete Android subscription offers (intro / promo offers on a base plan).
 *
 * Usage:
 *   node delete-android-offers.js --package-name <pkg> \
 *     --product-id <id> --base-plan-id <id> --offer-id <id> [options]
 *
 *   node delete-android-offers.js --package-name <pkg> --from-json <rollback.json> [options]
 *
 *   node delete-android-offers.js --package-name <pkg> --from-csv <offers.csv> [options]
 *
 * --from-json reads a rollback file emitted by bulk-create-android-offers.js,
 * which has the shape { createdOffers: [{ productId, basePlanId, offerId }] }.
 *
 * --from-csv reads a CSV emitted by get-android-offers.js (`--csv`), pulling
 * productId/basePlanId/offerId triples from the named columns.
 */

require('dotenv').config();
const fs = require('fs');
const androidOffersService = require('./src/services/android-offers');
const logger = require('./src/utils/logger');

function parseArgs(argv) {
  const args = {
    packageName: null,
    productId: null,
    basePlanId: null,
    offerId: null,
    fromJson: null,
    fromCsv: null,
    deactivateFirst: false,
    deactivateOnly: false,
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
    } else if (a === '--deactivate-first') {
      args.deactivateFirst = true;
    } else if (a === '--deactivate-only') {
      args.deactivateOnly = true;
    } else {
      const pkg = takeValue('--package-name') ?? takeValue('--package');
      const pid = takeValue('--product-id');
      const bp = takeValue('--base-plan-id');
      const oid = takeValue('--offer-id');
      const fj = takeValue('--from-json');
      const fc = takeValue('--from-csv');
      if (pkg !== undefined) args.packageName = pkg;
      else if (pid !== undefined) args.productId = pid;
      else if (bp !== undefined) args.basePlanId = bp;
      else if (oid !== undefined) args.offerId = oid;
      else if (fj !== undefined) args.fromJson = fj;
      else if (fc !== undefined) args.fromCsv = fc;
    }
  }

  return args;
}

function showHelp() {
  console.log(`
Delete Android subscription offers

Usage:
  node delete-android-offers.js --package-name <pkg> \\
    --product-id <id> --base-plan-id <id> --offer-id <id> [options]

  node delete-android-offers.js --package-name <pkg> --from-json <rollback.json> [options]

  node delete-android-offers.js --package-name <pkg> --from-csv <offers.csv> [options]

Required:
  --package-name <name>     Android package name / application ID

Single-offer inputs (all three needed together):
  --product-id <id>
  --base-plan-id <id>
  --offer-id <id>

Or batch:
  --from-json <file>        Rollback JSON from bulk-create-android-offers.js
                            (reads createdOffers[] with productId/basePlanId/offerId)
  --from-csv <file>         CSV from get-android-offers.js (--csv). Reads the
                            "Product ID", "Base Plan ID", and "Offer ID" columns.
                            Optional --product-id / --base-plan-id / --offer-id
                            act as filters (only matching rows are processed).

Options:
  --deactivate-first        Deactivate each offer before deleting (required if
                            the offer is ACTIVE — Play only lets you delete
                            DRAFT offers).
  --deactivate-only         Deactivate the offer; do NOT delete it. Mutually
                            exclusive with --deactivate-first.
  --dry-run                 Print what would happen (default)
  --confirm                 Actually delete/deactivate (required to apply changes)
  --help, -h                Show this help

Examples:
  node delete-android-offers.js --package-name com.example.app \\
    --product-id sub.monthly --base-plan-id monthly-autorenew \\
    --offer-id intro-trial --confirm

  node delete-android-offers.js --package-name com.example.app \\
    --from-json rollback-android-intro-trial-2026-01-01.json \\
    --deactivate-first --confirm

  # Deactivate every offer with id "promo-mocxv55l-u5sm" listed in the CSV
  node delete-android-offers.js --package-name com.example.app \\
    --from-csv android-offers-com.example.app.csv \\
    --offer-id promo-mocxv55l-u5sm --deactivate-only --confirm
`);
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
      if (c === '"') {
        inQuotes = true;
      } else if (c === ',') {
        row.push(field); field = '';
      } else if (c === '\n') {
        row.push(field); field = '';
        rows.push(row); row = [];
      } else if (c === '\r') {
        // swallow; handled by following \n
      } else {
        field += c;
      }
    }
  }
  if (field !== '' || row.length) { row.push(field); rows.push(row); }
  return rows.filter(r => r.some(v => v !== ''));
}

function loadTriplesFromCsv(filePath) {
  const raw = fs.readFileSync(filePath, 'utf8');
  const rows = parseCsv(raw);
  if (rows.length < 2) return { packageName: null, triples: [] };

  const header = rows[0].map(h => h.trim().toLowerCase());
  const idx = (name) => header.indexOf(name.toLowerCase());
  const productCol = idx('Product ID');
  const basePlanCol = idx('Base Plan ID');
  const offerCol = idx('Offer ID');
  const packageCol = idx('Package Name');

  if (productCol < 0 || basePlanCol < 0 || offerCol < 0) {
    throw new Error('CSV is missing one of the required columns: Product ID, Base Plan ID, Offer ID');
  }

  const triples = [];
  const seen = new Set();
  const packagesSeen = new Set();
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

  const packageName = packagesSeen.size === 1 ? [...packagesSeen][0] : null;
  return { packageName, packagesSeen: [...packagesSeen], triples };
}

function loadTriplesFromJson(filePath) {
  const raw = fs.readFileSync(filePath, 'utf8');
  const data = JSON.parse(raw);
  const triples = [];
  const seen = new Set();

  const push = (productId, basePlanId, offerId) => {
    if (!productId || !basePlanId || !offerId) return;
    const key = `${productId}::${basePlanId}::${offerId}`;
    if (seen.has(key)) return;
    seen.add(key);
    triples.push({ productId, basePlanId, offerId });
  };

  // Shape from bulk-create-android-offers.js rollback file
  for (const o of data.createdOffers || []) {
    push(o.productId, o.basePlanId, o.offerId);
  }

  // Also accept the primary results file's `created` array
  for (const o of data.created || []) {
    push(o.productId, o.basePlanId, o.offerId);
  }

  // Also accept a generic offers[] shape
  for (const o of data.offers || []) {
    push(o.productId, o.basePlanId, o.offerId);
  }

  return triples;
}

async function deleteOne(packageName, t, args) {
  console.log(`\n→ ${t.productId} / ${t.basePlanId} / ${t.offerId}`);

  if (args.dryRun) {
    if (args.deactivateOnly) console.log(`    [DRY-RUN] Would deactivate (no delete)`);
    else if (args.deactivateFirst) console.log(`    [DRY-RUN] Would deactivate, then delete`);
    else console.log(`    [DRY-RUN] Would delete`);
    return { ...t, status: 'dry-run' };
  }

  if (args.deactivateOnly) {
    try {
      await androidOffersService.deactivateOffer(packageName, t.productId, t.basePlanId, t.offerId);
      console.log(`    [DEACTIVATED]`);
      return { ...t, status: 'deactivated' };
    } catch (error) {
      console.error(`    [ERROR] ${error.message}`);
      return { ...t, status: 'failed', error: error.message };
    }
  }

  if (args.deactivateFirst) {
    try {
      await androidOffersService.deactivateOffer(packageName, t.productId, t.basePlanId, t.offerId);
      console.log(`    [DEACTIVATED]`);
    } catch (error) {
      console.warn(`    [WARN] Deactivate failed (${error.message}); attempting delete anyway`);
    }
  }

  try {
    await androidOffersService.deleteOffer(packageName, t.productId, t.basePlanId, t.offerId);
    console.log(`    [DELETED]`);
    return { ...t, status: 'deleted' };
  } catch (error) {
    console.error(`    [ERROR] ${error.message}`);
    return { ...t, status: 'failed', error: error.message };
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

  if (args.deactivateFirst && args.deactivateOnly) {
    console.error('Error: --deactivate-first and --deactivate-only are mutually exclusive');
    process.exit(1);
  }

  if (!args.confirm && !args.dryRun) args.dryRun = true;

  let triples = [];

  if (args.fromJson) {
    try {
      triples.push(...loadTriplesFromJson(args.fromJson));
    } catch (error) {
      console.error(`Error reading ${args.fromJson}: ${error.message}`);
      process.exit(1);
    }
  }

  if (args.fromCsv) {
    try {
      const { packageName: csvPkg, packagesSeen, triples: csvTriples } = loadTriplesFromCsv(args.fromCsv);
      if (packagesSeen && packagesSeen.length > 1) {
        console.error(`Error: CSV mixes multiple package names: ${packagesSeen.join(', ')}`);
        process.exit(1);
      }
      if (csvPkg && csvPkg !== args.packageName) {
        console.error(`Error: CSV is for package "${csvPkg}" but --package-name is "${args.packageName}"`);
        process.exit(1);
      }
      // Apply optional filters when from-csv is set
      let filtered = csvTriples;
      if (args.offerId) filtered = filtered.filter(t => t.offerId === args.offerId);
      if (args.productId) filtered = filtered.filter(t => t.productId === args.productId);
      if (args.basePlanId) filtered = filtered.filter(t => t.basePlanId === args.basePlanId);
      console.log(`Loaded ${csvTriples.length} row(s) from ${args.fromCsv}; ${filtered.length} match filters.`);
      triples.push(...filtered);
    } catch (error) {
      console.error(`Error reading ${args.fromCsv}: ${error.message}`);
      process.exit(1);
    }
  } else if (args.productId || args.basePlanId || args.offerId) {
    if (!args.productId || !args.basePlanId || !args.offerId) {
      console.error('Error: --product-id, --base-plan-id, and --offer-id must all be provided together (or use --from-csv to filter)');
      process.exit(1);
    }
    triples.push({
      productId: args.productId,
      basePlanId: args.basePlanId,
      offerId: args.offerId
    });
  }

  // Dedupe
  const seen = new Set();
  triples = triples.filter(t => {
    const key = `${t.productId}::${t.basePlanId}::${t.offerId}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });

  if (triples.length === 0) {
    console.error('Error: no offers to delete (use --product-id/--base-plan-id/--offer-id, --from-json, or --from-csv)');
    showHelp();
    process.exit(1);
  }

  const action = args.deactivateOnly ? 'DEACTIVATE' : 'DELETE';
  console.log('─'.repeat(80));
  console.log(`${action} Android subscription offers`);
  console.log(`Package: ${args.packageName}`);
  console.log(`Count:   ${triples.length}`);
  console.log(`Mode:    ${args.dryRun ? 'DRY-RUN (no changes)' : 'LIVE'}`);
  if (args.deactivateFirst) console.log('Also:    deactivate before delete');
  console.log('─'.repeat(80));

  const results = [];
  for (const t of triples) {
    results.push(await deleteOne(args.packageName, t, args));
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
  logger.error('delete-android-offers failed', {
    error: error.message,
    stack: error.stack
  });
  process.exit(1);
});
