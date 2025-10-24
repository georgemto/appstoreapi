const appStoreAPIClient = require('../services/appstore-api-client');
const { handleAsyncError } = require('../utils/errors');
const logger = require('../utils/logger');

class BetaController {
  // Beta Groups Management
  
  /**
   * Get all beta groups
   * GET /api/beta/groups
   */
  getAllBetaGroups = handleAsyncError(async (req, res) => {
    const options = {
      filterApp: req.query.app,
      filterIsInternalGroup: req.query.isInternalGroup,
      filterName: req.query.name,
      filterPublicLink: req.query.publicLink,
      filterPublicLinkEnabled: req.query.publicLinkEnabled,
      filterPublicLinkLimitEnabled: req.query.publicLinkLimitEnabled,
      include: req.query.include,
      fieldsBetaGroups: req.query.fieldsBetaGroups,
      fieldsApps: req.query.fieldsApps,
      fieldsBetaTesters: req.query.fieldsBetaTesters,
      fieldsBuilds: req.query.fieldsBuilds,
      limit: req.query.limit,
      limitBetaTesters: req.query.limitBetaTesters,
      limitBuilds: req.query.limitBuilds,
      sort: req.query.sort
    };

    const result = await appStoreAPIClient.listBetaGroups(options);

    res.status(200).json({
      success: true,
      data: result.data,
      included: result.included,
      links: result.links,
      meta: result.meta
    });
  });

  /**
   * Create new beta group
   * POST /api/beta/groups
   */
  createBetaGroup = handleAsyncError(async (req, res) => {
    const betaGroupData = req.body;

    const result = await appStoreAPIClient.createBetaGroup(betaGroupData);

    logger.info(`Beta group created successfully`, {
      betaGroupId: result.data?.id,
      name: result.data?.attributes?.name,
      isInternalGroup: result.data?.attributes?.isInternalGroup
    });

    res.status(201).json({
      success: true,
      data: result.data,
      message: 'Beta group created successfully'
    });
  });

  /**
   * Get beta group by ID
   * GET /api/beta/groups/:id
   */
  getBetaGroupById = handleAsyncError(async (req, res) => {
    const { id } = req.params;
    const options = {
      include: req.query.include,
      fieldsBetaGroups: req.query.fieldsBetaGroups,
      fieldsApps: req.query.fieldsApps,
      fieldsBetaTesters: req.query.fieldsBetaTesters,
      fieldsBuilds: req.query.fieldsBuilds,
      limitBetaTesters: req.query.limitBetaTesters,
      limitBuilds: req.query.limitBuilds
    };

    const result = await appStoreAPIClient.getBetaGroup(id, options);

    res.status(200).json({
      success: true,
      data: result.data,
      included: result.included
    });
  });

  /**
   * Update beta group
   * PATCH /api/beta/groups/:id
   */
  updateBetaGroup = handleAsyncError(async (req, res) => {
    const { id } = req.params;
    const updateData = req.body;

    const result = await appStoreAPIClient.updateBetaGroup(id, updateData);

    logger.info(`Beta group updated successfully`, {
      betaGroupId: id,
      updatedFields: Object.keys(updateData?.data?.attributes || {})
    });

    res.status(200).json({
      success: true,
      data: result.data,
      message: 'Beta group updated successfully'
    });
  });

  /**
   * Delete beta group
   * DELETE /api/beta/groups/:id
   */
  deleteBetaGroup = handleAsyncError(async (req, res) => {
    const { id } = req.params;

    await appStoreAPIClient.deleteBetaGroup(id);

    logger.info(`Beta group deleted successfully`, { betaGroupId: id });

    res.status(200).json({
      success: true,
      message: 'Beta group deleted successfully'
    });
  });

  // Beta Testers Management

