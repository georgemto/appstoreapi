require('dotenv').config();
const fs = require('fs');
const introductoryOfferService = require('./src/services/introductory-offers');
const subscriptionService = require('./src/services/subscriptions');
const logger = require('./src/utils/logger');

// Minimal RFC-4180-ish CSV parser. Handles quoted fields with embedded commas,
// escaped quotes (""), and \r\n / \n line endings. Sufficient for CSVs produced
// by this repo's get-* scripts — not a general CSV library.
function parseCsv(text) {
  const rows = [];
  let row = [];
  let field = '';
  let inQuotes = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (inQuotes) {
      if (c === '"') {
        if (text[i + 1] === '"') { field += '"'; i++; }
        else inQuotes = false;
      } else {
        field += c;
      }
    } else {
      if (c === '"') inQuotes = true;
      else if (c === ',') { row.push(field); field = ''; }
      else if (c === '\n' || c === '\r') {
        if (c === '\r' && text[i + 1] === '\n') i++;
        row.push(field); field = '';
        if (row.length > 1 || row[0] !== '') rows.push(row);
        row = [];
      } else {
        field += c;
      }
    }
  }
  if (field !== '' || row.length) {
    row.push(field);
    if (row.length > 1 || row[0] !== '') rows.push(row);
  }
  return rows;
}

// Load product IDs and group reference names from --from-file. Accepts:
//   - CSV produced by get-apple-product-ids.js (columns "Product ID", "Group Name")
//   - JSON produced by get-apple-product-ids.js / generate-product-ids.js:
//     { subscriptionGroups: [{ groupName, subscriptions: [{ productId }] }], productIds?: [] }
// Returns { productIds: string[], groupNames: string[] } — both deduplicated.
// groupNames lets the script derive a reference-name when the user omits it.
function loadFromFile(filePath) {
  if (!fs.existsSync(filePath)) {
    throw new Error(`--from-file "${filePath}" not found`);
  }
  const ext = filePath.toLowerCase();
  const text = fs.readFileSync(filePath, 'utf8');

  const productIds = [];
  const groupNames = [];
  const seenIds = new Set();
  const seenGroups = new Set();
  const pushId = (v) => {
    const t = (v || '').trim();
    if (!t || seenIds.has(t)) return;
    seenIds.add(t); productIds.push(t);
  };
  const pushGroup = (v) => {
    const t = (v || '').trim();
    if (!t || seenGroups.has(t)) return;
    seenGroups.add(t); groupNames.push(t);
  };

  if (ext.endsWith('.csv')) {
    const rows = parseCsv(text);
    if (rows.length === 0) return { productIds, groupNames };
    const header = rows[0].map(h => h.trim());
    const idIdx = header.indexOf('Product ID');
    if (idIdx === -1) {
      throw new Error(`CSV missing "Product ID" column. Found: ${header.join(', ')}`);
    }
    const groupIdx = header.indexOf('Group Name'); // optional; -1 if absent
    for (let r = 1; r < rows.length; r++) {
      pushId(rows[r][idIdx]);
      if (groupIdx !== -1) pushGroup(rows[r][groupIdx]);
    }
    return { productIds, groupNames };
  }

  // JSON
  let json;
  try {
    json = JSON.parse(text);
  } catch (err) {
    throw new Error(`--from-file "${filePath}" is not valid JSON: ${err.message}`);
  }
  for (const group of json.subscriptionGroups || []) {
    pushGroup(group.groupName || group.referenceName);
    for (const sub of group.subscriptions || []) pushId(sub.productId);
  }
  for (const id of json.productIds || []) pushId(id);
  return { productIds, groupNames };
}

/**
 * Script to bulk create introductory offers for all subscriptions in a bundle ID
 * matching a given reference name, across one or more territories.
 * Usage: npm run bulk-create-introductory-offers -- <bundle-id> <reference-name> --territories USA,GBR [options]
 */
