const introductoryOfferService = require('../services/introductory-offers');
const { handleAsyncError } = require('../utils/errors');
const logger = require('../utils/logger');

class IntroductoryOfferController {
  /**
   * Create an introductory offer
   * POST /api/introductory-offers
   */
  createIntroductoryOffer = handleAsyncError(async (req, res) => {
    const { subscriptionId, ...offerData } = req.body;

    const result = await introductoryOfferService.createIntroductoryOffer(subscriptionId, offerData);

    logger.info(`Introductory offer created successfully`, {
      subscriptionId,
      offerId: result.data?.id,
      territory: offerData.territory
    });

    res.status(201).json({
      success: true,
      data: result.data,
      message: 'Introductory offer created successfully'
    });
  });

  /**
   * Get introductory offer by ID
   * GET /api/introductory-offers/:id
   */
  getIntroductoryOfferById = handleAsyncError(async (req, res) => {
    const { id } = req.params;
    const includes = req.query.includes;

    const result = await introductoryOfferService.getIntroductoryOffer(id, includes);

    res.status(200).json({
      success: true,
      data: result.data,
      included: result.included
    });
  });

  /**
   * Update introductory offer
   * PATCH /api/introductory-offers/:id
   */
  updateIntroductoryOffer = handleAsyncError(async (req, res) => {
    const { id } = req.params;
    const updateData = req.body;

    const result = await introductoryOfferService.updateIntroductoryOffer(id, updateData);

    logger.info(`Introductory offer updated successfully`, {
      offerId: id,
      updatedFields: Object.keys(updateData)
    });

    res.status(200).json({
      success: true,
      data: result.data,
      message: 'Introductory offer updated successfully'
    });
  });

  /**
   * Delete introductory offer
   * DELETE /api/introductory-offers/:id
   */
  deleteIntroductoryOffer = handleAsyncError(async (req, res) => {
    const { id } = req.params;

    const result = await introductoryOfferService.deleteIntroductoryOffer(id);

    logger.info(`Introductory offer deleted successfully`, { offerId: id });

    res.status(200).json({
      success: true,
      message: result.message
    });
  });

  /**
   * Get introductory offers by bundle ID
   * GET /api/introductory-offers/bundle/:bundleId
   */
  getIntroductoryOffersByBundleId = handleAsyncError(async (req, res) => {
    const { bundleId } = req.params;
    const { referenceName, limit } = req.query;

    const result = await introductoryOfferService.getIntroductoryOffersByBundleId(bundleId, {
      referenceName,
      limit: limit ? parseInt(limit) : undefined
    });

    res.status(200).json({
      success: true,
      data: result
    });
  });

  /**
   * Bulk create introductory offers
   * POST /api/introductory-offers/bulk
   */
  bulkCreateIntroductoryOffers = handleAsyncError(async (req, res) => {
    const { bundleId, referenceName, offerTemplate } = req.body;

    const result = await introductoryOfferService.bulkCreateIntroductoryOffers(
      bundleId,
      referenceName,
      offerTemplate
    );

    const statusCode = result.summary.failed > 0 ? 207 : 201; // 207 Multi-Status if partial success
    
    logger.info(`Bulk introductory offer creation completed`, {
      bundleId,
      referenceName,
      succeeded: result.summary.succeeded,
      failed: result.summary.failed
    });

    res.status(statusCode).json({
      success: result.summary.failed === 0,
      data: result,
      message: result.summary.failed === 0
        ? `Successfully created ${result.summary.succeeded} introductory offers`
        : `Bulk creation completed with ${result.summary.succeeded} successes and ${result.summary.failed} failures`
    });
  });

  /**
   * Get introductory offers for a subscription
   * GET /api/subscriptions/:id/introductory-offers
   */
  getIntroductoryOffersForSubscription = handleAsyncError(async (req, res) => {
    const { id } = req.params;

    const offers = await introductoryOfferService.getIntroductoryOffersForSubscription(id);

    res.status(200).json({
      success: true,
      data: offers,
      count: offers.length
    });
  });
}

// Export controller instance
const introductoryOfferController = new IntroductoryOfferController();
module.exports = introductoryOfferController;
