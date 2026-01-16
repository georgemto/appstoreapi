const crypto = require('crypto');
const appStoreClient = require('./appstore-client');
const appStoreAPIClient = require('./appstore-api-client');
const appService = require('./apps');
const subscriptionService = require('./subscriptions');
const { config } = require('../config/appstore');
const { NotFoundError, ValidationError, AppleAPIError } = require('../utils/errors');
const logger = require('../utils/logger');

class PromotionalOfferService {
  constructor() {
    this.endpoints = config.endpoints;
  }

  /**
   * Generate a unique promotional offer code
   * @param {string} prefix - Prefix for the offer code (default: 'PROMO')
   * @returns {string} Generated offer code
   */
  generateOfferCode(prefix = 'PROMO') {
    // Format: PREFIX-TIMESTAMP-RANDOM
    // Ensure it's uppercase and within Apple's 3-25 character limit
    const cleanPrefix = prefix.replace(/[^A-Z0-9]/g, '').substring(0, 10).toUpperCase() || 'PROMO';
    const timestamp = Date.now().toString(36).toUpperCase().substring(0, 6);
    const random = Math.random().toString(36).substring(2, 6).toUpperCase();
    
    const code = `${cleanPrefix}-${timestamp}-${random}`;
    
    // Ensure the code is within limits (3-25 characters)
    if (code.length > 25) {
      return `${cleanPrefix}-${random}${timestamp}`.substring(0, 25);
    }
    
    return code;
  }

  /**
   * Generate a unique offer code
   * @param {string} prefix - Optional prefix for the offer code
   * @returns {string} Generated offer code
   */
  generateOfferCode(prefix = 'PROMO') {
    // Generate random alphanumeric string (uppercase)
    // Apple only allows alphanumeric, underscores, and periods (no hyphens)
    const randomStr = crypto.randomBytes(6).toString('base64')
      .replace(/[^A-Z0-9]/g, '')
      .substring(0, 6);
    
    const timestamp = Date.now().toString(36).toUpperCase();
    
    // Use underscores instead of hyphens
    return `${prefix}_${timestamp.substring(0, 6)}_${randomStr}`;
  }

  /**
   * Validate offer code format
   * @param {string} code - Offer code to validate
   * @throws {ValidationError} If code is invalid
   */
  validateOfferCode(code) {
    if (code.length < 3 || code.length > 25) {
      throw new ValidationError('Offer code must be between 3 and 25 characters');
    }

    // Apple requires uppercase alphanumeric, underscores, and periods only (no hyphens)
    if (!/^[A-Z0-9_.]+$/.test(code)) {
      throw new ValidationError('Offer code can only contain uppercase letters, numbers, underscores, and periods');
    }
  }

  /**
   * Validate promotional offer data
   * @param {object} data - Offer data to validate
   * @throws {ValidationError} If data is invalid
   */
  validateOfferData(data) {
    const required = ['name', 'duration', 'offerMode', 'numberOfPeriods'];
    const missing = required.filter(field => !data[field]);
    
    if (missing.length > 0) {
      throw new ValidationError(`Missing required fields: ${missing.join(', ')}`);
    }

    // Validate duration
    const validDurations = [
      'THREE_DAYS', 'ONE_WEEK', 'TWO_WEEKS', 'ONE_MONTH',
      'TWO_MONTHS', 'THREE_MONTHS', 'SIX_MONTHS', 'ONE_YEAR'
    ];
    
    if (!validDurations.includes(data.duration)) {
      throw new ValidationError(
        `Invalid duration. Must be one of: ${validDurations.join(', ')}`
      );
    }

    // Validate offer mode
    const validModes = ['PAY_AS_YOU_GO', 'PAY_UP_FRONT', 'FREE_TRIAL'];
    
    if (!validModes.includes(data.offerMode)) {
      throw new ValidationError(
        `Invalid offer mode. Must be one of: ${validModes.join(', ')}`
      );
    }

    // Validate number of periods
    if (!Number.isInteger(data.numberOfPeriods) || data.numberOfPeriods < 1 || data.numberOfPeriods > 12) {
      throw new ValidationError('Number of periods must be an integer between 1 and 12');
    }

    // Validate name length
    if (data.name.length < 1 || data.name.length > 100) {
      throw new ValidationError('Name must be between 1 and 100 characters');
    }

    // Validate offer code if provided
    if (data.offerCode) {
      this.validateOfferCode(data.offerCode);
    }

    // Validate price points for non-free offers
    if (data.offerMode !== 'FREE_TRIAL') {
      if (!data.pricePoints) {
        throw new ValidationError(
          `Price point(s) required for ${data.offerMode} offer mode. Use pricePoints parameter or set offerMode to FREE_TRIAL.`
        );
      }
      
      if (typeof data.pricePoints !== 'string' && typeof data.pricePoints !== 'object') {
        throw new ValidationError(
          'pricePoints must be a string (single price point ID) or an object mapping territories to price point IDs'
        );
      }
    }
  }

