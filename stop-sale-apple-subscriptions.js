#!/usr/bin/env node

/**
 * Stop sale of Apple App Store subscriptions listed in a CSV file.
 *
 * Input CSV: the output of get-apple-product-ids.js (--csv).
 * Required columns: "Product ID" and "Subscription ID".
 *
 * "Stop sale" removes the subscription from all territories and disables
 * auto-rollout to new Apple territories. New users cannot purchase.
 * Existing subscribers continue to renew — Apple does not cancel active
 * subscriptions when territories are removed.
 *
 * Usage:
 *   node stop-sale-apple-subscriptions.js --csv <file> [--product-id <id>]... [--confirm]
 */

require('dotenv').config();
const fs = require('fs');
const subscriptionService = require('./src/services/subscriptions');
const logger = require('./src/utils/logger');

function parseArgs(argv) {
  const args = {
    csv: null,
    productIds: [],
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
      const csv = takeValue('--csv');
      const pid = takeValue('--product-id');
      if (csv !== undefined) args.csv = csv;
      else if (pid !== undefined) args.productIds.push(pid);
    }
  }

  return args;
}

function showHelp() {
  console.log(`
Stop sale of Apple subscriptions from a CSV (get-apple-product-ids.js output)

Usage:
  node stop-sale-apple-subscriptions.js --csv <file> [options]

Required:
  --csv <file>          CSV from get-apple-product-ids.js (must contain
                        "Product ID" and "Subscription ID" columns)

Options:
  --product-id <id>     Only stop sale for this product ID (repeatable).
                        If omitted, every row in the CSV is processed.
  --dry-run             Print what would be done; make no changes (default)
  --confirm             Actually apply changes (required to make changes)
  --help, -h            Show this help

Notes:
  - Stop sale removes the subscription from ALL territories.
  - Existing subscribers KEEP their subscription and continue to renew.
  - Defaults to --dry-run; you MUST pass --confirm to apply.

Examples:
  node stop-sale-apple-subscriptions.js --csv product-ids-apple-com.example.app.csv
  node stop-sale-apple-subscriptions.js --csv ids.csv --confirm
  node stop-sale-apple-subscriptions.js --csv ids.csv --product-id sub.monthly --confirm
`);
}

// Minimal RFC4180-ish CSV parser. Handles quoted fields with embedded
// commas, newlines, and "" escapes.
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
      continue;
    }

    if (c === '"') { inQuotes = true; continue; }
    if (c === ',') { row.push(field); field = ''; continue; }
    if (c === '\r') { continue; }
    if (c === '\n') {
      row.push(field); field = '';
      if (row.length > 1 || row[0] !== '') rows.push(row);
      row = [];
      continue;
    }
    field += c;
  }

  if (field.length > 0 || row.length > 0) {
    row.push(field);
    if (row.length > 1 || row[0] !== '') rows.push(row);
  }

  return rows;
}

function loadCsv(filePath) {
  const text = fs.readFileSync(filePath, 'utf8');
  const rows = parseCsv(text);
  if (rows.length < 2) {
    throw new Error('CSV is empty or has no data rows');
  }

  const headers = rows[0].map(h => h.trim());
  const productIdIdx = headers.indexOf('Product ID');
  const subscriptionIdIdx = headers.indexOf('Subscription ID');
  const bundleIdIdx = headers.indexOf('Bundle ID');
  const stateIdx = headers.indexOf('State');

  if (productIdIdx === -1 || subscriptionIdIdx === -1) {
    throw new Error(
      `CSV must have "Product ID" and "Subscription ID" columns. Found: ${headers.join(', ')}`
    );
  }

  const items = [];
  for (let i = 1; i < rows.length; i++) {
    const r = rows[i];
    const productId = (r[productIdIdx] || '').trim();
    const subscriptionId = (r[subscriptionIdIdx] || '').trim();
    if (!productId || !subscriptionId) continue;
    items.push({
      productId,
      subscriptionId,
      bundleId: bundleIdIdx >= 0 ? (r[bundleIdIdx] || '').trim() : '',
      state: stateIdx >= 0 ? (r[stateIdx] || '').trim() : ''
    });
  }

  return items;
}

async function processItem(item, args) {
  console.log(`\n→ ${item.productId}  (${item.subscriptionId})`);

  if (args.dryRun) {
    console.log(`    [DRY-RUN] Would stop sale (clear all territories)`);
    return { ...item, status: 'dry-run' };
  }

  try {
    await subscriptionService.stopSaleSubscription(item.subscriptionId);
    console.log(`    [STOPPED] sale removed from all territories`);
    return { ...item, status: 'stopped' };
  } catch (error) {
    console.error(`    [ERROR] ${error.message}`);
    return { ...item, status: 'failed', error: error.message };
  }
}

async function main() {
  const args = parseArgs(process.argv);

  if (args.help) {
    showHelp();
    process.exit(0);
  }

  if (!args.csv) {
    console.error('Error: --csv is required');
    showHelp();
    process.exit(1);
  }

  let items;
  try {
    items = loadCsv(args.csv);
  } catch (error) {
    console.error(`Error reading ${args.csv}: ${error.message}`);
    process.exit(1);
  }

  if (args.productIds.length > 0) {
    const wanted = new Set(args.productIds);
    items = items.filter(it => wanted.has(it.productId));
  }

  if (items.length === 0) {
    console.error('Error: no matching rows in CSV');
    process.exit(1);
  }

  if (!args.confirm && !args.dryRun) {
    args.dryRun = true;
  }

  console.log('─'.repeat(80));
  console.log('STOP SALE Apple subscriptions');
  console.log(`CSV:    ${args.csv}`);
  console.log(`Count:  ${items.length}`);
  console.log(`Mode:   ${args.dryRun ? 'DRY-RUN (no changes)' : 'LIVE'}`);
  console.log('Note:   existing subscribers keep their subscription and continue renewing');
  console.log('─'.repeat(80));

  const results = [];
  for (const item of items) {
    const result = await processItem(item, args);
    results.push(result);
    if (!args.dryRun) {
      await new Promise(r => setTimeout(r, 100));
    }
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
  logger.error('stop-sale-apple-subscriptions failed', {
    error: error.message,
    stack: error.stack
  });
  process.exit(1);
});
