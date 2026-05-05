#!/usr/bin/env node

/**
 * Dump all subscription offers (intro / promo base-plan offers) for an Android
 * package from Google Play into JSON (and optionally CSV).
 *
 * Output JSON shape is compatible with delete-android-offers.js --from-json
 * (includes a `createdOffers[]` array of {productId, basePlanId, offerId}).
 *
 * Usage:
 *   node get-android-offers.js --package-name <pkg> [--product-id <id>] [--base-plan-id <id>]
 *                              [--output <file>] [--csv [file]]
 */

require('dotenv').config();
const fs = require('fs');
const androidOffersService = require('./src/services/android-offers');
const logger = require('./src/utils/logger');

function parseArgs(argv) {
  const args = {
    packageName: null,
    productId: null,
    basePlanId: null,
    output: null,
    csv: false,
    csvOutput: null,
    help: false
  };

  const rest = argv.slice(2);
  for (let i = 0; i < rest.length; i++) {
    const a = rest[i];
    const takeValue = (flag) => {
      if (a === flag) return rest[++i];
      if (a.startsWith(flag + '=')) return a.slice(flag.length + 1);
      return undefined;
    };

    if (a === '--help' || a === '-h') {
      args.help = true;
    } else if (a === '--csv') {
      args.csv = true;
      const next = rest[i + 1];
      if (next && !next.startsWith('-')) { args.csvOutput = next; i++; }
    } else if (a.startsWith('--csv=')) {
      args.csv = true;
      args.csvOutput = a.slice('--csv='.length);
    } else {
      const pkg = takeValue('--package-name') ?? takeValue('--package');
      const pid = takeValue('--product-id');
      const bp = takeValue('--base-plan-id');
      const out = takeValue('--output') ?? takeValue('-o');
      if (pkg !== undefined) args.packageName = pkg;
      else if (pid !== undefined) args.productId = pid;
      else if (bp !== undefined) args.basePlanId = bp;
      else if (out !== undefined) args.output = out;
    }
  }

  return args;
}

function showHelp() {
  console.log(`
Dump Google Play subscription offers for a package

Usage:
  node get-android-offers.js --package-name <pkg> [options]

Options:
  --package-name <name>   Android package name / application ID (required)
  --product-id <id>       Only include offers under this product
  --base-plan-id <id>     Only include offers under this base plan
                          (must be used with --product-id for safety)
  --output, -o <file>     JSON output path (default: android-offers-<package>.json)
  --csv [file]            Also write a CSV (default: <json-output>.csv)
  --help, -h              Show this help

Examples:
  node get-android-offers.js --package-name com.example.app
  node get-android-offers.js --package-name com.example.app --csv
  node get-android-offers.js --package-name com.example.app \\
    --product-id sub.monthly --base-plan-id monthly-autorenew --csv
`);
}

