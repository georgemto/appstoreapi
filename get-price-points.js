require('dotenv').config();
const promotionalOfferService = require('./src/services/promotional-offers');
const logger = require('./src/utils/logger');

/**
 * Script to get available price points for a subscription
 * Usage: npm run get-price-points <subscription-id> [territory]
 */
async function getPricePoints() {
  try {
    // Parse command line arguments
    const args = process.argv.slice(2);
    
    if (args.includes('--help') || args.includes('-h') || args.length === 0) {
      showHelp();
      process.exit(0);
    }

    const subscriptionId = args[0];
    const territory = args[1]; // Optional territory filter
    
    if (!subscriptionId) {
      console.error('❌ Error: Subscription ID is required\n');
      showHelp();
      process.exit(1);
    }

    console.log('📋 Fetching price points...\n');
    console.log('─'.repeat(80));
    console.log(`Subscription ID: ${subscriptionId}`);
    if (territory) console.log(`Territory Filter: ${territory}`);
    console.log('─'.repeat(80));
    console.log();

    // Get price points
    const pricePoints = await promotionalOfferService.getSubscriptionPricePoints(
      subscriptionId,
      territory
    );

    if (pricePoints.length === 0) {
      console.log('❌ No price points found for this subscription');
      if (territory) {
        console.log(`   (Try without territory filter to see all available price points)`);
      }
      process.exit(1);
    }

    console.log('✅ Price Points Retrieved!\n');
    console.log('─'.repeat(80));

    // Group by territory for better readability
    const byTerritory = {};
    pricePoints.forEach(pp => {
      if (!byTerritory[pp.territory]) {
        byTerritory[pp.territory] = [];
      }
      byTerritory[pp.territory].push(pp);
    });

    // Display price points grouped by territory
    Object.entries(byTerritory).forEach(([territoryCode, points]) => {
      console.log(`\n📍 Territory: ${territoryCode}`);
      console.log('─'.repeat(80));
      
      points.forEach((pp, index) => {
        console.log(`\n  ${index + 1}. Price Point`);
        console.log(`     ID: ${pp.id}`);
        console.log(`     Customer Price: ${pp.customerPrice}`);
        console.log(`     Proceeds: ${pp.proceeds}`);
      });
      
      console.log();
    });

    console.log('─'.repeat(80));
    console.log(`\nTotal: ${pricePoints.length} price point(s) found`);
    console.log(`Territories: ${Object.keys(byTerritory).length}`);
    console.log('─'.repeat(80));

    console.log('\n💡 Usage Tips:');
    console.log('   - Copy a price point ID to use with --price-point parameter');
    console.log('   - Use these IDs when creating PAY_AS_YOU_GO or PAY_UP_FRONT promotional offers');
    console.log('   - FREE_TRIAL offers do not require a price point\n');

    // Save to file
    const fs = require('fs');
    const outputData = {
      subscriptionId,
      territory: territory || 'all',
      pricePoints,
      retrievedAt: new Date().toISOString()
    };

    const outputPath = `./price-points-${subscriptionId.substring(0, 8)}.json`;
    fs.writeFileSync(outputPath, JSON.stringify(outputData, null, 2));
    console.log(`💾 Price points saved to: ${outputPath}\n`);

  } catch (error) {
    console.error('\n❌ Error:', error.message);

    if (error.statusCode === 401) {
      console.error('\n🔐 Authentication Error:');
      console.error('   Please check your App Store Connect API credentials in .env file');
    } else if (error.statusCode === 403) {
      console.error('\n🚫 Authorization Error:');
      console.error('   Your API key does not have permission to access this subscription');
    } else if (error.statusCode === 404 || error.message.includes('not found')) {
      console.error('\n🔍 Not Found:');
      console.error(`   Subscription with ID "${args[0]}" not found`);
    }

    logger.error('Failed to get price points', {
      error: error.message,
      stack: error.stack
    });
    process.exit(1);
  }
}

function showHelp() {
  console.log(`
📋 Get Price Points

Retrieves available price points for a subscription, which can be used when creating
promotional offers with PAY_AS_YOU_GO or PAY_UP_FRONT modes.

Usage:
  npm run get-price-points <subscription-id> [territory]

Arguments:
  subscription-id     The UUID of the subscription
  territory          Optional territory code to filter results (e.g., USA, GBR, CAN)

Options:
  --help, -h         Show this help message

Examples:
  # Get all price points for a subscription
  npm run get-price-points abc123-def456-ghi789

  # Get price points for USA only
  npm run get-price-points abc123-def456-ghi789 USA

  # Get price points for UK
  npm run get-price-points abc123-def456-ghi789 GBR

Notes:
  - Price points represent different pricing tiers available in the App Store
  - Each price point has a customer price (what users pay) and proceeds (what you earn)
  - FREE_TRIAL offers do not need price points
  - PAY_AS_YOU_GO and PAY_UP_FRONT offers require a price point ID
  - Results are saved to a JSON file for reference

Related Commands:
  npm run create-promo-offer <subscription-id> --list-price-points
  npm run create-promo-offer <subscription-id> --price-point <id>
  npm run get-product-ids <bundle-id>     # Get subscription IDs
  `);
}

// Run the script
getPricePoints();
