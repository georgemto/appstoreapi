# App Store Connect API Implementation

This project implements a comprehensive Node.js web service that provides access to Apple's App Store Connect APIs for managing apps, builds, certificates, devices, and beta testing.

## 📋 Overview

The server integrates the generated App Store Connect API client with a robust Express.js application, providing RESTful endpoints for managing:

- **Apps**: Application metadata and management
- **Subscriptions**: In-app purchase subscriptions
- **Builds**: Build management and TestFlight distribution
- **Certificates**: Code signing certificates
- **Devices**: Device registration and management
- **Beta Testing**: TestFlight groups and testers

## 🚀 Getting Started

### Prerequisites

- Node.js 16+ 
- Apple Developer Account
- App Store Connect API Key

### Installation

1. **Install Dependencies**
   ```bash
   npm install
   
   # Install the generated API client
   cd apis && npm install && npm run build
   cd .. && npm install ./apis
   ```

2. **Environment Configuration**
   
   Create a `.env` file with your App Store Connect credentials:
   ```env
   # App Store Connect API Configuration
   APPSTORE_ISSUER_ID=your-issuer-id
   APPSTORE_KEY_ID=your-key-id
   APPSTORE_PRIVATE_KEY_PATH=./keys/AuthKey_XXXXXXXX.p8
   APPSTORE_API_BASE_URL=https://api.appstoreconnect.apple.com
   
   # Server Configuration
   PORT=3000
   NODE_ENV=development
   
   # Optional API Key Protection
   API_KEY=your-optional-api-key
   
   # CORS Configuration
   CORS_ORIGIN=*
   ```

3. **Place Your API Key**
   
   Place your App Store Connect API private key file in the `keys/` directory:
   ```
   keys/
   └── AuthKey_XXXXXXXX.p8
   ```

### Running the Server

```bash
# Development mode with auto-reload
npm run dev

# Production mode
npm start

# Run tests
npm test
```

## 📚 API Documentation

### Base URL
```
http://localhost:3000/api
```

### Authentication
All requests require a valid JWT token generated using your App Store Connect API key. The server handles authentication automatically using the configured credentials.

---

## 🏗️ API Endpoints

### Apps API (`/api/apps`)

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/apps` | List all apps with filtering |
| `GET` | `/api/apps/:id` | Get specific app details |
| `GET` | `/api/apps/:id/summary` | Get app summary with statistics |
| `GET` | `/api/apps/:id/subscriptions` | Get app's subscriptions |
| `GET` | `/api/apps/search?q=...` | Search apps by name or bundle ID |
| `POST` | `/api/apps/compare` | Compare multiple apps |

#### Example: Get All Apps
```bash
curl -X GET "http://localhost:3000/api/apps?limit=10&include=appStoreVersions"
```

#### Example Response:
```json
{
  "success": true,
  "data": [
    {
      "type": "apps",
      "id": "123456789",
      "attributes": {
        "name": "My App",
        "bundleId": "com.example.myapp",
        "sku": "MYAPP123",
        "primaryLocale": "en-US"
      }
    }
  ],
  "links": {
    "self": "https://api.appstoreconnect.apple.com/v1/apps"
  }
}
```

---

### Builds API (`/api/builds`)

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/builds` | List all builds with filtering |
| `GET` | `/api/builds/:id` | Get specific build details |
| `PATCH` | `/api/builds/:id` | Update build settings |
| `GET` | `/api/builds/:id/app` | Get build's associated app |
| `GET` | `/api/builds/summary` | Get builds statistics |

#### Example: List Builds for App
```bash
curl -X GET "http://localhost:3000/api/builds?app=123456789&processingState=VALID"
```

#### Example: Update Build
```bash
curl -X PATCH "http://localhost:3000/api/builds/987654321" \
  -H "Content-Type: application/json" \
  -d '{
    "data": {
      "type": "builds",
      "id": "987654321",
      "attributes": {
        "usesNonExemptEncryption": false
      }
    }
  }'
```

---

