#!/usr/bin/env node

/**
 * Dump Apple App Store subscription prices for ALL territories to CSV.
 *
 * This is the iOS counterpart to get-android-subscription-prices.js. It lists
 * every subscription for a bundle ID, then for each one reads the price schedule
 * from GET /subscriptions/{id}/prices and emits one CSV row per territory showing
 * the price in effect TODAY.
 *
 * Apple returns the data as a JSON:API document: each `subscriptionPrices` entry
 * links to a `territory` (which carries the currency) and a
 * `subscriptionPricePoint` (which carries the customer price). We accumulate the
 * `included` resources across all pages, then join them by relationship id.
 *
 * The endpoint returns a subscription's full price SCHEDULE, not just the current
 * price: a baseline price (no start date) plus any dated price changes (past or
 * future). A price change with a past start date has already taken effect, so the
 * effective price for a territory is the entry with the latest start date that is
 * on or before today (a blank start date is the earliest baseline). This script
 * collapses each territory to that single effective entry.
 *
 * Usage:
 *   node get-apple-subscription-prices.js --bundle-id <bundle-id> [--output <file>]
 */

require('dotenv').config();
const fs = require('fs');
const appService = require('./src/services/apps');
const appStoreClient = require('./src/services/appstore-client');
const logger = require('./src/utils/logger');

// Delay between per-subscription price reads to stay under Apple's rate limit.
// The client itself retries on 429, but pacing avoids the retries entirely.
const REQUEST_DELAY_MS = 250;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function parseArgs(argv) {
  const args = { bundleId: null, output: null, help: false };
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
    }
  }

  return args;
}

