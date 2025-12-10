require('dotenv').config();
const promotionalOfferService = require('./src/services/promotional-offers');
const logger = require('./src/utils/logger');
const readline = require('readline');
const fs = require('fs');

/**
 * Script to delete promotional offers (single or bulk rollback)
 * Usage: 
 *   npm run delete-promo-offer <offer-id>
 *   npm run rollback-promo-offers <rollback-file>
 */
async function deletePromotionalOffers() {
  try {
    // Parse command line arguments
    const args = process.argv.slice(2);
    
    if (args.includes('--help') || args.includes('-h') || args.length === 0) {
      showHelp();
      process.exit(0);
    }

    const firstArg = args[0];
    const skipConfirmation = args.includes('--yes') || args.includes('-y');
    const dryRun = args.includes('--dry-run');

    // Check if it's a rollback file or single offer ID
    const isRollbackFile = firstArg.endsWith('.json') && fs.existsSync(firstArg);

    if (isRollbackFile) {
      await performRollback(firstArg, skipConfirmation, dryRun);
    } else {
      await deleteSingleOffer(firstArg, skipConfirmation, dryRun);
    }

  } catch (error) {
    console.error('\n❌ Error:', error.message);

    if (error.statusCode === 401) {
      console.error('\n🔐 Authentication Error:');
      console.error('   Please check your App Store Connect API credentials in .env file');
    } else if (error.statusCode === 403) {
      console.error('\n🚫 Authorization Error:');
      console.error('   Your API key does not have permission to delete promotional offers');
    } else if (error.statusCode === 404 || error.message.includes('not found')) {
      console.error('\n🔍 Not Found:');
      console.error(`   Promotional offer not found`);
    }

    logger.error('Failed to delete promotional offer(s)', {
      error: error.message,
      stack: error.stack
    });
    process.exit(1);
  }
}

async function deleteSingleOffer(offerId, skipConfirmation, dryRun) {
  console.log('\n🗑️  Delete Promotional Offer\n');
  console.log('─'.repeat(80));
  console.log(`Offer ID: ${offerId}`);
  if (dryRun) {
    console.log('⚠️  DRY RUN MODE - No changes will be made');
  }
  console.log('─'.repeat(80));

  // Get offer details first
  try {
    const offerDetails = await promotionalOfferService.getPromotionalOffer(offerId, []);
    console.log('\n📋 Offer Details:');
    console.log(`   Name: ${offerDetails.data.attributes.name}`);
    console.log(`   Offer Code: ${offerDetails.data.attributes.offerCode}`);
    console.log(`   Duration: ${offerDetails.data.attributes.duration}`);
    console.log(`   Offer Mode: ${offerDetails.data.attributes.offerMode}`);
    console.log('─'.repeat(80));
  } catch (error) {
    console.warn('\n⚠️  Could not retrieve offer details (will still attempt deletion)');
  }

  // Ask for confirmation
  if (!skipConfirmation) {
    const confirmed = await askForConfirmation(
      '\n⚠️  This action cannot be undone. Delete this promotional offer? (yes/no): '
    );

    if (!confirmed) {
      console.log('\n❌ Operation cancelled by user');
      process.exit(0);
    }
  }

  if (dryRun) {
    console.log('\n✅ DRY RUN: Would delete promotional offer:', offerId);
    process.exit(0);
  }

  // Delete the offer
  console.log('\n🗑️  Deleting promotional offer...');
  await promotionalOfferService.deletePromotionalOffer(offerId);
  
  console.log('\n✅ Successfully deleted promotional offer');
  console.log(`   Offer ID: ${offerId}`);
}

