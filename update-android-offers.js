#!/usr/bin/env node

/**
 * Update Android subscription offers in place (PATCH).
 *
 * Identifies offers from a CSV (Package Name, Product ID, Base Plan ID, Offer ID)
 * and PATCHes each one. No new offer is created and no existing offer is replaced.
 *
 * Update values are taken from CLI flags (override, applied to every row) or
 * from optional CSV columns (Phase Type, Phase Duration, Recurrence Count,
 * Offer Tags, Targeting). CLI flags win over CSV values.
 *
 * Google Play update notes:
 *   - Patchable fields: phases, offerTags, targeting, regionalConfigs.
 *   - On ACTIVE offers some phase/duration changes are rejected. Narrow the mask
 *     with --update-mask (e.g. "offerTags") to avoid touching restricted fields.
 *   - To change anything else (e.g. offerId), use bulk-create with --on-conflict
 *     replace, which is destructive — it deletes and recreates.
 *
 * ⚠️ CRITICAL: ONLY use the test package for testing.
 *
 * Usage:
 *   node update-android-offers.js --package-name <pkg> --from-csv <offers.csv> [options]
 */

require('dotenv').config();
const fs = require('fs');
const androidOffersService = require('./src/services/android-offers');
const { DURATION_MAPPING } = require('./src/config/googleplay');
const logger = require('./src/utils/logger');

const TEST_PACKAGE = 'com.vtech.app.plus.uat';

function parseArgs(argv) {
  const args = {
    packageName: null,
    fromCsv: null,
    productIdFilter: null,
    basePlanIdFilter: null,
    offerIdFilter: null,
    mode: null,
    duration: null,
    periods: null,
    discountPercent: null,
    price: null,
    currency: 'USD',
    offerTags: null,
    targeting: null,
    updateMask: null,
    regionsVersion: null,
    dryRun: false,
    confirm: false,
    help: false
  };

  const rest = argv.slice(2);
  for (let i = 0; i < rest.length; i++) {
    const a = rest[i];
    const take = (flag) => {
      if (a === flag) return rest[++i];
      if (a.startsWith(flag + '=')) return a.slice(flag.length + 1);
      return undefined;
    };

    if (a === '--help' || a === '-h') { args.help = true; continue; }
    if (a === '--dry-run') { args.dryRun = true; continue; }
    if (a === '--confirm') { args.confirm = true; continue; }

    const pkg = take('--package-name') ?? take('--package');
    const fc = take('--from-csv');
    const pid = take('--product-id');
    const bp = take('--base-plan-id');
    const oid = take('--offer-id');
    const mode = take('--mode');
    const dur = take('--duration');
    const periods = take('--periods');
    const dp = take('--discount-percent');
    const pr = take('--price');
    const cur = take('--currency');
    const tags = take('--offer-tags');
    const tgt = take('--targeting');
    const mask = take('--update-mask');
    const rv = take('--regions-version');

    if (pkg !== undefined) args.packageName = pkg;
    else if (fc !== undefined) args.fromCsv = fc;
    else if (pid !== undefined) args.productIdFilter = pid;
    else if (bp !== undefined) args.basePlanIdFilter = bp;
    else if (oid !== undefined) args.offerIdFilter = oid;
    else if (mode !== undefined) args.mode = mode.toUpperCase();
    else if (dur !== undefined) args.duration = dur;
    else if (periods !== undefined) args.periods = parseInt(periods, 10);
    else if (dp !== undefined) args.discountPercent = parseFloat(dp);
    else if (pr !== undefined) args.price = parseFloat(pr);
    else if (cur !== undefined) args.currency = cur.toUpperCase();
    else if (tags !== undefined) args.offerTags = tags;
    else if (tgt !== undefined) args.targeting = tgt.toLowerCase();
    else if (mask !== undefined) args.updateMask = mask;
    else if (rv !== undefined) args.regionsVersion = rv;
  }

  return args;
}

