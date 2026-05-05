require('dotenv').config();
const subscriptionService = require('./src/services/subscriptions');
const logger = require('./src/utils/logger');

/**
 * Integration test script for Subscription Localizations API
 * Tests CRUD operations against the real App Store Connect API
 * 
 * Test Bundle ID: com.vtech.plus.inapp.ios.test3
 */

// Test configuration
const TEST_SUBSCRIPTION_ID = '6747889178'; // DN01vtbm01usgroupAlevel01y01
const TEST_LOCALE = 'de-DE';
const TEST_NAME = 'Test German Name';
const TEST_DESCRIPTION = 'Test German Description';
const UPDATED_NAME = 'Updated German Name';
const UPDATED_DESCRIPTION = 'Updated German Desc';

let createdLocalizationId = null;

async function runTests() {
  console.log('='.repeat(80));
  console.log('Subscription Localizations Integration Test');
  console.log('='.repeat(80));
  console.log(`Test Subscription ID: ${TEST_SUBSCRIPTION_ID}`);
  console.log(`Test Locale: ${TEST_LOCALE}`);
  console.log('');

  const results = {
    passed: 0,
    failed: 0,
    errors: []
  };

  // Test 1: Get existing localizations
  console.log('Test 1: GET existing localizations');
  console.log('-'.repeat(40));
  try {
    const response = await subscriptionService.getSubscriptionLocalizations(TEST_SUBSCRIPTION_ID);
    console.log(`  Found ${response.data?.length || 0} existing localizations`);
    
    if (response.data) {
      response.data.forEach(loc => {
        console.log(`    - ${loc.attributes.locale}: ${loc.attributes.name}`);
      });
      
      // Check if test locale already exists
      const existingLocale = response.data.find(
        loc => loc.attributes.locale === TEST_LOCALE
      );
      if (existingLocale) {
        console.log(`  [WARNING] Locale ${TEST_LOCALE} already exists with ID: ${existingLocale.id}`);
        console.log(`  [INFO] Will skip CREATE test to avoid duplicates. Deleting existing...`);
        
        // Delete existing localization to allow CREATE test
        try {
          await subscriptionService.deleteSubscriptionLocalization(existingLocale.id);
          console.log(`  [INFO] Deleted existing ${TEST_LOCALE} localization`);
        } catch (deleteError) {
          console.log(`  [WARNING] Could not delete existing localization: ${deleteError.message}`);
        }
      }
    }
    
    console.log('  [PASS] GET localizations succeeded');
    results.passed++;
  } catch (error) {
    console.log(`  [FAIL] ${error.message}`);
    results.failed++;
    results.errors.push({ test: 'GET localizations', error: error.message });
  }
  console.log('');

  // Test 2: Create a new localization
  console.log('Test 2: CREATE new localization');
  console.log('-'.repeat(40));
  try {
    const localizationData = {
      locale: TEST_LOCALE,
      name: TEST_NAME,
      description: TEST_DESCRIPTION
    };
    
    console.log(`  Creating localization for locale: ${TEST_LOCALE}`);
    console.log(`  Name: ${TEST_NAME}`);
    console.log(`  Description: ${TEST_DESCRIPTION}`);
    
    const response = await subscriptionService.createSubscriptionLocalization(
      TEST_SUBSCRIPTION_ID,
      localizationData
    );
    
    createdLocalizationId = response.data?.id;
    console.log(`  Created localization ID: ${createdLocalizationId}`);
    console.log(`  Response locale: ${response.data?.attributes?.locale}`);
    console.log(`  Response name: ${response.data?.attributes?.name}`);
    console.log('  [PASS] CREATE localization succeeded');
    results.passed++;
  } catch (error) {
    console.log(`  [FAIL] ${error.message}`);
    if (error.appleErrors) {
      error.appleErrors.forEach(e => {
        console.log(`    Apple Error: ${e.code} - ${e.detail}`);
      });
    }
    results.failed++;
    results.errors.push({ test: 'CREATE localization', error: error.message });
  }
  console.log('');

  // Test 3: Get the created localization by ID
  if (createdLocalizationId) {
    console.log('Test 3: GET localization by ID');
    console.log('-'.repeat(40));
    try {
      console.log(`  Fetching localization ID: ${createdLocalizationId}`);
      
      const response = await subscriptionService.getSubscriptionLocalizationById(createdLocalizationId);
      
      console.log(`  Found localization:`);
      console.log(`    ID: ${response.data?.id}`);
      console.log(`    Locale: ${response.data?.attributes?.locale}`);
      console.log(`    Name: ${response.data?.attributes?.name}`);
      console.log(`    Description: ${response.data?.attributes?.description}`);
      console.log('  [PASS] GET localization by ID succeeded');
      results.passed++;
    } catch (error) {
      console.log(`  [FAIL] ${error.message}`);
      results.failed++;
      results.errors.push({ test: 'GET localization by ID', error: error.message });
    }
    console.log('');

    // Test 4: Update the localization
    console.log('Test 4: UPDATE localization');
    console.log('-'.repeat(40));
    try {
      const updateData = {
        name: UPDATED_NAME,
        description: UPDATED_DESCRIPTION
      };
      
      console.log(`  Updating localization ID: ${createdLocalizationId}`);
      console.log(`  New name: ${UPDATED_NAME}`);
      console.log(`  New description: ${UPDATED_DESCRIPTION}`);
      
      const response = await subscriptionService.updateSubscriptionLocalization(
        createdLocalizationId,
        updateData
      );
      
      console.log(`  Updated localization:`);
      console.log(`    Name: ${response.data?.attributes?.name}`);
      console.log(`    Description: ${response.data?.attributes?.description}`);
      console.log('  [PASS] UPDATE localization succeeded');
      results.passed++;
    } catch (error) {
      console.log(`  [FAIL] ${error.message}`);
      if (error.appleErrors) {
        error.appleErrors.forEach(e => {
          console.log(`    Apple Error: ${e.code} - ${e.detail}`);
        });
      }
      results.failed++;
      results.errors.push({ test: 'UPDATE localization', error: error.message });
    }
    console.log('');

    // Test 5: Delete the localization (cleanup)
    console.log('Test 5: DELETE localization (cleanup)');
    console.log('-'.repeat(40));
    try {
      console.log(`  Deleting localization ID: ${createdLocalizationId}`);
      
      const response = await subscriptionService.deleteSubscriptionLocalization(createdLocalizationId);
      
      console.log(`  Delete result: ${response.message}`);
      console.log('  [PASS] DELETE localization succeeded');
      results.passed++;
      createdLocalizationId = null; // Mark as cleaned up
    } catch (error) {
      console.log(`  [FAIL] ${error.message}`);
      results.failed++;
      results.errors.push({ test: 'DELETE localization', error: error.message });
    }
    console.log('');
  } else {
    console.log('Test 3-5: SKIPPED (no localization was created)');
    console.log('');
  }

  // Summary
  console.log('='.repeat(80));
  console.log('Test Summary');
  console.log('='.repeat(80));
  console.log(`  Total tests: ${results.passed + results.failed}`);
  console.log(`  Passed: ${results.passed}`);
  console.log(`  Failed: ${results.failed}`);
  
  if (results.errors.length > 0) {
    console.log('\nErrors:');
    results.errors.forEach(({ test, error }) => {
      console.log(`  - ${test}: ${error}`);
    });
  }

  console.log('');
  
  // Cleanup if something went wrong
  if (createdLocalizationId) {
    console.log('[WARNING] Cleanup: Attempting to delete orphaned localization...');
    try {
      await subscriptionService.deleteSubscriptionLocalization(createdLocalizationId);
      console.log('[INFO] Cleanup successful');
    } catch (error) {
      console.log(`[WARNING] Cleanup failed: ${error.message}`);
    }
  }

  return results.failed === 0 ? 0 : 1;
}

// Show help if requested
if (process.argv.includes('--help') || process.argv.includes('-h')) {
  console.log(`
Subscription Localizations Integration Test

Tests CRUD operations for subscription localizations against
the real App Store Connect API.

Test Bundle ID: com.vtech.plus.inapp.ios.test3
Test Subscription ID: ${TEST_SUBSCRIPTION_ID}

Usage:
  node test-subscription-localizations.js

Environment:
  Requires .env file with App Store Connect API credentials:
  - APPSTORE_ISSUER_ID
  - APPSTORE_KEY_ID
  - APPSTORE_PRIVATE_KEY or APPSTORE_PRIVATE_KEY_PATH

Tests performed:
  1. GET existing localizations for subscription
  2. CREATE new localization (de-DE)
  3. GET localization by ID
  4. UPDATE localization (name and description)
  5. DELETE localization (cleanup)
`);
  process.exit(0);
}

// Run the tests
runTests()
  .then(exitCode => {
    process.exit(exitCode);
  })
  .catch(error => {
    console.error('Unexpected error:', error);
    process.exit(1);
  });
