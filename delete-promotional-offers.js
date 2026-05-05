#!/usr/bin/env node

/**
 * Delete promotional offers and deactivate subscription offer codes.
 *
 * Two distinct Apple resources are handled here:
 *   - subscriptionPromotionalOffers → DELETE /v1/subscriptionPromotionalOffers/{id}
 *   - subscriptionOfferCodes        → PATCH  /v1/subscriptionOfferCodes/{id}  {active: false}
 *
 * Apple does NOT support DELETE on offer codes — the supported "remove" path
 * is to deactivate them so they can no longer be redeemed.
 *
 * Usage:
 *   node delete-promotional-offers.js --offer-id <id> [--offer-id <id> ...] [--confirm]
 *   node delete-promotional-offers.js --offer-code-id <id> [...] [--confirm]
 *   node delete-promotional-offers.js --from-json <file> [--confirm]
 *   node delete-promotional-offers.js --from-csv  <file> [--confirm]
 *
 * --from-csv understands CSVs from:
 *   - get-promotional-offers.js: "Offer ID" / "Offer IDs" columns → delete
 *   - get-offer-codes.js:        "Offer Code ID" / "Offer Code IDs" columns → deactivate
 *   - Combined CSVs with a "Type" column (PROMO/OFFER_CODE) and
 *     "Resource ID" / "Resource IDs" columns
 *
 * --from-json understands:
 *   - get-promotional-offers output: subscriptions[].offers[]
 *   - get-offer-codes output:        subscriptions[].offerCodes[]
 *   - bulk-create rollback logs:     createdOffers[].offerId
 *   - generic top-level:             offerIds[] / offers[] / offerCodeIds[]
 */

require('dotenv').config();
const fs = require('fs');
const promotionalOfferService = require('./src/services/promotional-offers');
const logger = require('./src/utils/logger');

function parseArgs(argv) {
  const args = {
    promoIds: [],
    offerCodeIds: [],
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
      const promoId = takeValue('--offer-id');
      const codeId = takeValue('--offer-code-id');
      const fj = takeValue('--from-json');
      const fc = takeValue('--from-csv');
      if (promoId !== undefined) args.promoIds.push(promoId);
      else if (codeId !== undefined) args.offerCodeIds.push(codeId);
      else if (fj !== undefined) args.fromJson = fj;
      else if (fc !== undefined) args.fromCsv = fc;
      else if (!a.startsWith('-')) {
        // Back-compat positional: .json/.csv → from-json/from-csv,
        // anything else assumed to be a promotional offer ID.
        if (a.endsWith('.json')) args.fromJson = a;
        else if (a.endsWith('.csv')) args.fromCsv = a;
        else args.promoIds.push(a);
      }
    }
  }

  return args;
}

function showHelp() {
  console.log(`
Delete promotional offers and deactivate subscription offer codes.

Usage:
  node delete-promotional-offers.js --offer-id <id> [options]
  node delete-promotional-offers.js --offer-code-id <id> [options]
  node delete-promotional-offers.js --from-json <file> [options]
  node delete-promotional-offers.js --from-csv  <file> [options]

Input (one or more):
  --offer-id <id>        Promotional offer ID (repeatable)  → DELETE
  --offer-code-id <id>   Subscription offer code ID (repeatable)  → PATCH active=false
  --from-json <file>     JSON from get-promotional-offers.js, get-offer-codes.js,
                         or a bulk-create rollback log
  --from-csv  <file>     CSV from get-promotional-offers.js or get-offer-codes.js
                         (default or --summary mode); combined CSVs with a "Type"
                         column also work

Options:
  --dry-run              Print what would happen (default if --confirm not passed)
  --confirm              Actually apply changes
  --help, -h             Show this help

Notes:
  Apple does NOT support DELETE on subscriptionOfferCodes. OFFER_CODE rows are
  deactivated (PATCH active: false) — the offer code itself remains in App Store
  Connect but can no longer be redeemed.

Examples:
  node delete-promotional-offers.js --offer-id abc123 --confirm
  node delete-promotional-offers.js --offer-code-id xyz789 --confirm
  node delete-promotional-offers.js --from-csv promotional-offers-com.example.app-summary-2026-05-03.csv --confirm
  node delete-promotional-offers.js rollback-Group-1-2026-04-30.json --confirm   # legacy positional rollback
`);
}

