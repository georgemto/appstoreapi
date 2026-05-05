#!/usr/bin/env node

/**
 * Delete Android subscription product IDs from Google Play.
 *
 * Subscriptions that have ever been published cannot be deleted via the API —
 * they can only be archived. By default this script deletes; pass --archive
 * to archive instead, or --archive-on-fail to archive when delete is rejected.
 *
 * Active base plans block deletion; use --deactivate-base-plans to deactivate
 * them first.
 *
 * Usage:
 *   node delete-android-subscriptions.js --package-name <pkg> --product-id <id> [--dry-run] [--confirm]
 *   node delete-android-subscriptions.js --package-name <pkg> --from-json <file> [--dry-run] [--confirm]
 */

require('dotenv').config();
const fs = require('fs');
const googlePlayClient = require('./src/services/googleplay-client');
const logger = require('./src/utils/logger');

function parseArgs(argv) {
  const args = {
    packageName: null,
    productIds: [],
    fromJson: null,
    dryRun: false,
    confirm: false,
    archive: false,
    archiveOnFail: false,
    deactivateBasePlans: false,
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
    } else if (a === '--dry-run') {
      args.dryRun = true;
    } else if (a === '--confirm') {
      args.confirm = true;
    } else if (a === '--archive') {
      args.archive = true;
    } else if (a === '--archive-on-fail') {
      args.archiveOnFail = true;
    } else if (a === '--deactivate-base-plans') {
      args.deactivateBasePlans = true;
    } else {
      const pkg = takeValue('--package-name') ?? takeValue('--package');
      const pid = takeValue('--product-id');
      const fj = takeValue('--from-json');
      if (pkg !== undefined) args.packageName = pkg;
      else if (pid !== undefined) args.productIds.push(pid);
      else if (fj !== undefined) args.fromJson = fj;
    }
  }

  return args;
}

function showHelp() {
  console.log(`
Delete Android subscription product IDs from Google Play

Usage:
  node delete-android-subscriptions.js --package-name <pkg> --product-id <id> [options]
  node delete-android-subscriptions.js --package-name <pkg> --from-json <file> [options]

Required:
  --package-name <name>     Android package name / application ID
  --product-id <id>         Product ID to delete (repeatable)
  --from-json <file>        JSON from get-android-product-ids.js (uses productIds[])

Options:
  --dry-run                 Print what would be done; make no changes (default)
  --confirm                 Actually perform deletions (required to apply changes)
  --archive                 Archive instead of delete (for published subscriptions)
  --archive-on-fail         If delete fails, fall back to archive
  --deactivate-base-plans   Deactivate active base plans before deleting
  --help, -h                Show this help

Notes:
  - Subscriptions that have ever been published cannot be deleted (Google Play
    API limitation). Use --archive, or --archive-on-fail as a fallback.
  - --dry-run is the default; you MUST pass --confirm to actually delete.

Examples:
  node delete-android-subscriptions.js --package-name com.example.app --product-id sub.monthly
  node delete-android-subscriptions.js --package-name com.example.app --from-json product-ids-android-com.example.app.json --confirm
  node delete-android-subscriptions.js --package-name com.example.app --product-id sub.monthly --archive --confirm
`);
}

function loadProductIdsFromJson(filePath) {
  const raw = fs.readFileSync(filePath, 'utf8');
  const data = JSON.parse(raw);
  if (Array.isArray(data.productIds) && data.productIds.length > 0) {
    return [...new Set(data.productIds)];
  }
  // Fall back: walk subscriptionGroups
  const ids = new Set();
  for (const g of data.subscriptionGroups || []) {
    for (const s of g.subscriptions || []) {
      if (s.productId) ids.add(s.productId);
    }
  }
  return Array.from(ids);
}

async function deactivateActiveBasePlans(packageName, productId, dryRun) {
  try {
    const sub = await googlePlayClient.getSubscription(packageName, productId);
    const active = (sub.basePlans || []).filter(bp => bp.state === 'ACTIVE');
    if (active.length === 0) return;
    for (const bp of active) {
      if (dryRun) {
        console.log(`    [DRY-RUN] Would deactivate base plan: ${bp.basePlanId}`);
      } else {
        await googlePlayClient.deactivateBasePlan(packageName, productId, bp.basePlanId);
        console.log(`    [DEACTIVATED] base plan: ${bp.basePlanId}`);
      }
    }
  } catch (error) {
    console.warn(`    [WARN] Could not deactivate base plans for ${productId}: ${error.message}`);
  }
}

