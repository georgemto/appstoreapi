require('dotenv').config();
const introductoryOfferService = require('./src/services/introductory-offers');
const logger = require('./src/utils/logger');

/**
 * Script to get introductory offers (including free trials) for a bundle ID
 * Usage: npm run get-introductory-offers -- --bundle-id <bundle-id> [options]
 */
async function getIntroductoryOffers() {
  try {
    const args = process.argv.slice(2);

    if (args.includes('--help') || args.includes('-h') || args.length === 0) {
      showHelp();
      process.exit(0);
    }

    const bundleId = getArgValue(args, '--bundle-id');

    if (!bundleId) {
      console.error('❌ Error: --bundle-id is required\n');
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

    console.log(`🎁 Fetching introductory offers for bundle ID: ${bundleId}\n`);
    if (referenceName) {
      console.log(`📂 Filtering by reference name: ${referenceName}`);
    }
    console.log();

    const result = await introductoryOfferService.getIntroductoryOffersByBundleId(bundleId, {
      referenceName,
      limit
    });

    console.log('✅ Successfully retrieved introductory offers\n');
    console.log('═'.repeat(80));
    console.log(`📱 App: ${result.appName}`);
    console.log(`   Bundle ID: ${result.bundleId}`);
    if (result.referenceName) {
      console.log(`   Reference Name Filter: ${result.referenceName}`);
    }
    console.log(`   Total Offers: ${result.totalOffers}`);
    console.log('═'.repeat(80));

    if (result.subscriptions.length === 0 || result.totalOffers === 0) {
      console.log('\n⚠️  No introductory offers found');
      console.log('\nPossible reasons:');
      console.log('  - No introductory offers have been created for this app');
      console.log('  - The reference name filter does not match any subscription groups');
      console.log('  - Subscriptions in this app do not have introductory offers');
      console.log('  - Free-trial offers may be configured as promotional offers — try: npm run get-promotional-offers\n');
      process.exit(0);
    }

    console.log(`\n📋 Introductory Offers (${result.totalOffers} total):\n`);

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
          console.log(`      Start Date: ${offer.startDate || '(none)'}`);
          console.log(`      End Date: ${offer.endDate || '(none)'}`);
          console.log(`      Territories (${offer.territories.length}): ${offer.territories.join(', ')}`);
        } else {
          console.log(`   ${globalIndex}. Offer ID: ${offer.id}`);
          console.log(`      Territory: ${offer.territory || '(unknown)'}`);
          console.log(`      Offer Mode: ${offer.offerMode}`);
          console.log(`      Duration: ${offer.duration}`);
          console.log(`      Number of Periods: ${offer.numberOfPeriods}`);
          console.log(`      Start Date: ${offer.startDate || '(none)'}`);
          console.log(`      End Date: ${offer.endDate || '(none)'}`);
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
    const outputPath = `./introductory-offers-${bundleId}${filenamePart}${summarySuffix}-${timestamp}.json`;

    const subscriptionsForOutput = summaryMode
      ? result.subscriptions.map(sub => ({
          subscription: sub.subscription,
          offers: collapseOffers(sub.offers)
        }))
      : result.subscriptions;

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
      console.error('\n🔐 Authentication Error:');
      console.error('   Please check your App Store Connect API credentials in .env file');
    } else if (error.statusCode === 403) {
      console.error('\n🚫 Authorization Error:');
      console.error('   Your API key does not have permission to access introductory offers');
    } else if (error.statusCode === 404 || error.message.includes('not found')) {
      console.error('\n🔍 Not Found:');
      console.error(`   App with bundle ID "${getArgValue(process.argv.slice(2), '--bundle-id')}" not found`);
      console.error('\n   Tips:');
      console.error('   - Verify the bundle ID is correct');
      console.error('   - Run: npm run get-all-apps to see all available apps');
    }

    logger.error('Failed to get introductory offers', {
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
    'Territory',
    'Offer Mode',
    'Duration',
    'Number of Periods',
    'Start Date',
    'End Date'
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
        offer.territory || '',
        offer.offerMode,
        offer.duration,
        offer.numberOfPeriods,
        offer.startDate || '',
        offer.endDate || ''
      ].map(csvEscape).join(','));
    }
  }
  return lines.join('\n') + '\n';
}