  /**
   * Convert a price point ID to a different territory using the same price tier
   * Price point IDs are base64-encoded JSON: {"s":"subscriptionId","t":"territory","p":"priceTier"}
   * This extracts the price tier and creates an equivalent price point ID for a different territory
   * @param {string} pricePointId - Original price point ID (base64 encoded)
   * @param {string} targetTerritory - Target territory code (e.g., 'USA', 'GBR', 'CAN')
   * @returns {string} New price point ID for the target territory with the same price tier
   */
  convertPricePointToTerritory(pricePointId, targetTerritory) {
    try {
      // Decode the base64 price point ID
      const decoded = Buffer.from(pricePointId, 'base64').toString('utf-8');
      const pricePointData = JSON.parse(decoded);
      
      // Extract the subscription ID and price tier
      const subscriptionId = pricePointData.s;
      const priceTier = pricePointData.p;
      
      // Create new price point data with target territory
      const newPricePointData = {
        s: subscriptionId,
        t: targetTerritory,
        p: priceTier
      };
      
      // Encode back to base64 (without padding, matching Apple's format)
      const newPricePointId = Buffer.from(JSON.stringify(newPricePointData))
        .toString('base64')
        .replace(/=+$/, ''); // Remove trailing padding
      
      logger.info(`Converted price point from ${pricePointData.t} to ${targetTerritory} (tier: ${priceTier})`);
      
      return newPricePointId;
    } catch (error) {
      logger.error('Failed to convert price point to territory', {
        pricePointId,
        targetTerritory,
        error: error.message
      });
      throw new ValidationError(
        `Invalid price point ID format. Expected base64-encoded JSON. Error: ${error.message}`
      );
    }
  }

