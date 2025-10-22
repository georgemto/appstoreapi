const appStoreClient = require('./appstore-client');
const { config } = require('../config/appstore');
const { NotFoundError, ValidationError, AppleAPIError } = require('../utils/errors');
const logger = require('../utils/logger');

class SubscriptionService {
  constructor() {
    this.endpoints = config.endpoints;
  }

  /**
   * Get all subscriptions with optional filtering
   */
  async getAllSubscriptions(options = {}) {
    try {
      const {
        appId,
        subscriptionGroupId,
        state,
        includes = ['subscriptionLocalizations', 'prices'],
        limit = 200
      } = options;

      const filters = {};
      if (appId) filters.app = appId;
      if (subscriptionGroupId) filters.subscriptionGroup = subscriptionGroupId;
      if (state) filters.state = state;

      const params = appStoreClient.buildParams(
        filters,
        includes,
        {
          subscriptions: ['name', 'productId', 'subscriptionPeriod', 'state', 'reviewNote'],
          subscriptionLocalizations: ['name', 'description', 'locale'],
          subscriptionPrices: ['startDate', 'endDate']
        },
        'name',
        limit
      );

      const response = await appStoreClient.get(this.endpoints.subscriptions, params);
      
      logger.info(`Retrieved ${response.data?.length || 0} subscriptions`);
      return response;
    } catch (error) {
      logger.error('Failed to get subscriptions:', error);
      throw error;
    }
  }

  /**
   * Get a specific subscription by ID
   */
  async getSubscriptionById(subscriptionId, includes = ['subscriptionLocalizations', 'prices']) {
    try {
      if (!subscriptionId) {
        throw new ValidationError('Subscription ID is required');
      }

      const params = appStoreClient.buildParams(
        {},
        includes,
        {
          subscriptions: ['name', 'productId', 'subscriptionPeriod', 'state', 'reviewNote', 'familySharable', 'subscriptionType'],
          subscriptionLocalizations: ['name', 'description', 'locale'],
          subscriptionPrices: ['startDate', 'endDate', 'preserveCurrentPrice']
        }
      );

      const response = await appStoreClient.get(`${this.endpoints.subscriptions}/${subscriptionId}`, params);
      
      if (!response.data) {
        throw new NotFoundError(`Subscription with ID ${subscriptionId} not found`);
      }

      logger.info(`Retrieved subscription: ${subscriptionId}`);
      return response;
    } catch (error) {
      if (error.statusCode === 404) {
        throw new NotFoundError(`Subscription with ID ${subscriptionId} not found`);
      }
      logger.error(`Failed to get subscription ${subscriptionId}:`, error);
      throw error;
    }
  }

  /**
   * Create a new subscription
   */
  async createSubscription(subscriptionData) {
    try {
      this.validateSubscriptionData(subscriptionData);

      const payload = {
        data: {
          type: 'subscriptions',
          attributes: {
            name: subscriptionData.name,
            productId: subscriptionData.productId,
            subscriptionPeriod: subscriptionData.subscriptionPeriod,
            reviewNote: subscriptionData.reviewNote || '',
            familySharable: subscriptionData.familySharable || false
          },
          relationships: {
            group: {
              data: {
                type: 'subscriptionGroups',
                id: subscriptionData.subscriptionGroupId
              }
            }
          }
        }
      };

      const response = await appStoreClient.post(this.endpoints.subscriptions, payload);
      
      logger.info(`Created subscription: ${response.data?.attributes?.productId}`);
      return response;
    } catch (error) {
      logger.error('Failed to create subscription:', error);
      throw error;
    }
  }

  /**
   * Update an existing subscription
   */
  async updateSubscription(subscriptionId, updateData) {
    try {
      if (!subscriptionId) {
        throw new ValidationError('Subscription ID is required');
      }

      // Build the update payload with only provided fields
      const attributes = {};
      const allowedUpdates = ['name', 'reviewNote', 'familySharable'];
      
      allowedUpdates.forEach(field => {
        if (updateData[field] !== undefined) {
          attributes[field] = updateData[field];
        }
      });

      if (Object.keys(attributes).length === 0) {
        throw new ValidationError('No valid update fields provided');
      }

      const payload = {
        data: {
          type: 'subscriptions',
          id: subscriptionId,
          attributes
        }
      };

      const response = await appStoreClient.patch(`${this.endpoints.subscriptions}/${subscriptionId}`, payload);
      
      logger.info(`Updated subscription: ${subscriptionId}`);
      return response;
    } catch (error) {
      if (error.statusCode === 404) {
        throw new NotFoundError(`Subscription with ID ${subscriptionId} not found`);
      }
      logger.error(`Failed to update subscription ${subscriptionId}:`, error);
      throw error;
    }
  }

