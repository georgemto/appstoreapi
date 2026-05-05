const request = require('supertest');
const app = require('../server');
const introductoryOffersService = require('../src/services/introductory-offers');

// Mock the introductory offers service
jest.mock('../src/services/introductory-offers');

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
      subscriptionGroups: '/subscriptionGroups',
      introductoryOffers: '/subscriptionIntroductoryOffers'
    },
    rateLimiting: {
      windowMs: 900000,
      maxRequests: 100
    }
  },
  validateConfig: jest.fn().mockReturnValue(true)
}));

describe('Introductory Offers API Endpoints', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('POST /api/introductory-offers', () => {
    const validSubscriptionId = '1234567890';

    it('should create an introductory offer', async () => {
      const offerData = {
        subscriptionId: validSubscriptionId,
        territory: 'USA',
        duration: 'ONE_MONTH',
        offerMode: 'FREE_TRIAL',
        numberOfPeriods: 1
      };

      const mockCreatedOffer = {
        data: {
          id: 'offer-id-123',
          type: 'subscriptionIntroductoryOffers',
          attributes: {
            duration: 'ONE_MONTH',
            offerMode: 'FREE_TRIAL',
            numberOfPeriods: 1
          }
        }
      };

      introductoryOffersService.createIntroductoryOffer.mockResolvedValue(mockCreatedOffer);

      const response = await request(app)
        .post('/api/introductory-offers')
        .send(offerData);
      
      expect(response.status).toBe(201);
      expect(response.body.success).toBe(true);
      expect(response.body.data).toEqual(mockCreatedOffer.data);
      expect(introductoryOffersService.createIntroductoryOffer).toHaveBeenCalledWith(
        validSubscriptionId,
        {
          territory: 'USA',
          duration: 'ONE_MONTH',
          offerMode: 'FREE_TRIAL',
          numberOfPeriods: 1
        }
      );
    });

    it('should create an introductory offer with dates and price point', async () => {
      const offerData = {
        subscriptionId: validSubscriptionId,
        territory: 'USA',
        duration: 'THREE_MONTHS',
        offerMode: 'PAY_AS_YOU_GO',
        numberOfPeriods: 3,
        startDate: '2024-01-01',
        endDate: '2024-12-31',
        subscriptionPricePoint: 'price-point-123'
      };

      const mockCreatedOffer = {
        data: {
          id: 'offer-id-456',
          type: 'subscriptionIntroductoryOffers',
          attributes: {
            startDate: '2024-01-01',
            endDate: '2024-12-31',
            duration: 'THREE_MONTHS',
            offerMode: 'PAY_AS_YOU_GO',
            numberOfPeriods: 3
          }
        }
      };

      introductoryOffersService.createIntroductoryOffer.mockResolvedValue(mockCreatedOffer);

      const response = await request(app)
        .post('/api/introductory-offers')
        .send(offerData);
      
      expect(response.status).toBe(201);
      expect(response.body.success).toBe(true);
      expect(response.body.data).toEqual(mockCreatedOffer.data);
    });

    it('should return 400 for missing required fields', async () => {
      const invalidData = {
        subscriptionId: validSubscriptionId
        // Missing territory, duration, offerMode, numberOfPeriods
      };

      const response = await request(app)
        .post('/api/introductory-offers')
        .send(invalidData);
      
      expect(response.status).toBe(400);
      expect(response.body.success).toBe(false);
      expect(response.body.error.message).toContain('required');
    });

    it('should return 400 for invalid subscription ID', async () => {
      const invalidData = {
        subscriptionId: 'invalid-id',
        territory: 'USA',
        duration: 'ONE_MONTH',
        offerMode: 'FREE_TRIAL',
        numberOfPeriods: 1
      };

      const response = await request(app)
        .post('/api/introductory-offers')
        .send(invalidData);
      
      expect(response.status).toBe(400);
      expect(response.body.success).toBe(false);
      expect(response.body.error.message).toContain('numeric string');
    });

    it('should return 400 for invalid duration', async () => {
      const invalidData = {
        subscriptionId: validSubscriptionId,
        territory: 'USA',
        duration: 'INVALID_DURATION',
        offerMode: 'FREE_TRIAL',
        numberOfPeriods: 1
      };

      const response = await request(app)
        .post('/api/introductory-offers')
        .send(invalidData);
      
      expect(response.status).toBe(400);
      expect(response.body.success).toBe(false);
    });

    it('should return 400 for invalid offer mode', async () => {
      const invalidData = {
        subscriptionId: validSubscriptionId,
        territory: 'USA',
        duration: 'ONE_MONTH',
        offerMode: 'INVALID_MODE',
        numberOfPeriods: 1
      };

      const response = await request(app)
        .post('/api/introductory-offers')
        .send(invalidData);
      
      expect(response.status).toBe(400);
      expect(response.body.success).toBe(false);
    });

    it('should return 400 for missing territory', async () => {
      const invalidData = {
        subscriptionId: validSubscriptionId,
        duration: 'ONE_MONTH',
        offerMode: 'FREE_TRIAL',
        numberOfPeriods: 1
      };

      const response = await request(app)
        .post('/api/introductory-offers')
        .send(invalidData);
      
      expect(response.status).toBe(400);
      expect(response.body.success).toBe(false);
      expect(response.body.error.message).toContain('required');
    });
  });

  describe('POST /api/introductory-offers/bulk', () => {
    it('should bulk create introductory offers for subscriptions', async () => {
      const bulkData = {
        bundleId: 'com.vtech.plus.inapp.ios.test3',
        referenceName: 'Group 1',
        offerTemplate: {
          territories: ['USA', 'GBR', 'CAN'],
          duration: 'ONE_MONTH',
          offerMode: 'FREE_TRIAL',
          numberOfPeriods: 1
        }
      };

      const mockResult = {
        summary: {
          bundleId: 'com.vtech.plus.inapp.ios.test3',
          appName: 'Test App',
          referenceName: 'Group 1',
          matchedGroups: 1,
          matchedSubscriptions: 2,
          territories: ['USA', 'GBR', 'CAN'],
          total: 6,
          succeeded: 6,
          failed: 0
        },
        created: [
          {
            subscriptionId: 'sub-1',
            subscriptionName: 'Sub 1',
            productId: 'com.test.sub1',
            territory: 'USA',
            offerId: 'offer-1'
          }
        ],
        failed: []
      };

      introductoryOffersService.bulkCreateIntroductoryOffers.mockResolvedValue(mockResult);

      const response = await request(app)
        .post('/api/introductory-offers/bulk')
        .send(bulkData);
      
      expect(response.status).toBe(201);
      expect(response.body.success).toBe(true);
      expect(response.body.data).toEqual(mockResult);
      expect(response.body.data.summary.succeeded).toBe(6);
    });

    it('should return 207 for partial success in bulk creation', async () => {
      const bulkData = {
        bundleId: 'com.vtech.plus.inapp.ios.test3',
        referenceName: 'Group 2',
        offerTemplate: {
          territories: ['USA', 'GBR'],
          duration: 'THREE_MONTHS',
          offerMode: 'FREE_TRIAL',
          numberOfPeriods: 1
        }
      };

      const mockResult = {
        summary: {
          bundleId: 'com.vtech.plus.inapp.ios.test3',
          appName: 'Test App',
          referenceName: 'Group 2',
          matchedGroups: 1,
          matchedSubscriptions: 2,
          territories: ['USA', 'GBR'],
          total: 4,
          succeeded: 3,
          failed: 1
        },
        created: [],
        failed: [
          {
            subscriptionId: 'sub-3',
            subscriptionName: 'Sub 3',
            productId: 'com.test.sub3',
            territory: 'USA',
            error: 'Offer already exists',
            code: 'VALIDATION_ERROR'
          }
        ]
      };

      introductoryOffersService.bulkCreateIntroductoryOffers.mockResolvedValue(mockResult);

      const response = await request(app)
        .post('/api/introductory-offers/bulk')
        .send(bulkData);
      
      expect(response.status).toBe(207);
      expect(response.body.success).toBe(false);
      expect(response.body.data.summary.succeeded).toBe(3);
      expect(response.body.data.summary.failed).toBe(1);
    });

    it('should return 400 for missing required bulk fields', async () => {
      const invalidData = {
        bundleId: 'com.vtech.plus.inapp.ios.test3'
        // Missing referenceName and offerTemplate
      };

      const response = await request(app)
        .post('/api/introductory-offers/bulk')
        .send(invalidData);
      
      expect(response.status).toBe(400);
      expect(response.body.success).toBe(false);
    });

    it('should return 400 for empty territories array', async () => {
      const invalidData = {
        bundleId: 'com.vtech.plus.inapp.ios.test3',
        referenceName: 'Group 1',
        offerTemplate: {
          territories: [],
          duration: 'ONE_MONTH',
          offerMode: 'FREE_TRIAL',
          numberOfPeriods: 1
        }
      };

      const response = await request(app)
        .post('/api/introductory-offers/bulk')
        .send(invalidData);
      
      expect(response.status).toBe(400);
      expect(response.body.success).toBe(false);
    });
  });

  describe('GET /api/introductory-offers/bundle/:bundleId', () => {
    const testBundleId = 'com.vtech.plus.inapp.ios.test3';

    it('should get all introductory offers for a bundle ID', async () => {
      const mockOffers = {
        bundleId: testBundleId,
        appName: 'Test App',
        referenceName: null,
        subscriptions: [
          {
            subscription: {
              id: 'sub-1',
              name: 'Sub 1',
              productId: 'com.test.sub1'
            },
            offers: [
              {
                id: 'offer-1',
                startDate: null,
                endDate: null,
                duration: 'ONE_MONTH',
                offerMode: 'FREE_TRIAL',
                numberOfPeriods: 1
              }
            ]
          }
        ],
        totalOffers: 1
      };

      introductoryOffersService.getIntroductoryOffersByBundleId.mockResolvedValue(mockOffers);

      const response = await request(app)
        .get(`/api/introductory-offers/bundle/${testBundleId}`);
      
      expect(response.status).toBe(200);
      expect(response.body.success).toBe(true);
      expect(response.body.data).toEqual(mockOffers);
    });

    it('should get introductory offers filtered by subscription group reference name', async () => {
      const mockOffers = {
        bundleId: testBundleId,
        appName: 'Test App',
        referenceName: 'Group 1',
        subscriptions: [],
        totalOffers: 0
      };

      introductoryOffersService.getIntroductoryOffersByBundleId.mockResolvedValue(mockOffers);

      const response = await request(app)
        .get(`/api/introductory-offers/bundle/${testBundleId}`)
        .query({ referenceName: 'Group 1' });
      
      expect(response.status).toBe(200);
      expect(response.body.success).toBe(true);
      expect(introductoryOffersService.getIntroductoryOffersByBundleId).toHaveBeenCalledWith(
        testBundleId,
        { referenceName: 'Group 1', limit: undefined }
      );
    });
  });

  describe('GET /api/introductory-offers/:id', () => {
    const validId = '12345678-1234-5678-9012-123456789012';

    it('should get introductory offer by ID', async () => {
      const mockOffer = {
        data: {
          id: validId,
          type: 'subscriptionIntroductoryOffers',
          attributes: {
            duration: 'ONE_MONTH',
            offerMode: 'FREE_TRIAL',
            numberOfPeriods: 1
          }
        }
      };

      introductoryOffersService.getIntroductoryOffer.mockResolvedValue(mockOffer);

      const response = await request(app)
        .get(`/api/introductory-offers/${validId}`);
      
      expect(response.status).toBe(200);
      expect(response.body.success).toBe(true);
      expect(response.body.data).toEqual(mockOffer.data);
    });

    it('should return 400 for invalid UUID', async () => {
      const response = await request(app)
        .get('/api/introductory-offers/invalid-uuid');
      
      expect(response.status).toBe(400);
      expect(response.body.success).toBe(false);
      expect(response.body.error.message).toContain('valid UUID');
    });

    it('should return 404 when offer not found', async () => {
      const error = new Error('Introductory offer not found');
      error.statusCode = 404;
      introductoryOffersService.getIntroductoryOffer.mockRejectedValue(error);

      const response = await request(app)
        .get(`/api/introductory-offers/${validId}`);
      
      expect(response.status).toBe(404);
      expect(response.body.success).toBe(false);
    });
  });

  describe('PATCH /api/introductory-offers/:id', () => {
    const validId = '12345678-1234-5678-9012-123456789012';

    it('should update introductory offer dates', async () => {
      const updateData = {
        startDate: '2024-06-01',
        endDate: '2024-12-31'
      };

      const mockUpdatedOffer = {
        data: {
          id: validId,
          type: 'subscriptionIntroductoryOffers',
          attributes: {
            startDate: '2024-06-01',
            endDate: '2024-12-31',
            duration: 'ONE_MONTH',
            offerMode: 'FREE_TRIAL',
            numberOfPeriods: 1
          }
        }
      };

      introductoryOffersService.updateIntroductoryOffer.mockResolvedValue(mockUpdatedOffer);

      const response = await request(app)
        .patch(`/api/introductory-offers/${validId}`)
        .send(updateData);
      
      expect(response.status).toBe(200);
      expect(response.body.success).toBe(true);
      expect(response.body.data).toEqual(mockUpdatedOffer.data);
    });

    it('should return 400 for invalid UUID', async () => {
      const response = await request(app)
        .patch('/api/introductory-offers/invalid-uuid')
        .send({ startDate: '2024-01-01' });
      
      expect(response.status).toBe(400);
      expect(response.body.success).toBe(false);
    });

    it('should return 400 for empty update data', async () => {
      const response = await request(app)
        .patch(`/api/introductory-offers/${validId}`)
        .send({});
      
      expect(response.status).toBe(400);
      expect(response.body.success).toBe(false);
      expect(response.body.error.message).toContain('At least one field');
    });
  });

  describe('DELETE /api/introductory-offers/:id', () => {
    const validId = '12345678-1234-5678-9012-123456789012';

    it('should delete introductory offer', async () => {
      const mockResult = {
        success: true,
        message: 'Introductory offer deleted successfully'
      };

      introductoryOffersService.deleteIntroductoryOffer.mockResolvedValue(mockResult);

      const response = await request(app)
        .delete(`/api/introductory-offers/${validId}`);
      
      expect(response.status).toBe(200);
      expect(response.body.success).toBe(true);
      expect(response.body.message).toBe(mockResult.message);
    });

    it('should return 400 for invalid UUID', async () => {
      const response = await request(app)
        .delete('/api/introductory-offers/invalid-uuid');
      
      expect(response.status).toBe(400);
      expect(response.body.success).toBe(false);
    });

    it('should return 404 when offer not found', async () => {
      const error = new Error('Introductory offer not found');
      error.statusCode = 404;
      introductoryOffersService.deleteIntroductoryOffer.mockRejectedValue(error);

      const response = await request(app)
        .delete(`/api/introductory-offers/${validId}`);
      
      expect(response.status).toBe(404);
      expect(response.body.success).toBe(false);
    });
  });

  describe('Error Handling', () => {
    it('should handle service errors', async () => {
      const error = new Error('Service unavailable');
      error.statusCode = 503;
      
      introductoryOffersService.getIntroductoryOffersByBundleId.mockRejectedValue(error);

      const response = await request(app)
        .get('/api/introductory-offers/bundle/com.test.app');
      
      expect(response.status).toBe(503);
      expect(response.body.success).toBe(false);
    });

    it('should handle unexpected errors with 500 status', async () => {
      const error = new Error('Unexpected error');
      
      introductoryOffersService.getIntroductoryOffer.mockRejectedValue(error);

      const response = await request(app)
        .get('/api/introductory-offers/12345678-1234-5678-9012-123456789012');
      
      expect(response.status).toBe(500);
      expect(response.body.success).toBe(false);
    });
  });

  describe('Validation Edge Cases', () => {
    const validSubscriptionId = '1234567890';

    it('should accept all valid duration values', async () => {
      const validDurations = ['THREE_DAYS', 'ONE_WEEK', 'TWO_WEEKS', 'ONE_MONTH', 
                             'TWO_MONTHS', 'THREE_MONTHS', 'SIX_MONTHS', 'ONE_YEAR'];
      
      for (const duration of validDurations) {
        const offerData = {
          subscriptionId: validSubscriptionId,
          territory: 'USA',
          duration,
          offerMode: 'FREE_TRIAL',
          numberOfPeriods: 1
        };

        const mockCreatedOffer = {
          data: {
            id: 'offer-id',
            type: 'subscriptionIntroductoryOffers',
            attributes: { duration }
          }
        };

        introductoryOffersService.createIntroductoryOffer.mockResolvedValue(mockCreatedOffer);

        const response = await request(app)
          .post('/api/introductory-offers')
          .send(offerData);
        
        expect(response.status).toBe(201);
      }
    });

    it('should accept all valid offer mode values', async () => {
      const validOfferModes = ['PAY_AS_YOU_GO', 'PAY_UP_FRONT', 'FREE_TRIAL'];
      
      for (const offerMode of validOfferModes) {
        const offerData = {
          subscriptionId: validSubscriptionId,
          territory: 'USA',
          duration: 'ONE_MONTH',
          offerMode,
          numberOfPeriods: 1
        };

        const mockCreatedOffer = {
          data: {
            id: 'offer-id',
            type: 'subscriptionIntroductoryOffers',
            attributes: { offerMode }
          }
        };

        introductoryOffersService.createIntroductoryOffer.mockResolvedValue(mockCreatedOffer);

        const response = await request(app)
          .post('/api/introductory-offers')
          .send(offerData);
        
        expect(response.status).toBe(201);
      }
    });

    it('should reject numberOfPeriods less than 1', async () => {
      const offerData = {
        subscriptionId: validSubscriptionId,
        territory: 'USA',
        duration: 'ONE_MONTH',
        offerMode: 'FREE_TRIAL',
        numberOfPeriods: 0
      };

      const response = await request(app)
        .post('/api/introductory-offers')
        .send(offerData);
      
      expect(response.status).toBe(400);
      expect(response.body.success).toBe(false);
    });

    it('should reject numberOfPeriods greater than 12', async () => {
      const offerData = {
        subscriptionId: validSubscriptionId,
        territory: 'USA',
        duration: 'ONE_MONTH',
        offerMode: 'FREE_TRIAL',
        numberOfPeriods: 13
      };

      const response = await request(app)
        .post('/api/introductory-offers')
        .send(offerData);
      
      expect(response.status).toBe(400);
      expect(response.body.success).toBe(false);
    });
  });
});
