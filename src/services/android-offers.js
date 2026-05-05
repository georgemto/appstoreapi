const googlePlayClient = require('./googleplay-client');
const {
  config,
  OFFER_PHASE_TYPES,
  RECURRENCE_MODES,
  DURATION_MAPPING,
  OFFER_MODE_MAPPING
} = require('../config/googleplay');
const { NotFoundError, ValidationError, GooglePlayAPIError } = require('../utils/errors');
const logger = require('../utils/logger');

/**
 * Return a shallow copy of `payload` containing only top-level keys listed in
 * the comma-separated `updateMask`. Used by bulk update to honor the caller's
 * --update-mask without sending fields that might be rejected on ACTIVE offers.
 */
function filterByUpdateMask(payload, updateMask) {
  const wanted = new Set(updateMask.split(',').map(s => s.trim()).filter(Boolean));
  const out = {};
  for (const key of wanted) {
    if (key in payload) out[key] = payload[key];
  }
  return out;
}

class AndroidOffersService {
  constructor() {
    // Configuration is loaded from googleplay config
  }

  /**
   * Validate offer data
   * @param {object} data - Offer data to validate
   * @throws {ValidationError} If data is invalid
   */
  validateOfferData(data) {
    const required = ['offerId', 'basePlanId', 'phases'];
    const missing = required.filter(field => !data[field]);

    if (missing.length > 0) {
      throw new ValidationError(`Missing required fields: ${missing.join(', ')}`);
    }

    // Validate offer ID format (alphanumeric, dashes, underscores)
    if (!/^[a-zA-Z0-9_-]+$/.test(data.offerId)) {
      throw new ValidationError(
        'Offer ID can only contain letters, numbers, underscores, and hyphens'
      );
    }

    // Validate phases
    if (!Array.isArray(data.phases) || data.phases.length === 0) {
      throw new ValidationError('At least one phase is required');
    }

    // Validate each phase
    data.phases.forEach((phase, index) => {
      this.validatePhase(phase, index);
    });

    // Validate targeting if provided
    if (data.targeting) {
      this.validateTargeting(data.targeting);
    }
  }

  /**
   * Validate a single offer phase
   * @param {object} phase - Phase data
   * @param {number} index - Phase index
   */
  validatePhase(phase, index) {
    // Validate phase type / offer mode
    if (!phase.phaseType && !phase.offerMode) {
      throw new ValidationError(`Phase ${index + 1}: phaseType or offerMode is required`);
    }

    const phaseType = phase.phaseType || OFFER_MODE_MAPPING[phase.offerMode];
    if (!phaseType) {
      throw new ValidationError(
        `Phase ${index + 1}: Invalid phase type or offer mode. Valid offerModes: FREE_TRIAL, PAY_UP_FRONT, PAY_AS_YOU_GO`
      );
    }

    // Validate duration
    if (!phase.duration) {
      throw new ValidationError(`Phase ${index + 1}: duration is required`);
    }

    const duration = DURATION_MAPPING[phase.duration] || phase.duration;
    if (!duration || !DURATION_MAPPING[phase.duration] && !/^P\d+[DWMY]$/.test(phase.duration)) {
      throw new ValidationError(
        `Phase ${index + 1}: Invalid duration. Use iOS format (ONE_WEEK, ONE_MONTH, etc.) or ISO 8601 (P1W, P1M, etc.)`
      );
    }

    // Validate recurrence count for recurring phases
    if (phaseType === OFFER_PHASE_TYPES.RECURRING_PAYMENT) {
      if (!phase.recurrenceCount || phase.recurrenceCount < 1) {
        throw new ValidationError(`Phase ${index + 1}: recurrenceCount is required for PAY_AS_YOU_GO phases (min: 1)`);
      }
    }

    // Validate price for paid phases
    if (phaseType !== OFFER_PHASE_TYPES.FREE_TRIAL) {
      if (!phase.price && !phase.pricePercentageDiscount) {
        throw new ValidationError(
          `Phase ${index + 1}: price or pricePercentageDiscount is required for paid phases`
        );
      }
    }
  }

