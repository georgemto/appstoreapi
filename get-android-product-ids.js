#!/usr/bin/env node

/**
 * Dump all subscription product IDs from the Google Play Store
 * for a given package into product-ids.json format (same shape
 * produced by generate-product-ids.js, consumed by
 * bulk-create-subscriptions-android.js).
 *
 * Usage:
 *   node get-android-product-ids.js --package-name <package> [--output <file>]
 */

require('dotenv').config();
const fs = require('fs');
const googlePlayClient = require('./src/services/googleplay-client');
const logger = require('./src/utils/logger');

const ISO_TO_APPSTORE_DURATION = {
  P1W: 'ONE_WEEK',
  P2W: 'TWO_WEEKS',
  P1M: 'ONE_MONTH',
  P2M: 'TWO_MONTHS',
  P3M: 'THREE_MONTHS',
  P6M: 'SIX_MONTHS',
  P1Y: 'ONE_YEAR'
};

function parseArgs(argv) {
  const args = { packageName: null, output: null, csv: false, csvOutput: null, help: false };
  const rest = argv.slice(2);

  for (let i = 0; i < rest.length; i++) {
    const a = rest[i];
    if (a === '--help' || a === '-h') {
      args.help = true;
    } else if (a === '--package-name' || a === '--package') {
      args.packageName = rest[++i];
    } else if (a.startsWith('--package-name=')) {
      args.packageName = a.slice('--package-name='.length);
    } else if (a.startsWith('--package=')) {
      args.packageName = a.slice('--package='.length);
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
Dump Google Play subscription product IDs to product-ids.json format

Usage:
  node get-android-product-ids.js --package-name <package> [--output <file>]

Options:
  --package-name <name>   Android package name / application ID (required)
  --output, -o <file>     JSON output file path (default: product-ids-android-<package>.json)
  --csv [file]            Also write a CSV (default: <json-output>.csv)
  --help, -h              Show this help

Examples:
  node get-android-product-ids.js --package-name com.example.app
  node get-android-product-ids.js --package-name com.example.app --output my-ids.json
  node get-android-product-ids.js --package-name com.example.app --csv
  node get-android-product-ids.js --package-name com.example.app --csv my-ids.csv
`);
}

function moneyToPriceString(money) {
  if (!money) return null;
  const units = parseInt(money.units || '0', 10);
  const nanos = parseInt(money.nanos || 0, 10);
  const value = units + nanos / 1e9;
  return value.toFixed(2);
}

function pickUsdPrice(basePlan) {
  const regional = basePlan?.regionalConfigs || [];
  const us = regional.find(r => r.regionCode === 'US');
  if (us?.price) return moneyToPriceString(us.price);

  const otherUsd = basePlan?.otherRegionsConfig?.usdPrice;
  if (otherUsd) return moneyToPriceString(otherUsd);

  const anyPriced = regional.find(r => r.price);
  if (anyPriced?.price) return moneyToPriceString(anyPriced.price);

  return null;
}

function pickListing(sub) {
  const listings = sub?.listings || [];
  const enUS = listings.find(l => l.languageCode === 'en-US');
  return enUS || listings[0] || {};
}

function csvEscape(value) {
  if (value === null || value === undefined) return '';
  const str = String(value);
  if (/[",\n\r]/.test(str)) {
    return `"${str.replace(/"/g, '""')}"`;
  }
  return str;
}

function entriesToCsv(entries, packageName) {
  const headers = [
    'Package Name',
    'Product ID',
    'Base Plan ID',
    'Name',
    'Description',
    'Duration',
    'Price (USD)',
    'State'
  ];
  const lines = [headers.join(',')];
  for (const e of entries) {
    lines.push([
      packageName,
      e.productId,
      e.basePlanId,
      e.name,
      e.description,
      e.duration,
      e.price,
      e.state
    ].map(csvEscape).join(','));
  }
  return lines.join('\n') + '\n';
}

function buildSubscriptionEntry(sub, basePlan) {
  const listing = pickListing(sub);
  const isoDuration = basePlan?.autoRenewingBasePlanType?.billingPeriodDuration
    || basePlan?.prepaidBasePlanType?.billingPeriodDuration
    || null;
  const duration = isoDuration
    ? (ISO_TO_APPSTORE_DURATION[isoDuration] || isoDuration)
    : null;

  return {
    productId: sub.productId,
    basePlanId: basePlan?.basePlanId || null,
    name: listing.title || sub.productId,
    referenceName: listing.title || sub.productId,
    price: pickUsdPrice(basePlan),
    duration,
    displayName: listing.title || sub.productId,
    description: listing.description || listing.title || sub.productId,
    state: basePlan?.state || null
  };
}

async function main() {
  const args = parseArgs(process.argv);

  if (args.help || !args.packageName) {
    showHelp();
    process.exit(args.help ? 0 : 1);
  }

  const packageName = args.packageName;
  const outputPath = args.output || `product-ids-android-${packageName}.json`;

  console.log(`Fetching Google Play subscriptions for package: ${packageName}`);

  try {
    const { subscriptions } = await googlePlayClient.getSubscriptions(packageName);

    if (!subscriptions || subscriptions.length === 0) {
      console.log('No subscriptions found for this package.');
      const empty = {
        packageName,
        generatedAt: new Date().toISOString(),
        source: 'Google Play Store',
        subscriptionGroups: [
          { groupId: '', groupName: 'Google Play Subscriptions', group: '', subscriptions: [] }
        ],
        productIds: [],
        totalCount: 0
      };
      fs.writeFileSync(outputPath, JSON.stringify(empty, null, 2));
      console.log(`Wrote ${outputPath}`);
      if (args.csv) {
        const csvPath = args.csvOutput || outputPath.replace(/\.json$/, '') + '.csv';
        fs.writeFileSync(csvPath, entriesToCsv([], packageName));
        console.log(`Wrote ${csvPath}`);
      }
      return;
    }

    const entries = [];
    for (const sub of subscriptions) {
      const basePlans = sub.basePlans || [];
      if (basePlans.length === 0) {
        entries.push(buildSubscriptionEntry(sub, null));
      } else {
        for (const bp of basePlans) {
          entries.push(buildSubscriptionEntry(sub, bp));
        }
      }
    }

    const productIds = [...new Set(entries.map(e => e.productId))];

    const output = {
      packageName,
      generatedAt: new Date().toISOString(),
      source: 'Google Play Store',
      subscriptionGroups: [
        {
          groupId: '',
          groupName: 'Google Play Subscriptions',
          group: '',
          subscriptions: entries
        }
      ],
      productIds,
      totalCount: productIds.length
    };

    fs.writeFileSync(outputPath, JSON.stringify(output, null, 2));

    console.log(`Found ${subscriptions.length} subscription(s), ${entries.length} base plan entries.`);
    console.log(`Wrote ${outputPath}`);

    if (args.csv) {
      const csvPath = args.csvOutput || outputPath.replace(/\.json$/, '') + '.csv';
      fs.writeFileSync(csvPath, entriesToCsv(entries, packageName));
      console.log(`Wrote ${csvPath}`);
    }
  } catch (error) {
    console.error(`Error: ${error.message}`);
    logger.error('Failed to dump Android product IDs', {
      packageName,
      error: error.message,
      stack: error.stack
    });
    process.exit(1);
  }
}

main();