async function performRollback(rollbackFile, skipConfirmation, dryRun) {
  console.log('\n🔄 Rollback Promotional Offers\n');
  console.log('─'.repeat(80));
  console.log(`Rollback File: ${rollbackFile}`);
  if (dryRun) {
    console.log('⚠️  DRY RUN MODE - No changes will be made');
  }
  console.log('─'.repeat(80));

  // Read rollback file
  const rollbackData = JSON.parse(fs.readFileSync(rollbackFile, 'utf8'));

  if (!rollbackData.operation || rollbackData.operation !== 'bulk_create_promotional_offers') {
    throw new Error('Invalid rollback file format. This file does not appear to be a promotional offers rollback log.');
  }

  const offersToDelete = rollbackData.createdOffers || [];

  if (offersToDelete.length === 0) {
    console.log('\n⚠️  No offers to delete in rollback file');
    process.exit(0);
  }

  console.log('\n📋 Rollback Information:');
  console.log(`   Bundle ID: ${rollbackData.bundleId}`);
  console.log(`   Reference Name: ${rollbackData.referenceName}`);
  console.log(`   Created At: ${rollbackData.createdAt}`);
  console.log(`   Offers to Delete: ${offersToDelete.length}`);
  console.log('─'.repeat(80));

  // Display offers that will be deleted
  console.log('\n🗑️  Offers to be deleted:\n');
  offersToDelete.forEach((offer, index) => {
    console.log(`${index + 1}. ${offer.subscriptionName}`);
    console.log(`   Offer Code: ${offer.offerCode}`);
    console.log(`   Offer ID: ${offer.offerId}`);
    console.log();
  });
  console.log('─'.repeat(80));

  // Ask for confirmation
  if (!skipConfirmation) {
    const confirmed = await askForConfirmation(
      `\n⚠️  This will delete ${offersToDelete.length} promotional offer(s). This action cannot be undone.\n` +
      'Do you want to continue? (yes/no): '
    );

    if (!confirmed) {
      console.log('\n❌ Rollback cancelled by user');
      process.exit(0);
    }
  }

  if (dryRun) {
    console.log(`\n✅ DRY RUN: Would delete ${offersToDelete.length} promotional offers`);
    process.exit(0);
  }

  // Delete offers
  console.log('\n🗑️  Deleting promotional offers...\n');

  const results = {
    deleted: [],
    failed: []
  };

  for (const offer of offersToDelete) {
    try {
      await promotionalOfferService.deletePromotionalOffer(offer.offerId);
      results.deleted.push(offer);
      console.log(`✅ Deleted: ${offer.offerCode} (${offer.subscriptionName})`);
    } catch (error) {
      results.failed.push({
        ...offer,
        error: error.message
      });
      console.log(`❌ Failed: ${offer.offerCode} - ${error.message}`);
    }
  }

  // Summary
  console.log('\n═'.repeat(80));
  console.log('📊 ROLLBACK SUMMARY');
  console.log('═'.repeat(80));
  console.log(`Total Offers: ${offersToDelete.length}`);
  console.log(`✅ Successfully Deleted: ${results.deleted.length}`);
  console.log(`❌ Failed: ${results.failed.length}`);
  console.log('═'.repeat(80));

  if (results.failed.length > 0) {
    console.log('\n❌ FAILED DELETIONS:\n');
    results.failed.forEach((failure, index) => {
      console.log(`${index + 1}. ${failure.subscriptionName}`);
      console.log(`   Offer Code: ${failure.offerCode}`);
      console.log(`   Offer ID: ${failure.offerId}`);
      console.log(`   Error: ${failure.error}`);
      console.log();
    });
  }

  // Save rollback results
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const resultsPath = `./rollback-results-${timestamp}.json`;
  
  const outputData = {
    rollbackFile,
    operation: 'rollback_promotional_offers',
    summary: {
      total: offersToDelete.length,
      deleted: results.deleted.length,
      failed: results.failed.length
    },
    deleted: results.deleted,
    failed: results.failed,
    completedAt: new Date().toISOString()
  };

  fs.writeFileSync(resultsPath, JSON.stringify(outputData, null, 2));
  console.log(`\n💾 Rollback results saved to: ${resultsPath}`);

  // Exit with appropriate code
  process.exit(results.failed.length > 0 ? 1 : 0);
}

function askForConfirmation(question) {
  return new Promise((resolve) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    rl.question(question, (answer) => {
      rl.close();
      resolve(answer.toLowerCase() === 'yes' || answer.toLowerCase() === 'y');
    });
  });
}

function showHelp() {
  console.log(`
🗑️  Delete Promotional Offers

Deletes a single promotional offer or performs a bulk rollback from a rollback log.

Usage:
  # Delete a single offer
  npm run delete-promo-offer <offer-id> [options]
  
  # Rollback bulk created offers
  npm run rollback-promo-offers <rollback-file> [options]

Arguments:
  offer-id            UUID of the promotional offer to delete
  rollback-file       Path to rollback JSON file (created by bulk-create-promo)

Options:
  --yes, -y           Skip confirmation prompt
  --dry-run           Show what would be deleted without actually deleting
  --help, -h          Show this help message

Examples:
  # Delete a single offer
  npm run delete-promo-offer abc123-def456-ghi789

  # Delete without confirmation
  npm run delete-promo-offer abc123-def456-ghi789 --yes

  # Dry run to see what would be deleted
  npm run delete-promo-offer abc123-def456-ghi789 --dry-run

  # Rollback bulk created offers
  npm run rollback-promo-offers rollback-Group-1-2025-01-10T12-30-00.json

  # Rollback without confirmation
  npm run rollback-promo-offers rollback-Group-1-2025-01-10T12-30-00.json --yes

Rollback Files:
  - Automatically created by bulk-create-promo command
  - Contains IDs of all successfully created offers
  - Format: rollback-<reference>-<timestamp>.json
  - Located in project root directory

Important Notes:
  - Deletion is permanent and cannot be undone
  - Apple's API does not support transaction rollback
  - Each offer is deleted individually
  - If rollback fails partway, some offers may still be deleted
  - Always use --dry-run first to verify what will be deleted

Related Commands:
  npm run bulk-create-promo           # Creates rollback log automatically
  npm run get-promo-offers            # List existing offers
  npm run create-promo-offer          # Create a single offer
  `);
}

// Run the script
deletePromotionalOffers();