  /**
   * Validate targeting criteria
   * @param {object} targeting - Targeting configuration
   */
  validateTargeting(targeting) {
    if (targeting.acquisitionRule) {
      const scope = targeting.acquisitionRule.scope || {};
      const scopeKeys = ['thisSubscription', 'specificSubscriptionInApp', 'anySubscriptionInApp'];
      const present = scopeKeys.filter(k => k in scope);
      if (present.length === 0) {
        logger.warn('acquisitionRule.scope has no recognized field; expected one of: thisSubscription, specificSubscriptionInApp, anySubscriptionInApp');
      }
    }
  }

  /**
   * Convert iOS-style offer data to Google Play format
   * @param {object} data - iOS-style offer data
   * @returns {object} Google Play formatted offer data
   */
  convertToGooglePlayFormat(data) {
    // Resolve the offer's regionalConfigs from, in priority order:
    //   1. data.regionalConfigs — caller explicitly specified per-region config
    //   2. data.basePlanRegionalConfigs — mirror the base plan's own per-region setup
    //      (preserves newSubscriberAvailability so intro offers don't claim new-subscriber
    //      availability in regions the base plan doesn't support)
    //   3. data.regions — simple list of region codes, defaults newSubscriberAvailability to true
    const explicitOfferRegionalConfigs = Array.isArray(data.regionalConfigs) && data.regionalConfigs.length > 0
      ? data.regionalConfigs
      : null;

    let offerRegionalConfigs;
    if (explicitOfferRegionalConfigs) {
      offerRegionalConfigs = explicitOfferRegionalConfigs;
    } else if (Array.isArray(data.basePlanRegionalConfigs) && data.basePlanRegionalConfigs.length > 0) {
      offerRegionalConfigs = data.basePlanRegionalConfigs.map(rc => ({
        regionCode: rc.regionCode,
        // Mirror base plan availability. Schema defaults to false when omitted.
        newSubscriberAvailability: rc.newSubscriberAvailability === true
      }));
    } else if (Array.isArray(data.regions) && data.regions.length > 0) {
      offerRegionalConfigs = data.regions.map(regionCode => ({
        regionCode,
        newSubscriberAvailability: true
      }));
    } else {
      offerRegionalConfigs = [];
    }

    const regions = offerRegionalConfigs.map(rc => rc.regionCode).filter(Boolean);

    // Phase-level otherRegionsConfig is only valid when the parent base plan itself has one.
    // If the base plan doesn't declare otherRegionsConfig, declaring one on the offer causes
    // Google's backend to 500 ("Internal error encountered") due to the inconsistency.
    const includeOtherRegions = data.basePlanHasOtherRegions === true;

    const offerData = {
      offerTags: data.offerTags || [],
      phases: data.phases.map(phase => this.convertPhaseToGooglePlayFormat(phase, regions, includeOtherRegions))
    };

    // Offer-level regionalConfigs are required by the Google Play API — at least one entry.
    if (offerRegionalConfigs.length > 0) {
      offerData.regionalConfigs = offerRegionalConfigs;
    }

    // Mirror the base plan's otherRegions setup: if any phase has otherRegionsConfig,
    // the offer top level must too. If the base plan doesn't have one, neither should we.
    const hasPhaseOtherRegions = offerData.phases.some(p => p.otherRegionsConfig);
    if (hasPhaseOtherRegions) {
      offerData.otherRegionsConfig = {
        otherRegionsNewSubscriberAvailability: true
      };
    }

    // Targeting
    if (data.targeting) {
      offerData.targeting = data.targeting;
    } else if (data.targetNewCustomers === true) {
      // Target users who have no prior subscription in THIS specific subscription.
      // Google Play models "intro for new customers" via TargetingRuleScope.thisSubscription.
      offerData.targeting = {
        acquisitionRule: {
          scope: {
            thisSubscription: {}
          }
        }
      };
    }

    return offerData;
  }

