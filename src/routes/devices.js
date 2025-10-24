const express = require('express');
const devicesController = require('../controllers/devices');
const {
  validate,
  validatePagination,
  validateIncludes
} = require('../middleware/validation');
const Joi = require('joi');

const router = express.Router();

// Define allowed includes for different endpoints (devices don't typically have includes)
const deviceIncludes = [];

// Validation schemas
const deviceQuerySchema = Joi.object({
  name: Joi.string().optional(),
  platform: Joi.string().valid('IOS', 'MAC_OS').optional(),
  status: Joi.string().valid('ENABLED', 'DISABLED').optional(),
  udid: Joi.string().optional(),
  include: Joi.string().optional(),
  limit: Joi.number().integer().min(1).max(200).optional(),
  sort: Joi.string().valid(
    'name',
    '-name',
    'deviceClass',
    '-deviceClass',
    'model',
    '-model',
    'platform',
    '-platform',
    'status',
    '-status',
    'udid',
    '-udid'
  ).optional()
});

const deviceCreateSchema = Joi.object({
  data: Joi.object({
    type: Joi.string().valid('devices').required(),
    attributes: Joi.object({
      name: Joi.string().min(1).max(50).required(),
      platform: Joi.string().valid('IOS', 'MAC_OS').required(),
      udid: Joi.string().min(40).max(40).required()
        .pattern(/^[a-fA-F0-9]{40}$/)
        .messages({
          'string.pattern.base': 'UDID must be a 40-character hexadecimal string'
        })
    }).required()
  }).required()
});

const deviceUpdateSchema = Joi.object({
  data: Joi.object({
    type: Joi.string().valid('devices').required(),
    id: Joi.string().required(),
    attributes: Joi.object({
      name: Joi.string().min(1).max(50).optional(),
      status: Joi.string().valid('ENABLED', 'DISABLED').optional()
    }).optional()
  }).required()
});

const deviceSearchSchema = Joi.object({
  udid: Joi.string().optional(),
  name: Joi.string().optional(),
  limit: Joi.number().integer().min(1).max(200).optional()
}).or('udid', 'name');

/**
 * @route   GET /api/devices/health
 * @desc    Health check endpoint
 * @access  Public
 */
router.get('/health', devicesController.healthCheck);

/**
 * @route   GET /api/devices/summary
 * @desc    Get devices summary with statistics
 * @access  Public
 */
router.get('/summary', devicesController.getDevicesSummary);

/**
 * @route   GET /api/devices/search
 * @desc    Search devices by UDID or name
 * @access  Public
 */
router.get('/search',
  validate(deviceSearchSchema, 'query'),
  devicesController.searchDevices
);

/**
 * @route   GET /api/devices/check/:udid
 * @desc    Check if device UDID is already registered
 * @access  Public
 */
router.get('/check/:udid',
  devicesController.checkDeviceAvailability
);

/**
 * @route   GET /api/devices/by-platform/:platform
 * @desc    Get devices by platform
 * @access  Public
 */
router.get('/by-platform/:platform',
  validatePagination,
  devicesController.getDevicesByPlatform
);

/**
 * @route   GET /api/devices
 * @desc    Get all devices with optional filtering
 * @access  Public
 */
router.get('/',
  validate(deviceQuerySchema, 'query'),
  validatePagination,
  validateIncludes(deviceIncludes),
  devicesController.getAllDevices
);

/**
 * @route   POST /api/devices
 * @desc    Register a new device
 * @access  Public
 */
router.post('/',
  validate(deviceCreateSchema),
  devicesController.createDevice
);

/**
 * @route   GET /api/devices/:id
 * @desc    Get device by ID
 * @access  Public
 */
router.get('/:id',
  validateIncludes(deviceIncludes),
  devicesController.getDeviceById
);

/**
 * @route   PATCH /api/devices/:id
 * @desc    Update device
 * @access  Public
 */
router.patch('/:id',
  validate(deviceUpdateSchema),
  devicesController.updateDevice
);

module.exports = router;