  /**
   * Get ALL available price points for a subscription (recommended for promotional offers)
   * This returns all Apple price tiers that can be used, not just the currently active ones.
   * @param {string} subscriptionId - Subscription ID
   * @param {string} territory - Optional territory filter (e.g., 'USA', 'GBR')
   * @returns {array} Array of ALL available price point objects with id, territory, pricing info, and active status
   */
  async getAllAvailablePricePoints(subscriptionId, territory = null) {
    try {
      if (!subscriptionId) {
        throw new ValidationError('Subscription ID is required');
      }

      // First, get currently active prices to mark them
      const activePricePoints = await this.getSubscriptionPricePoints(subscriptionId, territory);
      const activePricePointIds = new Set(activePricePoints.map(pp => pp.id));

      // Build options for the pricePoints endpoint
      const opts = {
        include: ['territory'],
        fieldsSubscriptionPricePoints: ['customerPrice', 'proceeds', 'proceedsYear2'],
        fieldsTerritories: ['currency'],
        limit: 200 // Maximum allowed by Apple's API
      };

      if (territory) {
        opts.filterTerritory = [territory];
      }

      // Fetch all price points with pagination
      const allPricePoints = [];
      const territoryMap = {};
      let nextUrl = null;
      let pageCount = 0;
      
      do {
        pageCount++;
        logger.info(`Fetching price points page ${pageCount}${nextUrl ? ' (next page)' : ''}`);
        
        // Show progress to user in console
        if (pageCount > 1) {
          console.log(`   Fetching page ${pageCount}... (${allPricePoints.length} price points so far)`);
        }
        
        // Use the dedicated pricePoints endpoint to get ALL available price tiers
        const response = nextUrl 
          ? await appStoreAPIClient.getNextPage(nextUrl)
          : await appStoreAPIClient.getSubscriptionPricePoints(subscriptionId, opts);

        if (!response.data || response.data.length === 0) {
          if (pageCount === 1) {
            logger.warn(`No price points found for subscription ${subscriptionId}`);
            return [];
          }
          break;
        }

        // Build a map of territory IDs to territory codes from included data
        // (kept for backwards compatibility in case some price points use relationships)
        if (response.included) {
          response.included.forEach(item => {
            if (item.type === 'territories') {
              territoryMap[item.id] = item.id;
            }
          });
        }

        // Add this page's price points to our collection
        allPricePoints.push(...response.data);
        
        // Check if there's a next page
        nextUrl = response.links?.next;
        
        logger.info(`Retrieved ${response.data.length} price points on page ${pageCount} (total so far: ${allPricePoints.length})`);
        
      } while (nextUrl);

      logger.info(`Fetched all ${allPricePoints.length} price points across ${pageCount} page(s)`);

      // Extract all price points and mark which ones are currently active
      const pricePoints = [];
      
      allPricePoints.forEach(point => {
        // Decode territory from the price point ID (which is base64 encoded JSON)
        // Example ID: eyJzIjoiNjc0NjQ4NDA3MyIsInQiOiJBRkciLCJwIjoiMTAwMDEifQ
        // Decodes to: {"s":"6746484073","t":"AFG","p":"10001"}
        let territoryCode;
        try {
          const decoded = Buffer.from(point.id, 'base64').toString('utf-8');
          const parsed = JSON.parse(decoded);
          territoryCode = parsed.t; // Territory code is in the 't' field
        } catch (e) {
          // If decoding fails, try to get from relationships (fallback)
          const territoryId = point.relationships?.territory?.data?.id;
          territoryCode = territoryMap[territoryId] || territoryId;
        }
        
        const isActive = activePricePointIds.has(point.id);
        
        pricePoints.push({
          id: point.id,
          territory: territoryCode,
          customerPrice: point.attributes?.customerPrice,
          proceeds: point.attributes?.proceeds,
          proceedsYear2: point.attributes?.proceedsYear2,
          type: point.type,
          isActive: isActive
        });
      });

      logger.info(`Retrieved ${pricePoints.length} available price points for subscription ${subscriptionId} (${activePricePointIds.size} active)`);
      return pricePoints;
    } catch (error) {
      if (error.statusCode === 404 || error.status === 404) {
        throw new NotFoundError(`Subscription with ID ${subscriptionId} not found`);
      }
      logger.error(`Failed to get available price points: ${error.message}`, error);
      throw error;
    }
  }

  /**
   * Get subscription price points (returns only currently active prices)
   * @deprecated For promotional offers, use getAllAvailablePricePoints() instead
   * @param {string} subscriptionId - Subscription ID
   * @param {string} territory - Optional territory filter (e.g., 'USA', 'GBR')
   * @returns {array} Array of price point objects with id, territory, and pricing info
   */
  async getSubscriptionPricePoints(subscriptionId, territory = null) {
    try {
      if (!subscriptionId) {
        throw new ValidationError('Subscription ID is required');
      }

      // Get subscription with price points via the prices relationship endpoint
      const params = appStoreClient.buildParams(
        territory ? { territory } : {},
        ['territory', 'subscriptionPricePoint'],
        {
          subscriptionPrices: ['startDate'],
          subscriptionPricePoints: ['customerPrice', 'proceeds'],
          territories: ['currency']
        },
        null,
        200
      );

      const response = await appStoreClient.get(
        `${this.endpoints.subscriptions}/${subscriptionId}/prices`,
        params
      );

      if (!response.data || response.data.length === 0) {
        logger.warn(`No prices found for subscription ${subscriptionId}`);
        return [];
      }

      // Extract price points from included resources
      const pricePoints = [];
      
      if (response.included) {
        const pricePointsData = response.included.filter(item => item.type === 'subscriptionPricePoints');
        
        pricePointsData.forEach(point => {
          const territoryId = point.relationships?.territory?.data?.id;
          
          pricePoints.push({
            id: point.id,
            territory: territoryId,
            customerPrice: point.attributes?.customerPrice,
            proceeds: point.attributes?.proceeds,
            type: point.type
          });
        });
      }

      logger.info(`Retrieved ${pricePoints.length} price points for subscription ${subscriptionId}`);
      return pricePoints;
    } catch (error) {
      if (error.statusCode === 404) {
        throw new NotFoundError(`Subscription with ID ${subscriptionId} not found`);
      }
      logger.error(`Failed to get subscription price points: ${error.message}`, error);
      throw error;
    }
  }

