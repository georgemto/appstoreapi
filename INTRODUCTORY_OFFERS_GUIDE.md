# Introductory Offers Guide

Complete guide for creating and managing introductory offers (including free trials) for in-app subscriptions using the App Store Connect API.

## Table of Contents

1. [Overview](#overview)
2. [Prerequisites](#prerequisites)
3. [Quick Start](#quick-start)
4. [Individual Operations](#individual-operations)
5. [Bulk Operations](#bulk-operations)
6. [Territories and Pricing](#territories-and-pricing)
7. [Subscription Filters (`--match`, `--plan-period`)](#subscription-filters---match---plan-period)
8. [API Endpoints](#api-endpoints)
9. [Common Use Cases](#common-use-cases)
10. [Troubleshooting](#troubleshooting)
11. [Testing Guidelines](#testing-guidelines)

---

## Overview

> ⚠️ **Introductory vs. promotional offers:** App Store Connect models these as two separate resources (`subscriptionIntroductoryOffers` vs. `subscriptionPromotionalOffers`). This guide covers **introductory offers** — use [PROMOTIONAL_OFFERS_GUIDE.md](./PROMOTIONAL_OFFERS_GUIDE.md) for promotional offers (which require an offer code).

Introductory offers provide discounted or free pricing to **new subscribers** on their first subscription to a product. Unlike promotional offers, introductory offers:

- Are applied **per territory** — every (subscription × territory) pair is its own offer
- Do **not** use offer codes — eligible users see them automatically
- Support optional `startDate` / `endDate` availability windows
- Are the standard way to configure **free trials** in iOS

This project provides:

- ✅ **Create** introductory offers for individual subscription/territory pairs
- ✅ **Bulk create** offers across subscriptions × territories in one run
- ✅ **Group filtering** — create offers only for a specific subscription group (or `*` for all)
- ✅ **Name filter** (`--match`) — target subscriptions by name substring when a group mixes billing cadences
- ✅ **Plan-period filter** (`--plan-period`) — target subscriptions by `subscriptionPeriod` (e.g. `ONE_MONTH`), independent of naming
- ✅ **Automatic price tier conversion** — pass one price point, it's converted per territory
- ✅ **All territories** — pass `--territories ALL` to cover every territory the app is in
- ✅ **Rollback support** — undo bulk operations with the generated log file
- ✅ **CRUD operations** — create, read, update (`startDate` / `endDate`), delete

### Key Features

| Feature | Description |
|---------|-------------|
| **Duration** | THREE_DAYS, ONE_WEEK, TWO_WEEKS, ONE_MONTH, TWO_MONTHS, THREE_MONTHS, SIX_MONTHS, ONE_YEAR |
| **Offer Modes** | FREE_TRIAL, PAY_AS_YOU_GO, PAY_UP_FRONT |
| **Periods** | 1–12 billing periods |
| **Territory** | Required (per-offer); API creates one offer per territory |
| **Pricing** | Price point required for non-FREE_TRIAL modes; auto-converted per territory |
| **Availability Window** | Optional `startDate` / `endDate` (ISO 8601) |
| **Updatable Fields** | Only `startDate` and `endDate` — everything else is immutable |

### Offer Modes

| Offer Mode | Description | Price Point Required | Typical Use |
|------------|-------------|---------------------|-------------|
| **FREE_TRIAL** | Free for the specified duration | ❌ No | Standard free trial for new subscribers |
| **PAY_AS_YOU_GO** | Discounted price per billing period for N periods | ✅ Yes | "First 3 months at $1.99/mo" |
| **PAY_UP_FRONT** | One discounted up-front payment covering N periods | ✅ Yes | "First year at $19.99 (50% off)" |

---

## Prerequisites

### Required Configuration

Ensure your `.env` file contains valid App Store Connect API credentials:

```env
APPSTORE_TEAM_ID=your_team_id
APPSTORE_KEY_ID=your_key_id
APPSTORE_PRIVATE_KEY_PATH=./path/to/AuthKey_KEYID.p8
APPSTORE_ISSUER_ID=your_issuer_id
```

### Verification

```bash
npm run debug-auth
```

### Get Subscription Information

```bash
npm run get-subscription-product-ids com.vtech.plus.inapp.ios.test3
```

This lists the subscription groups (with their reference names — needed for bulk runs) and every subscription's `id` and `productId`.

### Get Price Points (for non-FREE_TRIAL modes)

```bash
# Fast: one territory (~800 tiers, default summarizes to active + first 10)
npm run get-price-points <subscription-id> USA

# Full dump of every tier for the territory
npm run get-price-points <subscription-id> USA --verbose
```

Any tier can be used — you're not limited to currently active tiers. See the [Price Points section of the promotional offers guide](./PROMOTIONAL_OFFERS_GUIDE.md#price-points) for details on the output and `isActive` flag.

---

## Quick Start

### 1. Free trial for one subscription in USA

```bash
# Via the bulk CLI with a single territory (quickest path)
npm run bulk-create-introductory-offers -- com.vtech.plus.inapp.ios.test3 "Group 1" \
  --territories USA \
  --mode FREE_TRIAL \
  --duration ONE_WEEK
```

### 2. Free trial across multiple territories, all groups

```bash
npm run bulk-create-introductory-offers -- com.vtech.plus.inapp.ios.test3 "*" \
  --territories USA,GBR,CAN,AUS \
  --mode FREE_TRIAL \
  --duration ONE_WEEK
```

### 3. Free trial across **every** territory the app is in

```bash
npm run bulk-create-introductory-offers -- com.vtech.plus.inapp.ios.test3 "Group 1" \
  --territories ALL \
  --mode FREE_TRIAL \
  --duration ONE_WEEK
```

### 4. Paid introductory offer (3 discounted months)

```bash
npm run bulk-create-introductory-offers -- com.vtech.plus.inapp.ios.test3 "Group 1" \
  --territories USA \
  --mode PAY_AS_YOU_GO \
  --periods 3 \
  --duration ONE_MONTH \
  --price-point <USA_PRICE_POINT_ID>
```

### 5. List existing introductory offers

```bash
npm run get-introductory-offers com.vtech.plus.inapp.ios.test3

# Filter by subscription group
npm run get-introductory-offers com.vtech.plus.inapp.ios.test3 --reference "Group 1"
```

### 6. Delete / rollback

Individual offers are deleted through the HTTP API (`DELETE /api/introductory-offers/:id`). Bulk runs produce a `rollback-intro-<reference>-<timestamp>.json` file containing every created `offerId`, which you can iterate over to delete — see [Rollback](#rollback-bulk-creation) below.

---

## Individual Operations

There is no standalone CLI for single-offer creation — the HTTP API is the canonical path. For a one-off offer, either hit the API directly or run the bulk CLI with a single territory and a `--match` that uniquely identifies one subscription.

### Create an Introductory Offer (API)

```http
POST /api/introductory-offers
Content-Type: application/json

{
  "subscriptionId": "6746919022",
  "territory": "USA",
  "duration": "ONE_WEEK",
  "offerMode": "FREE_TRIAL",
  "numberOfPeriods": 1,
  "startDate": "2026-05-01",
  "endDate": "2026-12-31"
}
```

**Required fields:** `subscriptionId`, `territory`, `duration`, `offerMode`, `numberOfPeriods`.

**Optional fields:**
- `startDate`, `endDate` — ISO 8601 dates; `endDate` must be after `startDate`
- `subscriptionPricePoint` — required for `PAY_AS_YOU_GO` / `PAY_UP_FRONT`, omitted for `FREE_TRIAL`

**Paid example:**

```http
POST /api/introductory-offers
Content-Type: application/json

{
  "subscriptionId": "6746919022",
  "territory": "USA",
  "duration": "ONE_MONTH",
  "offerMode": "PAY_AS_YOU_GO",
  "numberOfPeriods": 3,
  "subscriptionPricePoint": "eyJzIjoiNjc0NjkxOTAyMiIsInQiOiJVU0EiLCJwIjoiMTAwMTAifQ"
}
```

The service layer also accepts a cross-territory price point and will auto-convert it to the target territory's equivalent tier. See [Territories and Pricing](#territories-and-pricing).

### Get Introductory Offer

```http
GET /api/introductory-offers/:id
GET /api/introductory-offers/:id?include=subscription,territory,subscriptionPricePoint
```

### Update Introductory Offer

Only the availability window is mutable:

```http
PATCH /api/introductory-offers/:id
Content-Type: application/json

{
  "startDate": "2026-06-01",
  "endDate": "2026-09-30"
}
```

To change duration, mode, periods, price point, or territory: **delete and recreate**.

### Delete Introductory Offer

```http
DELETE /api/introductory-offers/:id
```

---

## Bulk Operations

### Bulk Create

Creates one introductory offer per **(subscription × territory)** pair for every subscription in groups matching the reference name.

#### Command Line

```bash
npm run bulk-create-introductory-offers -- <bundle-id> <reference-name> --territories <codes> [options]
```

**Arguments:**
- `bundle-id` — must be `com.vtech.plus.inapp.ios.test3` (enforced safety check)
- `reference-name` — subscription group reference name (exact match, case-sensitive), or `"*"` for all groups

**Required option:**
- `--territories <codes>` — comma-separated ISO territory codes (`USA,GBR,CAN`), or `ALL` / `*` to pull every territory from App Store Connect's `/territories` endpoint

**Options:**
| Option | Default | Description |
|--------|---------|-------------|
| `--duration <dur>` | `ONE_WEEK` | `THREE_DAYS`, `ONE_WEEK`, `TWO_WEEKS`, `ONE_MONTH`, `TWO_MONTHS`, `THREE_MONTHS`, `SIX_MONTHS`, `ONE_YEAR` |
| `--mode <mode>` | `FREE_TRIAL` | `FREE_TRIAL`, `PAY_AS_YOU_GO`, `PAY_UP_FRONT` |
| `--periods <num>` | `1` | 1–12 |
| `--price-point <id>` | — | Required for non-`FREE_TRIAL`; auto-converted per target territory |
| `--start-date <date>` | — | ISO date, offer becomes available on/after |
| `--end-date <date>` | — | ISO date, offer unavailable after |
| `--match <substring>` | — | Only include subscriptions whose name contains this (case-insensitive). See [Subscription Filters](#subscription-filters---match---plan-period) |
| `--plan-period <list>` | — | Comma-separated list of `subscriptionPeriod` values (e.g. `ONE_MONTH` or `ONE_MONTH,TWO_MONTHS`). Filters subscriptions by their billing period. Composable with `--match` |

**Examples:**

```bash
# One-week free trial, single territory
npm run bulk-create-introductory-offers -- com.vtech.plus.inapp.ios.test3 "Group 1" \
  --territories USA

# Free trial across multiple territories for all groups
npm run bulk-create-introductory-offers -- com.vtech.plus.inapp.ios.test3 "*" \
  --territories USA,GBR,CAN \
  --mode FREE_TRIAL \
  --duration ONE_WEEK

# Free trial across ALL territories
npm run bulk-create-introductory-offers -- com.vtech.plus.inapp.ios.test3 "Group 1" \
  --territories ALL \
  --mode FREE_TRIAL \
  --duration ONE_WEEK

# Paid introductory offer
npm run bulk-create-introductory-offers -- com.vtech.plus.inapp.ios.test3 "Group 1" \
  --territories USA \
  --mode PAY_AS_YOU_GO \
  --periods 3 \
  --price-point <PRICE_POINT_ID>

# Availability window
npm run bulk-create-introductory-offers -- com.vtech.plus.inapp.ios.test3 "Group 1" \
  --territories ALL \
  --start-date 2026-05-01 \
  --end-date 2026-12-31
```

#### How It Works

1. Finds subscription groups matching `reference-name` (or all groups if `"*"`)
2. Collects every subscription in the matched groups
3. Applies `--match` (if provided) to narrow by subscription name
4. For each `(subscription, territory)` pair, calls `POST /subscriptionIntroductoryOffers`
5. Total offers created = `filtered subscriptions × territories`
6. Writes a full results file and a rollback log

#### Output Files

- `bulk-intro-offers-<reference>-<timestamp>.json` — full results (summary, created, failed)
- `rollback-intro-<reference>-<timestamp>.json` — array of created `offerId`s for cleanup

#### Bulk API Endpoint

```http
POST /api/introductory-offers/bulk
Content-Type: application/json

{
  "bundleId": "com.vtech.plus.inapp.ios.test3",
  "referenceName": "Group 1",
  "offerTemplate": {
    "territories": ["USA", "GBR", "CAN"],
    "duration": "ONE_WEEK",
    "offerMode": "FREE_TRIAL",
    "numberOfPeriods": 1,
    "startDate": "2026-05-01",
    "endDate": "2026-12-31",
    "nameMatch": "Monthly",
    "planPeriodFilter": ["ONE_MONTH"]
  }
}
```

`subscriptionPricePoint` goes inside `offerTemplate` for non-`FREE_TRIAL` modes. `nameMatch` and `planPeriodFilter` are optional subscription filters applied after the group filter — see [Subscription Filters](#subscription-filters---match---plan-period).

### Rollback Bulk Creation

The bulk CLI does not provide a `rollback-intro` npm script yet. Use the generated rollback log file to delete offers via the HTTP API — one `DELETE /api/introductory-offers/:id` per entry.

Example (bash + jq):

```bash
jq -r '.createdOffers[].offerId' rollback-intro-Group-1-*.json | while read id; do
  curl -X DELETE "http://localhost:3000/api/introductory-offers/$id"
done
```

**Notes:**
- Apple's API does not support transactional rollback
- Each delete is independent; a partial rollback is possible
- Dry-run manually by echoing the IDs before piping to `curl`

---

## Territories and Pricing

### Why Territories Matter

Unlike promotional offers (one record covering all priced territories), **each introductory offer is scoped to a single territory**. An "all countries" free trial for a subscription means one offer record per country.

`--territories ALL` fetches the full territory list from App Store Connect and creates one offer per territory. For an app in ~175 territories, running this against `"*"` with 10 subscriptions produces ~1,750 offers — confirm the prompt carefully.

### Automatic Price Tier Conversion

Apple's price point IDs are base64-encoded JSON: `{"s":"<subId>","t":"<territory>","p":"<tier>"}`. When you supply a single `--price-point` (e.g., a USA tier 10010 / $0.99 ID) alongside `--territories USA,GBR,CAN`, the service:

1. Decodes the price point ID
2. Keeps the subscription ID and tier
3. Replaces the territory code per target
4. Re-encodes for each

Result: globally consistent pricing (tier 10010 ≈ $0.99 / £0.99 / CAD $0.99 / …) with one input. See [MULTI_TERRITORY_PRICING.md](./MULTI_TERRITORY_PRICING.md) for the full mechanism.

**You still need a valid tier that exists in Apple's catalog.** If a territory doesn't support the chosen tier, that offer will fail — the bulk run will report it in the `failed` list and continue.

---

## Subscription Filters (`--match`, `--plan-period`)

A subscription group often mixes billing cadences (e.g., "Monthly Premium", "Annual Premium" in the same group). You usually want **different** introductory offers per cadence:

- 1 week free for the monthly plan
- 1 month free for the annual plan

Two filters narrow the subscription list **after** the group filter has been applied. They can be used separately or combined — both must match when combined.

### `--match <substring>` (name-based)

Case-insensitive substring match against the subscription's `name` attribute (the App Store Connect internal reference name — not the localized display name, not the productId).

```bash
# Short trial for monthly subs only
npm run bulk-create-introductory-offers -- com.vtech.plus.inapp.ios.test3 "Group 1" \
  --territories ALL \
  --match "Monthly" \
  --duration ONE_WEEK \
  --periods 1
```

Works only if your subscriptions are named by cadence. If they're named by tier or product line (e.g., `"Premium"`, `"Pro"`), `--match` can't distinguish them — use `--plan-period` instead.

### `--plan-period <list>` (period-based, recommended)

Filters by the subscription's `subscriptionPeriod` field — the authoritative billing cadence from App Store Connect. Accepts a comma-separated list.

**Valid values:** `THREE_DAYS`, `ONE_WEEK`, `TWO_WEEKS`, `ONE_MONTH`, `TWO_MONTHS`, `THREE_MONTHS`, `SIX_MONTHS`, `ONE_YEAR`

```bash
# Monthly plans only, regardless of naming
npm run bulk-create-introductory-offers -- com.vtech.plus.inapp.ios.test3 "Group 1" \
  --territories ALL \
  --plan-period ONE_MONTH \
  --duration ONE_WEEK \
  --periods 1

# Longer trial for yearly plans in the same group
npm run bulk-create-introductory-offers -- com.vtech.plus.inapp.ios.test3 "Group 1" \
  --territories ALL \
  --plan-period ONE_YEAR \
  --duration ONE_MONTH \
  --periods 1

# Multiple periods in one pass
npm run bulk-create-introductory-offers -- com.vtech.plus.inapp.ios.test3 "Group 1" \
  --territories ALL \
  --plan-period ONE_MONTH,TWO_MONTHS,THREE_MONTHS \
  --duration TWO_WEEKS
```

### Composing Both

When both are supplied, a subscription must satisfy **both** filters. Useful when a group has monthly Basic, monthly Pro, annual Basic, and annual Pro:

```bash
# Monthly Pro only
npm run bulk-create-introductory-offers -- com.vtech.plus.inapp.ios.test3 "Group 1" \
  --territories ALL \
  --plan-period ONE_MONTH \
  --match "Pro" \
  --duration ONE_WEEK
```

### When to Use Which

| Situation | Filter |
|-----------|--------|
| Subscriptions named by cadence (`"Monthly Premium"`) | `--match` or `--plan-period` (either works) |
| Subscriptions named by tier (`"Premium"`) | `--plan-period` |
| Need both cadence and tier narrowed | `--plan-period` + `--match` together |
| Unsure what the names look like | Run `npm run get-subscription-product-ids <bundle-id>` first |

---

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST   | `/api/introductory-offers` | Create one introductory offer |
| POST   | `/api/introductory-offers/bulk` | Bulk create across subscriptions × territories |
| GET    | `/api/introductory-offers/bundle/:bundleId` | List offers for an app, grouped by subscription |
| GET    | `/api/introductory-offers/:id` | Get one offer (supports `include=subscription,territory,subscriptionPricePoint`) |
| PATCH  | `/api/introductory-offers/:id` | Update `startDate` / `endDate` only |
| DELETE | `/api/introductory-offers/:id` | Delete an offer |

### Get by Bundle ID

```http
GET /api/introductory-offers/bundle/:bundleId?referenceName=Group%201&limit=200
```

**Query parameters:**
- `referenceName` — optional subscription group filter (exact match)
- `limit` — max subscriptions to check (1–200, default 200)

**Response shape:**

```json
{
  "success": true,
  "data": {
    "bundleId": "com.vtech.plus.inapp.ios.test3",
    "appName": "VTech Plus Test App",
    "referenceName": "Group 1",
    "totalOffers": 12,
    "subscriptions": [
      {
        "subscription": {
          "id": "6746919022",
          "name": "Monthly Premium",
          "productId": "com.example.monthly"
        },
        "offers": [
          {
            "id": "intro-offer-id-1",
            "offerMode": "FREE_TRIAL",
            "duration": "ONE_WEEK",
            "numberOfPeriods": 1,
            "startDate": null,
            "endDate": null
          }
        ]
      }
    ]
  }
}
```

---

## Common Use Cases

### 1. Standard 7-day free trial for every subscription

```bash
npm run bulk-create-introductory-offers -- com.vtech.plus.inapp.ios.test3 "*" \
  --territories ALL \
  --mode FREE_TRIAL \
  --duration ONE_WEEK \
  --periods 1
```

### 2. Mixed cadences in one group (two passes)

Prefer `--plan-period` — it uses the authoritative `subscriptionPeriod` field and doesn't depend on naming:

```bash
# Pass 1 — monthly plans (1-week free trial)
npm run bulk-create-introductory-offers -- com.vtech.plus.inapp.ios.test3 "Group 1" \
  --territories ALL \
  --plan-period ONE_MONTH \
  --duration ONE_WEEK

# Pass 2 — yearly plans (1-month free trial)
npm run bulk-create-introductory-offers -- com.vtech.plus.inapp.ios.test3 "Group 1" \
  --territories ALL \
  --plan-period ONE_YEAR \
  --duration ONE_MONTH
```

### 3. Discounted first 3 months in key markets

```bash
npm run bulk-create-introductory-offers -- com.vtech.plus.inapp.ios.test3 "Group 1" \
  --territories USA,GBR,CAN,AUS \
  --mode PAY_AS_YOU_GO \
  --periods 3 \
  --duration ONE_MONTH \
  --price-point <USA_TIER_ID>
```

The USA price point auto-converts to each other territory's equivalent tier.

### 4. Holiday promo window

```bash
npm run bulk-create-introductory-offers -- com.vtech.plus.inapp.ios.test3 "Group 1" \
  --territories ALL \
  --duration TWO_WEEKS \
  --start-date 2026-12-01 \
  --end-date 2026-12-31
```

To later adjust the window without recreating offers, `PATCH` each with new `startDate` / `endDate`.

---

## Troubleshooting

### `--price-point is required for offer mode <mode>`

Non-`FREE_TRIAL` modes need a price point. Fetch one:

```bash
npm run get-price-points <subscription-id> USA
```

### `No subscription groups found with reference name "X"`

Reference names are **case-sensitive, exact match**. Run `npm run get-subscription-product-ids com.vtech.plus.inapp.ios.test3` and copy the exact name. Use `"*"` if you really mean all groups.

### `An introductory offer already exists for this subscription/territory`

An introductory offer is unique per `(subscription, territory)` pair. Delete the existing one or pick a different territory. The bulk run will record this in the `failed` array and keep going with the rest.

### Invalid price point for a territory

Not every Apple tier exists in every territory. If a tier is missing for a country, that specific `(subscription, territory)` will fail — check the `failed` entries in the result JSON and either pick a different tier or exclude that territory.

### `endDate` must be after `startDate`

Both dates are ISO 8601 (`YYYY-MM-DD`). If you pass both, `endDate` must be strictly after `startDate`.

### Offer doesn't appear in `get-promotional-offers`

Correct — introductory offers and promotional offers are **separate** App Store Connect resources. Use `npm run get-introductory-offers <bundle-id>` instead.

### Authentication / credentials errors

```bash
npm run debug-auth
```

Make sure `APPSTORE_TEAM_ID`, `APPSTORE_KEY_ID`, `APPSTORE_PRIVATE_KEY_PATH`, and `APPSTORE_ISSUER_ID` are set and the `.p8` file is readable.

---

## Testing Guidelines

### ⚠️ CRITICAL: Test Bundle ID Only

```bash
# ✅ CORRECT
npm run bulk-create-introductory-offers -- com.vtech.plus.inapp.ios.test3 "Group 1" --territories USA

# ❌ NEVER use these for testing
npm run bulk-create-introductory-offers -- com.vtech.plus "Group 1" --territories USA          # Production!
npm run bulk-create-introductory-offers -- com.vtech.plus.uat "Group 1" --territories USA      # UAT!
```

The bulk CLI has a hard-coded safety check rejecting any bundle ID other than `com.vtech.plus.inapp.ios.test3`.

### Recommended Test Scenarios

1. **Single territory, one group** — smallest scope, quickest feedback
2. **Multiple territories, one group** — validates per-territory creation and auto-price-tier conversion
3. **`--territories ALL` on a small group** — exercises territory fetch and high fanout
4. **`--match` filtering** — verify only matching subscriptions receive offers
5. **Paid mode with cross-territory price point** — confirm tier conversion produces valid IDs
6. **Duplicate run** — second run should record `already exists` failures without aborting
7. **Rollback** — iterate the rollback JSON through `DELETE /api/introductory-offers/:id`
8. **`PATCH` dates** — update `startDate` / `endDate`, verify update (other fields should reject)

---

## Related Docs

- [PROMOTIONAL_OFFERS_GUIDE.md](./PROMOTIONAL_OFFERS_GUIDE.md) — counterpart for promotional offers (with offer codes)
- [MULTI_TERRITORY_PRICING.md](./MULTI_TERRITORY_PRICING.md) — how the automatic price tier conversion works
- [GET_ALL_PRICE_POINTS.md](./GET_ALL_PRICE_POINTS.md) / [PRICE_POINTS_ENHANCEMENT.md](./PRICE_POINTS_ENHANCEMENT.md) — fetching every available Apple tier
- [APP_MANAGEMENT_GUIDE.md](./APP_MANAGEMENT_GUIDE.md) — apps, subscription groups, subscriptions

---

## Summary

### Key Takeaways

✅ **Per-territory resource** — each offer is one `(subscription, territory)` row

✅ **Territories are required** for bulk runs — use `USA,GBR,…` or `ALL`

✅ **Free trials live here** — not in promotional offers

✅ **Only dates are mutable** — to change duration / mode / periods / price, delete and recreate

✅ **Price tier auto-conversion** — one `--price-point` covers many territories

✅ **Filter mixed-cadence groups** — use `--plan-period` (by `subscriptionPeriod`) or `--match` (by name); combine for cadence + tier

✅ **Rollback via generated log** — iterate `offerId`s through the DELETE endpoint

### Quick Reference

```bash
# Subscription info
npm run get-subscription-product-ids com.vtech.plus.inapp.ios.test3

# Price points (for paid offers)
npm run get-price-points <subscription-id> USA

# Bulk create — single territory
npm run bulk-create-introductory-offers -- com.vtech.plus.inapp.ios.test3 "Group 1" --territories USA

# Bulk create — all territories, all groups
npm run bulk-create-introductory-offers -- com.vtech.plus.inapp.ios.test3 "*" --territories ALL

# Mixed cadences — prefer --plan-period (uses subscriptionPeriod field)
npm run bulk-create-introductory-offers -- com.vtech.plus.inapp.ios.test3 "Group 1" --territories ALL --plan-period ONE_MONTH --duration ONE_WEEK
npm run bulk-create-introductory-offers -- com.vtech.plus.inapp.ios.test3 "Group 1" --territories ALL --plan-period ONE_YEAR  --duration ONE_MONTH

# Paid
npm run bulk-create-introductory-offers -- com.vtech.plus.inapp.ios.test3 "Group 1" --territories USA --mode PAY_AS_YOU_GO --periods 3 --price-point <ID>

# List
npm run get-introductory-offers com.vtech.plus.inapp.ios.test3
```

---

**Last Updated:** April 2026
