require('dotenv').config();
const appService = require('./src/services/apps');
const logger = require('./src/utils/logger');

/**
 * Script to retrieve all apps from App Store Connect
 */
async function getAllAppsInfo() {
  try {
    console.log('🔍 Fetching all apps from App Store Connect...\n');

    // Parse command line arguments
    const args = process.argv.slice(2);
    const includeVersions = args.includes('--include-versions');
    const limitArg = args.find(arg => arg.startsWith('--limit='));
    const limit = limitArg ? parseInt(limitArg.split('=')[1]) : 50;

    // Configure options
    const options = {
      limit: limit, // Default 50, max 200
    };
    
    // Add includes if requested
    if (includeVersions) {
      options.includes = ['appStoreVersions'];
      console.log('📦 Including app store versions...\n');
    }

    console.log(`⚙️  Limit: ${limit} apps\n`);

    // Fetch all apps
    const result = await appService.getAllApps(options);

    // Display results
    console.log(`✅ Retrieved ${result.data?.length || 0} apps\n`);

    if (result.data && result.data.length > 0) {
      console.log('📱 Apps List:\n');
      console.log('─'.repeat(80));

      result.data.forEach((app, index) => {
        const attrs = app.attributes || {};
        console.log(`${index + 1}. ${attrs.name || 'N/A'}`);
        console.log(`   ID: ${app.id}`);
        console.log(`   Bundle ID: ${attrs.bundleId || 'N/A'}`);
        console.log(`   SKU: ${attrs.sku || 'N/A'}`);
        console.log(`   Primary Locale: ${attrs.primaryLocale || 'N/A'}`);
        console.log(`   Made for Kids: ${attrs.isOrEverWasMadeForKids ? 'Yes' : 'No'}`);
        console.log('─'.repeat(80));
      });

      // Display metadata
      if (result.meta) {
        console.log('\n📊 Metadata:');
        console.log(`   Total: ${result.meta.paging?.total || 'N/A'}`);
        console.log(`   Limit: ${result.meta.paging?.limit || 'N/A'}`);
      }

      // Display included resources
      if (result.included && result.included.length > 0) {
        console.log(`\n📦 Included Resources: ${result.included.length}`);
        
        const versionCounts = result.included.reduce((acc, item) => {
          acc[item.type] = (acc[item.type] || 0) + 1;
          return acc;
        }, {});

        Object.entries(versionCounts).forEach(([type, count]) => {
          console.log(`   ${type}: ${count}`);
        });
      }

      // Save to file (optional)
      const fs = require('fs');
      const outputPath = './apps-output.json';
      fs.writeFileSync(outputPath, JSON.stringify(result, null, 2));
      console.log(`\n💾 Full data saved to: ${outputPath}`);

    } else {
      console.log('⚠️  No apps found');
    }

  } catch (error) {
    console.error('❌ Error retrieving apps:', error.message);
    
    if (error.statusCode === 401) {
      console.error('\n🔐 Authentication Error:');
      console.error('   Please check your App Store Connect API credentials in .env file');
      console.error('   Run: npm run debug-auth');
    } else if (error.statusCode === 403) {
      console.error('\n🚫 Authorization Error:');
      console.error('   Your API key does not have permission to access apps');
    } else if (error.message && error.message.includes('timeout')) {
      console.error('\n⏱️  Timeout Error:');
      console.error('   The request took too long. Try reducing the limit or check your network connection.');
      console.error('   Usage: npm run get-apps -- --limit=10');
    }
    
    logger.error('Failed to retrieve apps', { error: error.message, stack: error.stack });
    process.exit(1);
  }
}

// Show help if requested
if (process.argv.includes('--help') || process.argv.includes('-h')) {
  console.log(`
📱 Get All Apps Script

Usage:
  npm run get-apps                      # Get apps (default: 50)
  npm run get-apps -- --limit=100       # Get up to 100 apps
  npm run get-apps -- --limit=10        # Get 10 apps (faster for testing)
  npm run get-apps -- --include-versions # Include app store versions

Options:
  --limit=N              Number of apps to retrieve (1-200, default: 50)
  --include-versions     Include app store version information
  --help, -h            Show this help message

Examples:
  npm run get-apps
  npm run get-apps -- --limit=200
  npm run get-apps -- --limit=10 --include-versions

Output:
  - Console: Formatted list of apps
  - File: apps-output.json (complete JSON response)
  `);
  process.exit(0);
}

// Run the script
getAllAppsInfo();
