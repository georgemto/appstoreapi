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
      
      if (error.message && (
        error.message.includes('already exists') ||
        error.message.includes('overlaps with existing offer')
      )) {
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
    if (!offerId) {
      throw new ValidationError('Introductory offer ID is required');
    }

    // Use direct HTTP client (axios) instead of the generated SDK so we get
    // real status codes and the Apple error body — the SDK's superagent path
    // was returning success without surfacing the Apple-side rejection.
    // Note: Apple disallows GET_INSTANCE on this resource (returns 403:
    // "Allowed operations are: CREATE, DELETE, UPDATE"), so post-delete
    // verification has to happen via the /subscriptions/{id}/introductoryOffers
    // list endpoint, not by GETing the individual offer.
    try {
      await appStoreClient.delete(`/subscriptionIntroductoryOffers/${encodeURIComponent(offerId)}`);
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

      // Use the dedicated /subscriptions/{id}/introductoryOffers endpoint with
      // pagination. The previous approach (?include=introductoryOffers on the
      // subscription) was capped by Apple's default limit[introductoryOffers]
      // (~10), so subscriptions with many per-territory offers were heavily
      // under-reported, producing CSVs/JSON with stale or missing IDs that
      // then 404'd on DELETE.
      const offers = [];
      let response = await appStoreClient.get(
        `${this.endpoints.subscriptions}/${subscriptionId}/introductoryOffers`,
        {
          'fields[subscriptionIntroductoryOffers]':
            'startDate,endDate,duration,offerMode,numberOfPeriods,territory,subscriptionPricePoint',
          include: 'territory',
          limit: 200
        }
      );

      while (response && response.data) {
        offers.push(...response.data);
        const nextUrl = response.links?.next;
        if (!nextUrl) break;
        response = await appStoreClient.getNextPage(nextUrl);
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
                territory: offer.relationships?.territory?.data?.id || null,
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
      let filteredSubscriptions = allSubscriptions.filter(sub => {
        return matchingGroupIds.includes(sub.groupId);
      });

      if (filteredSubscriptions.length === 0) {
        throw new ValidationError(
          `No subscriptions found in ${isAllGroups ? 'any groups' : `group "${referenceName}"`} for bundle ID ${bundleId}`
        );
      }

      // Optional name-substring filter (case-insensitive). Used when groups mix billing
      // cadences (e.g. Monthly + Annual) and the caller wants one template to apply only
      // to a subset — e.g. --match "Monthly" to skip annual subscriptions.
      if (offerTemplate.nameMatch) {
        const needle = offerTemplate.nameMatch.toLowerCase();
        const before = filteredSubscriptions.length;
        filteredSubscriptions = filteredSubscriptions.filter(
          sub => (sub.name || '').toLowerCase().includes(needle)
        );
        logger.info(`Name filter "${offerTemplate.nameMatch}" reduced ${before} → ${filteredSubscriptions.length} subscriptions`);

        if (filteredSubscriptions.length === 0) {
          throw new ValidationError(
            `No subscriptions matched name filter "${offerTemplate.nameMatch}" in ${isAllGroups ? 'any groups' : `group "${referenceName}"`}`
          );
        }
      }

      // Optional subscriptionPeriod filter. More reliable than --match when subscriptions
      // aren't named by cadence — e.g. planPeriodFilter: ['ONE_MONTH'] keeps only monthly plans.
      if (offerTemplate.planPeriodFilter && offerTemplate.planPeriodFilter.length > 0) {
        const allowed = new Set(offerTemplate.planPeriodFilter);
        const before = filteredSubscriptions.length;
        filteredSubscriptions = filteredSubscriptions.filter(
          sub => sub.subscriptionPeriod && allowed.has(sub.subscriptionPeriod)
        );
        logger.info(`Plan-period filter [${[...allowed].join(', ')}] reduced ${before} → ${filteredSubscriptions.length} subscriptions`);

        if (filteredSubscriptions.length === 0) {
          throw new ValidationError(
            `No subscriptions matched plan-period filter [${[...allowed].join(', ')}] in ${isAllGroups ? 'any groups' : `group "${referenceName}"`}`
          );
        }
      }

      // Optional explicit productId allowlist — e.g. supplied by --from-file
      // (CSV/JSON output from get-apple-product-ids.js). Useful when the caller
      // already has a curated list of product IDs and wants to constrain the
      // bulk run to exactly those, regardless of group / name / plan period.
      if (offerTemplate.productIdFilter && offerTemplate.productIdFilter.length > 0) {
        const allowed = new Set(offerTemplate.productIdFilter);
        const before = filteredSubscriptions.length;
        filteredSubscriptions = filteredSubscriptions.filter(
          sub => sub.productId && allowed.has(sub.productId)
        );
        logger.info(`Product-ID filter (${allowed.size} ids) reduced ${before} → ${filteredSubscriptions.length} subscriptions`);

        if (filteredSubscriptions.length === 0) {
          throw new ValidationError(
            `No subscriptions matched the supplied productId list (${allowed.size} ids) in ${isAllGroups ? 'any groups' : `group "${referenceName}"`}`
          );
        }
      }

      logger.info(`Filtered to ${filteredSubscriptions.length} subscriptions in matching group(s)`);

      const onConflict = offerTemplate.onConflict || 'skip';
      const validConflictModes = ['skip', 'update', 'replace'];
      if (!validConflictModes.includes(onConflict)) {
        throw new ValidationError(`Invalid onConflict mode "${onConflict}". Must be one of: ${validConflictModes.join(', ')}`);
      }

      const results = {
        created: [],
        updated: [],
        replaced: [],
        skipped: [],
        failed: [],
        summary: {
          bundleId,
          appName: subscriptionsData.appName,
          referenceName: isAllGroups ? '*' : referenceName,
          nameMatch: offerTemplate.nameMatch || null,
          matchedGroups: matchingGroups.length,
          matchedSubscriptions: filteredSubscriptions.length,
          territories: offerTemplate.territories,
          onConflict,
          total: filteredSubscriptions.length * offerTemplate.territories.length,
          succeeded: 0,
          updated: 0,
          replaced: 0,
          skipped: 0,
          failed: 0
        }
      };

      // Lazy cache of existing offers per subscription.id — populated only when
      // a conflict occurs, so clean create-only runs pay no extra API cost.
      const existingOffersCache = new Map();
      const getExistingForTerritory = async (subscriptionId, territory) => {
        if (!existingOffersCache.has(subscriptionId)) {
          const offers = await this.getIntroductoryOffersForSubscription(subscriptionId);
          existingOffersCache.set(subscriptionId, offers);
        }
        return (existingOffersCache.get(subscriptionId) || []).find(
          o => o.relationships?.territory?.data?.id === territory
        );
      };
      const invalidateCache = (subscriptionId) => existingOffersCache.delete(subscriptionId);

      const buildOfferData = (territory) => {
        const offerData = {
          duration: offerTemplate.duration,
          offerMode: offerTemplate.offerMode,
          numberOfPeriods: offerTemplate.numberOfPeriods,
          territory
        };
        if (offerTemplate.startDate) offerData.startDate = offerTemplate.startDate;
        if (offerTemplate.endDate) offerData.endDate = offerTemplate.endDate;
        if (offerTemplate.subscriptionPricePoint) {
          offerData.subscriptionPricePoint = this.convertPricePointToTerritory(
            offerTemplate.subscriptionPricePoint,
            territory
          );
        }
        return offerData;
      };

      // Create introductory offers for each subscription and territory
      for (const subscription of filteredSubscriptions) {
        for (const territory of offerTemplate.territories) {
          const offerData = buildOfferData(territory);

          const markFailed = (error, code) => {
            logger.warn(`Failed for subscription ${subscription.id} in ${territory}:`, error.message);
            results.failed.push({
              subscriptionId: subscription.id,
              subscriptionName: subscription.name,
              productId: subscription.productId,
              territory,
              error: error.message,
              code: code || (error instanceof ValidationError ? 'VALIDATION_ERROR' : 'API_ERROR')
            });
            results.summary.failed++;
          };

          try {
            const response = await this.createIntroductoryOffer(subscription.id, offerData);
            results.created.push({
              subscriptionId: subscription.id,
              subscriptionName: subscription.name,
              productId: subscription.productId,
              territory,
              offerId: response.data?.id
            });
            results.summary.succeeded++;
          } catch (error) {
            const isConflict = error instanceof ValidationError
              && typeof error.message === 'string'
              && error.message.includes('already exists');

            if (!isConflict) {
              markFailed(error);
              continue;
            }

            // Conflict: dispatch on onConflict mode
            if (onConflict === 'skip') {
              results.skipped.push({
                subscriptionId: subscription.id,
                subscriptionName: subscription.name,
                productId: subscription.productId,
                territory,
                reason: 'offer already exists'
              });
              results.summary.skipped++;
              continue;
            }

            let existing;
            try {
              existing = await getExistingForTerritory(subscription.id, territory);
            } catch (lookupError) {
              markFailed(new Error(`conflict detected but lookup failed: ${lookupError.message}`), 'LOOKUP_FAILED');
              continue;
            }

            if (!existing) {
              markFailed(new Error('conflict reported by API but existing offer not found for this territory'), 'CONFLICT_UNRESOLVED');
              continue;
            }

            if (onConflict === 'update') {
              if (!offerTemplate.startDate && !offerTemplate.endDate) {
                markFailed(new Error('--on-conflict update requires --start-date and/or --end-date in the template'), 'NO_UPDATE_FIELDS');
                continue;
              }
              try {
                const updated = await this.updateIntroductoryOffer(existing.id, {
                  startDate: offerTemplate.startDate,
                  endDate: offerTemplate.endDate
                });
                results.updated.push({
                  subscriptionId: subscription.id,
                  subscriptionName: subscription.name,
                  productId: subscription.productId,
                  territory,
                  offerId: existing.id,
                  startDate: offerTemplate.startDate || null,
                  endDate: offerTemplate.endDate || null
                });
                results.summary.updated++;
                // Refresh cached offer with new attributes (best-effort)
                if (updated?.data?.attributes) {
                  Object.assign(existing.attributes || (existing.attributes = {}), updated.data.attributes);
                }
              } catch (updateError) {
                markFailed(updateError, 'UPDATE_FAILED');
              }
              continue;
            }

            if (onConflict === 'replace') {
              try {
                await this.deleteIntroductoryOffer(existing.id);
              } catch (deleteError) {
                markFailed(new Error(`replace: delete failed — ${deleteError.message}`), 'DELETE_FAILED');
                continue;
              }
              // Delete succeeded; invalidate cache so a retry on another territory re-fetches.
              invalidateCache(subscription.id);

              try {
                const response = await this.createIntroductoryOffer(subscription.id, offerData);
                results.replaced.push({
                  subscriptionId: subscription.id,
                  subscriptionName: subscription.name,
                  productId: subscription.productId,
                  territory,
                  oldOfferId: existing.id,
                  offerId: response.data?.id
                });
                results.summary.replaced++;
              } catch (recreateError) {
                markFailed(new Error(`replace: delete succeeded but recreate failed — ${recreateError.message}`), 'RECREATE_FAILED');
              }
            }
          }
        }
      }

      logger.info('Bulk creation completed', {
        succeeded: results.summary.succeeded,
        updated: results.summary.updated,
        replaced: results.summary.replaced,
        skipped: results.summary.skipped,
        failed: results.summary.failed
      });

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