  /**
   * Delete a subscription
   */
  async deleteSubscription(subscriptionId) {
    try {
      if (!subscriptionId) {
        throw new ValidationError('Subscription ID is required');
      }

      await appStoreClient.delete(`${this.endpoints.subscriptions}/${subscriptionId}`);
      
      logger.info(`Deleted subscription: ${subscriptionId}`);
      return { success: true, message: 'Subscription deleted successfully' };
    } catch (error) {
      if (error.statusCode === 404) {
        throw new NotFoundError(`Subscription with ID ${subscriptionId} not found`);
      }
      logger.error(`Failed to delete subscription ${subscriptionId}:`, error);
      throw error;
    }
  }

  /**
   * Get subscription pricing information
   */
  async getSubscriptionPricing(subscriptionId, territory = null) {
    try {
      if (!subscriptionId) {
        throw new ValidationError('Subscription ID is required');
      }

      const filters = {};
      if (territory) {
        filters.territory = territory;
      }

      const params = appStoreClient.buildParams(
        filters,
        ['subscription', 'territory'],
        {
          subscriptionPrices: ['startDate', 'endDate', 'preserveCurrentPrice'],
          territories: ['currency']
        }
      );

      const response = await appStoreClient.get(
        `${this.endpoints.subscriptions}/${subscriptionId}/prices`,
        params
      );

      logger.info(`Retrieved pricing for subscription: ${subscriptionId}`);
      return response;
    } catch (error) {
      if (error.statusCode === 404) {
        throw new NotFoundError(`Subscription or pricing with ID ${subscriptionId} not found`);
      }
      logger.error(`Failed to get subscription pricing ${subscriptionId}:`, error);
      throw error;
    }
  }

  /**
   * Update subscription pricing
   */
  async updateSubscriptionPricing(subscriptionId, pricingData) {
    try {
      if (!subscriptionId) {
        throw new ValidationError('Subscription ID is required');
      }

      this.validatePricingData(pricingData);

      const payload = {
        data: {
          type: 'subscriptionPriceSubmissions',
          relationships: {
            subscription: {
              data: {
                type: 'subscriptions',
                id: subscriptionId
              }
            }
          }
        }
      };

      const response = await appStoreClient.post(
        '/subscriptionPriceSubmissions',
        payload
      );

      logger.info(`Updated pricing for subscription: ${subscriptionId}`);
      return response;
    } catch (error) {
      logger.error(`Failed to update subscription pricing ${subscriptionId}:`, error);
      throw error;
    }
  }

  /**
   * Validate subscription data for creation
   */
  validateSubscriptionData(data) {
    const required = ['name', 'productId', 'subscriptionPeriod', 'subscriptionGroupId'];
    const missing = required.filter(field => !data[field]);
    
    if (missing.length > 0) {
      throw new ValidationError(`Missing required fields: ${missing.join(', ')}`);
    }

    // Validate subscription period
    const validPeriods = [
      'ONE_WEEK', 'ONE_MONTH', 'TWO_MONTHS', 'THREE_MONTHS',
      'SIX_MONTHS', 'ONE_YEAR'
    ];
    
    if (!validPeriods.includes(data.subscriptionPeriod)) {
      throw new ValidationError(
        `Invalid subscription period. Must be one of: ${validPeriods.join(', ')}`
      );
    }

    // Validate product ID format
    if (!/^[a-zA-Z0-9._-]+$/.test(data.productId)) {
      throw new ValidationError(
        'Product ID can only contain letters, numbers, dots, underscores, and hyphens'
      );
    }
  }

  /**
   * Validate pricing data
   */
  validatePricingData(data) {
    if (!data.prices || !Array.isArray(data.prices) || data.prices.length === 0) {
      throw new ValidationError('Prices array is required and cannot be empty');
    }

    data.prices.forEach((price, index) => {
      if (!price.territory) {
        throw new ValidationError(`Price at index ${index} is missing territory`);
      }
      if (!price.startDate) {
        throw new ValidationError(`Price at index ${index} is missing startDate`);
      }
    });
  }
}

// Export singleton instance
const subscriptionService = new SubscriptionService();
module.exports = subscriptionService;
