require('dotenv').config();
const fs = require('fs');
const path = require('path');
const { createCanvas } = require('@napi-rs/canvas');
const { getIosRating, getAndroidRating } = require('./get-app-ratings');

/**
 * Batch-fetch star ratings for a fixed list of iOS and Android apps.
 *
 * Edit the APPS array below to add/remove apps. Each entry may include
 * `bundleId` (iOS), `applicationId` (Android), or both.
 *
 * Usage:
 *   node get-app-ratings-batch.js                # default country: us
 *   node get-app-ratings-batch.js --country=gb
 *   node get-app-ratings-batch.js --json
 */

const APPS = [
  { label: 'MyVTech Baby Plus',  bundleId: 'com.vtech.plus',           applicationId: 'com.vtech.app.plus' },
  { label: 'MyVTech Baby Pro',  bundleId: 'com.vtech.myvtechbaby.pro',          applicationId: 'com.cams.vtech.mvb.pro' },
  { label: 'LeapFrog BabyCare Plus',  bundleId: 'com.leapfrog.babycare.plus',       applicationId: 'com.leapfrog.babycare.app.plus' },
  { label: 'Soother', bundleId: 'com.vtech.soother',        applicationId: 'com.vtech.myvtechsoother' },
  { label: 'LeapFrog BabyCare', bundleId: 'com.leapfrog.babycare',  applicationId: 'com.leapfrog.babycare.app' }
];

function parseArgs(argv) {
  const args = {};
  for (const arg of argv.slice(2)) {
    if (arg === '--help' || arg === '-h') { args.help = true; continue; }
    if (arg === '--json') { args.json = true; continue; }
    if (arg === '--bitmap') { args.bitmap = 'ratings.bmp'; continue; }
    const m = arg.match(/^--([^=]+)=(.*)$/);
    if (m) args[m[1]] = m[2];
  }
  return args;
}

function writeBMPFromRGBA(rgba, width, height, filepath) {
  const rowSize = Math.floor((24 * width + 31) / 32) * 4;
  const imageSize = rowSize * height;
  const fileSize = 54 + imageSize;
  const buf = Buffer.alloc(fileSize);
  buf.write('BM', 0);
  buf.writeUInt32LE(fileSize, 2);
  buf.writeUInt32LE(54, 10);
  buf.writeUInt32LE(40, 14);
  buf.writeInt32LE(width, 18);
  buf.writeInt32LE(height, 22);
  buf.writeUInt16LE(1, 26);
  buf.writeUInt16LE(24, 28);
  buf.writeUInt32LE(imageSize, 34);
  buf.writeInt32LE(2835, 38);
  buf.writeInt32LE(2835, 42);
  // BMP rows are bottom-up; canvas RGBA is top-down.
  for (let y = 0; y < height; y++) {
    const srcRow = (height - 1 - y) * width * 4;
    const dstRow = 54 + y * rowSize;
    for (let x = 0; x < width; x++) {
      const s = srcRow + x * 4;
      const d = dstRow + x * 3;
      buf[d] = rgba[s + 2];     // B
      buf[d + 1] = rgba[s + 1]; // G
      buf[d + 2] = rgba[s];     // R
    }
  }
  fs.writeFileSync(filepath, buf);
}

function drawStar(ctx, cx, cy, outerR, color) {
  const innerR = outerR * 0.4;
  const spikes = 5;
  ctx.beginPath();
  for (let i = 0; i < spikes * 2; i++) {
    const r = i % 2 === 0 ? outerR : innerR;
    const a = (Math.PI / spikes) * i - Math.PI / 2;
    const x = cx + Math.cos(a) * r;
    const yy = cy + Math.sin(a) * r;
    if (i === 0) ctx.moveTo(x, yy); else ctx.lineTo(x, yy);
  }
  ctx.closePath();
  ctx.fillStyle = color;
  ctx.fill();
}