function showHelp() {
  console.log(`
🔁 Update Android Subscription Offers (PATCH in place)

Reads a CSV of offers and PATCHes each one. No offer is created.

⚠️  CRITICAL: ONLY use package '${TEST_PACKAGE}' for testing.

Usage:
  node update-android-offers.js --package-name <pkg> --from-csv <offers.csv> [options]

Required:
  --package-name <pkg>    Android application ID (must be '${TEST_PACKAGE}' for testing)
  --from-csv <file>       CSV from get-android-offers.js (--csv) or any CSV with columns
                          'Package Name', 'Product ID', 'Base Plan ID', 'Offer ID'.
                          Optional new-value columns: 'Phase Type', 'Phase Duration',
                          'Recurrence Count', 'Offer Tags', 'Targeting'.

Filters (limit which CSV rows to update):
  --product-id <id>       Only rows matching this productId
  --base-plan-id <id>     Only rows matching this basePlanId
  --offer-id <id>         Only rows matching this offerId

Update values (override CSV values when set; applied to every selected row):
  --mode <mode>           FREE_TRIAL | PAY_AS_YOU_GO | PAY_UP_FRONT
  --duration <dur>        iOS-style (THREE_DAYS, ONE_WEEK, …) or ISO 8601 (P3D, P1W, …)
  --periods <n>           Recurrence count for PAY_AS_YOU_GO (1–52)
  --discount-percent <n>  Percentage discount (1–99) for paid phases
  --price <amount>        Absolute phase price (e.g. 4.99). Mutually exclusive with --discount-percent
  --currency <code>       ISO 4217 (default USD), used with --price
  --offer-tags <list>     Comma-separated offer tags. Pass an empty string to clear.
  --targeting <mode>      app  → acquisitionRule.scope.anySubscriptionInApp
                          this → acquisitionRule.scope.thisSubscription
                          none → drop targeting (developer-determined)

Mask:
  --update-mask <paths>   Comma-separated field paths to patch. Default: inferred from
                          the fields actually set (phases / offerTags / targeting).
                          Narrow this on ACTIVE offers, e.g. --update-mask offerTags.

Regions:
  --regions-version <v>   Play "regions version" sent with the patch (default: 2025/03).
                          Required by Google whenever the patch touches phases or
                          regionalConfigs ("Regions Version must be specified."). Bump
                          this when Play onboards new territories you care about.

Safety:
  --dry-run               Print what would happen (default if --confirm not given)
  --confirm               Actually call the Play API
  --help, -h              Show this help

Examples:
  # Change every promo offer's free-trial duration to 7 days (using CLI override)
  node update-android-offers.js --package-name ${TEST_PACKAGE} \\
    --from-csv android-offers-${TEST_PACKAGE}.csv \\
    --offer-id promo-mocxv55l-u5sm \\
    --mode FREE_TRIAL --duration ONE_WEEK --update-mask phases --confirm

  # Re-tag a set of offers, leaving everything else untouched
  node update-android-offers.js --package-name ${TEST_PACKAGE} \\
    --from-csv android-offers-${TEST_PACKAGE}.csv \\
    --offer-tags "spring26,promo" --update-mask offerTags --confirm

  # Switch targeting to "never had this subscription" for a single offer ID
  node update-android-offers.js --package-name ${TEST_PACKAGE} \\
    --from-csv android-offers-${TEST_PACKAGE}.csv \\
    --offer-id promo-moievlup-u4d3 \\
    --targeting this --update-mask targeting --confirm

CSV format:
  Required columns: Package Name, Product ID, Base Plan ID, Offer ID
  Optional value columns (used when matching CLI flag is not set):
    Phase Type        e.g. FREE_TRIAL | PAY_AS_YOU_GO | PAY_UP_FRONT
    Phase Duration    e.g. P3D, P1W, ONE_MONTH
    Recurrence Count  integer
    Offer Tags        comma- or pipe-separated; empty = clear
    Targeting         "acquisition:anySubscriptionInApp", "acquisition:thisSubscription",
                      or "none"
`);
}

