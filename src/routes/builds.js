const express = require('express');
const buildsController = require('../controllers/builds');
const {
  validate,
  validatePagination,
  validateIncludes
} = require('../middleware/validation');
const Joi = require('joi');

const router = express.Router();

// Define allowed includes for different endpoints
const buildIncludes = [
  'app',
  'betaAppReviewSubmission',
  'betaBuildLocalizations',
  'appEncryptionDeclaration',
  'individualTesters',
  'preReleaseVersion',
  'buildBetaDetail',
  'appStoreVersion',
  'icons'
];

// Validation schemas
const buildQuerySchema = Joi.object({
  app: Joi.string().optional(),
  betaReviewState: Joi.string().valid(
    'WAITING_FOR_REVIEW',
    'IN_REVIEW', 
    'REJECTED',
    'APPROVED'
  ).optional(),
  expired: Joi.boolean().optional(),
  version: Joi.string().optional(),
  processingState: Joi.string().valid(
    'PROCESSING',
    'FAILED',
    'INVALID',
    'VALID'
  ).optional(),
  usesNonExemptEncryption: Joi.boolean().optional(),
  versionString: Joi.string().optional(),
  include: Joi.string().optional(),
  limit: Joi.number().integer().min(1).max(200).optional(),
  sort: Joi.string().valid(
    'preReleaseVersion',
    '-preReleaseVersion',
    'uploadedDate',
    '-uploadedDate',
    'version',
    '-version'
  ).optional()
});

const buildUpdateSchema = Joi.object({
  data: Joi.object({
    type: Joi.string().valid('builds').required(),
    id: Joi.string().required(),
    attributes: Joi.object({
      expired: Joi.boolean().optional(),
      usesNonExemptEncryption: Joi.boolean().optional()
    }).optional(),
    relationships: Joi.object({
      appEncryptionDeclaration: Joi.object({
        data: Joi.object({
          type: Joi.string().valid('appEncryptionDeclarations').required(),
          id: Joi.string().required()
        }).allow(null).optional()
      }).optional()
    }).optional()
  }).required()
});

/**
 * @route   GET /api/builds/health
 * @desc    Health check endpoint
 * @access  Public
 */
router.get('/health', buildsController.healthCheck);

/**
 * @route   GET /api/builds/summary
 * @desc    Get builds summary with statistics
 * @access  Public
 */
router.get('/summary', buildsController.getBuildsSummary);

/**
 * @route   GET /api/builds
 * @desc    Get all builds with optional filtering
 * @access  Public
 */
router.get('/',
  validate(buildQuerySchema, 'query'),
  validatePagination,
  validateIncludes(buildIncludes),
  buildsController.getAllBuilds
);

/**
 * @route   GET /api/builds/:id
 * @desc    Get build by ID
 * @access  Public
 */
router.get('/:id',
  validateIncludes(buildIncludes),
  buildsController.getBuildById
);

/**
 * @route   PATCH /api/builds/:id
 * @desc    Update build
 * @access  Public
 */
router.patch('/:id',
  validate(buildUpdateSchema),
  buildsController.updateBuild
);

/**
 * @route   GET /api/builds/:id/app
 * @desc    Get build's associated app
 * @access  Public
 */
router.get('/:id/app',
  buildsController.getBuildApp
);

/**
 * @route   GET /api/builds/:id/beta-build-localizations
 * @desc    Get build's beta build localizations
 * @access  Public
 */
router.get('/:id/beta-build-localizations',
  validatePagination,
  buildsController.getBuildBetaLocalizations
);

/**
 * @route   GET /api/builds/:id/individual-testers
 * @desc    Get build's individual beta testers
 * @access  Public
 */
router.get('/:id/individual-testers',
  validatePagination,
  buildsController.getBuildBetaTesters
);

module.exports = router;