const appStoreClient = require('./appstore-client');
const { config } = require('../config/appstore');
const { NotFoundError, ValidationError } = require('../utils/errors');
const logger = require('../utils/logger');

class AppService {
  constructor() {
    this.endpoints = config.endpoints;
  }

  /**
   * Get all apps accessible with the current API key
   */
  async getAllApps(options = {}) {
    try {
      const {
        bundleId,
        name,
        platform,
        includes,
        limit = 50
      } = options;

      const filters = {};
      if (bundleId) filters.bundleId = bundleId;
      if (name) filters.name = name;
      if (platform) filters.platform = platform;

      // Only include specific fields if we have includes, otherwise keep it simple
      const includeArray = includes ? (Array.isArray(includes) ? includes : includes.split(',')) : [];
      
      const fields = {
        apps: ['name', 'bundleId', 'sku', 'primaryLocale', 'isOrEverWasMadeForKids']
      };
      
      // Only add fields for included resources
      if (includeArray.includes('appStoreVersions')) {
        fields.appStoreVersions = ['versionString', 'appStoreState', 'platform'];
      }
      if (includeArray.includes('preReleaseVersions')) {
        fields.preReleaseVersions = ['version', 'platform'];
      }

      const params = appStoreClient.buildParams(
        filters,
        includeArray,
        fields,
        'name',
        limit
      );

      const response = await appStoreClient.get(this.endpoints.apps, params);
      
      logger.info(`Retrieved ${response.data?.length || 0} apps`);
      return response;
    } catch (error) {
      logger.error('Failed to get apps:', error);
      throw error;
    }
  }

  /**
   * Get a specific app by ID
   */
  async getAppById(appId, includes = ['appStoreVersions']) {
    try {
      if (!appId) {
        throw new ValidationError('App ID is required');
      }

      const params = appStoreClient.buildParams(
        {},
        includes,
        {
          apps: ['name', 'bundleId', 'sku', 'primaryLocale', 'isOrEverWasMadeForKids', 'subscriptionStatusUrl', 'subscriptionStatusUrlVersion'],
          appStoreVersions: ['versionString', 'appStoreState', 'platform', 'copyright']
        }
      );

      const response = await appStoreClient.get(`${this.endpoints.apps}/${appId}`, params);
      
      if (!response.data) {
        throw new NotFoundError(`App with ID ${appId} not found`);
      }

      logger.info(`Retrieved app: ${appId} (${response.data.attributes?.name})`);
      return response;
    } catch (error) {
      if (error.statusCode === 404) {
        throw new NotFoundError(`App with ID ${appId} not found`);
      }
      logger.error(`Failed to get app ${appId}:`, error);
      throw error;
    }
  }

  /**
   * Get subscriptions for a specific app
   */
  async getAppSubscriptions(appId, options = {}) {
    try {
      if (!appId) {
        throw new ValidationError('App ID is required');
      }

      const {
        state,
        includes = ['subscriptionLocalizations', 'prices'],
        limit = 200
      } = options;

      const filters = { app: appId };
      if (state) filters.state = state;

      const params = appStoreClient.buildParams(
        filters,
        includes,
        {
          subscriptions: ['name', 'productId', 'subscriptionPeriod', 'state', 'reviewNote', 'familySharable'],
          subscriptionLocalizations: ['name', 'description', 'locale'],
          subscriptionPrices: ['startDate', 'endDate']
        },
        'name',
        limit
      );

      const response = await appStoreClient.get('/subscriptions', params);
      
      logger.info(`Retrieved ${response.data?.length || 0} subscriptions for app ${appId}`);
      return response;
    } catch (error) {
      logger.error(`Failed to get subscriptions for app ${appId}:`, error);
      throw error;
    }
  }

  /**
   * Get subscription groups for a specific app
   */
  async getAppSubscriptionGroups(appId, options = {}) {
    try {
      if (!appId) {
        throw new ValidationError('App ID is required');
      }

      const {
        includes = ['subscriptions', 'subscriptionGroupLocalizations'],
        limit = 50
      } = options;

      const params = appStoreClient.buildParams(
        { app: appId },
        includes,
        {
          subscriptionGroups: ['referenceName', 'state'],
          subscriptions: ['name', 'productId', 'state'],
          subscriptionGroupLocalizations: ['name', 'locale']
        },
        'referenceName',
        limit
      );

      const response = await appStoreClient.get('/subscriptionGroups', params);
      
      logger.info(`Retrieved ${response.data?.length || 0} subscription groups for app ${appId}`);
      return response;
    } catch (error) {
      logger.error(`Failed to get subscription groups for app ${appId}:`, error);
      throw error;
    }
  }