function renderResultsBitmap(results, country, outPath) {
  const header = ['App Name', 'Platform', 'Country', 'Rating', 'Reviews'];
  const rows = results.map((r) =>
    r.error
      ? [`${r.label} (error)`, r.platform || '-', (r.country || country).toUpperCase(), 'N/A', r.error]
      : [r.appName ?? r.label, r.platform, String(r.country).toUpperCase(), fmtRating(r.averageRating), fmtCount(r.ratingCount)]
  );

  const fontFamily = 'Helvetica, Arial, sans-serif';
  const titleSize = 22;
  const headerSize = 16;
  const rowSize = 16;
  const padX = 24;
  const padY = 20;
  const titleGap = 18;
  const headerGap = 12;
  const rowGap = 10;
  const colGap = 32;

  // Measure with an offscreen canvas first.
  const meas = createCanvas(10, 10).getContext('2d');
  meas.font = `bold ${headerSize}px ${fontFamily}`;
  const headerWidths = header.map((h) => meas.measureText(h).width);
  meas.font = `${rowSize}px ${fontFamily}`;
  const starSize = Math.round(rowSize * 0.9);
  const starPad = 6;
  const ratingColIdx = 3;
  const colWidths = header.map((_, i) =>
    Math.max(headerWidths[i], ...rows.map((row) => meas.measureText(String(row[i])).width))
  );
  colWidths[ratingColIdx] += starPad + starSize;

  const colXs = [];
  let cursor = padX;
  for (let i = 0; i < header.length; i++) {
    colXs.push(cursor);
    cursor += colWidths[i] + colGap;
  }
  const width = Math.ceil(cursor - colGap + padX);

  const titleH = titleSize + titleGap;
  const headerH = headerSize + headerGap;
  const rowH = rowSize + rowGap;
  const height = Math.ceil(padY + titleH + headerH + 4 + rowH * rows.length + padY);

  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, width, height);
  ctx.textBaseline = 'top';

  let y = padY;
  ctx.fillStyle = '#000000';
  ctx.font = `bold ${titleSize}px ${fontFamily}`;
  ctx.fillText(`App Ratings (country: ${country.toUpperCase()})`, padX, y);
  y += titleH;

  ctx.font = `bold ${headerSize}px ${fontFamily}`;
  for (let i = 0; i < header.length; i++) ctx.fillText(header[i], colXs[i], y);
  y += headerSize + Math.floor(headerGap / 2);

  ctx.strokeStyle = '#000000';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(padX, y + 0.5);
  ctx.lineTo(width - padX, y + 0.5);
  ctx.stroke();
  y += Math.ceil(headerGap / 2) + 4;

  ctx.font = `${rowSize}px ${fontFamily}`;
  for (const row of rows) {
    const isError = String(row[0]).includes('(error)');
    ctx.fillStyle = isError ? '#c80000' : '#000000';
    for (let i = 0; i < row.length; i++) {
      const text = String(row[i]);
      ctx.fillText(text, colXs[i], y);
      if (i === ratingColIdx && !isError) {
        const textW = ctx.measureText(text).width;
        const cx = colXs[i] + textW + starPad + starSize / 2;
        const cy = y + rowSize / 2;
        const prevFill = ctx.fillStyle;
        drawStar(ctx, cx, cy, starSize / 2, '#f5a623');
        ctx.fillStyle = prevFill;
      }
    }
    y += rowH;
  }

  const imageData = ctx.getImageData(0, 0, width, height);
  writeBMPFromRGBA(imageData.data, width, height, outPath);
  return { width, height, outPath: path.resolve(outPath) };
}

function showHelp() {
  console.log(`
⭐ Batch App Ratings

Fetches ratings for a predefined list of iOS and Android apps.
Edit the APPS array at the top of this file to change the list.

Usage:
  node get-app-ratings-batch.js [options]

Options:
  --country=<code>   Two-letter country code (default: us)
  --json             Output as JSON
  --bitmap[=<path>]  Also write results as a BMP image (default: ratings.bmp)
  --help, -h         Show this help
`);
}

function fmtRating(r) {
  return r != null ? r.toFixed(2) : 'N/A';
}

function fmtCount(n) {
  return (n ?? 0).toLocaleString();
}

async function main() {
  const args = parseArgs(process.argv);
  if (args.help) { showHelp(); return; }

  const country = args.country || 'us';

  const tasks = [];
  for (const app of APPS) {
    if (app.bundleId) {
      tasks.push(
        getIosRating(app.bundleId, country)
          .then((r) => ({ label: app.label, ...r }))
          .catch((e) => ({ label: app.label, platform: 'iOS', country, error: e.message }))
      );
    }
    if (app.applicationId) {
      tasks.push(
        getAndroidRating(app.applicationId, country)
          .then((r) => ({ label: app.label, ...r }))
          .catch((e) => ({ label: app.label, platform: 'Android', country, error: e.message }))
      );
    }
  }

  const results = await Promise.all(tasks);

  if (args.json) {
    const payload = results.map((r) => ({
      label: r.label,
      platform: r.platform,
      appName: r.appName ?? null,
      country: r.country,
      averageRating: r.averageRating ?? null,
      ratingCount: r.ratingCount ?? 0,
      error: r.error ?? null
    }));
    console.log(JSON.stringify(payload, null, 2));
    if (results.some((r) => r.error)) process.exit(2);
    return;
  }

  const header = ['App Name', 'Platform', 'Country', 'Rating', 'Reviews'];
  const rows = results.map((r) =>
    r.error
      ? [`${r.label} (error)`, r.platform, r.country, 'N/A', r.error]
      : [r.appName ?? r.label, r.platform, r.country, `${fmtRating(r.averageRating)} ⭐`, fmtCount(r.ratingCount)]
  );

  const widths = header.map((h, i) =>
    Math.max(h.length, ...rows.map((row) => String(row[i]).length))
  );
  const pad = (s, w) => String(s).padEnd(w);
  const line = (cols) => cols.map((c, i) => pad(c, widths[i])).join('  ');

  console.log('');
  console.log(line(header));
  console.log(widths.map((w) => '─'.repeat(w)).join('  '));
  for (const row of rows) console.log(line(row));
  console.log('');

  if (args.bitmap) {
    const info = renderResultsBitmap(results, country, args.bitmap);
    console.log(`Wrote bitmap: ${info.outPath} (${info.width}x${info.height})`);
  }

  if (results.some((r) => r.error)) process.exit(2);
}

main();