### Certificates API (`/api/certificates`)

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/certificates` | List all certificates |
| `POST` | `/api/certificates` | Create new certificate |
| `GET` | `/api/certificates/:id` | Get certificate details |
| `DELETE` | `/api/certificates/:id` | Revoke certificate |
| `GET` | `/api/certificates/expiring` | Get expiring certificates |
| `GET` | `/api/certificates/summary` | Get certificates statistics |

#### Example: Create Development Certificate
```bash
curl -X POST "http://localhost:3000/api/certificates" \
  -H "Content-Type: application/json" \
  -d '{
    "data": {
      "type": "certificates",
      "attributes": {
        "certificateType": "IOS_DEVELOPMENT",
        "csrContent": "-----BEGIN CERTIFICATE REQUEST-----\n..."
      }
    }
  }'
```

#### Example: Get Expiring Certificates
```bash
curl -X GET "http://localhost:3000/api/certificates/expiring?days=30"
```

---

### Devices API (`/api/devices`)

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/devices` | List all devices |
| `POST` | `/api/devices` | Register new device |
| `GET` | `/api/devices/:id` | Get device details |
| `PATCH` | `/api/devices/:id` | Update device |
| `GET` | `/api/devices/check/:udid` | Check device availability |
| `GET` | `/api/devices/summary` | Get device statistics |

#### Example: Register Device
```bash
curl -X POST "http://localhost:3000/api/devices" \
  -H "Content-Type: application/json" \
  -d '{
    "data": {
      "type": "devices",
      "attributes": {
        "name": "John's iPhone",
        "platform": "IOS",
        "udid": "1234567890abcdef1234567890abcdef12345678"
      }
    }
  }'
```

#### Example: Check Device Availability
```bash
curl -X GET "http://localhost:3000/api/devices/check/1234567890abcdef1234567890abcdef12345678"
```

---

### Beta Testing API (`/api/beta`)

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/beta/groups` | List beta groups |
| `POST` | `/api/beta/groups` | Create beta group |
| `GET` | `/api/beta/groups/:id` | Get beta group details |
| `PATCH` | `/api/beta/groups/:id` | Update beta group |
| `DELETE` | `/api/beta/groups/:id` | Delete beta group |
| `GET` | `/api/beta/testers` | List beta testers |
| `POST` | `/api/beta/testers` | Add beta tester |
| `DELETE` | `/api/beta/testers/:id` | Remove beta tester |
| `GET` | `/api/beta/summary` | Get beta testing statistics |

#### Example: Create Beta Group
```bash
curl -X POST "http://localhost:3000/api/beta/groups" \
  -H "Content-Type: application/json" \
  -d '{
    "data": {
      "type": "betaGroups",
      "attributes": {
        "name": "QA Team",
        "isInternalGroup": true
      },
      "relationships": {
        "app": {
          "data": {
            "type": "apps",
            "id": "123456789"
          }
        }
      }
    }
  }'
```

#### Example: Add Beta Tester
```bash
curl -X POST "http://localhost:3000/api/beta/testers" \
  -H "Content-Type: application/json" \
  -d '{
    "data": {
      "type": "betaTesters",
      "attributes": {
        "email": "tester@example.com",
        "firstName": "John",
        "lastName": "Doe"
      }
    }
  }'
```

---

### Subscriptions API (`/api/subscriptions`)

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/subscriptions` | List all subscriptions |
| `POST` | `/api/subscriptions` | Create subscription |
| `GET` | `/api/subscriptions/:id` | Get subscription details |
| `PUT` | `/api/subscriptions/:id` | Update subscription |
| `DELETE` | `/api/subscriptions/:id` | Delete subscription |
| `GET` | `/api/subscriptions/groups` | List subscription groups |

#### Example: Create Subscription
```bash
curl -X POST "http://localhost:3000/api/subscriptions" \
  -H "Content-Type: application/json" \
  -d '{
    "data": {
      "type": "subscriptions",
      "attributes": {
        "productId": "premium_monthly",
        "name": "Premium Monthly",
        "subscriptionPeriod": "ONE_MONTH"
      },
      "relationships": {
        "group": {
          "data": {
            "type": "subscriptionGroups",
            "id": "group123"
          }
        }
      }
    }
  }'
```

---

## 🔍 Query Parameters

### Common Filtering Options

#### Pagination
- `limit`: Number of results (1-200)
- `sort`: Sort order (field names with optional `-` prefix for descending)

#### Includes
- `include`: Related resources to include (comma-separated)

#### Example with Multiple Parameters
```bash
curl -X GET "http://localhost:3000/api/builds?app=123456789&processingState=VALID&limit=50&include=app,betaAppReviewSubmission&sort=-uploadedDate"
```