  /**
   * Get subscription territories (for pricing)
   * @param {string} subscriptionId - Subscription ID
   * @returns {array} Array of territory IDs
   */
  async getSubscriptionTerritories(subscriptionId) {
    try {
      // Get subscription prices to extract territories
      // Note: GET /subscriptions/{id} doesn't support 'prices' include
      // We need to use the prices relationship endpoint instead
      const params = appStoreClient.buildParams(
        {},
        ['territory'],
        {
          subscriptionPrices: ['startDate'],
          territories: ['currency']
        },
        null,
        200 // Fetch all territories
      );

      const response = await appStoreClient.get(
        `${this.endpoints.subscriptions}/${subscriptionId}/prices`,
        params
      );

      // Extract territories from the prices data
      const territories = [];
      
      if (response.data && response.data.length > 0) {
        // Get territories from the price relationships
        response.data.forEach(price => {
          const territoryId = price.relationships?.territory?.data?.id;
          if (territoryId && !territories.includes(territoryId)) {
            territories.push(territoryId);
          }
        });
      }

      // If no territories found in relationships, try extracting from included array
      if (territories.length === 0 && response.included && response.included.length > 0) {
        response.included.forEach(item => {
          if (item.type === 'territories' && item.id && !territories.includes(item.id)) {
            territories.push(item.id);
          }
        });
      }

      // If we found territories, return them
      if (territories.length > 0) {
        return territories;
      }

      // Fallback to all available territories if no prices found
      logger.warn(`No territories found for subscription ${subscriptionId}, fetching all available territories`);
      return await subscriptionService.getAvailableTerritories();
    } catch (error) {
      logger.warn(`Could not get subscription territories: ${error.message}, fetching all available territories`);
      // Return all available territories
      return await subscriptionService.getAvailableTerritories();
    }
  }