// Collapse per-territory offer rows into one logical row per
// (offerMode, duration, numberOfPeriods, startDate, endDate) tuple,
// with the matching territories listed. Useful for human-readable
// review — NOT a faithful representation of the underlying API
// resources (each per-territory row is a distinct addressable offer).
function collapseOffers(offers) {
  const groups = new Map();
  for (const offer of offers || []) {
    const key = [
      offer.offerMode || '',
      offer.duration || '',
      offer.numberOfPeriods ?? '',
      offer.startDate || '',
      offer.endDate || ''
    ].join('|');
    let group = groups.get(key);
    if (!group) {
      group = {
        offerMode: offer.offerMode,
        duration: offer.duration,
        numberOfPeriods: offer.numberOfPeriods,
        startDate: offer.startDate,
        endDate: offer.endDate,
        territories: [],
        offerIds: []
      };
      groups.set(key, group);
    }
    if (offer.territory) group.territories.push(offer.territory);
    if (offer.id) group.offerIds.push(offer.id);
  }
  for (const group of groups.values()) {
    group.territories.sort();
    group.territoryCount = group.territories.length;
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
    'Start Date',
    'End Date',
    'Territory Count',
    'Territories',
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
        offer.startDate || '',
        offer.endDate || '',
        offer.territoryCount,
        offer.territories.join('|'),
        (offer.offerIds || []).join('|')
      ].map(csvEscape).join(','));
    }
  }
  return lines.join('\n') + '\n';
}

function showHelp() {
  console.log(`
🎁 Get Introductory Offers

Lists all introductory offers (including free trials) for subscriptions in a given bundle ID.

Introductory offers are a separate App Store Connect resource from promotional offers.
Free-trial offers are most commonly configured as introductory offers. If you don't see
a free trial here, try: npm run get-promotional-offers

Usage:
  npm run get-introductory-offers -- --bundle-id <bundle-id> [options]

Options:
  --bundle-id <id>    App bundle identifier (required)
  --reference <name>  Filter by subscription group reference name
  --limit <number>    Maximum number of subscriptions to check (default: 200)
  --csv [file]        Also write a CSV (default: <json-output>.csv)
  --summary           Collapse per-territory rows into one row per logical offer,
                      listing the territories it covers. Affects console, JSON, and CSV.
  --help, -h          Show this help message

Examples:
  # Get all introductory offers for an app
  npm run get-introductory-offers -- --bundle-id com.vtech.plus.inapp.ios.test3

  # Filter by reference name
  npm run get-introductory-offers -- --bundle-id com.vtech.plus.inapp.ios.test3 --reference "Group 1"

  # Limit number of subscriptions checked
  npm run get-introductory-offers -- --bundle-id com.vtech.plus.inapp.ios.test3 --limit 50

  # Also export results as CSV
  npm run get-introductory-offers -- --bundle-id com.vtech.plus.inapp.ios.test3 --csv

  # Write CSV to a specific path
  npm run get-introductory-offers -- --bundle-id com.vtech.plus.inapp.ios.test3 --csv offers.csv

  # Collapse per-territory rows into one row per logical offer
  npm run get-introductory-offers -- --bundle-id com.vtech.plus.inapp.ios.test3 --summary --csv

Output:
  - Console: Formatted list of introductory offers grouped by subscription
  - File: introductory-offers-<bundle-id>-<timestamp>.json

Information Shown:
  - App name and bundle ID
  - Total number of introductory offers
  - Offers grouped by subscription with:
    * Subscription name and product ID
    * Offer ID, mode (FREE_TRIAL / PAY_AS_YOU_GO / PAY_UP_FRONT)
    * Duration and number of periods
    * Start and end dates (territory-specific)

Related Commands:
  npm run get-promotional-offers <bundle-id>             # List promotional offers (counterpart)
  npm run get-subscription-product-ids <bundle-id>              # List subscriptions
  `);
}

getIntroductoryOffers();
