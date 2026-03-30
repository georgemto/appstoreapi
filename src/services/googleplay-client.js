const { google } = require('googleapis');
const fs = require('fs');
const { config, validateConfig } = require('../config/googleplay');
const { GooglePlayAPIError, ValidationError } = require('../utils/errors');
const logger = require('../utils/logger');

class GooglePlayClient {
  constructor() {
    this.androidPublisher = null;
    this.authClient = null;
    this.initialized = false;
  }

  /**
   * Initialize the Google Play API client with service account credentials
   */
  async initialize() {
    if (this.initialized) {
      return;
    }

    try {
      validateConfig();

      let credentials;

      // Load credentials from file or inline JSON
      if (config.serviceAccountKey) {
        credentials = config.serviceAccountKey;
      } else if (config.serviceAccountKeyPath) {
        const keyFile = fs.readFileSync(config.serviceAccountKeyPath, 'utf8');
        credentials = JSON.parse(keyFile);
      }

      // Create JWT auth client
      this.authClient = new google.auth.GoogleAuth({
        credentials,
        scopes: config.scopes
      });

      // Initialize the Android Publisher API
      this.androidPublisher = google.androidpublisher({
        version: 'v3',
        auth: this.authClient
      });

      this.initialized = true;
      logger.info('Google Play API client initialized successfully');
    } catch (error) {
      logger.error('Failed to initialize Google Play API client', {
        error: error.message
      });
      throw new GooglePlayAPIError(
        `Failed to initialize Google Play API: ${error.message}`,
        'INITIALIZATION_ERROR'
      );
    }
  }

  /**
   * Ensure the client is initialized before making API calls
   */
  async ensureInitialized() {
    if (!this.initialized) {
      await this.initialize();
    }
  }

  /**
   * Get all subscriptions for a package
   * @param {string} packageName - The Android package name (application ID)
   * @returns {object} List of subscriptions
   */
  async getSubscriptions(packageName) {
    await this.ensureInitialized();

    try {
      const response = await this.androidPublisher.monetization.subscriptions.list({
        packageName
      });

      logger.info(`Retrieved subscriptions for package ${packageName}`, {
        count: response.data.subscriptions?.length || 0
      });

      return response.data;
    } catch (error) {
      this.handleApiError(error, 'getSubscriptions', { packageName });
    }
  }

  /**
   * Get a specific subscription by product ID
   * @param {string} packageName - The Android package name
   * @param {string} productId - The subscription product ID
   * @returns {object} Subscription details
   */
  async getSubscription(packageName, productId) {
    await this.ensureInitialized();

    try {
      const response = await this.androidPublisher.monetization.subscriptions.get({
        packageName,
        productId
      });

      logger.info(`Retrieved subscription ${productId} for package ${packageName}`);
      return response.data;
    } catch (error) {
      this.handleApiError(error, 'getSubscription', { packageName, productId });
    }
  }

  /**
   * Create a new subscription
   * @param {string} packageName - The Android package name
   * @param {string} productId - The subscription product ID
   * @param {object} subscriptionData - The subscription configuration
   * @returns {object} Created subscription
   */
  async createSubscription(packageName, productId, subscriptionData, regionsVersion) {
    await this.ensureInitialized();

    if (!regionsVersion) {
      logger.warn('No regionsVersion provided for createSubscription, falling back to 2022/02. Currency mismatches may occur.', {
        packageName,
        productId
      });
    }

    try {
      const response = await this.androidPublisher.monetization.subscriptions.create({
        packageName,
        productId,
        'regionsVersion.version': regionsVersion || '2022/02',
        requestBody: subscriptionData
      });

      logger.info(`Created subscription ${productId} for package ${packageName}`);
      return response.data;
    } catch (error) {
      this.handleApiError(error, 'createSubscription', { packageName, productId });
    }
  }

  /**
   * Activate a base plan for a subscription
   * @param {string} packageName - The Android package name
   * @param {string} productId - The subscription product ID
   * @param {string} basePlanId - The base plan ID
   * @returns {object} Activated subscription
   */
  async activateBasePlan(packageName, productId, basePlanId) {
    await this.ensureInitialized();

    try {
      const response = await this.androidPublisher.monetization.subscriptions.basePlans.activate({
        packageName,
        productId,
        basePlanId
      });

      logger.info(`Activated base plan ${basePlanId} for ${productId} in ${packageName}`);
      return response.data;
    } catch (error) {
      this.handleApiError(error, 'activateBasePlan', { packageName, productId, basePlanId });
    }
  }

