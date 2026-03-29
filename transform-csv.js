#!/usr/bin/env node

/**
 * Transform CSV Script
 *
 * Transforms an input CSV file by renaming/removing/copying columns
 * to produce a CSV compatible with generate-product-ids.js
 *
 * Usage:
 *   node transform-csv.js <input-csv> [output-csv]
 *   node transform-csv.js input.csv
 *   node transform-csv.js input.csv output.csv
 *
 * If output-csv is not specified, defaults to transformed-<input-csv>
 */

const fs = require('fs');
const path = require('path');

// Column rename mapping: input name -> output name
const RENAME_MAP = {
  'group_reference_name': 'SUBSCRIPTION GROUP REFERENCE NAME',
  'product_id': 'Product ID',
  'product_reference_name': 'REFERENCE NAME',
  'period': 'DURATION',
  'product_loc_display_name': 'DISPLAY NAME',
  'USD_price': 'Price USD',
  'group_id': 'Group ID'
};

// Columns to remove
const REMOVE_COLUMNS = [
  'group_loc_display_name',
  'group_loc_app_name',
  'product_level',
  'plan_guid',
  'package_guid'
];

// Columns to copy from REFERENCE NAME
const COPY_FROM_REFERENCE_NAME = ['Plan', 'SUBSCRIPTION DESCRIPTION'];

/**
 * Parse a CSV line handling quoted values
 */
function parseCSVLine(line) {
  const values = [];
  let current = '';
  let inQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    if (char === '"') {
      inQuotes = !inQuotes;
      current += char;
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
 * Escape a CSV value (wrap in quotes if it contains commas or quotes)
 */
function escapeCSV(value) {
  if (value.includes(',') || value.includes('"') || value.includes('\n')) {
    return '"' + value.replace(/"/g, '""') + '"';
  }
  return value;
}

function showHelp() {
  console.log(`
Transform CSV for generate-product-ids.js

Usage:
  node transform-csv.js <input-csv> [output-csv]

Arguments:
  input-csv     Path to the source CSV file
  output-csv    Path for the output CSV (default: transformed-<input-csv>)

Options:
  --help, -h    Show this help message

Column transformations:
  Renamed:
    group_reference_name    -> SUBSCRIPTION GROUP REFERENCE NAME
    product_id              -> Product ID
    product_reference_name  -> REFERENCE NAME
    period                  -> DURATION
    product_loc_display_name -> DISPLAY NAME
    USD_price               -> Price USD
    group_id                -> Group ID

  Removed:
    group_loc_display_name, group_loc_app_name, product_level,
    plan_guid, package_guid

  Added (copied from REFERENCE NAME):
    Plan, SUBSCRIPTION DESCRIPTION
`);
}

function main() {
  const args = process.argv.slice(2);

  if (args.includes('--help') || args.includes('-h')) {
    showHelp();
    process.exit(0);
  }

  const nonFlagArgs = args.filter(a => !a.startsWith('--'));

  if (nonFlagArgs.length === 0) {
    console.error('Error: Input CSV file path is required\n');
    showHelp();
    process.exit(1);
  }

  const inputPath = nonFlagArgs[0];
  const outputPath = nonFlagArgs[1] ||
    path.join(path.dirname(inputPath), 'transformed-' + path.basename(inputPath));

  if (!fs.existsSync(inputPath)) {
    console.error(`Error: File not found: ${inputPath}`);
    process.exit(1);
  }

  const content = fs.readFileSync(inputPath, 'utf-8');
  const lines = content.trim().split('\n');

  if (lines.length < 2) {
    console.error('Error: CSV must have a header row and at least one data row');
    process.exit(1);
  }

  // Parse header
  const inputHeaders = parseCSVLine(lines[0]).map(h => h.trim());

  // Determine which columns to keep and their output names
  const removeSet = new Set(REMOVE_COLUMNS.map(c => c.toLowerCase()));
  const columnMap = []; // { inputIndex, outputName }

  for (let i = 0; i < inputHeaders.length; i++) {
    const header = inputHeaders[i];
    const headerLower = header.toLowerCase();

    if (removeSet.has(headerLower)) {
      continue;
    }

    // Check for rename (case-insensitive lookup)
    const renameKey = Object.keys(RENAME_MAP).find(k => k.toLowerCase() === headerLower);
    const outputName = renameKey ? RENAME_MAP[renameKey] : header;

    columnMap.push({ inputIndex: i, outputName });
  }

  // Find the REFERENCE NAME output column index for copying
  const refNameEntry = columnMap.find(c => c.outputName === 'REFERENCE NAME');

  // Build output headers
  const outputHeaders = columnMap.map(c => c.outputName);
  for (const copyCol of COPY_FROM_REFERENCE_NAME) {
    if (!outputHeaders.includes(copyCol)) {
      outputHeaders.push(copyCol);
    }
  }

  // Build output rows
  const outputLines = [outputHeaders.map(escapeCSV).join(',')];

  for (let i = 1; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;

    const values = parseCSVLine(line);

    // Build row from column map
    const row = columnMap.map(c => (values[c.inputIndex] || '').trim());

    // Get REFERENCE NAME value for copying
    const refNameValue = refNameEntry ? (values[refNameEntry.inputIndex] || '').trim() : '';

    // Append copied columns
    for (const copyCol of COPY_FROM_REFERENCE_NAME) {
      if (!columnMap.find(c => c.outputName === copyCol)) {
        row.push(refNameValue);
      }
    }

    // Skip completely empty rows
    if (row.every(v => v === '')) continue;

    outputLines.push(row.map(escapeCSV).join(','));
  }

  fs.writeFileSync(outputPath, outputLines.join('\n') + '\n');

  const dataRows = outputLines.length - 1;
  console.log(`Transformed ${dataRows} row(s)`);
  console.log(`  Input:  ${inputPath}`);
  console.log(`  Output: ${outputPath}`);
  console.log(`  Columns: ${outputHeaders.join(', ')}`);
}

main();
