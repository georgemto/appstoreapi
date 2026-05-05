# Get Price Points - Now Returns ALL Price Points!

## What Changed

Previously, `get-price-points` returned only **50 price points** (the API's default limit).

Now, it returns **ALL 800+ Apple price tiers** using automatic pagination!

## Example

### Before (v1.0)
```bash
$ npm run get-price-points 6746919022 USA

Total: 50 price point(s) available
Territories: 1
```

Only showed price tiers 1-50 (missing 750+ other tiers!)

### After (v2.0)
```bash
$ npm run get-price-points 6746919022 USA

📋 Fetching ALL available price points...
   (This may take 5-10 seconds to fetch all pages)

⏳ Fetching pages from Apple API...

   Fetching page 2... (200 price points so far)
   Fetching page 3... (400 price points so far)
   Fetching page 4... (600 price points so far)

✅ Price Points Retrieved!

📍 Territory: USA (800 price points)

  ⭐ ACTIVE PRICE POINTS:
  1. Active Price Point - $14.99

  📋 SAMPLE OF OTHER AVAILABLE PRICES (First 10):
  1. Price Point - $0.29
  2. Price Point - $0.39
  ...
  10. Price Point - $0.99

  ... and 789 more price points
  💡 Use --verbose flag to see all 800 price points

Total: 800 price point(s) available
Territories: 1
Active: 1 price point(s) currently used
```

Shows the complete range: **$0.29 to $1,000.00**!

**v2.1 Improvement:** Default output now shows only active prices + sample for speed. Use `--verbose` flag to see all 800 price points.

## Price Range Available

| Tier | Price (USA) | Use Case |
|------|-------------|----------|
| 10001 | $0.29 | Intro/trial pricing |
| 10010 | $0.99 | Entry-level subscription |
| 10050 | $4.99 | Standard subscription |
| 10100 | $7.99 | Premium subscription |
| 10200 | $19.99 | Pro subscription |
| 10500 | $119.99 | Enterprise subscription |
| 10800 | $1,000.00 | High-value B2B subscription |

## How It Works

### Technical Implementation

1. **Initial Request**: Fetches first 200 price points with `limit=200`
2. **Check Next Page**: Looks for `response.links.next` 
3. **Pagination Loop**: Continues fetching until no more pages
4. **Aggregate Results**: Combines all pages into single array

### Code Changes

**File:** `src/services/promotional-offers.js`

```javascript
// Old: Single request, 50 results
const response = await api.getSubscriptionPricePoints(id, opts);
return response.data; // Only 50 items

// New: Paginated requests, ALL results
const allPricePoints = [];
let nextUrl = null;

do {
  const response = nextUrl 
    ? await api.getNextPage(nextUrl)
    : await api.getSubscriptionPricePoints(id, opts);
  
  allPricePoints.push(...response.data);
  nextUrl = response.links?.next;
} while (nextUrl);

return allPricePoints; // All 800+ items
```

**New File:** `src/services/appstore-api-client.js` - Added `getNextPage()` method

## Performance

| Metric | v1.0 (Old) | v2.0 (Pagination) | v2.1 (Smart Display) |
|--------|------------|-------------------|----------------------|
| Results fetched | 50 | 800 | 800 |
| API calls | 1 | 4 | 4 |
| Fetch time | ~1 second | ~5 seconds | ~5 seconds |
| Display time | Instant | ~30 seconds | Instant |
| Coverage | 6% | 100% | 100% |
| Default output lines | ~200 | ~4000 | ~50 |

## Usage

### Get All Price Points for a Territory

```bash
# Default mode - shows active prices + sample (fast, concise)
npm run get-price-points 6746919022 USA

# Verbose mode - shows ALL 800 price points
npm run get-price-points 6746919022 USA -- --verbose

# Other territories
npm run get-price-points 6746919022 GBR
npm run get-price-points 6746919022 CAN
```

**Tip:** Default mode completes in ~5 seconds and shows what you need. Use `--verbose` when you need to see the complete list.

### ⚠️ Without Territory Filter

```bash
# Warning: This fetches ALL territories and can take 5-10 minutes!
npm run get-price-points 6746919022
```

**Recommendation:** Always specify a territory for faster results.

## Benefits

✅ **Complete Price Range**: Access all 800 Apple price tiers  
✅ **Accurate Selection**: Find the exact price point you need  
✅ **Better Planning**: See full pricing spectrum for promotional offers  
✅ **No Manual Work**: Automatic pagination handles everything  

## Migration

**No changes required!** The command works exactly the same:

```bash
npm run get-price-points <subscription-id> <territory>
```

Just now you get ALL price points instead of only 50.

## Related

- [Multi-Territory Pricing Guide](./MULTI_TERRITORY_PRICING.md)
- [Price Points Enhancement](./PRICE_POINTS_ENHANCEMENT.md)
- [Changelog](./CHANGELOG_MULTI_TERRITORY_PRICING.md)
