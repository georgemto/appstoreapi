# Promotional Offers Guide

Complete guide for creating and managing promotional offers for in-app subscriptions using the App Store Connect API.

## Table of Contents

1. [Overview](#overview)
2. [Prerequisites](#prerequisites)
3. [Quick Start](#quick-start)
4. [Individual Operations](#individual-operations)
5. [Bulk Operations](#bulk-operations)
6. [Multi-Territory Pricing](#multi-territory-pricing)
7. [Price Points](#price-points)
8. [API Endpoints](#api-endpoints)
9. [Offer Code Management](#offer-code-management)
10. [Common Use Cases](#common-use-cases)
11. [Troubleshooting](#troubleshooting)
12. [Testing Guidelines](#testing-guidelines)

---

## Overview

> ⚠️ **Free trial offers and `get-promotional-offers`:** App Store Connect models *promotional offers* (`subscriptionPromotionalOffers`) and *introductory offers* (`subscriptionIntroductoryOffers`) as two separate resources. Free trials configured as **introductory offers** will NOT appear in `npm run get-promotional-offers` — use `npm run get-introductory-offers <bundle-id>` for those. Free trials configured as promotional offers (with an `offerCode`) do appear here.

Promotional offers allow you to provide discounted subscription pricing to attract new subscribers or retain existing ones. This API provides:

- ✅ **Create** promotional offers for individual subscriptions
- ✅ **Bulk create** offers for all subscriptions in a subscription group
- ✅ **Group filtering** - create offers for specific groups only (exact match)
- ✅ **Wildcard support** - use `"*"` to create offers for ALL subscription groups
- ✅ **Auto-generate** unique offer codes or use custom codes
- ✅ **Bundle ID integration** - no need to look up subscription IDs manually
- ✅ **Multi-territory pricing** - automatic price tier conversion across territories from a single price point
- ✅ **All price tiers visible** - browse every Apple price tier (~800 per territory), not just the active ones
- ✅ **Rollback support** - undo bulk operations if needed
- ✅ **CRUD operations** - full create, read, update, delete functionality

### Key Features

| Feature | Description |
|---------|-------------|
| **Offer Codes** | Auto-generated or custom codes (3-25 uppercase alphanumeric characters) |
| **Duration** | THREE_DAYS, ONE_WEEK, TWO_WEEKS, ONE_MONTH, TWO_MONTHS, THREE_MONTHS, SIX_MONTHS, ONE_YEAR |
| **Offer Modes** | PAY_AS_YOU_GO, PAY_UP_FRONT, FREE_TRIAL |
| **Periods** | 1-12 billing periods |
| **Pricing** | Support for price points (required for paid offers) |
| **Bulk Creation** | Create offers for all subscriptions in a group at once |
| **Group Filtering** | Creates offers ONLY for subscriptions in the specified group |
| **Wildcard Support** | Use `"*"` as reference name to create for ALL groups |
| **Exact Match** | Reference name filtering uses exact match only (case-sensitive) |
| **Territories** | Target specific territories with `--territories` (comma-separated), or default to all |
| **Auto Price Tier Conversion** | Pass a single price point ID and it's converted to equivalent tiers for every target territory |

### Offer Modes and Pricing

| Offer Mode | Description | Price Point Required | Use Case |
|------------|-------------|---------------------|----------|
| **FREE_TRIAL** | Completely free for the specified duration | ❌ No | Attract new subscribers with risk-free trial |
| **PAY_AS_YOU_GO** | Discounted price per billing period | ✅ Yes | Incentivize existing or new subscribers with discounted rates |
| **PAY_UP_FRONT** | Discounted one-time payment for multiple periods | ✅ Yes | Offer bulk discounts for longer commitments |

**Important:**
- FREE_TRIAL offers are always $0 and don't need price points
- PAY_AS_YOU_GO and PAY_UP_FRONT require you to specify a price point ID
- Use `npm run get-price-points <subscription-id>` to see available price points

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

Test your configuration:

```bash
npm run debug-auth
```

### Get Subscription Information

Before creating offers, get the subscription information for your app:

```bash
# List all subscriptions and subscription groups
npm run get-subscription-product-ids com.vtech.plus.inapp.ios.test3
```

This will show:
- App name and ID
- **Subscription groups** with their **reference names** (needed for bulk creation)
- All subscriptions with product IDs and IDs

### Get Price Points (for Paid Offers)

If you're creating PAY_AS_YOU_GO or PAY_UP_FRONT offers, you'll need price point IDs:

```bash
# Get price points for a specific territory (recommended — fast)
npm run get-price-points <subscription-id> USA

# Show every one of the ~800 price tiers for the territory
npm run get-price-points <subscription-id> USA --verbose

# Get price points for ALL territories (slow — fetches thousands)
npm run get-price-points <subscription-id>
```

This returns **all available Apple price tiers**, not just the currently active ones. You can use any tier for a promotional offer — the active indicator (⭐) simply marks what the subscription is currently sold at.

Default output shows:
- Currently active price point(s) (marked ⭐)
- A sample of the first 10 available tiers
- Total count (e.g., `... and 789 more price points`)

Add `--verbose` to dump the full list.

Each entry includes:
- Price point ID (needed for creating paid offers)
- Customer price (what users pay)
- Proceeds (what you earn)
- Territory code
- `isActive` flag

> ⏱️ **Performance tip:** Always pass a territory. Fetching across all territories paginates through many thousands of tiers and can take minutes.

**Note:** FREE_TRIAL offers do not require price points as they're always $0.

---

## Quick Start

### 1. Create a Single Promotional Offer

```bash
# Basic creation (auto-generated offer code)
npm run create-promotional-offer <subscription-id>

# With custom settings
npm run create-promotional-offer abc123-def456 \
  --name "Spring Sale" \
  --duration ONE_MONTH \
  --mode PAY_AS_YOU_GO \
  --periods 3
```

### 2. Bulk Create for a Subscription Group

```bash
# Create offers for all subscriptions in "Group 1" ONLY
npm run bulk-create-promotional-offers -- com.vtech.plus.inapp.ios.test3 "Group 1" \
  --name "Spring Sale 2024" \
  --duration TWO_MONTHS \
  --periods 2

# Create offers for ALL subscription groups (use "*")
npm run bulk-create-promotional-offers -- com.vtech.plus.inapp.ios.test3 "*" \
  --name "Holiday Sale" \
  --duration ONE_MONTH \
  --periods 3
```

### 3. List All Promotional Offers

```bash
# Get all offers for an app
npm run get-promotional-offers com.vtech.plus.inapp.ios.test3

# Filter by reference name
npm run get-promotional-offers com.vtech.plus.inapp.ios.test3 --reference "Group 1"
```

### 4. Delete an Offer

```bash
# Delete single offer
npm run delete-promotional-offers <offer-id>

# Rollback bulk creation
npm run rollback-promotional-offers rollback-Group-1-2025-01-10T12-30-00.json
```

---

## Individual Operations

### Create a Promotional Offer

#### Command Line

```bash
npm run create-promotional-offer <subscription-id> [options]
```

**Options:**
- `--name <name>` - Offer name (default: "Special Promotional Offer")
- `--code <code>` - Custom offer code (3-25 uppercase alphanumeric)
- `--prefix <prefix>` - Prefix for auto-generated code
- `--duration <dur>` - Duration (default: ONE_MONTH)
- `--mode <mode>` - Offer mode (default: FREE_TRIAL)
- `--periods <num>` - Number of periods (1-12, default: 3)
- `--price-point <id>` - Price point ID (required for PAY_AS_YOU_GO and PAY_UP_FRONT)
- `--territories <codes>` - Comma-separated territory codes (e.g., `USA` or `USA,GBR,CAN`). If omitted, the offer is created for all territories where the subscription is priced.
- `--list-price-points` - List ALL available price points (active + every Apple tier) for the subscription

**Examples:**

```bash
# List every available price point (active tiers marked with ⭐)
npm run create-promotional-offer abc123-def456-ghi789 --list-price-points

# Free trial offer (no price point needed)
npm run create-promotional-offer abc123-def456-ghi789 \
  --name "Free Trial" \
  --mode FREE_TRIAL \
  --periods 1 \
  --duration ONE_WEEK

# Discounted offer for USA only
npm run create-promotional-offer abc123-def456-ghi789 \
  --name "50% Off" \
  --mode PAY_AS_YOU_GO \
  --price-point "usa-price-point-id" \
  --territories USA \
  --periods 3

# Multi-territory offer — pass ONE price point, system auto-converts to each territory's equivalent tier
npm run create-promotional-offer abc123-def456-ghi789 \
  --name "Global 50% Off" \
  --mode PAY_AS_YOU_GO \
  --price-point "usa-price-point-id" \
  --territories USA,GBR,CAN,AUS,JPN \
  --periods 3

# Custom offer code
npm run create-promotional-offer abc123-def456-ghi789 \
  --name "Summer Sale" \
  --code SUMMER2024 \
  --mode FREE_TRIAL

# With custom prefix
npm run create-promotional-offer abc123-def456-ghi789 \
  --name "Black Friday" \
  --prefix BLACKFRI \
  --mode FREE_TRIAL
```

#### API Endpoint

```http
POST /api/promotional-offers
Content-Type: application/json

{
  "subscriptionId": "abc123-def456-ghi789",
  "name": "Spring Sale",
  "offerCode": "SPRING2024",
  "duration": "ONE_MONTH",
  "offerMode": "PAY_AS_YOU_GO",
  "numberOfPeriods": 3,
  "pricePoints": "usa-price-point-id",
  "territories": ["USA", "GBR", "CAN"]
}
```

**Optional pricing fields:**
- `pricePoints` — string (single price point ID, auto-converted to each territory) **or** object mapping territory codes to price point IDs (with optional `default` key). Required for `PAY_AS_YOU_GO` and `PAY_UP_FRONT`.
- `territories` — array of territory codes. If omitted, the offer covers every territory where the subscription has an active price.

**Response:**

```json
{
  "success": true,
  "data": {
    "id": "xyz789-uvw456-rst123",
    "type": "subscriptionPromotionalOffers",
    "attributes": {
      "name": "Spring Sale",
      "offerCode": "SPRING2024",
      "duration": "ONE_MONTH",
      "offerMode": "PAY_AS_YOU_GO",
      "numberOfPeriods": 3
    }
  },
  "message": "Promotional offer created successfully"
}
```

### Get Promotional Offer

#### API Endpoint

```http
GET /api/promotional-offers/:id
```

**Response:**

```json
{
  "success": true,
  "data": {
    "id": "xyz789",
    "type": "subscriptionPromotionalOffers",
    "attributes": {
      "name": "Spring Sale",
      "offerCode": "SPRING2024",
      "duration": "ONE_MONTH",
      "offerMode": "PAY_AS_YOU_GO",
      "numberOfPeriods": 3
    }
  }
}
```

### Update Promotional Offer

#### API Endpoint

```http
PATCH /api/promotional-offers/:id
Content-Type: application/json

{
  "name": "Updated Spring Sale"
}
```

**Note:** Only the `name` field can be updated. Offer codes cannot be changed after creation.

### Delete Promotional Offer

#### Command Line

```bash
npm run delete-promotional-offers <offer-id>

# Dry run (see what would be deleted)
npm run delete-promotional-offers <offer-id> --dry-run
```

#### API Endpoint

```http
DELETE /api/promotional-offers/:id
```

---

## Bulk Operations

### Bulk Create Promotional Offers

Create promotional offers for **all subscriptions** in subscription groups that match a given reference name, or for ALL groups using the wildcard `"*"`.

#### Command Line

```bash
npm run bulk-create-promotional-offers -- <bundle-id> <reference-name> [options]
```

**Arguments:**
- `bundle-id` - App bundle identifier (must be `com.vtech.plus.inapp.ios.test3` for testing)
- `reference-name` - Subscription group reference name (**exact match required**), or `"*"` for ALL groups
  - Use exact group name (case-sensitive): `"Group 1"`, `"DN GroupA"`
  - Use `"*"` to create offers for ALL subscription groups in the app

**Options:**
- `--name <name>` - Base offer name (each subscription gets unique name with counter)
- `--prefix <prefix>` - Offer code prefix
- `--duration <dur>` - Duration
- `--mode <mode>` - Offer mode
- `--periods <num>` - Number of periods
- `--match <substring>` - Only include subscriptions whose `name` contains this substring (case-insensitive). Useful for groups that mix cadences or tiers by naming.
- `--plan-period <list>` - Comma-separated list of `subscriptionPeriod` values (`THREE_DAYS, ONE_WEEK, TWO_WEEKS, ONE_MONTH, TWO_MONTHS, THREE_MONTHS, SIX_MONTHS, ONE_YEAR`). Filters by the authoritative billing cadence — more reliable than `--match` when subscriptions aren't named by cadence.

**Examples:**

```bash
# Create for "Group 1" subscriptions ONLY
npm run bulk-create-promotional-offers -- com.vtech.plus.inapp.ios.test3 "Group 1" \
  --name "Spring Sale"

# Create for ALL subscription groups (wildcard)
npm run bulk-create-promotional-offers -- com.vtech.plus.inapp.ios.test3 "*" \
  --name "Holiday Sale"

# Create free trial offers for specific group
npm run bulk-create-promotional-offers -- com.vtech.plus.inapp.ios.test3 "DN GroupA" \
  --name "Free Trial" \
  --mode FREE_TRIAL \
  --periods 1 \
  --duration ONE_WEEK

# Only monthly plans in the group (filter by subscriptionPeriod — independent of naming)
npm run bulk-create-promotional-offers -- com.vtech.plus.inapp.ios.test3 "Group 1" \
  --plan-period ONE_MONTH \
  --name "Monthly Plan Promo"

# Annual + 6-month plans only
npm run bulk-create-promotional-offers -- com.vtech.plus.inapp.ios.test3 "Group 1" \
  --plan-period ONE_YEAR,SIX_MONTHS \
  --name "Long Plan Promo"

# Combine name filter + plan period — e.g. monthly Pro plans only
npm run bulk-create-promotional-offers -- com.vtech.plus.inapp.ios.test3 "Group 1" \
  --plan-period ONE_MONTH \
  --match "Pro" \
  --name "Monthly Pro Promo"
```

#### How It Works

1. Finds subscription groups matching the reference name (or ALL groups if using `"*"`)
2. Gets all subscriptions belonging to the matched groups
3. **Filters** subscriptions to ONLY those in the matching group(s)
4. Creates a promotional offer for each filtered subscription
5. Each offer gets a unique code: `PREFIX1`, `PREFIX2`, etc.
6. Saves results and rollback log to files

**Important:** The system now properly filters subscriptions by group. This means:
- Using `"Group 1"` creates offers ONLY for subscriptions in "Group 1"
- Using `"Group 10"` creates offers ONLY for subscriptions in "Group 10" 
- Using `"*"` creates offers for subscriptions in ALL groups

**Output Files:**
- `bulk-promo-offers-<reference>-<timestamp>.json` - Full results
- `rollback-<reference>-<timestamp>.json` - For cleanup

#### API Endpoint

```http
POST /api/promotional-offers/bulk
Content-Type: application/json

{
  "bundleId": "com.vtech.plus.inapp.ios.test3",
  "referenceName": "Group 1",
  "offerTemplate": {
    "name": "Spring Sale 2024",
    "offerCodePrefix": "SPRING2024",
    "duration": "ONE_MONTH",
    "offerMode": "PAY_AS_YOU_GO",
    "numberOfPeriods": 3,
    "nameMatch": "Pro",
    "planPeriodFilter": ["ONE_MONTH"]
  }
}
```

`nameMatch` and `planPeriodFilter` are optional — both narrow the subscription list after the group filter. When supplied together, a subscription must satisfy both.

**Response:**

```json
{
  "success": true,
  "data": {
    "created": [
      {
        "subscriptionId": "sub-001",
        "subscriptionName": "Monthly Premium",
        "productId": "com.example.monthly",
        "offerId": "offer-001",
        "offerCode": "SPRING20241-A1B2"
      }
    ],
    "failed": [],
    "summary": {
      "bundleId": "com.vtech.plus.inapp.ios.test3",
      "referenceName": "Group 1",
      "total": 5,
      "succeeded": 5,
      "failed": 0
    }
  }
}
```

### Rollback Bulk Creation

If you need to undo a bulk creation, use the rollback log file:

```bash
npm run rollback-promotional-offers rollback-Group-1-2025-01-10T12-30-00.json

# Dry run
npm run rollback-promotional-offers rollback-Group-1-2025-01-10T12-30-00.json --dry-run
```

**Important Notes:**
- Apple's API does **not** support transaction rollback
- Each offer is deleted individually
- If rollback fails partway, some offers may still be deleted
- Always use `--dry-run` first to verify

---

## Group Filtering

### How Group Filtering Works

The bulk creation feature now properly filters subscriptions by their subscription group. This ensures that offers are created **only** for subscriptions belonging to the specified group.

**Example:**
- Your app has "Group 1" (9 subscriptions) and "Group 10" (5 subscriptions)
- Running bulk create with `"Group 1"` creates exactly **9 offers** (not 14)
- Running bulk create with `"Group 10"` creates exactly **5 offers**
- The filter uses **exact string matching** (case-sensitive)

### Wildcard for All Groups

Use `"*"` as the reference name to create offers for **ALL subscription groups**:

```bash
npm run bulk-create-promotional-offers -- com.vtech.plus.inapp.ios.test3 "*" \
  --name "App-Wide Sale"
```

**When to use wildcard:**
- App-wide promotions (e.g., holiday sales)
- Launching a new feature available to all tiers
- Testing across all subscription types

**Warning:** Using `"*"` can create a large number of offers if you have many subscription groups and subscriptions. Double-check the bundle ID and scope before running — the script executes immediately, without confirmation.

### Group Membership

Subscription-to-group relationships are determined by:
1. Fetching all subscription groups from Apple's API
2. Querying each group's subscriptions endpoint
3. Building a mapping of subscription ID → group ID
4. Filtering subscriptions during bulk creation

This ensures accurate, reliable group filtering that respects Apple's subscription group structure.

---

## Multi-Territory Pricing

Promotional offers can be created for one territory, several territories, or all of the subscription's priced territories. When you provide a **single** `--price-point`, the system automatically converts it to the equivalent tier in every target territory — you don't have to look up a price point per country.

### How Automatic Price Tier Conversion Works

Apple's price point IDs are base64-encoded JSON with three fields:

```json
{ "s": "6746919022", "t": "USA", "p": "10010" }
```

- `s` — subscription ID
- `t` — territory code
- `p` — Apple price tier (e.g., `10010` ≈ $0.99, £0.99, CAD $0.99, …)

Each tier represents an **equivalent price** in every country. When you pass a USA price point together with `--territories USA,GBR,CAN`, the system:

1. Decodes the price point ID
2. Keeps the subscription ID (`s`) and tier (`p`)
3. Replaces `t` with each target territory
4. Re-encodes the ID for each territory

Result: one price point input, globally consistent pricing across every territory you list.

### Behavior by Territories Input

| `--territories` value | Result |
|---|---|
| *(omitted)* | Offer priced in **every territory** where the subscription has an active price |
| `USA` | Offer priced in USA only |
| `USA,GBR,CAN,AUS` | Offer priced in each listed territory, tier auto-converted from the supplied `--price-point` |

### Advanced: Territory-Specific Price Points

The service API also accepts a `pricePoints` object to pin a different tier per territory (useful if you want, say, a deeper discount for a specific region):

```json
{
  "pricePoints": {
    "USA": "usa-tier-10010-id",
    "GBR": "gbr-tier-10005-id",
    "default": "usa-tier-10010-id"
  }
}
```

Territories without an explicit mapping use the `default` entry, auto-converted to that territory's tier. The CLI's `--price-point` flag only accepts a single string ID; the object form is available via the HTTP API.

---

## Price Points

### Active vs. Available Tiers

The App Store distinguishes between:

- **Active price points** — what the subscription is currently sold at.
- **All available tiers** — Apple's full price-tier catalog (~800 tiers per territory).

Promotional offers can use **any** tier, not just the active one. The `get-price-points` and `create-promotional-offer --list-price-points` commands return the full set, with active tiers marked ⭐.

### Fetching Price Points

```bash
# Fast: fetch one territory (~800 tiers, 5–10s)
npm run get-price-points <subscription-id> USA

# Show every tier for the territory
npm run get-price-points <subscription-id> USA --verbose

# Slow: all territories (minutes) — prefer specifying a territory
npm run get-price-points <subscription-id>
```

Default output condenses results to the active tier(s) plus a sample of 10 available tiers. Add `--verbose` when you need the full list.

During fetches, progress is reported per page:

```
⏳ Fetching pages from Apple API...
   Fetching page 2... (200 price points so far)
   Fetching page 3... (400 price points so far)
```

### Picking a Price Point

For a paid promotional offer:

1. Run `npm run get-price-points <subscription-id> USA` (use `--verbose` if the tier you want isn't in the default sample).
2. Copy the `ID` of the tier whose customer price matches the promo price you want.
3. Pass it as `--price-point <id>` to `create-promotional-offer`, along with `--territories` (or leave it off to cover all territories — the tier auto-converts).

---

## API Endpoints

### Summary

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/promotional-offers` | Create promotional offer |
| GET | `/api/promotional-offers/:id` | Get promotional offer by ID |
| PATCH | `/api/promotional-offers/:id` | Update promotional offer |
| DELETE | `/api/promotional-offers/:id` | Delete promotional offer |
| GET | `/api/promotional-offers/:id/prices` | Get offer prices |
| GET | `/api/promotional-offers/bundle/:bundleId` | Get offers by bundle ID |
| POST | `/api/promotional-offers/bulk` | Bulk create offers |
| GET | `/api/subscriptions/:id/promotional-offers` | Get offers for subscription |
| GET | `/api/subscriptions/:id/price-points` | Get price points for subscription |

### Bundle ID Operations

#### Get Promotional Offers by Bundle ID

```http
GET /api/promotional-offers/bundle/:bundleId?referenceName=Group%201
```

**Query Parameters:**
- `referenceName` - Filter by subscription group reference name (optional)
- `limit` - Maximum subscriptions to check (default: 200)

**Response:**

```json
{
  "success": true,
  "data": {
    "bundleId": "com.vtech.plus.inapp.ios.test3",
    "appName": "VTech Plus Test App",
    "referenceName": "Group 1",
    "totalOffers": 10,
    "subscriptions": [
      {
        "subscription": {
          "id": "sub-001",
          "name": "Monthly Premium",
          "productId": "com.example.monthly"
        },
        "offers": [
          {
            "id": "offer-001",
            "name": "Spring Sale",
            "offerCode": "SPRING2024",
            "duration": "ONE_MONTH",
            "offerMode": "PAY_AS_YOU_GO",
            "numberOfPeriods": 3
          }
        ]
      }
    ]
  }
}
```

### Get Subscription Price Points

#### API Endpoint

```http
GET /api/subscriptions/:id/price-points?territory=USA
```

**Query Parameters:**
- `territory` - Filter by territory code (optional, e.g., USA, GBR, CAN)

**Response:**

```json
{
  "success": true,
  "data": [
    {
      "id": "price-point-id-1",
      "territory": "USA",
      "customerPrice": "4.99",
      "proceeds": "3.50",
      "proceedsYear2": "3.50",
      "type": "subscriptionPricePoints",
      "isActive": true
    },
    {
      "id": "price-point-id-2",
      "territory": "USA",
      "customerPrice": "9.99",
      "proceeds": "7.00",
      "proceedsYear2": "7.00",
      "type": "subscriptionPricePoints",
      "isActive": false
    }
  ],
  "count": 800,
  "territory": "USA"
}
```

**Usage:**
- Use the `id` field when creating PAY_AS_YOU_GO or PAY_UP_FRONT promotional offers
- The endpoint returns **all** available Apple price tiers for the territory, not just the currently active price(s)
- `isActive: true` marks the tier the subscription is currently sold at
- `customerPrice` shows what users will pay; `proceeds` / `proceedsYear2` show what you earn after Apple's commission (year 1 vs. auto-renewal)
- Any tier can be used in a promotional offer — you are not limited to active tiers
- FREE_TRIAL offers don't need price points

---

## Offer Code Management

### Auto-Generation

If you don't provide an offer code, one will be auto-generated:

**Format:** `PREFIX-TIMESTAMP-RANDOM`

**Example:** `SPRING-1A2B3C-D4E5`

### Custom Codes

You can provide your own offer code:

**Requirements:**
- 3-25 characters
- Uppercase letters and numbers only
- Underscores and hyphens allowed
- Must be unique per subscription

### Best Practices

1. **Use descriptive prefixes** - Makes codes recognizable
2. **Keep codes short** - Easier for users to enter
3. **Include campaign info** - E.g., `SUMMER2024`, `BLACK FRI`
4. **Sequential for bulk** - E.g., `SPRING1`, `SPRING2`

---

## Common Use Cases

### 1. Free Trial for All Subscriptions

```bash
npm run bulk-create-promotional-offers -- com.vtech.plus.inapp.ios.test3 "Group 1" \
  --name "7-Day Free Trial" \
  --mode FREE_TRIAL \
  --periods 1 \
  --duration ONE_WEEK \
  --prefix FREETRIAL
```

### 2. Seasonal Sale (with Price Point)

```bash
# First, get a subscription ID and check price points
npm run get-subscription-product-ids com.vtech.plus.inapp.ios.test3
npm run get-price-points <subscription-id> USA

# Create discounted offer with specific price point
npm run create-promotional-offer <subscription-id> \
  --name "Spring Sale 2024" \
  --mode PAY_AS_YOU_GO \
  --periods 3 \
  --duration ONE_MONTH \
  --price-point "price-point-id-here" \
  --prefix SPRING24
```

**Note:** PAY_AS_YOU_GO and PAY_UP_FRONT modes require `--price-point` parameter.

### 3. Single Subscription Offer with Custom Price

```bash
# Get subscription ID and price points first
npm run get-subscription-product-ids com.vtech.plus.inapp.ios.test3
npm run get-price-points <subscription-id>

# Create offer with specific price point
npm run create-promotional-offer <subscription-id> \
  --name "VIP Discount" \
  --code VIP2024 \
  --duration THREE_MONTHS \
  --mode PAY_AS_YOU_GO \
  --price-point "price-point-id-here" \
  --periods 2
```

---

## Troubleshooting

### Common Errors

#### 1. Duplicate Offer Name

**Error:** `A promotional offer with the name "X" already exists for this subscription`

**Solution:** Each subscription can only have one promotional offer with a given name. Either:
- Use a different name
- Delete the existing offer first
- Update the existing offer instead

#### 2. Invalid Reference Name

**Error:** `No subscription groups found with reference name "X"`

**Solution:** Reference name must match **exactly** (case-sensitive):
- Run `npm run get-subscription-product-ids com.vtech.plus.inapp.ios.test3` to see available reference names
- Copy the exact reference name from the output
- Use quotes if the name contains spaces: `"Group 1"`
- Use `"*"` to create offers for ALL groups (if that's your intention)

#### 3. Subscription Not Found

**Error:** `Subscription with ID "X" not found`

**Solution:**
- Verify the subscription ID is correct
- Run `npm run get-subscription-product-ids` to get valid subscription IDs
- Ensure you're using the subscription ID (UUID), not the product ID

#### 4. Invalid Offer Code

**Error:** `Offer code can only contain uppercase letters, numbers, underscores, and hyphens`

**Solution:**
- Offer codes must be uppercase: `SPRING2024` not `spring2024`
- No spaces or special characters except `_` and `-`
- Length: 3-25 characters

#### 5. Authentication Error

**Error:** `Authentication Error: Please check your App Store Connect API credentials`

**Solution:**
- Verify `.env` file contains correct credentials
- Run `npm run debug-auth` to test authentication
- Ensure private key file exists and is readable

### Debugging Tips

1. **Use dry-run mode** - Test deletions without actually deleting:
   ```bash
   npm run delete-promotional-offers <id> --dry-run
   ```

2. **Check offer details** - Get full offer information:
   ```http
   GET /api/promotional-offers/:id
   ```

3. **List existing offers** - See what offers already exist:
   ```bash
   npm run get-promotional-offers com.vtech.plus.inapp.ios.test3
   ```

4. **Review logs** - Check `logs/` directory for detailed error information

---

## Testing Guidelines

### ⚠️ CRITICAL: Test Bundle ID Only

**ALWAYS use `com.vtech.plus.inapp.ios.test3` for testing**

```bash
# ✅ CORRECT
npm run bulk-create-promotional-offers -- com.vtech.plus.inapp.ios.test3 "Group 1"

# ❌ NEVER use these for testing
npm run bulk-create-promotional-offers -- com.vtech.plus "Group 1"  # Production!
npm run bulk-create-promotional-offers -- com.vtech.plus.uat "Group 1"  # UAT!
```

### Safety Features

The bulk creation script includes a **hard-coded safety check** that prevents accidental use with production bundle IDs.

### Test Scenarios

Based on `com.vtech.plus.inapp.ios.test3` which has:
- 28 subscription groups
- 129 total subscriptions
- Various reference names (e.g., "Group 1", "DN GroupA", "Dang Test Group")

**Recommended Tests:**

1. **Single group** - Create offers for "Group 1" only (9 subscriptions)
2. **Group filtering** - Verify "Group 1" doesn't create offers for "Group 10"
3. **Wildcard** - Test `"*"` to create for all groups (creates 129 offers)
4. **Multiple subscriptions** - Test with groups that have many subscriptions
5. **Partial failures** - Intentionally create duplicate names to test error handling
6. **Rollback** - Test the rollback functionality
7. **Individual operations** - Test create, read, update, delete on single offers

---

## Additional Resources

### Related Commands

```bash
# List all apps
npm run get-all-apps

# Get subscription information
npm run get-subscription-product-ids <bundle-id>

# Authentication test
npm run debug-auth

# Start API server
npm start

# Run tests
npm test
```

### API Documentation

- [API Reference](./API_REFERENCE.md) - Complete API endpoint documentation
- [Authentication Setup](./AUTHENTICATION_SETUP.md) - Configure App Store Connect credentials
- [App Management Guide](./APP_MANAGEMENT_GUIDE.md) - Manage apps and subscriptions

### Support

For issues or questions:
- Check the [Troubleshooting](#troubleshooting) section
- Review server logs in `logs/` directory
- Test authentication with `npm run debug-auth`
- Verify bundle ID and reference names with `npm run get-subscription-product-ids`

---

## Summary

### Key Takeaways

✅ **Bundle ID Integration** - Use bundle ID directly, no need to look up subscription IDs

✅ **Bulk Operations** - Create offers for all subscriptions in a group at once

✅ **Group Filtering** - Creates offers ONLY for subscriptions in the specified group

✅ **Wildcard Support** - Use `"*"` to create offers for ALL subscription groups

✅ **Exact Match** - Reference name filtering requires exact match (case-sensitive)

✅ **Multi-Territory with Auto-Conversion** - Pass a single `--price-point` plus `--territories`; the equivalent Apple tier is used in each country

✅ **All Price Tiers Available** - `--list-price-points` / `get-price-points` return every Apple tier (~800 per territory), not just the active one

✅ **Subscription Filters** - `--plan-period` (by `subscriptionPeriod`) and `--match` (by name substring) narrow which subscriptions in a group receive the offer; combine for cadence + tier targeting

✅ **Auto-Generated Codes** - Codes are generated automatically if not provided

✅ **Rollback Support** - Bulk operations create rollback logs for cleanup

✅ **Safety First** - Always use test bundle ID `com.vtech.plus.inapp.ios.test3`

### Quick Reference

```bash
# Get subscription info
npm run get-subscription-product-ids com.vtech.plus.inapp.ios.test3

# Bulk create for specific group
npm run bulk-create-promotional-offers -- com.vtech.plus.inapp.ios.test3 "Group 1" --name "Sale"

# Bulk create for ALL groups
npm run bulk-create-promotional-offers -- com.vtech.plus.inapp.ios.test3 "*" --name "Holiday Sale"

# List available price points for a territory
npm run get-price-points <subscription-id> USA

# Create a multi-territory promotional offer (auto-converts price tier)
npm run create-promotional-offer <subscription-id> \
  --name "Global 50% Off" \
  --mode PAY_AS_YOU_GO \
  --price-point "usa-price-point-id" \
  --territories USA,GBR,CAN,AUS

# List offers
npm run get-promotional-offers com.vtech.plus.inapp.ios.test3

# Rollback
npm run rollback-promotional-offers rollback-*.json
```

### Related Docs

- [MULTI_TERRITORY_PRICING.md](./MULTI_TERRITORY_PRICING.md) — deep dive on Apple's price tier system and auto-conversion
- [PRICE_POINTS_ENHANCEMENT.md](./PRICE_POINTS_ENHANCEMENT.md) — how the "all tiers" fetch works under the hood
- [CHANGELOG_PRICE_POINTS_UX.md](./CHANGELOG_PRICE_POINTS_UX.md) — `get-price-points` progress + `--verbose` behavior

---

**Last Updated:** April 2026
