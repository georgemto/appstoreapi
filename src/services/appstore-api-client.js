const { ApiClient, AppsApi, BuildsApi, CertificatesApi, DevicesApi, ProfilesApi, BundleIdsApi, BetaGroupsApi, BetaTestersApi, AppStoreVersionsApi, SubscriptionPromotionalOffersApi, SubscriptionsApi, SubscriptionIntroductoryOffersApi, SubscriptionLocalizationsApi } = require('app_store_connect_api');
const authService = require('./auth');
const logger = require('../utils/logger');
const { config } = require('../config/appstore');

/**
 * App Store Connect API Client
 * Integrates the generated API client with our authentication service
 */
class AppStoreConnectAPIClient {
  constructor() {
    this.apiClient = new ApiClient();
    // Remove /v1 from base path as generated API already includes it in routes
    this.apiClient.basePath = config.apiBaseUrl.replace(/\/v1$/, '');
    
    // Initialize API instances
    this.appsApi = new AppsApi(this.apiClient);
    this.buildsApi = new BuildsApi(this.apiClient);
    this.certificatesApi = new CertificatesApi(this.apiClient);
    this.devicesApi = new DevicesApi(this.apiClient);
    this.profilesApi = new ProfilesApi(this.apiClient);
    this.bundleIdsApi = new BundleIdsApi(this.apiClient);
    this.betaGroupsApi = new BetaGroupsApi(this.apiClient);
    this.betaTestersApi = new BetaTestersApi(this.apiClient);
    this.appStoreVersionsApi = new AppStoreVersionsApi(this.apiClient);
    this.subscriptionPromotionalOffersApi = new SubscriptionPromotionalOffersApi(this.apiClient);
    this.subscriptionsApi = new SubscriptionsApi(this.apiClient);
    this.subscriptionIntroductoryOffersApi = new SubscriptionIntroductoryOffersApi(this.apiClient);
    this.subscriptionLocalizationsApi = new SubscriptionLocalizationsApi(this.apiClient);
  }

  /**
   * Initialize the API client with authentication
   */
  initialize() {
    // Set up authentication for all requests
    this.apiClient.authentications = {
      'itc-bearer-token': {
        type: 'bearer',
        accessToken: () => {
          try {
            return authService.generateToken();
          } catch (error) {
            logger.error('Failed to generate auth token', error);
            throw error;
          }
        }
      }
    };

    // Set default headers
    this.apiClient.defaultHeaders = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'User-Agent': 'AppStoreConnectAPI/1.0.0'
    };

