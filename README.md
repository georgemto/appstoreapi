# Apple App Store Connect API Service

A comprehensive Node.js web service for managing Apple App Store Connect subscription products through the App Store Connect API.

## Features

- ✅ **Complete CRUD Operations** for subscription products
- ✅ **JWT Authentication** with Apple App Store Connect API
- ✅ **Rate Limiting** and security middleware
- ✅ **Input Validation** with comprehensive error handling
- ✅ **Logging** with Winston for debugging and monitoring
- ✅ **Pricing Management** for subscriptions
- ✅ **Health Checks** and service monitoring
- ✅ **Graceful Shutdown** handling

## Prerequisites

1. **Apple Developer Account** with App Store Connect access
2. **App Store Connect API Key** (private key file `.p8`)
3. **Node.js** (version 16 or higher)
4. **npm** package manager

## Quick Setup

### 1. Clone and Install

```bash
# Clone the repository
git clone <repository-url>
cd appstoreapi

# Install dependencies
npm install
```

### 2. Configure Environment

```bash
# Copy the example environment file
cp .env.example .env

# Edit .env with your configuration
nano .env
```

Fill in your App Store Connect API credentials:

```env
# App Store Connect API Configuration
APPSTORE_TEAM_ID=your_team_id_here
APPSTORE_KEY_ID=your_key_id_here
APPSTORE_PRIVATE_KEY_PATH=./keys/AuthKey_your_key_id.p8
APPSTORE_ISSUER_ID=your_issuer_id_here

# Server Configuration
PORT=3000
NODE_ENV=development

# API Configuration
API_BASE_URL=https://api.appstoreconnect.apple.com/v1
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100

# Logging
LOG_LEVEL=info
```

### 3. Add Your Private Key

Place your App Store Connect API private key (`.p8` file) in the `keys/` directory:

```bash
# Create keys directory if it doesn't exist
mkdir -p keys

# Copy your private key file
cp ~/Downloads/AuthKey_XXXXXXXXXX.p8 keys/
```

### 4. Start the Server

```bash
# Development mode with auto-reload
npm run dev

# Production mode
npm start
```

The server will start on `http://localhost:3000`

### 5. Troubleshoot Authentication (If Needed)

If you get authentication errors, use the built-in debugger:

```bash
# Run the authentication debugger
npm run debug-auth
```

This will check your configuration and help identify any issues. See `AUTHENTICATION_SETUP.md` for detailed troubleshooting.

## API Endpoints

### Health Check
- `GET /health` - Server health status
- `GET /api/subscriptions/health` - Service health with configuration check

### Subscription Management
- `GET /api/subscriptions` - List all subscriptions
- `GET /api/subscriptions/:id` - Get specific subscription
- `POST /api/subscriptions` - Create new subscription
- `PUT /api/subscriptions/:id` - Update subscription
- `DELETE /api/subscriptions/:id` - Delete subscription

### Pricing Management
- `GET /api/subscriptions/:id/pricing` - Get subscription pricing
- `PUT /api/subscriptions/:id/pricing` - Update subscription pricing

### Utility Endpoints
- `GET /api/subscriptions/groups` - List subscription groups

## API Usage Examples

### Create a Subscription

```bash
curl -X POST http://localhost:3000/api/subscriptions \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Premium Monthly",
    "productId": "com.yourapp.premium.monthly",
    "subscriptionPeriod": "ONE_MONTH",
    "subscriptionGroupId": "your-subscription-group-id",
    "reviewNote": "Monthly premium subscription",
    "familySharable": false
  }'
```

### Get All Subscriptions

```bash
curl -X GET "http://localhost:3000/api/subscriptions?limit=50&includes=subscriptionLocalizations,prices"
```

### Update a Subscription

```bash
curl -X PUT http://localhost:3000/api/subscriptions/subscription-id \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Premium Monthly Updated",
    "familySharable": true
  }'
```

### Get Subscription Pricing

```bash
curl -X GET "http://localhost:3000/api/subscriptions/subscription-id/pricing?territory=USA"
```

## Configuration Options

### Rate Limiting

The service includes multiple layers of rate limiting:

- **General API**: 100 requests per 15 minutes
- **Write Operations**: 20 requests per 5 minutes
- **Subscription Creation**: 5 requests per 15 minutes

