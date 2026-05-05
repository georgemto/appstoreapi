require('dotenv').config();
const promotionalOfferService = require('./src/services/promotional-offers');
const logger = require('./src/utils/logger');

/**
 * Script to get promotional offers (subscriptionPromotionalOffers) for a bundle ID.
 *
 * For subscription offer codes (a separate Apple resource), use get-offer-codes.js.
 *
 * Usage:
 *   npm run get-promotional-offers -- --bundle-id <bundle-id> [options]
 *   npm run get-promotional-offers <bundle-id> [options]   (legacy positional)
 */
async function getPromotionalOffers() {
  try {
    const args = process.argv.slice(2);

    if (args.includes('--help') || args.includes('-h') || args.length === 0) {
      showHelp();
      process.exit(0);
    }

    let bundleId = getArgValue(args, '--bundle-id');
    if (!bundleId) {
      const firstNonFlag = args.find(a => !a.startsWith('-'));
      if (firstNonFlag) bundleId = firstNonFlag;
    }

    if (!bundleId) {
      console.error('❌ Error: bundle ID is required (--bundle-id <id>)\n');
      showHelp();
      process.exit(1);
    }

    const referenceName = getArgValue(args, '--reference');
    const limit = parseInt(getArgValue(args, '--limit') || '200');
    const summaryMode = args.includes('--summary');
    const csvFlagIndex = args.indexOf('--csv');
    const csvEnabled = csvFlagIndex !== -1 || args.some(a => a.startsWith('--csv='));
    let csvOutputPath = null;
    if (csvFlagIndex !== -1) {
      const next = args[csvFlagIndex + 1];
      if (next && !next.startsWith('-')) csvOutputPath = next;
    } else {
      const eq = args.find(a => a.startsWith('--csv='));
      if (eq) csvOutputPath = eq.slice('--csv='.length);
    }

    console.log(`🎁 Fetching promotional offers for bundle ID: ${bundleId}\n`);
    if (referenceName) {
      console.log(`📂 Filtering by reference name: ${referenceName}`);
    }
    console.log();

    const result = await promotionalOfferService.getPromotionalOffersByBundleId(bundleId, {
      referenceName,
      limit,
      includeOfferCodes: false
    });

    console.log('✅ Successfully retrieved promotional offers\n');
    console.log('═'.repeat(80));
    console.log(`📱 App: ${result.appName}`);
    console.log(`   Bundle ID: ${result.bundleId}`);
    if (result.referenceName) {
      console.log(`   Reference Name Filter: ${result.referenceName}`);
    }
    console.log(`   Total Offers: ${result.totalOffers}`);
    console.log('═'.repeat(80));

    if (result.subscriptions.length === 0 || result.totalOffers === 0) {
      console.log('\n⚠️  No promotional offers found');
      console.log('\nIf you are looking for subscription offer codes, use get-offer-codes.js.\n');
      process.exit(0);
    }

    console.log(`\n📋 Promotional Offers (${result.totalOffers} total):\n`);

    let globalIndex = 1;
    result.subscriptions.forEach((subscriptionData) => {
      console.log('─'.repeat(80));
      console.log(`\n📦 Subscription: ${subscriptionData.subscription.name}`);
      console.log(`   Product ID: ${subscriptionData.subscription.productId}`);
      console.log(`   Subscription ID: ${subscriptionData.subscription.id}`);
      console.log(`   Number of Offers: ${subscriptionData.offers.length}\n`);

      const renderOffers = summaryMode
        ? collapseOffers(subscriptionData.offers)
        : subscriptionData.offers;

      renderOffers.forEach((offer) => {
        if (summaryMode) {
          console.log(`   ${globalIndex}. Offer Mode: ${offer.offerMode}`);
          console.log(`      Duration: ${offer.duration}`);
          console.log(`      Number of Periods: ${offer.numberOfPeriods}`);
          console.log(`      Count: ${offer.offerIds.length}`);
          console.log(`      Names: ${offer.names.join(', ')}`);
        } else {
          console.log(`   ${globalIndex}. ${offer.name}`);
          console.log(`      Offer ID: ${offer.id}`);
          console.log(`      Offer Code: ${offer.offerCode}`);
          console.log(`      Duration: ${offer.duration}`);
          console.log(`      Offer Mode: ${offer.offerMode}`);
          console.log(`      Number of Periods: ${offer.numberOfPeriods}`);
        }
        console.log();
        globalIndex++;
      });
    });
    console.log('═'.repeat(80));

    const fs = require('fs');
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const filenamePart = referenceName ? `-${referenceName.replace(/\s+/g, '-')}` : '';
    const summarySuffix = summaryMode ? '-summary' : '';
    const outputPath = `./promotional-offers-${bundleId}${filenamePart}${summarySuffix}-${timestamp}.json`;

    const subscriptionsForOutput = summaryMode
      ? result.subscriptions.map(sub => ({
          subscription: sub.subscription,
          offers: collapseOffers(sub.offers)
        }))
      : result.subscriptions.map(sub => ({
          subscription: sub.subscription,
          offers: sub.offers
        }));

    const outputData = {
      bundleId,
      appName: result.appName,
      referenceName: result.referenceName,
      totalOffers: result.totalOffers,
      summary: summaryMode,
      subscriptions: subscriptionsForOutput,
      retrievedAt: new Date().toISOString()
    };

    fs.writeFileSync(outputPath, JSON.stringify(outputData, null, 2));
    console.log(`\n💾 Results saved to: ${outputPath}`);

    if (csvEnabled) {
      const csvPath = csvOutputPath || outputPath.replace(/\.json$/, '') + '.csv';
      const csvBody = summaryMode ? summaryToCsv(outputData) : offersToCsv(outputData);
      fs.writeFileSync(csvPath, csvBody);
      console.log(`💾 CSV saved to: ${csvPath}`);
    }

    console.log('\n📊 SUMMARY BY SUBSCRIPTION:\n');
    console.log('─'.repeat(80));
    result.subscriptions.forEach((sub, index) => {
      console.log(`${index + 1}. ${sub.subscription.name.padEnd(40)} | ${sub.offers.length} offer(s)`);
    });
    console.log('─'.repeat(80));
    console.log(`Total: ${result.subscriptions.length} subscription(s) with offers`);
    console.log('─'.repeat(80));

  } catch (error) {
    console.error('\n❌ Error:', error.message);

    if (error.statusCode === 401) {
      console.error('\n🔐 Authentication Error: check API credentials in .env');
    } else if (error.statusCode === 403) {
      console.error('\n🚫 Authorization Error: API key lacks permission');
    } else if (error.statusCode === 404 || error.message.includes('not found')) {
      console.error('\n🔍 Not Found: verify the bundle ID is correct');
    }

    logger.error('Failed to get promotional offers', {
      error: error.message,
      stack: error.stack
    });
    process.exit(1);
  }
}

