const appStoreAPIClient = require('../services/appstore-api-client');
const { handleAsyncError } = require('../utils/errors');
const logger = require('../utils/logger');

class BuildsController {
  /**
   * Get all builds
   * GET /api/builds
   */
  getAllBuilds = handleAsyncError(async (req, res) => {
    const options = {
      filterApp: req.query.app ?? "",
      filterBetaAppReviewSubmissionBetaReviewState: req.query.betaReviewState ?? "",
      filterExpired: req.query.expired ?? "",
      filterPreReleaseVersionVersion: req.query.version ?? "",
      filterProcessingState: req.query.processingState ?? "",
      filterUsesNonExemptEncryption: req.query.usesNonExemptEncryption ?? "",
      filterVersion: req.query.versionString ?? "",
      include: req.query.include ?? "",
      fieldsBuilds: req.query.fieldsBuilds ?? "",
      fieldsApps: req.query.fieldsApps ?? "",
      fieldsBetaAppReviewSubmissions: req.query.fieldsBetaAppReviewSubmissions ?? "",
      fieldsBetaBuildLocalizations: req.query.fieldsBetaBuildLocalizations ?? "",
      fieldsAppEncryptionDeclarations: req.query.fieldsAppEncryptionDeclarations ?? "",
      fieldsBetaTesters: req.query.fieldsBetaTesters ?? "",
      fieldsPreReleaseVersions: req.query.fieldsPreReleaseVersions ?? "",
      fieldsBuildBetaDetails: req.query.fieldsBuildBetaDetails ?? "",
      fieldsAppStoreVersions: req.query.fieldsAppStoreVersions ?? "",
      fieldsBuildIcons: req.query.fieldsBuildIcons ?? "",
      limit: req.query.limit ?? "",
      limitBetaBuildLocalizations: req.query.limitBetaBuildLocalizations ?? "",
      limitIcons: req.query.limitIcons ?? "",
      limitIndividualTesters: req.query.limitIndividualTesters ?? "",
      sort: req.query.sort ?? ""
    };

    const result = await appStoreAPIClient.listBuilds(options);

    res.status(200).json({
      success: true,
      data: result.data,
      included: result.included,
      links: result.links,
      meta: result.meta
    });
  });

  /**
   * Get build by ID
   * GET /api/builds/:id
   */
  getBuildById = handleAsyncError(async (req, res) => {
    const { id } = req.params;
    const options = {
      include: req.query.include,
      fieldsBuilds: req.query.fieldsBuilds,
      fieldsApps: req.query.fieldsApps,
      fieldsBetaAppReviewSubmissions: req.query.fieldsBetaAppReviewSubmissions,
      fieldsBetaBuildLocalizations: req.query.fieldsBetaBuildLocalizations,
      fieldsAppEncryptionDeclarations: req.query.fieldsAppEncryptionDeclarations,
      fieldsBetaTesters: req.query.fieldsBetaTesters,
      fieldsPreReleaseVersions: req.query.fieldsPreReleaseVersions,
      fieldsBuildBetaDetails: req.query.fieldsBuildBetaDetails,
      fieldsAppStoreVersions: req.query.fieldsAppStoreVersions,
      fieldsBuildIcons: req.query.fieldsBuildIcons,
      limitBetaBuildLocalizations: req.query.limitBetaBuildLocalizations,
      limitIcons: req.query.limitIcons,
      limitIndividualTesters: req.query.limitIndividualTesters
    };

    const result = await appStoreAPIClient.getBuild(id, options);

    res.status(200).json({
      success: true,
      data: result.data,
      included: result.included
    });
  });

  /**
   * Update build
   * PATCH /api/builds/:id
   */
  updateBuild = handleAsyncError(async (req, res) => {
    const { id } = req.params;
    const updateData = req.body;

    const result = await appStoreAPIClient.updateBuild(id, updateData);

    logger.info(`Build updated successfully`, {
      buildId: id,
      updatedFields: Object.keys(updateData?.data?.attributes || {})
    });

    res.status(200).json({
      success: true,
      data: result.data,
      message: 'Build updated successfully'
    });
  });

