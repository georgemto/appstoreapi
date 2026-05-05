#!/usr/bin/env node

/**
 * Convert a CSV (as produced by `get-android-product-ids.js --csv`)
 * back into product-ids.json format, consumable by other scripts in
 * this repo (bulk-create-subscriptions-android, deactivate-android-base-plans --from-json).
 *
 * Usage:
 *   node csv-to-product-ids.js --input <csv> [--output <json>] [--package-name <name>]
 */

require('dotenv').config();
const fs = require('fs');
const path = require('path');

function parseArgs(argv) {
  const args = { input: null, output: null, packageName: null, help: false };
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
    } else {
      const input = takeValue('--input') ?? takeValue('-i');
      const output = takeValue('--output') ?? takeValue('-o');
      const pkg = takeValue('--package-name') ?? takeValue('--package');
      if (input !== undefined) args.input = input;
      else if (output !== undefined) args.output = output;
      else if (pkg !== undefined) args.packageName = pkg;
    }
  }

  return args;
}

function showHelp() {
  console.log(`
Convert product-ids CSV back to product-ids.json format

Usage:
  node csv-to-product-ids.js --input <csv> [options]

Required:
  --input, -i <file>      CSV from get-android-product-ids.js --csv

Options:
  --output, -o <file>     Output JSON path (default: <input-basename>.json)
  --package-name <name>   Override packageName (default: from CSV "Package Name" column)
  --help, -h              Show this help

Examples:
  node csv-to-product-ids.js -i product-ids-android-com.example.app.csv
  node csv-to-product-ids.js -i filtered.csv -o filtered.json
  node csv-to-product-ids.js -i filtered.csv --package-name com.example.app
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

function parseCsv(filePath) {
  const raw = fs.readFileSync(filePath, 'utf8');
  const lines = raw.split(/\r?\n/).filter(l => l.length > 0);
  if (lines.length === 0) {
    throw new Error('CSV is empty');
  }

  const header = parseCsvRow(lines[0]).map(h => h.trim().toLowerCase());
  const idx = (name) => header.indexOf(name.toLowerCase());

  const col = {
    pkg: idx('Package Name'),
    productId: idx('Product ID'),
    basePlanId: idx('Base Plan ID'),
    name: idx('Name'),
    description: idx('Description'),
    duration: idx('Duration'),
    price: idx('Price (USD)'),
    state: idx('State')
  };

  if (col.productId === -1 || col.basePlanId === -1) {
    throw new Error('CSV must contain "Product ID" and "Base Plan ID" columns');
  }

  const rows = [];
  for (let i = 1; i < lines.length; i++) {
    const cells = parseCsvRow(lines[i]);
    const get = (c) => (c >= 0 ? (cells[c] ?? '').trim() : '');
    rows.push({
      lineNumber: i + 1,
      packageName: get(col.pkg),
      productId: get(col.productId),
      basePlanId: get(col.basePlanId),
      name: get(col.name),
      description: get(col.description),
      duration: get(col.duration),
      price: get(col.price),
      state: get(col.state)
    });
  }

  return rows;
}

function main() {
  const args = parseArgs(process.argv);

  if (args.help || !args.input) {
    showHelp();
    process.exit(args.help ? 0 : 1);
  }

  if (!fs.existsSync(args.input)) {
    console.error(`Error: input file not found: ${args.input}`);
    process.exit(1);
  }

  let rows;
  try {
    rows = parseCsv(args.input);
  } catch (error) {
    console.error(`Error parsing CSV: ${error.message}`);
    process.exit(1);
  }

  const outputPath = args.output
    || args.input.replace(/\.csv$/i, '') + '.json';

  const subscriptions = [];
  const seen = new Set();
  const productIdSet = new Set();
  let skipped = 0;
  let pkgFromCsv = null;

  for (const row of rows) {
    if (!pkgFromCsv && row.packageName) pkgFromCsv = row.packageName;

    if (!row.productId || !row.basePlanId) {
      console.warn(`  [SKIP] line ${row.lineNumber}: missing Product ID or Base Plan ID (productId="${row.productId}", basePlanId="${row.basePlanId}")`);
      skipped++;
      continue;
    }

    const key = `${row.productId}::${row.basePlanId}`;
    if (seen.has(key)) {
      console.warn(`  [SKIP] line ${row.lineNumber}: duplicate (${row.productId} / ${row.basePlanId})`);
      continue;
    }
    seen.add(key);

    productIdSet.add(row.productId);

    subscriptions.push({
      productId: row.productId,
      basePlanId: row.basePlanId,
      name: row.name || row.productId,
      referenceName: row.name || row.productId,
      price: row.price || null,
      duration: row.duration || null,
      displayName: row.name || row.productId,
      description: row.description || row.name || row.productId,
      state: row.state || null
    });
  }

  const packageName = args.packageName || pkgFromCsv || '';
  if (!packageName) {
    console.warn('Warning: no package name found in CSV and --package-name not given; leaving empty');
  }

  const productIds = Array.from(productIdSet);

  const output = {
    packageName,
    generatedAt: new Date().toISOString(),
    source: 'Google Play Store (converted from CSV)',
    subscriptionGroups: [
      {
        groupId: '',
        groupName: 'Google Play Subscriptions',
        group: '',
        subscriptions
      }
    ],
    productIds,
    totalCount: productIds.length
  };

  fs.writeFileSync(outputPath, JSON.stringify(output, null, 2));

  console.log('─'.repeat(80));
  console.log(`Input:         ${args.input}`);
  console.log(`Output:        ${outputPath}`);
  console.log(`Package:       ${packageName || '(none)'}`);
  console.log(`CSV rows:      ${rows.length}`);
  console.log(`Subscriptions: ${subscriptions.length} (unique base plans)`);
  console.log(`Product IDs:   ${productIds.length} (unique)`);
  if (skipped > 0) console.log(`Skipped:       ${skipped} row(s) missing Product ID / Base Plan ID`);
  console.log('─'.repeat(80));
}

main();