    logger.info('App Store Connect API client initialized');
  }

  /**
   * Execute API call with error handling and logging
   * Wraps callback-based API calls to return promises
   */
  async executeApiCall(apiCall, operationName, params = {}) {
    try {
      logger.info(`Executing ${operationName}`, { params });
      
      // Wrap callback-based API call in a promise
      const result = await new Promise((resolve, reject) => {
        const request = apiCall((error, data, response) => {
          if (error) {
            reject(error);
          } else {
            resolve(data);
          }
        });
        // Don't call .then() on the request object
      });
      
      logger.info(`${operationName} completed successfully`, {
        resultType: typeof result,
        hasData: !!result?.data
      });
      
      return result;
    } catch (error) {
      logger.error(`${operationName} failed`, {
        error: error.message,
        status: error.status,
        params
      });
      
      // Re-throw with better context
      const enhancedError = new Error(`${operationName} failed: ${error.message}`);
      enhancedError.originalError = error;
      enhancedError.status = error.status || 500;
      throw enhancedError;
    }
  }

  // Apps API methods
  async listApps(opts = {}) {
    return this.executeApiCall(
      (callback) => this.appsApi.appsGetCollection(opts, callback),
      'listApps',
      opts
    );
  }

  async getApp(id, opts = {}) {
    return this.executeApiCall(
      (callback) => this.appsApi.appsGetInstance(id, opts, callback),
      'getApp',
      { id, ...opts }
    );
  }

  // Builds API methods
  async listBuilds(opts = {}) {
    return this.executeApiCall(
      (callback) => this.buildsApi.buildsGetCollection(opts, callback),
      'listBuilds',
      opts
    );
  }

  async getBuild(id, opts = {}) {
    return this.executeApiCall(
      (callback) => this.buildsApi.buildsGetInstance(id, opts, callback),
      'getBuild',
      { id, ...opts }
    );
  }

  async updateBuild(id, buildUpdateRequest) {
    return this.executeApiCall(
      (callback) => this.buildsApi.buildsUpdateInstance(id, buildUpdateRequest, callback),
      'updateBuild',
      { id, buildUpdateRequest }
    );
  }

  // Certificates API methods
  async listCertificates(opts = {}) {
    return this.executeApiCall(
      (callback) => this.certificatesApi.certificatesGetCollection(opts, callback),
      'listCertificates',
      opts
    );
  }

  async createCertificate(certificateCreateRequest) {
    return this.executeApiCall(
      (callback) => this.certificatesApi.certificatesCreateInstance(certificateCreateRequest, callback),
      'createCertificate',
      { certificateCreateRequest }
    );
  }

  async getCertificate(id, opts = {}) {
    return this.executeApiCall(
      (callback) => this.certificatesApi.certificatesGetInstance(id, opts, callback),
      'getCertificate',
      { id, ...opts }
    );
  }

  async deleteCertificate(id) {
    return this.executeApiCall(
      (callback) => this.certificatesApi.certificatesDeleteInstance(id, callback),
      'deleteCertificate',
      { id }
    );
  }

  // Devices API methods
  async listDevices(opts = {}) {
    return this.executeApiCall(
      (callback) => this.devicesApi.devicesGetCollection(opts, callback),
      'listDevices',
      opts
    );
  }

  async createDevice(deviceCreateRequest) {
    return this.executeApiCall(
      (callback) => this.devicesApi.devicesCreateInstance(deviceCreateRequest, callback),
      'createDevice',
      { deviceCreateRequest }
    );
  }

  async getDevice(id, opts = {}) {
    return this.executeApiCall(
      (callback) => this.devicesApi.devicesGetInstance(id, opts, callback),
      'getDevice',
      { id, ...opts }
    );
  }

  async updateDevice(id, deviceUpdateRequest) {
    return this.executeApiCall(
      (callback) => this.devicesApi.devicesUpdateInstance(id, deviceUpdateRequest, callback),
      'updateDevice',
      { id, deviceUpdateRequest }
    );
  }

  // Profiles API methods
  async listProfiles(opts = {}) {
    return this.executeApiCall(
      (callback) => this.profilesApi.profilesGetCollection(opts, callback),
      'listProfiles',
      opts
    );
  }

  async createProfile(profileCreateRequest) {
    return this.executeApiCall(
      (callback) => this.profilesApi.profilesCreateInstance(profileCreateRequest, callback),
      'createProfile',
      { profileCreateRequest }
    );
  }

  async getProfile(id, opts = {}) {
    return this.executeApiCall(
      (callback) => this.profilesApi.profilesGetInstance(id, opts, callback),
      'getProfile',
      { id, ...opts }
    );
  }

  async deleteProfile(id) {
    return this.executeApiCall(
      (callback) => this.profilesApi.profilesDeleteInstance(id, callback),
      'deleteProfile',
      { id }
    );
  }

  // Bundle IDs API methods
  async listBundleIds(opts = {}) {
    return this.executeApiCall(
      (callback) => this.bundleIdsApi.bundleIdsGetCollection(opts, callback),
      'listBundleIds',
      opts
    );
  }

  async createBundleId(bundleIdCreateRequest) {
    return this.executeApiCall(
      (callback) => this.bundleIdsApi.bundleIdsCreateInstance(bundleIdCreateRequest, callback),
      'createBundleId',
      { bundleIdCreateRequest }
    );
  }

  async getBundleId(id, opts = {}) {
    return this.executeApiCall(
      (callback) => this.bundleIdsApi.bundleIdsGetInstance(id, opts, callback),
      'getBundleId',
      { id, ...opts }
    );
  }

  async updateBundleId(id, bundleIdUpdateRequest) {
    return this.executeApiCall(
      (callback) => this.bundleIdsApi.bundleIdsUpdateInstance(id, bundleIdUpdateRequest, callback),
      'updateBundleId',
      { id, bundleIdUpdateRequest }
    );
  }

  async deleteBundleId(id) {
    return this.executeApiCall(
      (callback) => this.bundleIdsApi.bundleIdsDeleteInstance(id, callback),
      'deleteBundleId',
      { id }
    );
  }

  // Beta Groups API methods
  async listBetaGroups(opts = {}) {
    return this.executeApiCall(
      (callback) => this.betaGroupsApi.betaGroupsGetCollection(opts, callback),
      'listBetaGroups',
      opts
    );
  }

  async createBetaGroup(betaGroupCreateRequest) {
    return this.executeApiCall(
      (callback) => this.betaGroupsApi.betaGroupsCreateInstance(betaGroupCreateRequest, callback),
      'createBetaGroup',
      { betaGroupCreateRequest }
    );
  }

  async getBetaGroup(id, opts = {}) {
    return this.executeApiCall(
      (callback) => this.betaGroupsApi.betaGroupsGetInstance(id, opts, callback),
      'getBetaGroup',
      { id, ...opts }
    );
  }

  async updateBetaGroup(id, betaGroupUpdateRequest) {
    return this.executeApiCall(
      (callback) => this.betaGroupsApi.betaGroupsUpdateInstance(id, betaGroupUpdateRequest, callback),
      'updateBetaGroup',
      { id, betaGroupUpdateRequest }
    );
  }

  async deleteBetaGroup(id) {
    return this.executeApiCall(
      (callback) => this.betaGroupsApi.betaGroupsDeleteInstance(id, callback),
      'deleteBetaGroup',
      { id }
    );
  }

  // Beta Testers API methods
  async listBetaTesters(opts = {}) {
    return this.executeApiCall(
      (callback) => this.betaTestersApi.betaTestersGetCollection(opts, callback),
      'listBetaTesters',
      opts
    );
  }

  async createBetaTester(betaTesterCreateRequest) {
    return this.executeApiCall(
      (callback) => this.betaTestersApi.betaTestersCreateInstance(betaTesterCreateRequest, callback),
      'createBetaTester',
      { betaTesterCreateRequest }
    );
  }

  async getBetaTester(id, opts = {}) {
    return this.executeApiCall(
      (callback) => this.betaTestersApi.betaTestersGetInstance(id, opts, callback),
      'getBetaTester',
      { id, ...opts }
    );
  }

  async deleteBetaTester(id) {
    return this.executeApiCall(
      (callback) => this.betaTestersApi.betaTestersDeleteInstance(id, callback),
      'deleteBetaTester',
      { id }
    );
  }

  // App Store Versions API methods
  async listAppStoreVersions(opts = {}) {
    return this.executeApiCall(
      (callback) => this.appStoreVersionsApi.appStoreVersionsGetCollection(opts, callback),
      'listAppStoreVersions',
      opts
    );
  }

  async createAppStoreVersion(appStoreVersionCreateRequest) {
    return this.executeApiCall(
      (callback) => this.appStoreVersionsApi.appStoreVersionsCreateInstance(appStoreVersionCreateRequest, callback),
      'createAppStoreVersion',
      { appStoreVersionCreateRequest }
    );
  }

  async getAppStoreVersion(id, opts = {}) {
    return this.executeApiCall(
      (callback) => this.appStoreVersionsApi.appStoreVersionsGetInstance(id, opts, callback),
      'getAppStoreVersion',
      { id, ...opts }
    );
  }

  async updateAppStoreVersion(id, appStoreVersionUpdateRequest) {
    return this.executeApiCall(
      (callback) => this.appStoreVersionsApi.appStoreVersionsUpdateInstance(id, appStoreVersionUpdateRequest, callback),
      'updateAppStoreVersion',
      { id, appStoreVersionUpdateRequest }
    );
  }

  async deleteAppStoreVersion(id) {
    return this.executeApiCall(
      (callback) => this.appStoreVersionsApi.appStoreVersionsDeleteInstance(id, callback),
      'deleteAppStoreVersion',
      { id }
    );
  }

  // Subscription Promotional Offers API methods
  async createPromotionalOffer(subscriptionPromotionalOfferCreateRequest) {
    // Use direct HTTP client to avoid deserialization issues with oneOf schemas
    // The generated client has issues parsing promotional offer responses
    const appStoreClient = require('./appstore-client');
    try {
      const response = await appStoreClient.post(
        '/subscriptionPromotionalOffers',
        subscriptionPromotionalOfferCreateRequest
      );
      logger.info('createPromotionalOffer completed successfully', {
        offerId: response.data?.id,
        offerCode: response.data?.attributes?.offerCode
      });
      return response;
    } catch (error) {
      logger.error('createPromotionalOffer failed', {
        error: error.message,
        status: error.status || error.statusCode
      });
      throw error;
    }
  }

  async getPromotionalOffer(id, opts = {}) {
    return this.executeApiCall(
      (callback) => this.subscriptionPromotionalOffersApi.subscriptionPromotionalOffersGetInstance(id, opts, callback),
      'getPromotionalOffer',
      { id, ...opts }
    );
  }

  async updatePromotionalOffer(id, subscriptionPromotionalOfferUpdateRequest) {
    return this.executeApiCall(
      (callback) => this.subscriptionPromotionalOffersApi.subscriptionPromotionalOffersUpdateInstance(id, subscriptionPromotionalOfferUpdateRequest, callback),
      'updatePromotionalOffer',
      { id, subscriptionPromotionalOfferUpdateRequest }
    );
  }

  async deletePromotionalOffer(id) {
    return this.executeApiCall(
      (callback) => this.subscriptionPromotionalOffersApi.subscriptionPromotionalOffersDeleteInstance(id, callback),
      'deletePromotionalOffer',
      { id }
    );
  }

  async getPromotionalOfferPrices(id, opts = {}) {
    return this.executeApiCall(
      (callback) => this.subscriptionPromotionalOffersApi.subscriptionPromotionalOffersPricesGetToManyRelated(id, opts, callback),
      'getPromotionalOfferPrices',
      { id, ...opts }
    );
  }

  // Subscriptions API methods
  async getSubscriptionPricePoints(id, opts = {}) {
    return this.executeApiCall(
      (callback) => this.subscriptionsApi.subscriptionsPricePointsGetToManyRelated(id, opts, callback),
      'getSubscriptionPricePoints',
      { id, ...opts }
    );
  }

  // Subscription Introductory Offers API methods
  async createIntroductoryOffer(subscriptionIntroductoryOfferCreateRequest) {
    // Use direct HTTP client to avoid deserialization issues with oneOf schemas
    const appStoreClient = require('./appstore-client');
    try {
      const response = await appStoreClient.post(
        '/subscriptionIntroductoryOffers',
        subscriptionIntroductoryOfferCreateRequest
      );
      logger.info('createIntroductoryOffer completed successfully', {
        offerId: response.data?.id,
        territory: response.data?.relationships?.territory?.data?.id
      });
      return response;
    } catch (error) {
      logger.error('createIntroductoryOffer failed', {
        error: error.message,
        status: error.status || error.statusCode
      });
      throw error;
    }
  }

  async getIntroductoryOffer(id, opts = {}) {
    return this.executeApiCall(
      (callback) => this.subscriptionIntroductoryOffersApi.subscriptionIntroductoryOffersGetInstance(id, opts, callback),
      'getIntroductoryOffer',
      { id, ...opts }
    );
  }

  async updateIntroductoryOffer(id, subscriptionIntroductoryOfferUpdateRequest) {
    return this.executeApiCall(
      (callback) => this.subscriptionIntroductoryOffersApi.subscriptionIntroductoryOffersUpdateInstance(id, subscriptionIntroductoryOfferUpdateRequest, callback),
      'updateIntroductoryOffer',
      { id, subscriptionIntroductoryOfferUpdateRequest }
    );
  }

  async deleteIntroductoryOffer(id) {
    return this.executeApiCall(
      (callback) => this.subscriptionIntroductoryOffersApi.subscriptionIntroductoryOffersDeleteInstance(id, callback),
      'deleteIntroductoryOffer',
      { id }
    );
  }

  // Subscription Localizations API methods
  async createSubscriptionLocalization(subscriptionLocalizationCreateRequest) {
    // Use direct HTTP client to avoid deserialization issues
    const appStoreClient = require('./appstore-client');
    try {
      const response = await appStoreClient.post(
        '/subscriptionLocalizations',
        subscriptionLocalizationCreateRequest
      );
      logger.info('createSubscriptionLocalization completed successfully', {
        localizationId: response.data?.id,
        locale: response.data?.attributes?.locale
      });
      return response;
    } catch (error) {
      logger.error('createSubscriptionLocalization failed', {
        error: error.message,
        status: error.status || error.statusCode
      });
      throw error;
    }
  }

  async getSubscriptionLocalization(id, opts = {}) {
    return this.executeApiCall(
      (callback) => this.subscriptionLocalizationsApi.subscriptionLocalizationsGetInstance(id, opts, callback),
      'getSubscriptionLocalization',
      { id, ...opts }
    );
  }

  async updateSubscriptionLocalization(id, subscriptionLocalizationUpdateRequest) {
    // Use direct HTTP client for consistency
    const appStoreClient = require('./appstore-client');
    try {
      const response = await appStoreClient.patch(
        `/subscriptionLocalizations/${id}`,
        subscriptionLocalizationUpdateRequest
      );
      logger.info('updateSubscriptionLocalization completed successfully', {
        localizationId: response.data?.id
      });
      return response;
    } catch (error) {
      logger.error('updateSubscriptionLocalization failed', {
        error: error.message,
        status: error.status || error.statusCode
      });
      throw error;
    }
  }

  async deleteSubscriptionLocalization(id) {
    return this.executeApiCall(
      (callback) => this.subscriptionLocalizationsApi.subscriptionLocalizationsDeleteInstance(id, callback),
      'deleteSubscriptionLocalization',
      { id }
    );
  }

  /**
   * Fetch the next page of results using a pagination URL
   * @param {string} nextUrl - The full URL for the next page from response.links.next
   * @param {number} retryCount - Current retry attempt (for internal use)
   * @returns {Promise} Promise resolving to the next page of results
   */
  async getNextPage(nextUrl, retryCount = 0) {
    const axios = require('axios');
    const maxRetries = 3;
    const baseDelay = 1000; // 1 second
    
    logger.info('Fetching next page', { url: nextUrl, attempt: retryCount + 1 });
    
    try {
      const token = authService.generateToken();
      
      const response = await axios.get(nextUrl, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        timeout: 30000, // 30 second timeout
        validateStatus: (status) => status >= 200 && status < 300
      });
      
      logger.info('getNextPage completed successfully', {
        hasData: !!response.data?.data,
        resultCount: response.data?.data?.length || 0,
        hasNextPage: !!response.data?.links?.next
      });
      
      return response.data;
    } catch (error) {
      const isRetryable = 
        error.code === 'ECONNRESET' || 
        error.code === 'ETIMEDOUT' || 
        error.code === 'ENOTFOUND' ||
        error.message?.includes('socket hang up') ||
        error.message?.includes('timeout') ||
        (error.response?.status >= 500 && error.response?.status < 600);
      
      if (isRetryable && retryCount < maxRetries) {
        // Exponential backoff: 1s, 2s, 4s
        const delay = baseDelay * Math.pow(2, retryCount);
        
        logger.warn(`getNextPage failed, retrying in ${delay}ms`, {
          url: nextUrl,
          error: error.message,
          attempt: retryCount + 1,
          maxRetries,
          nextDelay: delay
        });
        
        // Wait before retrying
        await new Promise(resolve => setTimeout(resolve, delay));
        
        // Retry the request
        return this.getNextPage(nextUrl, retryCount + 1);
      }
      
      logger.error('getNextPage failed after retries', {
        url: nextUrl,
        error: error.message,
        code: error.code,
        status: error.response?.status,
        attempts: retryCount + 1
      });
      
      throw error;
    }
  }
}

// Create and export singleton instance
const appStoreAPIClient = new AppStoreConnectAPIClient();
appStoreAPIClient.initialize();

module.exports = appStoreAPIClient;