async function bulkCreateIntroductoryOffers() {
  try {
    const args = process.argv.slice(2);

    if (args.includes('--help') || args.includes('-h') || args.length < 1) {
      showHelp();
      process.exit(0);
    }

    // Bundle ID can be supplied via --bundle-id <id> (preferred) or as the
    // first positional argument (legacy). Reference name follows whatever's
    // left over in the positional slot.
    const positionals = collectPositionals(args);
    let bundleId = getArgValue(args, '--bundle-id');
    let referenceName;
    if (bundleId) {
      referenceName = positionals[0];
    } else {
      bundleId = positionals[0];
      referenceName = positionals[1];
    }

    if (!bundleId) {
      console.error('❌ Error: bundle ID is required (--bundle-id <id> or first positional)\n');
      showHelp();
      process.exit(1);
    }
    // referenceName may be omitted when --from-file is used — it'll be
    // derived from the file's Group Name column / subscriptionGroups[].groupName.
    // If neither is provided, error.
    if (!referenceName && !args.includes('--from-file') && !args.some(a => a.startsWith('--from-file='))) {
      console.error('❌ Error: reference-name is required (positional argument), or use --from-file to derive it\n');
      showHelp();
      process.exit(1);
    }

    const territoriesArg = getArgValue(args, '--territories');
    if (!territoriesArg) {
      console.error('❌ Error: --territories is required (comma-separated list, "ALL" for every territory, e.g. USA,GBR,CAN)\n');
      showHelp();
      process.exit(1);
    }

    let territories;
    if (territoriesArg.trim().toUpperCase() === 'ALL' || territoriesArg.trim() === '*') {
      console.log('🌍 Fetching all available territories from App Store Connect...');
      territories = await subscriptionService.getAvailableTerritories();
      console.log(`   Found ${territories.length} territories\n`);
    } else {
      territories = territoriesArg.split(',').map(t => t.trim().toUpperCase()).filter(Boolean);
    }

    const duration = getArgValue(args, '--duration') || 'ONE_WEEK';
    const offerMode = getArgValue(args, '--mode') || 'FREE_TRIAL';
    const numberOfPeriods = parseInt(getArgValue(args, '--periods') || '1');
    const pricePoint = getArgValue(args, '--price-point');
    const startDate = getArgValue(args, '--start-date');
    const endDate = getArgValue(args, '--end-date');
    const nameMatch = getArgValue(args, '--match');
    const onConflict = (getArgValue(args, '--on-conflict') || 'skip').toLowerCase();
    const validConflictModes = ['skip', 'update', 'replace'];
    if (!validConflictModes.includes(onConflict)) {
      console.error(`❌ Error: Invalid --on-conflict value "${onConflict}"`);
      console.error(`   Valid values: ${validConflictModes.join(', ')}\n`);
      process.exit(1);
    }
    if (onConflict === 'update' && !getArgValue(args, '--start-date') && !getArgValue(args, '--end-date')) {
      console.error('❌ Error: --on-conflict update requires --start-date and/or --end-date');
      console.error("   (Apple's update API only accepts startDate and endDate.)\n");
      process.exit(1);
    }
    const planPeriodArg = getArgValue(args, '--plan-period');
    const planPeriodFilter = planPeriodArg
      ? planPeriodArg.split(',').map(p => p.trim().toUpperCase()).filter(Boolean)
      : null;

    // --from-file: load productIds (and group names) from CSV/JSON output of
    // get-apple-product-ids.js (or generate-product-ids.js). The productIds
    // become an explicit allowlist on top of the reference-name + name/period
    // filters. The group names from the file are used to *derive* the
    // reference-name when the user didn't pass one positionally.
    const fromFileArg = getArgValue(args, '--from-file');
    let productIdFilter = null;
    if (fromFileArg) {
      let loaded;
      try {
        loaded = loadFromFile(fromFileArg);
      } catch (err) {
        console.error(`❌ Error: ${err.message}\n`);
        process.exit(1);
      }
      productIdFilter = loaded.productIds;
      if (productIdFilter.length === 0) {
        console.error(`❌ Error: --from-file "${fromFileArg}" contains no product IDs\n`);
        process.exit(1);
      }
      console.log(`📂 Loaded ${productIdFilter.length} productId(s) from ${fromFileArg}`);

      // Derive the reference-name from the file when the user omitted it.
      // One group → use that single name. Multiple groups → use "*" (all
      // groups) and let the productIdFilter narrow things down. No group
      // info in the file → fall back to "*".
      if (!referenceName) {
        if (loaded.groupNames.length === 1) {
          referenceName = loaded.groupNames[0];
          console.log(`📂 Derived reference-name from file: "${referenceName}"`);
        } else {
          referenceName = '*';
          if (loaded.groupNames.length > 1) {
            console.log(`📂 File spans ${loaded.groupNames.length} groups (${loaded.groupNames.join(', ')}); using reference-name "*"`);
          } else {
            console.log(`📂 File has no group-name info; using reference-name "*"`);
          }
        }
      }
    }
    const validPeriods = ['THREE_DAYS', 'ONE_WEEK', 'TWO_WEEKS', 'ONE_MONTH', 'TWO_MONTHS', 'THREE_MONTHS', 'SIX_MONTHS', 'ONE_YEAR'];
    if (planPeriodFilter) {
      const invalid = planPeriodFilter.filter(p => !validPeriods.includes(p));
      if (invalid.length > 0) {
        console.error(`❌ Error: Invalid --plan-period value(s): ${invalid.join(', ')}`);
        console.error(`   Valid values: ${validPeriods.join(', ')}\n`);
        process.exit(1);
      }
    }
    if (offerMode !== 'FREE_TRIAL' && !pricePoint) {
      console.error(`❌ Error: --price-point is required for offer mode ${offerMode}\n`);
      console.error('   Use: npm run get-price-points <subscription-id> to find a price point ID\n');
      process.exit(1);
    }

    console.log('\n🎁 Bulk Create Introductory Offers\n');
    console.log('─'.repeat(80));
    console.log(`Bundle ID: ${bundleId}`);
    console.log(`Reference Name: ${referenceName === '*' ? '* (ALL GROUPS)' : `${referenceName} (exact match)`}`);
    if (nameMatch) console.log(`Name Filter: "${nameMatch}" (subscriptions must include this, case-insensitive)`);
    if (planPeriodFilter) console.log(`Plan Period Filter: [${planPeriodFilter.join(', ')}]`);
    if (productIdFilter) {
      const preview = productIdFilter.length <= 8 ? ` — ${productIdFilter.join(', ')}` : '';
      console.log(`Product ID Filter: ${productIdFilter.length} id(s)${preview}`);
    }
    console.log(`Territories: ${territories.join(', ')}`);
    console.log(`On Conflict: ${onConflict}`);
    console.log('─'.repeat(80));
    console.log('\n📋 Offer Template:');
    console.log(`   Duration: ${duration}`);
    console.log(`   Offer Mode: ${offerMode}`);
    console.log(`   Number of Periods: ${numberOfPeriods}`);
    if (pricePoint) console.log(`   Price Point: ${pricePoint}`);
    if (startDate) console.log(`   Start Date: ${startDate}`);
    if (endDate) console.log(`   End Date: ${endDate}`);
    console.log('─'.repeat(80));

    console.log('\n🚀 Starting bulk creation...\n');

    const offerTemplate = {
      duration,
      offerMode,
      numberOfPeriods,
      territories
    };
    if (pricePoint) offerTemplate.subscriptionPricePoint = pricePoint;
    if (startDate) offerTemplate.startDate = startDate;
    if (endDate) offerTemplate.endDate = endDate;
    if (nameMatch) offerTemplate.nameMatch = nameMatch;
    if (planPeriodFilter) offerTemplate.planPeriodFilter = planPeriodFilter;
    if (productIdFilter) offerTemplate.productIdFilter = productIdFilter;
    offerTemplate.onConflict = onConflict;

    const result = await introductoryOfferService.bulkCreateIntroductoryOffers(
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
    console.log(`Matched Subscriptions: ${result.summary.matchedSubscriptions}`);
    console.log(`Territories: ${result.summary.territories.join(', ')}`);
    console.log(`Total Attempts: ${result.summary.total}`);
    console.log(`On Conflict: ${result.summary.onConflict}`);
    console.log(`\n✅ Created:   ${result.summary.succeeded}`);
    console.log(`🔁 Updated:   ${result.summary.updated || 0}`);
    console.log(`♻️  Replaced:  ${result.summary.replaced || 0}`);
    console.log(`⏭️  Skipped:   ${result.summary.skipped || 0}`);
    console.log(`❌ Failed:    ${result.summary.failed}`);
    console.log('═'.repeat(80));

    if (result.created.length > 0) {
      console.log('\n✅ SUCCESSFULLY CREATED OFFERS:\n');
      console.log('─'.repeat(80));
      result.created.forEach((offer, index) => {
        console.log(`${index + 1}. ${offer.subscriptionName}  [${offer.territory}]`);
        console.log(`   Product ID: ${offer.productId}`);
        console.log(`   Offer ID: ${offer.offerId}`);
        console.log('─'.repeat(80));
      });
    }

    if ((result.updated || []).length > 0) {
      console.log('\n🔁 UPDATED OFFERS (dates):\n');
      console.log('─'.repeat(80));
      result.updated.forEach((offer, index) => {
        console.log(`${index + 1}. ${offer.subscriptionName}  [${offer.territory}]`);
        console.log(`   Product ID: ${offer.productId}`);
        console.log(`   Offer ID: ${offer.offerId}`);
        if (offer.startDate) console.log(`   Start Date: ${offer.startDate}`);
        if (offer.endDate) console.log(`   End Date: ${offer.endDate}`);
        console.log('─'.repeat(80));
      });
    }

    if ((result.replaced || []).length > 0) {
      console.log('\n♻️  REPLACED OFFERS:\n');
      console.log('─'.repeat(80));
      result.replaced.forEach((offer, index) => {
        console.log(`${index + 1}. ${offer.subscriptionName}  [${offer.territory}]`);
        console.log(`   Product ID: ${offer.productId}`);
        console.log(`   Old Offer ID: ${offer.oldOfferId}`);
        console.log(`   New Offer ID: ${offer.offerId}`);
        console.log('─'.repeat(80));
      });
    }

    if ((result.skipped || []).length > 0) {
      console.log('\n⏭️  SKIPPED (existing offer, --on-conflict skip):\n');
      console.log('─'.repeat(80));
      result.skipped.forEach((offer, index) => {
        console.log(`${index + 1}. ${offer.subscriptionName}  [${offer.territory}]`);
        console.log(`   Product ID: ${offer.productId}`);
        console.log('─'.repeat(80));
      });
    }

    if (result.failed.length > 0) {
      console.log('\n❌ FAILED OFFERS:\n');
      console.log('─'.repeat(80));
      result.failed.forEach((failure, index) => {
        console.log(`${index + 1}. ${failure.subscriptionName}  [${failure.territory}]`);
        console.log(`   Product ID: ${failure.productId}`);
        console.log(`   Error: ${failure.error}`);
        console.log(`   Code: ${failure.code}`);
        console.log('─'.repeat(80));
      });
    }

    const fs = require('fs');
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const refSlug = referenceName.replace(/\s+/g, '-').replace(/\*/g, 'ALL');
    const outputPath = `./bulk-intro-offers-${refSlug}-${timestamp}.json`;

    const outputData = {
      bundleId,
      referenceName,
      offerTemplate,
      summary: result.summary,
      created: result.created,
      updated: result.updated || [],
      replaced: result.replaced || [],
      skipped: result.skipped || [],
      failed: result.failed,
      createdAt: new Date().toISOString()
    };

    fs.writeFileSync(outputPath, JSON.stringify(outputData, null, 2));
    console.log(`\n💾 Results saved to: ${outputPath}`);

    const rollbackCandidates = [
      ...result.created.map(o => ({
        offerId: o.offerId, subscriptionId: o.subscriptionId,
        subscriptionName: o.subscriptionName, territory: o.territory,
        origin: 'created'
      })),
      ...((result.replaced || []).map(o => ({
        offerId: o.offerId, subscriptionId: o.subscriptionId,
        subscriptionName: o.subscriptionName, territory: o.territory,
        replacedOfferId: o.oldOfferId, origin: 'replaced'
      })))
    ];

    if (rollbackCandidates.length > 0) {
      const rollbackPath = `./rollback-intro-${refSlug}-${timestamp}.json`;
      const rollbackData = {
        operation: 'bulk_create_introductory_offers',
        bundleId,
        referenceName,
        onConflict,
        createdOffers: rollbackCandidates,
        createdAt: new Date().toISOString()
      };
      fs.writeFileSync(rollbackPath, JSON.stringify(rollbackData, null, 2));
      console.log(`📝 Rollback log saved to: ${rollbackPath}`);
    }

    process.exit(result.summary.failed > 0 ? 1 : 0);

  } catch (error) {
    console.error('\n❌ Error:', error.message);

    if (error.statusCode === 401) {
      console.error('\n🔐 Authentication Error:');
      console.error('   Please check your App Store Connect API credentials in .env file');
    } else if (error.statusCode === 403) {
      console.error('\n🚫 Authorization Error:');
      console.error('   Your API key does not have permission to create introductory offers');
    } else if (error.statusCode === 404 || error.message.includes('not found')) {
      console.error('\n🔍 Not Found:');
      console.error(`   No subscription groups found with reference name "${process.argv[3]}" for bundle ID "${process.argv[2]}"`);
      console.error('\n   Tips:');
      console.error('   - Verify the reference name is correct (case-sensitive, exact match)');
      console.error('   - Run: npm run get-subscription-product-ids <bundle-id> to see available groups');
    }

    logger.error('Failed to bulk create introductory offers', {
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

// Collect positional (non-flag) args, skipping the value that follows any of
// the recognized value-taking flags. Used to support --bundle-id alongside
// the legacy positional <bundle-id> <reference-name> form.
const VALUE_FLAGS = new Set([
  '--bundle-id', '--territories', '--duration', '--mode', '--periods',
  '--price-point', '--start-date', '--end-date', '--match', '--plan-period',
  '--from-file', '--on-conflict'
]);
function collectPositionals(args) {
  const out = [];
  for (let i = 0; i < args.length; i++) {
    const a = args[i];
    if (a.startsWith('--') || a.startsWith('-')) {
      // --flag=value form: no separate value to skip.
      if (a.includes('=')) continue;
      // Skip the next arg only if this flag takes a value.
      if (VALUE_FLAGS.has(a)) i++;
      continue;
    }
    out.push(a);
  }
  return out;
}

function showHelp() {
  console.log(`
🎁 Bulk Create Introductory Offers

Creates introductory offers (including free trials) for ALL subscriptions in subscription
groups that match the given reference name (exact match), or all groups if "*" is specified.
Each offer is created per-territory — every (subscription × territory) pair produces one offer.

Usage:
  npm run bulk-create-introductory-offers -- --bundle-id <id> <reference-name> --territories <codes> [options]
  npm run bulk-create-introductory-offers -- <bundle-id> <reference-name> --territories <codes> [options]   (legacy positional)

Arguments:
  reference-name      Subscription group reference name (exact match required).
                      Use "*" to create offers for ALL subscription groups.
                      Optional when --from-file is supplied — in that case it's
                      derived from the file's "Group Name" column (CSV) or
                      subscriptionGroups[].groupName (JSON). One group → that
                      group's name; multiple → "*".

Required Options:
  --bundle-id <id>       App bundle identifier (preferred). Falls back to the first
                         positional argument when omitted.
  --territories <codes>  Comma-separated ISO territory codes, e.g. USA,GBR,CAN.
                         Use "ALL" (or "*") to target every territory the app is available in
                         (fetched from App Store Connect's /territories endpoint).

Options:
  --duration <dur>       Duration: THREE_DAYS, ONE_WEEK, TWO_WEEKS, ONE_MONTH,
                         TWO_MONTHS, THREE_MONTHS, SIX_MONTHS, ONE_YEAR
                         (default: ONE_WEEK)
  --mode <mode>          Offer mode: FREE_TRIAL, PAY_AS_YOU_GO, PAY_UP_FRONT
                         (default: FREE_TRIAL)
  --periods <num>        Number of periods (1-12, default: 1)
  --price-point <id>     Subscription price point ID (required for non-FREE_TRIAL modes)
  --start-date <date>    Optional start date (YYYY-MM-DD)
  --end-date <date>      Optional end date (YYYY-MM-DD)
  --match <substring>    Only include subscriptions whose name contains this substring
                         (case-insensitive). Useful when a group mixes billing cadences —
                         e.g. --match "Monthly" to apply a short-duration template only to
                         monthly subs, then run again with --match "Annual".
  --plan-period <list>   Only include subscriptions whose subscriptionPeriod is in this
                         comma-separated list. More reliable than --match when subscriptions
                         aren't named by cadence. Valid values: THREE_DAYS, ONE_WEEK,
                         TWO_WEEKS, ONE_MONTH, TWO_MONTHS, THREE_MONTHS, SIX_MONTHS, ONE_YEAR.
                         Example: --plan-period ONE_MONTH,TWO_MONTHS
  --from-file <path>     Load an explicit productId allowlist from a file. Accepts:
                           - CSV from get-apple-product-ids.js (uses "Product ID"
                             column; also reads "Group Name" if present)
                           - JSON from get-apple-product-ids.js / generate-product-ids.js
                             (subscriptionGroups[].subscriptions[].productId, plus
                             subscriptionGroups[].groupName; or top-level productIds[]).
                         Combined with the reference-name + --match / --plan-period filters
                         (intersection). When the reference-name positional is omitted, it's
                         derived from the file: one distinct group → that name; multiple → "*".
  --on-conflict <mode>   How to handle (subscription, territory) pairs that already have an
                         introductory offer. Values:
                           skip     — leave existing alone (default)
                           update   — call Apple's update API with --start-date/--end-date.
                                      Only those two fields can be changed; duration, mode,
                                      periods, and price-point are immutable on an existing
                                      offer. Requires at least one of --start-date/--end-date.
                           replace  — delete the existing offer, then create a new one from
                                      the template. Use this to change duration/mode/periods/
                                      price. DESTRUCTIVE: original offer ID is lost. Apple may
                                      reject the delete for currently-active offers — such
                                      pairs are logged as failed and the batch continues.
  --help, -h             Show this help message

Examples:
  # Preferred: bundle-id as a named flag
  npm run bulk-create-introductory-offers -- --bundle-id <bundle-id> "Group 1" --territories USA

  # One-week free trial, single territory (legacy positional bundle-id)
  npm run bulk-create-introductory-offers -- <bundle-id> "Group 1" --territories USA

  # Free trial across multiple territories for all groups
  npm run bulk-create-introductory-offers -- <bundle-id> "*" --territories USA,GBR,CAN --mode FREE_TRIAL --duration ONE_WEEK

  # Free trial across ALL territories
  npm run bulk-create-introductory-offers -- <bundle-id> "Group 1" --territories ALL --mode FREE_TRIAL --duration ONE_WEEK

  # Mixed-cadence group: apply short trial to monthly subs only (by name)
  npm run bulk-create-introductory-offers -- <bundle-id> "Group 1" --territories ALL --match "Monthly" --duration ONE_WEEK --periods 1

  # Or filter by the actual subscriptionPeriod field (more reliable than naming)
  npm run bulk-create-introductory-offers -- <bundle-id> "Group 1" --territories ALL --plan-period ONE_MONTH --duration ONE_WEEK --periods 1

  # Multiple plan periods at once
  npm run bulk-create-introductory-offers -- <bundle-id> "Group 1" --territories ALL --plan-period ONE_MONTH,TWO_MONTHS --duration TWO_WEEKS

  # Use a CSV from get-apple-product-ids.js as an explicit productId allowlist
  npm run get-apple-product-ids -- --bundle-id <bundle-id> --csv
  npm run bulk-create-introductory-offers -- --bundle-id <bundle-id> "*" --territories USA --from-file product-ids-apple-<bundle-id>.csv

  # Reference-name omitted — derived from the file's "Group Name" column
  npm run bulk-create-introductory-offers -- --bundle-id <bundle-id> --territories USA --from-file product-ids-apple-<bundle-id>.csv

  # Same idea with the JSON output instead of CSV
  npm run bulk-create-introductory-offers -- --bundle-id <bundle-id> --territories USA --from-file product-ids-apple-<bundle-id>.json

  # Then apply a longer trial to annual subs in the same group
  npm run bulk-create-introductory-offers -- <bundle-id> "Group 1" --territories ALL --plan-period ONE_YEAR --duration ONE_MONTH --periods 1

  # Paid introductory offer with a price point
  npm run bulk-create-introductory-offers -- <bundle-id> "Group 1" --territories USA --mode PAY_AS_YOU_GO --periods 3 --price-point <PRICE_POINT_ID>

  # Re-run an existing campaign, shifting only the offer window dates
  npm run bulk-create-introductory-offers -- <bundle-id> "Group 1" --territories ALL --on-conflict update --start-date 2026-05-01 --end-date 2026-05-31

  # Change the actual offer (duration/mode/periods): delete + recreate
  npm run bulk-create-introductory-offers -- <bundle-id> "Group 1" --territories ALL --duration TWO_WEEKS --on-conflict replace

How It Works:
  1. Finds subscription groups matching the reference name (or all if "*")
  2. Gets all subscriptions in those groups
  3. For each subscription × territory pair, creates one introductory offer
  4. Saves results and rollback log to files

Notes:
  - Introductory offers are per-territory (unlike promotional offers)
  - Reference name must match EXACTLY (case-sensitive), or use "*" for all groups
  - FREE_TRIAL offers do not require a price point
  - Price point IDs are auto-converted to the target territory when possible
  - Operation continues even if some offers fail

Output Files:
  - bulk-intro-offers-<reference>-<timestamp>.json  # Full results
  - rollback-intro-<reference>-<timestamp>.json     # Created offer IDs for cleanup

Related Commands:
  npm run get-subscription-product-ids <bundle-id>  # List subscription groups
  npm run get-introductory-offers <bundle-id> # List existing introductory offers
  npm run get-price-points <subscription-id>              # Find a price point ID
  `);
}

bulkCreateIntroductoryOffers();