function getArgValue(args, flag) {
  const index = args.indexOf(flag);
  if (index !== -1 && index + 1 < args.length) {
    return args[index + 1];
  }
  return null;
}

function csvEscape(value) {
  if (value === null || value === undefined) return '';
  const str = String(value);
  if (/[",\n\r]/.test(str)) return `"${str.replace(/"/g, '""')}"`;
  return str;
}

function offersToCsv(data) {
  const headers = [
    'Bundle ID',
    'App Name',
    'Subscription Name',
    'Product ID',
    'Subscription ID',
    'Offer ID',
    'Offer Name',
    'Offer Code',
    'Offer Mode',
    'Duration',
    'Number of Periods'
  ];
  const lines = [headers.map(csvEscape).join(',')];
  for (const sub of data.subscriptions || []) {
    for (const offer of sub.offers || []) {
      lines.push([
        data.bundleId,
        data.appName,
        sub.subscription.name,
        sub.subscription.productId,
        sub.subscription.id,
        offer.id,
        offer.name || '',
        offer.offerCode || '',
        offer.offerMode,
        offer.duration,
        offer.numberOfPeriods
      ].map(csvEscape).join(','));
    }
  }
  return lines.join('\n') + '\n';
}

// Collapse promotional offers per subscription by (offerMode, duration, numberOfPeriods).
function collapseOffers(offers) {
  const groups = new Map();
  for (const offer of offers || []) {
    const key = [
      offer.offerMode || '',
      offer.duration || '',
      offer.numberOfPeriods ?? ''
    ].join('|');
    let group = groups.get(key);
    if (!group) {
      group = {
        offerMode: offer.offerMode,
        duration: offer.duration,
        numberOfPeriods: offer.numberOfPeriods,
        offerIds: [],
        names: [],
        offerCodes: []
      };
      groups.set(key, group);
    }
    if (offer.id) group.offerIds.push(offer.id);
    if (offer.name) group.names.push(offer.name);
    if (offer.offerCode) group.offerCodes.push(offer.offerCode);
  }
  return [...groups.values()];
}

function summaryToCsv(data) {
  const headers = [
    'Bundle ID',
    'App Name',
    'Subscription Name',
    'Product ID',
    'Subscription ID',
    'Offer Mode',
    'Duration',
    'Number of Periods',
    'Count',
    'Offer Names',
    'Offer Codes',
    'Offer IDs'
  ];
  const lines = [headers.map(csvEscape).join(',')];
  for (const sub of data.subscriptions || []) {
    for (const offer of sub.offers || []) {
      lines.push([
        data.bundleId,
        data.appName,
        sub.subscription.name,
        sub.subscription.productId,
        sub.subscription.id,
        offer.offerMode,
        offer.duration,
        offer.numberOfPeriods,
        offer.offerIds.length,
        (offer.names || []).join('|'),
        (offer.offerCodes || []).join('|'),
        (offer.offerIds || []).join('|')
      ].map(csvEscape).join(','));
    }
  }
  return lines.join('\n') + '\n';
}

function showHelp() {
  console.log(`
🎁 Get Promotional Offers

Lists subscriptionPromotionalOffers for the given bundle ID.
For subscription offer codes (a separate Apple resource), use:
  npm run get-offer-codes -- --bundle-id <bundle-id>

Usage:
  npm run get-promotional-offers -- --bundle-id <bundle-id> [options]
  npm run get-promotional-offers <bundle-id> [options]    (legacy positional)

Options:
  --bundle-id <id>     App bundle identifier (preferred)
  --reference <name>   Filter by subscription group reference name
  --limit <number>     Maximum number of subscriptions to check (default: 200)
  --csv [file]         Also write a CSV (default: <json-output>.csv)
  --summary            Collapse rows by (offerMode, duration, numberOfPeriods)
                       and list matching offer IDs / names / codes per group.
                       Affects console, JSON, and CSV output.
  --help, -h           Show this help message

Examples:
  npm run get-promotional-offers -- --bundle-id com.example.app
  npm run get-promotional-offers -- --bundle-id com.example.app --csv
  npm run get-promotional-offers -- --bundle-id com.example.app --summary --csv

Output:
  - JSON: promotional-offers-<bundle-id>[-summary]-<timestamp>.json
  - CSV (with --csv): same basename as the JSON. Default mode uses
    "Offer ID"/"Offer IDs" columns; summary mode uses "Offer IDs" (pipe-separated).
    delete-promotional-offers.js consumes either.
  `);
}

getPromotionalOffers();
