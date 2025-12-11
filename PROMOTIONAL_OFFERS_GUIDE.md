# Promotional Offers Guide

Complete guide for creating and managing promotional offers for in-app subscriptions using the App Store Connect API.

## Table of Contents

1. [Overview](#overview)
2. [Prerequisites](#prerequisites)
3. [Quick Start](#quick-start)
4. [Individual Operations](#individual-operations)
5. [Bulk Operations](#bulk-operations)
6. [API Endpoints](#api-endpoints)
7. [Offer Code Management](#offer-code-management)
8. [Common Use Cases](#common-use-cases)
9. [Troubleshooting](#troubleshooting)
10. [Testing Guidelines](#testing-guidelines)

---

## Overview

Promotional offers allow you to provide discounted subscription pricing to attract new subscribers or retain existing ones. This API provides:

- ✅ **Create** promotional offers for individual subscriptions
- ✅ **Bulk create** offers for all subscriptions in a subscription group
- ✅ **Group filtering** - create offers for specific groups only (exact match)
- ✅ **Wildcard support** - use `"*"` to create offers for ALL subscription groups
- ✅ **Auto-generate** unique offer codes or use custom codes
- ✅ **Bundle ID integration** - no need to look up subscription IDs manually
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
npm run get-product-ids com.vtech.plus.inapp.ios.test3
```

This will show:
- App name and ID
- **Subscription groups** with their **reference names** (needed for bulk creation)
- All subscriptions with product IDs and IDs

### Get Price Points (for Paid Offers)

If you're creating PAY_AS_YOU_GO or PAY_UP_FRONT offers, you'll need price point IDs:

```bash
# Get all price points for a subscription
npm run get-price-points <subscription-id>

# Get price points for a specific territory
npm run get-price-points <subscription-id> USA
```

This will show:
- Price point IDs (needed for creating paid offers)
- Customer price (what users pay)
- Proceeds (what you earn)
- Territory codes

**Note:** FREE_TRIAL offers do not require price points as they're always $0.

---

## Quick Start

### 1. Create a Single Promotional Offer

```bash
# Basic creation (auto-generated offer code)
npm run create-promo-offer <subscription-id>

# With custom settings
npm run create-promo-offer abc123-def456 \
  --name "Spring Sale" \
  --duration ONE_MONTH \
  --mode PAY_AS_YOU_GO \
  --periods 3
```

### 2. Bulk Create for a Subscription Group

```bash
# Create offers for all subscriptions in "Group 1" ONLY
npm run bulk-create-promo -- com.vtech.plus.inapp.ios.test3 "Group 1" \
  --name "Spring Sale 2024" \
  --duration TWO_MONTHS \
  --periods 2

# Create offers for ALL subscription groups (use "*")
npm run bulk-create-promo -- com.vtech.plus.inapp.ios.test3 "*" \
  --name "Holiday Sale" \
  --duration ONE_MONTH \
  --periods 3
```

### 3. List All Promotional Offers

```bash
# Get all offers for an app
npm run get-promo-offers com.vtech.plus.inapp.ios.test3

# Filter by reference name
npm run get-promo-offers com.vtech.plus.inapp.ios.test3 --reference "Group 1"
```

### 4. Delete an Offer

```bash
# Delete single offer
npm run delete-promo-offer <offer-id>

# Rollback bulk creation
npm run rollback-promo-offers rollback-Group-1-2025-01-10T12-30-00.json
```

---

## Individual Operations

### Create a Promotional Offer

#### Command Line

```bash
npm run create-promo-offer <subscription-id> [options]
```

**Options:**
- `--name <name>` - Offer name (default: "Special Promotional Offer")
- `--code <code>` - Custom offer code (3-25 uppercase alphanumeric)
- `--prefix <prefix>` - Prefix for auto-generated code
- `--duration <dur>` - Duration (default: ONE_MONTH)
- `--mode <mode>` - Offer mode (default: FREE_TRIAL)
- `--periods <num>` - Number of periods (1-12, default: 3)
- `--price-point <id>` - Price point ID (required for PAY_AS_YOU_GO and PAY_UP_FRONT)
- `--list-price-points` - List available price points for the subscription

**Examples:**

```bash
# List available price points first
npm run create-promo-offer abc123-def456-ghi789 --list-price-points

# Free trial offer (no price point needed)
npm run create-promo-offer abc123-def456-ghi789 \
  --name "Free Trial" \
  --mode FREE_TRIAL \
  --periods 1 \
  --duration ONE_WEEK

# Discounted offer with specific price point
npm run create-promo-offer abc123-def456-ghi789 \
  --name "50% Off" \
  --mode PAY_AS_YOU_GO \
  --price-point "price-point-id-here" \
  --periods 3

# Custom offer code
npm run create-promo-offer abc123-def456-ghi789 \
  --name "Summer Sale" \
  --code SUMMER2024 \
  --mode FREE_TRIAL

# With custom prefix
npm run create-promo-offer abc123-def456-ghi789 \
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
  "numberOfPeriods": 3
}
```

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
npm run delete-promo-offer <offer-id>

# Skip confirmation
npm run delete-promo-offer <offer-id> --yes

# Dry run (see what would be deleted)
npm run delete-promo-offer <offer-id> --dry-run
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
npm run bulk-create-promo -- <bundle-id> <reference-name> [options]
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
- `--yes, -y` - Skip confirmation prompt

**Examples:**

```bash
# Create for "Group 1" subscriptions ONLY
npm run bulk-create-promo -- com.vtech.plus.inapp.ios.test3 "Group 1" \
  --name "Spring Sale"

# Create for ALL subscription groups (wildcard)
npm run bulk-create-promo -- com.vtech.plus.inapp.ios.test3 "*" \
  --name "Holiday Sale"

# Create free trial offers for specific group
npm run bulk-create-promo -- com.vtech.plus.inapp.ios.test3 "DN GroupA" \
  --name "Free Trial" \
  --mode FREE_TRIAL \
  --periods 1 \
  --duration ONE_WEEK

# Skip confirmation
npm run bulk-create-promo -- com.vtech.plus.inapp.ios.test3 "Group 2" --yes
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
    "numberOfPeriods": 3
  }
}
```

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
npm run rollback-promo-offers rollback-Group-1-2025-01-10T12-30-00.json

# Skip confirmation
npm run rollback-promo-offers rollback-Group-1-2025-01-10T12-30-00.json --yes

# Dry run
npm run rollback-promo-offers rollback-Group-1-2025-01-10T12-30-00.json --dry-run
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
npm run bulk-create-promo -- com.vtech.plus.inapp.ios.test3 "*" \
  --name "App-Wide Sale"
```

**When to use wildcard:**
- App-wide promotions (e.g., holiday sales)
- Launching a new feature available to all tiers
- Testing across all subscription types

**Warning:** Using `"*"` can create a large number of offers if you have many subscription groups and subscriptions. Always review the confirmation prompt carefully.

### Group Membership

Subscription-to-group relationships are determined by:
1. Fetching all subscription groups from Apple's API
2. Querying each group's subscriptions endpoint
3. Building a mapping of subscription ID → group ID
4. Filtering subscriptions during bulk creation

This ensures accurate, reliable group filtering that respects Apple's subscription group structure.

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
      "customerPrice": "$4.99",
      "proceeds": "$3.50",
      "type": "subscriptionPricePoints"
    },
    {
      "id": "price-point-id-2",
      "territory": "USA",
      "customerPrice": "$9.99",
      "proceeds": "$7.00",
      "type": "subscriptionPricePoints"
    }
  ],
  "count": 2,
  "territory": "USA"
}
```

**Usage:**
- Use the `id` field when creating PAY_AS_YOU_GO or PAY_UP_FRONT promotional offers
- `customerPrice` shows what users will pay
- `proceeds` shows what you'll earn after Apple's commission
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
npm run bulk-create-promo -- com.vtech.plus.inapp.ios.test3 "Group 1" \
  --name "7-Day Free Trial" \
  --mode FREE_TRIAL \
  --periods 1 \
  --duration ONE_WEEK \
  --prefix FREETRIAL
```

### 2. Seasonal Sale (with Price Point)

```bash
# First, get a subscription ID and check price points
npm run get-product-ids com.vtech.plus.inapp.ios.test3
npm run get-price-points <subscription-id> USA

# Create discounted offer with specific price point
npm run create-promo-offer <subscription-id> \
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
npm run get-product-ids com.vtech.plus.inapp.ios.test3
npm run get-price-points <subscription-id>

# Create offer with specific price point
npm run create-promo-offer <subscription-id> \
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
- Run `npm run get-product-ids com.vtech.plus.inapp.ios.test3` to see available reference names
- Copy the exact reference name from the output
- Use quotes if the name contains spaces: `"Group 1"`
- Use `"*"` to create offers for ALL groups (if that's your intention)

#### 3. Subscription Not Found

**Error:** `Subscription with ID "X" not found`

**Solution:**
- Verify the subscription ID is correct
- Run `npm run get-product-ids` to get valid subscription IDs
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
   npm run delete-promo-offer <id> --dry-run
   ```

2. **Check offer details** - Get full offer information:
   ```http
   GET /api/promotional-offers/:id
   ```

3. **List existing offers** - See what offers already exist:
   ```bash
   npm run get-promo-offers com.vtech.plus.inapp.ios.test3
   ```

4. **Review logs** - Check `logs/` directory for detailed error information

---

## Testing Guidelines

### ⚠️ CRITICAL: Test Bundle ID Only

**ALWAYS use `com.vtech.plus.inapp.ios.test3` for testing**

```bash
# ✅ CORRECT
npm run bulk-create-promo -- com.vtech.plus.inapp.ios.test3 "Group 1"

# ❌ NEVER use these for testing
npm run bulk-create-promo -- com.vtech.plus "Group 1"  # Production!
npm run bulk-create-promo -- com.vtech.plus.uat "Group 1"  # UAT!
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
npm run get-apps

# Get subscription information
npm run get-product-ids <bundle-id>

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
- Verify bundle ID and reference names with `npm run get-product-ids`

---

## Summary

### Key Takeaways

✅ **Bundle ID Integration** - Use bundle ID directly, no need to look up subscription IDs

✅ **Bulk Operations** - Create offers for all subscriptions in a group at once

✅ **Group Filtering** - Creates offers ONLY for subscriptions in the specified group

✅ **Wildcard Support** - Use `"*"` to create offers for ALL subscription groups

✅ **Exact Match** - Reference name filtering requires exact match (case-sensitive)

✅ **Auto-Generated Codes** - Codes are generated automatically if not provided

✅ **Rollback Support** - Bulk operations create rollback logs for cleanup

✅ **Safety First** - Always use test bundle ID `com.vtech.plus.inapp.ios.test3`

### Quick Reference

```bash
# Get subscription info
npm run get-product-ids com.vtech.plus.inapp.ios.test3

# Bulk create for specific group
npm run bulk-create-promo -- com.vtech.plus.inapp.ios.test3 "Group 1" --name "Sale"

# Bulk create for ALL groups
npm run bulk-create-promo -- com.vtech.plus.inapp.ios.test3 "*" --name "Holiday Sale"

# List offers
npm run get-promo-offers com.vtech.plus.inapp.ios.test3

# Rollback
npm run rollback-promo-offers rollback-*.json
```

---

**Last Updated:** December 2025
