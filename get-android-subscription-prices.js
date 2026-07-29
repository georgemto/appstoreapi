#!/usr/bin/env node

/**
 * Dump Google Play subscription prices for ALL regions to CSV.
 *
 * Unlike get-android-product-ids.js (which keeps only the US/USD price), this
 * emits one row per subscription / base plan / region, reading every entry in
 * basePlan.regionalConfigs. The base plan's otherRegionsConfig (the catch-all
 * USD/EUR price applied to regions without an explicit config) is emitted as
 * OTHER_REGIONS rows so nothing is silently dropped.
 *
 * Usage:
 *   node get-android-subscription-prices.js --package-name <package> [--output <file>]
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
  const args = { packageName: null, output: null, help: false };
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
    }
  }

  return args;
}

function showHelp() {
  console.log(`
Dump Google Play subscription prices for ALL regions to CSV

Usage:
  node get-android-subscription-prices.js --package-name <package> [--output <file>]

Options:
  --package-name <name>   Android package name / application ID (required)
  --output, -o <file>     CSV output file path
                          (default: android-subscription-prices-<package>.csv)
  --help, -h              Show this help

Output columns:
  Package Name, Product ID, Base Plan ID, Duration, Region, Currency, Price,
  New Subscriber Availability, State

Examples:
  node get-android-subscription-prices.js --package-name com.example.app
  node get-android-subscription-prices.js --package-name com.example.app -o prices.csv
`);
}

function moneyToPriceString(money) {
  if (!money) return null;
  const units = parseInt(money.units || '0', 10);
  const nanos = parseInt(money.nanos || 0, 10);
  const value = units + nanos / 1e9;
  return value.toFixed(2);
}

function basePlanDuration(basePlan) {
  const isoDuration = basePlan?.autoRenewingBasePlanType?.billingPeriodDuration
    || basePlan?.prepaidBasePlanType?.billingPeriodDuration
    || null;
  if (!isoDuration) return null;
  return ISO_TO_APPSTORE_DURATION[isoDuration] || isoDuration;
}

function csvEscape(value) {
  if (value === null || value === undefined) return '';
  const str = String(value);
  if (/[",\n\r]/.test(str)) {
    return `"${str.replace(/"/g, '""')}"`;
  }
  return str;
}

/**
 * Build one row per region for a single base plan, plus OTHER_REGIONS catch-all
 * rows from otherRegionsConfig.
 */
function rowsForBasePlan(packageName, sub, basePlan) {
  const rows = [];
  const productId = sub.productId;
  const basePlanId = basePlan?.basePlanId || null;
  const duration = basePlanDuration(basePlan);
  const state = basePlan?.state || null;

  for (const rc of basePlan?.regionalConfigs || []) {
    rows.push({
      packageName,
      productId,
      basePlanId,
      duration,
      region: rc.regionCode,
      currency: rc.price?.currencyCode || null,
      price: moneyToPriceString(rc.price),
      newSubscriberAvailability: rc.newSubscriberAvailability === false ? 'false' : 'true',
      state
    });
  }

  const other = basePlan?.otherRegionsConfig;
  if (other?.usdPrice) {
    rows.push({
      packageName, productId, basePlanId, duration,
      region: 'OTHER_REGIONS',
      currency: 'USD',
      price: moneyToPriceString(other.usdPrice),
      newSubscriberAvailability: other.newSubscriberAvailability === false ? 'false' : 'true',
      state
    });
  }
  if (other?.eurPrice) {
    rows.push({
      packageName, productId, basePlanId, duration,
      region: 'OTHER_REGIONS',
      currency: 'EUR',
      price: moneyToPriceString(other.eurPrice),
      newSubscriberAvailability: other.newSubscriberAvailability === false ? 'false' : 'true',
      state
    });
  }

  return rows;
}

function rowsToCsv(rows) {
  const headers = [
    'Package Name',
    'Product ID',
    'Base Plan ID',
    'Duration',
    'Region',
    'Currency',
    'Price',
    'New Subscriber Availability',
    'State'
  ];
  const lines = [headers.join(',')];
  for (const r of rows) {
    lines.push([
      r.packageName,
      r.productId,
      r.basePlanId,
      r.duration,
      r.region,
      r.currency,
      r.price,
      r.newSubscriberAvailability,
      r.state
    ].map(csvEscape).join(','));
  }
  return lines.join('\n') + '\n';
}

async function main() {
  const args = parseArgs(process.argv);

  if (args.help || !args.packageName) {
    showHelp();
    process.exit(args.help ? 0 : 1);
  }

  const packageName = args.packageName;
  const outputPath = args.output || `android-subscription-prices-${packageName}.csv`;

  console.log(`Fetching Google Play subscription prices (all regions) for package: ${packageName}`);

  try {
    const { subscriptions } = await googlePlayClient.getSubscriptions(packageName);

    if (!subscriptions || subscriptions.length === 0) {
      console.log('No subscriptions found for this package.');
      fs.writeFileSync(outputPath, rowsToCsv([]));
      console.log(`Wrote ${outputPath} (header only)`);
      return;
    }

    const rows = [];
    for (const sub of subscriptions) {
      for (const bp of sub.basePlans || []) {
        rows.push(...rowsForBasePlan(packageName, sub, bp));
      }
    }

    fs.writeFileSync(outputPath, rowsToCsv(rows));

    const regionCount = new Set(rows.map(r => r.region)).size;
    console.log(
      `Found ${subscriptions.length} subscription(s); wrote ${rows.length} price rows ` +
      `across ${regionCount} regions.`
    );
    console.log(`Wrote ${outputPath}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    logger.error('Failed to dump Android subscription prices', {
      packageName,
      error: error.message,
      stack: error.stack
    });
    process.exit(1);
  }
}

main();
