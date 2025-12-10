const express = require('express');
const promotionalOfferController = require('../controllers/promotional-offers');
const {
  validate,
  validatePromotionalOfferId,
  validateIncludes,
  promotionalOfferCreateSchema,
  promotionalOfferUpdateSchema,
  promotionalOfferBulkCreateSchema,
  promotionalOfferBundleQuerySchema
} = require('../middleware/validation');

const router = express.Router();

// Define allowed includes for promotional offers
const promotionalOfferIncludes = [
  'prices',
  'subscription'
];

/**
 * @route   POST /api/promotional-offers
 * @desc    Create a new promotional offer for a subscription
 * @access  Public
 */
router.post('/',
  validate(promotionalOfferCreateSchema),
  promotionalOfferController.createPromotionalOffer
);

/**
 * @route   POST /api/promotional-offers/bulk
 * @desc    Bulk create promotional offers for subscriptions in a bundle ID
 * @access  Public
 */
router.post('/bulk',
  validate(promotionalOfferBulkCreateSchema),
  promotionalOfferController.bulkCreatePromotionalOffers
);

/**
 * @route   GET /api/promotional-offers/bundle/:bundleId
 * @desc    Get all promotional offers for a bundle ID
 * @access  Public
 */
router.get('/bundle/:bundleId',
  validate(promotionalOfferBundleQuerySchema, 'query'),
  promotionalOfferController.getPromotionalOffersByBundleId
);

/**
 * @route   GET /api/promotional-offers/:id
 * @desc    Get promotional offer by ID
 * @access  Public
 */
router.get('/:id',
  validatePromotionalOfferId,
  validateIncludes(promotionalOfferIncludes),
  promotionalOfferController.getPromotionalOfferById
);

/**
 * @route   PATCH /api/promotional-offers/:id
 * @desc    Update promotional offer
 * @access  Public
 */
router.patch('/:id',
  validatePromotionalOfferId,
  validate(promotionalOfferUpdateSchema),
  promotionalOfferController.updatePromotionalOffer
);

/**
 * @route   DELETE /api/promotional-offers/:id
 * @desc    Delete promotional offer
 * @access  Public
 */
router.delete('/:id',
  validatePromotionalOfferId,
  promotionalOfferController.deletePromotionalOffer
);

/**
 * @route   GET /api/promotional-offers/:id/prices
 * @desc    Get promotional offer pricing information
 * @access  Public
 */
router.get('/:id/prices',
  validatePromotionalOfferId,
  promotionalOfferController.getPromotionalOfferPrices
);

module.exports = router;
