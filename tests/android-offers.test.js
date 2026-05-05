const request = require('supertest');
const app = require('../server');
const androidOffersService = require('../src/services/android-offers');

// Mock the android offers service
jest.mock('../src/services/android-offers');

// Mock the auth service to avoid configuration issues in tests
jest.mock('../src/services/auth', () => ({
  validateConfiguration: jest.fn().mockReturnValue(true),
  getAuthHeaders: jest.fn().mockReturnValue({
    'Authorization': 'Bearer mock-token',
    'Content-Type': 'application/json'
  })
}));

// Mock the config to avoid needing actual environment variables
jest.mock('../src/config/appstore', () => ({
  config: {
    teamId: 'test-team-id',
    keyId: 'test-key-id',
    privateKeyPath: './test-key.p8',
    issuerId: 'test-issuer-id',
    apiBaseUrl: 'https://api.appstoreconnect.apple.com/v1',
    endpoints: {
      subscriptions: '/subscriptions',
      subscriptionGroups: '/subscriptionGroups'
    },
    rateLimiting: {
      windowMs: 900000,
      maxRequests: 100
    }
  },
  validateConfig: jest.fn().mockReturnValue(true)
}));

// Mock Google Play config
jest.mock('../src/config/googleplay', () => ({
  config: {
    serviceAccountKeyPath: './test-service-account.json',
    scopes: ['https://www.googleapis.com/auth/androidpublisher'],
    rateLimiting: {
      windowMs: 900000,
      maxRequests: 100
    }
  },
  validateConfig: jest.fn().mockReturnValue(true),
  OFFER_PHASE_TYPES: {
    FREE_TRIAL: 'SUBSCRIPTION_OFFER_PHASE_TYPE_FREE',
    SINGLE_PAYMENT: 'SUBSCRIPTION_OFFER_PHASE_TYPE_SINGLE_PAYMENT',
    RECURRING_PAYMENT: 'SUBSCRIPTION_OFFER_PHASE_TYPE_RECURRING_PAYMENT'
  },
  DURATION_MAPPING: {
    'ONE_WEEK': 'P1W',
    'ONE_MONTH': 'P1M',
    'THREE_MONTHS': 'P3M',
    'SIX_MONTHS': 'P6M',
    'ONE_YEAR': 'P1Y'
  },
  OFFER_MODE_MAPPING: {
    'FREE_TRIAL': 'SUBSCRIPTION_OFFER_PHASE_TYPE_FREE',
    'PAY_UP_FRONT': 'SUBSCRIPTION_OFFER_PHASE_TYPE_SINGLE_PAYMENT',
    'PAY_AS_YOU_GO': 'SUBSCRIPTION_OFFER_PHASE_TYPE_RECURRING_PAYMENT'
  }
}));

