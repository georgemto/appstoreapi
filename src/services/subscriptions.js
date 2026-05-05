const appStoreClient = require('./appstore-client');
const appStoreAPIClient = require('./appstore-api-client');
const { config } = require('../config/appstore');
const { NotFoundError, ValidationError, AppleAPIError } = require('../utils/errors');
const logger = require('../utils/logger');

class SubscriptionService {
  constructor() {
    this.endpoints = config.endpoints;
    // Cache for available territories (shared across all subscriptions)
    this._cachedTerritories = null;
  }

  /**
   * Get available territories for subscription pricing.
   * Fetches from the dedicated Territories API and caches the result.
   * @param {Object} options - Options
   * @param {boolean} options.forceRefresh - Force refresh the cache from API
   * @returns {Array<string>} Array of territory codes
   */
  async getAvailableTerritories(options = {}) {
    const { forceRefresh = false } = options;

    // Return cached territories if available and not forcing refresh
    if (this._cachedTerritories && !forceRefresh) {
      logger.info(`Using cached territories (${this._cachedTerritories.length} territories)`);
      return this._cachedTerritories;
    }

    // Fetch territories from the dedicated Territories API
    logger.info('Fetching territories from Territories API...');
    const territories = await this.getAllTerritories();
    
    // Cache the result
    this._cachedTerritories = territories;
    logger.info(`Cached ${territories.length} territories from API`);

    return territories;
  }

  /**
   * Fetch all territories from the dedicated Territories API.
   * Handles pagination to get all available territories.
   * @returns {Array<string>} Array of territory codes (e.g., 'USA', 'GBR', 'CAN')
   */
  async getAllTerritories() {
    try {
      const allTerritories = [];
      let nextUrl = null;

      // First request
      const params = {
        'fields[territories]': 'currency',
        limit: 200
      };

      let response = await appStoreClient.get('/territories', params);
      
      if (response.data) {
        for (const territory of response.data) {
          if (territory.id) {
            allTerritories.push(territory.id);
          }
        }
      }

      // Handle pagination
      nextUrl = response.links?.next;
      while (nextUrl) {
        response = await appStoreClient.getNextPage(nextUrl);
        
        if (response.data) {
          for (const territory of response.data) {
            if (territory.id) {
              allTerritories.push(territory.id);
            }
          }
        }
        
        nextUrl = response.links?.next;
      }

      logger.info(`Retrieved ${allTerritories.length} territories from Territories API`);
      return allTerritories;
    } catch (error) {
      logger.error('Failed to fetch territories from API:', error);
      throw error;
    }
  }