  /**
   * Get build's app
   * GET /api/builds/:id/app
   */
  getBuildApp = handleAsyncError(async (req, res) => {
    const { id } = req.params;
    
    // First get the build to get the app relationship
    const build = await appStoreAPIClient.getBuild(id, { include: ['app'] });
    
    if (!build.data.relationships?.app?.data) {
      return res.status(404).json({
        success: false,
        error: {
          message: 'App not found for this build',
          type: 'NOT_FOUND'
        }
      });
    }

    const appId = build.data.relationships.app.data.id;
    const app = await appStoreAPIClient.getApp(appId);

    res.status(200).json({
      success: true,
      data: app.data
    });
  });

  /**
   * Get build's beta build localizations
   * GET /api/builds/:id/beta-build-localizations
   */
  getBuildBetaLocalizations = handleAsyncError(async (req, res) => {
    const { id } = req.params;
    
    const build = await appStoreAPIClient.getBuild(id, { 
      include: ['betaBuildLocalizations'],
      limitBetaBuildLocalizations: req.query.limit || 50
    });

    const localizations = build.included?.filter(item => 
      item.type === 'betaBuildLocalizations'
    ) || [];

    res.status(200).json({
      success: true,
      data: localizations,
      meta: {
        total: localizations.length
      }
    });
  });

  /**
   * Get build's beta testers
   * GET /api/builds/:id/individual-testers
   */
  getBuildBetaTesters = handleAsyncError(async (req, res) => {
    const { id } = req.params;
    
    const build = await appStoreAPIClient.getBuild(id, { 
      include: ['individualTesters'],
      limitIndividualTesters: req.query.limit || 50
    });

    const testers = build.included?.filter(item => 
      item.type === 'betaTesters'
    ) || [];

    res.status(200).json({
      success: true,
      data: testers,
      meta: {
        total: testers.length
      }
    });
  });

  /**
   * Get builds summary with statistics
   * GET /api/builds/summary
   */
  getBuildsSummary = handleAsyncError(async (req, res) => {
    const allBuilds = await appStoreAPIClient.listBuilds({
      limit: 200, // Get more builds for better statistics
      include: ['app', 'betaAppReviewSubmission']
    });

    const builds = allBuilds.data || [];
    
    // Calculate summary statistics
    const summary = {
      total: builds.length,
      byProcessingState: {},
      byPlatform: {},
      byReviewState: {},
      recentBuilds: builds.slice(0, 10), // Most recent 10 builds
      totalApps: new Set(builds.map(build => 
        build.relationships?.app?.data?.id
      )).size
    };

    // Group by processing state
    builds.forEach(build => {
      const state = build.attributes?.processingState || 'UNKNOWN';
      summary.byProcessingState[state] = (summary.byProcessingState[state] || 0) + 1;
    });

    // Group by platform (if available in attributes)
    builds.forEach(build => {
      const platform = build.attributes?.platform || 'UNKNOWN';
      summary.byPlatform[platform] = (summary.byPlatform[platform] || 0) + 1;
    });

    // Group by beta review state (from included data)
    const betaReviewSubmissions = allBuilds.included?.filter(item => 
      item.type === 'betaAppReviewSubmissions'
    ) || [];

    betaReviewSubmissions.forEach(submission => {
      const state = submission.attributes?.betaReviewState || 'UNKNOWN';
      summary.byReviewState[state] = (summary.byReviewState[state] || 0) + 1;
    });

    res.status(200).json({
      success: true,
      data: summary
    });
  });

  /**
   * Health check endpoint
   * GET /api/builds/health
   */
  healthCheck = handleAsyncError(async (req, res) => {
    res.status(200).json({
      success: true,
      message: 'Builds API is healthy',
      timestamp: new Date().toISOString()
    });
  });
}

module.exports = new BuildsController();