  /**
   * Create a new subscription offer (base plan offer)
   * @param {string} packageName - The Android package name
   * @param {string} productId - The subscription product ID
   * @param {string} basePlanId - The base plan ID
   * @param {string} offerId - The offer ID to create
   * @param {object} offerData - The offer configuration
   * @returns {object} Created offer
   */
  async createSubscriptionOffer(packageName, productId, basePlanId, offerId, offerData) {
    await this.ensureInitialized();

    try {
      const response = await this.androidPublisher.monetization.subscriptions.basePlans.offers.create({
        packageName,
        productId,
        basePlanId,
        offerId,
        requestBody: offerData
      });

      logger.info(`Created subscription offer ${offerId}`, {
        packageName,
        productId,
        basePlanId
      });

      return response.data;
    } catch (error) {
      this.handleApiError(error, 'createSubscriptionOffer', {
        packageName,
        productId,
        basePlanId,
        offerId
      });
    }
  }

  /**
   * Get all offers for a base plan
   * @param {string} packageName - The Android package name
   * @param {string} productId - The subscription product ID
   * @param {string} basePlanId - The base plan ID
   * @returns {object} List of offers
   */
  async getSubscriptionOffers(packageName, productId, basePlanId) {
    await this.ensureInitialized();

    try {
      const response = await this.androidPublisher.monetization.subscriptions.basePlans.offers.list({
        packageName,
        productId,
        basePlanId
      });

      logger.info(`Retrieved offers for base plan ${basePlanId}`, {
        packageName,
        productId,
        count: response.data.subscriptionOffers?.length || 0
      });

      return response.data;
    } catch (error) {
      this.handleApiError(error, 'getSubscriptionOffers', {
        packageName,
        productId,
        basePlanId
      });
    }
  }

  /**
   * Get a specific offer
   * @param {string} packageName - The Android package name
   * @param {string} productId - The subscription product ID
   * @param {string} basePlanId - The base plan ID
   * @param {string} offerId - The offer ID
   * @returns {object} Offer details
   */
  async getSubscriptionOffer(packageName, productId, basePlanId, offerId) {
    await this.ensureInitialized();

    try {
      const response = await this.androidPublisher.monetization.subscriptions.basePlans.offers.get({
        packageName,
        productId,
        basePlanId,
        offerId
      });

      logger.info(`Retrieved offer ${offerId}`, {
        packageName,
        productId,
        basePlanId
      });

      return response.data;
    } catch (error) {
      this.handleApiError(error, 'getSubscriptionOffer', {
        packageName,
        productId,
        basePlanId,
        offerId
      });
    }
  }

  /**
   * Update a subscription offer
   * @param {string} packageName - The Android package name
   * @param {string} productId - The subscription product ID
   * @param {string} basePlanId - The base plan ID
   * @param {string} offerId - The offer ID
   * @param {object} offerData - The updated offer configuration
   * @param {string} updateMask - Fields to update (comma-separated)
   * @returns {object} Updated offer
   */
  async updateSubscriptionOffer(packageName, productId, basePlanId, offerId, offerData, updateMask) {
    await this.ensureInitialized();

    try {
      const params = {
        packageName,
        productId,
        basePlanId,
        offerId,
        requestBody: offerData
      };

      if (updateMask) {
        params.updateMask = updateMask;
      }

      const response = await this.androidPublisher.monetization.subscriptions.basePlans.offers.patch(params);

      logger.info(`Updated subscription offer ${offerId}`, {
        packageName,
        productId,
        basePlanId
      });

      return response.data;
    } catch (error) {
      this.handleApiError(error, 'updateSubscriptionOffer', {
        packageName,
        productId,
        basePlanId,
        offerId
      });
    }
  }

  /**
   * Delete a subscription offer
   * @param {string} packageName - The Android package name
   * @param {string} productId - The subscription product ID
   * @param {string} basePlanId - The base plan ID
   * @param {string} offerId - The offer ID
   * @returns {object} Deletion result
   */
  async deleteSubscriptionOffer(packageName, productId, basePlanId, offerId) {
    await this.ensureInitialized();

    try {
      await this.androidPublisher.monetization.subscriptions.basePlans.offers.delete({
        packageName,
        productId,
        basePlanId,
        offerId
      });

      logger.info(`Deleted subscription offer ${offerId}`, {
        packageName,
        productId,
        basePlanId
      });

      return { success: true };
    } catch (error) {
      this.handleApiError(error, 'deleteSubscriptionOffer', {
        packageName,
        productId,
        basePlanId,
        offerId
      });
    }
  }

  /**
   * Activate a subscription offer
   * @param {string} packageName - The Android package name
   * @param {string} productId - The subscription product ID
   * @param {string} basePlanId - The base plan ID
   * @param {string} offerId - The offer ID
   * @returns {object} Activated offer
   */
  async activateSubscriptionOffer(packageName, productId, basePlanId, offerId) {
    await this.ensureInitialized();

    try {
      const response = await this.androidPublisher.monetization.subscriptions.basePlans.offers.activate({
        packageName,
        productId,
        basePlanId,
        offerId
      });

      logger.info(`Activated subscription offer ${offerId}`, {
        packageName,
        productId,
        basePlanId
      });

      return response.data;
    } catch (error) {
      this.handleApiError(error, 'activateSubscriptionOffer', {
        packageName,
        productId,
        basePlanId,
        offerId
      });
    }
  }