  /**
   * Create a promotional offer for a subscription
   * @param {string} subscriptionId - Subscription ID
   * @param {object} offerData - Promotional offer data
   * @returns {object} Created promotional offer
   */
  async createPromotionalOffer(subscriptionId, offerData) {
    try {
      if (!subscriptionId) {
        throw new ValidationError('Subscription ID is required');
      }

      // Validate offer data
      this.validateOfferData(offerData);

      // Auto-generate offer code if not provided
      const offerCode = offerData.offerCode || this.generateOfferCode(offerData.offerCodePrefix);

      // Check if subscription already has an offer with the same name
      await this.checkDuplicateOfferName(subscriptionId, offerData.name);

      // Get territories for pricing (use provided territories or default)
      const territories = offerData.territories || await this.getSubscriptionTerritories(subscriptionId);
      
      logger.info(`Creating promotional offer with ${territories.length} territories`, {
        subscriptionId,
        territories,
        offerMode: offerData.offerMode,
        hasPricePoints: !!offerData.pricePoints
      });

      // Build inline price creates for each territory
      // Apple requires local IDs in the format ${local-id} (with curly braces)
      const inlinePrices = territories.map((territoryCode, index) => {
        const priceData = {
          type: 'subscriptionPromotionalOfferPrices',
          id: `\${price-${index}}`, // Local ID format with curly braces for inline create
          relationships: {
            territory: {
              data: {
                type: 'territories',
                id: territoryCode
              }
            }
          }
        };
        
        // For FREE_TRIAL offer mode, price point is not needed (it's free)
        // For PAY_AS_YOU_GO and PAY_UP_FRONT, we need to specify a price point
        if (offerData.offerMode !== 'FREE_TRIAL') {
          // User can provide price points in three formats:
          // 1. Single pricePointId (string) - automatically converted to equivalent tier for each territory
          // 2. pricePoints object mapping territories to price point IDs
          // 3. pricePoints object with 'default' key for automatic conversion
          let pricePointId = null;
          
          if (offerData.pricePoints) {
            if (typeof offerData.pricePoints === 'string') {
              // Single price point - automatically convert to equivalent tier for this territory
              // Extract the territory from the original price point and convert if needed
              try {
                const decoded = Buffer.from(offerData.pricePoints, 'base64').toString('utf-8');
                const originalData = JSON.parse(decoded);
                
                if (originalData.t === territoryCode) {
                  // Same territory, use as-is
                  pricePointId = offerData.pricePoints;
                  logger.info(`Using original price point for territory ${territoryCode} (tier: ${originalData.p})`);
                } else {
                  // Different territory, convert to equivalent tier
                  pricePointId = this.convertPricePointToTerritory(offerData.pricePoints, territoryCode);
                  logger.info(`Auto-converted price point from ${originalData.t} to ${territoryCode} (tier: ${originalData.p})`);
                }
              } catch (error) {
                throw new ValidationError(
                  `Invalid price point ID format. Expected base64-encoded JSON. Error: ${error.message}`
                );
              }
            } else if (typeof offerData.pricePoints === 'object') {
              // Territory-specific price points or default with auto-conversion
              if (offerData.pricePoints[territoryCode]) {
                // Explicit territory mapping provided
                pricePointId = offerData.pricePoints[territoryCode];
                logger.info(`Using explicit price point for territory ${territoryCode}`);
              } else if (offerData.pricePoints.default) {
                // Default price point with auto-conversion
                pricePointId = this.convertPricePointToTerritory(offerData.pricePoints.default, territoryCode);
                logger.info(`Auto-converted default price point to territory ${territoryCode}`);
              }
            }
          }
          
          if (!pricePointId) {
            // Throw an error instead of just warning - this will cause Apple's API to fail
            throw new ValidationError(
              `Price point is required for ${offerData.offerMode} offer mode in territory ${territoryCode}. ` +
              `Use --price-point parameter or set offerMode to FREE_TRIAL.`
            );
          }
          
          priceData.relationships.subscriptionPricePoint = {
            data: {
              type: 'subscriptionPricePoints',
              id: pricePointId
            }
          };
          logger.info(`Using price point ${pricePointId} for territory ${territoryCode}`);
        }
        
        return priceData;
      });

      // Build prices relationship linking to inline creates
      const pricesRelationship = {
        data: inlinePrices.map((_, index) => ({
          type: 'subscriptionPromotionalOfferPrices',
          id: `\${price-${index}}`
        }))
      };

      const payload = {
        data: {
          type: 'subscriptionPromotionalOffers',
          attributes: {
            name: offerData.name,
            offerCode: offerCode,
            duration: offerData.duration,
            offerMode: offerData.offerMode,
            numberOfPeriods: offerData.numberOfPeriods
          },
          relationships: {
            subscription: {
              data: {
                type: 'subscriptions',
                id: subscriptionId
              }
            },
            prices: pricesRelationship
          }
        },
        included: inlinePrices
      };

      const response = await appStoreAPIClient.createPromotionalOffer(payload);
      
      logger.info(`Created promotional offer: ${offerData.name}`, {
        subscriptionId,
        offerId: response.data?.id,
        offerCode: offerCode
      });

      return response;
    } catch (error) {
      logger.error('Failed to create promotional offer:', error);
      
      // Handle duplicate offer code error from Apple
      if (error.message && error.message.includes('already exists')) {
        throw new ValidationError('A promotional offer with this code or name already exists for this subscription');
      }
      
      throw error;
    }
  }

  /**
   * Check if a subscription already has a promotional offer with the same name
   * @param {string} subscriptionId - Subscription ID
   * @param {string} offerName - Offer name to check
   * @throws {ValidationError} If duplicate name exists
   */
  async checkDuplicateOfferName(subscriptionId, offerName) {
    try {
      // Get promotional offers for the subscription via relationship endpoint
      const params = appStoreClient.buildParams(
        {},
        [],
        {
          subscriptionPromotionalOffers: ['name', 'offerCode']
        },
        null,
        100
      );

      const response = await appStoreClient.get(
        `${this.endpoints.subscriptions}/${subscriptionId}/promotionalOffers`,
        params
      );

      // Check if any existing promotional offers have the same name
      if (response.data && response.data.length > 0) {
        const duplicateName = response.data.find(offer => 
          offer.attributes?.name?.toLowerCase() === offerName.toLowerCase()
        );

        if (duplicateName) {
          throw new ValidationError(
            `A promotional offer with the name "${offerName}" already exists for this subscription`
          );
        }
      }
    } catch (error) {
      // If the error is our validation error, re-throw it
      if (error instanceof ValidationError) {
        throw error;
      }
      // If it's a 404 or other error getting the subscription, we'll proceed anyway
      // as the subscription validation will happen in the main API call
      logger.warn(`Could not check for duplicate offer names: ${error.message}`);
    }
  }