async function processProductId(packageName, productId, args) {
  const action = args.archive ? 'archive' : 'delete';
  console.log(`\n→ ${productId}`);

  if (args.deactivateBasePlans) {
    await deactivateActiveBasePlans(packageName, productId, args.dryRun);
  }

  if (args.dryRun) {
    console.log(`    [DRY-RUN] Would ${action}: ${productId}`);
    return { productId, status: 'dry-run' };
  }

  try {
    if (args.archive) {
      await googlePlayClient.archiveSubscription(packageName, productId);
      console.log(`    [ARCHIVED] ${productId}`);
      return { productId, status: 'archived' };
    }

    await googlePlayClient.deleteSubscription(packageName, productId);
    console.log(`    [DELETED] ${productId}`);
    return { productId, status: 'deleted' };
  } catch (error) {
    if (args.archiveOnFail && !args.archive) {
      console.warn(`    [WARN] Delete failed (${error.message}); attempting archive…`);
      try {
        await googlePlayClient.archiveSubscription(packageName, productId);
        console.log(`    [ARCHIVED] ${productId}`);
        return { productId, status: 'archived-fallback' };
      } catch (archiveError) {
        console.error(`    [ERROR] Archive also failed: ${archiveError.message}`);
        return { productId, status: 'failed', error: archiveError.message };
      }
    }
    console.error(`    [ERROR] ${error.message}`);
    return { productId, status: 'failed', error: error.message };
  }
}

async function main() {
  const args = parseArgs(process.argv);

  if (args.help) {
    showHelp();
    process.exit(0);
  }

  if (!args.packageName) {
    console.error('Error: --package-name is required');
    showHelp();
    process.exit(1);
  }

  let productIds = [...args.productIds];
  if (args.fromJson) {
    try {
      const fromFile = loadProductIdsFromJson(args.fromJson);
      productIds.push(...fromFile);
    } catch (error) {
      console.error(`Error reading ${args.fromJson}: ${error.message}`);
      process.exit(1);
    }
  }

  productIds = [...new Set(productIds)];

  if (productIds.length === 0) {
    console.error('Error: no product IDs specified (use --product-id or --from-json)');
    showHelp();
    process.exit(1);
  }

  // Default to dry-run unless --confirm is passed
  if (!args.confirm && !args.dryRun) {
    args.dryRun = true;
  }

  const action = args.archive ? 'ARCHIVE' : 'DELETE';
  console.log('─'.repeat(80));
  console.log(`${action} Android subscriptions`);
  console.log(`Package: ${args.packageName}`);
  console.log(`Count:   ${productIds.length}`);
  console.log(`Mode:    ${args.dryRun ? 'DRY-RUN (no changes)' : 'LIVE'}`);
  if (args.deactivateBasePlans) console.log('Also: deactivate active base plans first');
  if (args.archiveOnFail) console.log('Also: archive if delete fails');
  console.log('─'.repeat(80));

  const results = [];
  for (const productId of productIds) {
    const result = await processProductId(args.packageName, productId, args);
    results.push(result);
  }

  const summary = results.reduce((acc, r) => {
    acc[r.status] = (acc[r.status] || 0) + 1;
    return acc;
  }, {});

  console.log('\n' + '─'.repeat(80));
  console.log('Summary:');
  for (const [status, count] of Object.entries(summary)) {
    console.log(`  ${status}: ${count}`);
  }
  console.log('─'.repeat(80));

  if (args.dryRun && !args.confirm) {
    console.log('\nThis was a dry run. Re-run with --confirm to apply changes.');
  }

  const failed = results.filter(r => r.status === 'failed').length;
  process.exit(failed > 0 ? 1 : 0);
}

main().catch(error => {
  console.error(`Fatal: ${error.message}`);
  logger.error('delete-android-subscriptions failed', {
    error: error.message,
    stack: error.stack
  });
  process.exit(1);
});
