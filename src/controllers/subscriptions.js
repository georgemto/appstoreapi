const subscriptionService = require('../services/subscriptions');
const { handleAsyncError } = require('../utils/errors');
const logger = require('../utils/logger');

class SubscriptionController {
  /**
   * Get all subscriptions
   * GET /api/subscriptions
   */
  getAllSubscriptions = handleAsyncError(async (req, res) => {
    const options = {
      appId: req.query.appId,
      subscriptionGroupId: req.query.subscriptionGroupId,
      state: req.query.state,
      includes: req.query.includes,
      limit: req.query.limit
    };

    const result = await subscriptionService.getAllSubscriptions(options);

    res.status(200).json({
      success: true,
      data: result.data,
      meta: result.meta,
      links: result.links
    });
  });

  /**
   * Get subscription by ID
   * GET /api/subscriptions/:id
   */
  getSubscriptionById = handleAsyncError(async (req, res) => {
    const { id } = req.params;
    const includes = req.query.includes;

    const result = await subscriptionService.getSubscriptionById(id, includes);

    res.status(200).json({
      success: true,
      data: result.data,
      included: result.included
    });
  });

  /**
   * Create new subscription
   * POST /api/subscriptions
   */
  createSubscription = handleAsyncError(async (req, res) => {
    const subscriptionData = req.body;

    const result = await subscriptionService.createSubscription(subscriptionData);

    logger.info(`Subscription created successfully`, {
      productId: result.data?.attributes?.productId,
      id: result.data?.id
    });

    res.status(201).json({
      success: true,
      data: result.data,
      message: 'Subscription created successfully'
    });
  });

  /**
   * Update subscription
   * PUT /api/subscriptions/:id
   */
  updateSubscription = handleAsyncError(async (req, res) => {
    const { id } = req.params;
    const updateData = req.body;

    const result = await subscriptionService.updateSubscription(id, updateData);

    logger.info(`Subscription updated successfully`, {
      subscriptionId: id,
      updatedFields: Object.keys(updateData)
    });

    res.status(200).json({
      success: true,
      data: result.data,
      message: 'Subscription updated successfully'
    });
  });

  /**
   * Delete subscription
   * DELETE /api/subscriptions/:id
   */
  deleteSubscription = handleAsyncError(async (req, res) => {
    const { id } = req.params;

    const result = await subscriptionService.deleteSubscription(id);

    logger.info(`Subscription deleted successfully`, { subscriptionId: id });

    res.status(200).json({
      success: true,
      message: result.message
    });
  });

  /**
   * Get subscription pricing
   * GET /api/subscriptions/:id/pricing
   */
  getSubscriptionPricing = handleAsyncError(async (req, res) => {
    const { id } = req.params;
    const { territory } = req.query;

    const result = await subscriptionService.getSubscriptionPricing(id, territory);

    res.status(200).json({
      success: true,
      data: result.data,
      included: result.included,
      meta: result.meta
    });
  });

  /**
   * Update subscription pricing
   * PUT /api/subscriptions/:id/pricing
   */
  updateSubscriptionPricing = handleAsyncError(async (req, res) => {
    const { id } = req.params;
    const pricingData = req.body;

    const result = await subscriptionService.updateSubscriptionPricing(id, pricingData);

    logger.info(`Subscription pricing updated successfully`, {
      subscriptionId: id,
      priceCount: pricingData.prices?.length
    });

    res.status(200).json({
      success: true,
      data: result.data,
      message: 'Subscription pricing updated successfully'
    });
  });

  /**
   * Health check endpoint
   * GET /api/subscriptions/health
   */
  healthCheck = handleAsyncError(async (req, res) => {
    // Basic health check - could be expanded to check API connectivity
    const authService = require('../services/auth');
    
    try {
      // Validate configuration
      authService.validateConfiguration();
      
      res.status(200).json({
        success: true,
        message: 'Subscription service is healthy',
        timestamp: new Date().toISOString(),
        configuration: {
          hasTeamId: !!process.env.APPSTORE_TEAM_ID,
          hasKeyId: !!process.env.APPSTORE_KEY_ID,
          hasPrivateKey: !!process.env.APPSTORE_PRIVATE_KEY_PATH,
          hasIssuerId: !!process.env.APPSTORE_ISSUER_ID
        }
      });
    } catch (error) {
      res.status(503).json({
        success: false,
        message: 'Service configuration error',
        error: error.message
      });
    }
  });

  /**
   * Get subscription groups (helper endpoint)
   * GET /api/subscriptions/groups
   */
  getSubscriptionGroups = handleAsyncError(async (req, res) => {
    const appStoreClient = require('../services/appstore-client');
    const { config } = require('../config/appstore');
    
    const params = appStoreClient.buildParams(
      req.query.appId ? { app: req.query.appId } : {},
      ['subscriptions'],
      {
        subscriptionGroups: ['referenceName', 'state'],
        subscriptions: ['name', 'productId', 'state']
      },
      'referenceName',
      req.query.limit || 50
    );

    const result = await appStoreClient.get(config.endpoints.subscriptionGroups, params);

    res.status(200).json({
      success: true,
      data: result.data,
      included: result.included,
      meta: result.meta
    });
  });
}

// Export controller instance
const subscriptionController = new SubscriptionController();
module.exports = subscriptionController;
