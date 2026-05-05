const androidOffersService = require('../services/android-offers');
const { handleAsyncError } = require('../utils/errors');
const logger = require('../utils/logger');

class AndroidOffersController {
  /**
   * Create a subscription offer
   * POST /api/android-offers
   */
  createOffer = handleAsyncError(async (req, res) => {
    const { packageName, productId, ...offerData } = req.body;

    const result = await androidOffersService.createOffer(packageName, productId, offerData);

    logger.info('Android subscription offer created successfully', {
      packageName,
      productId,
      offerId: offerData.offerId,
      basePlanId: offerData.basePlanId
    });

    res.status(201).json({
      success: true,
      data: result.data,
      message: result.message
    });
  });

  /**
   * Get subscription offer by ID
   * GET /api/android-offers/:packageName/:productId/:basePlanId/:offerId
   */
  getOfferById = handleAsyncError(async (req, res) => {
    const { packageName, productId, basePlanId, offerId } = req.params;

    const result = await androidOffersService.getOffer(packageName, productId, basePlanId, offerId);

    res.status(200).json({
      success: true,
      data: result.data
    });
  });

  /**
   * Update subscription offer
   * PATCH /api/android-offers/:packageName/:productId/:basePlanId/:offerId
   */
  updateOffer = handleAsyncError(async (req, res) => {
    const { packageName, productId, basePlanId, offerId } = req.params;
    const updateData = req.body;

    const result = await androidOffersService.updateOffer(
      packageName,
      productId,
      basePlanId,
      offerId,
      updateData
    );

    logger.info('Android subscription offer updated successfully', {
      packageName,
      productId,
      basePlanId,
      offerId,
      updatedFields: Object.keys(updateData)
    });

    res.status(200).json({
      success: true,
      data: result.data,
      message: result.message
    });
  });

  /**
   * Delete subscription offer
   * DELETE /api/android-offers/:packageName/:productId/:basePlanId/:offerId
   */
  deleteOffer = handleAsyncError(async (req, res) => {
    const { packageName, productId, basePlanId, offerId } = req.params;

    const result = await androidOffersService.deleteOffer(packageName, productId, basePlanId, offerId);

    logger.info('Android subscription offer deleted successfully', {
      packageName,
      productId,
      basePlanId,
      offerId
    });

    res.status(200).json({
      success: true,
      message: result.message
    });
  });

  /**
   * Get all offers for a package
   * GET /api/android-offers/package/:packageName
   */
  getOffersByPackage = handleAsyncError(async (req, res) => {
    const { packageName } = req.params;
    const { productId, basePlanId, limit } = req.query;

    const result = await androidOffersService.getOffersByPackage(packageName, {
      productId,
      basePlanId,
      limit: limit ? parseInt(limit) : undefined
    });

    res.status(200).json({
      success: true,
      data: result
    });
  });

  /**
   * Activate subscription offer
   * POST /api/android-offers/:packageName/:productId/:basePlanId/:offerId/activate
   */
  activateOffer = handleAsyncError(async (req, res) => {
    const { packageName, productId, basePlanId, offerId } = req.params;

    const result = await androidOffersService.activateOffer(
      packageName,
      productId,
      basePlanId,
      offerId
    );

    logger.info('Android subscription offer activated successfully', {
      packageName,
      productId,
      basePlanId,
      offerId
    });

    res.status(200).json({
      success: true,
      data: result.data,
      message: result.message
    });
  });

  /**
   * Deactivate subscription offer
   * POST /api/android-offers/:packageName/:productId/:basePlanId/:offerId/deactivate
   */
  deactivateOffer = handleAsyncError(async (req, res) => {
    const { packageName, productId, basePlanId, offerId } = req.params;

    const result = await androidOffersService.deactivateOffer(
      packageName,
      productId,
      basePlanId,
      offerId
    );

    logger.info('Android subscription offer deactivated successfully', {
      packageName,
      productId,
      basePlanId,
      offerId
    });

    res.status(200).json({
      success: true,
      data: result.data,
      message: result.message
    });
  });

  /**
   * Bulk create subscription offers
   * POST /api/android-offers/bulk
   */
  bulkCreateOffers = handleAsyncError(async (req, res) => {
    const { packageName, offerTemplate } = req.body;

    const result = await androidOffersService.bulkCreateOffers(packageName, offerTemplate);

    const statusCode = result.summary.failed > 0 ? 207 : 201; // 207 Multi-Status if partial success

    logger.info('Bulk Android offer creation completed', {
      packageName,
      succeeded: result.summary.succeeded,
      failed: result.summary.failed
    });

    res.status(statusCode).json({
      success: result.summary.failed === 0,
      data: result,
      message: result.summary.failed === 0
        ? `Successfully created ${result.summary.succeeded} subscription offers`
        : `Bulk creation completed with ${result.summary.succeeded} successes and ${result.summary.failed} failures`
    });
  });
}

// Export controller instance
const androidOffersController = new AndroidOffersController();
module.exports = androidOffersController;