  /**
   * Convert a single phase to Google Play format
   * @param {object} phase - iOS-style phase data
   * @returns {object} Google Play formatted phase
   */
  convertPhaseToGooglePlayFormat(phase, regions = [], includeOtherRegions = false) {
    const phaseType = phase.phaseType || OFFER_MODE_MAPPING[phase.offerMode];
    const duration = DURATION_MAPPING[phase.duration] || phase.duration;

    const googlePhase = {
      duration: duration,
      recurrenceCount: phase.recurrenceCount || 1
    };

    // Google Play doesn't use a phaseType discriminator field. The phase type is
    // implied by the pricing marker set in each regional/otherRegions config:
    //   free:{}               → free trial
    //   relativeDiscount:x    → % discount off base plan price (recurrenceCount=1 → pay-up-front; >1 → discounted recurring)
    //   absoluteDiscount:{..} → fixed amount discount
    //   price:{..}            → overrides base plan price entirely
    const buildRegionalEntry = (regionCode) => {
      const entry = { regionCode };
      if (phaseType === OFFER_PHASE_TYPES.FREE_TRIAL) {
        entry.free = {};
      } else if (phase.pricePercentageDiscount) {
        // Google expects a fraction in (0,1), e.g. 0.5 for 50%.
        entry.relativeDiscount = phase.pricePercentageDiscount / 100;
      } else if (phase.price) {
        // Absolute price override — per-region, currency must match the region.
        entry.price = {
          currencyCode: phase.price.currencyCode || 'USD',
          units: phase.price.units || '0',
          nanos: phase.price.nanos || 0
        };
      }
      return entry;
    };

    if (regions.length > 0) {
      googlePhase.regionalConfigs = regions.map(buildRegionalEntry);
    }

    // otherRegionsConfig covers territories Play may launch in the future.
    // Only emit this when the base plan itself declares otherRegionsConfig — otherwise
    // Google's backend 500s because the offer claims coverage the parent doesn't support.
    if (includeOtherRegions) {
      if (phaseType === OFFER_PHASE_TYPES.FREE_TRIAL) {
        googlePhase.otherRegionsConfig = { free: {} };
      } else if (phase.pricePercentageDiscount) {
        googlePhase.otherRegionsConfig = {
          relativeDiscount: phase.pricePercentageDiscount / 100
        };
      }
    }

    return googlePhase;
  }

  /**
   * Create a subscription offer
   * @param {string} packageName - Android package name (application ID)
   * @param {string} productId - Subscription product ID
   * @param {object} offerData - Offer configuration
   * @returns {object} Created offer
   */
  async createOffer(packageName, productId, offerData) {
    try {
      if (!packageName) {
        throw new ValidationError('Package name is required');
      }

      if (!productId) {
        throw new ValidationError('Product ID is required');
      }

      // Validate offer data
      this.validateOfferData(offerData);

      // Convert to Google Play format
      const googlePlayOfferData = this.convertToGooglePlayFormat(offerData);

      logger.info('Creating Android subscription offer', {
        packageName,
        productId,
        basePlanId: offerData.basePlanId,
        offerId: offerData.offerId
      });

      const response = await googlePlayClient.createSubscriptionOffer(
        packageName,
        productId,
        offerData.basePlanId,
        offerData.offerId,
        googlePlayOfferData
      );

      logger.info('Created Android subscription offer successfully', {
        packageName,
        productId,
        offerId: offerData.offerId
      });

      return {
        data: response,
        message: 'Subscription offer created successfully'
      };
    } catch (error) {
      logger.error('Failed to create Android subscription offer', {
        packageName,
        productId,
        offerId: offerData?.offerId,
        error: error.message
      });

      if (error.message?.includes('already exists')) {
        throw new ValidationError('An offer with this ID already exists for this base plan');
      }

      throw error;
    }
  }

