#!/usr/bin/env node

/**
 * Dump all subscription product IDs from the Apple App Store
 * for a given bundle ID into product-ids.json format.
 *
 * Usage:
 *   node get-apple-product-ids.js --bundle-id <bundle-id> [--output <file>] [--csv [file]]
 */

require('dotenv').config();
const fs = require('fs');
const appService = require('./src/services/apps');
const logger = require('./src/utils/logger');

function parseArgs(argv) {
  const args = { bundleId: null, output: null, csv: false, csvOutput: null, help: false };
  const rest = argv.slice(2);

  for (let i = 0; i < rest.length; i++) {
    const a = rest[i];
    if (a === '--help' || a === '-h') {
      args.help = true;
    } else if (a === '--bundle-id' || a === '--bundle') {
      args.bundleId = rest[++i];
    } else if (a.startsWith('--bundle-id=')) {
      args.bundleId = a.slice('--bundle-id='.length);
    } else if (a.startsWith('--bundle=')) {
      args.bundleId = a.slice('--bundle='.length);
    } else if (a === '--output' || a === '-o') {
      args.output = rest[++i];
    } else if (a.startsWith('--output=')) {
      args.output = a.slice('--output='.length);
    } else if (a === '--csv') {
      args.csv = true;
      const next = rest[i + 1];
      if (next && !next.startsWith('-')) {
        args.csvOutput = next;
        i++;
      }
    } else if (a.startsWith('--csv=')) {
      args.csv = true;
      args.csvOutput = a.slice('--csv='.length);
    }
  }

  return args;
}

function showHelp() {
  console.log(`
Dump Apple App Store subscription product IDs to product-ids.json format

Usage:
  node get-apple-product-ids.js --bundle-id <bundle-id> [options]

Options:
  --bundle-id <id>        App bundle identifier (required, e.g. com.example.app)
  --output, -o <file>     JSON output file path (default: product-ids-apple-<bundle-id>.json)
  --csv [file]            Also write a CSV (default: <json-output>.csv)
  --help, -h              Show this help

Examples:
  node get-apple-product-ids.js --bundle-id com.example.app
  node get-apple-product-ids.js --bundle-id com.example.app --output my-ids.json
  node get-apple-product-ids.js --bundle-id com.example.app --csv
  node get-apple-product-ids.js --bundle-id com.example.app --csv my-ids.csv
`);
}

function csvEscape(value) {
  if (value === null || value === undefined) return '';
  const str = String(value);
  if (/[",\n\r]/.test(str)) {
    return `"${str.replace(/"/g, '""')}"`;
  }
  return str;
}

function groupsToCsv(subscriptionGroups, bundleId) {
  const headers = [
    'Bundle ID',
    'Group ID',
    'Group Name',
    'Product ID',
    'Subscription ID',
    'Name',
    'Duration',
    'State',
    'Family Sharable'
  ];
  const lines = [headers.join(',')];
  for (const group of subscriptionGroups) {
    for (const sub of group.subscriptions) {
      lines.push([
        bundleId,
        group.groupId,
        group.groupName,
        sub.productId,
        sub.subscriptionId,
        sub.name,
        sub.duration,
        sub.state,
        sub.familySharable
      ].map(csvEscape).join(','));
    }
  }
  return lines.join('\n') + '\n';
}

function buildGroups(result) {
  const groupsById = new Map();
  for (const g of result.subscriptionGroups || []) {
    groupsById.set(g.id, {
      groupId: g.id,
      groupName: g.referenceName || '',
      group: '',
      subscriptions: []
    });
  }

  const ungrouped = {
    groupId: '',
    groupName: 'Ungrouped',
    group: '',
    subscriptions: []
  };

  for (const sub of result.subscriptions || []) {
    const entry = {
      productId: sub.productId,
      subscriptionId: sub.id,
      name: sub.name || sub.productId,
      referenceName: sub.name || sub.productId,
      price: null,
      duration: sub.subscriptionPeriod || null,
      displayName: sub.name || sub.productId,
      description: sub.reviewNote || sub.name || sub.productId,
      state: sub.state || null,
      familySharable: !!sub.familySharable
    };

    const target = sub.groupId && groupsById.has(sub.groupId)
      ? groupsById.get(sub.groupId)
      : ungrouped;
    target.subscriptions.push(entry);
  }

  const groups = Array.from(groupsById.values());
  if (ungrouped.subscriptions.length > 0) groups.push(ungrouped);
  return groups;
}

async function main() {
  const args = parseArgs(process.argv);

  if (args.help || !args.bundleId) {
    showHelp();
    process.exit(args.help ? 0 : 1);
  }

  const bundleId = args.bundleId;
  const outputPath = args.output || `product-ids-apple-${bundleId}.json`;

  console.log(`Fetching App Store subscriptions for bundle ID: ${bundleId}`);

  try {
    const result = await appService.getSubscriptionProductIdsByBundleId(bundleId, {
      useCache: false,
      saveToDb: false
    });

    const subscriptionGroups = buildGroups(result);
    const productIds = (result.productIds || []).slice();

    const output = {
      bundleId,
      appId: result.appId,
      appName: result.appName,
      generatedAt: new Date().toISOString(),
      source: 'Apple App Store',
      subscriptionGroups,
      productIds,
      totalCount: productIds.length
    };

    fs.writeFileSync(outputPath, JSON.stringify(output, null, 2));

    console.log(`Found ${productIds.length} subscription(s) across ${subscriptionGroups.length} group(s).`);
    console.log(`Wrote ${outputPath}`);

    if (args.csv) {
      const csvPath = args.csvOutput || outputPath.replace(/\.json$/, '') + '.csv';
      fs.writeFileSync(csvPath, groupsToCsv(subscriptionGroups, bundleId));
      console.log(`Wrote ${csvPath}`);
    }
  } catch (error) {
    console.error(`Error: ${error.message}`);
    logger.error('Failed to dump Apple product IDs', {
      bundleId,
      error: error.message,
      stack: error.stack
    });
    process.exit(1);
  }
}

main();
