const { ApiClient, AppsApi, BuildsApi, CertificatesApi, DevicesApi, ProfilesApi, BundleIdsApi, BetaGroupsApi, BetaTestersApi, AppStoreVersionsApi } = require('app_store_connect_api');
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
    this.apiClient.basePath = config.apiBaseUrl;
    
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
   */
  async executeApiCall(apiCall, operationName, params = {}) {
    try {
      logger.info(`Executing ${operationName}`, { params });
      
      const result = await apiCall();
      
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
      () => this.appsApi.appsGetCollection(opts),
      'listApps',
      opts
    );
  }

  async getApp(id, opts = {}) {
    return this.executeApiCall(
      () => this.appsApi.appsGetInstance(id, opts),
      'getApp',
      { id, ...opts }
    );
  }

  // Builds API methods
  async listBuilds(opts = {}) {
    return this.executeApiCall(
      () => this.buildsApi.buildsGetCollection(opts),
      'listBuilds',
      opts
    );
  }

  async getBuild(id, opts = {}) {
    return this.executeApiCall(
      () => this.buildsApi.buildsGetInstance(id, opts),
      'getBuild',
      { id, ...opts }
    );
  }

  async updateBuild(id, buildUpdateRequest) {
    return this.executeApiCall(
      () => this.buildsApi.buildsUpdateInstance(id, buildUpdateRequest),
      'updateBuild',
      { id, buildUpdateRequest }
    );
  }

  // Certificates API methods
  async listCertificates(opts = {}) {
    return this.executeApiCall(
      () => this.certificatesApi.certificatesGetCollection(opts),
      'listCertificates',
      opts
    );
  }

  async createCertificate(certificateCreateRequest) {
    return this.executeApiCall(
      () => this.certificatesApi.certificatesCreateInstance(certificateCreateRequest),
      'createCertificate',
      { certificateCreateRequest }
    );
  }

  async getCertificate(id, opts = {}) {
    return this.executeApiCall(
      () => this.certificatesApi.certificatesGetInstance(id, opts),
      'getCertificate',
      { id, ...opts }
    );
  }

  async deleteCertificate(id) {
    return this.executeApiCall(
      () => this.certificatesApi.certificatesDeleteInstance(id),
      'deleteCertificate',
      { id }
    );
  }

  // Devices API methods
  async listDevices(opts = {}) {
    return this.executeApiCall(
      () => this.devicesApi.devicesGetCollection(opts),
      'listDevices',
      opts
    );
  }

  async createDevice(deviceCreateRequest) {
    return this.executeApiCall(
      () => this.devicesApi.devicesCreateInstance(deviceCreateRequest),
      'createDevice',
      { deviceCreateRequest }
    );
  }

  async getDevice(id, opts = {}) {
    return this.executeApiCall(
      () => this.devicesApi.devicesGetInstance(id, opts),
      'getDevice',
      { id, ...opts }
    );
  }

  async updateDevice(id, deviceUpdateRequest) {
    return this.executeApiCall(
      () => this.devicesApi.devicesUpdateInstance(id, deviceUpdateRequest),
      'updateDevice',
      { id, deviceUpdateRequest }
    );
  }

  // Profiles API methods
  async listProfiles(opts = {}) {
    return this.executeApiCall(
      () => this.profilesApi.profilesGetCollection(opts),
      'listProfiles',
      opts
    );
  }

  async createProfile(profileCreateRequest) {
    return this.executeApiCall(
      () => this.profilesApi.profilesCreateInstance(profileCreateRequest),
      'createProfile',
      { profileCreateRequest }
    );
  }

  async getProfile(id, opts = {}) {
    return this.executeApiCall(
      () => this.profilesApi.profilesGetInstance(id, opts),
      'getProfile',
      { id, ...opts }
    );
  }

  async deleteProfile(id) {
    return this.executeApiCall(
      () => this.profilesApi.profilesDeleteInstance(id),
      'deleteProfile',
      { id }
    );
  }

  // Bundle IDs API methods
  async listBundleIds(opts = {}) {
    return this.executeApiCall(
      () => this.bundleIdsApi.bundleIdsGetCollection(opts),
      'listBundleIds',
      opts
    );
  }

  async createBundleId(bundleIdCreateRequest) {
    return this.executeApiCall(
      () => this.bundleIdsApi.bundleIdsCreateInstance(bundleIdCreateRequest),
      'createBundleId',
      { bundleIdCreateRequest }
    );
  }

  async getBundleId(id, opts = {}) {
    return this.executeApiCall(
      () => this.bundleIdsApi.bundleIdsGetInstance(id, opts),
      'getBundleId',
      { id, ...opts }
    );
  }

  async updateBundleId(id, bundleIdUpdateRequest) {
    return this.executeApiCall(
      () => this.bundleIdsApi.bundleIdsUpdateInstance(id, bundleIdUpdateRequest),
      'updateBundleId',
      { id, bundleIdUpdateRequest }
    );
  }

  async deleteBundleId(id) {
    return this.executeApiCall(
      () => this.bundleIdsApi.bundleIdsDeleteInstance(id),
      'deleteBundleId',
      { id }
    );
  }

  // Beta Groups API methods
  async listBetaGroups(opts = {}) {
    return this.executeApiCall(
      () => this.betaGroupsApi.betaGroupsGetCollection(opts),
      'listBetaGroups',
      opts
    );
  }

  async createBetaGroup(betaGroupCreateRequest) {
    return this.executeApiCall(
      () => this.betaGroupsApi.betaGroupsCreateInstance(betaGroupCreateRequest),
      'createBetaGroup',
      { betaGroupCreateRequest }
    );
  }

  async getBetaGroup(id, opts = {}) {
    return this.executeApiCall(
      () => this.betaGroupsApi.betaGroupsGetInstance(id, opts),
      'getBetaGroup',
      { id, ...opts }
    );
  }

  async updateBetaGroup(id, betaGroupUpdateRequest) {
    return this.executeApiCall(
      () => this.betaGroupsApi.betaGroupsUpdateInstance(id, betaGroupUpdateRequest),
      'updateBetaGroup',
      { id, betaGroupUpdateRequest }
    );
  }

  async deleteBetaGroup(id) {
    return this.executeApiCall(
      () => this.betaGroupsApi.betaGroupsDeleteInstance(id),
      'deleteBetaGroup',
      { id }
    );
  }

  // Beta Testers API methods
  async listBetaTesters(opts = {}) {
    return this.executeApiCall(
      () => this.betaTestersApi.betaTestersGetCollection(opts),
      'listBetaTesters',
      opts
    );
  }

  async createBetaTester(betaTesterCreateRequest) {
    return this.executeApiCall(
      () => this.betaTestersApi.betaTestersCreateInstance(betaTesterCreateRequest),
      'createBetaTester',
      { betaTesterCreateRequest }
    );
  }

  async getBetaTester(id, opts = {}) {
    return this.executeApiCall(
      () => this.betaTestersApi.betaTestersGetInstance(id, opts),
      'getBetaTester',
      { id, ...opts }
    );
  }

  async deleteBetaTester(id) {
    return this.executeApiCall(
      () => this.betaTestersApi.betaTestersDeleteInstance(id),
      'deleteBetaTester',
      { id }
    );
  }

  // App Store Versions API methods
  async listAppStoreVersions(opts = {}) {
    return this.executeApiCall(
      () => this.appStoreVersionsApi.appStoreVersionsGetCollection(opts),
      'listAppStoreVersions',
      opts
    );
  }

  async createAppStoreVersion(appStoreVersionCreateRequest) {
    return this.executeApiCall(
      () => this.appStoreVersionsApi.appStoreVersionsCreateInstance(appStoreVersionCreateRequest),
      'createAppStoreVersion',
      { appStoreVersionCreateRequest }
    );
  }

  async getAppStoreVersion(id, opts = {}) {
    return this.executeApiCall(
      () => this.appStoreVersionsApi.appStoreVersionsGetInstance(id, opts),
      'getAppStoreVersion',
      { id, ...opts }
    );
  }

  async updateAppStoreVersion(id, appStoreVersionUpdateRequest) {
    return this.executeApiCall(
      () => this.appStoreVersionsApi.appStoreVersionsUpdateInstance(id, appStoreVersionUpdateRequest),
      'updateAppStoreVersion',
      { id, appStoreVersionUpdateRequest }
    );
  }

  async deleteAppStoreVersion(id) {
    return this.executeApiCall(
      () => this.appStoreVersionsApi.appStoreVersionsDeleteInstance(id),
      'deleteAppStoreVersion',
      { id }
    );
  }
}

// Create and export singleton instance
const appStoreAPIClient = new AppStoreConnectAPIClient();
appStoreAPIClient.initialize();

module.exports = appStoreAPIClient;