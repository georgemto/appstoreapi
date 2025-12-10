require('dotenv').config();
const promotionalOfferService = require('./src/services/promotional-offers');
const logger = require('./src/utils/logger');

/**
 * Script to get promotional offers for a bundle ID
 * Usage: npm run get-promo-offers <bundle-id> [options]
 */
async function getPromotionalOffers() {
  try {
    // Parse command line arguments
    const args = process.argv.slice(2);
    
    if (args.includes('--help') || args.includes('-h') || args.length === 0) {
      showHelp();
      process.exit(0);
    }

    const bundleId = args[0];
    
    if (!bundleId) {
      console.error('❌ Error: Bundle ID is required\n');
      showHelp();
      process.exit(1);
    }

    // Parse options
    const referenceName = getArgValue(args, '--reference');
    const limit = parseInt(getArgValue(args, '--limit') || '200');

    console.log(`🎁 Fetching promotional offers for bundle ID: ${bundleId}\n`);
    if (referenceName) {
      console.log(`📂 Filtering by reference name: ${referenceName}`);
    }
    console.log();

    // Get promotional offers
    const result = await promotionalOfferService.getPromotionalOffersByBundleId(bundleId, {
      referenceName,
      limit
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
      console.log('\nPossible reasons:');
      console.log('  - No promotional offers have been created for this app');
      console.log('  - The reference name filter does not match any subscription groups');
      console.log('  - Subscriptions in this app do not have promotional offers\n');
      process.exit(0);
    }

    // Display promotional offers grouped by subscription
    console.log(`\n📋 Promotional Offers (${result.totalOffers} total):\n`);
    
    let globalIndex = 1;
    result.subscriptions.forEach((subscriptionData) => {
      console.log('─'.repeat(80));
      console.log(`\n📦 Subscription: ${subscriptionData.subscription.name}`);
      console.log(`   Product ID: ${subscriptionData.subscription.productId}`);
      console.log(`   Subscription ID: ${subscriptionData.subscription.id}`);
      console.log(`   Number of Offers: ${subscriptionData.offers.length}\n`);

      subscriptionData.offers.forEach((offer) => {
        console.log(`   ${globalIndex}. ${offer.name}`);
        console.log(`      Offer ID: ${offer.id}`);
        console.log(`      Offer Code: ${offer.offerCode}`);
        console.log(`      Duration: ${offer.duration}`);
        console.log(`      Offer Mode: ${offer.offerMode}`);
        console.log(`      Number of Periods: ${offer.numberOfPeriods}`);
        console.log();
        globalIndex++;
      });
    });
    console.log('═'.repeat(80));

    // Save to file
    const fs = require('fs');
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const filenamePart = referenceName ? `-${referenceName.replace(/\s+/g, '-')}` : '';
    const outputPath = `./promotional-offers-${bundleId}${filenamePart}-${timestamp}.json`;
    
    const outputData = {
      bundleId,
      appName: result.appName,
      referenceName: result.referenceName,
      totalOffers: result.totalOffers,
      subscriptions: result.subscriptions,
      retrievedAt: new Date().toISOString()
    };

    fs.writeFileSync(outputPath, JSON.stringify(outputData, null, 2));
    console.log(`\n💾 Results saved to: ${outputPath}`);

    // Create summary table
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
      console.error('   Your API key does not have permission to access promotional offers');
    } else if (error.statusCode === 404 || error.message.includes('not found')) {
      console.error('\n🔍 Not Found:');
      console.error(`   App with bundle ID "${args[0]}" not found`);
      console.error('\n   Tips:');
      console.error('   - Verify the bundle ID is correct');
      console.error('   - Run: npm run get-apps to see all available apps');
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

function showHelp() {
  console.log(`
🎁 Get Promotional Offers

Lists all promotional offers for subscriptions in a given bundle ID.

Usage:
  npm run get-promo-offers <bundle-id> [options]

Arguments:
  bundle-id           App bundle identifier

Options:
  --reference <name>  Filter by subscription group reference name
  --limit <number>    Maximum number of subscriptions to check (default: 200)
  --help, -h          Show this help message

Examples:
  # Get all promotional offers for an app
  npm run get-promo-offers com.vtech.plus.inapp.ios.test3

  # Filter by reference name
  npm run get-promo-offers com.vtech.plus.inapp.ios.test3 --reference "Group 1"

  # Limit number of subscriptions checked
  npm run get-promo-offers com.vtech.plus.inapp.ios.test3 --limit 50

Output:
  - Console: Formatted list of promotional offers grouped by subscription
  - File: promotional-offers-<bundle-id>-<timestamp>.json

Information Shown:
  - App name and bundle ID
  - Total number of promotional offers
  - Offers grouped by subscription with:
    * Subscription name and product ID
    * Offer name and code
    * Duration and offer mode
    * Number of periods

Related Commands:
  npm run create-promo-offer <subscription-id>    # Create a single offer
  npm run bulk-create-promo                        # Bulk create offers
  npm run delete-promo-offer <offer-id>            # Delete an offer
  npm run get-product-ids <bundle-id>              # List subscriptions
  `);
}

// Run the script
getPromotionalOffers();
