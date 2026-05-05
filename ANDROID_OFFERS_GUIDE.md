# Android Subscription Offers Guide

Complete guide for creating and managing Google Play subscription offers for Android in-app subscriptions.

## Table of Contents

1. [Overview](#overview)
2. [Google Play vs. Apple: What's Different](#google-play-vs-apple-whats-different)
3. [Prerequisites](#prerequisites)
4. [Quick Start](#quick-start)
5. [Bulk Create CLI](#bulk-create-cli)
6. [Offer Modes and Phases](#offer-modes-and-phases)
7. [Subscription / Base-Plan Filters](#subscription--base-plan-filters)
8. [Activation](#activation)
9. [Rollback](#rollback)
10. [API Endpoints](#api-endpoints)
11. [Common Use Cases](#common-use-cases)
12. [Troubleshooting](#troubleshooting)
13. [Testing Guidelines](#testing-guidelines)

---

## Overview

Google Play models subscription offers as a **single resource** — there is no separate "introductory" vs. "promotional" concept like Apple has. Instead, every offer is built from:

- **One or more phases** — each phase is `FREE_TRIAL`, `PAY_AS_YOU_GO` (discounted recurring), or `PAY_UP_FRONT` (single discounted payment)
- **Optional targeting** — `targetNewCustomers: true` restricts the offer to users who haven't subscribed before (the Google-native way to build an "intro" offer)
- **Optional scope filters** — which products, base plans, and regions the offer applies to

This project provides:

- ✅ **`bulk-create-android-offers`** — create offers across many subscriptions × base plans in one run
- ✅ **Auto-generated offer IDs** — no need to pick a unique ID per run
- ✅ **Intro-style by default** — offer is restricted to users who've never subscribed to any subscription in the app; pass `--target-users-who-never-had-this-subscription` for the narrower "never this subscription" scope, or `--developer-determined --offer-tags <name>` to skip auto-targeting and let the app look up the offer by tag via `subscriptionOfferToken`
- ✅ **Base-plan period filter** — apply different templates to monthly vs. annual base plans
- ✅ **Rollback log** — every successful creation is recorded for cleanup
- ✅ **Full HTTP API** — `/api/android-offers` with CRUD, activate / deactivate, and bulk create

### Resource Model

```
Package (com.example.app)
  └── Subscription (productId)           e.g. "com.example.plus.monthly"
        └── Base Plan (basePlanId)       e.g. "monthly-autorenew"
              └── Offer (offerId)        e.g. "promo-mkgq-a3k2"   ← this guide
```

A single **offer ID** can be reused across many `(product, base plan)` pairs — Google scopes offer IDs to each pair independently.

---

## Google Play vs. Apple: What's Different

| Concept | Apple (iOS) | Google Play (Android) |
|---|---|---|
| Intro vs. promo | Two separate resources | **One resource**; `targetNewCustomers: true` ≈ intro |
| Offer code | Required for promotional offers (user redeems) | Not used — offers apply automatically |
| Territories | One offer per territory (for intro) or app-wide (for promo) | `regionalConfigs` array per offer (the bulk CLI doesn't set these; offer inherits base-plan pricing) |
| Billing cadence | `subscriptionPeriod` on the subscription | `billingPeriodDuration` on the **base plan** (ISO 8601: `P1M`, `P1Y`) |
| Filter by cadence | `--plan-period ONE_MONTH` | `--plan-period P1M` (or iOS alias `ONE_MONTH`) |
| Duration values | `ONE_WEEK`, `ONE_MONTH`, … | Same iOS aliases **or** ISO 8601 (`P1W`, `P1M`, …) |
| Price input | Apple price-tier ID | Either a percentage (`pricePercentageDiscount`) or an absolute `Money` value (`units` + `nanos` + `currencyCode`) |

---

## Prerequisites

### Required Configuration

Ensure your `.env` contains valid Google Play service-account credentials:

```env
GOOGLE_APPLICATION_CREDENTIALS=./path/to/service-account-key.json
```

The service account needs **Monetization** permissions on the Play Console project (at minimum: view + manage subscriptions).

### Get Subscription / Base Plan Information

```bash
# List all Google Play subscriptions for the package (use the HTTP API while the app server is running)
curl "http://localhost:3000/api/android-offers/package/com.vtech.plus.inapp.test3"
```

Response includes each subscription's `productId` and each base plan's `basePlanId` and `billingPeriodDuration` — the values you'll use for `--product-ids`, `--base-plan-ids`, and `--plan-period`.

---

## Quick Start

### 1. Two-week free trial for new subscribers (every product × base plan)

```bash
npm run bulk-create-android-offers -- --package-name com.vtech.plus.inapp.test3
```

This uses all defaults — `--mode FREE_TRIAL`, `--duration TWO_WEEKS`, eligibility restricted to users who have never subscribed to **any** subscription in the app, auto-generated offer ID.

### 2. Two-week free trial on monthly base plans only

```bash
npm run bulk-create-android-offers -- --package-name com.vtech.plus.inapp.test3 \
  --duration TWO_WEEKS \
  --plan-period P1M
```

### 3. First 3 months at 50% off (new subscribers)

```bash
npm run bulk-create-android-offers -- --package-name com.vtech.plus.inapp.test3 \
  --mode PAY_AS_YOU_GO \
  --duration ONE_MONTH \
  --periods 3 \
  --discount-percent 50
```

### 4. First month at absolute $1.99 USD

```bash
npm run bulk-create-android-offers -- --package-name com.vtech.plus.inapp.test3 \
  --mode PAY_AS_YOU_GO \
  --duration ONE_MONTH \
  --periods 1 \
  --price 1.99
```

### 5. Developer-determined promo (app looks up by tag at billing time)

```bash
npm run bulk-create-android-offers -- --package-name com.vtech.plus.inapp.test3 \
  --developer-determined \
  --offer-tags spring25 \
  --mode PAY_AS_YOU_GO \
  --duration ONE_MONTH \
  --periods 2 \
  --discount-percent 25
```

The offer has no acquisition rule — it's not auto-shown to any user. Your app passes the tag (`spring25`) to Play Billing to retrieve the offer's `subscriptionOfferToken` at billing-flow time. The CLI rejects `--developer-determined` without `--offer-tags`, since a tagless offer is unreachable.

---

## Bulk Create CLI

```bash
npm run bulk-create-android-offers -- --package-name <pkg> [options]
```

**Required:**
- `--package-name <pkg>` — Android application ID. Must be the test application ID (enforced safety check).

**Offer ID:**
| Option | Default | Description |
|--------|---------|-------------|
| `--offer-id <id>` | auto-generated | Custom offer ID (1–63 chars, `[a-zA-Z0-9_-]`) |
| `--prefix <prefix>` | `promo` | Prefix for the auto-generated ID |

Auto-generated format: `<prefix>-<base36-timestamp>-<random>` (e.g. `promo-mkgq5p-a3k2`).

**Phase options:**
| Option | Default | Description |
|--------|---------|-------------|
| `--mode <mode>` | `FREE_TRIAL` | `FREE_TRIAL`, `PAY_AS_YOU_GO`, or `PAY_UP_FRONT` |
| `--duration <d>` | `TWO_WEEKS` | Phase duration. iOS-style (`ONE_MONTH`) or ISO 8601 (`P1M`). Valid: `ONE_WEEK`, `TWO_WEEKS`, `ONE_MONTH`, `TWO_MONTHS`, `THREE_MONTHS`, `SIX_MONTHS`, `ONE_YEAR` (or `P1W`, `P2W`, `P1M`, `P2M`, `P3M`, `P6M`, `P1Y`) |
| `--periods <n>` | `1` | Recurrence count for `PAY_AS_YOU_GO` (1–52) |
| `--discount-percent <n>` | — | Percentage discount (1–99) for `PAY_AS_YOU_GO` / `PAY_UP_FRONT` |
| `--price <amount>` | — | Absolute price (e.g. `4.99`). Mutually exclusive with `--discount-percent` |
| `--currency <code>` | `USD` | ISO 4217 currency code (used with `--price`) |

**Eligibility targeting** (mutually exclusive):
| Option | Google scope | Who sees the offer |
|--------|--------------|--------------------|
| *(default)* / `--target-users-who-never-had-any-subscription` | `acquisitionRule.scope.anySubscriptionInApp` | Users who have never subscribed to **any** subscription in the app |
| `--target-users-who-never-had-this-subscription` | `acquisitionRule.scope.thisSubscription` | Users who have never subscribed to **this** subscription (may have tried other tiers in the app) |
| `--developer-determined` | — (no targeting) | Not auto-shown to anyone. The app must look up the offer by tag via Play Billing's `subscriptionOfferToken` at billing-flow time. **Requires `--offer-tags <name>`** — without a tag, the offer is unreachable. |

The default is the **strictest** new-customer scope — the offer never shows to users who previously tried *any* paid subscription in your app. Opt into the narrower `thisSubscription` scope with `--target-users-who-never-had-this-subscription` when you want users who had, e.g., a Basic plan to still be eligible for a Pro intro offer.

`--developer-determined` is a different beast: the offer is created without any acquisition rule, so Google Play will not show it automatically. The CLI requires `--offer-tags <name>` whenever you pass `--developer-determined`, because the app needs the tag to retrieve the offer's `subscriptionOfferToken` at runtime — otherwise the offer is invisible to users.

**Filters:**
| Option | Default | Description |
|--------|---------|-------------|
| `--product-ids <list>` | all | Comma-separated productIds to target |
| `--base-plan-ids <list>` | all | Comma-separated basePlanIds to target |
| `--plan-period <list>` | all | Comma-separated billing periods to filter base plans by (e.g. `P1M,P1Y` or `ONE_MONTH,ONE_YEAR`) |
| `--from-file <path>` | — | Load productIds from a `generate-product-ids.js` input JSON (the same file `bulk-create-subscriptions-android` consumes). Merged as a union with `--product-ids`. |
| `--offer-tags <list>` | — | Comma-separated offer tags |

### Pairing with `bulk-create-subscriptions-android`

A natural workflow is: create a batch of subscriptions from a generated JSON, then immediately wrap them with an intro free trial. Use the **same input file** for both commands:

```bash
# 1. Generate the product-ids.json (from your CSV or hand-written)
npm run generate-product-ids my-products.csv

# 2. Create the subscriptions + base plans
npm run bulk-create-subscriptions-android -- product-ids.json --package-name com.vtech.plus.inapp.test3

# 3. Wrap the exact same products with a 7-day free trial and activate
npm run bulk-create-android-offers -- --package-name com.vtech.plus.inapp.test3 \
  --from-file product-ids.json \
  --duration ONE_WEEK \
  --activate
```

`--from-file` reads the file's `subscriptionGroups[].subscriptions[].productId` values and passes them as the `productIds` filter, so the offer run only touches the subscriptions from that batch — not every subscription in the package.

**Output:**
- `bulk-android-offers-<offerId>-<timestamp>.json` — full results (summary, created, failed)
- `rollback-android-<offerId>-<timestamp>.json` — per-offer locators for cleanup

---

## Offer Modes and Phases

Each mode produces exactly **one phase** in the offer. (Multi-phase offers — e.g. free trial then discounted recurring — require hitting the HTTP API directly.)

| Mode | Phase type sent to Google | Required extras |
|------|---------------------------|-----------------|
| `FREE_TRIAL` | `FREE` | — |
| `PAY_AS_YOU_GO` | `DISCOUNTED_RECURRING_PAYMENT` | `--periods` + (`--discount-percent` OR `--price`) |
| `PAY_UP_FRONT` | `SINGLE_PAYMENT` | `--discount-percent` OR `--price` |

### `--discount-percent` vs. `--price`

Both are supported for paid modes; supply **one** of them:

- `--discount-percent 50` — Google computes the discounted price from the base plan's price in each region. Recommended for multi-region offers because prices auto-adjust per market.
- `--price 4.99 --currency USD` — absolute price in one currency. Google Play uses this value directly.

### Translation (service layer)

Internally the CLI builds an `offerTemplate.phases[0]` that the service (`src/services/android-offers.js`) translates into Google Play's payload via `convertPhaseToGooglePlayFormat`. iOS-style `offerMode` values and durations are accepted as a convenience and normalized to Google's native enums.

---

## Subscription / Base-Plan Filters

Google's `bulkCreateOffers` iterates **every (subscription × base plan)** pair in the package by default. Three filters narrow that set:

### `--product-ids` (which subscriptions)

Exact-match list of Google Play product IDs:

```bash
--product-ids com.vtech.plus.monthly,com.vtech.plus.annual
```

### `--base-plan-ids` (which base plans, by ID)

Exact-match list of base-plan IDs. Applied **after** `--product-ids`:

```bash
--base-plan-ids monthly-autorenew,annual-autorenew
```

### `--plan-period` (which base plans, by cadence)

Filters base plans by `billingPeriodDuration` (or `prepaidBasePlanType.billingPeriodDuration` for prepaid plans). Most flexible filter when base-plan IDs aren't consistent across products:

```bash
# Only monthly base plans
--plan-period P1M

# Monthly or annual
--plan-period ONE_MONTH,ONE_YEAR

# Every iOS-style alias normalizes to ISO 8601 before comparison
```

Valid values: `P1W`, `P1M`, `P2M`, `P3M`, `P6M`, `P1Y` (ISO 8601) or `ONE_WEEK`, `ONE_MONTH`, `TWO_MONTHS`, `THREE_MONTHS`, `SIX_MONTHS`, `ONE_YEAR` (iOS aliases).

Composes with the other filters — all supplied filters must match.

---

## Activation

Offers are created in **DRAFT** state by default — invisible to users until activated. Google Play exposes a separate `activate` endpoint for each offer. Two ways to flip offers to ACTIVE:

### Option 1: `--activate` on bulk create (ergonomic)

```bash
npm run bulk-create-android-offers -- --package-name com.vtech.plus.inapp.test3 --activate
```

Each `(product, base plan)` offer is activated immediately after it's created. Activation failures are logged separately and recorded under `activation.failed` in the results JSON; creation successes remain recorded even if activation fails (you can re-run activation later).

### Option 2: `activate-android-offers` (standalone)

Activate offers recorded in an existing results or rollback JSON file — useful when you want to create first, inspect in the Play Console, then activate:

```bash
# Activate everything from a previous bulk run
npm run activate-android-offers -- bulk-android-offers-promo-xxx-2026-04-22T...Z.json

# Or from the rollback log (same tuples)
npm run activate-android-offers -- rollback-android-promo-xxx-2026-04-22T...Z.json

# Activate a single offer by tuple
npm run activate-android-offers -- com.vtech.plus.inapp.test3 <productId> <basePlanId> <offerId>
```

Writes `activate-android-results-<timestamp>.json` with per-offer status.

### Via HTTP API

```http
POST /api/android-offers/:packageName/:productId/:basePlanId/:offerId/activate
```

### Notes

- Activation is **idempotent** on Google's side — re-activating an already-ACTIVE offer returns success.
- The **base plan** must be ACTIVE before its offers can be activated. If the base plan is still in DRAFT, offer activation returns 400.
- To roll back to DRAFT, call the corresponding deactivate endpoint: `POST /api/android-offers/:packageName/:productId/:basePlanId/:offerId/deactivate`.

---

## Rollback

Every successful bulk run writes `rollback-android-<offerId>-<timestamp>.json`:

```json
{
  "operation": "bulk_create_android_offers",
  "packageName": "com.vtech.plus.inapp.test3",
  "offerId": "promo-mkgq5p-a3k2",
  "createdOffers": [
    {
      "packageName": "com.vtech.plus.inapp.test3",
      "productId": "com.vtech.plus.monthly",
      "basePlanId": "monthly-autorenew",
      "offerId": "promo-mkgq5p-a3k2"
    }
  ]
}
```

There is no dedicated rollback CLI for Android yet. Iterate the log through the HTTP DELETE endpoint:

```bash
jq -c '.createdOffers[]' rollback-android-*.json | while read o; do
  pkg=$(echo "$o" | jq -r .packageName)
  prod=$(echo "$o" | jq -r .productId)
  bp=$(echo "$o" | jq -r .basePlanId)
  oid=$(echo "$o" | jq -r .offerId)
  curl -X DELETE "http://localhost:3000/api/android-offers/$pkg/$prod/$bp/$oid"
done
```

Offers are deleted one by one. Google's API does not support transactional rollback, so partial rollbacks are possible if one delete fails.

---

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST   | `/api/android-offers` | Create a single offer |
| POST   | `/api/android-offers/bulk` | Bulk create across products × base plans |
| GET    | `/api/android-offers/package/:packageName` | List offers for a package (filter by `productId`, `basePlanId`) |
| GET    | `/api/android-offers/:packageName/:productId/:basePlanId/:offerId` | Get one offer |
| PATCH  | `/api/android-offers/:packageName/:productId/:basePlanId/:offerId` | Update an offer |
| DELETE | `/api/android-offers/:packageName/:productId/:basePlanId/:offerId` | Delete an offer |
| POST   | `/api/android-offers/:packageName/:productId/:basePlanId/:offerId/activate` | Activate an offer |
| POST   | `/api/android-offers/:packageName/:productId/:basePlanId/:offerId/deactivate` | Deactivate an offer |

### Bulk Create Payload

```http
POST /api/android-offers/bulk
Content-Type: application/json

{
  "packageName": "com.vtech.plus.inapp.test3",
  "offerTemplate": {
    "offerId": "spring24-intro",
    "phases": [
      {
        "offerMode": "PAY_AS_YOU_GO",
        "duration": "P1M",
        "recurrenceCount": 3,
        "pricePercentageDiscount": 50
      }
    ],
    "targetNewCustomers": true,
    "offerTags": ["spring", "intro"],
    "productIds": ["com.vtech.plus.monthly"],
    "basePlanIds": ["monthly-autorenew"],
    "basePlanPeriods": ["P1M"]
  }
}
```

`productIds`, `basePlanIds`, and `basePlanPeriods` are all optional filters. `basePlanPeriods` entries must be ISO 8601 (`P1M`, `P1Y`) — the CLI normalizes iOS aliases to ISO before hitting the service.

---

## Common Use Cases

### 1. Standard intro free trial for new subscribers

```bash
npm run bulk-create-android-offers -- --package-name com.vtech.plus.inapp.test3 \
  --duration ONE_WEEK
```

### 2. Different trial lengths per base-plan cadence (two passes)

```bash
# Monthly plans — 1 week free
npm run bulk-create-android-offers -- --package-name com.vtech.plus.inapp.test3 \
  --plan-period P1M \
  --duration ONE_WEEK

# Annual plans — 1 month free
npm run bulk-create-android-offers -- --package-name com.vtech.plus.inapp.test3 \
  --plan-period P1Y \
  --duration ONE_MONTH
```

### 3. Holiday promo (developer-determined; app attaches by offerToken)

```bash
npm run bulk-create-android-offers -- --package-name com.vtech.plus.inapp.test3 \
  --developer-determined \
  --mode PAY_AS_YOU_GO \
  --duration ONE_MONTH \
  --periods 2 \
  --discount-percent 30 \
  --prefix holiday25 \
  --offer-tags holiday,winter-sale
```

### 4. Region-specific fixed price

The CLI always uses the currency from `--currency` (or `USD` default) with `--price`. For multi-region absolute pricing, use `--discount-percent` instead (scales per region) or hit the HTTP API with `regionalConfigs`.

---

## Troubleshooting

### `--discount-percent and --price are mutually exclusive`
Pick one: `--discount-percent` for percentage off (scales per region), `--price` for an absolute amount in one currency.

### `--mode PAY_AS_YOU_GO requires either --discount-percent or --price`
FREE_TRIAL is the only mode that doesn't need pricing input.

### `--periods must be between 1 and 52`
Google's recurrence count limit. Use a longer `--duration` if you need more than 52 billing cycles of discount.

### `Offer ID "..." must match /^[a-zA-Z0-9_-]+$/`
Offer IDs allow letters, digits, underscore, and hyphen only — no dots, spaces, or other characters. Max 63 chars.

### No offers created (`total: 0`)
Check your filters:
- `--product-ids` must match existing productIds exactly
- `--base-plan-ids` must match existing basePlanIds exactly
- `--plan-period` values must match a base plan's actual `billingPeriodDuration`

Run `GET /api/android-offers/package/:packageName` to inspect what's there.

### Authentication errors
```bash
# Verify GOOGLE_APPLICATION_CREDENTIALS is set and the file is readable
cat "$GOOGLE_APPLICATION_CREDENTIALS" | jq .client_email
```

The service account must have Monetization permission on the Play Console project.

---

## Testing Guidelines

### ⚠️ CRITICAL: Test Application ID Only

```bash
# ✅ CORRECT
npm run bulk-create-android-offers -- --package-name com.vtech.plus.inapp.test3

# ❌ NEVER use production or other apps
npm run bulk-create-android-offers -- --package-name com.vtech.plus            # Production!
npm run bulk-create-android-offers -- --package-name com.vtech.plus.uat        # UAT!
```

The CLI has a hard-coded safety check rejecting any package other than `com.vtech.plus.inapp.test3`.

### Recommended Test Scenarios

1. **Defaults** — `npm run bulk-create-android-offers -- --package-name com.vtech.plus.inapp.test3` (FREE_TRIAL, ONE_WEEK, new customers)
2. **`--plan-period`** — confirm the filter produces an offer only on matching base plans
3. **`--product-ids`** — narrow to a single product
4. **PAY_AS_YOU_GO with percentage** — verify the discount applies in every region
5. **PAY_AS_YOU_GO with absolute price** — verify currency conversion behavior in the Play Console
6. **`--developer-determined`** — verify the offer has no `targeting` block in the API response and is not auto-shown (must be attached by `subscriptionOfferToken` from the app)
7. **Duplicate run** — same `--offer-id` should fail cleanly with "already exists" and keep going
8. **Rollback** — iterate the rollback JSON through the DELETE endpoint

---

## Related Docs

- [PROMOTIONAL_OFFERS_GUIDE.md](./PROMOTIONAL_OFFERS_GUIDE.md) — iOS promotional offers (with offer codes)
- [INTRODUCTORY_OFFERS_GUIDE.md](./INTRODUCTORY_OFFERS_GUIDE.md) — iOS introductory offers (per-territory)
- [APP_MANAGEMENT_GUIDE.md](./APP_MANAGEMENT_GUIDE.md) — managing apps and subscriptions

---

## Summary

### Key Takeaways

✅ **Single offer resource** — Google doesn't split intro vs. promo; `targetNewCustomers` is the switch

✅ **Defaults are intro-style** — new-customer targeting is on by default; override with `--target-users-who-never-had-this-subscription` to narrow scope, or `--developer-determined --offer-tags <name>` to skip auto-targeting (CLI requires the tag, since a tagless dev-determined offer is unreachable)

✅ **Auto-generated offer IDs** — one offer ID is reused across every `(product, base plan)` pair

✅ **Filter by base-plan cadence** — `--plan-period P1M` or iOS aliases like `ONE_MONTH`

✅ **Percentage vs. absolute price** — `--discount-percent` scales per region; `--price` is single-currency

✅ **Rollback via the generated JSON** — iterate through the DELETE endpoint

### Quick Reference

```bash
# Defaults: 1-week free trial for new subscribers, every product × base plan
npm run bulk-create-android-offers -- --package-name com.vtech.plus.inapp.test3

# Monthly plans — 14-day trial
npm run bulk-create-android-offers -- --package-name com.vtech.plus.inapp.test3 --plan-period P1M --duration TWO_WEEKS

# Annual plans — 1-month trial
npm run bulk-create-android-offers -- --package-name com.vtech.plus.inapp.test3 --plan-period P1Y --duration ONE_MONTH

# First 3 months at 50% off
npm run bulk-create-android-offers -- --package-name com.vtech.plus.inapp.test3 \
  --mode PAY_AS_YOU_GO --duration ONE_MONTH --periods 3 --discount-percent 50

# Developer-determined promo (no auto-targeting; app looks up by tag at billing time)
npm run bulk-create-android-offers -- --package-name com.vtech.plus.inapp.test3 \
  --developer-determined --offer-tags spring25 --mode PAY_AS_YOU_GO --duration ONE_MONTH --periods 2 --discount-percent 25

# Narrow to specific products with custom prefix
npm run bulk-create-android-offers -- --package-name com.vtech.plus.inapp.test3 \
  --product-ids com.vtech.plus.monthly,com.vtech.plus.annual --prefix spring24
```

---

**Last Updated:** April 2026