  /**
   * Deactivate a subscription offer
   * @param {string} packageName - The Android package name
   * @param {string} productId - The subscription product ID
   * @param {string} basePlanId - The base plan ID
   * @param {string} offerId - The offer ID
   * @returns {object} Deactivated offer
   */
  async deactivateSubscriptionOffer(packageName, productId, basePlanId, offerId) {
    await this.ensureInitialized();

    try {
      const response = await this.androidPublisher.monetization.subscriptions.basePlans.offers.deactivate({
        packageName,
        productId,
        basePlanId,
        offerId
      });

      logger.info(`Deactivated subscription offer ${offerId}`, {
        packageName,
        productId,
        basePlanId
      });

      return response.data;
    } catch (error) {
      this.handleApiError(error, 'deactivateSubscriptionOffer', {
        packageName,
        productId,
        basePlanId,
        offerId
      });
    }
  }

  /**
   * Batch update regional configurations for an offer
   * @param {string} packageName - The Android package name
   * @param {string} productId - The subscription product ID
   * @param {string} basePlanId - The base plan ID
   * @param {string} offerId - The offer ID
   * @param {array} regionalConfigs - Array of regional configurations
   * @returns {object} Updated configurations
   */
  async batchUpdateOfferRegionalConfigs(packageName, productId, basePlanId, offerId, regionalConfigs) {
    await this.ensureInitialized();

    try {
      const response = await this.androidPublisher.monetization.subscriptions.basePlans.offers.batchUpdateStates({
        packageName,
        productId,
        basePlanId,
        offerId,
        requestBody: {
          requests: regionalConfigs
        }
      });

      logger.info(`Batch updated regional configs for offer ${offerId}`, {
        packageName,
        productId,
        basePlanId,
        count: regionalConfigs.length
      });

      return response.data;
    } catch (error) {
      this.handleApiError(error, 'batchUpdateOfferRegionalConfigs', {
        packageName,
        productId,
        basePlanId,
        offerId
      });
    }
  }

  /**
   * Convert a price to all supported regional prices
   * @param {string} packageName - The Android package name
   * @param {object} price - Money object with currencyCode, units, nanos
   * @returns {object} Converted regional prices and other regions price
   */
  async convertRegionPrices(packageName, price) {
    await this.ensureInitialized();

    try {
      const response = await this.androidPublisher.monetization.convertRegionPrices({
        packageName,
        requestBody: {
          price
        }
      });

      logger.info('Converted region prices', {
        packageName,
        regionCount: Object.keys(response.data.convertedRegionPrices || {}).length
      });

      return response.data;
    } catch (error) {
      this.handleApiError(error, 'convertRegionPrices', { packageName });
    }
  }

  /**
   * Handle API errors consistently
   * @param {Error} error - The error object
   * @param {string} operation - The operation name
   * @param {object} context - Additional context
   */
  handleApiError(error, operation, context = {}) {
    const statusCode = error.response?.status || error.code || 500;
    const errorMessage = error.response?.data?.error?.message || error.message;
    const errorCode = error.response?.data?.error?.code || 'UNKNOWN_ERROR';

    logger.error(`Google Play API error in ${operation}`, {
      ...context,
      statusCode,
      errorMessage,
      errorCode
    });

    // Map Google Play API errors to appropriate HTTP status codes
    if (statusCode === 404) {
      throw new GooglePlayAPIError(
        `Resource not found: ${errorMessage}`,
        'NOT_FOUND',
        404
      );
    } else if (statusCode === 400) {
      throw new GooglePlayAPIError(
        `Invalid request: ${errorMessage}`,
        'INVALID_REQUEST',
        400
      );
    } else if (statusCode === 401 || statusCode === 403) {
      throw new GooglePlayAPIError(
        `Authentication/Authorization error: ${errorMessage}`,
        'AUTH_ERROR',
        statusCode
      );
    } else if (statusCode === 409) {
      throw new GooglePlayAPIError(
        `Conflict: ${errorMessage}`,
        'CONFLICT',
        409
      );
    } else if (statusCode === 429) {
      throw new GooglePlayAPIError(
        `Rate limit exceeded: ${errorMessage}`,
        'RATE_LIMIT',
        429
      );
    } else {
      throw new GooglePlayAPIError(
        `Google Play API error: ${errorMessage}`,
        errorCode,
        statusCode
      );
    }
  }
}

// Export singleton instance
const googlePlayClient = new GooglePlayClient();
module.exports = googlePlayClient;
