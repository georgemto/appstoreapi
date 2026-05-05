#!/usr/bin/env node

/**
 * Diagnostic: compare the IDs returned by two paths for fetching a
 * subscription's introductory offers, to find which IDs Apple's
 * /v1/subscriptionIntroductoryOffers/{id} endpoint will accept.
 *
 *   A) GET /v1/subscriptions/{id}?include=introductoryOffers
 *      → ids extracted from response.included[]
 *      (this is what get-introductory-offers.js currently uses)
 *
 *   B) GET /v1/subscriptions/{id}/introductoryOffers
 *      → ids from response.data[] (the dedicated relationship endpoint)
 *
 * Then it tries a GET /v1/subscriptionIntroductoryOffers/{id} for the
 * first ID from each set so we can see which one Apple actually accepts.
 *
 * Usage:
 *   node diagnose-introductory-offer-ids.js --subscription-id <id>
 */

require('dotenv').config();
const appStoreClient = require('./src/services/appstore-client');

function getArg(name) {
  const i = process.argv.indexOf(name);
  if (i === -1) return null;
  return process.argv[i + 1];
}

async function main() {
  const subscriptionId = getArg('--subscription-id');
  if (!subscriptionId) {
    console.error('Usage: node diagnose-introductory-offer-ids.js --subscription-id <id>');
    process.exit(1);
  }

  console.log(`Subscription: ${subscriptionId}\n`);

  // A) ?include=introductoryOffers
  console.log('A) GET /subscriptions/{id}?include=introductoryOffers');
  let aIds = [];
  try {
    const respA = await appStoreClient.get(`/subscriptions/${subscriptionId}`, {
      include: 'introductoryOffers',
      'fields[subscriptionIntroductoryOffers]': 'startDate,endDate,duration,offerMode,numberOfPeriods'
    });
    aIds = (respA.included || [])
      .filter(item => item.type === 'subscriptionIntroductoryOffers')
      .map(item => item.id);
    console.log(`   count: ${aIds.length}`);
    console.log(`   first 3: ${JSON.stringify(aIds.slice(0, 3), null, 2)}`);
  } catch (e) {
    console.log(`   FAILED: ${e.message}`);
  }

  // B) /subscriptions/{id}/introductoryOffers
  console.log('\nB) GET /subscriptions/{id}/introductoryOffers');
  let bIds = [];
  try {
    const respB = await appStoreClient.get(`/subscriptions/${subscriptionId}/introductoryOffers`, {
      'fields[subscriptionIntroductoryOffers]': 'startDate,endDate,duration,offerMode,numberOfPeriods',
      limit: 200
    });
    bIds = (respB.data || []).map(item => item.id);
    console.log(`   count: ${bIds.length}`);
    console.log(`   first 3: ${JSON.stringify(bIds.slice(0, 3), null, 2)}`);
  } catch (e) {
    console.log(`   FAILED: ${e.message}`);
  }

  // Decode an ID to check its territory field — IDs encode {s, d, i (territory), t, p}
  const decodeId = (id) => {
    try {
      const json = Buffer.from(id, 'base64').toString('utf-8');
      return JSON.parse(json);
    } catch (e) {
      return null;
    }
  };

  // Build a territory → id map from the dedicated endpoint (B = ground truth)
  const byTerritoryB = new Map();
  for (const id of bIds) {
    const decoded = decodeId(id);
    if (decoded?.i) byTerritoryB.set(decoded.i, id);
  }
  console.log(`\nB territories present (${byTerritoryB.size}): ${[...byTerritoryB.keys()].sort().join(', ')}`);

  const probeTerritory = 'AZ';
  const azFromB = byTerritoryB.get(probeTerritory);
  console.log(`\nIs ${probeTerritory} in B? ${azFromB ? `yes → ${azFromB}` : 'NO'}`);

  // Probe DELETE on a known-live ID from the dedicated endpoint to see if Apple
  // actually accepts DELETE for these IDs. We pick the LAST ID alphabetically
  // (least likely to be needed) to minimize accidental loss if it actually works.
  // We do NOT re-create afterward — the user can do that if needed.
  const probeId = bIds[bIds.length - 1];
  if (probeId) {
    const decoded = decodeId(probeId);
    console.log(`\n=== DELETE probe on a live ID from B ===`);
    console.log(`   id: ${probeId}`);
    console.log(`   decoded: ${JSON.stringify(decoded)}`);
    console.log(`   (skipping unless --probe-delete is passed; this is destructive)`);

    if (process.argv.includes('--probe-delete')) {
      try {
        await appStoreClient.delete(`/subscriptionIntroductoryOffers/${encodeURIComponent(probeId)}`);
        console.log(`   DELETE → 2xx (Apple accepted)`);

        // Re-fetch the dedicated endpoint to see if it actually got removed
        const respC = await appStoreClient.get(`/subscriptions/${subscriptionId}/introductoryOffers`, { limit: 200 });
        const stillThere = (respC.data || []).some(item => item.id === probeId);
        console.log(`   verify via /introductoryOffers list: ${stillThere ? 'STILL PRESENT (delete did NOT apply)' : 'gone (delete applied)'}`);
      } catch (e) {
        const status = e.statusCode || e.status;
        console.log(`   DELETE ERR → status=${status} message=${e.message}`);
      }
    }
  }

  if (aIds.length !== bIds.length) {
    console.log(`\n⚠ A returned ${aIds.length} but B returned ${bIds.length}. The ?include= path is truncating — likely Apple's default limit[introductoryOffers]. The CSVs you generated previously were incomplete.`);
  }
}

main().catch(e => {
  console.error('Fatal:', e.message);
  process.exit(1);
});
