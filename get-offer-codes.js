require('dotenv').config();
const promotionalOfferService = require('./src/services/promotional-offers');
const logger = require('./src/utils/logger');

/**
 * Script to get subscription offer codes (subscriptionOfferCodes) for a bundle ID.
 *
 * Subscription offer codes are a distinct App Store Connect resource from
 * promotional offers. For promotional offers, use get-promotional-offers.js.
 *
 * Note on deletion: Apple does NOT support DELETE on subscriptionOfferCodes.
 * delete-promotional-offers.js deactivates them via PATCH active:false instead.
 *
 * Usage:
 *   npm run get-offer-codes -- --bundle-id <bundle-id> [options]
 */
async function getOfferCodes() {
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
    const activeFilter = getActiveFilter(args);
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

    console.log(`🎟  Fetching offer codes for bundle ID: ${bundleId}\n`);
    if (referenceName) {
      console.log(`📂 Filtering by reference name: ${referenceName}`);
    }
    if (activeFilter !== null) {
      console.log(`🔎 Filter: active=${activeFilter}`);
    }
    console.log();

    // Reuse getPromotionalOffersByBundleId with includeOfferCodes:true and
    // discard its offers[]; we want offer codes only here.
    const result = await promotionalOfferService.getPromotionalOffersByBundleId(bundleId, {
      referenceName,
      limit,
      includeOfferCodes: true
    });

    // Apply optional active filter and drop subscriptions with no codes left.
    const subscriptions = [];
    let totalOfferCodes = 0;
    for (const sub of result.subscriptions) {
      let codes = sub.offerCodes || [];
      if (activeFilter !== null) {
        codes = codes.filter(c => c.active === activeFilter);
      }
      if (codes.length > 0) {
        subscriptions.push({ subscription: sub.subscription, offerCodes: codes });
        totalOfferCodes += codes.length;
      }
    }

    console.log('✅ Successfully retrieved offer codes\n');
    console.log('═'.repeat(80));
    console.log(`📱 App: ${result.appName}`);
    console.log(`   Bundle ID: ${result.bundleId}`);
    if (result.referenceName) {
      console.log(`   Reference Name Filter: ${result.referenceName}`);
    }
    console.log(`   Total Offer Codes: ${totalOfferCodes}`);
    console.log('═'.repeat(80));

    if (subscriptions.length === 0 || totalOfferCodes === 0) {
      console.log('\n⚠️  No offer codes found');
      console.log('\nIf you are looking for promotional offers, use get-promotional-offers.js.\n');
      process.exit(0);
    }

    console.log(`\n📋 Offer Codes (${totalOfferCodes} total):\n`);

    let globalIndex = 1;
    subscriptions.forEach((subscriptionData) => {
      console.log('─'.repeat(80));
      console.log(`\n📦 Subscription: ${subscriptionData.subscription.name}`);
      console.log(`   Product ID: ${subscriptionData.subscription.productId}`);
      console.log(`   Subscription ID: ${subscriptionData.subscription.id}`);
      console.log(`   Number of Offer Codes: ${subscriptionData.offerCodes.length}\n`);

      const renderCodes = summaryMode
        ? collapseOfferCodes(subscriptionData.offerCodes)
        : subscriptionData.offerCodes;

      renderCodes.forEach((code) => {
        if (summaryMode) {
          console.log(`   ${globalIndex}. Offer Mode: ${code.offerMode}`);
          console.log(`      Duration: ${code.duration}`);
          console.log(`      Number of Periods: ${code.numberOfPeriods}`);
          console.log(`      Count: ${code.offerCodeIds.length}`);
          console.log(`      Names: ${code.names.join(', ')}`);
          console.log(`      Active: ${code.activeBreakdown}`);
        } else {
          console.log(`   ${globalIndex}. ${code.name}`);
          console.log(`      Offer Code ID: ${code.id}`);
          console.log(`      Offer Mode: ${code.offerMode}`);
          console.log(`      Duration: ${code.duration}`);
          console.log(`      Number of Periods: ${code.numberOfPeriods}`);
          console.log(`      Active: ${code.active}`);
          console.log(`      Total Number of Codes: ${code.totalNumberOfCodes}`);
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
    const outputPath = `./offer-codes-${bundleId}${filenamePart}${summarySuffix}-${timestamp}.json`;

    const subscriptionsForOutput = summaryMode
      ? subscriptions.map(sub => ({
          subscription: sub.subscription,
          offerCodes: collapseOfferCodes(sub.offerCodes)
        }))
      : subscriptions;

    const outputData = {
      bundleId,
      appName: result.appName,
      referenceName: result.referenceName,
      activeFilter,
      totalOfferCodes,
      summary: summaryMode,
      subscriptions: subscriptionsForOutput,
      retrievedAt: new Date().toISOString()
    };

    fs.writeFileSync(outputPath, JSON.stringify(outputData, null, 2));
    console.log(`\n💾 Results saved to: ${outputPath}`);

    if (csvEnabled) {
      const csvPath = csvOutputPath || outputPath.replace(/\.json$/, '') + '.csv';
      const csvBody = summaryMode ? summaryToCsv(outputData) : codesToCsv(outputData);
      fs.writeFileSync(csvPath, csvBody);
      console.log(`💾 CSV saved to: ${csvPath}`);
    }

    console.log('\n📊 SUMMARY BY SUBSCRIPTION:\n');
    console.log('─'.repeat(80));
    subscriptions.forEach((sub, index) => {
      console.log(`${index + 1}. ${sub.subscription.name.padEnd(40)} | ${sub.offerCodes.length} code(s)`);
    });
    console.log('─'.repeat(80));
    console.log(`Total: ${subscriptions.length} subscription(s) with offer codes`);
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

    logger.error('Failed to get offer codes', {
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

// Parse mutually-exclusive --active-only / --inactive-only flags into a
// strict boolean, or null when neither is set (no filter).
function getActiveFilter(args) {
  const activeOnly = args.includes('--active-only');
  const inactiveOnly = args.includes('--inactive-only');
  if (activeOnly && inactiveOnly) {
    throw new Error('Cannot use --active-only and --inactive-only together');
  }
  if (activeOnly) return true;
  if (inactiveOnly) return false;
  return null;
}

function csvEscape(value) {
  if (value === null || value === undefined) return '';
  const str = String(value);
  if (/[",\n\r]/.test(str)) return `"${str.replace(/"/g, '""')}"`;
  return str;
}

function codesToCsv(data) {
  const headers = [
    'Bundle ID',
    'App Name',
    'Subscription Name',
    'Product ID',
    'Subscription ID',
    'Offer Code ID',
    'Offer Code Name',
    'Offer Mode',
    'Duration',
    'Number of Periods',
    'Active',
    'Total Number of Codes'
  ];
  const lines = [headers.map(csvEscape).join(',')];
  for (const sub of data.subscriptions || []) {
    for (const code of sub.offerCodes || []) {
      lines.push([
        data.bundleId,
        data.appName,
        sub.subscription.name,
        sub.subscription.productId,
        sub.subscription.id,
        code.id,
        code.name || '',
        code.offerMode,
        code.duration,
        code.numberOfPeriods,
        code.active,
        code.totalNumberOfCodes ?? ''
      ].map(csvEscape).join(','));
    }
  }
  return lines.join('\n') + '\n';
}

// Collapse offer codes per subscription by (offerMode, duration, numberOfPeriods).
// Tracks an active/inactive breakdown since the "active" flag is the most
// consequential per-code attribute.
function collapseOfferCodes(codes) {
  const groups = new Map();
  for (const code of codes || []) {
    const key = [code.offerMode || '', code.duration || '', code.numberOfPeriods ?? ''].join('|');
    let group = groups.get(key);
    if (!group) {
      group = {
        offerMode: code.offerMode,
        duration: code.duration,
        numberOfPeriods: code.numberOfPeriods,
        offerCodeIds: [],
        names: [],
        activeCount: 0,
        inactiveCount: 0
      };
      groups.set(key, group);
    }
    if (code.id) group.offerCodeIds.push(code.id);
    if (code.name) group.names.push(code.name);
    if (code.active === true) group.activeCount++;
    else if (code.active === false) group.inactiveCount++;
  }
  for (const g of groups.values()) {
    g.activeBreakdown = `active=${g.activeCount}, inactive=${g.inactiveCount}`;
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
    'Names',
    'Active Breakdown',
    'Offer Code IDs'
  ];
  const lines = [headers.map(csvEscape).join(',')];
  for (const sub of data.subscriptions || []) {
    for (const code of sub.offerCodes || []) {
      lines.push([
        data.bundleId,
        data.appName,
        sub.subscription.name,
        sub.subscription.productId,
        sub.subscription.id,
        code.offerMode,
        code.duration,
        code.numberOfPeriods,
        code.offerCodeIds.length,
        (code.names || []).join('|'),
        code.activeBreakdown || '',
        (code.offerCodeIds || []).join('|')
      ].map(csvEscape).join(','));
    }
  }
  return lines.join('\n') + '\n';
}

function showHelp() {
  console.log(`
🎟  Get Subscription Offer Codes

Lists subscriptionOfferCodes for the given bundle ID. These are a distinct
App Store Connect resource from promotional offers — for promotional offers,
use get-promotional-offers.js.

Usage:
  npm run get-offer-codes -- --bundle-id <bundle-id> [options]

Options:
  --bundle-id <id>     App bundle identifier (required)
  --reference <name>   Filter by subscription group reference name
  --limit <number>     Maximum number of subscriptions to check (default: 200)
  --active-only        Only include offer codes with active=true
  --inactive-only      Only include offer codes with active=false
  --csv [file]         Also write a CSV (default: <json-output>.csv)
  --summary            Collapse rows by (offerMode, duration, numberOfPeriods)
                       and report an active/inactive breakdown per group.
  --help, -h           Show this help

Examples:
  npm run get-offer-codes -- --bundle-id com.example.app
  npm run get-offer-codes -- --bundle-id com.example.app --csv
  npm run get-offer-codes -- --bundle-id com.example.app --active-only --summary --csv

Output:
  - JSON: offer-codes-<bundle-id>[-summary]-<timestamp>.json
  - CSV: default mode uses "Offer Code ID" column; summary mode uses
    "Offer Code IDs" (pipe-separated). delete-promotional-offers.js
    consumes either as deactivation targets (PATCH active:false).

Note on deletion:
  Apple does NOT support DELETE on subscriptionOfferCodes. Use:
    node delete-promotional-offers.js --from-csv <this-csv> --confirm
  which will deactivate the codes (PATCH active:false) so they cannot be redeemed.
  `);
}

getOfferCodes();