  /**
   * Create a subscription group for a specific app
   */
  async createSubscriptionGroup(appId, groupData) {
    try {
      if (!appId) {
        throw new ValidationError('App ID is required');
      }

      this.validateSubscriptionGroupData(groupData);

      const payload = {
        data: {
          type: 'subscriptionGroups',
          attributes: {
            referenceName: groupData.referenceName
          },
          relationships: {
            app: {
              data: {
                type: 'apps',
                id: appId
              }
            }
          }
        }
      };

      const response = await appStoreClient.post('/subscriptionGroups', payload);
      
      logger.info(`Created subscription group: ${groupData.referenceName} for app ${appId}`);
      return response;
    } catch (error) {
      logger.error(`Failed to create subscription group for app ${appId}:`, error);
      throw error;
    }
  }

  /**
   * Get app summary with subscription statistics
   */
  async getAppSummary(appId) {
    try {
      if (!appId) {
        throw new ValidationError('App ID is required');
      }

      // Get app details
      const appResponse = await this.getAppById(appId, ['appStoreVersions']);
      
      // Get subscription groups
      const groupsResponse = await this.getAppSubscriptionGroups(appId);
      
      // Get all subscriptions
      const subscriptionsResponse = await this.getAppSubscriptions(appId);

      // Build summary
      const summary = {
        app: appResponse.data,
        statistics: {
          totalSubscriptionGroups: groupsResponse.data?.length || 0,
          totalSubscriptions: subscriptionsResponse.data?.length || 0,
          subscriptionsByState: this.groupSubscriptionsByState(subscriptionsResponse.data || []),
          subscriptionsByPeriod: this.groupSubscriptionsByPeriod(subscriptionsResponse.data || [])
        },
        subscriptionGroups: groupsResponse.data || [],
        recentSubscriptions: (subscriptionsResponse.data || []).slice(0, 5) // Latest 5
      };

      logger.info(`Generated summary for app ${appId}`);
      return summary;
    } catch (error) {
      logger.error(`Failed to generate app summary for ${appId}:`, error);
      throw error;
    }
  }

  /**
   * Search apps by bundle ID or name
   */
  async searchApps(searchQuery, options = {}) {
    try {
      const { limit = 50 } = options;

      // Search by bundle ID first (exact match)
      let response = await this.getAllApps({
        bundleId: searchQuery,
        limit: 10
      });

      // If no exact bundle ID match, search by name (contains)
      if (!response.data || response.data.length === 0) {
        response = await this.getAllApps({
          name: searchQuery,
          limit
        });
      }

      logger.info(`Search for "${searchQuery}" returned ${response.data?.length || 0} apps`);
      return response;
    } catch (error) {
      logger.error(`Failed to search apps with query "${searchQuery}":`, error);
      throw error;
    }
  }

