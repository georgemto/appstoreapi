const appStoreClient = require('./appstore-client');
const appStoreAPIClient = require('./appstore-api-client');
const appService = require('./apps');
const subscriptionService = require('./subscriptions');
const { config } = require('../config/appstore');
const { NotFoundError, ValidationError, AppleAPIError } = require('../utils/errors');
const logger = require('../utils/logger');

class IntroductoryOfferService {
  constructor() {
    this.endpoints = config.endpoints;
  }

  /**
   * Validate introductory offer data
   * @param {object} data - Offer data to validate
   * @throws {ValidationError} If data is invalid
   */
  validateOfferData(data) {
    const required = ['duration', 'offerMode', 'numberOfPeriods'];
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

    // Validate dates if provided
    if (data.startDate) {
      const startDate = new Date(data.startDate);
      if (isNaN(startDate.getTime())) {
        throw new ValidationError('Invalid startDate format. Use ISO 8601 format (e.g., 2024-01-01)');
      }
    }

    if (data.endDate) {
      const endDate = new Date(data.endDate);
      if (isNaN(endDate.getTime())) {
        throw new ValidationError('Invalid endDate format. Use ISO 8601 format (e.g., 2024-12-31)');
      }
      
      if (data.startDate) {
        const startDate = new Date(data.startDate);
        if (endDate <= startDate) {
          throw new ValidationError('endDate must be after startDate');
        }
      }
    }

    // Validate territory is provided
    if (!data.territory) {
      throw new ValidationError('Territory is required for introductory offers');
    }

    // Validate price point for non-free offers
    if (data.offerMode !== 'FREE_TRIAL' && !data.subscriptionPricePoint) {
      throw new ValidationError(
        `Price point is required for ${data.offerMode} offer mode. Use subscriptionPricePoint parameter or set offerMode to FREE_TRIAL.`
      );
    }
  }

