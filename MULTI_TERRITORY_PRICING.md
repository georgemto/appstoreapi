# Multi-Territory Pricing with Automatic Price Tier Conversion

## Overview

The promotional offers system now supports **automatic price tier conversion** across territories. When you create a promotional offer with a single price point, the system automatically converts it to equivalent price tiers for all specified territories.

## How It Works

### Apple's Price Tier System

Apple uses a global price tier equivalency system where each tier (e.g., `10001`, `10010`, `10050`) represents an equivalent price level across all countries:

- **Tier 10001**: USA = $0.29, GBR = £0.29, CAN = CAD $0.29, etc.
- **Tier 10010**: USA = $0.99, GBR = £0.99, CAN = CAD $0.99, etc.
- **Tier 10050**: USA = $4.99, GBR = £4.99, CAN = CAD $4.99, etc.

### Price Point ID Structure

Price point IDs are base64-encoded JSON containing:
```json
{
  "s": "6746919022",  // Subscription ID
  "t": "USA",          // Territory code
  "p": "10010"         // Price tier
}
```

Encoded example: `eyJzIjoiNjc0NjkxOTAyMiIsInQiOiJVU0EiLCJwIjoiMTAwMTAifQ`

### Automatic Conversion

When you provide a USA price point (tier 10010), the system:
1. **Decodes** the price point ID to extract the price tier (`10010`)
2. **Preserves** the subscription ID (`s`)
3. **Replaces** the territory code with each target territory
4. **Encodes** back to base64 for each territory

**Example:**
```javascript
Input:  {"s":"6746919022","t":"USA","p":"10010"}  // USA $0.99
Output: {"s":"6746919022","t":"GBR","p":"10010"}  // GBR £0.99
Output: {"s":"6746919022","t":"CAN","p":"10010"}  // CAN $0.99
Output: {"s":"6746919022","t":"AUS","p":"10010"}  // AUS $0.99
```

## Usage

### 1. Get Price Points for a Territory

First, find the price point you want to use:

```bash
# Get USA price points (fetches all 800 available Apple price tiers)
npm run get-price-points 6746919022 USA
```

Output shows price tiers with customer prices:
```
10. Price Point
    ID: eyJzIjoiNjc0NjkxOTAyMiIsInQiOiJVU0EiLCJwIjoiMTAwMTAifQ
    Customer Price: 0.99
    Proceeds: 0.84

...

Total: 800 price point(s) available
```

**Note:** Always specify a territory (e.g., USA, GBR, CAN) to get results quickly. Without a territory filter, the command will fetch price points for ALL territories which can take several minutes.

### 2. Create Multi-Territory Promotional Offer

Use the price point ID with multiple territories:

```bash
npm run create-promotional-offer 6746919022 \
  --name "Global Holiday Sale" \
  --mode PAY_AS_YOU_GO \
  --price-point eyJzIjoiNjc0NjkxOTAyMiIsInQiOiJVU0EiLCJwIjoiMTAwMTAifQ \
  --territories USA,GBR,CAN,AUS,EUR,JPN \
  --duration ONE_MONTH \
  --periods 3
```

### What Happens Behind the Scenes

The system automatically:

1. **Detects** the original territory (USA) and price tier (10010)
2. **Converts** to each specified territory:
   - USA: Uses original `eyJzIjoiNjc0NjkxOTAyMiIsInQiOiJVU0EiLCJwIjoiMTAwMTAifQ`
   - GBR: Converts to `eyJzIjoiNjc0NjkxOTAyMiIsInQiOiJHQlIiLCJwIjoiMTAwMTAifQ`
   - CAN: Converts to `eyJzIjoiNjc0NjkxOTAyMiIsInQiOiJDQU4iLCJwIjoiMTAwMTAifQ`
   - AUS: Converts to `eyJzIjoiNjc0NjkxOTAyMiIsInQiOiJBVVMiLCJwIjoiMTAwMTAifQ`
   - EUR: Converts to `eyJzIjoiNjc0NjkxOTAyMiIsInQiOiJFVVIiLCJwIjoiMTAwMTAifQ`
   - JPN: Converts to `eyJzIjoiNjc0NjkxOTAyMiIsInQiOiJKUE4iLCJwIjoiMTAwMTAifQ`
3. **Creates** promotional offer with territory-specific prices
4. **Ensures** consistent pricing across all regions

### Verify Equivalent Prices

You can verify the converted prices match the same tier:

```bash
# Check USA tier 10010
npm run get-price-points 6746919022 USA | grep -A 3 "10. Price Point"
# Output: Customer Price: 0.99

# Check GBR tier 10010
npm run get-price-points 6746919022 GBR | grep -A 3 "10. Price Point"
# Output: Customer Price: 0.99

# Check CAN tier 10010
npm run get-price-points 6746919022 CAN | grep -A 3 "10. Price Point"
# Output: Customer Price: 0.99
```

