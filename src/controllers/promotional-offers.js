const promotionalOfferService = require('../services/promotional-offers');
const { handleAsyncError } = require('../utils/errors');
const logger = require('../utils/logger');

class PromotionalOfferController {
  /**
   * Create a promotional offer
   * POST /api/promotional-offers
   */
  createPromotionalOffer = handleAsyncError(async (req, res) => {
    const { subscriptionId, ...offerData } = req.body;

    const result = await promotionalOfferService.createPromotionalOffer(subscriptionId, offerData);

    logger.info(`Promotional offer created successfully`, {
      subscriptionId,
      offerId: result.data?.id,
      offerCode: result.data?.attributes?.offerCode
    });

    res.status(201).json({
      success: true,
      data: result.data,
      message: 'Promotional offer created successfully'
    });
  });

  /**
   * Get promotional offer by ID
   * GET /api/promotional-offers/:id
   */
  getPromotionalOfferById = handleAsyncError(async (req, res) => {
    const { id } = req.params;
    const includes = req.query.includes;

    const result = await promotionalOfferService.getPromotionalOffer(id, includes);

    res.status(200).json({
      success: true,
      data: result.data,
      included: result.included
    });
  });

  /**
   * Update promotional offer
   * PATCH /api/promotional-offers/:id
   */
  updatePromotionalOffer = handleAsyncError(async (req, res) => {
    const { id } = req.params;
    const updateData = req.body;

    const result = await promotionalOfferService.updatePromotionalOffer(id, updateData);

    logger.info(`Promotional offer updated successfully`, {
      offerId: id,
      updatedFields: Object.keys(updateData)
    });

    res.status(200).json({
      success: true,
      data: result.data,
      message: 'Promotional offer updated successfully'
    });
  });

  /**
   * Delete promotional offer
   * DELETE /api/promotional-offers/:id
   */
  deletePromotionalOffer = handleAsyncError(async (req, res) => {
    const { id } = req.params;

    const result = await promotionalOfferService.deletePromotionalOffer(id);

    logger.info(`Promotional offer deleted successfully`, { offerId: id });

    res.status(200).json({
      success: true,
      message: result.message
    });
  });

  /**
   * Get promotional offer prices
   * GET /api/promotional-offers/:id/prices
   */
  getPromotionalOfferPrices = handleAsyncError(async (req, res) => {
    const { id } = req.params;
    const { territory } = req.query;

    const result = await promotionalOfferService.getPromotionalOfferPrices(id, territory);

    res.status(200).json({
      success: true,
      data: result.data,
      included: result.included,
      meta: result.meta
    });
  });

  /**
   * Get promotional offers by bundle ID
   * GET /api/promotional-offers/bundle/:bundleId
   */
  getPromotionalOffersByBundleId = handleAsyncError(async (req, res) => {
    const { bundleId } = req.params;
    const { referenceName, limit } = req.query;

    const result = await promotionalOfferService.getPromotionalOffersByBundleId(bundleId, {
      referenceName,
      limit: limit ? parseInt(limit) : undefined
    });

    res.status(200).json({
      success: true,
      data: result
    });
  });

  /**
   * Bulk create promotional offers
   * POST /api/promotional-offers/bulk
   */
  bulkCreatePromotionalOffers = handleAsyncError(async (req, res) => {
    const { bundleId, referenceName, offerTemplate } = req.body;

    const result = await promotionalOfferService.bulkCreatePromotionalOffers(
      bundleId,
      referenceName,
      offerTemplate
    );

    const statusCode = result.summary.failed > 0 ? 207 : 201; // 207 Multi-Status if partial success
    
    logger.info(`Bulk promotional offer creation completed`, {
      bundleId,
      referenceName,
      succeeded: result.summary.succeeded,
      failed: result.summary.failed
    });

    res.status(statusCode).json({
      success: result.summary.failed === 0,
      data: result,
      message: result.summary.failed === 0
        ? `Successfully created ${result.summary.succeeded} promotional offers`
        : `Bulk creation completed with ${result.summary.succeeded} successes and ${result.summary.failed} failures`
    });
  });

  /**
   * Get promotional offers for a subscription
   * GET /api/subscriptions/:id/promotional-offers
   */
  getPromotionalOffersForSubscription = handleAsyncError(async (req, res) => {
    const { id } = req.params;

    const offers = await promotionalOfferService.getPromotionalOffersForSubscription(id);

    res.status(200).json({
      success: true,
      data: offers,
      count: offers.length
    });
  });
}

// Export controller instance
const promotionalOfferController = new PromotionalOfferController();
module.exports = promotionalOfferController;
