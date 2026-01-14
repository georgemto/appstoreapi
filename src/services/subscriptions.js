const appStoreClient = require('./appstore-client');
const { config, ALL_TERRITORIES } = require('../config/appstore');
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
  async getSubscriptionById(subscriptionId, includes = ['subscriptionLocalizations']) {
    try {
      if (!subscriptionId) {
        throw new ValidationError('Subscription ID is required');
      }

      // Note: GET /subscriptions/{id} only supports limited includes
      // Valid includes: subscriptionLocalizations, appStoreReviewScreenshot, promotionalOffers, offerCodes, prices, pricesV2, subscriptionAvailability, winBackOffers, images
      // However, 'prices' needs to be fetched via relationship endpoint if detailed info is needed
      const validIncludes = includes.filter(inc => 
        ['subscriptionLocalizations', 'promotionalOffers', 'offerCodes', 'subscriptionAvailability', 'appStoreReviewScreenshot'].includes(inc)
      );

      const params = appStoreClient.buildParams(
        {},
        validIncludes,
        {
          subscriptions: ['name', 'productId', 'subscriptionPeriod', 'state', 'reviewNote', 'familySharable', 'subscriptionType'],
          subscriptionLocalizations: ['name', 'description', 'locale']
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

  /**
   * Get all available price points for a subscription
   * @param {string} subscriptionId - Subscription ID
   * @param {string} territory - Optional territory filter (e.g., 'USA')
   * @returns {Array} Array of price point objects
   */
  async getAllPricePoints(subscriptionId, territory = null) {
    try {
      if (!subscriptionId) {
        throw new ValidationError('Subscription ID is required');
      }

      const allPricePoints = [];
      let nextUrl = null;

      const baseParams = {
        'fields[subscriptionPricePoints]': 'customerPrice,proceeds',
        'fields[territories]': 'currency',
        include: 'territory',
        limit: 200
      };

      if (territory) {
        baseParams['filter[territory]'] = territory;
      }

      do {
        let response;
        if (nextUrl) {
          response = await appStoreClient.getNextPage(nextUrl);
        } else {
          response = await appStoreClient.get(
            `${this.endpoints.subscriptions}/${subscriptionId}/pricePoints`,
            baseParams
          );
        }

        if (response.data) {
          allPricePoints.push(...response.data);
        }

        nextUrl = response.links?.next;
      } while (nextUrl);

      // Parse price points with territory info
      const pricePoints = allPricePoints.map(point => {
        let territoryCode;
        try {
          const decoded = Buffer.from(point.id, 'base64').toString('utf-8');
          const parsed = JSON.parse(decoded);
          territoryCode = parsed.t;
        } catch (e) {
          territoryCode = 'UNKNOWN';
        }

        return {
          id: point.id,
          territory: territoryCode,
          customerPrice: point.attributes?.customerPrice,
          proceeds: point.attributes?.proceeds
        };
      });

      logger.info(`Retrieved ${pricePoints.length} price points for subscription ${subscriptionId}`);
      return pricePoints;
    } catch (error) {
      logger.error(`Failed to get price points for ${subscriptionId}:`, error);
      throw error;
    }
  }

  /**
   * Find price point ID by customer price for a specific territory
   * @param {string} subscriptionId - Subscription ID
   * @param {string} price - Customer price (e.g., "12.99")
   * @param {string} territory - Territory code (e.g., "USA")
   * @returns {string|null} Price point ID or null if not found
   */
  async findPricePointByPrice(subscriptionId, price, territory = 'USA') {
    const pricePoints = await this.getAllPricePoints(subscriptionId, territory);
    const priceStr = parseFloat(price).toFixed(2);
    
    const match = pricePoints.find(pp => 
      pp.territory === territory && 
      parseFloat(pp.customerPrice).toFixed(2) === priceStr
    );

    return match ? match.id : null;
  }

  /**
   * Get the price tier from a price point ID
   * Price point IDs are base64 encoded JSON: {"s":"subscriptionId","t":"territory","p":"priceTier"}
   * @param {string} pricePointId - Base64 encoded price point ID
   * @returns {string} Price tier (e.g., "10142")
   */
  getPriceTierFromPricePointId(pricePointId) {
    try {
      const decoded = Buffer.from(pricePointId, 'base64').toString('utf-8');
      const parsed = JSON.parse(decoded);
      return parsed.p;
    } catch (e) {
      throw new ValidationError('Invalid price point ID format');
    }
  }

  /**
   * Build a price point ID for a specific territory using a known tier
   * @param {string} subscriptionId - Subscription ID
   * @param {string} territory - Territory code
   * @param {string} priceTier - Price tier from another territory's price point
   * @returns {string} Base64 encoded price point ID
   */
  buildPricePointId(subscriptionId, territory, priceTier) {
    const data = { s: subscriptionId, t: territory, p: priceTier };
    return Buffer.from(JSON.stringify(data)).toString('base64');
  }

  /**
   * Set subscription price for a specific territory
   * @param {string} subscriptionId - Subscription ID
   * @param {string} pricePointId - Price point ID
   * @param {Date} startDate - Optional start date (defaults to now)
   * @returns {Object} Created price object
   */
  async setSubscriptionPrice(subscriptionId, pricePointId, startDate = null) {
    try {
      if (!subscriptionId || !pricePointId) {
        throw new ValidationError('Subscription ID and price point ID are required');
      }

      const payload = {
        data: {
          type: 'subscriptionPrices',
          relationships: {
            subscription: {
              data: {
                type: 'subscriptions',
                id: subscriptionId
              }
            },
            subscriptionPricePoint: {
              data: {
                type: 'subscriptionPricePoints',
                id: pricePointId
              }
            }
          }
        }
      };

      // Add start date if provided
      if (startDate) {
        payload.data.attributes = {
          startDate: startDate instanceof Date ? startDate.toISOString().split('T')[0] : startDate
        };
      }

      const response = await appStoreClient.post('/subscriptionPrices', payload);
      
      logger.info(`Set price for subscription ${subscriptionId} using price point ${pricePointId}`);
      return response;
    } catch (error) {
      logger.error(`Failed to set subscription price:`, error);
      throw error;
    }
  }

  /**
   * Set subscription prices for all territories using a base USD price
   * @param {string} subscriptionId - Subscription ID
   * @param {string} usdPrice - USD price (e.g., "12.99")
   * @param {Object} options - Options
   * @param {boolean} options.dryRun - If true, return what would be done without making changes
   * @param {Function} options.onProgress - Progress callback (territory, success, error)
   * @returns {Object} Results with success/failure counts
   */
  async setSubscriptionPricesAllTerritories(subscriptionId, usdPrice, options = {}) {
    const { dryRun = false, onProgress = null } = options;

    // First, find the USD price point to get the tier
    const usdPricePointId = await this.findPricePointByPrice(subscriptionId, usdPrice, 'USA');
    if (!usdPricePointId) {
      throw new ValidationError(`No price point found for $${usdPrice} USD`);
    }

    const priceTier = this.getPriceTierFromPricePointId(usdPricePointId);
    logger.info(`Found price tier ${priceTier} for $${usdPrice} USD`);

    // Use static territories list instead of fetching price points
    const territories = ALL_TERRITORIES;
    
    logger.info(`Setting prices for ${territories.length} territories`);

    const results = {
      total: territories.length,
      success: 0,
      failed: 0,
      skipped: 0,
      errors: []
    };

    if (dryRun) {
      logger.info(`[DRY-RUN] Would set prices for ${territories.length} territories using tier ${priceTier}`);
      results.skipped = territories.length;
      return results;
    }

    // Set price for each territory
    for (const territory of territories) {
      try {
        const pricePointId = this.buildPricePointId(subscriptionId, territory, priceTier);
        await this.setSubscriptionPrice(subscriptionId, pricePointId);
        results.success++;
        
        if (onProgress) {
          onProgress(territory, true);
        }

        // Small delay to avoid rate limiting
        await new Promise(resolve => setTimeout(resolve, 100));
      } catch (error) {
        results.failed++;
        results.errors.push({ territory, error: error.message });
        
        if (onProgress) {
          onProgress(territory, false, error.message);
        }
      }
    }

    logger.info(`Set prices for ${results.success}/${results.total} territories`);
    return results;
  }
}

// Export singleton instance
const subscriptionService = new SubscriptionService();
module.exports = subscriptionService;