function csvEscape(value) {
  if (value === null || value === undefined) return '';
  const str = String(value);
  if (/[",\n\r]/.test(str)) return `"${str.replace(/"/g, '""')}"`;
  return str;
}

// Phase pricing markers live inside regionalConfigs[] / otherRegionsConfig, not at the
// phase top level. Detect from the first non-region marker we find.
function detectPhaseType(phase) {
  const probe = (cfg) => {
    if (!cfg) return null;
    if (cfg.free) return 'FREE_TRIAL';
    if (cfg.relativeDiscount !== undefined) return 'PERCENT_DISCOUNT';
    if (cfg.absoluteDiscount) return 'ABSOLUTE_DISCOUNT';
    if (cfg.price) return 'PRICE_OVERRIDE';
    return null;
  };
  for (const rc of phase.regionalConfigs || []) {
    const t = probe(rc);
    if (t) return t;
  }
  return probe(phase.otherRegionsConfig) || 'UNKNOWN';
}

function summarizePhases(phases) {
  if (!Array.isArray(phases) || phases.length === 0) return '';
  return phases.map(p => {
    const parts = [];
    parts.push(detectPhaseType(p));
    if (p.duration) parts.push(`dur=${p.duration}`);
    if (p.recurrenceCount) parts.push(`rec=${p.recurrenceCount}`);
    const regions = (p.regionalConfigs || []).length;
    if (regions) parts.push(`regions=${regions}`);
    if (p.otherRegionsConfig) parts.push('otherRegions');
    return parts.join('|');
  }).join(' ; ');
}

function summarizeTargeting(targeting) {
  if (!targeting) return 'developer-determined';
  if (targeting.acquisitionRule?.scope) {
    const scope = Object.keys(targeting.acquisitionRule.scope)[0] || 'unknown';
    return `acquisition:${scope}`;
  }
  if (targeting.upgradeRule) {
    const scope = targeting.upgradeRule.scope
      ? Object.keys(targeting.upgradeRule.scope)[0]
      : 'rule';
    return `upgrade:${scope}`;
  }
  return JSON.stringify(targeting);
}

function flattenOffers(result, packageName) {
  const rows = [];
  for (const sub of result.subscriptions || []) {
    for (const offer of sub.offers || []) {
      const phases = offer.phases || [];
      const firstPhase = phases[0];
      rows.push({
        packageName,
        productId: sub.subscription.productId,
        basePlanId: sub.basePlan.basePlanId,
        basePlanState: sub.basePlan.state,
        offerId: offer.offerId,
        offerState: offer.state,
        offerTags: (offer.offerTags || []).map(t => t.tag || t).join('|'),
        targeting: summarizeTargeting(offer.targeting),
        phaseCount: phases.length,
        phaseType: firstPhase ? detectPhaseType(firstPhase) : '',
        phaseDuration: firstPhase?.duration || '',
        recurrenceCount: firstPhase?.recurrenceCount || '',
        regionCount: firstPhase ? (firstPhase.regionalConfigs || []).length : '',
        hasOtherRegions: firstPhase ? Boolean(firstPhase.otherRegionsConfig) : '',
        phases: summarizePhases(phases)
      });
    }
  }
  return rows;
}

function rowsToCsv(rows) {
  const headers = [
    'Package Name',
    'Product ID',
    'Base Plan ID',
    'Base Plan State',
    'Offer ID',
    'Offer State',
    'Offer Tags',
    'Targeting',
    'Phase Count',
    'Phase Type',
    'Phase Duration',
    'Recurrence Count',
    'Region Count',
    'Has Other Regions',
    'Phases'
  ];
  const lines = [headers.join(',')];
  for (const r of rows) {
    lines.push([
      r.packageName, r.productId, r.basePlanId, r.basePlanState,
      r.offerId, r.offerState, r.offerTags, r.targeting,
      r.phaseCount, r.phaseType, r.phaseDuration, r.recurrenceCount,
      r.regionCount, r.hasOtherRegions, r.phases
    ].map(csvEscape).join(','));
  }
  return lines.join('\n') + '\n';
}

async function main() {
  const args = parseArgs(process.argv);

  if (args.help || !args.packageName) {
    showHelp();
    process.exit(args.help ? 0 : 1);
  }

  if (args.basePlanId && !args.productId) {
    console.error('Error: --base-plan-id requires --product-id (base plan IDs are not unique across products)');
    process.exit(1);
  }

  const packageName = args.packageName;
  const outputPath = args.output || `android-offers-${packageName}.json`;

  console.log(`Fetching Google Play offers for package: ${packageName}`);
  if (args.productId) console.log(`  productId filter:  ${args.productId}`);
  if (args.basePlanId) console.log(`  basePlanId filter: ${args.basePlanId}`);

  try {
    const result = await androidOffersService.getOffersByPackage(packageName, {
      productId: args.productId || undefined,
      basePlanId: args.basePlanId || undefined
    });

    const flat = flattenOffers(result, packageName);

    // `createdOffers` key makes the file directly consumable by
    // delete-android-offers.js --from-json (same shape the bulk-create
    // rollback file uses).
    const output = {
      packageName,
      generatedAt: new Date().toISOString(),
      source: 'Google Play Store',
      totalOffers: result.totalOffers,
      subscriptions: result.subscriptions,
      createdOffers: flat.map(r => ({
        packageName: r.packageName,
        productId: r.productId,
        basePlanId: r.basePlanId,
        offerId: r.offerId,
        state: r.offerState
      }))
    };

    fs.writeFileSync(outputPath, JSON.stringify(output, null, 2));

    console.log(`\nFound ${result.totalOffers} offer(s) across ${result.subscriptions.length} base-plan(s) with offers.`);
    console.log(`Wrote ${outputPath}`);

    if (args.csv) {
      const csvPath = args.csvOutput || outputPath.replace(/\.json$/, '') + '.csv';
      fs.writeFileSync(csvPath, rowsToCsv(flat));
      console.log(`Wrote ${csvPath}`);
    }
  } catch (error) {
    console.error(`Error: ${error.message}`);
    logger.error('Failed to dump Android offers', {
      packageName,
      error: error.message,
      stack: error.stack
    });
    process.exit(1);
  }
}

main();
