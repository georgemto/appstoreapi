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
    subscriptionPromotionalOffers: '/subscriptionPromotionalOffers',
    apps: '/apps',
    inAppPurchases: '/inAppPurchases'
  },
  
  // Rate limiting
  rateLimiting: {
    windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS) || 15 * 60 * 1000, // 15 minutes
    maxRequests: parseInt(process.env.RATE_LIMIT_MAX_REQUESTS) || 100
  }
};

// All App Store Connect territories (ISO 3166-1 alpha-3 codes)
// Source: App Store Connect API TerritoryCode enum
const ALL_TERRITORIES = [
  'ABW', 'AFG', 'AGO', 'AIA', 'ALB', 'AND', 'ANT', 'ARE', 'ARG', 'ARM',
  'ASM', 'ATG', 'AUS', 'AUT', 'AZE', 'BDI', 'BEL', 'BEN', 'BES', 'BFA',
  'BGD', 'BGR', 'BHR', 'BHS', 'BIH', 'BLR', 'BLZ', 'BMU', 'BOL', 'BRA',
  'BRB', 'BRN', 'BTN', 'BWA', 'CAF', 'CAN', 'CHE', 'CHL', 'CHN', 'CIV',
  'CMR', 'COD', 'COG', 'COK', 'COL', 'COM', 'CPV', 'CRI', 'CUB', 'CUW',
  'CXR', 'CYM', 'CYP', 'CZE', 'DEU', 'DJI', 'DMA', 'DNK', 'DOM', 'DZA',
  'ECU', 'EGY', 'ERI', 'ESP', 'EST', 'ETH', 'FIN', 'FJI', 'FLK', 'FRA',
  'FRO', 'FSM', 'GAB', 'GBR', 'GEO', 'GGY', 'GHA', 'GIB', 'GIN', 'GLP',
  'GMB', 'GNB', 'GNQ', 'GRC', 'GRD', 'GRL', 'GTM', 'GUF', 'GUM', 'GUY',
  'HKG', 'HND', 'HRV', 'HTI', 'HUN', 'IDN', 'IMN', 'IND', 'IRL', 'IRQ',
  'ISL', 'ISR', 'ITA', 'JAM', 'JEY', 'JOR', 'JPN', 'KAZ', 'KEN', 'KGZ',
  'KHM', 'KIR', 'KNA', 'KOR', 'KWT', 'LAO', 'LBN', 'LBR', 'LBY', 'LCA',
  'LIE', 'LKA', 'LSO', 'LTU', 'LUX', 'LVA', 'MAC', 'MAR', 'MCO', 'MDA',
  'MDG', 'MDV', 'MEX', 'MHL', 'MKD', 'MLI', 'MLT', 'MMR', 'MNE', 'MNG',
  'MNP', 'MOZ', 'MRT', 'MSR', 'MTQ', 'MUS', 'MWI', 'MYS', 'MYT', 'NAM',
  'NCL', 'NER', 'NFK', 'NGA', 'NIC', 'NIU', 'NLD', 'NOR', 'NPL', 'NRU',
  'NZL', 'OMN', 'PAK', 'PAN', 'PER', 'PHL', 'PLW', 'PNG', 'POL', 'PRI',
  'PRT', 'PRY', 'PSE', 'PYF', 'QAT', 'REU', 'ROU', 'RUS', 'RWA', 'SAU',
  'SEN', 'SGP', 'SHN', 'SLB', 'SLE', 'SLV', 'SMR', 'SOM', 'SPM', 'SRB',
  'SSD', 'STP', 'SUR', 'SVK', 'SVN', 'SWE', 'SWZ', 'SXM', 'SYC', 'TCA',
  'TCD', 'TGO', 'THA', 'TJK', 'TKM', 'TLS', 'TON', 'TTO', 'TUN', 'TUR',
  'TUV', 'TWN', 'TZA', 'UGA', 'UKR', 'UMI', 'URY', 'USA', 'UZB', 'VAT',
  'VCT', 'VEN', 'VGB', 'VIR', 'VNM', 'VUT', 'WLF', 'WSM', 'YEM', 'ZAF',
  'ZMB', 'ZWE'
];

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
  validateConfig,
  ALL_TERRITORIES
};