  /**
   * Convert a price point ID to a different territory using the same price tier
   * @param {string} pricePointId - Original price point ID (base64 encoded)
   * @param {string} targetTerritory - Target territory code (e.g., 'USA', 'GBR', 'CAN')
   * @returns {string} New price point ID for the target territory with the same price tier
   */
  convertPricePointToTerritory(pricePointId, targetTerritory) {
    try {
      const decoded = Buffer.from(pricePointId, 'base64').toString('utf-8');
      const pricePointData = JSON.parse(decoded);
      
      const subscriptionId = pricePointData.s;
      const priceTier = pricePointData.p;
      
      const newPricePointData = {
        s: subscriptionId,
        t: targetTerritory,
        p: priceTier
      };
      
      const newPricePointId = Buffer.from(JSON.stringify(newPricePointData))
        .toString('base64')
        .replace(/=+$/, '');
      
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
   * Create an introductory offer for a subscription
   * @param {string} subscriptionId - Subscription ID
   * @param {object} offerData - Introductory offer data
   * @returns {object} Created introductory offer
   */
  async createIntroductoryOffer(subscriptionId, offerData) {
    try {
      if (!subscriptionId) {
        throw new ValidationError('Subscription ID is required');
      }

      // Validate offer data
      this.validateOfferData(offerData);

      const payload = {
        data: {
          type: 'subscriptionIntroductoryOffers',
          attributes: {
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
            territory: {
              data: {
                type: 'territories',
                id: offerData.territory
              }
            }
          }
        }
      };

      // Add optional dates
      if (offerData.startDate) {
        payload.data.attributes.startDate = offerData.startDate;
      }
      if (offerData.endDate) {
        payload.data.attributes.endDate = offerData.endDate;
      }

      // Add price point for non-free offers
      if (offerData.offerMode !== 'FREE_TRIAL' && offerData.subscriptionPricePoint) {
        payload.data.relationships.subscriptionPricePoint = {
          data: {
            type: 'subscriptionPricePoints',
            id: offerData.subscriptionPricePoint
          }
        };
      }

      logger.info(`Creating introductory offer`, {
        subscriptionId,
        territory: offerData.territory,
        offerMode: offerData.offerMode,
        duration: offerData.duration
      });

      const response = await appStoreAPIClient.createIntroductoryOffer(payload);
      
      logger.info(`Created introductory offer: ${response.data?.id}`, {
        subscriptionId,
        offerId: response.data?.id,
        territory: offerData.territory
      });

      return response;
    } catch (error) {
      logger.error('Failed to create introductory offer:', error);
      
      if (error.message && error.message.includes('already exists')) {
        throw new ValidationError('An introductory offer already exists for this subscription and territory');
      }
      
      throw error;
    }
  }

  /**
   * Get an introductory offer by ID
   * @param {string} offerId - Introductory offer ID
   * @param {array} includes - Related resources to include
   * @returns {object} Introductory offer data
   */
  async getIntroductoryOffer(offerId, includes = ['subscription', 'territory', 'subscriptionPricePoint']) {
    try {
      if (!offerId) {
        throw new ValidationError('Introductory offer ID is required');
      }

      const opts = {};
      if (includes && includes.length > 0) {
        opts.include = includes;
      }

      const response = await appStoreAPIClient.getIntroductoryOffer(offerId, opts);
      
      if (!response.data) {
        throw new NotFoundError(`Introductory offer with ID ${offerId} not found`);
      }

      logger.info(`Retrieved introductory offer: ${offerId}`);
      return response;
    } catch (error) {
      if (error.status === 404 || error.statusCode === 404) {
        throw new NotFoundError(`Introductory offer with ID ${offerId} not found`);
      }
      logger.error(`Failed to get introductory offer ${offerId}:`, error);
      throw error;
    }
  }

  /**
   * Update an introductory offer
   * @param {string} offerId - Introductory offer ID
   * @param {object} updateData - Data to update
   * @returns {object} Updated introductory offer
   */
  async updateIntroductoryOffer(offerId, updateData) {
    try {
      if (!offerId) {
        throw new ValidationError('Introductory offer ID is required');
      }

      const attributes = {};
      
      // Only startDate and endDate can be updated
      if (updateData.startDate !== undefined) {
        if (updateData.startDate) {
          const startDate = new Date(updateData.startDate);
          if (isNaN(startDate.getTime())) {
            throw new ValidationError('Invalid startDate format. Use ISO 8601 format');
          }
        }
        attributes.startDate = updateData.startDate;
      }

      if (updateData.endDate !== undefined) {
        if (updateData.endDate) {
          const endDate = new Date(updateData.endDate);
          if (isNaN(endDate.getTime())) {
            throw new ValidationError('Invalid endDate format. Use ISO 8601 format');
          }
        }
        attributes.endDate = updateData.endDate;
      }

      if (Object.keys(attributes).length === 0) {
        throw new ValidationError('No valid update fields provided. Only startDate and endDate can be updated.');
      }

      const payload = {
        data: {
          type: 'subscriptionIntroductoryOffers',
          id: offerId,
          attributes
        }
      };

      const response = await appStoreAPIClient.updateIntroductoryOffer(offerId, payload);
      
      logger.info(`Updated introductory offer: ${offerId}`);
      return response;
    } catch (error) {
      if (error.status === 404 || error.statusCode === 404) {
        throw new NotFoundError(`Introductory offer with ID ${offerId} not found`);
      }
      logger.error(`Failed to update introductory offer ${offerId}:`, error);
      throw error;
    }
  }

  /**
   * Delete an introductory offer
   * @param {string} offerId - Introductory offer ID
   * @returns {object} Deletion result
   */
  async deleteIntroductoryOffer(offerId) {
    try {
      if (!offerId) {
        throw new ValidationError('Introductory offer ID is required');
      }

      await appStoreAPIClient.deleteIntroductoryOffer(offerId);
      
      logger.info(`Deleted introductory offer: ${offerId}`);
      return { success: true, message: 'Introductory offer deleted successfully' };
    } catch (error) {
      if (error.status === 404 || error.statusCode === 404) {
        throw new NotFoundError(`Introductory offer with ID ${offerId} not found`);
      }
      logger.error(`Failed to delete introductory offer ${offerId}:`, error);
      throw error;
    }
  }

  /**
   * Get all introductory offers for a subscription
   * @param {string} subscriptionId - Subscription ID
   * @returns {array} Array of introductory offers
   */
  async getIntroductoryOffersForSubscription(subscriptionId) {
    try {
      if (!subscriptionId) {
        throw new ValidationError('Subscription ID is required');
      }

      const params = appStoreClient.buildParams(
        {},
        ['introductoryOffers'],
        {
          subscriptions: ['name', 'productId'],
          subscriptionIntroductoryOffers: ['startDate', 'endDate', 'duration', 'offerMode', 'numberOfPeriods']
        }
      );

      const response = await appStoreClient.get(
        `${this.endpoints.subscriptions}/${subscriptionId}`,
        params
      );

      // Extract introductory offers from included resources
      const offers = [];
      if (response.included) {
        response.included.forEach(item => {
          if (item.type === 'subscriptionIntroductoryOffers') {
            offers.push(item);
          }
        });
      }

      logger.info(`Retrieved ${offers.length} introductory offers for subscription ${subscriptionId}`);
      return offers;
    } catch (error) {
      if (error.statusCode === 404) {
        throw new NotFoundError(`Subscription with ID ${subscriptionId} not found`);
      }
      logger.error(`Failed to get introductory offers for subscription ${subscriptionId}:`, error);
      throw error;
    }
  }

  /**
   * Get all introductory offers for a bundle ID
   * @param {string} bundleId - App bundle ID
   * @param {object} options - Filter options
   * @returns {object} Introductory offers grouped by subscription
   */
  async getIntroductoryOffersByBundleId(bundleId, options = {}) {
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

      let filteredSubscriptions = subscriptionsData.subscriptions;
      
      // Filter by reference name if provided
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

        const matchingGroupIds = matchingGroups.map(g => g.id);
        filteredSubscriptions = subscriptionsData.subscriptions.filter(sub => 
          matchingGroupIds.includes(sub.groupId)
        );
      }

      // Get introductory offers for each subscription
      const results = [];
      let totalOffers = 0;

      for (const subscription of filteredSubscriptions.slice(0, limit)) {
        try {
          const offers = await this.getIntroductoryOffersForSubscription(subscription.id);
          
          if (offers.length > 0) {
            results.push({
              subscription: {
                id: subscription.id,
                name: subscription.name,
                productId: subscription.productId
              },
              offers: offers.map(offer => ({
                id: offer.id,
                startDate: offer.attributes?.startDate,
                endDate: offer.attributes?.endDate,
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

      logger.info(`Retrieved ${totalOffers} introductory offers for bundle ID ${bundleId}`);
      
      return {
        bundleId,
        appName: subscriptionsData.appName,
        referenceName: referenceName || null,
        subscriptions: results,
        totalOffers
      };
    } catch (error) {
      logger.error(`Failed to get introductory offers for bundle ID ${bundleId}:`, error);
      throw error;
    }
  }

  /**
   * Bulk create introductory offers for subscriptions in a bundle ID
   * @param {string} bundleId - App bundle ID
   * @param {string} referenceName - Subscription group reference name (exact match only), or "*" for all groups
   * @param {object} offerTemplate - Template for introductory offers
   * @returns {object} Bulk creation results
   */
  async bulkCreateIntroductoryOffers(bundleId, referenceName, offerTemplate) {
    try {
      if (!bundleId) {
        throw new ValidationError('Bundle ID is required');
      }

      if (!referenceName) {
        throw new ValidationError('Reference name is required for bulk creation (use "*" for all groups)');
      }

      // Validate required fields in template
      const required = ['duration', 'offerMode', 'numberOfPeriods', 'territories'];
      const missing = required.filter(field => !offerTemplate[field]);
      if (missing.length > 0) {
        throw new ValidationError(`Missing required fields in offerTemplate: ${missing.join(', ')}`);
      }

      if (!Array.isArray(offerTemplate.territories) || offerTemplate.territories.length === 0) {
        throw new ValidationError('territories must be a non-empty array of territory codes');
      }

      const isAllGroups = referenceName === '*';
      logger.info(`Starting bulk introductory offer creation for bundle ID: ${bundleId}, reference name: ${referenceName}${isAllGroups ? ' (all groups)' : ''}`);

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
          territories: offerTemplate.territories,
          total: filteredSubscriptions.length * offerTemplate.territories.length,
          succeeded: 0,
          failed: 0
        }
      };

      // Create introductory offers for each subscription and territory
      for (const subscription of filteredSubscriptions) {
        for (const territory of offerTemplate.territories) {
          try {
            const offerData = {
              duration: offerTemplate.duration,
              offerMode: offerTemplate.offerMode,
              numberOfPeriods: offerTemplate.numberOfPeriods,
              territory: territory
            };

            // Add optional fields
            if (offerTemplate.startDate) {
              offerData.startDate = offerTemplate.startDate;
            }
            if (offerTemplate.endDate) {
              offerData.endDate = offerTemplate.endDate;
            }
            if (offerTemplate.subscriptionPricePoint) {
              // Convert price point to target territory if needed
              offerData.subscriptionPricePoint = this.convertPricePointToTerritory(
                offerTemplate.subscriptionPricePoint,
                territory
              );
            }

            const response = await this.createIntroductoryOffer(subscription.id, offerData);

            results.created.push({
              subscriptionId: subscription.id,
              subscriptionName: subscription.name,
              productId: subscription.productId,
              territory: territory,
              offerId: response.data?.id
            });

            results.summary.succeeded++;
          } catch (error) {
            logger.warn(`Failed to create offer for subscription ${subscription.id} in ${territory}:`, error.message);
            
            results.failed.push({
              subscriptionId: subscription.id,
              subscriptionName: subscription.name,
              productId: subscription.productId,
              territory: territory,
              error: error.message,
              code: error instanceof ValidationError ? 'VALIDATION_ERROR' : 'API_ERROR'
            });

            results.summary.failed++;
          }
        }
      }

      logger.info(`Bulk creation completed: ${results.summary.succeeded} succeeded, ${results.summary.failed} failed`);

      return results;
    } catch (error) {
      logger.error('Failed to bulk create introductory offers:', error);
      throw error;
    }
  }
}

// Export singleton instance
const introductoryOfferService = new IntroductoryOfferService();
module.exports = introductoryOfferService;
