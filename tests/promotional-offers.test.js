const request = require('supertest');
const app = require('../server');
const promotionalOffersService = require('../src/services/promotional-offers');

// Mock the promotional offers service
jest.mock('../src/services/promotional-offers');

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
    endpoints: {
      subscriptions: '/subscriptions',
      subscriptionGroups: '/subscriptionGroups',
      promotionalOffers: '/subscriptionPromotionalOffers'
    },
    rateLimiting: {
      windowMs: 900000,
      maxRequests: 100
    }
  },
  validateConfig: jest.fn().mockReturnValue(true)
}));

describe('Promotional Offers API Endpoints', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('POST /api/promotional-offers', () => {
    const validSubscriptionId = '12345678-1234-5678-9012-123456789012';

    it('should create a promotional offer with custom offer code', async () => {
      const offerData = {
        subscriptionId: validSubscriptionId,
        name: 'Spring Sale',
        offerCode: 'SPRING2024',
        duration: 'THREE_MONTHS',
        offerMode: 'PAY_AS_YOU_GO',
        numberOfPeriods: 3
      };

      const mockCreatedOffer = {
        data: {
          id: 'offer-id-123',
          type: 'subscriptionPromotionalOffers',
          attributes: {
            name: 'Spring Sale',
            offerCode: 'SPRING2024',
            duration: 'THREE_MONTHS',
            offerMode: 'PAY_AS_YOU_GO',
            numberOfPeriods: 3
          }
        }
      };

      promotionalOffersService.createPromotionalOffer.mockResolvedValue(mockCreatedOffer);

      const response = await request(app)
        .post('/api/promotional-offers')
        .send(offerData);
      
      expect(response.status).toBe(201);
      expect(response.body.success).toBe(true);
      expect(response.body.data).toEqual(mockCreatedOffer.data);
      expect(promotionalOffersService.createPromotionalOffer).toHaveBeenCalledWith(
        validSubscriptionId,
        {
          name: 'Spring Sale',
          offerCode: 'SPRING2024',
          duration: 'THREE_MONTHS',
          offerMode: 'PAY_AS_YOU_GO',
          numberOfPeriods: 3
        }
      );
    });

    it('should create a promotional offer with auto-generated offer code', async () => {
      const offerData = {
        subscriptionId: validSubscriptionId,
        name: 'Summer Sale',
        duration: 'ONE_MONTH',
        offerMode: 'PAY_UP_FRONT',
        numberOfPeriods: 1
      };

      const mockCreatedOffer = {
        data: {
          id: 'offer-id-456',
          type: 'subscriptionPromotionalOffers',
          attributes: {
            name: 'Summer Sale',
            offerCode: 'SUMMER2024',
            duration: 'ONE_MONTH',
            offerMode: 'PAY_UP_FRONT',
            numberOfPeriods: 1
          }
        }
      };

      promotionalOffersService.createPromotionalOffer.mockResolvedValue(mockCreatedOffer);

      const response = await request(app)
        .post('/api/promotional-offers')
        .send(offerData);
      
      expect(response.status).toBe(201);
      expect(response.body.success).toBe(true);
      expect(response.body.data).toEqual(mockCreatedOffer.data);
    });

    it('should return 400 for missing required fields', async () => {
      const invalidData = {
        name: 'Incomplete Offer'
        // Missing subscriptionId, duration, offerMode, numberOfPeriods
      };

      const response = await request(app)
        .post('/api/promotional-offers')
        .send(invalidData);
      
      expect(response.status).toBe(400);
      expect(response.body.success).toBe(false);
      expect(response.body.error.message).toContain('required');
    });

    it('should return 400 for invalid UUID', async () => {
      const invalidData = {
        subscriptionId: 'invalid-uuid',
        name: 'Test Offer',
        duration: 'ONE_MONTH',
        offerMode: 'PAY_AS_YOU_GO',
        numberOfPeriods: 1
      };

      const response = await request(app)
        .post('/api/promotional-offers')
        .send(invalidData);
      
      expect(response.status).toBe(400);
      expect(response.body.success).toBe(false);
      expect(response.body.error.message).toContain('valid UUID');
    });

    it('should return 400 for invalid offer code format', async () => {
      const invalidData = {
        subscriptionId: validSubscriptionId,
        name: 'Test Offer',
        offerCode: 'invalid code!', // Invalid: spaces and special chars
        duration: 'ONE_MONTH',
        offerMode: 'PAY_AS_YOU_GO',
        numberOfPeriods: 1
      };

      const response = await request(app)
        .post('/api/promotional-offers')
        .send(invalidData);
      
      expect(response.status).toBe(400);
      expect(response.body.success).toBe(false);
      expect(response.body.error.message).toContain('Offer code can only contain');
    });

    it('should return 400 for invalid duration', async () => {
      const invalidData = {
        subscriptionId: validSubscriptionId,
        name: 'Test Offer',
        duration: 'INVALID_DURATION',
        offerMode: 'PAY_AS_YOU_GO',
        numberOfPeriods: 1
      };

      const response = await request(app)
        .post('/api/promotional-offers')
        .send(invalidData);
      
      expect(response.status).toBe(400);
      expect(response.body.success).toBe(false);
    });

    it('should return 400 for invalid offer mode', async () => {
      const invalidData = {
        subscriptionId: validSubscriptionId,
        name: 'Test Offer',
        duration: 'ONE_MONTH',
        offerMode: 'INVALID_MODE',
        numberOfPeriods: 1
      };

      const response = await request(app)
        .post('/api/promotional-offers')
        .send(invalidData);
      
      expect(response.status).toBe(400);
      expect(response.body.success).toBe(false);
    });

    it('should return 409 for duplicate offer name on same subscription', async () => {
      const offerData = {
        subscriptionId: validSubscriptionId,
        name: 'Existing Offer',
        duration: 'ONE_MONTH',
        offerMode: 'PAY_AS_YOU_GO',
        numberOfPeriods: 1
      };

      const error = new Error('Subscription already has an offer with this name');
      error.statusCode = 409;
      promotionalOffersService.createPromotionalOffer.mockRejectedValue(error);

      const response = await request(app)
        .post('/api/promotional-offers')
        .send(offerData);
      
      expect(response.status).toBe(409);
      expect(response.body.success).toBe(false);
    });
  });

  describe('POST /api/promotional-offers/bulk', () => {
    it('should bulk create promotional offers for all subscriptions matching reference name', async () => {
      const bulkData = {
        bundleId: 'com.vtech.plus.inapp.ios.test3',
        referenceName: 'Group 1',
        offerTemplate: {
          name: 'Holiday Sale',
          offerCodePrefix: 'HOLIDAY2024',
          duration: 'ONE_MONTH',
          offerMode: 'PAY_AS_YOU_GO',
          numberOfPeriods: 1
        }
      };

      const mockResult = {
        summary: {
          bundleId: 'com.vtech.plus.inapp.ios.test3',
          appName: 'Test App',
          referenceName: 'Group 1',
          matchedGroups: 1,
          matchedSubscriptions: 3,
          total: 3,
          succeeded: 3,
          failed: 0
        },
        created: [
          {
            subscriptionId: 'sub-1',
            subscriptionName: 'Sub 1',
            productId: 'com.test.sub1',
            offerId: 'offer-1',
            offerCode: 'HOLIDAY20241',
            offerName: 'Holiday Sale'
          },
          {
            subscriptionId: 'sub-2',
            subscriptionName: 'Sub 2',
            productId: 'com.test.sub2',
            offerId: 'offer-2',
            offerCode: 'HOLIDAY20242',
            offerName: 'Holiday Sale'
          },
          {
            subscriptionId: 'sub-3',
            subscriptionName: 'Sub 3',
            productId: 'com.test.sub3',
            offerId: 'offer-3',
            offerCode: 'HOLIDAY20243',
            offerName: 'Holiday Sale'
          }
        ],
        failed: []
      };

      promotionalOffersService.bulkCreatePromotionalOffers.mockResolvedValue(mockResult);

      const response = await request(app)
        .post('/api/promotional-offers/bulk')
        .send(bulkData);
      
      expect(response.status).toBe(201);
      expect(response.body.success).toBe(true);
      expect(response.body.data).toEqual(mockResult);
      expect(response.body.data.summary.succeeded).toBe(3);
      expect(response.body.data.summary.failed).toBe(0);
    });

    it('should return 207 for partial success in bulk creation', async () => {
      const bulkData = {
        bundleId: 'com.vtech.plus.inapp.ios.test3',
        referenceName: 'Group 2',
        offerTemplate: {
          name: 'Winter Sale',
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
          matchedSubscriptions: 3,
          total: 3,
          succeeded: 2,
          failed: 1
        },
        created: [
          {
            subscriptionId: 'sub-1',
            subscriptionName: 'Sub 1',
            productId: 'com.test.sub1',
            offerId: 'offer-1',
            offerCode: 'WINTER20241',
            offerName: 'Winter Sale'
          },
          {
            subscriptionId: 'sub-2',
            subscriptionName: 'Sub 2',
            productId: 'com.test.sub2',
            offerId: 'offer-2',
            offerCode: 'WINTER20242',
            offerName: 'Winter Sale'
          }
        ],
        failed: [
          {
            subscriptionId: 'sub-3',
            subscriptionName: 'Sub 3',
            productId: 'com.test.sub3',
            error: 'Subscription already has an offer with this name',
            code: 'VALIDATION_ERROR'
          }
        ]
      };

      promotionalOffersService.bulkCreatePromotionalOffers.mockResolvedValue(mockResult);

      const response = await request(app)
        .post('/api/promotional-offers/bulk')
        .send(bulkData);
      
      expect(response.status).toBe(207);
      expect(response.body.success).toBe(false);
      expect(response.body.data.summary.succeeded).toBe(2);
      expect(response.body.data.summary.failed).toBe(1);
    });

    it('should return 400 for missing required bulk fields', async () => {
      const invalidData = {
        bundleId: 'com.vtech.plus.inapp.ios.test3'
        // Missing referenceName and offerTemplate
      };

      const response = await request(app)
        .post('/api/promotional-offers/bulk')
        .send(invalidData);
      
      expect(response.status).toBe(400);
      expect(response.body.success).toBe(false);
    });

    it('should return 404 when no subscriptions match reference name', async () => {
      const bulkData = {
        bundleId: 'com.vtech.plus.inapp.ios.test3',
        referenceName: 'NonExistent Group',
        offerTemplate: {
          name: 'Test Sale',
          duration: 'ONE_MONTH',
          offerMode: 'PAY_AS_YOU_GO',
          numberOfPeriods: 1
        }
      };

      const error = new Error('No subscription groups found matching reference name');
      error.statusCode = 404;
      promotionalOffersService.bulkCreatePromotionalOffers.mockRejectedValue(error);

      const response = await request(app)
        .post('/api/promotional-offers/bulk')
        .send(bulkData);
      
      expect(response.status).toBe(404);
      expect(response.body.success).toBe(false);
    });
  });

  describe('GET /api/promotional-offers/bundle/:bundleId', () => {
    const testBundleId = 'com.vtech.plus.inapp.ios.test3';

    it('should get all promotional offers for a bundle ID', async () => {
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
                name: 'Spring Sale',
                offerCode: 'SPRING2024',
                duration: 'ONE_MONTH',
                offerMode: 'PAY_AS_YOU_GO',
                numberOfPeriods: 1
              }
            ]
          },
          {
            subscription: {
              id: 'sub-2',
              name: 'Sub 2',
              productId: 'com.test.sub2'
            },
            offers: [
              {
                id: 'offer-2',
                name: 'Summer Sale',
                offerCode: 'SUMMER2024',
                duration: 'THREE_MONTHS',
                offerMode: 'PAY_UP_FRONT',
                numberOfPeriods: 1
              }
            ]
          }
        ],
        totalOffers: 2
      };

      promotionalOffersService.getPromotionalOffersByBundleId.mockResolvedValue(mockOffers);

      const response = await request(app)
        .get(`/api/promotional-offers/bundle/${testBundleId}`);
      
      expect(response.status).toBe(200);
      expect(response.body.success).toBe(true);
      expect(response.body.data).toEqual(mockOffers);
      expect(promotionalOffersService.getPromotionalOffersByBundleId).toHaveBeenCalledWith(
        testBundleId,
        { referenceName: undefined, limit: undefined }
      );
    });

    it('should get promotional offers filtered by subscription group reference name', async () => {
      const mockOffers = {
        bundleId: testBundleId,
        appName: 'Test App',
        referenceName: 'Group 1',
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
                name: 'Group 1 Sale',
                offerCode: 'GROUP1SALE',
                duration: 'ONE_MONTH',
                offerMode: 'PAY_AS_YOU_GO',
                numberOfPeriods: 1
              }
            ]
          }
        ],
        totalOffers: 1
      };

      promotionalOffersService.getPromotionalOffersByBundleId.mockResolvedValue(mockOffers);

      const response = await request(app)
        .get(`/api/promotional-offers/bundle/${testBundleId}`)
        .query({ referenceName: 'Group 1' });
      
      expect(response.status).toBe(200);
      expect(response.body.success).toBe(true);
      expect(response.body.data).toEqual(mockOffers);
      expect(promotionalOffersService.getPromotionalOffersByBundleId).toHaveBeenCalledWith(
        testBundleId,
        { referenceName: 'Group 1', limit: undefined }
      );
    });

    it('should return empty array when no offers found', async () => {
      const mockOffers = {
        bundleId: testBundleId,
        appName: 'Test App',
        referenceName: null,
        subscriptions: [],
        totalOffers: 0
      };

      promotionalOffersService.getPromotionalOffersByBundleId.mockResolvedValue(mockOffers);

      const response = await request(app)
        .get(`/api/promotional-offers/bundle/${testBundleId}`);
      
      expect(response.status).toBe(200);
      expect(response.body.success).toBe(true);
      expect(response.body.data).toEqual(mockOffers);
    });
  });

  describe('GET /api/promotional-offers/:id', () => {
    const validId = '12345678-1234-5678-9012-123456789012';

    it('should get promotional offer by ID', async () => {
      const mockOffer = {
        data: {
          id: validId,
          type: 'subscriptionPromotionalOffers',
          attributes: {
            name: 'Spring Sale',
            offerCode: 'SPRING2024',
            duration: 'ONE_MONTH',
            offerMode: 'PAY_AS_YOU_GO',
            numberOfPeriods: 1
          }
        }
      };

      promotionalOffersService.getPromotionalOffer.mockResolvedValue(mockOffer);

      const response = await request(app)
        .get(`/api/promotional-offers/${validId}`);
      
      expect(response.status).toBe(200);
      expect(response.body.success).toBe(true);
      expect(response.body.data).toEqual(mockOffer.data);
      expect(promotionalOffersService.getPromotionalOffer).toHaveBeenCalledWith(validId, undefined);
    });

    it('should return 400 for invalid UUID', async () => {
      const response = await request(app)
        .get('/api/promotional-offers/invalid-uuid');
      
      expect(response.status).toBe(400);
      expect(response.body.success).toBe(false);
      expect(response.body.error.message).toContain('valid UUID');
    });

    it('should return 404 when offer not found', async () => {
      const error = new Error('Promotional offer not found');
      error.statusCode = 404;
      promotionalOffersService.getPromotionalOffer.mockRejectedValue(error);

      const response = await request(app)
        .get(`/api/promotional-offers/${validId}`);
      
      expect(response.status).toBe(404);
      expect(response.body.success).toBe(false);
    });
  });

  describe('PATCH /api/promotional-offers/:id', () => {
    const validId = '12345678-1234-5678-9012-123456789012';

    it('should update promotional offer name', async () => {
      const updateData = {
        name: 'Updated Spring Sale 2024'
      };

      const mockUpdatedOffer = {
        data: {
          id: validId,
          type: 'subscriptionPromotionalOffers',
          attributes: {
            name: 'Updated Spring Sale 2024',
            offerCode: 'SPRING2024',
            duration: 'ONE_MONTH'
          }
        }
      };

      promotionalOffersService.updatePromotionalOffer.mockResolvedValue(mockUpdatedOffer);

      const response = await request(app)
        .patch(`/api/promotional-offers/${validId}`)
        .send(updateData);
      
      expect(response.status).toBe(200);
      expect(response.body.success).toBe(true);
      expect(response.body.data).toEqual(mockUpdatedOffer.data);
      expect(promotionalOffersService.updatePromotionalOffer).toHaveBeenCalledWith(
        validId,
        updateData
      );
    });

    it('should return 400 for invalid UUID', async () => {
      const response = await request(app)
        .patch('/api/promotional-offers/invalid-uuid')
        .send({ name: 'Updated Name' });
      
      expect(response.status).toBe(400);
      expect(response.body.success).toBe(false);
    });

    it('should return 400 for empty update data', async () => {
      const response = await request(app)
        .patch(`/api/promotional-offers/${validId}`)
        .send({});
      
      expect(response.status).toBe(400);
      expect(response.body.success).toBe(false);
      expect(response.body.error.message).toContain('At least one field');
    });

    it('should strip unknown fields and update successfully', async () => {
      const updateData = {
        name: 'Updated Name',
        offerCode: 'NEWCODE' // offerCode should be stripped by validation (unknown field)
      };

      const mockUpdatedOffer = {
        data: {
          id: validId,
          type: 'subscriptionPromotionalOffers',
          attributes: {
            name: 'Updated Name',
            offerCode: 'SPRING2024', // Original code unchanged
            duration: 'ONE_MONTH'
          }
        }
      };

      promotionalOffersService.updatePromotionalOffer.mockResolvedValue(mockUpdatedOffer);

      const response = await request(app)
        .patch(`/api/promotional-offers/${validId}`)
        .send(updateData);
      
      expect(response.status).toBe(200);
      expect(response.body.success).toBe(true);
      // Should only pass 'name' to service after validation strips unknown fields
      expect(promotionalOffersService.updatePromotionalOffer).toHaveBeenCalledWith(
        validId,
        { name: 'Updated Name' }
      );
    });
  });

  describe('DELETE /api/promotional-offers/:id', () => {
    const validId = '12345678-1234-5678-9012-123456789012';

    it('should delete promotional offer', async () => {
      const mockResult = {
        success: true,
        message: 'Promotional offer deleted successfully'
      };

      promotionalOffersService.deletePromotionalOffer.mockResolvedValue(mockResult);

      const response = await request(app)
        .delete(`/api/promotional-offers/${validId}`);
      
      expect(response.status).toBe(200);
      expect(response.body.success).toBe(true);
      expect(response.body.message).toBe(mockResult.message);
      expect(promotionalOffersService.deletePromotionalOffer).toHaveBeenCalledWith(validId);
    });

    it('should return 400 for invalid UUID', async () => {
      const response = await request(app)
        .delete('/api/promotional-offers/invalid-uuid');
      
      expect(response.status).toBe(400);
      expect(response.body.success).toBe(false);
    });

    it('should return 404 when offer not found', async () => {
      const error = new Error('Promotional offer not found');
      error.statusCode = 404;
      promotionalOffersService.deletePromotionalOffer.mockRejectedValue(error);

      const response = await request(app)
        .delete(`/api/promotional-offers/${validId}`);
      
      expect(response.status).toBe(404);
      expect(response.body.success).toBe(false);
    });
  });

  describe('GET /api/promotional-offers/:id/prices', () => {
    const validId = '12345678-1234-5678-9012-123456789012';

    it('should get promotional offer prices', async () => {
      const mockPrices = {
        data: [
          {
            id: 'price-1',
            type: 'subscriptionPromotionalOfferPrices',
            attributes: {
              territory: 'USA',
              subscriptionPricePoint: 'price-point-1'
            }
          },
          {
            id: 'price-2',
            type: 'subscriptionPromotionalOfferPrices',
            attributes: {
              territory: 'GBR',
              subscriptionPricePoint: 'price-point-2'
            }
          }
        ]
      };

      promotionalOffersService.getPromotionalOfferPrices.mockResolvedValue(mockPrices);

      const response = await request(app)
        .get(`/api/promotional-offers/${validId}/prices`);
      
      expect(response.status).toBe(200);
      expect(response.body.success).toBe(true);
      expect(response.body.data).toEqual(mockPrices.data);
      expect(promotionalOffersService.getPromotionalOfferPrices).toHaveBeenCalledWith(validId, undefined);
    });

    it('should return 400 for invalid UUID', async () => {
      const response = await request(app)
        .get('/api/promotional-offers/invalid-uuid/prices');
      
      expect(response.status).toBe(400);
      expect(response.body.success).toBe(false);
    });
  });

  describe('GET /api/subscriptions/:id/promotional-offers', () => {
    const validId = '12345678-1234-5678-9012-123456789012';

    it('should get all promotional offers for a subscription', async () => {
      const mockOffers = [
        {
          id: 'offer-1',
          type: 'subscriptionPromotionalOffers',
          attributes: {
            name: 'Spring Sale',
            offerCode: 'SPRING2024'
          }
        },
        {
          id: 'offer-2',
          type: 'subscriptionPromotionalOffers',
          attributes: {
            name: 'Summer Sale',
            offerCode: 'SUMMER2024'
          }
        }
      ];

      promotionalOffersService.getPromotionalOffersForSubscription.mockResolvedValue(mockOffers);

      const response = await request(app)
        .get(`/api/subscriptions/${validId}/promotional-offers`);
      
      expect(response.status).toBe(200);
      expect(response.body.success).toBe(true);
      expect(response.body.data).toEqual(mockOffers);
      expect(response.body.count).toBe(2);
      expect(promotionalOffersService.getPromotionalOffersForSubscription).toHaveBeenCalledWith(validId);
    });

    it('should return 400 for invalid UUID', async () => {
      const response = await request(app)
        .get('/api/subscriptions/invalid-uuid/promotional-offers');
      
      expect(response.status).toBe(400);
      expect(response.body.success).toBe(false);
    });
  });

  describe('Error Handling', () => {
    it('should handle service errors', async () => {
      const error = new Error('Service unavailable');
      error.statusCode = 503;
      
      promotionalOffersService.getPromotionalOffersByBundleId.mockRejectedValue(error);

      const response = await request(app)
        .get('/api/promotional-offers/bundle/com.test.app');
      
      expect(response.status).toBe(503);
      expect(response.body.success).toBe(false);
    });

    it('should handle unexpected errors with 500 status', async () => {
      const error = new Error('Unexpected error');
      
      promotionalOffersService.getPromotionalOffer.mockRejectedValue(error);

      const response = await request(app)
        .get('/api/promotional-offers/12345678-1234-5678-9012-123456789012');
      
      expect(response.status).toBe(500);
      expect(response.body.success).toBe(false);
    });
  });

  describe('Validation Edge Cases', () => {
    const validSubscriptionId = '12345678-1234-5678-9012-123456789012';

    it('should accept valid offer code with underscores and hyphens', async () => {
      const offerData = {
        subscriptionId: validSubscriptionId,
        name: 'Test Offer',
        offerCode: 'VALID_CODE-2024',
        duration: 'ONE_MONTH',
        offerMode: 'PAY_AS_YOU_GO',
        numberOfPeriods: 1
      };

      const mockCreatedOffer = {
        data: {
          id: 'offer-id',
          type: 'subscriptionPromotionalOffers',
          attributes: offerData
        }
      };

      promotionalOffersService.createPromotionalOffer.mockResolvedValue(mockCreatedOffer);

      const response = await request(app)
        .post('/api/promotional-offers')
        .send(offerData);
      
      expect(response.status).toBe(201);
      expect(response.body.success).toBe(true);
    });

    it('should reject offer code shorter than 3 characters', async () => {
      const offerData = {
        subscriptionId: validSubscriptionId,
        name: 'Test Offer',
        offerCode: 'AB',
        duration: 'ONE_MONTH',
        offerMode: 'PAY_AS_YOU_GO',
        numberOfPeriods: 1
      };

      const response = await request(app)
        .post('/api/promotional-offers')
        .send(offerData);
      
      expect(response.status).toBe(400);
      expect(response.body.success).toBe(false);
    });

    it('should reject offer code longer than 25 characters', async () => {
      const offerData = {
        subscriptionId: validSubscriptionId,
        name: 'Test Offer',
        offerCode: 'THISCODE_IS_WAY_TOO_LONG_FOR_APPLE',
        duration: 'ONE_MONTH',
        offerMode: 'PAY_AS_YOU_GO',
        numberOfPeriods: 1
      };

      const response = await request(app)
        .post('/api/promotional-offers')
        .send(offerData);
      
      expect(response.status).toBe(400);
      expect(response.body.success).toBe(false);
    });

    it('should accept all valid duration values', async () => {
      const validDurations = ['THREE_DAYS', 'ONE_WEEK', 'TWO_WEEKS', 'ONE_MONTH', 
                             'TWO_MONTHS', 'THREE_MONTHS', 'SIX_MONTHS', 'ONE_YEAR'];
      
      for (const duration of validDurations) {
        const offerData = {
          subscriptionId: validSubscriptionId,
          name: `Test ${duration}`,
          duration,
          offerMode: 'PAY_AS_YOU_GO',
          numberOfPeriods: 1
        };

        const mockCreatedOffer = {
          data: {
            id: 'offer-id',
            type: 'subscriptionPromotionalOffers',
            attributes: offerData
          }
        };

        promotionalOffersService.createPromotionalOffer.mockResolvedValue(mockCreatedOffer);

        const response = await request(app)
          .post('/api/promotional-offers')
          .send(offerData);
        
        expect(response.status).toBe(201);
      }
    });

    it('should accept all valid offer mode values', async () => {
      const validOfferModes = ['PAY_AS_YOU_GO', 'PAY_UP_FRONT', 'FREE_TRIAL'];
      
      for (const offerMode of validOfferModes) {
        const offerData = {
          subscriptionId: validSubscriptionId,
          name: `Test ${offerMode}`,
          duration: 'ONE_MONTH',
          offerMode,
          numberOfPeriods: 1
        };

        const mockCreatedOffer = {
          data: {
            id: 'offer-id',
            type: 'subscriptionPromotionalOffers',
            attributes: offerData
          }
        };

        promotionalOffersService.createPromotionalOffer.mockResolvedValue(mockCreatedOffer);

        const response = await request(app)
          .post('/api/promotional-offers')
          .send(offerData);
        
        expect(response.status).toBe(201);
      }
    });
  });
});