  /**
   * Get a subscription offer by ID
   * @param {string} packageName - Android package name
   * @param {string} productId - Subscription product ID
   * @param {string} basePlanId - Base plan ID
   * @param {string} offerId - Offer ID
   * @returns {object} Offer data
   */
  async getOffer(packageName, productId, basePlanId, offerId) {
    try {
      if (!packageName || !productId || !basePlanId || !offerId) {
        throw new ValidationError('packageName, productId, basePlanId, and offerId are required');
      }

      const response = await googlePlayClient.getSubscriptionOffer(
        packageName,
        productId,
        basePlanId,
        offerId
      );

      if (!response) {
        throw new NotFoundError(`Offer ${offerId} not found`);
      }

      logger.info('Retrieved Android subscription offer', {
        packageName,
        productId,
        basePlanId,
        offerId
      });

      return {
        data: response
      };
    } catch (error) {
      if (error.statusCode === 404 || error.googleErrorCode === 'NOT_FOUND') {
        throw new NotFoundError(`Offer ${offerId} not found for base plan ${basePlanId}`);
      }
      logger.error('Failed to get Android subscription offer', {
        packageName,
        productId,
        basePlanId,
        offerId,
        error: error.message
      });
      throw error;
    }
  }

  /**
   * Update a subscription offer
   * @param {string} packageName - Android package name
   * @param {string} productId - Subscription product ID
   * @param {string} basePlanId - Base plan ID
   * @param {string} offerId - Offer ID
   * @param {object} updateData - Data to update
   * @returns {object} Updated offer
   */
  async updateOffer(packageName, productId, basePlanId, offerId, updateData, regionsVersion) {
    try {
      if (!packageName || !productId || !basePlanId || !offerId) {
        throw new ValidationError('packageName, productId, basePlanId, and offerId are required');
      }

      // Validate update data if phases are being updated
      if (updateData.phases) {
        updateData.phases.forEach((phase, index) => {
          this.validatePhase(phase, index);
        });
      }

      // Build update mask based on provided fields
      const updateFields = [];
      if (updateData.phases) updateFields.push('phases');
      if (updateData.offerTags) updateFields.push('offerTags');
      if (updateData.targeting) updateFields.push('targeting');
      if (updateData.regionalConfigs) updateFields.push('regionalConfigs');

      if (updateFields.length === 0) {
        throw new ValidationError('No valid update fields provided');
      }

      const googlePlayUpdateData = {};
      
      if (updateData.phases) {
        // Play requires every phase to enumerate the same regions as the offer's
        // top-level regionalConfigs. Since this PATCH leaves the top level alone
        // (regionalConfigs isn't in the mask unless the caller asked for it), we
        // must mirror the offer's existing regions into each new phase, otherwise
        // Play 400s with "region codes set in the top level, but not in phase 0".
        // Resolution order: explicit regionalConfigs/regions > existing offer.
        // Note: any per-region absolute prices on the prior phase are silently
        // overwritten with the new phase's uniform pricing (free/% discount/price).
        let regions = [];
        let includeOtherRegions = false;
        if (Array.isArray(updateData.regionalConfigs) && updateData.regionalConfigs.length > 0) {
          regions = updateData.regionalConfigs.map(rc => rc.regionCode).filter(Boolean);
        } else if (Array.isArray(updateData.regions) && updateData.regions.length > 0) {
          regions = updateData.regions.filter(Boolean);
        } else {
          try {
            const existing = await this.getOffer(packageName, productId, basePlanId, offerId);
            const existingData = existing?.data || {};
            regions = (existingData.regionalConfigs || []).map(rc => rc.regionCode).filter(Boolean);
            includeOtherRegions = !!existingData.otherRegionsConfig;
          } catch (fetchErr) {
            logger.warn('updateOffer: failed to fetch existing offer for region mirroring; falling through with empty regions', {
              packageName, productId, basePlanId, offerId, error: fetchErr.message
            });
          }
        }
        googlePlayUpdateData.phases = updateData.phases.map(
          phase => this.convertPhaseToGooglePlayFormat(phase, regions, includeOtherRegions)
        );
      }
      if (updateData.offerTags) {
        googlePlayUpdateData.offerTags = updateData.offerTags;
      }
      if (updateData.targeting) {
        googlePlayUpdateData.targeting = updateData.targeting;
      }
      if (updateData.regionalConfigs) {
        googlePlayUpdateData.regionalConfigs = updateData.regionalConfigs;
      }

      const response = await googlePlayClient.updateSubscriptionOffer(
        packageName,
        productId,
        basePlanId,
        offerId,
        googlePlayUpdateData,
        updateFields.join(','),
        regionsVersion
      );

      logger.info('Updated Android subscription offer', {
        packageName,
        productId,
        basePlanId,
        offerId,
        updatedFields: updateFields
      });

      return {
        data: response,
        message: 'Subscription offer updated successfully'
      };
    } catch (error) {
      if (error.statusCode === 404 || error.googleErrorCode === 'NOT_FOUND') {
        throw new NotFoundError(`Offer ${offerId} not found for base plan ${basePlanId}`);
      }
      logger.error('Failed to update Android subscription offer', {
        packageName,
        productId,
        basePlanId,
        offerId,
        error: error.message
      });
      throw error;
    }
  }

