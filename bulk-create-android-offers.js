#!/usr/bin/env node

/**
 * Bulk Create Android Subscription Offers
 *
 * Creates Google Play subscription offers across subscriptions and base plans
 * for a given package. Unlike Apple, Google Play has a single "offer" concept —
 * an intro-like offer is produced by targeting users who have never subscribed
 * (default), which restricts the offer to new subscribers.
 *
 * Usage:
 *   npm run bulk-create-android-offers -- --package-name <pkg> [options]
 */

require('dotenv').config();
const fs = require('fs');
const androidOffersService = require('./src/services/android-offers');
const { DURATION_MAPPING } = require('./src/config/googleplay');
const logger = require('./src/utils/logger');

async function bulkCreateAndroidOffers() {
  try {
    const args = process.argv.slice(2);

    if (args.includes('--help') || args.includes('-h') || args.length === 0) {
      showHelp();
      process.exit(0);
    }

    const packageName = getArgValue(args, '--package-name');

    if (!packageName) {
      console.error('❌ Error: --package-name <pkg> is required\n');
      showHelp();
      process.exit(1);
    }


    // Parse options
    const mode = (getArgValue(args, '--mode') || 'FREE_TRIAL').toUpperCase();
    const durationArg = getArgValue(args, '--duration') || 'TWO_WEEKS';
    const duration = normalizeIsoDuration(durationArg);
    const periods = parseInt(getArgValue(args, '--periods') || '1', 10);
    const discountPercentArg = getArgValue(args, '--discount-percent');
    const priceStr = getArgValue(args, '--price');
    const currency = (getArgValue(args, '--currency') || 'USD').toUpperCase();

    const productIdsArg = getArgValue(args, '--product-ids');
    const basePlanIdsArg = getArgValue(args, '--base-plan-ids');
    const planPeriodArg = getArgValue(args, '--plan-period');
    const offerTagsArg = getArgValue(args, '--offer-tags');
    const fromFile = getArgValue(args, '--from-file');

    const customOfferId = getArgValue(args, '--offer-id');
    const prefix = getArgValue(args, '--prefix');
    const offerId = customOfferId || generateOfferId(prefix);

    // Eligibility / acquisition targeting:
    //   (default)                                            → acquisitionRule.scope.anySubscriptionInApp
    //                                                          (user has never subscribed to ANY subscription in the app)
    //   --target-users-who-never-had-any-subscription        → same as default (explicit form)
    //   --target-users-who-never-had-this-subscription       → acquisitionRule.scope.thisSubscription
    //                                                          (user has never subscribed to THIS subscription)
    //   --developer-determined                               → no targeting; offer is not auto-shown.
    //                                                          The app must attach it via Play Billing's
    //                                                          subscriptionOfferToken when launching the
    //                                                          billing flow. Not exposed in the Play Console UI.
    const targetUsersWhoNeverHadAnySubscription = args.includes('--target-users-who-never-had-any-subscription');
    const targetUsersWhoNeverHadThisSubscription = args.includes('--target-users-who-never-had-this-subscription');
    const developerDetermined = args.includes('--developer-determined');

    if (targetUsersWhoNeverHadAnySubscription && targetUsersWhoNeverHadThisSubscription) {
      console.error('❌ Error: --target-users-who-never-had-any-subscription conflicts with --target-users-who-never-had-this-subscription\n');
      process.exit(1);
    }
    if (developerDetermined && (targetUsersWhoNeverHadAnySubscription || targetUsersWhoNeverHadThisSubscription)) {
      console.error('❌ Error: --developer-determined conflicts with --target-users-who-never-had-any-subscription / --target-users-who-never-had-this-subscription\n');
      process.exit(1);
    }

    // Resolve to one of: 'app' | 'this' | 'none'. Default is 'app' (never had any subscription).
    let eligibility;
    if (developerDetermined) eligibility = 'none';
    else if (targetUsersWhoNeverHadThisSubscription) eligibility = 'this';
    else eligibility = 'app';

    const targetNewCustomers = eligibility !== 'none';

    // --activate auto-activates offers right after creation (default: leave in DRAFT)
    const autoActivate = args.includes('--activate');

    // Conflict handling when an offer with --offer-id already exists on a base plan
    const onConflict = (getArgValue(args, '--on-conflict') || 'skip').toLowerCase();
    const validConflictModes = ['skip', 'update', 'replace'];
    if (!validConflictModes.includes(onConflict)) {
      console.error(`❌ Error: Invalid --on-conflict value "${onConflict}"`);
      console.error(`   Valid values: ${validConflictModes.join(', ')}\n`);
      process.exit(1);
    }
    const updateMask = getArgValue(args, '--update-mask') || null;
    if (updateMask && onConflict !== 'update') {
      console.error(`❌ Error: --update-mask only applies when --on-conflict update\n`);
      process.exit(1);
    }

    // Validation
    const validModes = ['FREE_TRIAL', 'PAY_AS_YOU_GO', 'PAY_UP_FRONT'];
    if (!validModes.includes(mode)) {
      console.error(`❌ Error: Invalid --mode "${mode}". Must be one of: ${validModes.join(', ')}\n`);
      process.exit(1);
    }

    if (!duration) {
      console.error(`❌ Error: Invalid --duration "${durationArg}".`);
      console.error('   iOS-style: THREE_DAYS, ONE_WEEK, TWO_WEEKS, ONE_MONTH, TWO_MONTHS, THREE_MONTHS, SIX_MONTHS, ONE_YEAR');
      console.error('   ISO 8601 (any P<n>[DWMY]): P3D, P1W, P2W, P1M, P1Y, etc.\n');
      process.exit(1);
    }

    if (!/^[a-zA-Z0-9_-]+$/.test(offerId) || offerId.length > 63) {
      console.error(`❌ Error: Offer ID "${offerId}" must match /^[a-zA-Z0-9_-]+$/ and be ≤ 63 chars\n`);
      process.exit(1);
    }

    let discountPercent = null;
    let price = null;
    if (mode === 'PAY_AS_YOU_GO' || mode === 'PAY_UP_FRONT') {
      if (discountPercentArg && priceStr) {
        console.error('❌ Error: --discount-percent and --price are mutually exclusive. Provide one.\n');
        process.exit(1);
      }
      if (!discountPercentArg && !priceStr) {
        console.error(`❌ Error: --mode ${mode} requires either --discount-percent <1-99> or --price <amount> [--currency <CODE>]\n`);
        process.exit(1);
      }
      if (discountPercentArg) {
        discountPercent = parseFloat(discountPercentArg);
        if (!(discountPercent >= 1 && discountPercent <= 99)) {
          console.error('❌ Error: --discount-percent must be between 1 and 99\n');
          process.exit(1);
        }
      } else {
        price = parsePrice(priceStr, currency);
        if (!price) {
          console.error(`❌ Error: Invalid --price "${priceStr}". Use a decimal like 4.99\n`);
          process.exit(1);
        }
      }
    }

    if (mode === 'PAY_AS_YOU_GO' && !(periods >= 1 && periods <= 52)) {
      console.error('❌ Error: --periods must be between 1 and 52\n');
      process.exit(1);
    }

    let productIds = productIdsArg
      ? productIdsArg.split(',').map(s => s.trim()).filter(Boolean)
      : null;

    // --from-file: extract productIds from either:
    //   - JSON from generate-product-ids.js / bulk-create-subscriptions-android
    //     ({ subscriptionGroups: [{ subscriptions: [{ productId }] }] })
    //     or get-android-product-ids.js ({ productIds: [...] })
    //   - CSV from get-android-product-ids.js (must have a "Product ID" column)
    // File type is detected by extension; .csv → CSV, anything else → JSON.
    // If both --from-file and --product-ids are supplied, they're merged (union).
    if (fromFile) {
      if (!fs.existsSync(fromFile)) {
        console.error(`❌ Error: --from-file "${fromFile}" not found\n`);
        process.exit(1);
      }
      let fileProductIds;
      try {
        fileProductIds = fromFile.toLowerCase().endsWith('.csv')
          ? loadProductIdsFromCsv(fromFile)
          : loadProductIdsFromJson(fromFile);
      } catch (err) {
        console.error(`❌ Error: ${err.message}\n`);
        process.exit(1);
      }
      if (fileProductIds.length === 0) {
        console.error(`❌ Error: --from-file "${fromFile}" contains no productIds\n`);
        process.exit(1);
      }
      productIds = Array.from(new Set([...(productIds || []), ...fileProductIds]));
      console.log(`📂 Loaded ${fileProductIds.length} productId(s) from ${fromFile}`);
    }
    const basePlanIds = basePlanIdsArg
      ? basePlanIdsArg.split(',').map(s => s.trim()).filter(Boolean)
      : null;
    const offerTags = offerTagsArg
      ? offerTagsArg.split(',').map(s => s.trim()).filter(Boolean)
      : null;

    if (developerDetermined && (!offerTags || offerTags.length === 0)) {
      console.error('❌ Error: --developer-determined requires --offer-tags <name[,name...]>');
      console.error('   A developer-determined offer has no acquisition rule, so your app must');
      console.error('   look it up by tag via subscriptionOfferToken. Without a tag, the offer');
      console.error('   is unreachable. Example: --developer-determined --offer-tags holiday25\n');
      process.exit(1);
    }

    let basePlanPeriods = null;
    if (planPeriodArg) {
      basePlanPeriods = planPeriodArg
        .split(',')
        .map(s => normalizeIsoDuration(s.trim().toUpperCase()))
        .filter(Boolean);
      if (basePlanPeriods.length === 0) {
        console.error(`❌ Error: Invalid --plan-period "${planPeriodArg}". Use iOS-style (ONE_MONTH) or ISO 8601 (P1M)\n`);
        process.exit(1);
      }
    }

    // Build phase(s)
    const phase = { offerMode: mode, duration };
    if (mode === 'PAY_AS_YOU_GO') {
      phase.recurrenceCount = periods;
      if (discountPercent !== null) phase.pricePercentageDiscount = discountPercent;
      else phase.price = price;
    } else if (mode === 'PAY_UP_FRONT') {
      if (discountPercent !== null) phase.pricePercentageDiscount = discountPercent;
      else phase.price = price;
    }

    // Build offer template
    const offerTemplate = {
      offerId,
      phases: [phase],
      targetNewCustomers
    };
    // Default eligibility is "new to app" (anySubscriptionInApp). The service layer
    // only knows how to build thisSubscription from `targetNewCustomers: true`, so for
    // the app-wide scope we pass an explicit `targeting` object that the service uses as-is.
    if (eligibility === 'app') {
      offerTemplate.targeting = {
        acquisitionRule: {
          scope: { anySubscriptionInApp: {} }
        }
      };
    }
    // eligibility === 'this' → no explicit targeting; service converts targetNewCustomers: true → thisSubscription
    // eligibility === 'none' → targetNewCustomers is false; service emits no targeting
    if (offerTags) offerTemplate.offerTags = offerTags;
    if (productIds) offerTemplate.productIds = productIds;
    if (basePlanIds) offerTemplate.basePlanIds = basePlanIds;
    if (basePlanPeriods) offerTemplate.basePlanPeriods = basePlanPeriods;
    offerTemplate.onConflict = onConflict;
    if (updateMask) offerTemplate.updateMask = updateMask;

    console.log('\n🎁 Bulk Create Android Offers\n');
    console.log('─'.repeat(80));
    console.log(`Package: ${packageName}`);
    console.log(`Offer ID: ${offerId}${customOfferId ? '' : ' (auto-generated)'}`);
    console.log(`Mode: ${mode}`);
    console.log(`Duration: ${duration}`);
    if (mode === 'PAY_AS_YOU_GO') console.log(`Recurrence: ${periods}`);
    if (discountPercent !== null) console.log(`Discount: ${discountPercent}%`);
    if (price) console.log(`Price: ${price.units}.${String(price.nanos).padStart(9, '0').slice(0, 2)} ${price.currencyCode}`);
    const eligibilityLabel =
      eligibility === 'app' ? 'never subscribed to ANY subscription in the app (default)'
      : eligibility === 'this' ? 'never subscribed to THIS subscription'
      : 'developer-determined (no auto-targeting; app must attach by offerToken)';
    console.log(`Eligibility: ${eligibilityLabel}`);
    console.log(`Auto-activate after create: ${autoActivate}`);
    if (productIds) console.log(`Product IDs filter: ${productIds.length} id(s)${productIds.length <= 8 ? ` — ${productIds.join(', ')}` : ''}`);
    if (basePlanIds) console.log(`Base plan IDs filter: ${basePlanIds.join(', ')}`);
    if (basePlanPeriods) console.log(`Base plan period filter: [${basePlanPeriods.join(', ')}]`);
    if (offerTags) console.log(`Offer tags: ${offerTags.join(', ')}`);
    console.log(`On Conflict: ${onConflict}${updateMask ? ` (mask: ${updateMask})` : ''}`);
    console.log('─'.repeat(80));
    console.log('\n🚀 Starting bulk creation...\n');

    const result = await androidOffersService.bulkCreateOffers(packageName, offerTemplate);

    console.log('\n✅ Bulk creation completed!\n');
    console.log('═'.repeat(80));
    console.log('📊 SUMMARY');
    console.log('═'.repeat(80));
    console.log(`Package: ${result.summary.packageName}`);
    console.log(`Offer ID: ${result.summary.offerId}`);
    console.log(`Total Attempts: ${result.summary.total}`);
    console.log(`On Conflict: ${result.summary.onConflict}${result.summary.updateMask ? ` (mask: ${result.summary.updateMask})` : ''}`);
    console.log(`✅ Created:   ${result.summary.succeeded}`);
    console.log(`🔁 Updated:   ${result.summary.updated || 0}`);
    console.log(`♻️  Replaced:  ${result.summary.replaced || 0}`);
    console.log(`⏭️  Skipped:   ${result.summary.skipped || 0}`);
    console.log(`❌ Failed:    ${result.summary.failed}`);
    console.log('═'.repeat(80));

    if (result.created.length > 0) {
      console.log('\n✅ SUCCESSFULLY CREATED OFFERS:\n');
      console.log('─'.repeat(80));
      result.created.forEach((o, i) => {
        console.log(`${i + 1}. ${o.productId}`);
        console.log(`   Base Plan: ${o.basePlanId}`);
        console.log(`   Offer ID: ${o.offerId}`);
        if (o.state) console.log(`   State: ${o.state}`);
        console.log('─'.repeat(80));
      });
    }

    if ((result.updated || []).length > 0) {
      console.log('\n🔁 UPDATED OFFERS:\n');
      console.log('─'.repeat(80));
      result.updated.forEach((o, i) => {
        console.log(`${i + 1}. ${o.productId} / ${o.basePlanId} / ${o.offerId}`);
        if (o.updateMask) console.log(`   Updated fields: ${o.updateMask}`);
        if (o.state) console.log(`   State: ${o.state}`);
        console.log('─'.repeat(80));
      });
    }

    if ((result.replaced || []).length > 0) {
      console.log('\n♻️  REPLACED OFFERS:\n');
      console.log('─'.repeat(80));
      result.replaced.forEach((o, i) => {
        console.log(`${i + 1}. ${o.productId} / ${o.basePlanId} / ${o.offerId}`);
        if (o.state) console.log(`   State: ${o.state}`);
        console.log('─'.repeat(80));
      });
    }

    if ((result.skipped || []).length > 0) {
      console.log('\n⏭️  SKIPPED (existing offer, --on-conflict skip):\n');
      console.log('─'.repeat(80));
      result.skipped.forEach((o, i) => {
        console.log(`${i + 1}. ${o.productId} / ${o.basePlanId} / ${o.offerId}`);
        console.log('─'.repeat(80));
      });
    }

    if (result.failed.length > 0) {
      console.log('\n❌ FAILED OFFERS:\n');
      console.log('─'.repeat(80));
      result.failed.forEach((f, i) => {
        console.log(`${i + 1}. ${f.productId} / ${f.basePlanId}`);
        console.log(`   Error: ${f.error}`);
        console.log(`   Code: ${f.code}`);
        console.log('─'.repeat(80));
      });
    }

    // Optional: activate the offers we just created. Offers are returned in DRAFT state
    // from Google; activation makes them visible to users.
    const activationResults = { activated: [], failed: [] };
    if (autoActivate && result.created.length > 0) {
      console.log('\n⚡ Activating created offers...\n');
      for (const o of result.created) {
        try {
          await androidOffersService.activateOffer(packageName, o.productId, o.basePlanId, o.offerId);
          activationResults.activated.push(o);
          console.log(`✅ Activated: ${o.productId} / ${o.basePlanId} / ${o.offerId}`);
        } catch (err) {
          activationResults.failed.push({ ...o, error: err.message });
          console.log(`❌ Activation failed: ${o.productId} / ${o.basePlanId} / ${o.offerId} — ${err.message}`);
        }
      }
      console.log('\n═'.repeat(80));
      console.log(`⚡ Activation: ${activationResults.activated.length} activated, ${activationResults.failed.length} failed`);
      console.log('═'.repeat(80));
    }

    // Save results + rollback log
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const outputPath = `./bulk-android-offers-${offerId}-${timestamp}.json`;
    fs.writeFileSync(outputPath, JSON.stringify({
      packageName,
      offerTemplate,
      summary: result.summary,
      created: result.created,
      updated: result.updated || [],
      replaced: result.replaced || [],
      skipped: result.skipped || [],
      failed: result.failed,
      activation: autoActivate ? activationResults : null,
      createdAt: new Date().toISOString()
    }, null, 2));
    console.log(`\n💾 Results saved to: ${outputPath}`);

    // Rollback log covers offers we created OR re-created (replace path); the original
    // IDs from replace are already gone, so the log captures what's live now.
    const rollbackOffers = [
      ...result.created.map(o => ({ packageName, productId: o.productId, basePlanId: o.basePlanId, offerId: o.offerId, origin: 'created' })),
      ...(result.replaced || []).map(o => ({ packageName, productId: o.productId, basePlanId: o.basePlanId, offerId: o.offerId, origin: 'replaced' }))
    ];
    if (rollbackOffers.length > 0) {
      const rollbackPath = `./rollback-android-${offerId}-${timestamp}.json`;
      fs.writeFileSync(rollbackPath, JSON.stringify({
        operation: 'bulk_create_android_offers',
        packageName,
        offerId,
        onConflict,
        createdOffers: rollbackOffers,
        createdAt: new Date().toISOString()
      }, null, 2));
      console.log(`📝 Rollback log saved to: ${rollbackPath}`);
    }

    const totalFailures = result.summary.failed + (activationResults.failed?.length || 0);
    process.exit(totalFailures > 0 ? 1 : 0);

  } catch (error) {
    console.error('\n❌ Error:', error.message);
    if (error.statusCode === 401) {
      console.error('\n🔐 Authentication Error: Check GOOGLE_APPLICATION_CREDENTIALS in .env');
    } else if (error.statusCode === 403) {
      console.error('\n🚫 Authorization Error: Service account lacks permission to manage offers');
    } else if (error.statusCode === 404) {
      console.error('\n🔍 Not Found: Verify the package name, productIds, and basePlanIds');
    }
    logger.error('Failed to bulk create Android offers', {
      error: error.message,
      stack: error.stack
    });
    process.exit(1);
  }
}

