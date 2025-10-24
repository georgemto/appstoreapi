const express = require('express');
const betaController = require('../controllers/beta');
const {
  validate,
  validatePagination,
  validateIncludes
} = require('../middleware/validation');
const Joi = require('joi');

const router = express.Router();

// Define allowed includes for different endpoints
const betaGroupIncludes = [
  'app',
  'betaTesters',
  'builds'
];

const betaTesterIncludes = [
  'apps',
  'betaGroups',
  'builds'
];

// Validation schemas
const betaGroupQuerySchema = Joi.object({
  app: Joi.string().optional(),
  isInternalGroup: Joi.boolean().optional(),
  name: Joi.string().optional(),
  publicLink: Joi.string().optional(),
  publicLinkEnabled: Joi.boolean().optional(),
  publicLinkLimitEnabled: Joi.boolean().optional(),
  include: Joi.string().optional(),
  limit: Joi.number().integer().min(1).max(200).optional(),
  limitBetaTesters: Joi.number().integer().min(1).max(50).optional(),
  limitBuilds: Joi.number().integer().min(1).max(50).optional(),
  sort: Joi.string().valid(
    'createdDate',
    '-createdDate',
    'name',
    '-name'
  ).optional()
});

const betaGroupCreateSchema = Joi.object({
  data: Joi.object({
    type: Joi.string().valid('betaGroups').required(),
    attributes: Joi.object({
      name: Joi.string().min(1).max(64).required(),
      isInternalGroup: Joi.boolean().optional(),
      hasAccessToAllBuilds: Joi.boolean().optional(),
      publicLinkEnabled: Joi.boolean().optional(),
      publicLinkLimit: Joi.number().integer().min(1).max(10000).optional(),
      publicLinkLimitEnabled: Joi.boolean().optional()
    }).required(),
    relationships: Joi.object({
      app: Joi.object({
        data: Joi.object({
          type: Joi.string().valid('apps').required(),
          id: Joi.string().required()
        }).required()
      }).required(),
      betaTesters: Joi.object({
        data: Joi.array().items(
          Joi.object({
            type: Joi.string().valid('betaTesters').required(),
            id: Joi.string().required()
          })
        ).optional()
      }).optional(),
      builds: Joi.object({
        data: Joi.array().items(
          Joi.object({
            type: Joi.string().valid('builds').required(),
            id: Joi.string().required()
          })
        ).optional()
      }).optional()
    }).required()
  }).required()
});

const betaGroupUpdateSchema = Joi.object({
  data: Joi.object({
    type: Joi.string().valid('betaGroups').required(),
    id: Joi.string().required(),
    attributes: Joi.object({
      name: Joi.string().min(1).max(64).optional(),
      isInternalGroup: Joi.boolean().optional(),
      hasAccessToAllBuilds: Joi.boolean().optional(),
      publicLinkEnabled: Joi.boolean().optional(),
      publicLinkLimit: Joi.number().integer().min(1).max(10000).optional(),
      publicLinkLimitEnabled: Joi.boolean().optional()
    }).optional()
  }).required()
});

const betaTesterQuerySchema = Joi.object({
  apps: Joi.string().optional(),
  betaGroups: Joi.string().optional(),
  email: Joi.string().email().optional(),
  firstName: Joi.string().optional(),
  lastName: Joi.string().optional(),
  inviteType: Joi.string().valid('EMAIL', 'PUBLIC_LINK').optional(),
  state: Joi.string().valid(
    'NOT_INVITED',
    'INVITED',
    'ACCEPTED',
    'INSTALLED'
  ).optional(),
  include: Joi.string().optional(),
  limit: Joi.number().integer().min(1).max(200).optional(),
  limitApps: Joi.number().integer().min(1).max(50).optional(),
  limitBetaGroups: Joi.number().integer().min(1).max(50).optional(),
  limitBuilds: Joi.number().integer().min(1).max(50).optional(),
  sort: Joi.string().valid(
    'email',
    '-email',
    'firstName',
    '-firstName',
    'lastName',
    '-lastName'
  ).optional()
});

const betaTesterCreateSchema = Joi.object({
  data: Joi.object({
    type: Joi.string().valid('betaTesters').required(),
    attributes: Joi.object({
      email: Joi.string().email().required(),
      firstName: Joi.string().min(1).max(50).optional(),
      lastName: Joi.string().min(1).max(50).optional()
    }).required(),
    relationships: Joi.object({
      betaGroups: Joi.object({
        data: Joi.array().items(
          Joi.object({
            type: Joi.string().valid('betaGroups').required(),
            id: Joi.string().required()
          })
        ).min(1).optional()
      }).optional()
    }).optional()
  }).required()
});

// Beta Groups Routes

/**
 * @route   GET /api/beta/health
 * @desc    Health check endpoint
 * @access  Public
 */
router.get('/health', betaController.healthCheck);

/**
 * @route   GET /api/beta/summary
 * @desc    Get beta testing summary with statistics
 * @access  Public
 */
router.get('/summary', betaController.getBetaSummary);

/**
 * @route   GET /api/beta/groups
 * @desc    Get all beta groups with optional filtering
 * @access  Public
 */
router.get('/groups',
  validate(betaGroupQuerySchema, 'query'),
  validatePagination,
  validateIncludes(betaGroupIncludes),
  betaController.getAllBetaGroups
);

/**
 * @route   POST /api/beta/groups
 * @desc    Create a new beta group
 * @access  Public
 */
router.post('/groups',
  validate(betaGroupCreateSchema),
  betaController.createBetaGroup
);

/**
 * @route   GET /api/beta/groups/:id
 * @desc    Get beta group by ID
 * @access  Public
 */
router.get('/groups/:id',
  validateIncludes(betaGroupIncludes),
  betaController.getBetaGroupById
);

/**
 * @route   PATCH /api/beta/groups/:id
 * @desc    Update beta group
 * @access  Public
 */
router.patch('/groups/:id',
  validate(betaGroupUpdateSchema),
  betaController.updateBetaGroup
);

/**
 * @route   DELETE /api/beta/groups/:id
 * @desc    Delete beta group
 * @access  Public
 */
router.delete('/groups/:id',
  betaController.deleteBetaGroup
);

// Beta Testers Routes

/**
 * @route   GET /api/beta/testers
 * @desc    Get all beta testers with optional filtering
 * @access  Public
 */
router.get('/testers',
  validate(betaTesterQuerySchema, 'query'),
  validatePagination,
  validateIncludes(betaTesterIncludes),
  betaController.getAllBetaTesters
);

/**
 * @route   POST /api/beta/testers
 * @desc    Create a new beta tester
 * @access  Public
 */
router.post('/testers',
  validate(betaTesterCreateSchema),
  betaController.createBetaTester
);

/**
 * @route   GET /api/beta/testers/:id
 * @desc    Get beta tester by ID
 * @access  Public
 */
router.get('/testers/:id',
  validateIncludes(betaTesterIncludes),
  betaController.getBetaTesterById
);

/**
 * @route   DELETE /api/beta/testers/:id
 * @desc    Delete beta tester
 * @access  Public
 */
router.delete('/testers/:id',
  betaController.deleteBetaTester
);

module.exports = router;