### Logging

Logs are written to:
- `logs/error.log` - Error level logs
- `logs/combined.log` - All logs
- Console output in development mode

Configure log level with `LOG_LEVEL` environment variable:
- `error`, `warn`, `info`, `debug`

### Security Features

- **Helmet.js** for security headers
- **CORS** configuration
- **Request validation** with Joi schemas
- **Input sanitization**
- **Error handling** without data leaks

## Development

### Project Structure

```
appstoreapi/
├── src/
│   ├── config/         # Configuration files
│   ├── controllers/    # Request handlers
│   ├── middleware/     # Custom middleware
│   ├── routes/         # API routes
│   ├── services/       # Business logic
│   └── utils/          # Utilities and helpers
├── tests/              # Test files
├── keys/               # Private key storage
├── logs/               # Log files
├── .env                # Environment variables
├── package.json
└── server.js           # Main application entry
```

### Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch
```

### Available Scripts

```bash
npm start        # Start production server
npm run dev      # Start development server with nodemon
npm test         # Run test suite
npm run test:watch # Run tests in watch mode
```

## Apple App Store Connect API Reference

This service implements the following Apple App Store Connect API resources:

- **Subscriptions** - In-app purchase subscriptions
- **Subscription Groups** - Grouping of related subscriptions
- **Subscription Prices** - Pricing and territory information

### Required Apple API Permissions

Your App Store Connect API key needs the following permissions:
- **App Store Connect API**: Developer role or higher
- **Access to Apps**: The apps you want to manage subscriptions for

### Subscription Periods

Valid subscription periods:
- `ONE_WEEK`
- `ONE_MONTH`
- `TWO_MONTHS`
- `THREE_MONTHS`
- `SIX_MONTHS`
- `ONE_YEAR`

## Error Handling

The service provides comprehensive error handling with proper HTTP status codes:

- `400` - Bad Request (validation errors)
- `401` - Unauthorized (authentication issues)
- `403` - Forbidden (insufficient permissions)
- `404` - Not Found (resource doesn't exist)
- `409` - Conflict (duplicate resources)
- `429` - Too Many Requests (rate limiting)
- `500` - Internal Server Error

Example error response:
```json
{
  "success": false,
  "error": {
    "message": "Subscription name is required",
    "type": "VALIDATION_ERROR"
  }
}
```

## Monitoring and Health Checks

### Health Endpoints

- `GET /health` - Basic server health
- `GET /api/subscriptions/health` - Service health with configuration validation

### Logging

All requests and responses are logged with:
- Request method, URL, IP address
- Response status code and duration
- Error details and stack traces

### Graceful Shutdown

The service handles shutdown signals gracefully:
- Stops accepting new requests
- Completes ongoing requests
- Closes database connections
- Exits cleanly

## Production Deployment

### Environment Variables for Production

```env
NODE_ENV=production
PORT=3000
LOG_LEVEL=warn

# Security
API_KEY=your-optional-api-key
CORS_ORIGIN=https://yourdomain.com

# Rate limiting (adjust as needed)
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=1000
```

### Docker Deployment

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
```

### Security Considerations

1. **Store private keys securely** - Use environment variables or secret management
2. **Enable HTTPS** in production
3. **Configure CORS** appropriately
4. **Set up monitoring** and alerting
5. **Regular security updates**

## Troubleshooting

### Common Issues

1. **"Private key file not found"**
   - Ensure the `.p8` file is in the correct location
   - Check file permissions

2. **"Authentication failed"**
   - Verify Team ID, Key ID, and Issuer ID
   - Ensure the private key matches the Key ID

3. **Rate limit exceeded**
   - Apple has strict rate limits
   - Implement exponential backoff in your client

4. **Configuration validation failed**
   - Check all required environment variables are set
   - Verify the format of IDs and paths

### Debug Mode

Enable debug logging:
```bash
LOG_LEVEL=debug npm run dev
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Add tests for new functionality
4. Ensure all tests pass
5. Submit a pull request

## License

MIT License - see LICENSE file for details.

## Support

For issues related to:
- **This service**: Create an issue in this repository
- **Apple App Store Connect API**: Consult Apple's documentation
- **App Store Connect**: Use Apple Developer Support