  /**
   * Get all beta testers
   * GET /api/beta/testers
   */
  getAllBetaTesters = handleAsyncError(async (req, res) => {
    const options = {
      filterApps: req.query.apps,
      filterBetaGroups: req.query.betaGroups,
      filterEmail: req.query.email,
      filterFirstName: req.query.firstName,
      filterInviteType: req.query.inviteType,
      filterLastName: req.query.lastName,
      filterState: req.query.state,
      include: req.query.include,
      fieldsBetaTesters: req.query.fieldsBetaTesters,
      fieldsApps: req.query.fieldsApps,
      fieldsBetaGroups: req.query.fieldsBetaGroups,
      fieldsBuilds: req.query.fieldsBuilds,
      limit: req.query.limit,
      limitApps: req.query.limitApps,
      limitBetaGroups: req.query.limitBetaGroups,
      limitBuilds: req.query.limitBuilds,
      sort: req.query.sort
    };

    const result = await appStoreAPIClient.listBetaTesters(options);

    res.status(200).json({
      success: true,
      data: result.data,
      included: result.included,
      links: result.links,
      meta: result.meta
    });
  });

  /**
   * Create new beta tester
   * POST /api/beta/testers
   */
  createBetaTester = handleAsyncError(async (req, res) => {
    const betaTesterData = req.body;

    const result = await appStoreAPIClient.createBetaTester(betaTesterData);

    logger.info(`Beta tester created successfully`, {
      betaTesterId: result.data?.id,
      email: result.data?.attributes?.email,
      firstName: result.data?.attributes?.firstName,
      lastName: result.data?.attributes?.lastName
    });

    res.status(201).json({
      success: true,
      data: result.data,
      message: 'Beta tester created successfully'
    });
  });

  /**
   * Get beta tester by ID
   * GET /api/beta/testers/:id
   */
  getBetaTesterById = handleAsyncError(async (req, res) => {
    const { id } = req.params;
    const options = {
      include: req.query.include,
      fieldsBetaTesters: req.query.fieldsBetaTesters,
      fieldsApps: req.query.fieldsApps,
      fieldsBetaGroups: req.query.fieldsBetaGroups,
      fieldsBuilds: req.query.fieldsBuilds,
      limitApps: req.query.limitApps,
      limitBetaGroups: req.query.limitBetaGroups,
      limitBuilds: req.query.limitBuilds
    };

    const result = await appStoreAPIClient.getBetaTester(id, options);

    res.status(200).json({
      success: true,
      data: result.data,
      included: result.included
    });
  });

  /**
   * Delete beta tester
   * DELETE /api/beta/testers/:id
   */
  deleteBetaTester = handleAsyncError(async (req, res) => {
    const { id } = req.params;

    await appStoreAPIClient.deleteBetaTester(id);

    logger.info(`Beta tester deleted successfully`, { betaTesterId: id });

    res.status(200).json({
      success: true,
      message: 'Beta tester deleted successfully'
    });
  });

  // Summary and Analytics

  /**
   * Get beta testing summary
   * GET /api/beta/summary
   */
  getBetaSummary = handleAsyncError(async (req, res) => {
    // Get beta groups and testers data
    const [betaGroups, betaTesters] = await Promise.all([
      appStoreAPIClient.listBetaGroups({ limit: 200 }),
      appStoreAPIClient.listBetaTesters({ limit: 200 })
    ]);

    const groups = betaGroups.data || [];
    const testers = betaTesters.data || [];
    
    // Calculate summary statistics
    const summary = {
      totalGroups: groups.length,
      totalTesters: testers.length,
      groupsByType: {
        internal: 0,
        external: 0
      },
      testersByState: {},
      testersByInviteType: {},
      recentGroups: groups.slice(0, 5),
      recentTesters: testers.slice(0, 5)
    };

    // Analyze beta groups
    groups.forEach(group => {
      if (group.attributes?.isInternalGroup) {
        summary.groupsByType.internal++;
      } else {
        summary.groupsByType.external++;
      }
    });

    // Analyze beta testers
    testers.forEach(tester => {
      const state = tester.attributes?.state || 'UNKNOWN';
      const inviteType = tester.attributes?.inviteType || 'UNKNOWN';
      
      summary.testersByState[state] = (summary.testersByState[state] || 0) + 1;
      summary.testersByInviteType[inviteType] = (summary.testersByInviteType[inviteType] || 0) + 1;
    });

    res.status(200).json({
      success: true,
      data: summary
    });
  });

  /**
   * Health check endpoint
   * GET /api/beta/health
   */
  healthCheck = handleAsyncError(async (req, res) => {
    res.status(200).json({
      success: true,
      message: 'Beta testing API is healthy',
      timestamp: new Date().toISOString()
    });
  });
}

module.exports = new BetaController();