// Minimal RFC4180-style CSV parser.
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
    } else {
      if (c === '"') inQuotes = true;
      else if (c === ',') { row.push(field); field = ''; }
      else if (c === '\n') { row.push(field); field = ''; rows.push(row); row = []; }
      else if (c === '\r') { /* swallow */ }
      else field += c;
    }
  }
  if (field !== '' || row.length) { row.push(field); rows.push(row); }
  return rows.filter(r => r.some(v => v !== ''));
}

function loadRowsFromCsv(filePath) {
  const raw = fs.readFileSync(filePath, 'utf8');
  const rows = parseCsv(raw);
  if (rows.length < 2) return { packagesSeen: [], rows: [] };

  const header = rows[0].map(h => h.trim().toLowerCase());
  const idx = (name) => header.indexOf(name.toLowerCase());

  const packageCol = idx('Package Name');
  const productCol = idx('Product ID');
  const basePlanCol = idx('Base Plan ID');
  const offerCol = idx('Offer ID');
  const phaseTypeCol = idx('Phase Type');
  const phaseDurCol = idx('Phase Duration');
  const recCountCol = idx('Recurrence Count');
  const offerTagsCol = idx('Offer Tags');
  const targetingCol = idx('Targeting');

  if (productCol < 0 || basePlanCol < 0 || offerCol < 0) {
    throw new Error('CSV is missing one of the required columns: Product ID, Base Plan ID, Offer ID');
  }

  const out = [];
  const packagesSeen = new Set();
  const seen = new Set();
  for (let r = 1; r < rows.length; r++) {
    const row = rows[r];
    const get = (i) => (i >= 0 && row[i] != null ? String(row[i]).trim() : '');
    const productId = get(productCol);
    const basePlanId = get(basePlanCol);
    const offerId = get(offerCol);
    if (!productId || !basePlanId || !offerId) continue;

    const key = `${productId}::${basePlanId}::${offerId}`;
    if (seen.has(key)) continue;
    seen.add(key);

    const pkg = get(packageCol);
    if (pkg) packagesSeen.add(pkg);

    out.push({
      productId,
      basePlanId,
      offerId,
      csvPhaseType: get(phaseTypeCol) || null,
      csvDuration: get(phaseDurCol) || null,
      csvRecurrenceCount: get(recCountCol) || null,
      csvOfferTags: offerTagsCol >= 0 ? (row[offerTagsCol] != null ? String(row[offerTagsCol]) : '') : null,
      csvTargeting: get(targetingCol) || null
    });
  }

  return { packagesSeen: [...packagesSeen], rows: out };
}

function normalizeIsoDuration(input) {
  if (!input) return null;
  const upper = String(input).toUpperCase();
  if (DURATION_MAPPING[upper]) return DURATION_MAPPING[upper];
  if (/^P\d+[DWMY]$/.test(upper)) return upper;
  return null;
}

function parsePriceAmount(amount, currency) {
  const n = parseFloat(amount);
  if (isNaN(n) || n < 0) return null;
  const units = Math.floor(n).toString();
  const nanos = Math.round((n - Math.floor(n)) * 1e9);
  return { units, nanos, currencyCode: currency };
}

function parseCsvTargeting(value) {
  if (value == null) return undefined;
  const v = String(value).trim().toLowerCase();
  if (!v) return undefined;
  if (v === 'none' || v === 'developer-determined') return null;
  if (v.includes('anysubscriptioninapp')) return 'app';
  if (v.includes('thissubscription')) return 'this';
  return undefined;
}

function buildTargeting(mode) {
  if (mode === 'app') return { acquisitionRule: { scope: { anySubscriptionInApp: {} } } };
  if (mode === 'this') return { acquisitionRule: { scope: { thisSubscription: {} } } };
  return null;
}