---

## 🔐 Security Features

- **JWT Authentication**: Automatic token generation and refresh
- **Rate Limiting**: Built-in rate limiting for API protection
- **Request Validation**: Comprehensive input validation using Joi
- **Error Handling**: Structured error responses with proper HTTP status codes
- **Logging**: Detailed request/response logging with Winston
- **Security Headers**: Helmet.js for security headers
- **CORS**: Configurable CORS settings

---

## 📊 Health Monitoring

### Health Check Endpoints
- `GET /health` - General server health
- `GET /api/builds/health` - Builds API health
- `GET /api/certificates/health` - Certificates API health
- `GET /api/devices/health` - Devices API health
- `GET /api/beta/health` - Beta testing API health

### Summary Endpoints
- `GET /api/builds/summary` - Build statistics
- `GET /api/certificates/summary` - Certificate statistics
- `GET /api/devices/summary` - Device statistics
- `GET /api/beta/summary` - Beta testing statistics

---

## 🚨 Error Handling

The API returns structured error responses:

```json
{
  "success": false,
  "error": {
    "message": "Resource not found",
    "type": "NOT_FOUND",
    "details": "Build with ID 123 does not exist"
  }
}
```

### Common Error Types
- `VALIDATION_ERROR`: Invalid request data
- `NOT_FOUND`: Resource not found
- `RATE_LIMIT_ERROR`: Too many requests
- `AUTHENTICATION_ERROR`: Invalid credentials
- `APPLE_API_ERROR`: Error from Apple's API

---

## 🛠️ Development

### Project Structure
```
src/
├── controllers/        # Route handlers
├── routes/            # Express route definitions
├── services/          # Business logic and API clients
├── middleware/        # Custom middleware
├── utils/            # Utility functions
└── config/           # Configuration files

apis/                 # Generated App Store Connect API client
├── src/
│   ├── api/         # API classes
│   ├── model/       # Data models
│   └── index.js     # Main export
└── docs/            # API documentation
```

### Adding New APIs

1. **Update the API Client**: Add new methods to `src/services/appstore-api-client.js`
2. **Create Controller**: Add controller in `src/controllers/`
3. **Define Routes**: Add routes in `src/routes/`
4. **Register Routes**: Update `server.js` to include new routes
5. **Add Validation**: Define Joi schemas for request validation

### Testing

```bash
# Run all tests
npm test

# Run with coverage
npm run test:coverage

# Run specific test file
npm test -- tests/builds.test.js
```

---

## 📈 Performance Considerations

- **Connection Pooling**: Efficient HTTP connection management
- **Caching**: Response caching for frequently accessed data
- **Pagination**: Large result sets are automatically paginated
- **Rate Limiting**: Respect Apple's API rate limits
- **Retry Logic**: Automatic retry for transient failures

---

## 🔧 Configuration

### Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `PORT` | Server port | `3000` |
| `NODE_ENV` | Environment | `development` |
| `APPSTORE_ISSUER_ID` | Apple issuer ID | Required |
| `APPSTORE_KEY_ID` | Apple key ID | Required |
| `APPSTORE_PRIVATE_KEY_PATH` | Path to private key | Required |
| `API_KEY` | Optional API key | Optional |
| `CORS_ORIGIN` | CORS origin | `*` |

### Rate Limiting Configuration

The server implements tiered rate limiting:
- **General**: 1000 requests per hour
- **Write Operations**: 100 requests per hour
- **Create Operations**: 50 requests per hour

---

## 🐛 Troubleshooting

### Common Issues

1. **Authentication Errors**
   - Verify App Store Connect API key configuration
   - Check key permissions in App Store Connect
   - Ensure key file is in correct location

2. **Rate Limiting**
   - Implement exponential backoff
   - Use pagination for large datasets
   - Cache frequently accessed data

3. **Network Issues**
   - Check network connectivity to Apple's APIs
   - Verify firewall settings
   - Use appropriate timeout values

### Debug Mode

Enable debug logging:
```bash
DEBUG=appstore:* npm run dev
```

---

## 📄 License

This project is licensed under the MIT License. See the LICENSE file for details.

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Submit a pull request

---

## 📞 Support

For issues and questions:
- Check the [App Store Connect API documentation](https://developer.apple.com/documentation/appstoreconnectapi)
- Review server logs for detailed error information
- Use health check endpoints to verify API status