  /**
   * Get a promotional offer by ID
   * @param {string} offerId - Promotional offer ID
   * @param {array} includes - Related resources to include
   * @returns {object} Promotional offer data
   */
  async getPromotionalOffer(offerId, includes = ['prices', 'subscription']) {
    try {
      if (!offerId) {
        throw new ValidationError('Promotional offer ID is required');
      }

      const opts = {};
      if (includes && includes.length > 0) {
        opts.include = includes;
      }

      const response = await appStoreAPIClient.getPromotionalOffer(offerId, opts);
      
      if (!response.data) {
        throw new NotFoundError(`Promotional offer with ID ${offerId} not found`);
      }

      logger.info(`Retrieved promotional offer: ${offerId}`);
      return response;
    } catch (error) {
      if (error.status === 404 || error.statusCode === 404) {
        throw new NotFoundError(`Promotional offer with ID ${offerId} not found`);
      }
      logger.error(`Failed to get promotional offer ${offerId}:`, error);
      throw error;
    }
  }

  /**
   * Update a promotional offer
   * @param {string} offerId - Promotional offer ID
   * @param {object} updateData - Data to update
   * @returns {object} Updated promotional offer
   */
  async updatePromotionalOffer(offerId, updateData) {
    try {
      if (!offerId) {
        throw new ValidationError('Promotional offer ID is required');
      }

      // Build the update payload with only provided fields
      const attributes = {};
      
      // Only name can be updated (offerCode cannot be changed after creation)
      if (updateData.name !== undefined) {
        if (updateData.name.length < 1 || updateData.name.length > 100) {
          throw new ValidationError('Name must be between 1 and 100 characters');
        }
        attributes.name = updateData.name;
      }

      if (Object.keys(attributes).length === 0) {
        throw new ValidationError('No valid update fields provided');
      }

      const payload = {
        data: {
          type: 'subscriptionPromotionalOffers',
          id: offerId,
          attributes
        }
      };

      const response = await appStoreAPIClient.updatePromotionalOffer(offerId, payload);
      
      logger.info(`Updated promotional offer: ${offerId}`);
      return response;
    } catch (error) {
      if (error.status === 404 || error.statusCode === 404) {
        throw new NotFoundError(`Promotional offer with ID ${offerId} not found`);
      }
      logger.error(`Failed to update promotional offer ${offerId}:`, error);
      throw error;
    }
  }

  /**
   * Delete a promotional offer
   * @param {string} offerId - Promotional offer ID
   * @returns {object} Deletion result
   */
  async deletePromotionalOffer(offerId) {
    try {
      if (!offerId) {
        throw new ValidationError('Promotional offer ID is required');
      }

      await appStoreAPIClient.deletePromotionalOffer(offerId);
      
      logger.info(`Deleted promotional offer: ${offerId}`);
      return { success: true, message: 'Promotional offer deleted successfully' };
    } catch (error) {
      if (error.status === 404 || error.statusCode === 404) {
        throw new NotFoundError(`Promotional offer with ID ${offerId} not found`);
      }
      logger.error(`Failed to delete promotional offer ${offerId}:`, error);
      throw error;
    }
  }

  /**
   * Get promotional offer prices
   * @param {string} offerId - Promotional offer ID
   * @param {string} territory - Optional territory filter
   * @returns {object} Pricing data
   */
  async getPromotionalOfferPrices(offerId, territory = null) {
    try {
      if (!offerId) {
        throw new ValidationError('Promotional offer ID is required');
      }

      const opts = {};
      if (territory) {
        opts.filterTerritory = [territory];
      }

      const response = await appStoreAPIClient.getPromotionalOfferPrices(offerId, opts);
      
      logger.info(`Retrieved prices for promotional offer: ${offerId}`);
      return response;
    } catch (error) {
      if (error.status === 404 || error.statusCode === 404) {
        throw new NotFoundError(`Promotional offer with ID ${offerId} not found`);
      }
      logger.error(`Failed to get promotional offer prices ${offerId}:`, error);
      throw error;
    }
  }