  /**
   * Clear the cached territories
   */
  clearTerritoriesCache() {
    this._cachedTerritories = null;
    logger.info('Territories cache cleared');
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
    // Remove padding to match Apple's base64 format (no trailing '=')
    return Buffer.from(JSON.stringify(data)).toString('base64').replace(/=+$/, '');
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
   * @param {boolean} options.forceRefreshTerritories - Force refresh territories cache from API
   * @param {Function} options.onProgress - Progress callback (territory, success, error)
   * @returns {Object} Results with success/failure counts
   */
  async setSubscriptionPricesAllTerritories(subscriptionId, usdPrice, options = {}) {
    const { dryRun = false, forceRefreshTerritories = false, onProgress = null } = options;

    // Get territories from cache (or fetch once if not cached)
    const territories = await this.getAvailableTerritories({ 
      forceRefresh: forceRefreshTerritories 
    });

    // Find the USD price point to get the tier (only fetch USA price points)
    const usdPricePointId = await this.findPricePointByPrice(subscriptionId, usdPrice, 'USA');
    if (!usdPricePointId) {
      throw new ValidationError(`No price point found for $${usdPrice} USD`);
    }

    const priceTier = this.getPriceTierFromPricePointId(usdPricePointId);
    logger.info(`Found price tier ${priceTier} for $${usdPrice} USD`);
    
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

  /**
   * Set subscription availability (stop / start sale, change territories).
   *
   * Posts to /v1/subscriptionAvailabilities. Each POST replaces the prior
   * availability configuration for the subscription.
   *
   * Stop sale: pass an empty `territories` array and `availableInNewTerritories: false`.
   * This prevents NEW purchases. Existing subscribers continue to renew —
   * Apple does not cancel active subscriptions when territories are removed.
   *
   * @param {string} subscriptionId
   * @param {Object} options
   * @param {boolean} [options.availableInNewTerritories=false] - auto-rollout to new Apple territories
   * @param {Array<string>} [options.territories=[]] - territory codes (e.g. ['USA','GBR']); empty = unavailable everywhere
   * @returns {Object} API response
   */
  async setSubscriptionAvailability(subscriptionId, options = {}) {
    if (!subscriptionId) {
      throw new ValidationError('Subscription ID is required');
    }

    const { availableInNewTerritories = false, territories = [] } = options;

    const payload = {
      data: {
        type: 'subscriptionAvailabilities',
        attributes: {
          availableInNewTerritories: !!availableInNewTerritories
        },
        relationships: {
          subscription: {
            data: { type: 'subscriptions', id: subscriptionId }
          },
          availableTerritories: {
            data: territories.map(t => ({ type: 'territories', id: t }))
          }
        }
      }
    };

    try {
      const response = await appStoreClient.post('/subscriptionAvailabilities', payload);
      logger.info(`Set availability for subscription ${subscriptionId}`, {
        availableInNewTerritories: !!availableInNewTerritories,
        territoryCount: territories.length
      });
      return response;
    } catch (error) {
      logger.error(`Failed to set subscription availability ${subscriptionId}:`, error);
      throw error;
    }
  }

  /**
   * Stop sale of a subscription — convenience wrapper around setSubscriptionAvailability.
   * Removes from all territories and disables auto-rollout to new ones.
   *
   * Note: existing subscribers keep their subscription and continue to renew.
   * @param {string} subscriptionId
   * @returns {Object} API response
   */
  async stopSaleSubscription(subscriptionId) {
    return this.setSubscriptionAvailability(subscriptionId, {
      availableInNewTerritories: false,
      territories: []
    });
  }

  /**
   * Get subscription localizations for a subscription
   * @param {string} subscriptionId - Subscription ID
   * @returns {Object} Localizations data
   */
  async getSubscriptionLocalizations(subscriptionId) {
    try {
      if (!subscriptionId) {
        throw new ValidationError('Subscription ID is required');
      }

      const params = appStoreClient.buildParams(
        {},
        [],
        {
          subscriptionLocalizations: ['name', 'description', 'locale', 'state']
        },
        null,
        200
      );

      const response = await appStoreClient.get(
        `${this.endpoints.subscriptions}/${subscriptionId}/subscriptionLocalizations`,
        params
      );

      logger.info(`Retrieved localizations for subscription: ${subscriptionId}`, {
        count: response.data?.length || 0
      });
      return response;
    } catch (error) {
      if (error.statusCode === 404) {
        throw new NotFoundError(`Subscription with ID ${subscriptionId} not found`);
      }
      logger.error(`Failed to get subscription localizations ${subscriptionId}:`, error);
      throw error;
    }
  }

  /**
   * Get a specific subscription localization by ID
   * @param {string} localizationId - Localization ID
   * @returns {Object} Localization data
   */
  async getSubscriptionLocalizationById(localizationId) {
    try {
      if (!localizationId) {
        throw new ValidationError('Localization ID is required');
      }

      const response = await appStoreClient.get(
        `/subscriptionLocalizations/${localizationId}`,
        {
          'fields[subscriptionLocalizations]': 'name,description,locale,state'
        }
      );

      if (!response.data) {
        throw new NotFoundError(`Subscription localization with ID ${localizationId} not found`);
      }

      logger.info(`Retrieved subscription localization: ${localizationId}`);
      return response;
    } catch (error) {
      if (error.statusCode === 404) {
        throw new NotFoundError(`Subscription localization with ID ${localizationId} not found`);
      }
      logger.error(`Failed to get subscription localization ${localizationId}:`, error);
      throw error;
    }
  }

  /**
   * Create a new subscription localization
   * @param {string} subscriptionId - Subscription ID
   * @param {Object} localizationData - Localization data
   * @param {string} localizationData.locale - Locale code (e.g., 'en-US', 'de-DE')
   * @param {string} localizationData.name - Display name
   * @param {string} localizationData.description - Description
   * @returns {Object} Created localization
   */
  async createSubscriptionLocalization(subscriptionId, localizationData) {
    try {
      if (!subscriptionId) {
        throw new ValidationError('Subscription ID is required');
      }

      this.validateLocalizationData(localizationData);

      const payload = {
        data: {
          type: 'subscriptionLocalizations',
          attributes: {
            locale: localizationData.locale,
            name: localizationData.name,
            description: localizationData.description || ''
          },
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

      const response = await appStoreAPIClient.createSubscriptionLocalization(payload);

      logger.info(`Created subscription localization`, {
        subscriptionId,
        locale: localizationData.locale,
        localizationId: response.data?.id
      });
      return response;
    } catch (error) {
      logger.error('Failed to create subscription localization:', error);
      throw error;
    }
  }

  /**
   * Update an existing subscription localization
   * @param {string} localizationId - Localization ID
   * @param {Object} updateData - Update data
   * @param {string} [updateData.name] - Display name
   * @param {string} [updateData.description] - Description
   * @returns {Object} Updated localization
   */
  async updateSubscriptionLocalization(localizationId, updateData) {
    try {
      if (!localizationId) {
        throw new ValidationError('Localization ID is required');
      }

      // Build the update payload with only provided fields
      const attributes = {};
      const allowedUpdates = ['name', 'description'];

      allowedUpdates.forEach(field => {
        if (updateData[field] !== undefined) {
          attributes[field] = updateData[field];
        }
      });

      if (Object.keys(attributes).length === 0) {
        throw new ValidationError('No valid update fields provided. Allowed fields: name, description');
      }

      const payload = {
        data: {
          type: 'subscriptionLocalizations',
          id: localizationId,
          attributes
        }
      };

      const response = await appStoreAPIClient.updateSubscriptionLocalization(localizationId, payload);

      logger.info(`Updated subscription localization: ${localizationId}`, {
        updatedFields: Object.keys(attributes)
      });
      return response;
    } catch (error) {
      if (error.statusCode === 404) {
        throw new NotFoundError(`Subscription localization with ID ${localizationId} not found`);
      }
      logger.error(`Failed to update subscription localization ${localizationId}:`, error);
      throw error;
    }
  }

  /**
   * Delete a subscription localization
   * @param {string} localizationId - Localization ID
   * @returns {Object} Success result
   */
  async deleteSubscriptionLocalization(localizationId) {
    try {
      if (!localizationId) {
        throw new ValidationError('Localization ID is required');
      }

      await appStoreClient.delete(`/subscriptionLocalizations/${localizationId}`);

      logger.info(`Deleted subscription localization: ${localizationId}`);
      return { success: true, message: 'Subscription localization deleted successfully' };
    } catch (error) {
      if (error.statusCode === 404) {
        throw new NotFoundError(`Subscription localization with ID ${localizationId} not found`);
      }
      logger.error(`Failed to delete subscription localization ${localizationId}:`, error);
      throw error;
    }
  }

  /**
   * Validate localization data for creation
   * @param {Object} data - Localization data
   */
  validateLocalizationData(data) {
    const required = ['locale', 'name'];
    const missing = required.filter(field => !data[field]);

    if (missing.length > 0) {
      throw new ValidationError(`Missing required fields: ${missing.join(', ')}`);
    }

    // Validate locale format (should be like 'en-US', 'de-DE', etc.)
    const localeRegex = /^[a-z]{2}(-[A-Z]{2})?$/;
    if (!localeRegex.test(data.locale)) {
      throw new ValidationError(
        'Invalid locale format. Expected format: "en-US" or "en"'
      );
    }

    // Validate name length
    if (data.name.length > 30) {
      throw new ValidationError('Name cannot exceed 30 characters');
    }

    // Validate description length if provided
    if (data.description && data.description.length > 45) {
      throw new ValidationError('Description cannot exceed 45 characters');
    }
  }
}

// Export singleton instance
const subscriptionService = new SubscriptionService();
module.exports = subscriptionService;
