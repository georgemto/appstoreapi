// Test setup file for Jest

// Set test environment variables
process.env.NODE_ENV = 'test';
process.env.LOG_LEVEL = 'error'; // Reduce log noise during tests
process.env.APPSTORE_TEAM_ID = 'test-team-id';
process.env.APPSTORE_KEY_ID = 'test-key-id';
process.env.APPSTORE_PRIVATE_KEY_PATH = './test-key.p8';
process.env.APPSTORE_ISSUER_ID = 'test-issuer-id';

// Mock console methods to reduce noise in tests
global.console = {
  ...console,
  log: jest.fn(),
  debug: jest.fn(),
  info: jest.fn(),
  warn: jest.fn(),
  error: jest.fn(),
};

// Global test timeout
jest.setTimeout(10000);

// Clean up after each test
afterEach(() => {
  jest.clearAllMocks();
});