  /**
   * Get all promotional offers for a subscription
   * @param {string} subscriptionId - Subscription ID
   * @returns {array} Array of promotional offers
   */
  async getPromotionalOffersForSubscription(subscriptionId) {
    try {
      if (!subscriptionId) {
        throw new ValidationError('Subscription ID is required');
      }

      const params = appStoreClient.buildParams(
        {},
        ['promotionalOffers'],
        {
          subscriptions: ['name', 'productId'],
          subscriptionPromotionalOffers: ['name', 'offerCode', 'duration', 'offerMode', 'numberOfPeriods']
        }
      );

      const response = await appStoreClient.get(
        `${this.endpoints.subscriptions}/${subscriptionId}`,
        params
      );

      // Extract promotional offers from included resources
      const offers = [];
      if (response.included) {
        response.included.forEach(item => {
          if (item.type === 'subscriptionPromotionalOffers') {
            offers.push(item);
          }
        });
      }

      logger.info(`Retrieved ${offers.length} promotional offers for subscription ${subscriptionId}`);
      return offers;
    } catch (error) {
      if (error.statusCode === 404) {
        throw new NotFoundError(`Subscription with ID ${subscriptionId} not found`);
      }
      logger.error(`Failed to get promotional offers for subscription ${subscriptionId}:`, error);
      throw error;
    }
  }

  /**
   * Get all promotional offers for a bundle ID
   * @param {string} bundleId - App bundle ID
   * @param {object} options - Filter options
   * @returns {object} Promotional offers grouped by subscription
   */
  async getPromotionalOffersByBundleId(bundleId, options = {}) {
    try {
      if (!bundleId) {
        throw new ValidationError('Bundle ID is required');
      }

      const { referenceName, limit = 200 } = options;

      // Get all subscriptions for the bundle ID
      const subscriptionsData = await appService.getSubscriptionProductIdsByBundleId(bundleId, {
        useCache: false,
        saveToDb: false
      });

      // Filter subscriptions by reference name if provided
      let filteredSubscriptions = subscriptionsData.subscriptions;
      if (referenceName) {
        const matchingGroups = subscriptionsData.subscriptionGroups.filter(
          group => group.referenceName === referenceName
        );
        
        if (matchingGroups.length === 0) {
          logger.warn(`No subscription groups found with reference name: ${referenceName}`);
          return {
            bundleId,
            appName: subscriptionsData.appName,
            referenceName,
            subscriptions: [],
            totalOffers: 0
          };
        }

        // We need to get subscription group relationships to filter
        // For now, get all offers and let the client filter if needed
      }

      // Get promotional offers for each subscription
      const results = [];
      let totalOffers = 0;

      for (const subscription of filteredSubscriptions.slice(0, limit)) {
        try {
          const offers = await this.getPromotionalOffersForSubscription(subscription.id);
          
          if (offers.length > 0) {
            results.push({
              subscription: {
                id: subscription.id,
                name: subscription.name,
                productId: subscription.productId
              },
              offers: offers.map(offer => ({
                id: offer.id,
                name: offer.attributes?.name,
                offerCode: offer.attributes?.offerCode,
                duration: offer.attributes?.duration,
                offerMode: offer.attributes?.offerMode,
                numberOfPeriods: offer.attributes?.numberOfPeriods
              }))
            });
            totalOffers += offers.length;
          }
        } catch (error) {
          logger.warn(`Failed to get offers for subscription ${subscription.id}:`, error.message);
        }
      }

      logger.info(`Retrieved ${totalOffers} promotional offers for bundle ID ${bundleId}`);
      
      return {
        bundleId,
        appName: subscriptionsData.appName,
        referenceName: referenceName || null,
        subscriptions: results,
        totalOffers
      };
    } catch (error) {
      logger.error(`Failed to get promotional offers for bundle ID ${bundleId}:`, error);
      throw error;
    }
  }