  /**
   * Get all subscription product IDs for an app by bundle ID
   */
  async getSubscriptionProductIdsByBundleId(bundleId, options = {}) {
    try {
      if (!bundleId) {
        throw new ValidationError('Bundle ID is required');
      }

      const { useCache = true, saveToDb = true } = options;

      // Try to get from database first if cache is enabled
      if (useCache) {
        const subscriptionDb = require('./subscription-database');
        const cachedData = await subscriptionDb.getSubscriptionDataByBundleId(bundleId);
        
        if (cachedData) {
          logger.info(`Retrieved subscription data from database cache for "${bundleId}"`, {
            subscriptions: cachedData.subscriptions.length,
            updatedAt: cachedData.updatedAt
          });
          return cachedData;
        }
      }

      // Fetch from Apple API
      logger.info(`Fetching subscription data from Apple API for "${bundleId}"`);

      // First, get the app by bundle ID. Apple's filter[bundleId] matches by
      // prefix, not exact value (e.g. "com.example.app" also matches
      // "com.example.app.uat1"), so fetch multiple candidates and pick the
      // one whose bundleId is an exact match rather than trusting data[0].
      const appResponse = await this.getAllApps({
        bundleId: bundleId,
        limit: 50
      });

      const app = (appResponse.data || []).find(a => a.attributes?.bundleId === bundleId);

      if (!app) {
        throw new NotFoundError(`App with bundle ID "${bundleId}" not found`);
      }

      const appId = app.id;
      const appName = app.attributes?.name;

      // Get subscription groups for the app, paginated. Previously this used
      // ?include=subscriptions on the groups endpoint and pulled subscription
      // data out of the truncated `included[]` array (Apple caps include arrays,
      // typically at 50), which silently dropped subscriptions for apps with
      // many products. Now we fetch groups first, then paginate each group's
      // /subscriptionGroups/{id}/subscriptions endpoint for the full data.
      const subscriptionGroupsRaw = [];
      {
        let resp = await appStoreClient.get(`/apps/${appId}/subscriptionGroups`, {
          'fields[subscriptionGroups]': 'referenceName',
          limit: 200
        });
        while (resp && resp.data) {
          subscriptionGroupsRaw.push(...resp.data);
          const nextUrl = resp.links?.next;
          if (!nextUrl) break;
          resp = await appStoreClient.getNextPage(nextUrl);
        }
      }

      // Pull every subscription out of every group, with full fields and full
      // pagination — this is the authoritative source.
      const allSubscriptions = [];
      const productIds = [];
      const seenSubscriptionIds = new Set();

      for (const group of subscriptionGroupsRaw) {
        try {
          let resp = await appStoreClient.get(
            `/subscriptionGroups/${group.id}/subscriptions`,
            {
              'fields[subscriptions]': 'name,productId,state,subscriptionPeriod,familySharable,reviewNote',
              limit: 200
            }
          );
          while (resp && resp.data) {
            for (const item of resp.data) {
              if (seenSubscriptionIds.has(item.id)) continue;
              seenSubscriptionIds.add(item.id);
              const productId = item.attributes?.productId;
              if (!productId) continue;
              productIds.push(productId);
              allSubscriptions.push({
                id: item.id,
                productId,
                name: item.attributes?.name,
                state: item.attributes?.state,
                subscriptionPeriod: item.attributes?.subscriptionPeriod,
                familySharable: item.attributes?.familySharable,
                reviewNote: item.attributes?.reviewNote,
                groupId: group.id
              });
            }
            const nextUrl = resp.links?.next;
            if (!nextUrl) break;
            resp = await appStoreClient.getNextPage(nextUrl);
          }
        } catch (error) {
          logger.warn(`Failed to get subscriptions for group ${group.id}:`, error.message);
        }
      }

      const subscriptionGroups = subscriptionGroupsRaw.map(group => ({
        id: group.id,
        referenceName: group.attributes?.referenceName
      }));

      const result = {
        appId,
        appName,
        productIds,
        subscriptions: allSubscriptions,
        subscriptionGroups
      };

      logger.info(`Retrieved ${productIds.length} subscription product IDs from API for "${bundleId}"`);

      // Save to database if enabled
      if (saveToDb) {
        try {
          const subscriptionDb = require('./subscription-database');
          await subscriptionDb.saveSubscriptionData(bundleId, result);
        } catch (dbError) {
          logger.error(`Failed to save to database for "${bundleId}":`, dbError);
          // Don't fail the request if database save fails
        }
      }

      return result;
    } catch (error) {
      logger.error(`Failed to get subscription product IDs for bundle ID "${bundleId}":`, error);
      throw error;
    }
  }

  /**
   * Validate subscription group data
   */
  validateSubscriptionGroupData(data) {
    if (!data.referenceName || typeof data.referenceName !== 'string') {
      throw new ValidationError('Reference name is required and must be a string');
    }

    if (data.referenceName.length < 1 || data.referenceName.length > 64) {
      throw new ValidationError('Reference name must be between 1 and 64 characters');
    }
  }

  /**
   * Helper: Group subscriptions by state
   */
  groupSubscriptionsByState(subscriptions) {
    return subscriptions.reduce((acc, sub) => {
      const state = sub.attributes?.state || 'UNKNOWN';
      acc[state] = (acc[state] || 0) + 1;
      return acc;
    }, {});
  }

  /**
   * Helper: Group subscriptions by period
   */
  groupSubscriptionsByPeriod(subscriptions) {
    return subscriptions.reduce((acc, sub) => {
      const period = sub.attributes?.subscriptionPeriod || 'UNKNOWN';
      acc[period] = (acc[period] || 0) + 1;
      return acc;
    }, {});
  }
}

// Export singleton instance
const appService = new AppService();
module.exports = appService;