function getArgValue(args, flag) {
  const i = args.indexOf(flag);
  return (i !== -1 && i + 1 < args.length) ? args[i + 1] : null;
}

function loadProductIdsFromJson(filePath) {
  let json;
  try {
    json = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  } catch (err) {
    throw new Error(`--from-file "${filePath}" is not valid JSON: ${err.message}`);
  }
  const ids = [];
  if (Array.isArray(json.subscriptionGroups)) {
    for (const group of json.subscriptionGroups) {
      for (const sub of (group.subscriptions || [])) {
        if (sub.productId) ids.push(sub.productId);
      }
    }
  }
  if (Array.isArray(json.productIds)) {
    for (const pid of json.productIds) {
      if (pid) ids.push(pid);
    }
  }
  if (ids.length === 0) {
    throw new Error(
      `--from-file "${filePath}" has no productIds (expected "subscriptionGroups[].subscriptions[].productId" or "productIds[]")`
    );
  }
  return ids;
}

// RFC4180-ish CSV parser: handles quoted fields with embedded commas / newlines / "" escapes.
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
        else { inQuotes = false; }
      } else {
        field += c;
      }
      continue;
    }
    if (c === '"') { inQuotes = true; continue; }
    if (c === ',') { row.push(field); field = ''; continue; }
    if (c === '\r') { continue; }
    if (c === '\n') {
      row.push(field); field = '';
      if (row.length > 1 || row[0] !== '') rows.push(row);
      row = [];
      continue;
    }
    field += c;
  }
  if (field.length > 0 || row.length > 0) {
    row.push(field);
    if (row.length > 1 || row[0] !== '') rows.push(row);
  }
  return rows;
}