  /**
   * Delete a subscription offer
   * @param {string} packageName - Android package name
   * @param {string} productId - Subscription product ID
   * @param {string} basePlanId - Base plan ID
   * @param {string} offerId - Offer ID
   * @returns {object} Deletion result
   */
  async deleteOffer(packageName, productId, basePlanId, offerId) {
    try {
      if (!packageName || !productId || !basePlanId || !offerId) {
        throw new ValidationError('packageName, productId, basePlanId, and offerId are required');
      }

      await googlePlayClient.deleteSubscriptionOffer(
        packageName,
        productId,
        basePlanId,
        offerId
      );

      logger.info('Deleted Android subscription offer', {
        packageName,
        productId,
        basePlanId,
        offerId
      });

      return {
        success: true,
        message: 'Subscription offer deleted successfully'
      };
    } catch (error) {
      if (error.statusCode === 404 || error.googleErrorCode === 'NOT_FOUND') {
        throw new NotFoundError(`Offer ${offerId} not found for base plan ${basePlanId}`);
      }
      logger.error('Failed to delete Android subscription offer', {
        packageName,
        productId,
        basePlanId,
        offerId,
        error: error.message
      });
      throw error;
    }
  }

  /**
   * Get all offers for a package
   * @param {string} packageName - Android package name
   * @param {object} options - Filter options
   * @returns {object} List of offers grouped by subscription
   */
  async getOffersByPackage(packageName, options = {}) {
    try {
      if (!packageName) {
        throw new ValidationError('Package name is required');
      }

      const { productId, basePlanId, limit = 100 } = options;

      // Get all subscriptions for the package
      const subscriptionsResponse = await googlePlayClient.getSubscriptions(packageName);
      const subscriptions = subscriptionsResponse.subscriptions || [];

      const results = [];
      let totalOffers = 0;

      // Filter subscriptions if productId is specified
      let filteredSubscriptions = subscriptions;
      if (productId) {
        filteredSubscriptions = subscriptions.filter(sub => sub.productId === productId);
      }

      // Get offers for each subscription's base plans
      for (const subscription of filteredSubscriptions.slice(0, limit)) {
        const basePlans = subscription.basePlans || [];

        // Filter base plans if basePlanId is specified
        let filteredBasePlans = basePlans;
        if (basePlanId) {
          filteredBasePlans = basePlans.filter(bp => bp.basePlanId === basePlanId);
        }

        for (const basePlan of filteredBasePlans) {
          try {
            const offersResponse = await googlePlayClient.getSubscriptionOffers(
              packageName,
              subscription.productId,
              basePlan.basePlanId
            );

            const offers = offersResponse.subscriptionOffers || [];

            if (offers.length > 0) {
              results.push({
                subscription: {
                  productId: subscription.productId,
                  listings: subscription.listings
                },
                basePlan: {
                  basePlanId: basePlan.basePlanId,
                  state: basePlan.state
                },
                offers: offers.map(offer => ({
                  offerId: offer.offerId,
                  state: offer.state,
                  phases: offer.phases,
                  targeting: offer.targeting,
                  offerTags: offer.offerTags
                }))
              });

              totalOffers += offers.length;
            }
          } catch (error) {
            logger.warn(`Failed to get offers for base plan ${basePlan.basePlanId}`, {
              packageName,
              productId: subscription.productId,
              error: error.message
            });
          }
        }
      }

      logger.info('Retrieved offers for package', {
        packageName,
        subscriptionCount: results.length,
        totalOffers
      });

      return {
        packageName,
        subscriptions: results,
        totalOffers
      };
    } catch (error) {
      logger.error('Failed to get offers for package', {
        packageName,
        error: error.message
      });
      throw error;
    }
  }

