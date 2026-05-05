require('dotenv').config();

const config = {
  // Google Play service account credentials
  serviceAccountKeyPath: process.env.GOOGLE_PLAY_SERVICE_ACCOUNT_KEY_PATH,
  serviceAccountEmail: process.env.GOOGLE_PLAY_SERVICE_ACCOUNT_EMAIL,
  
  // Optional: inline service account key JSON (alternative to file path)
  serviceAccountKey: process.env.GOOGLE_PLAY_SERVICE_ACCOUNT_KEY 
    ? JSON.parse(process.env.GOOGLE_PLAY_SERVICE_ACCOUNT_KEY) 
    : null,
  
  // API scopes required for subscription management
  scopes: ['https://www.googleapis.com/auth/androidpublisher'],
  
  // Rate limiting
  rateLimiting: {
    windowMs: parseInt(process.env.GOOGLE_PLAY_RATE_LIMIT_WINDOW_MS) || 15 * 60 * 1000, // 15 minutes
    maxRequests: parseInt(process.env.GOOGLE_PLAY_RATE_LIMIT_MAX_REQUESTS) || 100
  }
};

// Valid offer phases for Google Play subscription offers
// Based on Google Play Developer API SubscriptionOfferPhase
const OFFER_PHASE_TYPES = {
  FREE_TRIAL: 'SUBSCRIPTION_OFFER_PHASE_TYPE_FREE',
  SINGLE_PAYMENT: 'SUBSCRIPTION_OFFER_PHASE_TYPE_SINGLE_PAYMENT',
  RECURRING_PAYMENT: 'SUBSCRIPTION_OFFER_PHASE_TYPE_RECURRING_PAYMENT'
};

// Valid recurrence modes
const RECURRENCE_MODES = {
  INFINITE: 'SUBSCRIPTION_OFFER_PHASE_RECURRENCE_MODE_INFINITE_RECURRING',
  FINITE: 'SUBSCRIPTION_OFFER_PHASE_RECURRENCE_MODE_FINITE_RECURRING',
  NON_RECURRING: 'SUBSCRIPTION_OFFER_PHASE_RECURRENCE_MODE_NON_RECURRING'
};

// Valid billing period durations (ISO 8601 durations)
const VALID_DURATIONS = [
  'P1W',   // 1 week
  'P1M',   // 1 month
  'P3M',   // 3 months
  'P6M',   // 6 months
  'P1Y'    // 1 year
];

// Mapping from iOS-style durations to ISO 8601 for Google Play.
// Base plan billing periods are restricted (see VALID_DURATIONS), but subscription
// OFFER phase durations accept day-granular values too — e.g. Apple's THREE_DAYS
// round-trips as P3D. For CLI inputs that aren't in this table, see
// normalizeIsoDuration in bulk-create-android-offers.js which also accepts any
// ISO 8601 P<n>[DWMY] form as-is.
const DURATION_MAPPING = {
  'THREE_DAYS': 'P3D',
  'ONE_WEEK': 'P1W',
  'TWO_WEEKS': 'P2W',
  'ONE_MONTH': 'P1M',
  'TWO_MONTHS': 'P2M',
  'THREE_MONTHS': 'P3M',
  'SIX_MONTHS': 'P6M',
  'ONE_YEAR': 'P1Y',
  // Direct ISO 8601 formats also accepted
  'P3D': 'P3D',
  'P1W': 'P1W',
  'P2W': 'P2W',
  'P1M': 'P1M',
  'P2M': 'P2M',
  'P3M': 'P3M',
  'P6M': 'P6M',
  'P1Y': 'P1Y'
};

// Mapping from iOS offer modes to Google Play phase types
const OFFER_MODE_MAPPING = {
  'FREE_TRIAL': OFFER_PHASE_TYPES.FREE_TRIAL,
  'PAY_UP_FRONT': OFFER_PHASE_TYPES.SINGLE_PAYMENT,
  'PAY_AS_YOU_GO': OFFER_PHASE_TYPES.RECURRING_PAYMENT
};

// Valid targeting criteria for offers
const TARGETING_TYPES = {
  NEW_CUSTOMER: 'ACQUISITION_TYPE_NEW_CUSTOMER_ACQUISITION',
  UPGRADE: 'ACQUISITION_TYPE_UPGRADE',
  ALL: null  // No specific targeting
};

// All Google Play supported regions (subset of common ones)
// Full list available at: https://support.google.com/googleplay/android-developer/answer/9859152
const ALL_REGIONS = [
  'US', 'CA', 'GB', 'AU', 'DE', 'FR', 'IT', 'ES', 'NL', 'BE',
  'AT', 'CH', 'SE', 'NO', 'DK', 'FI', 'IE', 'PT', 'PL', 'CZ',
  'HU', 'RO', 'BG', 'SK', 'SI', 'HR', 'LT', 'LV', 'EE', 'GR',
  'CY', 'MT', 'LU', 'IS', 'JP', 'KR', 'TW', 'HK', 'SG', 'MY',
  'TH', 'PH', 'ID', 'VN', 'IN', 'PK', 'BD', 'BR', 'MX', 'AR',
  'CL', 'CO', 'PE', 'VE', 'ZA', 'EG', 'NG', 'KE', 'RU', 'UA',
  'TR', 'SA', 'AE', 'IL', 'NZ'
];

// Validate required configuration
const validateConfig = () => {
  const hasKeyPath = config.serviceAccountKeyPath;
  const hasInlineKey = config.serviceAccountKey;
  
  if (!hasKeyPath && !hasInlineKey) {
    throw new Error(
      'Missing Google Play configuration: Either GOOGLE_PLAY_SERVICE_ACCOUNT_KEY_PATH or GOOGLE_PLAY_SERVICE_ACCOUNT_KEY must be set'
    );
  }
  
  return true;
};

module.exports = {
  config,
  validateConfig,
  OFFER_PHASE_TYPES,
  RECURRENCE_MODES,
  VALID_DURATIONS,
  DURATION_MAPPING,
  OFFER_MODE_MAPPING,
  TARGETING_TYPES,
  ALL_REGIONS
};
