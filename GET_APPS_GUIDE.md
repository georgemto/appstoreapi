# Get Apps Guide

## Overview
This guide explains how to retrieve all apps from App Store Connect API using the fixed implementation.

## What Was Fixed

### Issues Resolved
1. **Timeout Problem**: Increased request timeout from 30s to 60s
2. **Empty Filter Parameters**: Fixed controller sending empty string filters (`""`) to Apple API
3. **Large Response Size**: Reduced default limit from 200 to 50 for faster responses
4. **Include Fields**: Made includes optional to reduce payload size

### Changes Made

#### 1. Controller (`src/controllers/apps.js`)
- Changed from sending empty strings to only including non-empty query parameters
- Fixed parameter parsing to properly handle optional values

#### 2. Service (`src/services/apps.js`)
- Reduced default limit from 200 to 50 apps
- Made includes optional (no default includes)
- Only request fields for resources that are explicitly included
- Better handling of include parameter (string or array)

#### 3. Client (`src/services/appstore-client.js`)
- Increased timeout from 30 seconds to 60 seconds
- Better handling of network timeouts

#### 4. Script (`get-all-apps.js`)
- Added command-line argument support
- Added help documentation
- Better error messages for timeout issues

## Usage

### Quick Start
```bash
# Get all apps (default: 50 apps)
npm run get-all-apps

# Show help
npm run get-all-apps -- --help
```

### Advanced Usage

```bash
# Get specific number of apps
npm run get-all-apps -- --limit=10

# Get all apps (max 200)
npm run get-all-apps -- --limit=200

# Include app store versions (slower but more data)
npm run get-all-apps -- --include-versions

# Combine options
npm run get-all-apps -- --limit=100 --include-versions
```

### Using the REST API

Start the server:
```bash
npm run dev
```

Make requests:
```bash
# Basic request (default limit)
curl "http://localhost:3000/api/apps"

# Specify limit
curl "http://localhost:3000/api/apps?limit=100"

# Include related resources
curl "http://localhost:3000/api/apps?limit=50&includes=appStoreVersions"

# Filter by bundle ID
curl "http://localhost:3000/api/apps?bundleId=com.example.app"

# Filter by platform
curl "http://localhost:3000/api/apps?platform=IOS"
```

### Response Format

The API returns data in this format:

```json
{
  "success": true,
  "data": [
    {
      "type": "apps",
      "id": "1234567890",
      "attributes": {
        "name": "My App",
        "bundleId": "com.example.myapp",
        "sku": "MYAPP",
        "primaryLocale": "en-US",
        "isOrEverWasMadeForKids": false
      },
      "links": {
        "self": "https://api.appstoreconnect.apple.com/v1/apps/1234567890"
      }
    }
  ],
  "meta": {
    "paging": {
      "total": 5,
      "limit": 50
    }
  }
}
```

## Output

The script produces two outputs:

1. **Console Output**: Formatted, human-readable list of apps
2. **JSON File**: `apps-output.json` - Complete API response for further processing

## Performance Tips

### For Faster Responses
- Use smaller limits (10-50 apps)
- Don't include related resources unless needed
- Filter by specific criteria (bundleId, platform)

### For Complete Data
- Use `--include-versions` flag
- Increase limit up to 200
- Be patient - larger requests take longer

## Troubleshooting

### Timeout Errors
If you still get timeouts:
1. Reduce the limit: `npm run get-all-apps -- --limit=10`
2. Remove includes: Don't use `--include-versions`
3. Check your network connection
4. Verify Apple's API status

### Authentication Errors
```bash
# Debug authentication
npm run debug-auth

# Check your .env file has:
# - APPSTORE_TEAM_ID
# - APPSTORE_KEY_ID
# - APPSTORE_PRIVATE_KEY_PATH
# - APPSTORE_ISSUER_ID
```

### No Apps Returned
- Verify your API key has access to apps in App Store Connect
- Check the "Apps" permission in your API key settings
- Ensure you have apps in your App Store Connect account

## API Limits

### Apple App Store Connect API Limits
- **Maximum apps per request**: 200
- **Rate limits**: See App Store Connect documentation
- **Timeout**: 60 seconds (client-side)

### Recommended Limits
- **Development/Testing**: 10-50 apps
- **Production/Full Sync**: 100-200 apps
- **With Includes**: 50 apps or fewer

## Examples

### Example 1: Quick Test
```bash
npm run get-all-apps -- --limit=5
```

### Example 2: Get All Apps
```bash
npm run get-all-apps -- --limit=200
```

### Example 3: Get Apps with Versions
```bash
npm run get-all-apps -- --limit=50 --include-versions
```

### Example 4: Process JSON Output
```bash
npm run get-all-apps
cat apps-output.json | jq '.data[] | {name: .attributes.name, bundleId: .attributes.bundleId}'
```

## Integration Examples

### Node.js Script
```javascript
const appService = require('./src/services/apps');

async function myScript() {
  const result = await appService.getAllApps({ limit: 50 });
  console.log(`Found ${result.data.length} apps`);
  
  result.data.forEach(app => {
    console.log(`${app.attributes.name} - ${app.attributes.bundleId}`);
  });
}
```

### Express Route
Already implemented in `src/routes/apps.js`:
```javascript
GET /api/apps?limit=50
```

### cURL
```bash
curl "http://localhost:3000/api/apps?limit=50"
```

## Related Documentation

- `README.md` - Main project documentation
- `AUTHENTICATION_SETUP.md` - Authentication configuration
- `API_DOCUMENTATION.md` - Complete API reference
- `APP_MANAGEMENT_GUIDE.md` - App management guide

## Support

For issues:
1. Check this guide
2. Run `npm run debug-auth`
3. Review logs in `logs/` directory
4. Check Apple App Store Connect API status