function loadProductIdsFromCsv(filePath) {
  const rows = parseCsv(fs.readFileSync(filePath, 'utf8'));
  if (rows.length < 2) {
    throw new Error(`--from-file "${filePath}" has no data rows`);
  }
  const headers = rows[0].map(h => h.trim());
  const idx = headers.indexOf('Product ID');
  if (idx === -1) {
    throw new Error(
      `--from-file "${filePath}" has no "Product ID" column. Found: ${headers.join(', ')}`
    );
  }
  const ids = [];
  for (let i = 1; i < rows.length; i++) {
    const v = (rows[i][idx] || '').trim();
    if (v) ids.push(v);
  }
  return ids;
}

function normalizeIsoDuration(input) {
  if (!input) return null;
  const upper = input.toUpperCase();
  if (DURATION_MAPPING[upper]) return DURATION_MAPPING[upper];
  // Pass through any valid ISO 8601 P<n>[DWMY] form so offer phases can use
  // day-granular durations (e.g. P3D, P5D) that aren't in the alias table.
  if (/^P\d+[DWMY]$/.test(upper)) return upper;
  return null;
}

function parsePrice(priceStr, currency) {
  const n = parseFloat(priceStr);
  if (isNaN(n) || n < 0) return null;
  const units = Math.floor(n).toString();
  const nanos = Math.round((n - Math.floor(n)) * 1e9);
  return { units, nanos, currencyCode: currency };
}