// Build the updateData payload for a single row, merging CLI overrides with CSV columns.
// Returns { updateData, fields, warnings }, where `fields` lists the high-level update
// keys that would be sent (used to derive an updateMask if the caller didn't pass one).
function buildUpdatePayload(row, args) {
  const warnings = [];
  const updateData = {};

  // ----- Phases -----
  // Phases need duration + (mode/phaseType + price info as relevant). We emit a phases
  // block only if at least one relevant field is being touched. This matches the
  // service's update-mask building (presence of `phases` triggers the mask entry).
  const mode = args.mode || (row.csvPhaseType ? row.csvPhaseType.toUpperCase() : null);
  const duration = args.duration ? normalizeIsoDuration(args.duration)
                  : (row.csvDuration ? normalizeIsoDuration(row.csvDuration) : null);
  const periods = args.periods != null ? args.periods
                 : (row.csvRecurrenceCount ? parseInt(row.csvRecurrenceCount, 10) : null);
  const discountPercent = args.discountPercent != null ? args.discountPercent : null;
  const priceAmount = args.price != null ? args.price : null;

  const phaseFieldsTouched = (
    args.mode != null || args.duration != null || args.periods != null ||
    args.discountPercent != null || args.price != null ||
    row.csvPhaseType != null || row.csvDuration != null || row.csvRecurrenceCount != null
  );

  if (phaseFieldsTouched) {
    if (!mode) {
      warnings.push('Phase update skipped: no mode/Phase Type resolvable.');
    } else if (!duration) {
      warnings.push('Phase update skipped: no valid duration resolvable.');
    } else {
      const phase = { offerMode: mode, duration };
      if (mode === 'PAY_AS_YOU_GO') {
        phase.recurrenceCount = periods && periods >= 1 ? periods : 1;
      }
      if (mode === 'PAY_AS_YOU_GO' || mode === 'PAY_UP_FRONT') {
        if (discountPercent != null && priceAmount != null) {
          warnings.push('Phase: --discount-percent and --price are mutually exclusive; using --price.');
        }
        if (priceAmount != null) {
          const p = parsePriceAmount(priceAmount, args.currency);
          if (p) phase.price = p; else warnings.push(`Phase: invalid --price "${args.price}"`);
        } else if (discountPercent != null) {
          if (discountPercent >= 1 && discountPercent <= 99) {
            phase.pricePercentageDiscount = discountPercent;
          } else {
            warnings.push('Phase: --discount-percent must be 1–99.');
          }
        }
        // FREE_TRIAL needs neither price nor discount.
      }
      updateData.phases = [phase];
    }
  }

  // ----- Offer tags -----
  if (args.offerTags != null) {
    updateData.offerTags = args.offerTags
      .split(',').map(s => s.trim()).filter(Boolean);
  } else if (row.csvOfferTags != null) {
    // CSV-provided tags: tolerate comma OR pipe separation. Empty string clears.
    const raw = String(row.csvOfferTags).trim();
    if (raw !== '') {
      updateData.offerTags = raw.split(/[,|]/).map(s => s.trim()).filter(Boolean);
    }
    // empty string in CSV does NOT clear by default — user must use --offer-tags ""
    // explicitly to clear, since most rows will legitimately have an empty tag column.
  }

  // ----- Targeting -----
  if (args.targeting != null) {
    if (['app', 'this', 'none'].includes(args.targeting)) {
      const t = buildTargeting(args.targeting);
      if (t) updateData.targeting = t;
      // Note: the service's updateMask only adds 'targeting' when truthy. Sending
      // `targeting: null` to drop it requires a bare-API call; we surface a warning.
      if (args.targeting === 'none') {
        warnings.push('--targeting none: service updateOffer cannot drop targeting; ignoring. Use bulk-create --on-conflict replace.');
      }
    } else {
      warnings.push(`--targeting must be one of app|this|none (got "${args.targeting}")`);
    }
  } else {
    const csvT = parseCsvTargeting(row.csvTargeting);
    if (csvT === 'app' || csvT === 'this') {
      updateData.targeting = buildTargeting(csvT);
    }
  }

  // ----- Update mask -----
  // The service derives a default mask from updateData keys; we only override when the
  // caller passed --update-mask explicitly. Returning the inferred fields lets the
  // dry-run preview show what'll be sent.
  const fields = [];
  if (updateData.phases) fields.push('phases');
  if (updateData.offerTags) fields.push('offerTags');
  if (updateData.targeting) fields.push('targeting');

  return { updateData, fields, warnings };
}

