const appStoreAPIClient = require('../services/appstore-api-client');
const { handleAsyncError } = require('../utils/errors');
const logger = require('../utils/logger');

class DevicesController {
  /**
   * Get all devices
   * GET /api/devices
   */
  getAllDevices = handleAsyncError(async (req, res) => {
    const options = {
      filterName: req.query.name,
      filterPlatform: req.query.platform,
      filterStatus: req.query.status,
      filterUdid: req.query.udid,
      include: req.query.include,
      fieldsDevices: req.query.fieldsDevices,
      limit: req.query.limit,
      sort: req.query.sort
    };

    const result = await appStoreAPIClient.listDevices(options);

    res.status(200).json({
      success: true,
      data: result.data,
      included: result.included,
      links: result.links,
      meta: result.meta
    });
  });

  /**
   * Register new device
   * POST /api/devices
   */
  createDevice = handleAsyncError(async (req, res) => {
    const deviceData = req.body;

    const result = await appStoreAPIClient.createDevice(deviceData);

    logger.info(`Device registered successfully`, {
      deviceId: result.data?.id,
      name: result.data?.attributes?.name,
      udid: result.data?.attributes?.udid,
      platform: result.data?.attributes?.platform
    });

    res.status(201).json({
      success: true,
      data: result.data,
      message: 'Device registered successfully'
    });
  });

  /**
   * Get device by ID
   * GET /api/devices/:id
   */
  getDeviceById = handleAsyncError(async (req, res) => {
    const { id } = req.params;
    const options = {
      include: req.query.include,
      fieldsDevices: req.query.fieldsDevices
    };

    const result = await appStoreAPIClient.getDevice(id, options);

    res.status(200).json({
      success: true,
      data: result.data,
      included: result.included
    });
  });

  /**
   * Update device
   * PATCH /api/devices/:id
   */
  updateDevice = handleAsyncError(async (req, res) => {
    const { id } = req.params;
    const updateData = req.body;

    const result = await appStoreAPIClient.updateDevice(id, updateData);

    logger.info(`Device updated successfully`, {
      deviceId: id,
      updatedFields: Object.keys(updateData?.data?.attributes || {})
    });

    res.status(200).json({
      success: true,
      data: result.data,
      message: 'Device updated successfully'
    });
  });

  /**
   * Get devices summary with statistics
   * GET /api/devices/summary
   */
  getDevicesSummary = handleAsyncError(async (req, res) => {
    const allDevices = await appStoreAPIClient.listDevices({
      limit: 200 // Get more devices for better statistics
    });

    const devices = allDevices.data || [];
    
    // Calculate summary statistics
    const summary = {
      total: devices.length,
      byPlatform: {},
      byStatus: {},
      byDeviceClass: {},
      recentDevices: devices.slice(0, 10) // Most recent 10 devices
    };

    // Group by platform, status, and device class
    devices.forEach(device => {
      const platform = device.attributes?.platform || 'UNKNOWN';
      const status = device.attributes?.status || 'UNKNOWN';
      const deviceClass = device.attributes?.deviceClass || 'UNKNOWN';
      
      summary.byPlatform[platform] = (summary.byPlatform[platform] || 0) + 1;
      summary.byStatus[status] = (summary.byStatus[status] || 0) + 1;
      summary.byDeviceClass[deviceClass] = (summary.byDeviceClass[deviceClass] || 0) + 1;
    });

    res.status(200).json({
      success: true,
      data: summary
    });
  });

  /**
   * Get devices by platform
   * GET /api/devices/by-platform/:platform
   */
  getDevicesByPlatform = handleAsyncError(async (req, res) => {
    const { platform } = req.params;
    
    const options = {
      filterPlatform: platform,
      limit: req.query.limit || 50,
      sort: req.query.sort
    };

    const result = await appStoreAPIClient.listDevices(options);

    res.status(200).json({
      success: true,
      data: result.data,
      meta: {
        platform,
        total: result.data?.length || 0
      }
    });
  });

  /**
   * Search devices by UDID
   * GET /api/devices/search
   */
  searchDevices = handleAsyncError(async (req, res) => {
    const { udid, name } = req.query;
    
    if (!udid && !name) {
      return res.status(400).json({
        success: false,
        error: {
          message: 'Either udid or name parameter is required',
          type: 'VALIDATION_ERROR'
        }
      });
    }

    const options = {
      limit: req.query.limit || 50
    };

    if (udid) {
      options.filterUdid = udid;
    }

    if (name) {
      options.filterName = name;
    }

    const result = await appStoreAPIClient.listDevices(options);

    res.status(200).json({
      success: true,
      data: result.data,
      meta: {
        searchCriteria: { udid, name },
        total: result.data?.length || 0
      }
    });
  });

  /**
   * Check device availability (check if UDID exists)
   * GET /api/devices/check/:udid
   */
  checkDeviceAvailability = handleAsyncError(async (req, res) => {
    const { udid } = req.params;
    
    try {
      const result = await appStoreAPIClient.listDevices({
        filterUdid: udid,
        limit: 1
      });

      const deviceExists = result.data && result.data.length > 0;
      const device = deviceExists ? result.data[0] : null;

      res.status(200).json({
        success: true,
        data: {
          udid,
          exists: deviceExists,
          device: device,
          available: !deviceExists // Available for registration if doesn't exist
        }
      });
    } catch (error) {
      // If the API call fails, we assume the device is available
      res.status(200).json({
        success: true,
        data: {
          udid,
          exists: false,
          device: null,
          available: true
        }
      });
    }
  });

  /**
   * Health check endpoint
   * GET /api/devices/health
   */
  healthCheck = handleAsyncError(async (req, res) => {
    res.status(200).json({
      success: true,
      message: 'Devices API is healthy',
      timestamp: new Date().toISOString()
    });
  });
}

module.exports = new DevicesController();