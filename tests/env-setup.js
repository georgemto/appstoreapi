// Set test environment variables BEFORE modules load
process.env.NODE_ENV = 'test';
process.env.LOG_LEVEL = 'error'; // Reduce log noise during tests
process.env.APPSTORE_TEAM_ID = 'test-team-id';
process.env.APPSTORE_KEY_ID = 'test-key-id';
process.env.APPSTORE_PRIVATE_KEY_PATH = './test-key.p8';
process.env.APPSTORE_ISSUER_ID = 'test-issuer-id';
process.env.API_BASE_URL = 'https://api.appstoreconnect.apple.com/v1';