function generateOfferId(prefix) {
  const base = (prefix || 'promo').toLowerCase().replace(/[^a-z0-9-]/g, '-').slice(0, 20);
  const ts = Date.now().toString(36);
  const rand = Math.random().toString(36).substring(2, 6);
  return `${base}-${ts}-${rand}`;
}

function showHelp() {
  console.log(`
🎁 Bulk Create Android Subscription Offers

Creates Google Play subscription offers across subscriptions × base plans in a package.
Google Play has one offer concept — an "introductory" offer is simply an offer that
targets users who have never subscribed (the default for this script).

Usage:
  npm run bulk-create-android-offers -- --package-name <pkg> [options]

Required:
  --package-name <pkg>     Android application ID.

Offer ID:
  --offer-id <id>     Custom offer ID (1–63 chars, [a-zA-Z0-9_-]). If omitted, auto-generated.
  --prefix <prefix>   Prefix for auto-generated offer ID (default: "promo")

Phase options:
  --mode <mode>       FREE_TRIAL | PAY_AS_YOU_GO | PAY_UP_FRONT (default: FREE_TRIAL)
  --duration <dur>    Phase duration. iOS-style: THREE_DAYS, ONE_WEEK, TWO_WEEKS,
                      ONE_MONTH, TWO_MONTHS, THREE_MONTHS, SIX_MONTHS, ONE_YEAR.
                      ISO 8601: any P<n>[DWMY] form — e.g. P3D, P1W, P2W, P1M, P1Y.
                      (default: TWO_WEEKS)
  --periods <num>     Recurrence count for PAY_AS_YOU_GO (1–52, default: 1)
  --discount-percent <n>   Percentage discount (1–99) for PAY_AS_YOU_GO / PAY_UP_FRONT
  --price <amount>    Absolute price for PAY_AS_YOU_GO / PAY_UP_FRONT (e.g. 4.99).
                      Mutually exclusive with --discount-percent.
  --currency <code>   ISO 4217 currency code (default: USD). Used with --price.

Activation:
  --activate                  Activate each offer immediately after creation. Without this
                              flag, offers are created in DRAFT state and invisible to users.

Eligibility targeting (mutually exclusive):
  (default)                                        acquisitionRule.scope.anySubscriptionInApp —
                                                   user has never subscribed to ANY subscription in the app.
                                                   Use this for strict "brand-new customer" offers that should
                                                   never be seen by users who previously tried other tiers.
  --target-users-who-never-had-any-subscription    Same as default (explicit form).
  --target-users-who-never-had-this-subscription   acquisitionRule.scope.thisSubscription —
                                                   user has never subscribed to THIS subscription (they may have
                                                   had other subscriptions in the app before).
  --developer-determined                           No targeting. The offer is NOT auto-shown to users; the app
                                                   must look it up by tag via Play Billing's
                                                   subscriptionOfferToken when launching the billing flow.
                                                   Requires --offer-tags <name> — without a tag, the offer
                                                   is unreachable.

Filters:
  --product-ids <list>        Comma-separated Google Play product IDs to target
  --base-plan-ids <list>      Comma-separated base plan IDs to target
  --plan-period <list>        Comma-separated billing periods to filter base plans by
                              (e.g. ONE_MONTH,ONE_YEAR or P1M,P1Y)
  --from-file <path>          Load productIds from a JSON or CSV file. Scopes offer
                              creation to exactly the products in that file. Merged
                              (union) with --product-ids if both are set.
                              Accepts:
                                - JSON from generate-product-ids.js /
                                  bulk-create-subscriptions-android
                                  ({ subscriptionGroups: [...] }) or
                                  get-android-product-ids.js ({ productIds: [...] })
                                - CSV from get-android-product-ids.js (must have a
                                  "Product ID" column)
                              File type is detected by extension (.csv → CSV).
  --offer-tags <list>         Comma-separated offer tags

Conflict handling (when an offer with --offer-id already exists on a base plan):
  --on-conflict <mode>        skip    — leave existing alone (default)
                              update  — PATCH the offer using the template payload.
                                        Google Play is flexible: phases, offerTags,
                                        targeting, and regionalConfigs can be updated
                                        even on ACTIVE offers (though some phase/duration
                                        changes on ACTIVE offers are restricted).
                              replace — delete the existing offer, then create a new one.
                                        Use this to change things Play won't patch.
                                        Play only allows delete on DRAFT offers — any
                                        offer ever activated cannot be deleted via API.
  --update-mask <paths>       Comma-separated field paths to patch on --on-conflict update.
                              Default: phases,offerTags,targeting,regionalConfigs
                              Narrow the mask (e.g. "offerTags,regionalConfigs") when
                              updating ACTIVE offers to avoid 400s on restricted fields.

Other:
  --help, -h          Show this help

Examples:
  # Basic two-week free trial for users who never subscribed to ANY subscription in the app
  npm run bulk-create-android-offers -- --package-name <package-name>

  # 14-day free trial, monthly base plans only
  npm run bulk-create-android-offers -- --package-name <package-name> \\
    --duration TWO_WEEKS --plan-period ONE_MONTH

  # 3 months at 50% off for new subscribers (intro-style, percentage discount)
  npm run bulk-create-android-offers -- --package-name <package-name> \\
    --mode PAY_AS_YOU_GO --duration ONE_MONTH --periods 3 --discount-percent 50

  # First month at absolute $1.99 USD
  npm run bulk-create-android-offers -- --package-name <package-name> \\
    --mode PAY_AS_YOU_GO --duration ONE_MONTH --periods 1 --price 1.99

  # Narrower: allow users who had OTHER subscriptions in the app but not THIS one
  npm run bulk-create-android-offers -- --package-name <package-name> \\
    --target-users-who-never-had-this-subscription --duration ONE_MONTH

  # Developer-determined offer (no auto-targeting; app looks up by tag at billing time)
  npm run bulk-create-android-offers -- --package-name <package-name> \\
    --developer-determined --offer-tags holiday25 --plan-period ONE_YEAR --duration ONE_MONTH

  # Target specific products, auto-generated offer ID with custom prefix
  npm run bulk-create-android-offers -- --package-name <package-name> \\
    --product-ids com.vtech.plus.monthly,com.vtech.plus.annual --prefix spring24

  # Create offers for the same set of products that bulk-create-subscriptions-android
  # consumed — read the input JSON directly (ideal after creating subs, to wrap
  # them with a free trial).
  npm run bulk-create-android-offers -- --package-name <package-name> \\
    --from-file product-ids.json --duration ONE_WEEK --activate

Output Files:
  bulk-android-offers-<offerId>-<timestamp>.json   # Full results
  rollback-android-<offerId>-<timestamp>.json      # Created offer locators for cleanup

Notes:
  - One offer ID is used across all (product × base plan) pairs
  - Google Play offer IDs are scoped to (product, base plan), so reuse across pairs is fine
  - Default eligibility is "never subscribed to any subscription in the app" — strictest
    new-customer scope. Pass --target-users-who-never-had-this-subscription to narrow to
    this-subscription only, or --developer-determined --offer-tags <name> to skip
    targeting (the app then looks up the offer by tag via subscriptionOfferToken).
`);
}

bulkCreateAndroidOffers();