function showHelp() {
  console.log(`
Dump Apple App Store subscription prices for ALL territories to CSV

Usage:
  node get-apple-subscription-prices.js --bundle-id <bundle-id> [--output <file>]

Options:
  --bundle-id <id>        App bundle identifier (required, e.g. com.example.app)
  --output, -o <file>     CSV output file path
                          (default: apple-subscription-prices-<bundle-id>.csv)
  --help, -h              Show this help

Output columns:
  Bundle ID, Product ID, Subscription ID, Group, Duration, Territory, Currency,
  Price, Start Date, State
  (One row per product/territory: the price in effect today. Start Date is when
  that price took effect; blank means the original baseline price.)

Examples:
  node get-apple-subscription-prices.js --bundle-id com.example.app
  node get-apple-subscription-prices.js --bundle-id com.example.app -o prices.csv
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

/**
 * Fetch the full price schedule for one subscription, following pagination and
 * accumulating `included` resources so price points / territories referenced on
 * any page can be resolved.
 * @returns {{ prices: Array, included: Array }}
 */
async function fetchSubscriptionPrices(subscriptionId) {
  // Note: sparse fieldsets (fields[subscriptionPrices]) limit BOTH attributes and
  // relationships, so the relationship names must be listed here or the joined
  // territory / price point links are stripped from the response. Apple's
  // subscriptionPrices only expose `startDate` as an attribute (endDate /
  // preserveCurrentPrice are not valid fields on this endpoint).
  const params = appStoreClient.buildParams(
    {},
    ['territory', 'subscriptionPricePoint'],
    {
      subscriptionPrices: ['startDate', 'territory', 'subscriptionPricePoint'],
      subscriptionPricePoints: ['customerPrice'],
      territories: ['currency']
    },
    null,
    200
  );

  const prices = [];
  const included = [];

  let resp = await appStoreClient.get(`/subscriptions/${subscriptionId}/prices`, params);
  while (resp && resp.data) {
    prices.push(...resp.data);
    if (Array.isArray(resp.included)) included.push(...resp.included);
    const nextUrl = resp.links?.next;
    if (!nextUrl) break;
    resp = await appStoreClient.getNextPage(nextUrl);
  }

  return { prices, included };
}

// A blank/absent start date is the baseline price; treat it as the earliest
// possible date so any real dated change sorts after it.
const BASELINE_DATE = '0000-00-00';

/**
 * From a territory's schedule entries, pick the one in effect on `today`: the
 * latest start date that is <= today (baseline counts as earliest). If every
 * entry is future-dated (nothing effective yet), fall back to the soonest one so
 * the territory still gets a row.
 */
function pickEffective(entries, today) {
  let best = null;
  for (const e of entries) {
    const eff = e.startDate || BASELINE_DATE;
    if (eff <= today && (!best || (best.startDate || BASELINE_DATE) <= eff)) {
      best = e;
    }
  }
  if (!best) {
    best = entries
      .slice()
      .sort((a, b) => (a.startDate || '').localeCompare(b.startDate || ''))[0];
  }
  return best;
}

/**
 * Build rows for one subscription by joining subscriptionPrices to their
 * territory (currency) and price point (customer price), then collapsing each
 * territory's schedule to the single price in effect on `today`.
 */
function rowsForSubscription(bundleId, sub, groupName, prices, included, today) {
  const pricePointById = new Map();
  const territoryById = new Map();
  for (const item of included) {
    if (item.type === 'subscriptionPricePoints') {
      pricePointById.set(item.id, item.attributes?.customerPrice ?? null);
    } else if (item.type === 'territories') {
      territoryById.set(item.id, item.attributes?.currency ?? null);
    }
  }

  // Group all schedule entries by territory.
  const byTerritory = new Map();
  for (const price of prices) {
    const territory = price.relationships?.territory?.data?.id || null;
    const pricePointId = price.relationships?.subscriptionPricePoint?.data?.id || null;
    const entry = {
      territory,
      currency: territory ? territoryById.get(territory) ?? null : null,
      price: pricePointId ? pricePointById.get(pricePointId) ?? null : null,
      startDate: price.attributes?.startDate || null
    };
    if (!byTerritory.has(territory)) byTerritory.set(territory, []);
    byTerritory.get(territory).push(entry);
  }

  const rows = [];
  for (const [territory, entries] of byTerritory) {
    const eff = pickEffective(entries, today);
    rows.push({
      bundleId,
      productId: sub.productId,
      subscriptionId: sub.id,
      group: groupName,
      duration: sub.subscriptionPeriod || null,
      territory,
      currency: eff.currency,
      price: eff.price,
      startDate: eff.startDate,
      state: sub.state || null
    });
  }

  rows.sort((a, b) => (a.territory || '').localeCompare(b.territory || ''));
  return rows;
}

function rowsToCsv(rows) {
  const headers = [
    'Bundle ID',
    'Product ID',
    'Subscription ID',
    'Group',
    'Duration',
    'Territory',
    'Currency',
    'Price',
    'Start Date',
    'State'
  ];
  const lines = [headers.join(',')];
  for (const r of rows) {
    lines.push([
      r.bundleId,
      r.productId,
      r.subscriptionId,
      r.group,
      r.duration,
      r.territory,
      r.currency,
      r.price,
      r.startDate,
      r.state
    ].map(csvEscape).join(','));
  }
  return lines.join('\n') + '\n';
}

async function main() {
  const args = parseArgs(process.argv);

  if (args.help || !args.bundleId) {
    showHelp();
    process.exit(args.help ? 0 : 1);
  }

  const bundleId = args.bundleId;
  const outputPath = args.output || `apple-subscription-prices-${bundleId}.csv`;

  console.log(`Fetching App Store subscription prices (all territories) for bundle ID: ${bundleId}`);

  try {
    const result = await appService.getSubscriptionProductIdsByBundleId(bundleId, {
      useCache: false,
      saveToDb: false
    });

    const subscriptions = result.subscriptions || [];
    if (subscriptions.length === 0) {
      console.log('No subscriptions found for this bundle ID.');
      fs.writeFileSync(outputPath, rowsToCsv([]));
      console.log(`Wrote ${outputPath} (header only)`);
      return;
    }

    const groupNameById = new Map(
      (result.subscriptionGroups || []).map(g => [g.id, g.referenceName || ''])
    );

    const today = new Date().toISOString().slice(0, 10);

    const allRows = [];
    let processed = 0;
    for (const sub of subscriptions) {
      if (processed > 0) await sleep(REQUEST_DELAY_MS);
      processed++;

      process.stdout.write(`  [${processed}/${subscriptions.length}] ${sub.productId} ... `);
      try {
        const { prices, included } = await fetchSubscriptionPrices(sub.id);
        const groupName = groupNameById.get(sub.groupId) || '';
        const rows = rowsForSubscription(bundleId, sub, groupName, prices, included, today);
        allRows.push(...rows);
        console.log(`${rows.length} territory prices`);
      } catch (error) {
        console.log(`ERROR: ${error.message}`);
        logger.warn('Failed to fetch prices for subscription', {
          productId: sub.productId,
          subscriptionId: sub.id,
          error: error.message
        });
      }
    }

    fs.writeFileSync(outputPath, rowsToCsv(allRows));

    const territoryCount = new Set(allRows.map(r => r.territory)).size;
    console.log(
      `\nFound ${subscriptions.length} subscription(s); wrote ${allRows.length} price rows ` +
      `across ${territoryCount} territories.`
    );
    console.log(`Wrote ${outputPath}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    logger.error('Failed to dump Apple subscription prices', {
      bundleId,
      error: error.message,
      stack: error.stack
    });
    process.exit(1);
  }
}

main();
