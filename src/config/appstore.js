require('dotenv').config();

const config = {
  teamId: process.env.APPSTORE_TEAM_ID,
  keyId: process.env.APPSTORE_KEY_ID,
  privateKeyPath: process.env.APPSTORE_PRIVATE_KEY_PATH,
  issuerId: process.env.APPSTORE_ISSUER_ID,
  apiBaseUrl: process.env.API_BASE_URL || 'https://api.appstoreconnect.apple.com/v1',
  
  // JWT token configuration
  tokenExpiration: 10 * 60, // 20 minutes (Apple's maximum)
  
  // API endpoints
  endpoints: {
    subscriptions: '/subscriptions',
    subscriptionGroups: '/subscriptionGroups',
    subscriptionPrices: '/subscriptionPrices',
    apps: '/apps',
    inAppPurchases: '/inAppPurchases'
  },
  
  // Rate limiting
  rateLimiting: {
    windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS) || 15 * 60 * 1000, // 15 minutes
    maxRequests: parseInt(process.env.RATE_LIMIT_MAX_REQUESTS) || 100
  }
};

// Validate required configuration
const validateConfig = () => {
  const requiredFields = ['teamId', 'keyId', 'privateKeyPath', 'issuerId'];
  const missingFields = requiredFields.filter(field => !config[field]);
  
  if (missingFields.length > 0) {
    throw new Error(`Missing required App Store Connect configuration: ${missingFields.join(', ')}`);
  }
};

module.exports = {
  config,
  validateConfig
};
