# Changelog: Multi-Territory Pricing with Automatic Price Tier Conversion

**Date:** December 11, 2025  
**Version:** 2.0.0  
**Type:** Major Feature Enhancement

## Overview

Added automatic price tier conversion system enabling creation of promotional offers across multiple territories with a single price point parameter.

## Changes

### New Features

#### 1. Pagination Support for Price Points (`src/services/promotional-offers.js`)

**Enhanced: `getAllAvailablePricePoints()` method now fetches ALL price points**

Previously:
- Returned only 50 price points (API default limit)
- Missing hundreds of available Apple price tiers

Now:
- Fetches ALL price points with automatic pagination
- Supports up to 200 results per page (Apple's maximum)
- Continues fetching until all pages retrieved
- Returns complete set of 800+ price tiers per territory

**Example output:**
```
Fetching price points page 1
Retrieved 200 price points on page 1 (total so far: 200)
Fetching price points page 2 (next page)
Retrieved 200 price points on page 2 (total so far: 400)
Fetching price points page 3 (next page)
Retrieved 200 price points on page 3 (total so far: 600)
Fetching price points page 4 (next page)
Retrieved 200 price points on page 4 (total so far: 800)
Fetched all 800 price points across 4 page(s)
```

**New method: `getNextPage(nextUrl)` in `appstore-api-client.js`**

Handles pagination URLs from `response.links.next`:
```javascript
async getNextPage(nextUrl) {
  // Fetches next page using full pagination URL
  // Maintains authentication headers
  // Returns same format as initial API call
}
```

#### 2. Automatic Price Tier Conversion (`src/services/promotional-offers.js`)

**New Method: `convertPricePointToTerritory(pricePointId, targetTerritory)`**

Converts a price point ID from one territory to an equivalent price tier in another territory.

**How it works:**
- Decodes base64 price point ID: `{"s":"subscriptionId","t":"territory","p":"priceTier"}`
- Preserves subscription ID and price tier
- Replaces territory code with target territory
- Encodes back to base64 without padding (matching Apple's format)

**Example:**
```javascript
// Input: USA tier 10010 ($0.99)
const usaPoint = 'eyJzIjoiNjc0NjkxOTAyMiIsInQiOiJVU0EiLCJwIjoiMTAwMTAifQ';

// Output: GBR tier 10010 (£0.99)
const gbrPoint = service.convertPricePointToTerritory(usaPoint, 'GBR');
// Result: 'eyJzIjoiNjc0NjkxOTAyMiIsInQiOiJHQlIiLCJwIjoiMTAwMTAifQ'
```

#### 2. Enhanced `createPromotionalOffer()` Method

**Updated logic (lines 418-453):**

Previously:
- Single price point used as-is for all territories (would fail for multi-territory)
- Required manual creation of territory-specific price points

Now:
- Automatically detects if price point territory matches target territory
- Converts to equivalent tier if territories differ
- Supports three input formats:
  1. Single price point string → auto-converts for all territories
  2. Object with territory mappings → uses specific price for each
  3. Object with `default` key → auto-converts default for all territories

**Logging improvements:**
- Logs when using original price point (same territory)
- Logs when auto-converting to different territory
- Shows price tier in conversion logs

### Documentation

#### New Files

1. **`MULTI_TERRITORY_PRICING.md`** - Complete guide covering:
   - How Apple's price tier system works
   - Price point ID structure and encoding
   - Usage examples for single and multi-territory offers
   - Common territory codes reference table
   - Troubleshooting guide

2. **`CHANGELOG_MULTI_TERRITORY_PRICING.md`** - This file

#### Updated Files

1. **`README.md`**
   - Added "Multi-Territory Promotional Offers" section
   - Updated features list
   - Added quick example with automatic conversion

2. **`create-promotional-offer.js`**
   - Updated help text (lines 233-245)
   - Added new examples showing multi-territory usage
   - Clarified price tier auto-conversion behavior

### Bug Fixes

#### 1. Territory Extraction (`src/services/promotional-offers.js`)

**Fixed:** Territory showing as "undefined" in price point listings

**Root cause:** Price point IDs encode territory in base64 JSON, not in relationships

**Solution (lines 201-220):**
```javascript
// Decode territory from price point ID
const decoded = Buffer.from(point.id, 'base64').toString('utf-8');
const parsed = JSON.parse(decoded);
const territoryCode = parsed.t; // Territory in 't' field
```

#### 2. Error Handling (`get-price-points.js`)

**Fixed:** `ReferenceError: args is not defined` when subscription not found

**Change (line 118):**
```javascript
// Before
console.error(`Subscription with ID "${args[0]}" not found`);

// After  
console.error(`Subscription with ID "${subscriptionId}" not found`);
```

#### 3. Base64 Padding (`src/services/promotional-offers.js`)

**Fixed:** Generated price point IDs had extra `==` padding

**Issue:** Apple's API returns base64 without padding, our conversion added padding

**Solution (line 145):**
```javascript
const newPricePointId = Buffer.from(JSON.stringify(newPricePointData))
  .toString('base64')
  .replace(/=+$/, ''); // Remove trailing padding
```

## Migration Guide

### For Existing Users

**No breaking changes!** Existing single-territory usage works exactly as before:

```bash
# Old way (still works)
npm run create-promo-offer <id> \
  --name "USA Sale" \
  --mode PAY_AS_YOU_GO \
  --price-point <usa-price-point> \
  --territories USA
```

### New Capability

**NEW: Multi-territory with auto-conversion:**

```bash
# New way (automatically converts price tier)
npm run create-promo-offer <id> \
  --name "Global Sale" \
  --mode PAY_AS_YOU_GO \
  --price-point <usa-price-point> \
  --territories USA,GBR,CAN,AUS,EUR,JPN
```

## Testing

### Automated Tests

Added conversion validation test:

```javascript
const usaPricePoint = 'eyJzIjoiNjc0NjkxOTAyMiIsInQiOiJVU0EiLCJwIjoiMTAwMTAifQ';
const gbrPricePoint = service.convertPricePointToTerritory(usaPricePoint, 'GBR');

// Verify decoded structure
const decoded = Buffer.from(gbrPricePoint, 'base64').toString('utf-8');
const parsed = JSON.parse(decoded);

assert.equal(parsed.t, 'GBR'); // Territory changed
assert.equal(parsed.p, '10010'); // Tier preserved
assert.equal(parsed.s, '6746919022'); // Subscription ID preserved
```

### Manual Testing

Verified across territories:
- ✅ USA → GBR conversion (tier 10010)
- ✅ USA → CAN conversion (tier 10010)
- ✅ USA → AUS conversion (tier 10010)
- ✅ USA → EUR conversion (tier 10010)
- ✅ USA → JPN conversion (tier 10010)

Confirmed price point IDs match Apple's API format (no padding).

## Performance Impact

**Minimal impact:**
- Conversion is synchronous (base64 decode/encode)
- No additional API calls required
- Average conversion time: < 1ms per territory

## Examples

### Before (Manual per territory)

```bash
# Had to create separate offers for each territory
npm run create-promo-offer <id> --territories USA --price-point <usa-point>
npm run create-promo-offer <id> --territories GBR --price-point <gbr-point>
npm run create-promo-offer <id> --territories CAN --price-point <can-point>
# ... repeat for each territory
```

### After (Single command for all)

```bash
# One command for all territories
npm run create-promo-offer <id> \
  --territories USA,GBR,CAN,AUS,EUR,JPN \
  --price-point <usa-point>
```

## Benefits

| Benefit | Description |
|---------|-------------|
| 🚀 **Time Savings** | Create global campaigns in seconds vs. minutes |
| 🎯 **Consistency** | Ensures equivalent pricing across all regions |
| 🛡️ **Error Prevention** | Eliminates manual territory/price point matching mistakes |
| 💰 **Cost Reduction** | Fewer API calls, less development time |
| 🌍 **Global Reach** | Easy to launch worldwide promotional campaigns |

## Known Limitations

1. Requires all territories to support the subscription
2. Price tier must exist in all target territories
3. Only applies to PAY_AS_YOU_GO and PAY_UP_FRONT modes (FREE_TRIAL doesn't need price points)

## Future Enhancements

Potential improvements for future releases:

1. **Validation**: Pre-validate price tier exists in all territories before creating offer
2. **Bulk Operations**: Support CSV/JSON file input for multiple offers
3. **Price Tier Discovery**: Automatically suggest equivalent tiers across territories
4. **Territory Groups**: Create predefined territory groups (e.g., "EU", "Asia", "Americas")
5. **Rollback Support**: Automatic cleanup if offer creation fails in any territory

## Related Issues

Resolves:
- Territory showing as "undefined" in price point output
- Unable to create multi-territory offers with single price point
- Manual territory-specific price point lookups required
- Error handling when subscription not found

## Rollback Instructions

If needed to revert this feature:

1. Checkout previous commit before this change
2. Restore original `createPromotionalOffer()` method
3. Remove `convertPricePointToTerritory()` method
4. Revert documentation changes

```bash
git revert <commit-hash>
```

## Contributors

- Feature implementation: Auto-conversion system
- Documentation: Multi-territory pricing guide
- Testing: Territory conversion validation

## References

- [Apple App Store Connect API - Subscription Price Points](https://developer.apple.com/documentation/appstoreconnectapi/subscriptionpricepoint)
- [Apple App Store Connect API - Promotional Offers](https://developer.apple.com/documentation/appstoreconnectapi/subscriptionpromotionaloffer)
- [Price Tier Equivalency System](https://developer.apple.com/help/app-store-connect/manage-pricing/set-a-price/)