describe('Android Offers API Endpoints', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('POST /api/android-offers', () => {
    const testPackageName = 'com.vtech.plus.inapp.test3';

    it('should create a subscription offer with free trial', async () => {
      const offerData = {
        packageName: testPackageName,
        productId: 'premium_subscription',
        basePlanId: 'monthly',
        offerId: 'free-trial-offer',
        phases: [
          {
            offerMode: 'FREE_TRIAL',
            duration: 'ONE_MONTH',
            recurrenceCount: 1
          }
        ]
      };

      const mockCreatedOffer = {
        data: {
          offerId: 'free-trial-offer',
          state: 'DRAFT',
          phases: [
            {
              subscriptionOfferPhaseType: 'FREE',
              duration: 'P1M',
              recurrenceCount: 1
            }
          ]
        },
        message: 'Subscription offer created successfully'
      };

      androidOffersService.createOffer.mockResolvedValue(mockCreatedOffer);

      const response = await request(app)
        .post('/api/android-offers')
        .send(offerData);

      expect(response.status).toBe(201);
      expect(response.body.success).toBe(true);
      expect(response.body.data).toEqual(mockCreatedOffer.data);
      expect(androidOffersService.createOffer).toHaveBeenCalledWith(
        testPackageName,
        'premium_subscription',
        {
          basePlanId: 'monthly',
          offerId: 'free-trial-offer',
          phases: [
            {
              offerMode: 'FREE_TRIAL',
              duration: 'ONE_MONTH',
              recurrenceCount: 1
            }
          ]
        }
      );
    });

    it('should create a subscription offer with discounted recurring payment', async () => {
      const offerData = {
        packageName: testPackageName,
        productId: 'premium_subscription',
        basePlanId: 'monthly',
        offerId: 'discount-offer',
        phases: [
          {
            offerMode: 'PAY_AS_YOU_GO',
            duration: 'ONE_MONTH',
            recurrenceCount: 3,
            pricePercentageDiscount: 50
          }
        ]
      };

      const mockCreatedOffer = {
        data: {
          offerId: 'discount-offer',
          state: 'DRAFT'
        },
        message: 'Subscription offer created successfully'
      };

      androidOffersService.createOffer.mockResolvedValue(mockCreatedOffer);

      const response = await request(app)
        .post('/api/android-offers')
        .send(offerData);

      expect(response.status).toBe(201);
      expect(response.body.success).toBe(true);
    });

    it('should return 400 for missing required fields', async () => {
      const invalidData = {
        packageName: testPackageName
        // Missing productId, basePlanId, offerId, phases
      };

      const response = await request(app)
        .post('/api/android-offers')
        .send(invalidData);

      expect(response.status).toBe(400);
      expect(response.body.success).toBe(false);
      expect(response.body.error.message).toContain('required');
    });

    it('should return 400 for invalid package name format', async () => {
      const invalidData = {
        packageName: '123invalid',  // Package names must start with a letter
        productId: 'subscription',
        basePlanId: 'monthly',
        offerId: 'offer1',
        phases: [{ offerMode: 'FREE_TRIAL', duration: 'ONE_MONTH' }]
      };

      const response = await request(app)
        .post('/api/android-offers')
        .send(invalidData);

      expect(response.status).toBe(400);
      expect(response.body.success).toBe(false);
    });

    it('should return 400 for invalid duration', async () => {
      const invalidData = {
        packageName: testPackageName,
        productId: 'subscription',
        basePlanId: 'monthly',
        offerId: 'offer1',
        phases: [{ offerMode: 'FREE_TRIAL', duration: 'INVALID_DURATION' }]
      };

      const response = await request(app)
        .post('/api/android-offers')
        .send(invalidData);

      expect(response.status).toBe(400);
      expect(response.body.success).toBe(false);
    });

    it('should return 400 for invalid offer mode', async () => {
      const invalidData = {
        packageName: testPackageName,
        productId: 'subscription',
        basePlanId: 'monthly',
        offerId: 'offer1',
        phases: [{ offerMode: 'INVALID_MODE', duration: 'ONE_MONTH' }]
      };

      const response = await request(app)
        .post('/api/android-offers')
        .send(invalidData);

      expect(response.status).toBe(400);
      expect(response.body.success).toBe(false);
    });

    it('should return 400 for empty phases array', async () => {
      const invalidData = {
        packageName: testPackageName,
        productId: 'subscription',
        basePlanId: 'monthly',
        offerId: 'offer1',
        phases: []
      };

      const response = await request(app)
        .post('/api/android-offers')
        .send(invalidData);

      expect(response.status).toBe(400);
      expect(response.body.success).toBe(false);
    });
  });

  describe('POST /api/android-offers/bulk', () => {
    const testPackageName = 'com.vtech.plus.inapp.test3';

    it('should bulk create subscription offers', async () => {
      const bulkData = {
        packageName: testPackageName,
        offerTemplate: {
          offerId: 'bulk-free-trial',
          phases: [
            {
              offerMode: 'FREE_TRIAL',
              duration: 'ONE_MONTH',
              recurrenceCount: 1
            }
          ]
        }
      };

      const mockResult = {
        summary: {
          packageName: testPackageName,
          offerId: 'bulk-free-trial',
          total: 3,
          succeeded: 3,
          failed: 0
        },
        created: [
          {
            productId: 'sub1',
            basePlanId: 'monthly',
            offerId: 'bulk-free-trial',
            state: 'DRAFT'
          }
        ],
        failed: []
      };

      androidOffersService.bulkCreateOffers.mockResolvedValue(mockResult);

      const response = await request(app)
        .post('/api/android-offers/bulk')
        .send(bulkData);

      expect(response.status).toBe(201);
      expect(response.body.success).toBe(true);
      expect(response.body.data).toEqual(mockResult);
      expect(response.body.data.summary.succeeded).toBe(3);
    });

    it('should return 207 for partial success in bulk creation', async () => {
      const bulkData = {
        packageName: testPackageName,
        offerTemplate: {
          offerId: 'bulk-offer',
          phases: [
            {
              offerMode: 'FREE_TRIAL',
              duration: 'ONE_MONTH',
              recurrenceCount: 1
            }
          ]
        }
      };

      const mockResult = {
        summary: {
          packageName: testPackageName,
          offerId: 'bulk-offer',
          total: 4,
          succeeded: 3,
          failed: 1
        },
        created: [],
        failed: [
          {
            productId: 'sub2',
            basePlanId: 'monthly',
            offerId: 'bulk-offer',
            error: 'Offer already exists',
            code: 'VALIDATION_ERROR'
          }
        ]
      };

      androidOffersService.bulkCreateOffers.mockResolvedValue(mockResult);

      const response = await request(app)
        .post('/api/android-offers/bulk')
        .send(bulkData);

      expect(response.status).toBe(207);
      expect(response.body.success).toBe(false);
      expect(response.body.data.summary.succeeded).toBe(3);
      expect(response.body.data.summary.failed).toBe(1);
    });

    it('should return 400 for missing required bulk fields', async () => {
      const invalidData = {
        packageName: testPackageName
        // Missing offerTemplate
      };

      const response = await request(app)
        .post('/api/android-offers/bulk')
        .send(invalidData);

      expect(response.status).toBe(400);
      expect(response.body.success).toBe(false);
    });
  });

  describe('GET /api/android-offers/package/:packageName', () => {
    const testPackageName = 'com.vtech.plus.inapp.test3';

    it('should get all offers for a package', async () => {
      const mockOffers = {
        packageName: testPackageName,
        subscriptions: [
          {
            subscription: {
              productId: 'premium_subscription',
              listings: [{ languageCode: 'en-US', title: 'Premium' }]
            },
            basePlan: {
              basePlanId: 'monthly',
              state: 'ACTIVE'
            },
            offers: [
              {
                offerId: 'free-trial',
                state: 'ACTIVE',
                phases: [{ subscriptionOfferPhaseType: 'FREE', duration: 'P1M' }]
              }
            ]
          }
        ],
        totalOffers: 1
      };

      androidOffersService.getOffersByPackage.mockResolvedValue(mockOffers);

      const response = await request(app)
        .get(`/api/android-offers/package/${testPackageName}`);

      expect(response.status).toBe(200);
      expect(response.body.success).toBe(true);
      expect(response.body.data).toEqual(mockOffers);
    });

    it('should get offers filtered by productId', async () => {
      const mockOffers = {
        packageName: testPackageName,
        subscriptions: [],
        totalOffers: 0
      };

      androidOffersService.getOffersByPackage.mockResolvedValue(mockOffers);

      const response = await request(app)
        .get(`/api/android-offers/package/${testPackageName}`)
        .query({ productId: 'premium_subscription' });

      expect(response.status).toBe(200);
      expect(response.body.success).toBe(true);
      expect(androidOffersService.getOffersByPackage).toHaveBeenCalledWith(
        testPackageName,
        { productId: 'premium_subscription', basePlanId: undefined, limit: undefined }
      );
    });
  });

  describe('GET /api/android-offers/:packageName/:productId/:basePlanId/:offerId', () => {
    const testPackageName = 'com.vtech.plus.inapp.test3';

    it('should get offer by ID', async () => {
      const mockOffer = {
        data: {
          offerId: 'free-trial',
          state: 'ACTIVE',
          phases: [
            {
              subscriptionOfferPhaseType: 'FREE',
              duration: 'P1M',
              recurrenceCount: 1
            }
          ]
        }
      };

      androidOffersService.getOffer.mockResolvedValue(mockOffer);

      const response = await request(app)
        .get(`/api/android-offers/${testPackageName}/premium_subscription/monthly/free-trial`);

      expect(response.status).toBe(200);
      expect(response.body.success).toBe(true);
      expect(response.body.data).toEqual(mockOffer.data);
    });

    it('should return 404 when offer not found', async () => {
      const error = new Error('Offer not found');
      error.statusCode = 404;
      androidOffersService.getOffer.mockRejectedValue(error);

      const response = await request(app)
        .get(`/api/android-offers/${testPackageName}/premium_subscription/monthly/nonexistent`);

      expect(response.status).toBe(404);
      expect(response.body.success).toBe(false);
    });
  });

  describe('PATCH /api/android-offers/:packageName/:productId/:basePlanId/:offerId', () => {
    const testPackageName = 'com.vtech.plus.inapp.test3';

    it('should update offer phases', async () => {
      const updateData = {
        phases: [
          {
            offerMode: 'FREE_TRIAL',
            duration: 'THREE_MONTHS',
            recurrenceCount: 1
          }
        ]
      };

      const mockUpdatedOffer = {
        data: {
          offerId: 'free-trial',
          state: 'DRAFT',
          phases: [
            {
              subscriptionOfferPhaseType: 'FREE',
              duration: 'P3M',
              recurrenceCount: 1
            }
          ]
        },
        message: 'Subscription offer updated successfully'
      };

      androidOffersService.updateOffer.mockResolvedValue(mockUpdatedOffer);

      const response = await request(app)
        .patch(`/api/android-offers/${testPackageName}/premium_subscription/monthly/free-trial`)
        .send(updateData);

      expect(response.status).toBe(200);
      expect(response.body.success).toBe(true);
      expect(response.body.data).toEqual(mockUpdatedOffer.data);
    });

    it('should return 400 for empty update data', async () => {
      const response = await request(app)
        .patch(`/api/android-offers/${testPackageName}/premium_subscription/monthly/free-trial`)
        .send({});

      expect(response.status).toBe(400);
      expect(response.body.success).toBe(false);
      expect(response.body.error.message).toContain('At least one field');
    });
  });

  describe('DELETE /api/android-offers/:packageName/:productId/:basePlanId/:offerId', () => {
    const testPackageName = 'com.vtech.plus.inapp.test3';

    it('should delete offer', async () => {
      const mockResult = {
        success: true,
        message: 'Subscription offer deleted successfully'
      };

      androidOffersService.deleteOffer.mockResolvedValue(mockResult);

      const response = await request(app)
        .delete(`/api/android-offers/${testPackageName}/premium_subscription/monthly/free-trial`);

      expect(response.status).toBe(200);
      expect(response.body.success).toBe(true);
      expect(response.body.message).toBe(mockResult.message);
    });

    it('should return 404 when offer not found', async () => {
      const error = new Error('Offer not found');
      error.statusCode = 404;
      androidOffersService.deleteOffer.mockRejectedValue(error);

      const response = await request(app)
        .delete(`/api/android-offers/${testPackageName}/premium_subscription/monthly/nonexistent`);

      expect(response.status).toBe(404);
      expect(response.body.success).toBe(false);
    });
  });

  describe('POST /api/android-offers/:packageName/:productId/:basePlanId/:offerId/activate', () => {
    const testPackageName = 'com.vtech.plus.inapp.test3';

    it('should activate offer', async () => {
      const mockResult = {
        data: {
          offerId: 'free-trial',
          state: 'ACTIVE'
        },
        message: 'Subscription offer activated successfully'
      };

      androidOffersService.activateOffer.mockResolvedValue(mockResult);

      const response = await request(app)
        .post(`/api/android-offers/${testPackageName}/premium_subscription/monthly/free-trial/activate`);

      expect(response.status).toBe(200);
      expect(response.body.success).toBe(true);
      expect(response.body.data.state).toBe('ACTIVE');
    });
  });

  describe('POST /api/android-offers/:packageName/:productId/:basePlanId/:offerId/deactivate', () => {
    const testPackageName = 'com.vtech.plus.inapp.test3';

    it('should deactivate offer', async () => {
      const mockResult = {
        data: {
          offerId: 'free-trial',
          state: 'INACTIVE'
        },
        message: 'Subscription offer deactivated successfully'
      };

      androidOffersService.deactivateOffer.mockResolvedValue(mockResult);

      const response = await request(app)
        .post(`/api/android-offers/${testPackageName}/premium_subscription/monthly/free-trial/deactivate`);

      expect(response.status).toBe(200);
      expect(response.body.success).toBe(true);
      expect(response.body.data.state).toBe('INACTIVE');
    });
  });

  describe('Error Handling', () => {
    it('should handle service errors', async () => {
      const error = new Error('Service unavailable');
      error.statusCode = 503;

      androidOffersService.getOffersByPackage.mockRejectedValue(error);

      const response = await request(app)
        .get('/api/android-offers/package/com.test.app');

      expect(response.status).toBe(503);
      expect(response.body.success).toBe(false);
    });

    it('should handle unexpected errors with 500 status', async () => {
      const error = new Error('Unexpected error');

      androidOffersService.getOffer.mockRejectedValue(error);

      const response = await request(app)
        .get('/api/android-offers/com.test.app/subscription/monthly/offer1');

      expect(response.status).toBe(500);
      expect(response.body.success).toBe(false);
    });
  });

  describe('Validation Edge Cases', () => {
    const testPackageName = 'com.vtech.plus.inapp.test3';

    it('should accept all valid duration values (iOS format)', async () => {
      const validDurations = ['ONE_WEEK', 'ONE_MONTH', 'TWO_MONTHS', 'THREE_MONTHS', 'SIX_MONTHS', 'ONE_YEAR'];

      for (const duration of validDurations) {
        const offerData = {
          packageName: testPackageName,
          productId: 'subscription',
          basePlanId: 'monthly',
          offerId: `offer-${duration.toLowerCase()}`,
          phases: [{ offerMode: 'FREE_TRIAL', duration }]
        };

        const mockCreatedOffer = {
          data: { offerId: offerData.offerId, state: 'DRAFT' },
          message: 'Success'
        };

        androidOffersService.createOffer.mockResolvedValue(mockCreatedOffer);

        const response = await request(app)
          .post('/api/android-offers')
          .send(offerData);

        expect(response.status).toBe(201);
      }
    });

    it('should accept all valid duration values (ISO 8601 format)', async () => {
      const validDurations = ['P1W', 'P1M', 'P3M', 'P6M', 'P1Y'];

      for (const duration of validDurations) {
        const offerData = {
          packageName: testPackageName,
          productId: 'subscription',
          basePlanId: 'monthly',
          offerId: `offer-${duration.toLowerCase()}`,
          phases: [{ offerMode: 'FREE_TRIAL', duration }]
        };

        const mockCreatedOffer = {
          data: { offerId: offerData.offerId, state: 'DRAFT' },
          message: 'Success'
        };

        androidOffersService.createOffer.mockResolvedValue(mockCreatedOffer);

        const response = await request(app)
          .post('/api/android-offers')
          .send(offerData);

        expect(response.status).toBe(201);
      }
    });

    it('should accept all valid offer mode values', async () => {
      const validOfferModes = ['FREE_TRIAL', 'PAY_UP_FRONT', 'PAY_AS_YOU_GO'];

      for (const offerMode of validOfferModes) {
        const offerData = {
          packageName: testPackageName,
          productId: 'subscription',
          basePlanId: 'monthly',
          offerId: `offer-${offerMode.toLowerCase()}`,
          phases: [{ offerMode, duration: 'ONE_MONTH', recurrenceCount: 1 }]
        };

        const mockCreatedOffer = {
          data: { offerId: offerData.offerId, state: 'DRAFT' },
          message: 'Success'
        };

        androidOffersService.createOffer.mockResolvedValue(mockCreatedOffer);

        const response = await request(app)
          .post('/api/android-offers')
          .send(offerData);

        expect(response.status).toBe(201);
      }
    });

    it('should accept offer with targeting configuration', async () => {
      const offerData = {
        packageName: testPackageName,
        productId: 'subscription',
        basePlanId: 'monthly',
        offerId: 'new-customer-offer',
        phases: [{ offerMode: 'FREE_TRIAL', duration: 'ONE_MONTH' }],
        targetNewCustomers: true
      };

      const mockCreatedOffer = {
        data: { offerId: offerData.offerId, state: 'DRAFT' },
        message: 'Success'
      };

      androidOffersService.createOffer.mockResolvedValue(mockCreatedOffer);

      const response = await request(app)
        .post('/api/android-offers')
        .send(offerData);

      expect(response.status).toBe(201);
    });

    it('should accept offer with offer tags', async () => {
      const offerData = {
        packageName: testPackageName,
        productId: 'subscription',
        basePlanId: 'monthly',
        offerId: 'tagged-offer',
        phases: [{ offerMode: 'FREE_TRIAL', duration: 'ONE_MONTH' }],
        offerTags: ['promo', 'holiday-2024']
      };

      const mockCreatedOffer = {
        data: { offerId: offerData.offerId, state: 'DRAFT' },
        message: 'Success'
      };

      androidOffersService.createOffer.mockResolvedValue(mockCreatedOffer);

      const response = await request(app)
        .post('/api/android-offers')
        .send(offerData);

      expect(response.status).toBe(201);
    });

    it('should reject pricePercentageDiscount less than 1', async () => {
      const offerData = {
        packageName: testPackageName,
        productId: 'subscription',
        basePlanId: 'monthly',
        offerId: 'discount-offer',
        phases: [{
          offerMode: 'PAY_AS_YOU_GO',
          duration: 'ONE_MONTH',
          pricePercentageDiscount: 0
        }]
      };

      const response = await request(app)
        .post('/api/android-offers')
        .send(offerData);

      expect(response.status).toBe(400);
      expect(response.body.success).toBe(false);
    });

    it('should reject pricePercentageDiscount greater than 99', async () => {
      const offerData = {
        packageName: testPackageName,
        productId: 'subscription',
        basePlanId: 'monthly',
        offerId: 'discount-offer',
        phases: [{
          offerMode: 'PAY_AS_YOU_GO',
          duration: 'ONE_MONTH',
          pricePercentageDiscount: 100
        }]
      };

      const response = await request(app)
        .post('/api/android-offers')
        .send(offerData);

      expect(response.status).toBe(400);
      expect(response.body.success).toBe(false);
    });
  });
});
