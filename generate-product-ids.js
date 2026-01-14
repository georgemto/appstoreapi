#!/usr/bin/env node

/**
 * Generate Product IDs Script
 * 
 * Reads a CSV file containing subscription plan data and generates a JSON file
 * with product IDs formatted for App Store Connect.
 * 
 * Usage:
 *   node generate-product-ids.js <csv-file-path>
 *   npm run generate-product-ids -- plans/uat_plan_test.csv
 * 
 * Output:
 *   product-ids-test3.json
 */

const fs = require('fs');
const path = require('path');

const BUNDLE_ID = 'com.vtech.plus.inapp.ios.test3';
const OUTPUT_FILE = 'product-ids-test3.json';

/**
 * Parse CSV content into an array of objects
 * @param {string} content - Raw CSV content
 * @returns {Array<Object>} Parsed rows as objects
 */
function parseCSV(content) {
  const lines = content.trim().split('\n');
  if (lines.length < 2) {
    throw new Error('CSV file must have a header row and at least one data row');
  }

  const headers = lines[0].split(',').map(h => h.trim());
  const rows = [];

  for (let i = 1; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;

    const values = parseCSVLine(line);
    const row = {};
    
    headers.forEach((header, index) => {
      row[header] = values[index] ? values[index].trim() : '';
    });

    // Skip empty rows (rows where Plan is empty)
    if (!row['Plan']) continue;

    rows.push(row);
  }

  return rows;
}

/**
 * Parse a single CSV line, handling quoted values
 * @param {string} line - CSV line
 * @returns {Array<string>} Parsed values
 */
function parseCSVLine(line) {
  const values = [];
  let current = '';
  let inQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    
    if (char === '"') {
      inQuotes = !inQuotes;
    } else if (char === ',' && !inQuotes) {
      values.push(current);
      current = '';
    } else {
      current += char;
    }
  }
  
  values.push(current);
  return values;
}

/**
 * Group subscriptions by subscription group
 * @param {Array<Object>} rows - Parsed CSV rows
 * @returns {Array<Object>} Grouped subscription data
 */
function groupSubscriptions(rows) {
  const groups = new Map();

  for (const row of rows) {
    const groupId = row['Group ID'] || '';
    const groupName = row['SUBSCRIPTION GROUP REFERENCE NAME'] || row['Group Name'] || '';
    
    if (!groups.has(groupId)) {
      groups.set(groupId, {
        groupId,
        groupName,
        group: row['Group'] || '',
        subscriptions: []
      });
    }

    groups.get(groupId).subscriptions.push({
      productId: row['Product ID'] || '',
      name: row['Plan'] || '',
      referenceName: row['REFERENCE NAME'] || row['Product Name'] || '',
      price: row['Price USD'] || row['Price'] || '',
      duration: row['DURATION'] || '',
      displayName: row['DISPLAY NAME'] || row['Plan'] || '',
      description: row['SUBSCRIPTION DESCRIPTION'] || ''
    });
  }

  return Array.from(groups.values());
}

/**
 * Display help message
 */
function showHelp() {
  console.log(`
Generate Product IDs from CSV

Usage:
  node generate-product-ids.js <csv-file-path>
  npm run generate-product-ids -- <csv-file-path>

Arguments:
  csv-file-path    Path to the CSV file containing subscription plan data

Examples:
  node generate-product-ids.js plans/uat_plan_test.csv
  npm run generate-product-ids -- plans/uat_plan_test.csv

Output:
  Creates ${OUTPUT_FILE} in the current directory with:
  - bundleId: ${BUNDLE_ID}
  - subscriptionGroups: Array of groups with their subscriptions
  - productIds: Flat array of all product IDs
  - totalCount: Total number of subscriptions

CSV Format:
  Required columns: Plan, Group ID, Product ID
  Optional columns: SUBSCRIPTION GROUP REFERENCE NAME, REFERENCE NAME,
                    Price USD, DURATION, DISPLAY NAME, SUBSCRIPTION DESCRIPTION
`);
}

/**
 * Main function
 */
function main() {
  const args = process.argv.slice(2);

  // Check for help flag
  if (args.includes('--help') || args.includes('-h')) {
    showHelp();
    process.exit(0);
  }

  // Validate arguments
  if (args.length === 0) {
    console.error('Error: CSV file path is required\n');
    showHelp();
    process.exit(1);
  }

  const csvPath = args[0];

  // Check if file exists
  if (!fs.existsSync(csvPath)) {
    console.error(`Error: File not found: ${csvPath}`);
    process.exit(1);
  }

  console.log(`Reading CSV file: ${csvPath}`);

  try {
    // Read and parse CSV
    const content = fs.readFileSync(csvPath, 'utf-8');
    const rows = parseCSV(content);

    if (rows.length === 0) {
      console.error('Error: No valid data rows found in CSV file');
      process.exit(1);
    }

    console.log(`Found ${rows.length} subscription(s) in CSV`);

    // Group subscriptions
    const subscriptionGroups = groupSubscriptions(rows);
    
    // Extract all product IDs
    const productIds = rows
      .map(row => row['Product ID'])
      .filter(id => id && id.trim());

    // Build output object
    const output = {
      bundleId: BUNDLE_ID,
      generatedAt: new Date().toISOString(),
      sourceFile: path.basename(csvPath),
      subscriptionGroups,
      productIds,
      totalCount: productIds.length
    };

    // Write output file
    const outputPath = path.join(process.cwd(), OUTPUT_FILE);
    fs.writeFileSync(outputPath, JSON.stringify(output, null, 2));

    console.log(`\nGenerated ${OUTPUT_FILE} successfully`);
    console.log(`  Bundle ID: ${BUNDLE_ID}`);
    console.log(`  Subscription Groups: ${subscriptionGroups.length}`);
    console.log(`  Total Product IDs: ${productIds.length}`);
    console.log(`\nProduct IDs:`);
    productIds.forEach((id, index) => {
      console.log(`  ${index + 1}. ${id}`);
    });

  } catch (error) {
    console.error(`Error processing CSV file: ${error.message}`);
    process.exit(1);
  }
}

main();
