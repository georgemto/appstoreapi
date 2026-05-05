require('dotenv').config();
const appService = require('./src/services/apps');
const logger = require('./src/utils/logger');

/**
 * Script to get all subscription product IDs for an app by bundle ID
 */
async function getSubscriptionProductIds() {
  try {
    // Parse command line arguments
    const args = process.argv.slice(2);
    const bundleId = args[0];
    const useCache = !args.includes('--no-cache');
    const saveToDb = !args.includes('--no-save');

    if (!bundleId) {
      console.error('❌ Error: Bundle ID is required\n');
      console.log('Usage:');
      console.log('  npm run get-subscription-product-ids <bundle-id> [options]\n');
      console.log('Options:');
      console.log('  --no-cache    Skip database cache, fetch fresh from API');
      console.log('  --no-save     Don\'t save to database\n');
      console.log('Examples:');
      console.log('  npm run get-subscription-product-ids com.vtech.plus.inapp.ios.test3');
      console.log('  npm run get-subscription-product-ids com.vtech.plus.inapp.ios.test3 --no-cache');
      console.log('  npm run get-subscription-product-ids com.example.myapp --no-save\n');
      process.exit(1);
    }

    console.log(`🔍 Fetching subscription product IDs for bundle ID: ${bundleId}`);
    if (useCache) {
      console.log('💾 Cache: Enabled (use --no-cache to force fresh fetch)');
    } else {
      console.log('🔄 Cache: Disabled (fetching fresh from API)');
    }
    console.log();

    // Fetch subscription product IDs
    const result = await appService.getSubscriptionProductIdsByBundleId(bundleId, {
      useCache,
      saveToDb
    });

    const fromCache = !!result.updatedAt;
    console.log(`✅ Successfully retrieved subscription information ${fromCache ? '(from database cache)' : '(from Apple API)'}\n`);
    console.log('─'.repeat(80));
    console.log(`📱 App: ${result.appName}`);
    console.log(`   Bundle ID: ${bundleId}`);
    console.log(`   App ID: ${result.appId}`);
    if (fromCache) {
      console.log(`   Last Updated: ${result.updatedAt}`);
    }
    console.log('─'.repeat(80));
    
    // Display subscription groups
    if (result.subscriptionGroups && result.subscriptionGroups.length > 0) {
      console.log(`\n📂 Subscription Groups: ${result.subscriptionGroups.length}`);
      result.subscriptionGroups.forEach((group, index) => {
        console.log(`   ${index + 1}. ${group.referenceName}`);
      });
    }
    
    console.log(`\n📦 Found ${result.productIds.length} subscription(s)\n`);

    if (result.productIds.length === 0) {
      console.log('⚠️  No subscriptions found for this app');
      console.log('\nPossible reasons:');
      console.log('  - The app has no in-app subscriptions configured');
      console.log('  - Subscriptions are in a different subscription group');
      console.log('  - Your API key does not have permission to view subscriptions\n');
    } else {
      // Display product IDs only
      console.log('🆔 Product IDs:');
      console.log('─'.repeat(80));
      result.productIds.forEach((productId, index) => {
        console.log(`${index + 1}. ${productId}`);
      });
      console.log('─'.repeat(80));

      // Display detailed subscription information
      console.log('\n📋 Detailed Subscription Information:\n');
      result.subscriptions.forEach((sub, index) => {
        console.log(`${index + 1}. ${sub.name || 'Unnamed Subscription'}`);
        console.log(`   Product ID: ${sub.productId}`);
        console.log(`   Subscription ID: ${sub.id}`);
        console.log(`   State: ${sub.state || 'N/A'}`);
        console.log(`   Period: ${sub.subscriptionPeriod || 'N/A'}`);
        console.log(`   Family Sharable: ${sub.familySharable ? 'Yes' : 'No'}`);
        console.log('─'.repeat(80));
      });

      // Save to file
      const fs = require('fs');
      const outputData = {
        bundleId: bundleId,
        appId: result.appId,
        appName: result.appName,
        subscriptionGroups: result.subscriptionGroups,
        productIds: result.productIds,
        subscriptions: result.subscriptions,
        retrievedAt: new Date().toISOString(),
        count: result.productIds.length
      };

      const outputPath = `./subscription-product-ids-${bundleId}.json`;
      fs.writeFileSync(outputPath, JSON.stringify(outputData, null, 2));
      console.log(`\n💾 Full data saved to: ${outputPath}`);

      // Display as comma-separated list for easy copying
      console.log('\n📋 Product IDs (comma-separated for copying):');
      console.log('─'.repeat(80));
      console.log(result.productIds.join(', '));
      console.log('─'.repeat(80));
    }

  } catch (error) {
    console.error('\n❌ Error:', error.message);

    if (error.statusCode === 401) {
      console.error('\n🔐 Authentication Error:');
      console.error('   Please check your App Store Connect API credentials in .env file');
      console.error('   Run: npm run debug-auth');
    } else if (error.statusCode === 403) {
      console.error('\n🚫 Authorization Error:');
      console.error('   Your API key does not have permission to access apps or subscriptions');
    } else if (error.statusCode === 404 || error.message.includes('not found')) {
      console.error('\n🔍 Not Found:');
      console.error(`   App with bundle ID "${args[0]}" not found`);
      console.error('\n   Tips:');
      console.error('   - Verify the bundle ID is correct');
      console.error('   - Check that the app exists in your App Store Connect account');
      console.error('   - Run: npm run get-all-apps to see all available apps');
    }

    logger.error('Failed to retrieve subscription product IDs', {
      error: error.message,
      stack: error.stack
    });
    process.exit(1);
  }
}

// Show help if requested
if (process.argv.includes('--help') || process.argv.includes('-h') || process.argv.length === 2) {
  console.log(`
📱 Get Subscription Product IDs

Retrieves all in-app subscription product IDs for an app given its bundle ID.
Results are cached in SQLite database for faster subsequent access.

Usage:
  npm run get-subscription-product-ids <bundle-id> [options]

Arguments:
  bundle-id       The bundle identifier of the app (e.g., com.example.app)

Options:
  --no-cache      Skip database cache, fetch fresh data from API
  --no-save       Don't save results to database
  --help, -h      Show this help message

Examples:
  npm run get-subscription-product-ids com.vtech.plus.inapp.ios.test3
  npm run get-subscription-product-ids com.vtech.plus.inapp.ios.test3 --no-cache
  npm run get-subscription-product-ids com.example.myapp --no-save

Output:
  - Console: Formatted list of product IDs and subscription details
  - File: subscription-product-ids-<bundle-id>.json
  - Database: Cached in data/subscriptions.db (unless --no-save)

Database Cache:
  - First fetch: Retrieves from Apple API and saves to database
  - Subsequent fetches: Uses cached data from database (faster)
  - Use --no-cache to force fresh fetch from API

Related Commands:
  npm run get-all-apps                     # List all apps with their bundle IDs
  npm run debug-auth                   # Test API authentication
  `);
  process.exit(0);
}

// Run the script
getSubscriptionProductIds();
