# API Documentation

Complete API reference for the Apple App Store Connect API Service.

## Base URL

```
http://localhost:3000
```

## Table of Contents

- [General Endpoints](#general-endpoints)
- [App Management](#app-management)
- [Subscription Management](#subscription-management)
- [Build Management](#build-management)
- [Certificate Management](#certificate-management)
- [Device Management](#device-management)
- [Beta Testing](#beta-testing)

---

## General Endpoints

### Health Check

#### Server Health
```http
GET /health
```

**Response:**
```json
{
  "success": true,
  "message": "Server is running",
  "timestamp": "2025-12-09T09:00:00.000Z",
  "version": "1.0.0"
}
```

#### Service Health
```http
GET /api/subscriptions/health
```

**Response:**
```json
{
  "success": true,
  "message": "Subscription service is healthy",
  "timestamp": "2025-12-09T09:00:00.000Z",
  "configuration": {
    "hasTeamId": true,
    "hasKeyId": true,
    "hasPrivateKey": true,
    "hasIssuerId": true
  }
}
```

---

## App Management

### Get All Apps

```http
GET /api/apps
```

**Query Parameters:**
- `bundleId` (string, optional) - Filter by bundle identifier
- `name` (string, optional) - Filter by app name
- `platform` (string, optional) - Filter by platform (IOS, MAC_OS, TV_OS)
- `limit` (number, optional) - Number of results (1-200, default: 50)
- `includes` (string, optional) - Related resources to include

**Example:**
```bash
curl "http://localhost:3000/api/apps?limit=10"
curl "http://localhost:3000/api/apps?bundleId=com.vtech.plus.inapp.ios.test3"
curl "http://localhost:3000/api/apps?platform=IOS&limit=50"
```

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "type": "apps",
      "id": "6476840531",
      "attributes": {
        "name": "VTech Plus In-App Test2 Server",
        "bundleId": "com.vtech.plus.inapp.ios.test3",
        "sku": "VTECHPLUSINAPPIOSTEST3",
        "primaryLocale": "en-US",
        "isOrEverWasMadeForKids": false
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

### Get App by ID

```http
GET /api/apps/:id
```

**Parameters:**
- `id` (string, required) - App ID

**Query Parameters:**
- `includes` (string, optional) - Related resources to include

**Example:**
```bash
curl "http://localhost:3000/api/apps/6476840531"
curl "http://localhost:3000/api/apps/6476840531?includes=appStoreVersions"
```

### Search Apps

```http
GET /api/apps/search
```

**Query Parameters:**
- `q` (string, required) - Search query (bundle ID or name)
- `limit` (number, optional) - Number of results (1-200)

**Example:**
```bash
curl "http://localhost:3000/api/apps/search?q=vtech"
curl "http://localhost:3000/api/apps/search?q=com.vtech.plus&limit=10"
```

### Get App Summary

```http
GET /api/apps/:id/summary
```

Returns app details with subscription statistics.

**Example:**
```bash
curl "http://localhost:3000/api/apps/6476840531/summary"
```

**Response:**
```json
{
  "success": true,
  "data": {
    "app": { ... },
    "statistics": {
      "totalSubscriptionGroups": 28,
      "totalSubscriptions": 129,
      "subscriptionsByState": {
        "APPROVED": 120,
        "PENDING": 9
      },
      "subscriptionsByPeriod": {
        "ONE_MONTH": 65,
        "ONE_YEAR": 64
      }
    },
    "subscriptionGroups": [ ... ],
    "recentSubscriptions": [ ... ]
  }
}
```

### Compare Apps

```http
POST /api/apps/compare
```

**Body:**
```json
{
  "appIds": ["6476840531", "6444252233"]
}
```

**Example:**
```bash
curl -X POST "http://localhost:3000/api/apps/compare" \
  -H "Content-Type: application/json" \
  -d '{"appIds": ["6476840531", "6444252233"]}'
```

### Get App Subscriptions

```http
GET /api/apps/:id/subscriptions
```

**Query Parameters:**
- `state` (string, optional) - Filter by state
- `includes` (string, optional) - Related resources
- `limit` (number, optional) - Number of results

**Example:**
```bash
curl "http://localhost:3000/api/apps/6476840531/subscriptions"
curl "http://localhost:3000/api/apps/6476840531/subscriptions?state=APPROVED&limit=100"
```

### Get App Subscription Groups

```http
GET /api/apps/:id/subscription-groups
```

**Query Parameters:**
- `includes` (string, optional) - Related resources
- `limit` (number, optional) - Number of results

**Example:**
```bash
curl "http://localhost:3000/api/apps/6476840531/subscription-groups"
curl "http://localhost:3000/api/apps/6476840531/subscription-groups?includes=subscriptions"
```

### Create Subscription Group

```http
POST /api/apps/:id/subscription-groups
```

**Body:**
```json
{
  "referenceName": "Premium Subscriptions"
}
```

**Example:**
```bash
curl -X POST "http://localhost:3000/api/apps/6476840531/subscription-groups" \
  -H "Content-Type: application/json" \
  -d '{"referenceName": "Premium Subscriptions"}'
```

### Get Subscription Product IDs by Bundle ID ⭐

```http
GET /api/apps/bundle/:bundleId/subscription-product-ids
```

**Parameters:**
- `bundleId` (string, required) - App bundle identifier

**Query Parameters:**
- `useCache` (boolean, optional) - Use database cache (default: true)
- `saveToDb` (boolean, optional) - Save to database (default: true)

**Example:**
```bash
# With cache (fast)
curl "http://localhost:3000/api/apps/bundle/com.vtech.plus.inapp.ios.test3/subscription-product-ids"

# Force fresh from API
curl "http://localhost:3000/api/apps/bundle/com.vtech.plus.inapp.ios.test3/subscription-product-ids?useCache=false"

# Don't save to database
curl "http://localhost:3000/api/apps/bundle/com.vtech.plus.inapp.ios.test3/subscription-product-ids?saveToDb=false"
```

**Response:**
```json
{
  "success": true,
  "bundleId": "com.vtech.plus.inapp.ios.test3",
  "appId": "6476840531",
  "appName": "VTech Plus In-App Test2 Server",
  "productIds": [
    "DN01vtbm01usgroupAlevel01y01",
    "DN01vtbm01usgroupAlevel01m01",
    "DN01vtbm01usgroupAlevel02y01"
  ],
  "subscriptions": [
    {
      "id": "6747420462",
      "productId": "DN01vtbm01usgroupAlevel01y01",
      "name": "Premium Annual",
      "state": "APPROVED",
      "subscriptionPeriod": "ONE_YEAR",
      "familySharable": false,
      "reviewNote": null
    }
  ],
  "subscriptionGroups": [
    {
      "id": "21536687",
      "referenceName": "DN GroupA"
    }
  ],
  "count": 129,
  "cached": true,
  "updatedAt": "2025-12-09 09:41:18"
}
```

---

## Subscription Management

### Get All Subscriptions

```http
GET /api/subscriptions
```

**Query Parameters:**
- `appId` (string, optional) - Filter by app ID
- `subscriptionGroupId` (string, optional) - Filter by group ID
- `state` (string, optional) - Filter by state
- `includes` (string, optional) - Related resources
- `limit` (number, optional) - Number of results

**Example:**
```bash
curl "http://localhost:3000/api/subscriptions"
curl "http://localhost:3000/api/subscriptions?state=APPROVED&limit=100"
```

### Get Subscription by ID

```http
GET /api/subscriptions/:id
```

**Parameters:**
- `id` (string, required) - Subscription ID

**Query Parameters:**
- `includes` (string, optional) - Related resources

**Example:**
```bash
curl "http://localhost:3000/api/subscriptions/6747420462"
curl "http://localhost:3000/api/subscriptions/6747420462?includes=prices,subscriptionLocalizations"
```

### Create Subscription

```http
POST /api/subscriptions
```

**Body:**
```json
{
  "name": "Premium Monthly",
  "productId": "com.example.premium.monthly",
  "subscriptionPeriod": "ONE_MONTH",
  "subscriptionGroupId": "21536687",
  "reviewNote": "Monthly premium subscription",
  "familySharable": false
}
```

**Example:**
```bash
curl -X POST "http://localhost:3000/api/subscriptions" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Premium Monthly",
    "productId": "com.example.premium.monthly",
    "subscriptionPeriod": "ONE_MONTH",
    "subscriptionGroupId": "21536687"
  }'
```

### Update Subscription

```http
PUT /api/subscriptions/:id
```

**Body:**
```json
{
  "name": "Premium Monthly Updated",
  "familySharable": true
}
```

**Example:**
```bash
curl -X PUT "http://localhost:3000/api/subscriptions/6747420462" \
  -H "Content-Type: application/json" \
  -d '{"name": "Premium Monthly Updated", "familySharable": true}'
```

### Delete Subscription

```http
DELETE /api/subscriptions/:id
```

**Example:**
```bash
curl -X DELETE "http://localhost:3000/api/subscriptions/6747420462"
```

### Get Subscription Pricing

```http
GET /api/subscriptions/:id/pricing
```

**Query Parameters:**
- `territory` (string, optional) - Filter by territory code

**Example:**
```bash
curl "http://localhost:3000/api/subscriptions/6747420462/pricing"
curl "http://localhost:3000/api/subscriptions/6747420462/pricing?territory=USA"
```

### Update Subscription Pricing

```http
PUT /api/subscriptions/:id/pricing
```

**Body:**
```json
{
  "prices": [
    {
      "territory": "USA",
      "price": 9.99
    }
  ]
}
```

**Example:**
```bash
curl -X PUT "http://localhost:3000/api/subscriptions/6747420462/pricing" \
  -H "Content-Type: application/json" \
  -d '{"prices": [{"territory": "USA", "price": 9.99}]}'
```

### Get Subscription Groups

```http
GET /api/subscriptions/groups
```

**Query Parameters:**
- `appId` (string, optional) - Filter by app ID
- `includes` (string, optional) - Related resources
- `limit` (number, optional) - Number of results

**Example:**
```bash
curl "http://localhost:3000/api/subscriptions/groups"
curl "http://localhost:3000/api/subscriptions/groups?appId=6476840531&includes=subscriptions"
```

---

## Build Management

### Get All Builds

```http
GET /api/builds
```

**Query Parameters:**
- `appId` (string, optional) - Filter by app ID
- `version` (string, optional) - Filter by version
- `buildNumber` (string, optional) - Filter by build number
- `limit` (number, optional) - Number of results

**Example:**
```bash
curl "http://localhost:3000/api/builds"
curl "http://localhost:3000/api/builds?appId=6476840531"
```

### Get Build by ID

```http
GET /api/builds/:id
```

**Example:**
```bash
curl "http://localhost:3000/api/builds/BUILD_ID"
```

---

## Certificate Management

### Get All Certificates

```http
GET /api/certificates
```

**Query Parameters:**
- `certificateType` (string, optional) - Filter by type
- `limit` (number, optional) - Number of results

**Example:**
```bash
curl "http://localhost:3000/api/certificates"
```

### Get Certificate by ID

```http
GET /api/certificates/:id
```

**Example:**
```bash
curl "http://localhost:3000/api/certificates/CERT_ID"
```

### Create Certificate

```http
POST /api/certificates
```

### Revoke Certificate

```http
DELETE /api/certificates/:id
```

---

## Device Management

### Get All Devices

```http
GET /api/devices
```

**Query Parameters:**
- `platform` (string, optional) - Filter by platform
- `status` (string, optional) - Filter by status
- `limit` (number, optional) - Number of results

**Example:**
```bash
curl "http://localhost:3000/api/devices"
curl "http://localhost:3000/api/devices?platform=IOS"
```

### Get Device by ID

```http
GET /api/devices/:id
```

### Register Device

```http
POST /api/devices
```

**Body:**
```json
{
  "name": "Test iPhone",
  "platform": "IOS",
  "udid": "00008030-000000000000000"
}
```

### Update Device

```http
PUT /api/devices/:id
```

### Disable Device

```http
DELETE /api/devices/:id
```

---

## Beta Testing

### Get Beta Groups

```http
GET /api/beta/groups
```

**Query Parameters:**
- `appId` (string, optional) - Filter by app ID
- `limit` (number, optional) - Number of results

**Example:**
```bash
curl "http://localhost:3000/api/beta/groups"
```

### Get Beta Testers

```http
GET /api/beta/testers
```

**Query Parameters:**
- `email` (string, optional) - Filter by email
- `betaGroupId` (string, optional) - Filter by group
- `limit` (number, optional) - Number of results

**Example:**
```bash
curl "http://localhost:3000/api/beta/testers"
```

### Invite Beta Tester

```http
POST /api/beta/testers
```

**Body:**
```json
{
  "email": "tester@example.com",
  "firstName": "John",
  "lastName": "Doe",
  "betaGroupId": "GROUP_ID"
}
```

---

## Common Parameters

### Includes
Specify related resources to include in the response.

**Example:**
- `?includes=appStoreVersions`
- `?includes=prices,subscriptionLocalizations`

### Pagination
- `limit` - Number of results per page (1-200)
- Default: Varies by endpoint (typically 50)

### Filtering
Most endpoints support filtering by specific fields:
- Bundle ID: `?bundleId=com.example.app`
- State: `?state=APPROVED`
- Platform: `?platform=IOS`

---

## Response Format

### Success Response

```json
{
  "success": true,
  "data": { ... },
  "meta": { ... },
  "links": { ... }
}
```

### Error Response

```json
{
  "success": false,
  "error": {
    "message": "Error description",
    "type": "ERROR_TYPE"
  }
}
```

---

## HTTP Status Codes

- `200` - OK - Request succeeded
- `201` - Created - Resource created successfully
- `400` - Bad Request - Invalid parameters or validation error
- `401` - Unauthorized - Authentication failed
- `403` - Forbidden - Insufficient permissions
- `404` - Not Found - Resource not found
- `409` - Conflict - Duplicate resource
- `429` - Too Many Requests - Rate limit exceeded
- `500` - Internal Server Error - Server error
- `503` - Service Unavailable - Service is down

---

## Rate Limiting

The API implements multiple layers of rate limiting:

- **General API**: 100 requests per 15 minutes
- **Write Operations** (POST, PUT, DELETE): 20 requests per 5 minutes
- **Subscription Creation**: 5 requests per 15 minutes

---

## Authentication

The API authenticates with Apple App Store Connect using JWT tokens. Configure your credentials in `.env`:

```env
APPSTORE_TEAM_ID=your_team_id
APPSTORE_KEY_ID=your_key_id
APPSTORE_PRIVATE_KEY_PATH=./keys/AuthKey_xxx.p8
APPSTORE_ISSUER_ID=your_issuer_id
```

---

## CLI Commands

In addition to the REST API, several CLI scripts are available:

### Get All Apps
```bash
npm run get-all-apps
npm run get-all-apps -- --limit=100
```

### Get Subscription Product IDs
```bash
npm run get-subscription-product-ids com.vtech.plus.inapp.ios.test3
npm run get-subscription-product-ids com.vtech.plus.inapp.ios.test3 --no-cache
```

### Debug Authentication
```bash
npm run debug-auth
```

---

## Testing Bundle ID

**⚠️ IMPORTANT**: For testing, always use:
- ✅ `com.vtech.plus.inapp.ios.test3` - Test bundle ID

**Never use for testing**:
- ❌ `com.vtech.plus` - Production app
- ❌ `com.vtech.plus.uat` - UAT environment
- ❌ Other bundle IDs

---

## Examples

### Complete Workflow: Get Product IDs for Testing

```bash
# 1. Get all apps to find bundle IDs
curl "http://localhost:3000/api/apps?limit=10"

# 2. Get subscription product IDs for test app (uses cache)
curl "http://localhost:3000/api/apps/bundle/com.vtech.plus.inapp.ios.test3/subscription-product-ids"

# 3. Force fresh data from API
curl "http://localhost:3000/api/apps/bundle/com.vtech.plus.inapp.ios.test3/subscription-product-ids?useCache=false"
```

### Get App Statistics

```bash
# Get app summary with subscription statistics
curl "http://localhost:3000/api/apps/6476840531/summary"
```

### Search and Compare

```bash
# Search for apps
curl "http://localhost:3000/api/apps/search?q=vtech"

# Compare multiple apps
curl -X POST "http://localhost:3000/api/apps/compare" \
  -H "Content-Type: application/json" \
  -d '{"appIds": ["6476840531", "6444252233"]}'
```

---

## Related Documentation

- `README.md` - Main project documentation
- `GET_APPS_GUIDE.md` - Detailed guide for retrieving apps
- `SUBSCRIPTION_PRODUCT_IDS_GUIDE.md` - Guide for getting product IDs
- `DATABASE.md` - SQLite database documentation
- `AUTHENTICATION_SETUP.md` - Authentication configuration
- `AGENTS.md` - Development guidelines

---

## Support

For issues or questions:
1. Check this documentation
2. Run `npm run debug-auth` for authentication issues
3. Review logs in `logs/` directory
4. Check Apple App Store Connect API status