  /**
   * Bulk create promotional offers for subscriptions in a bundle ID
   * @param {string} bundleId - App bundle ID
   * @param {string} referenceName - Subscription group reference name (exact match only), or "*" for all groups
   * @param {object} offerTemplate - Template for promotional offers
   * @returns {object} Bulk creation results
   */
  async bulkCreatePromotionalOffers(bundleId, referenceName, offerTemplate) {
    try {
      if (!bundleId) {
        throw new ValidationError('Bundle ID is required');
      }

      if (!referenceName) {
        throw new ValidationError('Reference name is required for bulk creation (use "*" for all groups)');
      }

      // Validate offer template
      this.validateOfferData(offerTemplate);

      const isAllGroups = referenceName === '*';
      logger.info(`Starting bulk promotional offer creation for bundle ID: ${bundleId}, reference name: ${referenceName}${isAllGroups ? ' (all groups)' : ''}`);

      // Get app and subscription groups
      const subscriptionsData = await appService.getSubscriptionProductIdsByBundleId(bundleId, {
        useCache: false,
        saveToDb: false
      });

      // Find matching subscription groups
      let matchingGroups;
      if (isAllGroups) {
        matchingGroups = subscriptionsData.subscriptionGroups;
        logger.info(`Creating offers for all ${matchingGroups.length} subscription groups`);
      } else {
        // Exact match only
        matchingGroups = subscriptionsData.subscriptionGroups.filter(
          group => group.referenceName === referenceName
        );

        if (matchingGroups.length === 0) {
          throw new NotFoundError(
            `No subscription groups found with reference name "${referenceName}" for bundle ID ${bundleId}`
          );
        }

        logger.info(`Found ${matchingGroups.length} matching subscription group(s)`);
      }

      // Get all subscriptions for the app
      const allSubscriptions = subscriptionsData.subscriptions;

      if (allSubscriptions.length === 0) {
        throw new ValidationError(
          `No subscriptions found for bundle ID ${bundleId}`
        );
      }

      // Filter subscriptions to only those belonging to matching groups
      const matchingGroupIds = matchingGroups.map(g => g.id);
      const filteredSubscriptions = allSubscriptions.filter(sub => {
        return matchingGroupIds.includes(sub.groupId);
      });

      if (filteredSubscriptions.length === 0) {
        throw new ValidationError(
          `No subscriptions found in ${isAllGroups ? 'any groups' : `group "${referenceName}"`} for bundle ID ${bundleId}`
        );
      }

      logger.info(`Filtered to ${filteredSubscriptions.length} subscriptions in matching group(s)`);
      
      const results = {
        created: [],
        failed: [],
        summary: {
          bundleId,
          appName: subscriptionsData.appName,
          referenceName: isAllGroups ? '*' : referenceName,
          matchedGroups: matchingGroups.length,
          matchedSubscriptions: filteredSubscriptions.length,
          total: filteredSubscriptions.length,
          succeeded: 0,
          failed: 0
        }
      };

      // Get the offer code prefix
      const offerCodePrefix = offerTemplate.offerCodePrefix || offerTemplate.name.replace(/[^A-Z0-9]/gi, '').substring(0, 10).toUpperCase();

      // Create promotional offers for each subscription in the filtered list
      let counter = 1;
      for (const subscription of filteredSubscriptions) {
        try {
          // Generate unique offer code and name with counter
          const offerCode = this.generateOfferCode(`${offerCodePrefix}${counter}`);
          // Make offer name unique by appending counter (Apple requires unique names per subscription)
          const uniqueOfferName = `${offerTemplate.name} ${counter}`;

          const offerData = {
            name: uniqueOfferName,
            offerCode: offerCode,
            duration: offerTemplate.duration,
            offerMode: offerTemplate.offerMode,
            numberOfPeriods: offerTemplate.numberOfPeriods
          };

          const response = await this.createPromotionalOffer(subscription.id, offerData);

          results.created.push({
            subscriptionId: subscription.id,
            subscriptionName: subscription.name,
            productId: subscription.productId,
            offerId: response.data?.id,
            offerCode: offerCode,
            offerName: uniqueOfferName
          });

          results.summary.succeeded++;
          counter++;
        } catch (error) {
          logger.warn(`Failed to create offer for subscription ${subscription.id}:`, error.message);
          
          results.failed.push({
            subscriptionId: subscription.id,
            subscriptionName: subscription.name,
            productId: subscription.productId,
            error: error.message,
            code: error instanceof ValidationError ? 'VALIDATION_ERROR' : 'API_ERROR'
          });

          results.summary.failed++;
        }
      }

      logger.info(`Bulk creation completed: ${results.summary.succeeded} succeeded, ${results.summary.failed} failed`);

      return results;
    } catch (error) {
      logger.error('Failed to bulk create promotional offers:', error);
      throw error;
    }
  }
}

// Export singleton instance
const promotionalOfferService = new PromotionalOfferService();
module.exports = promotionalOfferService;
