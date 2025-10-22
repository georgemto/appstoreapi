const express = require('express');
const subscriptionController = require('../controllers/subscriptions');
const {
  validate,
  validateSubscriptionId,
  validatePagination,
  validateIncludes,
  subscriptionCreateSchema,
  subscriptionUpdateSchema,
  subscriptionQuerySchema,
  pricingUpdateSchema
} = require('../middleware/validation');

const router = express.Router();

// Define allowed includes for different endpoints
const subscriptionIncludes = [
  'subscriptionLocalizations',
  'prices',
  'subscriptionAvailability',
  'group',
  'appStoreReviewScreenshot',
  'subscriptionAppStoreReviewScreenshot',
  'subscriptionSubmission'
];

const groupIncludes = [
  'subscriptions',
  'subscriptionGroupLocalizations'
];

/**
 * @route   GET /api/subscriptions/health
 * @desc    Health check endpoint
 * @access  Public
 */
router.get('/health', subscriptionController.healthCheck);

/**
 * @route   GET /api/subscriptions/groups
 * @desc    Get subscription groups
 * @access  Public
 */
router.get('/groups',
  validatePagination,
  validateIncludes(groupIncludes),
  subscriptionController.getSubscriptionGroups
);

/**
 * @route   GET /api/subscriptions
 * @desc    Get all subscriptions with optional filtering
 * @access  Public
 */
router.get('/',
  validate(subscriptionQuerySchema, 'query'),
  validatePagination,
  validateIncludes(subscriptionIncludes),
  subscriptionController.getAllSubscriptions
);

/**
 * @route   POST /api/subscriptions
 * @desc    Create a new subscription
 * @access  Public
 */
router.post('/',
  validate(subscriptionCreateSchema),
  subscriptionController.createSubscription
);

/**
 * @route   GET /api/subscriptions/:id
 * @desc    Get subscription by ID
 * @access  Public
 */
router.get('/:id',
  validateSubscriptionId,
  validateIncludes(subscriptionIncludes),
  subscriptionController.getSubscriptionById
);

/**
 * @route   PUT /api/subscriptions/:id
 * @desc    Update subscription
 * @access  Public
 */
router.put('/:id',
  validateSubscriptionId,
  validate(subscriptionUpdateSchema),
  subscriptionController.updateSubscription
);

/**
 * @route   DELETE /api/subscriptions/:id
 * @desc    Delete subscription
 * @access  Public
 */
router.delete('/:id',
  validateSubscriptionId,
  subscriptionController.deleteSubscription
);

/**
 * @route   GET /api/subscriptions/:id/pricing
 * @desc    Get subscription pricing information
 * @access  Public
 */
router.get('/:id/pricing',
  validateSubscriptionId,
  subscriptionController.getSubscriptionPricing
);

/**
 * @route   PUT /api/subscriptions/:id/pricing
 * @desc    Update subscription pricing
 * @access  Public
 */
router.put('/:id/pricing',
  validateSubscriptionId,
  validate(pricingUpdateSchema),
  subscriptionController.updateSubscriptionPricing
);

module.exports = router;