function loadIdsFromJson(filePath) {
  const raw = fs.readFileSync(filePath, 'utf8');
  const data = JSON.parse(raw);
  const promoIds = [];
  const codeIds = [];
  const seenPromo = new Set();
  const seenCode = new Set();

  const pushPromo = (id) => {
    if (!id || seenPromo.has(id)) return;
    seenPromo.add(id);
    promoIds.push(id);
  };
  const pushCode = (id) => {
    if (!id || seenCode.has(id)) return;
    seenCode.add(id);
    codeIds.push(id);
  };

  // get-promotional-offers shapes (default + --summary)
  for (const sub of data.subscriptions || []) {
    for (const offer of sub.offers || []) {
      pushPromo(offer.id);
      for (const id of offer.offerIds || []) pushPromo(id);
    }
    for (const code of sub.offerCodes || []) {
      pushCode(code.id);
      for (const id of code.offerIds || []) pushCode(id);
    }
  }

  // bulk-create rollback log
  for (const o of data.createdOffers || []) pushPromo(o.offerId);

  // Generic top-level shapes (default to PROMO since that's the historical use)
  for (const id of data.offerIds || []) pushPromo(id);
  for (const o of data.offers || []) pushPromo(o.id || o.offerId);
  for (const id of data.offerCodeIds || []) pushCode(id);

  return { promoIds, codeIds };
}

// Minimal RFC-4180-ish CSV parser. Handles quoted fields with embedded commas,
// escaped quotes (""), and \r\n / \n line endings.
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

function loadIdsFromCsv(filePath) {
  const text = fs.readFileSync(filePath, 'utf8');
  const rows = parseCsv(text);
  if (rows.length === 0) return { promoIds: [], codeIds: [] };

  const header = rows[0].map(h => h.trim());
  const typeIdx = header.indexOf('Type');

  // Recognize three CSV shapes:
  //   1. get-promotional-offers.js (default):  "Offer ID"      column
  //   2. get-promotional-offers.js (--summary):"Offer IDs"     column (pipe-separated)
  //   3. get-offer-codes.js (default):         "Offer Code ID" column
  //   4. get-offer-codes.js (--summary):       "Offer Code IDs"column (pipe-separated)
  //   5. Combined CSVs with a "Type" column:   "Resource ID"/"Resource IDs"
  //
  // Each ID is routed to promo or code based on which column it came from
  // (or, for combined CSVs, the row's Type value).
  const promoSingleIdx = header.indexOf('Offer ID');
  const promoMultiIdx  = header.indexOf('Offer IDs');
  const codeSingleIdx  = header.indexOf('Offer Code ID');
  const codeMultiIdx   = header.indexOf('Offer Code IDs');
  const resourceSingleIdx = header.indexOf('Resource ID');
  const resourceMultiIdx  = header.indexOf('Resource IDs');

  const noColumns = [promoSingleIdx, promoMultiIdx, codeSingleIdx, codeMultiIdx, resourceSingleIdx, resourceMultiIdx]
    .every(i => i === -1);
  if (noColumns) {
    throw new Error(
      `CSV missing ID column. Expected one of: "Offer ID"/"Offer IDs" (promotional), ` +
      `"Offer Code ID"/"Offer Code IDs" (offer codes), or "Resource ID"/"Resource IDs" (combined). ` +
      `Found: ${header.join(', ')}`
    );
  }

  const promoIds = [];
  const codeIds = [];
  const seenPromo = new Set();
  const seenCode = new Set();

  const pushPromo = (id) => {
    const t = (id || '').trim();
    if (!t || seenPromo.has(t)) return;
    seenPromo.add(t);
    promoIds.push(t);
  };
  const pushCode = (id) => {
    const t = (id || '').trim();
    if (!t || seenCode.has(t)) return;
    seenCode.add(t);
    codeIds.push(t);
  };

  for (let r = 1; r < rows.length; r++) {
    const row = rows[r];
    if (promoSingleIdx !== -1) pushPromo(row[promoSingleIdx]);
    if (codeSingleIdx !== -1)  pushCode(row[codeSingleIdx]);
    if (promoMultiIdx !== -1) {
      for (const id of (row[promoMultiIdx] || '').split('|')) pushPromo(id);
    }
    if (codeMultiIdx !== -1) {
      for (const id of (row[codeMultiIdx] || '').split('|')) pushCode(id);
    }
    // Combined CSV path: route by Type column.
    if (resourceSingleIdx !== -1 || resourceMultiIdx !== -1) {
      const type = typeIdx !== -1 ? (row[typeIdx] || '').trim() : '';
      const push = type === 'OFFER_CODE' ? pushCode : pushPromo;
      if (resourceSingleIdx !== -1) push(row[resourceSingleIdx]);
      if (resourceMultiIdx !== -1) {
        for (const id of (row[resourceMultiIdx] || '').split('|')) push(id);
      }
    }
  }
  return { promoIds, codeIds };
}