async function main() {
  const args = parseArgs(process.argv);

  if (args.help) { showHelp(); process.exit(0); }

  if (!args.packageName) {
    console.error('❌ Error: --package-name is required\n');
    showHelp();
    process.exit(1);
  }
  if (args.packageName !== TEST_PACKAGE) {
    console.error(`\n❌ SAFETY ERROR: For testing, you MUST use '${TEST_PACKAGE}'\n`);
    process.exit(1);
  }
  if (!args.fromCsv) {
    console.error('❌ Error: --from-csv <file> is required\n');
    showHelp();
    process.exit(1);
  }
  if (!fs.existsSync(args.fromCsv)) {
    console.error(`❌ Error: --from-csv "${args.fromCsv}" not found\n`);
    process.exit(1);
  }
  if (!args.confirm && !args.dryRun) args.dryRun = true;

  const { packagesSeen, rows } = loadRowsFromCsv(args.fromCsv);
  if (packagesSeen.length > 1) {
    console.error(`❌ Error: CSV mixes multiple package names: ${packagesSeen.join(', ')}\n`);
    process.exit(1);
  }
  if (packagesSeen.length === 1 && packagesSeen[0] !== args.packageName) {
    console.error(`❌ Error: CSV is for package "${packagesSeen[0]}" but --package-name is "${args.packageName}"\n`);
    process.exit(1);
  }

  let selected = rows;
  if (args.productIdFilter)  selected = selected.filter(r => r.productId === args.productIdFilter);
  if (args.basePlanIdFilter) selected = selected.filter(r => r.basePlanId === args.basePlanIdFilter);
  if (args.offerIdFilter)    selected = selected.filter(r => r.offerId === args.offerIdFilter);

  if (selected.length === 0) {
    console.error('❌ Error: 0 rows after filters — nothing to update.\n');
    process.exit(1);
  }

  console.log('\n🔁 Update Android Offers\n');
  console.log('─'.repeat(80));
  console.log(`Package:   ${args.packageName}`);
  console.log(`Source:    ${args.fromCsv}`);
  console.log(`Total CSV: ${rows.length} row(s); selected ${selected.length}`);
  console.log(`Mode:      ${args.dryRun ? 'DRY-RUN (no changes)' : 'LIVE'}`);
  if (args.updateMask) console.log(`Override mask: ${args.updateMask}`);
  console.log('─'.repeat(80));

  const results = { updated: [], skipped: [], failed: [] };

  for (const row of selected) {
    const { updateData, fields, warnings } = buildUpdatePayload(row, args);
    const tag = `${row.productId} / ${row.basePlanId} / ${row.offerId}`;

    if (Object.keys(updateData).length === 0) {
      console.log(`⏭️  ${tag} — nothing to update${warnings.length ? ` (${warnings.join('; ')})` : ''}`);
      results.skipped.push({ ...row, reason: 'no-fields', warnings });
      continue;
    }

    // The service derives a mask from updateData keys. We honor an explicit
    // --update-mask by stripping fields outside of it before the call, so the
    // service's auto-mask matches what the user asked for. Done up front so
    // dry-run previews and live payloads stay identical.
    let payload = updateData;
    if (args.updateMask) {
      const allow = new Set(args.updateMask.split(',').map(s => s.trim()).filter(Boolean));
      payload = {};
      for (const k of Object.keys(updateData)) {
        if (allow.has(k)) payload[k] = updateData[k];
      }
      if (Object.keys(payload).length === 0) {
        console.log(`⏭️  ${tag} — --update-mask leaves no fields to send`);
        results.skipped.push({ ...row, reason: 'mask-empty', warnings });
        continue;
      }
    }
    const effectiveMask = Object.keys(payload).join(',');

    if (args.dryRun) {
      console.log(`🟡 [DRY-RUN] ${tag}`);
      console.log(`     mask: ${effectiveMask}`);
      console.log(`     payload: ${JSON.stringify(payload)}`);
      if (warnings.length) console.log(`     warnings: ${warnings.join('; ')}`);
      results.updated.push({ ...row, status: 'dry-run', mask: effectiveMask, updateData: payload, warnings });
      continue;
    }

    try {
      await androidOffersService.updateOffer(
        args.packageName,
        row.productId,
        row.basePlanId,
        row.offerId,
        payload,
        args.regionsVersion || undefined
      );
      console.log(`✅ ${tag} — updated [${effectiveMask}]`);
      results.updated.push({ ...row, status: 'updated', mask: effectiveMask, updateData: payload, warnings });
    } catch (err) {
      console.log(`❌ ${tag} — ${err.message}`);
      results.failed.push({ ...row, error: err.message, code: err.googleErrorCode || err.statusCode || null, warnings });
      logger.error('Failed to update Android offer', {
        packageName: args.packageName,
        ...row,
        error: err.message
      });
    }
  }

  console.log('\n' + '═'.repeat(80));
  console.log('📊 SUMMARY');
  console.log('═'.repeat(80));
  console.log(`Selected: ${selected.length}`);
  console.log(`${args.dryRun ? '🟡 Would update' : '✅ Updated'}: ${results.updated.length}`);
  console.log(`⏭️  Skipped: ${results.skipped.length}`);
  console.log(`❌ Failed:  ${results.failed.length}`);
  console.log('═'.repeat(80));

  if (args.dryRun && !args.confirm) {
    console.log('\nDry run. Re-run with --confirm to apply changes.');
  }

  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const outputPath = `./update-android-offers-results-${timestamp}.json`;
  fs.writeFileSync(outputPath, JSON.stringify({
    packageName: args.packageName,
    source: args.fromCsv,
    cliOverrides: {
      mode: args.mode, duration: args.duration, periods: args.periods,
      discountPercent: args.discountPercent, price: args.price, currency: args.currency,
      offerTags: args.offerTags, targeting: args.targeting, updateMask: args.updateMask,
      regionsVersion: args.regionsVersion
    },
    summary: {
      selected: selected.length,
      updated: results.updated.length,
      skipped: results.skipped.length,
      failed: results.failed.length,
      dryRun: args.dryRun
    },
    updated: results.updated,
    skipped: results.skipped,
    failed: results.failed,
    completedAt: new Date().toISOString()
  }, null, 2));
  console.log(`\n💾 Results saved to: ${outputPath}`);

  process.exit(results.failed.length > 0 ? 1 : 0);
}

main().catch(error => {
  console.error(`\n❌ Fatal: ${error.message}`);
  if (error.statusCode === 401) {
    console.error('🔐 Auth error — check GOOGLE_APPLICATION_CREDENTIALS in .env');
  } else if (error.statusCode === 403) {
    console.error('🚫 Authorization — service account lacks permission to manage offers');
  } else if (error.statusCode === 404) {
    console.error('🔍 Not found — verify package, productId, basePlanId, offerId');
  }
  logger.error('update-android-offers failed', { error: error.message, stack: error.stack });
  process.exit(1);
});
