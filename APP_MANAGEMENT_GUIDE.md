# App Management Guide - Distinguishing Between Different Apps

This guide explains how to manage multiple apps and their subscriptions using the enhanced Apple App Store Connect API service.

## Overview

The service now provides comprehensive app management functionality to help you distinguish between different apps and manage their subscriptions separately.

## Key Concepts

### App Identification
Every app in Apple App Store Connect has:
- **App ID**: Unique identifier for the app (UUID format)
- **Bundle ID**: Reverse DNS notation (e.g., `com.yourcompany.appname`)
- **Name**: Human-readable app name
- **SKU**: Stock Keeping Unit identifier

### App-Specific Resources
Each app can have:
- **Subscription Groups**: Logical groupings of related subscriptions
- **Subscriptions**: Individual subscription products
- **Pricing**: Territory-specific pricing for subscriptions

## New API Endpoints for App Management

### 1. App Discovery & Management

#### Get All Apps
```bash
# List all apps accessible with your API key
GET /api/apps

# Filter by bundle ID
GET /api/apps?bundleId=com.yourcompany.appname

# Filter by name
GET /api/apps?name=My%20App

# Filter by platform
GET /api/apps?platform=IOS
```

#### Search Apps
```bash
# Search by bundle ID or name
GET /api/apps/search?q=com.yourcompany

# Search with limit
GET /api/apps/search?q=MyApp&limit=10
```

#### Get Specific App
```bash
# Get app details by ID
GET /api/apps/{app-id}

# Include additional data
GET /api/apps/{app-id}?includes=appStoreVersions,preReleaseVersions
```

### 2. App-Specific Subscription Management

#### Get App Summary
```bash
# Get comprehensive app overview with statistics
GET /api/apps/{app-id}/summary
```

#### Get App Subscriptions
```bash
# List all subscriptions for a specific app
GET /api/apps/{app-id}/subscriptions

# Filter by state
GET /api/apps/{app-id}/subscriptions?state=READY_FOR_SALE

# Include additional data
GET /api/apps/{app-id}/subscriptions?includes=subscriptionLocalizations,prices
```

#### Get App Subscription Groups
```bash
# List subscription groups for an app
GET /api/apps/{app-id}/subscription-groups

# Include subscriptions in groups
GET /api/apps/{app-id}/subscription-groups?includes=subscriptions
```

### 3. App Comparison

#### Compare Multiple Apps
```bash
# Compare subscription statistics across apps
POST /api/apps/compare
Content-Type: application/json

{
  "appIds": [
    "app-id-1",
    "app-id-2", 
    "app-id-3"
  ]
}
```

## Practical Usage Examples

### 1. Managing Multiple Apps

#### Example: E-commerce Company with Multiple Apps
```bash
# 1. First, discover all your apps
curl -X GET "http://localhost:3000/api/apps"

# 2. Search for specific app by bundle ID
curl -X GET "http://localhost:3000/api/apps/search?q=com.ecommerce.mainapp"

# 3. Get detailed summary for the main app
curl -X GET "http://localhost:3000/api/apps/{main-app-id}/summary"

# 4. List all subscriptions for the main app
curl -X GET "http://localhost:3000/api/apps/{main-app-id}/subscriptions"
```

#### Example: Game Studio with Multiple Games
```bash
# 1. List all games (apps)
curl -X GET "http://localhost:3000/api/apps?platform=IOS"

# 2. Compare subscription performance across games
curl -X POST "http://localhost:3000/api/apps/compare" \
  -H "Content-Type: application/json" \
  -d '{
    "appIds": ["game1-id", "game2-id", "game3-id"]
  }'

# 3. Get subscription groups for a specific game
curl -X GET "http://localhost:3000/api/apps/{game-app-id}/subscription-groups"
```

### 2. Creating App-Specific Subscription Groups

```bash
# Create a new subscription group for a specific app
curl -X POST "http://localhost:3000/api/apps/{app-id}/subscription-groups" \
  -H "Content-Type: application/json" \
  -d '{
    "referenceName": "Premium Features"
  }'
```

### 3. App-Filtered Subscription Management

Now when working with subscriptions, you can filter by app:

```bash
# Original global subscription endpoint (all apps)
GET /api/subscriptions

# App-specific subscriptions (recommended for multi-app scenarios)
GET /api/apps/{app-id}/subscriptions

# Create subscription for specific app (use subscription group from that app)
POST /api/subscriptions
{
  "name": "Premium Monthly",
  "productId": "com.yourapp.premium.monthly",
  "subscriptionPeriod": "ONE_MONTH",
  "subscriptionGroupId": "{subscription-group-id-from-specific-app}"
}
```

## Best Practices for Multi-App Management

### 1. App Discovery Workflow
```bash
# Step 1: List all apps to understand your portfolio
GET /api/apps

# Step 2: For each app, get detailed summary
GET /api/apps/{app-id}/summary

# Step 3: Identify apps that need subscription management
# Look for apps with existing subscription groups or that need new ones
```

### 2. Subscription Organization
```bash
# For each app:
# 1. Review existing subscription groups
GET /api/apps/{app-id}/subscription-groups

# 2. Create new groups if needed
POST /api/apps/{app-id}/subscription-groups

# 3. Create subscriptions within appropriate groups
POST /api/subscriptions
```

### 3. Monitoring and Comparison
```bash
# Regular health checks per app
GET /api/apps/{app-id}/summary

# Compare performance across apps
POST /api/apps/compare

# Monitor subscription states per app
GET /api/apps/{app-id}/subscriptions?state=READY_FOR_SALE
```

## App Summary Response Example

```json
{
  "success": true,
  "data": {
    "app": {
      "id": "app-123",
      "type": "apps",
      "attributes": {
        "name": "My Awesome App",
        "bundleId": "com.company.awesomeapp",
        "sku": "AWESOME_APP_SKU"
      }
    },
    "statistics": {
      "totalSubscriptionGroups": 2,
      "totalSubscriptions": 5,
      "subscriptionsByState": {
        "READY_FOR_SALE": 3,
        "WAITING_FOR_REVIEW": 2
      },
      "subscriptionsByPeriod": {
        "ONE_MONTH": 3,
        "ONE_YEAR": 2
      }
    },
    "subscriptionGroups": [...],
    "recentSubscriptions": [...]
  }
}
```

## Integration with Existing Subscription Endpoints

The existing subscription endpoints still work, but now you can:

1. **Filter by App ID**: Use `?appId={app-id}` parameter
2. **Use App-Specific Endpoints**: More intuitive for multi-app scenarios
3. **Leverage App Context**: Subscription groups are now clearly tied to specific apps

### Migration Strategy

If you're already using the service:

1. **Inventory**: Use `GET /api/apps` to see all your apps
2. **Map Existing**: Use `GET /api/apps/{app-id}/subscriptions` to see current subscriptions per app
3. **Organize**: Create clear subscription groups per app if needed
4. **Update Workflows**: Switch to app-specific endpoints for better organization

## Error Handling

Common scenarios when working with multiple apps:

```bash
# App not found
GET /api/apps/invalid-app-id
# Returns: 404 Not Found

# No subscriptions for app
GET /api/apps/{app-id}/subscriptions
# Returns: 200 OK with empty data array

# Invalid subscription group for app
POST /api/subscriptions
{
  "subscriptionGroupId": "group-from-different-app"
}
# Returns: 400 Bad Request - Group doesn't belong to the app
```

This enhanced app management system provides clear separation and organization for managing subscriptions across multiple apps in your Apple Developer account.
