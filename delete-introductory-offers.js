#!/usr/bin/env node

/**
 * Delete Apple introductory offers.
 *
 * Usage:
 *   node delete-introductory-offers.js --offer-id <id> [--offer-id <id> ...] [--confirm]
 *   node delete-introductory-offers.js --from-json <file> [--confirm]
 *   node delete-introductory-offers.js --from-csv  <file> [--confirm]
 *
 * --from-json reads output from get-introductory-offers.js (both the default
 *   per-territory shape and the --summary shape with offerIds[]).
 * --from-csv  reads CSVs from get-introductory-offers.js (default uses the
 *   "Offer ID" column, --summary uses pipe-separated "Offer IDs").
 */

require('dotenv').config();
const fs = require('fs');
const introductoryOfferService = require('./src/services/introductory-offers');
const logger = require('./src/utils/logger');

function parseArgs(argv) {
  const args = {
    offerIds: [],
    fromJson: null,
    fromCsv: null,
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
    } else {
      const oid = takeValue('--offer-id');
      const fj = takeValue('--from-json');
      const fc = takeValue('--from-csv');
      if (oid !== undefined) args.offerIds.push(oid);
      else if (fj !== undefined) args.fromJson = fj;
      else if (fc !== undefined) args.fromCsv = fc;
    }
  }

  return args;
}

function showHelp() {
  console.log(`
Delete Apple introductory offers

Usage:
  node delete-introductory-offers.js --offer-id <id> [options]
  node delete-introductory-offers.js --from-json <file> [options]

Input (one or more):
  --offer-id <id>       Introductory offer ID (repeatable)
  --from-json <file>    JSON from get-introductory-offers.js (default or --summary shape)
  --from-csv  <file>    CSV from get-introductory-offers.js  (default or --summary shape)

Options:
  --dry-run             Print what would happen (default)
  --confirm             Actually delete (required to apply changes)
  --help, -h            Show this help

Examples:
  node delete-introductory-offers.js --offer-id abc123 --confirm
  node delete-introductory-offers.js --from-json introductory-offers-com.example.app-2026-01-01.json --confirm
  node delete-introductory-offers.js --from-csv  introductory-offers-com.example.app-summary-2026-01-01.csv --confirm
`);
}

function loadOfferIdsFromJson(filePath) {
  const raw = fs.readFileSync(filePath, 'utf8');
  const data = JSON.parse(raw);
  const ids = [];
  const seen = new Set();

  const push = (id) => {
    if (!id || seen.has(id)) return;
    seen.add(id);
    ids.push(id);
  };

  // Default shape from get-introductory-offers.js: subscriptions[].offers[].id
  // Summary shape (--summary): subscriptions[].offers[].offerIds[]
  for (const sub of data.subscriptions || []) {
    for (const offer of sub.offers || []) {
      push(offer.id);
      for (const id of offer.offerIds || []) push(id);
    }
  }

  // Also accept simple shapes: top-level offerIds[] or offers[]
  for (const id of data.offerIds || []) push(id);
  for (const o of data.offers || []) push(o.id || o.offerId);

  return ids;
}

// Minimal RFC-4180-ish CSV parser. Handles quoted fields with embedded commas,
// escaped quotes (""), and \r\n / \n line endings. Sufficient for the CSVs
// produced by get-introductory-offers.js — not a general CSV library.
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
        else inQuotes = false;
      } else {
        field += c;
      }
    } else {
      if (c === '"') inQuotes = true;
      else if (c === ',') { row.push(field); field = ''; }
      else if (c === '\n' || c === '\r') {
        if (c === '\r' && text[i + 1] === '\n') i++;
        row.push(field); field = '';
        if (row.length > 1 || row[0] !== '') rows.push(row);
        row = [];
      } else {
        field += c;
      }
    }
  }
  if (field !== '' || row.length) {
    row.push(field);
    if (row.length > 1 || row[0] !== '') rows.push(row);
  }
  return rows;
}

function loadOfferIdsFromCsv(filePath) {
  const text = fs.readFileSync(filePath, 'utf8');
  const rows = parseCsv(text);
  if (rows.length === 0) return [];

  const header = rows[0].map(h => h.trim());
  const singleIdx = header.indexOf('Offer ID');
  const multiIdx = header.indexOf('Offer IDs');

  if (singleIdx === -1 && multiIdx === -1) {
    throw new Error(`CSV missing "Offer ID" or "Offer IDs" column. Found: ${header.join(', ')}`);
  }

  const ids = [];
  const seen = new Set();
  const push = (id) => {
    if (!id || seen.has(id)) return;
    seen.add(id);
    ids.push(id);
  };

  for (let r = 1; r < rows.length; r++) {
    const row = rows[r];
    if (singleIdx !== -1) push((row[singleIdx] || '').trim());
    if (multiIdx !== -1) {
      for (const id of (row[multiIdx] || '').split('|')) push(id.trim());
    }
  }
  return ids;
}

async function deleteOne(offerId, args) {
  console.log(`\n→ ${offerId}`);
  if (args.dryRun) {
    console.log(`    [DRY-RUN] Would delete`);
    return { offerId, status: 'dry-run' };
  }

  try {
    await introductoryOfferService.deleteIntroductoryOffer(offerId);
    console.log(`    [DELETED]`);
    return { offerId, status: 'deleted' };
  } catch (error) {
    console.error(`    [ERROR] ${error.message}`);
    return { offerId, status: 'failed', error: error.message };
  }
}

async function main() {
  const args = parseArgs(process.argv);

  if (args.help) {
    showHelp();
    process.exit(0);
  }

  if (!args.confirm && !args.dryRun) args.dryRun = true;

  let offerIds = [...args.offerIds];
  if (args.fromJson) {
    try {
      offerIds.push(...loadOfferIdsFromJson(args.fromJson));
    } catch (error) {
      console.error(`Error reading ${args.fromJson}: ${error.message}`);
      process.exit(1);
    }
  }
  if (args.fromCsv) {
    try {
      offerIds.push(...loadOfferIdsFromCsv(args.fromCsv));
    } catch (error) {
      console.error(`Error reading ${args.fromCsv}: ${error.message}`);
      process.exit(1);
    }
  }

  offerIds = [...new Set(offerIds)];

  if (offerIds.length === 0) {
    console.error('Error: no offer IDs specified (use --offer-id, --from-json, or --from-csv)');
    showHelp();
    process.exit(1);
  }

  console.log('─'.repeat(80));
  console.log('DELETE Apple introductory offers');
  console.log(`Count: ${offerIds.length}`);
  console.log(`Mode:  ${args.dryRun ? 'DRY-RUN (no changes)' : 'LIVE'}`);
  console.log('─'.repeat(80));

  const results = [];
  for (const id of offerIds) {
    results.push(await deleteOne(id, args));
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
  logger.error('delete-introductory-offers failed', {
    error: error.message,
    stack: error.stack
  });
  process.exit(1);
});
