require('dotenv').config();
const promotionalOfferService = require('./src/services/promotional-offers');
const logger = require('./src/utils/logger');

/**
 * Script to bulk create promotional offers for all subscriptions in a bundle ID with a given reference name
 * Usage: npm run bulk-create-promotional-offers -- <bundle-id> <reference-name> [options]
 * 
 * ⚠️ CRITICAL: ONLY use bundle ID 'com.vtech.plus.inapp.ios.test3' for testing
 */
async function bulkCreatePromotionalOffers() {
  try {
    // Parse command line arguments
    const args = process.argv.slice(2);
    
    if (args.includes('--help') || args.includes('-h') || args.length < 2) {
      showHelp();
      process.exit(0);
    }

    const bundleId = args[0];
    const referenceName = args[1];

    // ⚠️ SAFETY CHECK: Enforce test bundle ID only
    if (bundleId !== 'com.vtech.plus.inapp.ios.test3') {
      console.error('\n❌ SAFETY ERROR: Invalid bundle ID for testing\n');
      console.error('⚠️  CRITICAL: For testing, you MUST use the test bundle ID:\n');
      console.error('   com.vtech.plus.inapp.ios.test3\n');
      console.error('❌ NEVER use these bundle IDs for testing:');
      console.error('   - com.vtech.plus (production)');
      console.error('   - com.vtech.plus.uat (UAT environment)');
      console.error('   - com.vtech.plus.inapp.test2 (other test)');
      console.error('   - com.vtech.vcare.uat (other app)\n');
      process.exit(1);
    }

    if (!bundleId || !referenceName) {
      console.error('❌ Error: Both bundle ID and reference name are required\n');
      showHelp();
      process.exit(1);
    }

    // Parse options
    const name = getArgValue(args, '--name') || 'Promotional Offer';
    const offerCodePrefix = getArgValue(args, '--prefix') || name.replace(/[^A-Z0-9]/gi, '').substring(0, 10).toUpperCase();
    const duration = getArgValue(args, '--duration') || 'ONE_MONTH';
    const offerMode = getArgValue(args, '--mode') || 'PAY_AS_YOU_GO';
    const numberOfPeriods = parseInt(getArgValue(args, '--periods') || '3');
    const nameMatch = getArgValue(args, '--match');
    const planPeriodArg = getArgValue(args, '--plan-period');
    const planPeriodFilter = planPeriodArg
      ? planPeriodArg.split(',').map(p => p.trim().toUpperCase()).filter(Boolean)
      : null;
    const validPeriods = ['THREE_DAYS', 'ONE_WEEK', 'TWO_WEEKS', 'ONE_MONTH', 'TWO_MONTHS', 'THREE_MONTHS', 'SIX_MONTHS', 'ONE_YEAR'];
    if (planPeriodFilter) {
      const invalid = planPeriodFilter.filter(p => !validPeriods.includes(p));
      if (invalid.length > 0) {
        console.error(`❌ Error: Invalid --plan-period value(s): ${invalid.join(', ')}`);
        console.error(`   Valid values: ${validPeriods.join(', ')}\n`);
        process.exit(1);
      }
    }
    console.log('\n🎁 Bulk Create Promotional Offers\n');
    console.log('─'.repeat(80));
    console.log(`Bundle ID: ${bundleId}`);
    console.log(`Reference Name: ${referenceName === '*' ? '* (ALL GROUPS)' : `${referenceName} (exact match)`}`);
    if (nameMatch) console.log(`Name Filter: "${nameMatch}" (subscriptions must include this, case-insensitive)`);
    if (planPeriodFilter) console.log(`Plan Period Filter: [${planPeriodFilter.join(', ')}]`);
    console.log('─'.repeat(80));
    console.log('\n📋 Offer Template:');
    console.log(`   Name: ${name}`);
    console.log(`   Offer Code Prefix: ${offerCodePrefix}`);
    console.log(`   Duration: ${duration}`);
    console.log(`   Offer Mode: ${offerMode}`);
    console.log(`   Number of Periods: ${numberOfPeriods}`);
    console.log('─'.repeat(80));

    console.log('\n🚀 Starting bulk creation...\n');

    // Create promotional offers
    const offerTemplate = {
      name,
      offerCodePrefix,
      duration,
      offerMode,
      numberOfPeriods
    };
    if (nameMatch) offerTemplate.nameMatch = nameMatch;
    if (planPeriodFilter) offerTemplate.planPeriodFilter = planPeriodFilter;

    const result = await promotionalOfferService.bulkCreatePromotionalOffers(
      bundleId,
      referenceName,
      offerTemplate
    );

    console.log('\n✅ Bulk creation completed!\n');
    console.log('═'.repeat(80));
    console.log('📊 SUMMARY');
    console.log('═'.repeat(80));
    console.log(`App Name: ${result.summary.appName}`);
    console.log(`Bundle ID: ${result.summary.bundleId}`);
    console.log(`Reference Name: ${result.summary.referenceName}`);
    console.log(`Matched Groups: ${result.summary.matchedGroups}`);
    console.log(`Total Subscriptions: ${result.summary.total}`);
    console.log(`\n✅ Succeeded: ${result.summary.succeeded}`);
    console.log(`❌ Failed: ${result.summary.failed}`);
    console.log('═'.repeat(80));

    // Display successful creations
    if (result.created.length > 0) {
      console.log('\n✅ SUCCESSFULLY CREATED OFFERS:\n');
      console.log('─'.repeat(80));
      result.created.forEach((offer, index) => {
        console.log(`${index + 1}. ${offer.subscriptionName}`);
        console.log(`   Product ID: ${offer.productId}`);
        console.log(`   Offer Code: ${offer.offerCode}`);
        console.log(`   Offer ID: ${offer.offerId}`);
        console.log('─'.repeat(80));
      });
    }

    // Display failures
    if (result.failed.length > 0) {
      console.log('\n❌ FAILED OFFERS:\n');
      console.log('─'.repeat(80));
      result.failed.forEach((failure, index) => {
        console.log(`${index + 1}. ${failure.subscriptionName}`);
        console.log(`   Product ID: ${failure.productId}`);
        console.log(`   Error: ${failure.error}`);
        console.log(`   Code: ${failure.code}`);
        console.log('─'.repeat(80));
      });
    }

    // Save to file
    const fs = require('fs');
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const outputPath = `./bulk-promo-offers-${referenceName.replace(/\s+/g, '-')}-${timestamp}.json`;
    
    const outputData = {
      bundleId,
      referenceName,
      offerTemplate,
      summary: result.summary,
      created: result.created,
      failed: result.failed,
      createdAt: new Date().toISOString()
    };

    fs.writeFileSync(outputPath, JSON.stringify(outputData, null, 2));
    console.log(`\n💾 Results saved to: ${outputPath}`);

    // Save operation log for potential rollback
    if (result.created.length > 0) {
      const rollbackPath = `./rollback-${referenceName.replace(/\s+/g, '-')}-${timestamp}.json`;
      const rollbackData = {
        operation: 'bulk_create_promotional_offers',
        bundleId,
        referenceName,
        createdOffers: result.created.map(offer => ({
          offerId: offer.offerId,
          offerCode: offer.offerCode,
          subscriptionId: offer.subscriptionId,
          subscriptionName: offer.subscriptionName
        })),
        createdAt: new Date().toISOString()
      };
      fs.writeFileSync(rollbackPath, JSON.stringify(rollbackData, null, 2));
      console.log(`📝 Rollback log saved to: ${rollbackPath}`);
      console.log(`   Use this file with npm run rollback-promotional-offers to delete these offers`);
    }

    // Exit with appropriate code
    process.exit(result.summary.failed > 0 ? 1 : 0);

  } catch (error) {
    console.error('\n❌ Error:', error.message);

    if (error.statusCode === 401) {
      console.error('\n🔐 Authentication Error:');
      console.error('   Please check your App Store Connect API credentials in .env file');
    } else if (error.statusCode === 403) {
      console.error('\n🚫 Authorization Error:');
      console.error('   Your API key does not have permission to create promotional offers');
    } else if (error.statusCode === 404 || error.message.includes('not found')) {
      console.error('\n🔍 Not Found:');
      console.error(`   No subscription groups found with reference name "${args[1]}" for bundle ID "${args[0]}"`);
      console.error('\n   Tips:');
      console.error('   - Verify the reference name is correct (case-sensitive, exact match)');
      console.error('   - Run: npm run get-subscription-product-ids com.vtech.plus.inapp.ios.test3 to see available groups');
    }

    logger.error('Failed to bulk create promotional offers', {
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

function showHelp() {
  console.log(`
🎁 Bulk Create Promotional Offers

Creates promotional offers for ALL subscriptions in subscription groups that match
the given reference name (exact match only), or all groups if "*" is specified.

⚠️  CRITICAL: ONLY use bundle ID 'com.vtech.plus.inapp.ios.test3' for testing

Usage:
  npm run bulk-create-promotional-offers -- <bundle-id> <reference-name> [options]

Arguments:
  bundle-id           App bundle identifier (must be com.vtech.plus.inapp.ios.test3 for testing)
  reference-name      Subscription group reference name (exact match required)
                      Use "*" to create offers for ALL subscription groups

Options:
  --name <name>       Base offer name (default: "Promotional Offer")
  --prefix <prefix>   Offer code prefix (default: derived from name)
  --duration <dur>    Duration: THREE_DAYS, ONE_WEEK, TWO_WEEKS, ONE_MONTH,
                      TWO_MONTHS, THREE_MONTHS, SIX_MONTHS, ONE_YEAR
                      (default: ONE_MONTH)
  --mode <mode>       Offer mode: PAY_AS_YOU_GO, PAY_UP_FRONT, FREE_TRIAL
                      (default: PAY_AS_YOU_GO)
  --periods <num>     Number of periods (1-12, default: 3)
  --match <substring> Only include subscriptions whose name contains this substring
                      (case-insensitive). Useful for mixed-cadence groups.
  --plan-period <list> Only include subscriptions whose subscriptionPeriod is in this
                      comma-separated list. More reliable than --match when subscriptions
                      aren't named by cadence. Valid values: THREE_DAYS, ONE_WEEK, TWO_WEEKS,
                      ONE_MONTH, TWO_MONTHS, THREE_MONTHS, SIX_MONTHS, ONE_YEAR.
                      Example: --plan-period ONE_MONTH,TWO_MONTHS
  --help, -h          Show this help message

Examples:
  # Create offers for all subscriptions in "Group 1"
  npm run bulk-create-promotional-offers -- com.vtech.plus.inapp.ios.test3 "Group 1"

  # Create offers for ALL groups (use "*")
  npm run bulk-create-promotional-offers -- com.vtech.plus.inapp.ios.test3 "*" --name "Holiday Sale"

  # Create offers with custom name and settings
  npm run bulk-create-promotional-offers -- com.vtech.plus.inapp.ios.test3 "Group 1" --name "Spring Sale" --duration TWO_MONTHS --periods 2

  # Create free trial offers
  npm run bulk-create-promotional-offers -- com.vtech.plus.inapp.ios.test3 "DN GroupA" --name "Free Trial" --mode FREE_TRIAL --periods 1 --duration ONE_WEEK

  # Only create offers for monthly plans in the group
  npm run bulk-create-promotional-offers -- com.vtech.plus.inapp.ios.test3 "Group 1" --plan-period ONE_MONTH --name "Monthly Promo"

  # Apply to annual + 6-month plans only
  npm run bulk-create-promotional-offers -- com.vtech.plus.inapp.ios.test3 "Group 1" --plan-period ONE_YEAR,SIX_MONTHS --name "Long Plan Promo"

How It Works:
  1. Finds subscription groups matching the reference name (or all if "*")
  2. Gets all subscriptions in those groups
  3. Creates a promotional offer for each subscription
  4. Each offer gets a unique code: PREFIX-1, PREFIX-2, etc.
  5. Saves results and rollback log to files

Notes:
  - Reference name must match EXACTLY (case-sensitive), or use "*" for all groups
  - Using "*" creates offers for EVERY subscription in the app
  - Offer codes are auto-generated with sequential numbers
  - If a subscription already has an offer with the same name, it will fail
  - Operation continues even if some offers fail
  - A rollback log is saved for manual cleanup if needed

Output Files:
  - bulk-promo-offers-<reference>-<timestamp>.json  # Full results
  - rollback-<reference>-<timestamp>.json           # For cleanup

Related Commands:
  npm run get-subscription-product-ids com.vtech.plus.inapp.ios.test3  # List subscription groups
  npm run get-promotional-offers com.vtech.plus.inapp.ios.test3 # List existing offers
  npm run rollback-promotional-offers <rollback-file>           # Delete created offers
  `);
}

// Run the script
bulkCreatePromotionalOffers();