async function deletePromo(offerId, args) {
  console.log(`\n→ [PROMO]  ${offerId}`);
  if (args.dryRun) {
    console.log(`    [DRY-RUN] Would delete`);
    return { offerId, type: 'PROMO', status: 'dry-run' };
  }

  try {
    await promotionalOfferService.deletePromotionalOffer(offerId);
    console.log(`    [DELETED]`);
    return { offerId, type: 'PROMO', status: 'deleted' };
  } catch (error) {
    console.error(`    [ERROR] ${error.message}`);
    return { offerId, type: 'PROMO', status: 'failed', error: error.message };
  }
}

async function deactivateCode(offerCodeId, args) {
  console.log(`\n→ [CODE]   ${offerCodeId}`);
  if (args.dryRun) {
    console.log(`    [DRY-RUN] Would deactivate (PATCH active=false)`);
    return { offerId: offerCodeId, type: 'OFFER_CODE', status: 'dry-run' };
  }

  try {
    await promotionalOfferService.deactivateOfferCode(offerCodeId);
    console.log(`    [DEACTIVATED]`);
    return { offerId: offerCodeId, type: 'OFFER_CODE', status: 'deactivated' };
  } catch (error) {
    console.error(`    [ERROR] ${error.message}`);
    return { offerId: offerCodeId, type: 'OFFER_CODE', status: 'failed', error: error.message };
  }
}

async function main() {
  const args = parseArgs(process.argv);

  if (args.help) {
    showHelp();
    process.exit(0);
  }

  if (!args.confirm && !args.dryRun) args.dryRun = true;

  let promoIds = [...args.promoIds];
  let codeIds = [...args.offerCodeIds];

  if (args.fromJson) {
    try {
      const { promoIds: pj, codeIds: cj } = loadIdsFromJson(args.fromJson);
      promoIds.push(...pj);
      codeIds.push(...cj);
    } catch (error) {
      console.error(`Error reading ${args.fromJson}: ${error.message}`);
      process.exit(1);
    }
  }
  if (args.fromCsv) {
    try {
      const { promoIds: pc, codeIds: cc } = loadIdsFromCsv(args.fromCsv);
      promoIds.push(...pc);
      codeIds.push(...cc);
    } catch (error) {
      console.error(`Error reading ${args.fromCsv}: ${error.message}`);
      process.exit(1);
    }
  }

  promoIds = [...new Set(promoIds)];
  codeIds = [...new Set(codeIds)];

  if (promoIds.length === 0 && codeIds.length === 0) {
    console.error('Error: no IDs specified (use --offer-id, --offer-code-id, --from-json, or --from-csv)');
    showHelp();
    process.exit(1);
  }

  console.log('─'.repeat(80));
  console.log('DELETE promotional offers / DEACTIVATE offer codes');
  console.log(`  Promotional offers to DELETE:    ${promoIds.length}`);
  console.log(`  Offer codes to DEACTIVATE:       ${codeIds.length}`);
  console.log(`  Mode: ${args.dryRun ? 'DRY-RUN (no changes)' : 'LIVE'}`);
  console.log('─'.repeat(80));

  const results = [];
  for (const id of promoIds) results.push(await deletePromo(id, args));
  for (const id of codeIds)  results.push(await deactivateCode(id, args));

  const summary = results.reduce((acc, r) => {
    const key = `${r.type}:${r.status}`;
    acc[key] = (acc[key] || 0) + 1;
    return acc;
  }, {});

  console.log('\n' + '─'.repeat(80));
  console.log('Summary:');
  for (const [key, count] of Object.entries(summary)) {
    console.log(`  ${key}: ${count}`);
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
  logger.error('delete-promotional-offers failed', {
    error: error.message,
    stack: error.stack
  });
  process.exit(1);
});
