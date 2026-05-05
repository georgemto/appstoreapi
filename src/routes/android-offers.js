const express = require('express');
const androidOffersController = require('../controllers/android-offers');
const {
  validate,
  androidOfferCreateSchema,
  androidOfferUpdateSchema,
  androidOfferBulkCreateSchema,
  androidOfferPackageQuerySchema
} = require('../middleware/validation');

const router = express.Router();

/**
 * @route   POST /api/android-offers
 * @desc    Create a new subscription offer
 * @access  Public
 */
router.post('/',
  validate(androidOfferCreateSchema),
  androidOffersController.createOffer
);

/**
 * @route   POST /api/android-offers/bulk
 * @desc    Bulk create subscription offers for subscriptions in a package
 * @access  Public
 */
router.post('/bulk',
  validate(androidOfferBulkCreateSchema),
  androidOffersController.bulkCreateOffers
);

/**
 * @route   GET /api/android-offers/package/:packageName
 * @desc    Get all subscription offers for a package
 * @access  Public
 */
router.get('/package/:packageName',
  validate(androidOfferPackageQuerySchema, 'query'),
  androidOffersController.getOffersByPackage
);

/**
 * @route   GET /api/android-offers/:packageName/:productId/:basePlanId/:offerId
 * @desc    Get subscription offer by ID
 * @access  Public
 */
router.get('/:packageName/:productId/:basePlanId/:offerId',
  androidOffersController.getOfferById
);

/**
 * @route   PATCH /api/android-offers/:packageName/:productId/:basePlanId/:offerId
 * @desc    Update subscription offer
 * @access  Public
 */
router.patch('/:packageName/:productId/:basePlanId/:offerId',
  validate(androidOfferUpdateSchema),
  androidOffersController.updateOffer
);

/**
 * @route   DELETE /api/android-offers/:packageName/:productId/:basePlanId/:offerId
 * @desc    Delete subscription offer
 * @access  Public
 */
router.delete('/:packageName/:productId/:basePlanId/:offerId',
  androidOffersController.deleteOffer
);

/**
 * @route   POST /api/android-offers/:packageName/:productId/:basePlanId/:offerId/activate
 * @desc    Activate subscription offer
 * @access  Public
 */
router.post('/:packageName/:productId/:basePlanId/:offerId/activate',
  androidOffersController.activateOffer
);

/**
 * @route   POST /api/android-offers/:packageName/:productId/:basePlanId/:offerId/deactivate
 * @desc    Deactivate subscription offer
 * @access  Public
 */
router.post('/:packageName/:productId/:basePlanId/:offerId/deactivate',
  androidOffersController.deactivateOffer
);

module.exports = router;