## Common Territory Codes

| Code | Territory | Currency |
|------|-----------|----------|
| USA  | United States | USD |
| GBR  | United Kingdom | GBP |
| CAN  | Canada | CAD |
| AUS  | Australia | AUD |
| EUR  | Eurozone | EUR |
| JPN  | Japan | JPY |
| CHN  | China | CNY |
| IND  | India | INR |
| BRA  | Brazil | BRL |
| MEX  | Mexico | MXN |

## Examples

### Example 1: Global Free Trial (No Price Point Needed)

```bash
npm run create-promotional-offer 6746919022 \
  --name "7-Day Free Trial" \
  --mode FREE_TRIAL \
  --duration ONE_WEEK \
  --periods 1
```

**Note**: FREE_TRIAL mode doesn't require a price point or territories.

### Example 2: USA-Only Discounted Offer

```bash
npm run create-promotional-offer 6746919022 \
  --name "USA Summer Sale" \
  --mode PAY_AS_YOU_GO \
  --price-point eyJzIjoiNjc0NjkxOTAyMiIsInQiOiJVU0EiLCJwIjoiMTAwMTAifQ \
  --territories USA \
  --duration ONE_MONTH \
  --periods 3
```

### Example 3: Multi-Territory with Auto-Conversion

```bash
# Get a USA price point first
npm run get-price-points 6746919022 USA

# Create offer for multiple territories (auto-converts the USA price tier)
npm run create-promotional-offer 6746919022 \
  --name "Global Spring Sale" \
  --mode PAY_AS_YOU_GO \
  --price-point <usa-price-point-id> \
  --territories USA,GBR,CAN,AUS \
  --duration THREE_MONTHS \
  --periods 6
```

### Example 4: All Available Territories

If you don't specify `--territories`, the system uses all territories where the subscription has prices configured:

```bash
npm run create-promotional-offer 6746919022 \
  --name "Worldwide Offer" \
  --mode PAY_AS_YOU_GO \
  --price-point <price-point-id> \
  --duration ONE_MONTH \
  --periods 3
```

## Advanced Usage

### Check What Territories Are Available

```bash
# This will show which territories have prices configured
npm run get-price-points 6746919022
```

### Manual Price Point Conversion (for testing)

You can test the conversion programmatically:

```javascript
const service = require('./src/services/promotional-offers');

const usaPricePoint = 'eyJzIjoiNjc0NjkxOTAyMiIsInQiOiJVU0EiLCJwIjoiMTAwMTAifQ';

// Convert to different territories
const gbrPrice = service.convertPricePointToTerritory(usaPricePoint, 'GBR');
const canPrice = service.convertPricePointToTerritory(usaPricePoint, 'CAN');
const ausPrice = service.convertPricePointToTerritory(usaPricePoint, 'AUS');

console.log('GBR:', gbrPrice);
console.log('CAN:', canPrice);
console.log('AUS:', ausPrice);
```

## Benefits

✅ **Consistent Global Pricing**: Same price tier across all regions  
✅ **Single Command**: Create offers for multiple territories at once  
✅ **Automatic Conversion**: No need to manually look up price points for each territory  
✅ **Error Prevention**: Eliminates mistakes from using wrong territory price points  
✅ **Time Saving**: Create global campaigns in seconds instead of minutes  

## Limitations

- Only works with promotional offers (PAY_AS_YOU_GO and PAY_UP_FRONT modes)
- FREE_TRIAL mode doesn't need price points (always $0)
- All territories must support the subscription
- Price tiers must be available in all target territories

## Troubleshooting

### Error: "Invalid price point ID format"

**Cause**: The price point ID is corrupted or not base64-encoded properly.

**Solution**: Get a fresh price point ID using `npm run get-price-points <subscription-id> <territory>`

### Error: "Price point is required for PAY_AS_YOU_GO mode"

**Cause**: You're using PAY_AS_YOU_GO or PAY_UP_FRONT mode without providing a price point.

**Solution**: Add `--price-point <id>` parameter or change to `--mode FREE_TRIAL`

### Offer created but not showing in some territories

**Cause**: The subscription might not be available in those territories.

**Solution**: 
1. Check which territories have prices: `npm run get-price-points <subscription-id>`
2. Only specify territories where prices exist

## Related Documentation

- [Promotional Offers Guide](./PROMOTIONAL_OFFERS_GUIDE.md)
- [Price Points Enhancement](./PRICE_POINTS_ENHANCEMENT.md)
- [Get Price Points Guide](./get-price-points.js --help)
- [Create Promotional Offer Help](./create-promotional-offer.js --help)