  /**
   * Activate a subscription offer
   * @param {string} packageName - Android package name
   * @param {string} productId - Subscription product ID
   * @param {string} basePlanId - Base plan ID
   * @param {string} offerId - Offer ID
   * @returns {object} Activated offer
   */
  async activateOffer(packageName, productId, basePlanId, offerId) {
    try {
      if (!packageName || !productId || !basePlanId || !offerId) {
        throw new ValidationError('packageName, productId, basePlanId, and offerId are required');
      }

      const response = await googlePlayClient.activateSubscriptionOffer(
        packageName,
        productId,
        basePlanId,
        offerId
      );

      logger.info('Activated Android subscription offer', {
        packageName,
        productId,
        basePlanId,
        offerId
      });

      return {
        data: response,
        message: 'Subscription offer activated successfully'
      };
    } catch (error) {
      if (error.statusCode === 404 || error.googleErrorCode === 'NOT_FOUND') {
        throw new NotFoundError(`Offer ${offerId} not found for base plan ${basePlanId}`);
      }
      logger.error('Failed to activate Android subscription offer', {
        packageName,
        productId,
        basePlanId,
        offerId,
        error: error.message
      });
      throw error;
    }
  }

  /**
   * Deactivate a subscription offer
   * @param {string} packageName - Android package name
   * @param {string} productId - Subscription product ID
   * @param {string} basePlanId - Base plan ID
   * @param {string} offerId - Offer ID
   * @returns {object} Deactivated offer
   */
  async deactivateOffer(packageName, productId, basePlanId, offerId) {
    try {
      if (!packageName || !productId || !basePlanId || !offerId) {
        throw new ValidationError('packageName, productId, basePlanId, and offerId are required');
      }

      const response = await googlePlayClient.deactivateSubscriptionOffer(
        packageName,
        productId,
        basePlanId,
        offerId
      );

      logger.info('Deactivated Android subscription offer', {
        packageName,
        productId,
        basePlanId,
        offerId
      });

      return {
        data: response,
        message: 'Subscription offer deactivated successfully'
      };
    } catch (error) {
      if (error.statusCode === 404 || error.googleErrorCode === 'NOT_FOUND') {
        throw new NotFoundError(`Offer ${offerId} not found for base plan ${basePlanId}`);
      }
      logger.error('Failed to deactivate Android subscription offer', {
        packageName,
        productId,
        basePlanId,
        offerId,
        error: error.message
      });
      throw error;
    }
  }

