const express = require('express');
const introductoryOfferController = require('../controllers/introductory-offers');
const {
  validate,
  validateIntroductoryOfferId,
  validateIncludes,
  introductoryOfferCreateSchema,
  introductoryOfferUpdateSchema,
  introductoryOfferBulkCreateSchema,
  introductoryOfferBundleQuerySchema
} = require('../middleware/validation');

const router = express.Router();

// Define allowed includes for introductory offers
const introductoryOfferIncludes = [
  'subscription',
  'territory',
  'subscriptionPricePoint'
];

/**
 * @route   POST /api/introductory-offers
 * @desc    Create a new introductory offer for a subscription
 * @access  Public
 */
router.post('/',
  validate(introductoryOfferCreateSchema),
  introductoryOfferController.createIntroductoryOffer
);

/**
 * @route   POST /api/introductory-offers/bulk
 * @desc    Bulk create introductory offers for subscriptions in a bundle ID
 * @access  Public
 */
router.post('/bulk',
  validate(introductoryOfferBulkCreateSchema),
  introductoryOfferController.bulkCreateIntroductoryOffers
);

/**
 * @route   GET /api/introductory-offers/bundle/:bundleId
 * @desc    Get all introductory offers for a bundle ID
 * @access  Public
 */
router.get('/bundle/:bundleId',
  validate(introductoryOfferBundleQuerySchema, 'query'),
  introductoryOfferController.getIntroductoryOffersByBundleId
);

/**
 * @route   GET /api/introductory-offers/:id
 * @desc    Get introductory offer by ID
 * @access  Public
 */
router.get('/:id',
  validateIntroductoryOfferId,
  validateIncludes(introductoryOfferIncludes),
  introductoryOfferController.getIntroductoryOfferById
);

/**
 * @route   PATCH /api/introductory-offers/:id
 * @desc    Update introductory offer
 * @access  Public
 */
router.patch('/:id',
  validateIntroductoryOfferId,
  validate(introductoryOfferUpdateSchema),
  introductoryOfferController.updateIntroductoryOffer
);

/**
 * @route   DELETE /api/introductory-offers/:id
 * @desc    Delete introductory offer
 * @access  Public
 */
router.delete('/:id',
  validateIntroductoryOfferId,
  introductoryOfferController.deleteIntroductoryOffer
);

module.exports = router;
