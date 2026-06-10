require('dotenv').config();
const axios = require('axios');

/**
 * Fetch star ratings for an iOS app (App Store) and/or Android app (Play Store).
 *
 * iOS  : public iTunes Lookup API (no auth)         — by bundleId
 * Android: public Play Store details page (no auth) — by applicationId (package name)
 *
 * Usage:
 *   node get-app-ratings.js --bundle-id=com.example.app --application-id=com.example.app
 *   node get-app-ratings.js --bundle-id=com.example.app
 *   node get-app-ratings.js --application-id=com.example.app
 *   node get-app-ratings.js --bundle-id=com.example.app --country=us --json
 */

function parseArgs(argv) {
  const args = {};
  for (const arg of argv.slice(2)) {
    if (arg === '--help' || arg === '-h') { args.help = true; continue; }
    if (arg === '--json') { args.json = true; continue; }
    const m = arg.match(/^--([^=]+)=(.*)$/);
    if (m) args[m[1]] = m[2];
  }
  return args;
}

function showHelp() {
  console.log(`
⭐ Get App Ratings

Fetches the average star rating and rating count for an iOS app and/or
Android app, using the public storefronts (no API credentials required).

Usage:
  node get-app-ratings.js [options]

Options:
  --bundle-id=<id>         iOS bundle ID (e.g. com.example.app)
  --application-id=<id>    Android application ID / package name
  --country=<code>         Two-letter country code (default: us)
  --json                   Output as JSON
  --help, -h               Show this help

Examples:
  node get-app-ratings.js --bundle-id=com.spotify.client
  node get-app-ratings.js --application-id=com.spotify.music
  node get-app-ratings.js --bundle-id=com.spotify.client --application-id=com.spotify.music
`);
}

async function getIosRating(bundleId, country) {
  const url = `https://itunes.apple.com/lookup?bundleId=${encodeURIComponent(bundleId)}&country=${encodeURIComponent(country)}`;
  const { data } = await axios.get(url, { timeout: 15000 });
  if (!data || !Array.isArray(data.results) || data.results.length === 0) {
    throw new Error(`No iOS app found for bundleId "${bundleId}" in country "${country}"`);
  }
  const app = data.results[0];
  return {
    platform: 'iOS',
    bundleId,
    country,
    appName: app.trackName,
    trackId: app.trackId,
    averageRating: app.averageUserRating ?? null,
    ratingCount: app.userRatingCount ?? 0,
    averageRatingCurrentVersion: app.averageUserRatingForCurrentVersion ?? null,
    ratingCountCurrentVersion: app.userRatingCountForCurrentVersion ?? 0,
    storeUrl: app.trackViewUrl
  };
}

async function getAndroidRating(applicationId, country) {
  const url = `https://play.google.com/store/apps/details?id=${encodeURIComponent(applicationId)}&hl=en&gl=${encodeURIComponent(country)}`;
  const { data: html } = await axios.get(url, {
    timeout: 15000,
    headers: {
      'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      'Accept-Language': 'en-US,en;q=0.9'
    },
    validateStatus: (s) => s < 500
  });

  if (typeof html !== 'string' || html.length < 1000) {
    throw new Error(`Play Store returned an unexpected response for "${applicationId}"`);
  }
  if (html.includes('We\'re sorry, the requested URL was not found') || html.includes('was not found on this server')) {
    throw new Error(`No Android app found for applicationId "${applicationId}"`);
  }

  // The Play Store page embeds structured data with `ratingValue` and
  // `ratingCount` keys (e.g. `ratingValue":"4.337..."`, `ratingCount":"35553022"`).
  // We also keep an aria-label fallback for when JSON-LD is missing.
  let averageRating = null;
  let ratingCount = null;

  const valueMatch = html.match(/"ratingValue"\s*:\s*"?(\d+(?:\.\d+)?)"?/);
  if (valueMatch) averageRating = parseFloat(valueMatch[1]);

  const countMatch = html.match(/"ratingCount"\s*:\s*"?(\d+)"?/);
  if (countMatch) ratingCount = parseInt(countMatch[1], 10);

  if (averageRating == null) {
    const aria = html.match(/Rated\s+(\d+(?:\.\d+)?)\s+stars? out of\s+(?:five|5)\s+stars?/i);
    if (aria) averageRating = parseFloat(aria[1]);
  }

  const nameMatch = html.match(/<title[^>]*>([^<]+?)\s*-\s*Apps on Google Play<\/title>/i);

  if (averageRating == null) {
    throw new Error(`Could not parse rating from Play Store page for "${applicationId}" (app may have too few ratings or page format changed)`);
  }

  return {
    platform: 'Android',
    applicationId,
    country,
    appName: nameMatch ? nameMatch[1].trim() : null,
    averageRating,
    ratingCount: ratingCount ?? 0,
    storeUrl: `https://play.google.com/store/apps/details?id=${applicationId}`
  };
}

function printRating(r) {
  console.log(`\n${r.platform === 'iOS' ? '🍎' : '🤖'}  ${r.platform}`);
  console.log('─'.repeat(60));
  console.log(`   App Name:        ${r.appName ?? 'N/A'}`);
  console.log(`   ${r.platform === 'iOS' ? 'Bundle ID' : 'Application ID'}:  ${r.bundleId ?? r.applicationId}`);
  console.log(`   Country:         ${r.country}`);
  console.log(`   Average Rating:  ${r.averageRating != null ? r.averageRating.toFixed(2) + ' ⭐' : 'N/A'}`);
  console.log(`   Rating Count:    ${r.ratingCount?.toLocaleString?.() ?? r.ratingCount ?? 0}`);
  if (r.averageRatingCurrentVersion != null) {
    console.log(`   Current Version: ${r.averageRatingCurrentVersion.toFixed(2)} ⭐ (${(r.ratingCountCurrentVersion ?? 0).toLocaleString()} ratings)`);
  }
  if (r.storeUrl) console.log(`   Store URL:       ${r.storeUrl}`);
}

async function main() {
  const args = parseArgs(process.argv);

  if (args.help) { showHelp(); return; }

  const bundleId = args['bundle-id'];
  const applicationId = args['application-id'];
  const country = args.country || 'us';

  if (!bundleId && !applicationId) {
    console.error('❌ Provide at least one of --bundle-id or --application-id');
    showHelp();
    process.exit(1);
  }

  const tasks = [];
  if (bundleId) tasks.push(getIosRating(bundleId, country).catch((e) => ({ error: e.message, platform: 'iOS' })));
  if (applicationId) tasks.push(getAndroidRating(applicationId, country).catch((e) => ({ error: e.message, platform: 'Android' })));

  const results = await Promise.all(tasks);

  if (args.json) {
    console.log(JSON.stringify(results, null, 2));
  } else {
    for (const r of results) {
      if (r.error) {
        console.error(`\n❌ ${r.platform}: ${r.error}`);
      } else {
        printRating(r);
      }
    }
    console.log('');
  }

  if (results.some((r) => r.error)) process.exit(2);
}

if (require.main === module) {
  main();
}

module.exports = { getIosRating, getAndroidRating };
