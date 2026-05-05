# AGENTS.md

## Build/Test Commands
- `npm install` - Install dependencies
- `npm test` - Run all tests with Jest
- `npm test -- tests/subscriptions.test.js` - Run a single test file
- `npm test -- -t "should return subscription by ID"` - Run a single test by name
- `npm test:watch` - Run tests in watch mode
- `npm run dev` - Start development server with nodemon
- `npm start` - Start production server

## Code Style
- **Imports**: Use `require()` (CommonJS). Order: external packages, then local modules (config, services, utils).
- **Formatting**: 2-space indentation. Single quotes for strings. No semicolons optional but be consistent.
- **Naming**: camelCase for variables/functions, PascalCase for classes. Descriptive names (e.g., `getAllSubscriptions`, `SubscriptionService`).
- **Architecture**: MVC pattern - routes -> controllers -> services. Controllers handle HTTP, services contain business logic.
- **Error Handling**: Use custom error classes from `src/utils/errors.js` (ValidationError, NotFoundError, etc.). Wrap async handlers with `handleAsyncError()`. Throw errors with appropriate status codes.
- **Logging**: Use winston logger from `src/utils/logger.js`. Log info for success, error for failures.
- **Validation**: Use Joi schemas in `src/middleware/validation.js`. Validate in middleware before controllers.
- **Testing**: Jest with supertest. Mock services with `jest.mock()`. Tests go in `tests/` directory with `.test.js` suffix.
- **API Responses**: Return `{ success: true/false, data, message, error }` format consistently.
- **Emojis**: Do not use emojis in code, comments, commit messages, or documentation.

## Testing & Production Guidelines

### iOS Testing
- **CRITICAL: ONLY use bundle ID `com.vtech.plus.inapp.ios.test3` for ALL iOS testing purposes**
- **NEVER use any other bundle IDs for iOS testing**, including:
  - `com.vtech.plus` (production app with live subscriptions)
  - `com.vtech.plus.uat` (UAT environment)
  - `com.vtech.plus.inapp.test32` (other test environment)
  - `com.vtech.vcare.uat` (other app)

### Android Testing
- **CRITICAL: ONLY use application ID `com.vtech.plus.inapp.test3` for ALL Android testing purposes**
- **NEVER use any other application IDs for Android testing**
