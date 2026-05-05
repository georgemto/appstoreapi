#!/usr/bin/env node

/**
 * Convert a product-ids JSON file to CSV.
 *
 * Accepts the schema produced by:
 *   - generate-product-ids.js          (bundleId, no basePlanId/state)
 *   - get-android-product-ids.js       (packageName, basePlanId, state)
 *   - get-apple-product-ids.js         (bundleId, no basePlanId)
 *   - csv-to-product-ids.js            (round-trip)
 *
 * The output uses the same columns as get-android-product-ids.js --csv so
 * it round-trips with csv-to-product-ids.js. Extra Group columns are appended
 * for inspection but are ignored on round-trip.
 *
 * Usage:
 *   node product-ids-to-csv.js --input <file> [--output <file>]
 */

require('dotenv').config();
const fs = require('fs');

function parseArgs(argv) {
  const args = { input: null, output: null, help: false };
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
      if (input !== undefined) args.input = input;
      else if (output !== undefined) args.output = output;
    }
  }
  return args;
}

function showHelp() {
  console.log(`
Convert product-ids JSON to CSV

Usage:
  node product-ids-to-csv.js --input <file> [options]

Required:
  --input, -i <file>      product-ids JSON file (from generate-product-ids.js,
                          get-android-product-ids.js, get-apple-product-ids.js,
                          or csv-to-product-ids.js)

Options:
  --output, -o <file>     CSV output path (default: <input-basename>.csv)
  --help, -h              Show this help

Output columns:
  Package Name, Product ID, Base Plan ID, Name, Description, Duration,
  Price (USD), State, Group ID, Group Name

The first 8 columns match get-android-product-ids.js --csv so the file
round-trips with csv-to-product-ids.js. Group columns are extras.

Examples:
  node product-ids-to-csv.js --input product-ids.json
  node product-ids-to-csv.js -i product-ids-android-com.example.app.json -o pids.csv
`);
}

function csvEscape(value) {
  if (value === null || value === undefined) return '';
  const str = String(value);
  if (/[",\n\r]/.test(str)) return `"${str.replace(/"/g, '""')}"`;
  return str;
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

  let data;
  try {
    data = JSON.parse(fs.readFileSync(args.input, 'utf8'));
  } catch (error) {
    console.error(`Error parsing ${args.input}: ${error.message}`);
    process.exit(1);
  }

  // Detect package/bundle identifier — both Android and Apple shapes work.
  const packageOrBundle = data.packageName || data.bundleId || '';

  const headers = [
    'Package Name',
    'Product ID',
    'Base Plan ID',
    'Name',
    'Description',
    'Duration',
    'Price (USD)',
    'State',
    'Group ID',
    'Group Name'
  ];

  const lines = [headers.join(',')];
  let rowCount = 0;
  let missingBasePlan = 0;

  for (const group of data.subscriptionGroups || []) {
    const groupId = group.groupId || group.id || '';
    const groupName = group.groupName || group.referenceName || '';

    for (const sub of group.subscriptions || []) {
      if (!sub.basePlanId) missingBasePlan++;

      lines.push([
        packageOrBundle,
        sub.productId || '',
        sub.basePlanId || '',
        sub.name || sub.referenceName || '',
        sub.description || sub.name || '',
        sub.duration || '',
        sub.price || '',
        sub.state || '',
        groupId,
        groupName
      ].map(csvEscape).join(','));
      rowCount++;
    }
  }

  const outputPath = args.output || args.input.replace(/\.json$/i, '') + '.csv';
  fs.writeFileSync(outputPath, lines.join('\n') + '\n');

  console.log('─'.repeat(80));
  console.log(`Input:           ${args.input}`);
  console.log(`Output:          ${outputPath}`);
  console.log(`Package/Bundle:  ${packageOrBundle || '(none)'}`);
  console.log(`Rows written:    ${rowCount}`);
  if (missingBasePlan > 0) {
    console.log(`Note: ${missingBasePlan} row(s) have no Base Plan ID (Apple-style data).`);
    console.log('      Round-trip via csv-to-product-ids.js will skip those rows.');
  }
  console.log('─'.repeat(80));
}

main();
