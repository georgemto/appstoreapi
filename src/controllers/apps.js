const appService = require('../services/apps');
const { handleAsyncError } = require('../utils/errors');
const logger = require('../utils/logger');

class AppController {
  /**
   * Get all apps
   * GET /api/apps
   */
  getAllApps = handleAsyncError(async (req, res) => {
    // Build options, only include non-empty values
    const options = {};
    
    if (req.query.bundleId) options.bundleId = req.query.bundleId;
    if (req.query.name) options.name = req.query.name;
    if (req.query.platform) options.platform = req.query.platform;
    if (req.query.includes) options.includes = req.query.includes;
    if (req.query.limit) options.limit = parseInt(req.query.limit);

    const result = await appService.getAllApps(options);

    res.status(200).json({
      success: true,
      data: result.data,
      meta: result.meta,
      links: result.links
    });
  });

  /**
   * Get app by ID
   * GET /api/apps/:id
   */
  getAppById = handleAsyncError(async (req, res) => {
    const { id } = req.params;
    const includes = req.query.includes;

    const result = await appService.getAppById(id, includes);

    res.status(200).json({
      success: true,
      data: result.data,
      included: result.included
    });
  });

  /**
   * Get app summary with subscription statistics
   * GET /api/apps/:id/summary
   */
  getAppSummary = handleAsyncError(async (req, res) => {
    const { id } = req.params;

    const result = await appService.getAppSummary(id);

    res.status(200).json({
      success: true,
      data: result
    });
  });

  /**
   * Get subscriptions for a specific app
   * GET /api/apps/:id/subscriptions
   */
  getAppSubscriptions = handleAsyncError(async (req, res) => {
    const { id } = req.params;
    const options = {
      state: req.query.state,
      includes: req.query.includes,
      limit: req.query.limit
    };

    const result = await appService.getAppSubscriptions(id, options);

    res.status(200).json({
      success: true,
      data: result.data,
      included: result.included,
      meta: result.meta
    });
  });

  /**
   * Get subscription product IDs for an app by bundle ID
   * GET /api/apps/bundle/:bundleId/subscription-product-ids
   */
  getSubscriptionProductIdsByBundleId = handleAsyncError(async (req, res) => {
    const { bundleId } = req.params;
    const useCache = req.query.useCache !== 'false'; // Default true
    const saveToDb = req.query.saveToDb !== 'false'; // Default true

    const result = await appService.getSubscriptionProductIdsByBundleId(bundleId, {
      useCache,
      saveToDb
    });

    res.status(200).json({
      success: true,
      bundleId: bundleId,
      appId: result.appId,
      appName: result.appName,
      productIds: result.productIds,
      subscriptions: result.subscriptions,
      subscriptionGroups: result.subscriptionGroups,
      count: result.productIds.length,
      cached: !!result.updatedAt,
      updatedAt: result.updatedAt
    });
  });

  /**
   * Get subscription groups for a specific app
   * GET /api/apps/:id/subscription-groups
   */
  getAppSubscriptionGroups = handleAsyncError(async (req, res) => {
    const { id } = req.params;
    const options = {
      includes: req.query.includes,
      limit: req.query.limit
    };

    const result = await appService.getAppSubscriptionGroups(id, options);

    res.status(200).json({
      success: true,
      data: result.data,
      included: result.included,
      meta: result.meta
    });
  });

  /**
   * Create subscription group for an app
   * POST /api/apps/:id/subscription-groups
   */
  createAppSubscriptionGroup = handleAsyncError(async (req, res) => {
    const { id } = req.params;
    const groupData = req.body;

    const result = await appService.createSubscriptionGroup(id, groupData);

    logger.info(`Subscription group created successfully for app ${id}`, {
      groupName: groupData.referenceName,
      groupId: result.data?.id
    });

    res.status(201).json({
      success: true,
      data: result.data,
      message: 'Subscription group created successfully'
    });
  });

  /**
   * Search apps by bundle ID or name
   * GET /api/apps/search?q=searchQuery
   */
  searchApps = handleAsyncError(async (req, res) => {
    const { q: searchQuery } = req.query;
    
    if (!searchQuery) {
      return res.status(400).json({
        success: false,
        error: {
          message: 'Search query parameter "q" is required',
          type: 'VALIDATION_ERROR'
        }
      });
    }

    const options = {
      limit: req.query.limit
    };

    const result = await appService.searchApps(searchQuery, options);

    res.status(200).json({
      success: true,
      data: result.data,
      meta: {
        ...result.meta,
        searchQuery
      }
    });
  });

  /**
   * Get app comparison (multiple apps)
   * POST /api/apps/compare
   */
  compareApps = handleAsyncError(async (req, res) => {
    const { appIds } = req.body;

    if (!appIds || !Array.isArray(appIds) || appIds.length === 0) {
      return res.status(400).json({
        success: false,
        error: {
          message: 'App IDs array is required',
          type: 'VALIDATION_ERROR'
        }
      });
    }

    if (appIds.length > 10) {
      return res.status(400).json({
        success: false,
        error: {
          message: 'Maximum 10 apps can be compared at once',
          type: 'VALIDATION_ERROR'
        }
      });
    }

    const comparisons = await Promise.allSettled(
      appIds.map(async (appId) => {
        const summary = await appService.getAppSummary(appId);
        return {
          appId,
          ...summary
        };
      })
    );

    const successful = comparisons
      .filter(result => result.status === 'fulfilled')
      .map(result => result.value);

    const failed = comparisons
      .filter(result => result.status === 'rejected')
      .map((result, index) => ({
        appId: appIds[index],
        error: result.reason.message
      }));

    res.status(200).json({
      success: true,
      data: {
        successful,
        failed,
        summary: {
          totalApps: successful.length,
          totalSubscriptions: successful.reduce((sum, app) => sum + app.statistics.totalSubscriptions, 0),
          totalSubscriptionGroups: successful.reduce((sum, app) => sum + app.statistics.totalSubscriptionGroups, 0)
        }
      }
    });
  });
}

// Export controller instance
const appController = new AppController();
module.exports = appController;