  /**
   * Bulk create subscription offers for all base plans
   * @param {string} packageName - Android package name
   * @param {object} offerTemplate - Template for creating offers
   * @returns {object} Bulk creation results
   */
  async bulkCreateOffers(packageName, offerTemplate) {
    try {
      if (!packageName) {
        throw new ValidationError('Package name is required');
      }

      // Validate template
      const required = ['offerId', 'phases'];
      const missing = required.filter(field => !offerTemplate[field]);
      if (missing.length > 0) {
        throw new ValidationError(`Missing required fields in offerTemplate: ${missing.join(', ')}`);
      }

      // Validate phases
      offerTemplate.phases.forEach((phase, index) => {
        this.validatePhase(phase, index);
      });

      logger.info('Starting bulk offer creation', {
        packageName,
        offerId: offerTemplate.offerId
      });

      // Get all subscriptions for the package
      const subscriptionsResponse = await googlePlayClient.getSubscriptions(packageName);
      const subscriptions = subscriptionsResponse.subscriptions || [];

      if (subscriptions.length === 0) {
        throw new ValidationError(`No subscriptions found for package ${packageName}`);
      }

      // Filter subscriptions if productIds are specified
      let filteredSubscriptions = subscriptions;
      if (offerTemplate.productIds && offerTemplate.productIds.length > 0) {
        filteredSubscriptions = subscriptions.filter(
          sub => offerTemplate.productIds.includes(sub.productId)
        );
      }

      const onConflict = offerTemplate.onConflict || 'skip';
      const validConflictModes = ['skip', 'update', 'replace'];
      if (!validConflictModes.includes(onConflict)) {
        throw new ValidationError(`Invalid onConflict mode "${onConflict}". Must be one of: ${validConflictModes.join(', ')}`);
      }

      const defaultUpdateMask = 'phases,offerTags,targeting,regionalConfigs';
      const updateMask = (offerTemplate.updateMask && offerTemplate.updateMask.trim())
        ? offerTemplate.updateMask.trim()
        : defaultUpdateMask;

      const results = {
        created: [],
        updated: [],
        replaced: [],
        skipped: [],
        failed: [],
        summary: {
          packageName,
          offerId: offerTemplate.offerId,
          onConflict,
          updateMask: onConflict === 'update' ? updateMask : null,
          total: 0,
          succeeded: 0,
          updated: 0,
          replaced: 0,
          skipped: 0,
          failed: 0
        }
      };

      // Create offer for each subscription's base plans
      for (const subscription of filteredSubscriptions) {
        const basePlans = subscription.basePlans || [];

        // Filter base plans if basePlanIds are specified
        let targetBasePlans = basePlans;
        if (offerTemplate.basePlanIds && offerTemplate.basePlanIds.length > 0) {
          targetBasePlans = basePlans.filter(
            bp => offerTemplate.basePlanIds.includes(bp.basePlanId)
          );
        }

        // Filter by billing period (e.g. ['P1M'] to only target monthly base plans).
        // Matches both autoRenewing and prepaid base plan billingPeriodDuration.
        if (offerTemplate.basePlanPeriods && offerTemplate.basePlanPeriods.length > 0) {
          const allowed = new Set(offerTemplate.basePlanPeriods);
          targetBasePlans = targetBasePlans.filter(bp => {
            const period = bp.autoRenewingBasePlanType?.billingPeriodDuration
              || bp.prepaidBasePlanType?.billingPeriodDuration;
            return period && allowed.has(period);
          });
        }

        for (const basePlan of targetBasePlans) {
          results.summary.total++;

          // Pass the base plan's regionalConfigs through so the converter can mirror
          // each region's newSubscriberAvailability flag exactly. Setting true on an
          // offer for a region where the base plan has false is rejected with 400
          // "Region X was set to be available to new subscribers by the offer, but is
          // not available in parent base plan."
          const basePlanRegionalConfigs = (basePlan.regionalConfigs || [])
            .filter(rc => rc.regionCode);

          // Only declare "other regions" availability on the offer when the base plan
          // has itself declared an otherRegionsConfig. Otherwise, claiming availability
          // in future regions the base plan doesn't cover produces a 500 from Google.
          const basePlanHasOtherRegions = !!basePlan.otherRegionsConfig;

          const offerData = {
            offerId: offerTemplate.offerId,
            basePlanId: basePlan.basePlanId,
            phases: offerTemplate.phases,
            offerTags: offerTemplate.offerTags,
            targeting: offerTemplate.targeting,
            targetNewCustomers: offerTemplate.targetNewCustomers,
            basePlanRegionalConfigs,
            basePlanHasOtherRegions
          };

          try {
            const response = await this.createOffer(
              packageName,
              subscription.productId,
              offerData
            );

            results.created.push({
              productId: subscription.productId,
              basePlanId: basePlan.basePlanId,
              offerId: offerTemplate.offerId,
              state: response.data?.state
            });

            results.summary.succeeded++;
          } catch (error) {
            const isConflict = error instanceof ValidationError
              && typeof error.message === 'string'
              && error.message.includes('already exists');

            const recordFailure = (err, code) => {
              logger.warn('Failed bulk offer operation', {
                packageName,
                productId: subscription.productId,
                basePlanId: basePlan.basePlanId,
                offerId: offerTemplate.offerId,
                error: err.message,
                mode: onConflict
              });
              results.failed.push({
                productId: subscription.productId,
                basePlanId: basePlan.basePlanId,
                offerId: offerTemplate.offerId,
                error: err.message,
                code: code || (err instanceof ValidationError ? 'VALIDATION_ERROR' : 'API_ERROR')
              });
              results.summary.failed++;
            };

            if (!isConflict) {
              recordFailure(error);
              continue;
            }

            if (onConflict === 'skip') {
              results.skipped.push({
                productId: subscription.productId,
                basePlanId: basePlan.basePlanId,
                offerId: offerTemplate.offerId,
                reason: 'offer already exists'
              });
              results.summary.skipped++;
              continue;
            }

            if (onConflict === 'update') {
              try {
                // Reuse the same Google Play payload the create path would have used
                // so regionalConfigs/targeting/phases all stay consistent with the base plan.
                const googlePlayPayload = this.convertToGooglePlayFormat(offerData);
                const maskedPayload = filterByUpdateMask(googlePlayPayload, updateMask);

                if (Object.keys(maskedPayload).length === 0) {
                  recordFailure(
                    new Error(`--update-mask "${updateMask}" matched no fields in the template payload`),
                    'EMPTY_UPDATE'
                  );
                  continue;
                }

                const response = await googlePlayClient.updateSubscriptionOffer(
                  packageName,
                  subscription.productId,
                  basePlan.basePlanId,
                  offerTemplate.offerId,
                  maskedPayload,
                  updateMask
                );

                results.updated.push({
                  productId: subscription.productId,
                  basePlanId: basePlan.basePlanId,
                  offerId: offerTemplate.offerId,
                  updateMask,
                  state: response?.state
                });
                results.summary.updated++;
              } catch (updateError) {
                recordFailure(updateError, 'UPDATE_FAILED');
              }
              continue;
            }

            if (onConflict === 'replace') {
              try {
                await googlePlayClient.deleteSubscriptionOffer(
                  packageName,
                  subscription.productId,
                  basePlan.basePlanId,
                  offerTemplate.offerId
                );
              } catch (deleteError) {
                // Play rejects delete on non-DRAFT offers. Surface clearly.
                recordFailure(
                  new Error(`replace: delete failed — ${deleteError.message}`),
                  'DELETE_FAILED'
                );
                continue;
              }

              try {
                const response = await this.createOffer(
                  packageName,
                  subscription.productId,
                  offerData
                );
                results.replaced.push({
                  productId: subscription.productId,
                  basePlanId: basePlan.basePlanId,
                  offerId: offerTemplate.offerId,
                  state: response.data?.state
                });
                results.summary.replaced++;
              } catch (recreateError) {
                recordFailure(
                  new Error(`replace: delete succeeded but recreate failed — ${recreateError.message}`),
                  'RECREATE_FAILED'
                );
              }
            }
          }
        }
      }

      logger.info('Bulk offer creation completed', {
        packageName,
        succeeded: results.summary.succeeded,
        updated: results.summary.updated,
        replaced: results.summary.replaced,
        skipped: results.summary.skipped,
        failed: results.summary.failed
      });

      return results;
    } catch (error) {
      logger.error('Failed to bulk create offers', {
        packageName,
        error: error.message
      });
      throw error;
    }
  }
}

// Export singleton instance
const androidOffersService = new AndroidOffersService();
module.exports = androidOffersService;
