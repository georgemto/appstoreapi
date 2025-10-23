const express = require('express');
const appController = require('../controllers/apps');
const {
  validate,
  validatePagination,
  validateIncludes
} = require('../middleware/validation');
const Joi = require('joi');

const router = express.Router();

// Define allowed includes for different endpoints
const appIncludes = [
  'appStoreVersions',
  'preReleaseVersions',
  'betaGroups',
  'gameCenterEnabledVersions',
  'endUserLicenseAgreement',
  'preOrder',
  'prices',
  'availableTerritories'
];

const subscriptionGroupIncludes = [
  'subscriptions',
  'subscriptionGroupLocalizations'
];

// Validation schemas
const subscriptionGroupCreateSchema = Joi.object({
  referenceName: Joi.string().min(1).max(64).required()
    .messages({
      'string.empty': 'Reference name is required',
      'string.max': 'Reference name cannot exceed 64 characters'
    })
});

const appCompareSchema = Joi.object({
  appIds: Joi.array().items(Joi.string()).min(1).max(10).required()
    .messages({
      'array.min': 'At least one app ID is required',
      'array.max': 'Maximum 10 apps can be compared at once'
    })
});

const appQuerySchema = Joi.object({
  bundleId: Joi.string().optional(),
  name: Joi.string().optional(),
  platform: Joi.string().valid('IOS', 'MAC_OS', 'TV_OS').optional(),
  includes: Joi.array().items(Joi.string()).optional(),
  limit: Joi.number().integer().min(1).max(200).optional()
});

const searchQuerySchema = Joi.object({
  q: Joi.string().min(1).required()
    .messages({
      'string.empty': 'Search query is required'
    }),
  limit: Joi.number().integer().min(1).max(200).optional()
});

/**
 * @route   GET /api/apps/search
 * @desc    Search apps by bundle ID or name
 * @access  Public
 */
router.get('/search',
  validate(searchQuerySchema, 'query'),
  appController.searchApps
);

/**
 * @route   POST /api/apps/compare
 * @desc    Compare multiple apps
 * @access  Public
 */
router.post('/compare',
  validate(appCompareSchema),
  appController.compareApps
);

/**
 * @route   GET /api/apps
 * @desc    Get all apps with optional filtering
 * @access  Public
 */
router.get('/',
  validate(appQuerySchema, 'query'),
  validatePagination,
  validateIncludes(appIncludes),
  appController.getAllApps
);

/**
 * @route   GET /api/apps/:id
 * @desc    Get app by ID
 * @access  Public
 */
router.get('/:id',
  validateIncludes(appIncludes),
  appController.getAppById
);

/**
 * @route   GET /api/apps/:id/summary
 * @desc    Get app summary with subscription statistics
 * @access  Public
 */
router.get('/:id/summary',
  appController.getAppSummary
);

/**
 * @route   GET /api/apps/:id/subscriptions
 * @desc    Get subscriptions for a specific app
 * @access  Public
 */
router.get('/:id/subscriptions',
  validatePagination,
  appController.getAppSubscriptions
);

/**
 * @route   GET /api/apps/:id/subscription-groups
 * @desc    Get subscription groups for a specific app
 * @access  Public
 */
router.get('/:id/subscription-groups',
  validatePagination,
  validateIncludes(subscriptionGroupIncludes),
  appController.getAppSubscriptionGroups
);

/**
 * @route   POST /api/apps/:id/subscription-groups
 * @desc    Create subscription group for an app
 * @access  Public
 */
router.post('/:id/subscription-groups',
  validate(subscriptionGroupCreateSchema),
  appController.createAppSubscriptionGroup
);

module.exports = router;
