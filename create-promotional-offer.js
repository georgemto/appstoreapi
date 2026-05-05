require('dotenv').config();
const promotionalOfferService = require('./src/services/promotional-offers');
const logger = require('./src/utils/logger');

/**
 * Script to create a promotional offer for a subscription
 * Usage: npm run create-promotional-offer <subscription-id> [options]
 */
async function createPromotionalOffer() {
  try {
    // Parse command line arguments
    const args = process.argv.slice(2);
    
    if (args.includes('--help') || args.includes('-h') || args.length === 0) {
      showHelp();
      process.exit(0);
    }

    const subscriptionId = args[0];
    
    if (!subscriptionId) {
      console.error('❌ Error: Subscription ID is required\n');
      showHelp();
      process.exit(1);
    }

    // Parse options
    const name = getArgValue(args, '--name') || 'Special Promotional Offer';
    const offerCode = getArgValue(args, '--code');
    const offerCodePrefix = getArgValue(args, '--prefix');
    const duration = getArgValue(args, '--duration') || 'ONE_MONTH';
    const offerMode = getArgValue(args, '--mode') || 'FREE_TRIAL';
    const numberOfPeriods = parseInt(getArgValue(args, '--periods') || '3');
    const pricePointId = getArgValue(args, '--price-point');
    const territoriesArg = getArgValue(args, '--territories');
    const listPricePoints = args.includes('--list-price-points');

    // If user wants to list price points, show them and exit
    if (listPricePoints) {
      console.log('📋 Fetching ALL available price points...\n');
      const pricePoints = await promotionalOfferService.getAllAvailablePricePoints(subscriptionId);
      
      if (pricePoints.length === 0) {
        console.log('❌ No price points found for this subscription');
        process.exit(1);
      }

      console.log('─'.repeat(80));
      console.log('Available Price Points:\n');
      
      // Group by territory
      const byTerritory = {};
      pricePoints.forEach(pp => {
        if (!byTerritory[pp.territory]) {
          byTerritory[pp.territory] = [];
        }
        byTerritory[pp.territory].push(pp);
      });

      Object.entries(byTerritory).forEach(([territory, points]) => {
        console.log(`Territory: ${territory}`);
        points.forEach(pp => {
          const activeIndicator = pp.isActive ? ' ⭐ (ACTIVE)' : '';
          console.log(`  ID: ${pp.id}${activeIndicator}`);
          console.log(`  Customer Price: ${pp.customerPrice}`);
          console.log(`  Proceeds: ${pp.proceeds}`);
          console.log();
        });
      });
      
      console.log('─'.repeat(80));
      console.log(`\nTotal: ${pricePoints.length} price points available\n`);
      console.log('💡 ⭐ marks currently active prices');
      console.log('💡 You can use ANY price point shown (not just active ones) for promotional offers');
      console.log('💡 Use --price-point <id> to specify a price point for PAY_AS_YOU_GO or PAY_UP_FRONT offers');
      process.exit(0);
    }

    console.log('🎁 Creating promotional offer...\n');
    console.log('─'.repeat(80));
    console.log(`Subscription ID: ${subscriptionId}`);
    console.log(`Offer Name: ${name}`);
    console.log(`Offer Code: ${offerCode || 'Auto-generated'}`);
    if (offerCodePrefix) console.log(`Offer Code Prefix: ${offerCodePrefix}`);
    console.log(`Duration: ${duration}`);
    console.log(`Offer Mode: ${offerMode}`);
    console.log(`Number of Periods: ${numberOfPeriods}`);
    if (pricePointId) console.log(`Price Point ID: ${pricePointId}`);
    if (territoriesArg) console.log(`Territories: ${territoriesArg}`);
    console.log('─'.repeat(80));
    console.log();

    // Create promotional offer
    const offerData = {
      name,
      duration,
      offerMode,
      numberOfPeriods
    };

    if (offerCode) {
      offerData.offerCode = offerCode;
    } else if (offerCodePrefix) {
      offerData.offerCodePrefix = offerCodePrefix;
    }

    if (pricePointId) {
      offerData.pricePoints = pricePointId;
    }

    if (territoriesArg) {
      // Parse territories as comma-separated list
      offerData.territories = territoriesArg.split(',').map(t => t.trim());
    }

    const result = await promotionalOfferService.createPromotionalOffer(subscriptionId, offerData);

    console.log('✅ Successfully created promotional offer!\n');
    console.log('─'.repeat(80));
    console.log(`Offer ID: ${result.data.id}`);
    console.log(`Offer Name: ${result.data.attributes.name}`);
    console.log(`Offer Code: ${result.data.attributes.offerCode}`);
    console.log(`Duration: ${result.data.attributes.duration}`);
    console.log(`Offer Mode: ${result.data.attributes.offerMode}`);
    console.log(`Number of Periods: ${result.data.attributes.numberOfPeriods}`);
    console.log('─'.repeat(80));

    // Save to file
    const fs = require('fs');
    const outputData = {
      offerId: result.data.id,
      subscriptionId: subscriptionId,
      offer: result.data.attributes,
      createdAt: new Date().toISOString()
    };

    const outputPath = `./promotional-offer-${result.data.attributes.offerCode}.json`;
    fs.writeFileSync(outputPath, JSON.stringify(outputData, null, 2));
    console.log(`\n💾 Offer details saved to: ${outputPath}`);

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
      console.error(`   Subscription with ID "${args[0]}" not found`);
    } else if (error.message.includes('already exists')) {
      console.error('\n⚠️  Duplicate Error:');
      console.error('   A promotional offer with this name or code already exists for this subscription');
    } else if (error.message.includes('validation') || error.message.includes('invalid')) {
      console.error('\n⚠️  Validation Error:');
      console.error('   Please check your input parameters');
    }

    logger.error('Failed to create promotional offer', {
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
🎁 Create Promotional Offer

Creates a promotional offer for a specific subscription.

Usage:
  npm run create-promotional-offer <subscription-id> [options]

Arguments:
  subscription-id     The UUID of the subscription

Options:
  --name <name>       Offer name (default: "Special Promotional Offer")
  --code <code>       Custom offer code (3-25 uppercase alphanumeric)
  --prefix <prefix>   Offer code prefix for auto-generation
  --duration <dur>    Duration: THREE_DAYS, ONE_WEEK, TWO_WEEKS, ONE_MONTH,
                      TWO_MONTHS, THREE_MONTHS, SIX_MONTHS, ONE_YEAR
                      (default: ONE_MONTH)
  --mode <mode>       Offer mode: PAY_AS_YOU_GO, PAY_UP_FRONT, FREE_TRIAL
                      (default: FREE_TRIAL)
  --periods <num>     Number of periods (1-12, default: 3)
  --price-point <id>  Price point ID (required for PAY_AS_YOU_GO and PAY_UP_FRONT)
  --territories <ids> Comma-separated territory codes (e.g., "USA" or "USA,GBR,CAN")
                      If not specified, uses all available territories
  --list-price-points List available price points for this subscription
  --help, -h          Show this help message

Examples:
  # List available price points for a subscription
  npm run create-promotional-offer abc123-def456-ghi789 --list-price-points

  # Create a free trial offer (no price point needed)
  npm run create-promotional-offer abc123-def456-ghi789 --name "Free Trial" --mode FREE_TRIAL --periods 1 --duration ONE_WEEK

  # Create a discounted offer with specific price point (USA only)
  npm run create-promotional-offer abc123-def456-ghi789 --name "50% Off" --mode PAY_AS_YOU_GO --price-point "price-point-id-here" --territories USA
  
  # ✨ NEW: Create a discounted offer for MULTIPLE territories (auto-converts price tier)
  npm run create-promotional-offer abc123-def456-ghi789 --name "Global 50% Off" --mode PAY_AS_YOU_GO --price-point "usa-price-point-id" --territories USA,GBR,CAN,AUS

  # Create with custom name and duration
  npm run create-promotional-offer abc123-def456-ghi789 --name "Spring Sale" --duration ONE_MONTH --mode FREE_TRIAL

  # Create with custom offer code
  npm run create-promotional-offer abc123-def456-ghi789 --name "Summer Sale" --code SUMMER2024 --mode FREE_TRIAL

  # Create with custom prefix for auto-generated code
  npm run create-promotional-offer abc123-def456-ghi789 --name "Black Friday" --prefix BLACKFRI --mode FREE_TRIAL

Notes:
  - FREE_TRIAL mode does not require a price point (always $0)
  - PAY_AS_YOU_GO and PAY_UP_FRONT modes require --price-point parameter
  - Use --list-price-points to see available price points for the subscription
  - If neither --code nor --prefix is provided, a random code will be generated
  - Offer codes must be unique per subscription
  - Offer names must be unique per subscription
  - The generated code follows format: PREFIX_TIMESTAMP_RANDOM
  
  ⚠️  IMPORTANT - Price Points and Territories (AUTO-CONVERSION ENABLED):
  - ✨ NEW: Automatic price tier conversion across territories!
  - When you provide a single --price-point, it's automatically converted to equivalent tiers
  - Example: If you provide a USA $0.99 price point (tier 10010), the system will:
    * Use USA tier 10010 ($0.99) for USA users
    * Auto-convert to GBR tier 10010 (£0.99) for UK users
    * Auto-convert to CAN tier 10010 (CAD $0.99) for Canada users
    * And so on for all territories in --territories parameter
  - This uses Apple's price tier equivalency system for consistent global pricing
  - You can now safely specify multiple territories with a single price point!
  
  Price Point Formats:
  1. Single price point (auto-converts to all territories):
     --price-point <id> --territories USA,GBR,CAN,AUS
  
  2. Territory-specific price points (advanced):
     Requires code modification to pass object format

Related Commands:
  npm run get-subscription-product-ids <bundle-id>     # Get subscription IDs for a bundle ID
  npm run get-promotional-offers <bundle-id>    # List all promotional offers
  npm run bulk-create-promotional-offers               # Bulk create offers
  `);
}

// Run the script
createPromotionalOffer();
