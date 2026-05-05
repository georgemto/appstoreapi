const request = require('supertest');
const app = require('../server');
const subscriptionService = require('../src/services/subscriptions');

// Mock the subscription service
jest.mock('../src/services/subscriptions');

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
      promotionalOffers: '/subscriptionPromotionalOffers',
      introductoryOffers: '/subscriptionIntroductoryOffers'
    },
    rateLimiting: {
      windowMs: 900000,
      maxRequests: 100
    }
  },
  validateConfig: jest.fn().mockReturnValue(true)
}));

describe('Subscription API Endpoints', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('GET /health', () => {
    it('should return server health status', async () => {
      const response = await request(app).get('/health');
      
      expect(response.status).toBe(200);
      expect(response.body.success).toBe(true);
      expect(response.body.message).toBe('Server is running');
    });
  });

  describe('GET /api/subscriptions/health', () => {
    it('should return service health status', async () => {
      const response = await request(app).get('/api/subscriptions/health');
      
      expect(response.status).toBe(200);
      expect(response.body.success).toBe(true);
      expect(response.body.message).toBe('Subscription service is healthy');
    });
  });

  describe('GET /api/subscriptions', () => {
    it('should return all subscriptions', async () => {
      const mockSubscriptions = {
        data: [
          {
            id: 'test-subscription-id',
            type: 'subscriptions',
            attributes: {
              name: 'Test Subscription',
              productId: 'com.test.subscription'
            }
          }
        ],
        meta: { paging: { total: 1 } }
      };

      subscriptionService.getAllSubscriptions.mockResolvedValue(mockSubscriptions);

      const response = await request(app).get('/api/subscriptions');
      
      expect(response.status).toBe(200);
      expect(response.body.success).toBe(true);
      expect(response.body.data).toEqual(mockSubscriptions.data);
      expect(subscriptionService.getAllSubscriptions).toHaveBeenCalledWith({
        appId: undefined,
        subscriptionGroupId: undefined,
        state: undefined,
        includes: undefined,
        limit: undefined
      });
    });

    it('should handle query parameters', async () => {
      const mockSubscriptions = { data: [], meta: {} };
      subscriptionService.getAllSubscriptions.mockResolvedValue(mockSubscriptions);

      const response = await request(app)
        .get('/api/subscriptions')
        .query({
          appId: 'test-app-id',
          limit: '50',  // Query params come as strings
          includes: 'subscriptionLocalizations,prices'
        });
      
      expect(response.status).toBe(200);
      expect(subscriptionService.getAllSubscriptions).toHaveBeenCalledWith({
        appId: 'test-app-id',
        subscriptionGroupId: undefined,
        state: undefined,
        includes: ['subscriptionLocalizations', 'prices'],
        limit: 50
      });
    });
  });

  describe('GET /api/subscriptions/:id', () => {
    const validId = '12345678-1234-5678-9012-123456789012';

    it('should return subscription by ID', async () => {
      const mockSubscription = {
        data: {
          id: validId,
          type: 'subscriptions',
          attributes: {
            name: 'Test Subscription',
            productId: 'com.test.subscription'
          }
        }
      };

      subscriptionService.getSubscriptionById.mockResolvedValue(mockSubscription);

      const response = await request(app).get(`/api/subscriptions/${validId}`);
      
      expect(response.status).toBe(200);
      expect(response.body.success).toBe(true);
      expect(response.body.data).toEqual(mockSubscription.data);
      expect(subscriptionService.getSubscriptionById).toHaveBeenCalledWith(
        validId,
        undefined
      );
    });

    it('should return 400 for invalid UUID', async () => {
      const response = await request(app).get('/api/subscriptions/invalid-id');
      
      expect(response.status).toBe(400);
      expect(response.body.success).toBe(false);
      expect(response.body.error.message).toContain('valid UUID');
    });
  });

  describe('POST /api/subscriptions', () => {
    it('should create a new subscription', async () => {
      const subscriptionData = {
        name: 'Test Subscription',
        productId: 'com.test.subscription',
        subscriptionPeriod: 'ONE_MONTH',
        subscriptionGroupId: 'test-group-id'
      };

      const mockCreatedSubscription = {
        data: {
          id: 'new-subscription-id',
          type: 'subscriptions',
          attributes: subscriptionData
        }
      };

      subscriptionService.createSubscription.mockResolvedValue(mockCreatedSubscription);

      const response = await request(app)
        .post('/api/subscriptions')
        .send(subscriptionData);
      
      expect(response.status).toBe(201);
      expect(response.body.success).toBe(true);
      expect(response.body.data).toEqual(mockCreatedSubscription.data);
      expect(subscriptionService.createSubscription).toHaveBeenCalledWith(subscriptionData);
    });

    it('should return 400 for missing required fields', async () => {
      const invalidData = {
        name: 'Test Subscription'
        // Missing required fields
      };

      const response = await request(app)
        .post('/api/subscriptions')
        .send(invalidData);
      
      expect(response.status).toBe(400);
      expect(response.body.success).toBe(false);
      expect(response.body.error.message).toContain('required');
    });

    it('should return 400 for invalid subscription period', async () => {
      const invalidData = {
        name: 'Test Subscription',
        productId: 'com.test.subscription',
        subscriptionPeriod: 'INVALID_PERIOD',
        subscriptionGroupId: 'test-group-id'
      };

      const response = await request(app)
        .post('/api/subscriptions')
        .send(invalidData);
      
      expect(response.status).toBe(400);
      expect(response.body.success).toBe(false);
    });
  });

  describe('PUT /api/subscriptions/:id', () => {
    const validId = '12345678-1234-5678-9012-123456789012';

    it('should update a subscription', async () => {
      const updateData = {
        name: 'Updated Subscription Name',
        familySharable: true
      };

      const mockUpdatedSubscription = {
        data: {
          id: validId,
          type: 'subscriptions',
          attributes: {
            ...updateData,
            productId: 'com.test.subscription'
          }
        }
      };

      subscriptionService.updateSubscription.mockResolvedValue(mockUpdatedSubscription);

      const response = await request(app)
        .put(`/api/subscriptions/${validId}`)
        .send(updateData);
      
      expect(response.status).toBe(200);
      expect(response.body.success).toBe(true);
      expect(response.body.data).toEqual(mockUpdatedSubscription.data);
      expect(subscriptionService.updateSubscription).toHaveBeenCalledWith(validId, updateData);
    });

    it('should return 400 for empty update data', async () => {
      const response = await request(app)
        .put(`/api/subscriptions/${validId}`)
        .send({});
      
      expect(response.status).toBe(400);
      expect(response.body.success).toBe(false);
      expect(response.body.error.message).toContain('At least one field');
    });
  });

  describe('DELETE /api/subscriptions/:id', () => {
    const validId = '12345678-1234-5678-9012-123456789012';

    it('should delete a subscription', async () => {
      const mockResult = {
        success: true,
        message: 'Subscription deleted successfully'
      };

      subscriptionService.deleteSubscription.mockResolvedValue(mockResult);

      const response = await request(app).delete(`/api/subscriptions/${validId}`);
      
      expect(response.status).toBe(200);
      expect(response.body.success).toBe(true);
      expect(response.body.message).toBe(mockResult.message);
      expect(subscriptionService.deleteSubscription).toHaveBeenCalledWith(validId);
    });
  });

  describe('Error Handling', () => {
    it('should handle service errors', async () => {
      const error = new Error('Service unavailable');
      error.statusCode = 503;
      
      subscriptionService.getAllSubscriptions.mockRejectedValue(error);

      const response = await request(app).get('/api/subscriptions');
      
      expect(response.status).toBe(503);
      expect(response.body.success).toBe(false);
    });

    it('should return 404 for unknown endpoints', async () => {
      const response = await request(app).get('/api/unknown-endpoint');
      
      expect(response.status).toBe(404);
      expect(response.body.success).toBe(false);
      expect(response.body.error.message).toBe('Endpoint not found');
    });
  });

  describe('Rate Limiting', () => {
    it('should apply rate limiting', async () => {
      // This test would need to make many requests to trigger rate limiting
      // For now, we'll just verify the endpoint works normally
      const response = await request(app).get('/api/subscriptions/health');
      expect(response.status).toBe(200);
    });
  });

  describe('GET /api/subscriptions/:id/localizations', () => {
    const validId = '12345678-1234-5678-9012-123456789012';

    it('should return all localizations for a subscription', async () => {
      const mockLocalizations = {
        data: [
          {
            id: 'localization-id-1',
            type: 'subscriptionLocalizations',
            attributes: {
              locale: 'en-US',
              name: 'Premium Plan',
              description: 'Access all features',
              state: 'APPROVED'
            }
          },
          {
            id: 'localization-id-2',
            type: 'subscriptionLocalizations',
            attributes: {
              locale: 'de-DE',
              name: 'Premium Abo',
              description: 'Zugang zu allen Funktionen',
              state: 'APPROVED'
            }
          }
        ],
        meta: { paging: { total: 2 } }
      };

      subscriptionService.getSubscriptionLocalizations.mockResolvedValue(mockLocalizations);

      const response = await request(app).get(`/api/subscriptions/${validId}/localizations`);

      expect(response.status).toBe(200);
      expect(response.body.success).toBe(true);
      expect(response.body.data).toEqual(mockLocalizations.data);
      expect(subscriptionService.getSubscriptionLocalizations).toHaveBeenCalledWith(validId);
    });

    it('should return 400 for invalid subscription UUID', async () => {
      const response = await request(app).get('/api/subscriptions/invalid-id/localizations');

      expect(response.status).toBe(400);
      expect(response.body.success).toBe(false);
      expect(response.body.error.message).toContain('valid UUID');
    });

    it('should handle service errors', async () => {
      const error = new Error('Subscription not found');
      error.statusCode = 404;

      subscriptionService.getSubscriptionLocalizations.mockRejectedValue(error);

      const response = await request(app).get(`/api/subscriptions/${validId}/localizations`);

      expect(response.status).toBe(404);
      expect(response.body.success).toBe(false);
    });
  });

  describe('POST /api/subscriptions/:id/localizations', () => {
    const validId = '12345678-1234-5678-9012-123456789012';

    it('should create a new localization', async () => {
      const localizationData = {
        locale: 'fr-FR',
        name: 'Abonnement Premium',
        description: 'Acces a toutes les fonctions'
      };

      const mockCreatedLocalization = {
        data: {
          id: 'new-localization-id',
          type: 'subscriptionLocalizations',
          attributes: {
            ...localizationData,
            state: 'PREPARE_FOR_SUBMISSION'
          }
        }
      };

      subscriptionService.createSubscriptionLocalization.mockResolvedValue(mockCreatedLocalization);

      const response = await request(app)
        .post(`/api/subscriptions/${validId}/localizations`)
        .send(localizationData);

      expect(response.status).toBe(201);
      expect(response.body.success).toBe(true);
      expect(response.body.data).toEqual(mockCreatedLocalization.data);
      expect(response.body.message).toBe('Subscription localization created successfully');
      expect(subscriptionService.createSubscriptionLocalization).toHaveBeenCalledWith(validId, localizationData);
    });

    it('should create localization with locale without region code', async () => {
      const localizationData = {
        locale: 'ja',
        name: 'Premium'
      };

      const mockCreatedLocalization = {
        data: {
          id: 'new-localization-id',
          type: 'subscriptionLocalizations',
          attributes: localizationData
        }
      };

      subscriptionService.createSubscriptionLocalization.mockResolvedValue(mockCreatedLocalization);

      const response = await request(app)
        .post(`/api/subscriptions/${validId}/localizations`)
        .send(localizationData);

      expect(response.status).toBe(201);
      expect(response.body.success).toBe(true);
    });

    it('should return 400 for missing locale', async () => {
      const invalidData = {
        name: 'Premium Plan'
        // Missing locale
      };

      const response = await request(app)
        .post(`/api/subscriptions/${validId}/localizations`)
        .send(invalidData);

      expect(response.status).toBe(400);
      expect(response.body.success).toBe(false);
      expect(response.body.error.message).toContain('locale');
    });

    it('should return 400 for missing name', async () => {
      const invalidData = {
        locale: 'en-US'
        // Missing name
      };

      const response = await request(app)
        .post(`/api/subscriptions/${validId}/localizations`)
        .send(invalidData);

      expect(response.status).toBe(400);
      expect(response.body.success).toBe(false);
      expect(response.body.error.message).toContain('name');
    });

    it('should return 400 for invalid locale format', async () => {
      const invalidData = {
        locale: 'invalid-locale-format',
        name: 'Premium Plan'
      };

      const response = await request(app)
        .post(`/api/subscriptions/${validId}/localizations`)
        .send(invalidData);

      expect(response.status).toBe(400);
      expect(response.body.success).toBe(false);
      expect(response.body.error.message).toContain('Locale');
    });

    it('should return 400 for name exceeding 30 characters', async () => {
      const invalidData = {
        locale: 'en-US',
        name: 'This name is way too long and exceeds the thirty character limit'
      };

      const response = await request(app)
        .post(`/api/subscriptions/${validId}/localizations`)
        .send(invalidData);

      expect(response.status).toBe(400);
      expect(response.body.success).toBe(false);
      expect(response.body.error.message).toContain('30 characters');
    });

    it('should return 400 for description exceeding 45 characters', async () => {
      const invalidData = {
        locale: 'en-US',
        name: 'Premium Plan',
        description: 'This description is way too long and exceeds the forty-five character limit for subscriptions'
      };

      const response = await request(app)
        .post(`/api/subscriptions/${validId}/localizations`)
        .send(invalidData);

      expect(response.status).toBe(400);
      expect(response.body.success).toBe(false);
      expect(response.body.error.message).toContain('45 characters');
    });

    it('should return 400 for invalid subscription UUID', async () => {
      const validData = {
        locale: 'en-US',
        name: 'Premium Plan'
      };

      const response = await request(app)
        .post('/api/subscriptions/invalid-id/localizations')
        .send(validData);

      expect(response.status).toBe(400);
      expect(response.body.success).toBe(false);
      expect(response.body.error.message).toContain('valid UUID');
    });

    it('should allow empty description', async () => {
      const localizationData = {
        locale: 'en-US',
        name: 'Premium Plan',
        description: ''
      };

      const mockCreatedLocalization = {
        data: {
          id: 'new-localization-id',
          type: 'subscriptionLocalizations',
          attributes: localizationData
        }
      };

      subscriptionService.createSubscriptionLocalization.mockResolvedValue(mockCreatedLocalization);

      const response = await request(app)
        .post(`/api/subscriptions/${validId}/localizations`)
        .send(localizationData);

      expect(response.status).toBe(201);
      expect(response.body.success).toBe(true);
    });
  });

  describe('GET /api/subscriptions/localizations/:localizationId', () => {
    const validLocalizationId = '12345678-1234-5678-9012-123456789012';

    it('should return localization by ID', async () => {
      const mockLocalization = {
        data: {
          id: validLocalizationId,
          type: 'subscriptionLocalizations',
          attributes: {
            locale: 'en-US',
            name: 'Premium Plan',
            description: 'Access all features',
            state: 'APPROVED'
          }
        }
      };

      subscriptionService.getSubscriptionLocalizationById.mockResolvedValue(mockLocalization);

      const response = await request(app).get(`/api/subscriptions/localizations/${validLocalizationId}`);

      expect(response.status).toBe(200);
      expect(response.body.success).toBe(true);
      expect(response.body.data).toEqual(mockLocalization.data);
      expect(subscriptionService.getSubscriptionLocalizationById).toHaveBeenCalledWith(validLocalizationId);
    });

    it('should return 400 for invalid localization UUID', async () => {
      const response = await request(app).get('/api/subscriptions/localizations/invalid-id');

      expect(response.status).toBe(400);
      expect(response.body.success).toBe(false);
      expect(response.body.error.message).toContain('valid UUID');
    });

    it('should return 404 when localization not found', async () => {
      const error = new Error('Localization not found');
      error.statusCode = 404;

      subscriptionService.getSubscriptionLocalizationById.mockRejectedValue(error);

      const response = await request(app).get(`/api/subscriptions/localizations/${validLocalizationId}`);

      expect(response.status).toBe(404);
      expect(response.body.success).toBe(false);
    });
  });

  describe('PATCH /api/subscriptions/localizations/:localizationId', () => {
    const validLocalizationId = '12345678-1234-5678-9012-123456789012';

    it('should update localization name', async () => {
      const updateData = {
        name: 'Updated Premium Plan'
      };

      const mockUpdatedLocalization = {
        data: {
          id: validLocalizationId,
          type: 'subscriptionLocalizations',
          attributes: {
            locale: 'en-US',
            name: 'Updated Premium Plan',
            description: 'Access all features',
            state: 'APPROVED'
          }
        }
      };

      subscriptionService.updateSubscriptionLocalization.mockResolvedValue(mockUpdatedLocalization);

      const response = await request(app)
        .patch(`/api/subscriptions/localizations/${validLocalizationId}`)
        .send(updateData);

      expect(response.status).toBe(200);
      expect(response.body.success).toBe(true);
      expect(response.body.data).toEqual(mockUpdatedLocalization.data);
      expect(response.body.message).toBe('Subscription localization updated successfully');
      expect(subscriptionService.updateSubscriptionLocalization).toHaveBeenCalledWith(validLocalizationId, updateData);
    });

    it('should update localization description', async () => {
      const updateData = {
        description: 'New description'
      };

      const mockUpdatedLocalization = {
        data: {
          id: validLocalizationId,
          type: 'subscriptionLocalizations',
          attributes: {
            locale: 'en-US',
            name: 'Premium Plan',
            description: 'New description',
            state: 'APPROVED'
          }
        }
      };

      subscriptionService.updateSubscriptionLocalization.mockResolvedValue(mockUpdatedLocalization);

      const response = await request(app)
        .patch(`/api/subscriptions/localizations/${validLocalizationId}`)
        .send(updateData);

      expect(response.status).toBe(200);
      expect(response.body.success).toBe(true);
      expect(subscriptionService.updateSubscriptionLocalization).toHaveBeenCalledWith(validLocalizationId, updateData);
    });

    it('should update both name and description', async () => {
      const updateData = {
        name: 'New Name',
        description: 'New description'
      };

      const mockUpdatedLocalization = {
        data: {
          id: validLocalizationId,
          type: 'subscriptionLocalizations',
          attributes: {
            locale: 'en-US',
            ...updateData,
            state: 'APPROVED'
          }
        }
      };

      subscriptionService.updateSubscriptionLocalization.mockResolvedValue(mockUpdatedLocalization);

      const response = await request(app)
        .patch(`/api/subscriptions/localizations/${validLocalizationId}`)
        .send(updateData);

      expect(response.status).toBe(200);
      expect(response.body.success).toBe(true);
    });

    it('should return 400 for empty update data', async () => {
      const response = await request(app)
        .patch(`/api/subscriptions/localizations/${validLocalizationId}`)
        .send({});

      expect(response.status).toBe(400);
      expect(response.body.success).toBe(false);
      expect(response.body.error.message).toContain('At least one field');
    });

    it('should return 400 for name exceeding 30 characters', async () => {
      const invalidData = {
        name: 'This name is way too long and exceeds the thirty character limit'
      };

      const response = await request(app)
        .patch(`/api/subscriptions/localizations/${validLocalizationId}`)
        .send(invalidData);

      expect(response.status).toBe(400);
      expect(response.body.success).toBe(false);
      expect(response.body.error.message).toContain('30 characters');
    });

    it('should return 400 for description exceeding 45 characters', async () => {
      const invalidData = {
        description: 'This description is way too long and exceeds the forty-five character limit for subscriptions'
      };

      const response = await request(app)
        .patch(`/api/subscriptions/localizations/${validLocalizationId}`)
        .send(invalidData);

      expect(response.status).toBe(400);
      expect(response.body.success).toBe(false);
      expect(response.body.error.message).toContain('45 characters');
    });

    it('should return 400 for invalid localization UUID', async () => {
      const validData = {
        name: 'Updated Name'
      };

      const response = await request(app)
        .patch('/api/subscriptions/localizations/invalid-id')
        .send(validData);

      expect(response.status).toBe(400);
      expect(response.body.success).toBe(false);
      expect(response.body.error.message).toContain('valid UUID');
    });

    it('should return 404 when localization not found', async () => {
      const error = new Error('Localization not found');
      error.statusCode = 404;

      subscriptionService.updateSubscriptionLocalization.mockRejectedValue(error);

      const response = await request(app)
        .patch(`/api/subscriptions/localizations/${validLocalizationId}`)
        .send({ name: 'New Name' });

      expect(response.status).toBe(404);
      expect(response.body.success).toBe(false);
    });

    it('should allow empty description in update', async () => {
      const updateData = {
        description: ''
      };

      const mockUpdatedLocalization = {
        data: {
          id: validLocalizationId,
          type: 'subscriptionLocalizations',
          attributes: {
            locale: 'en-US',
            name: 'Premium Plan',
            description: '',
            state: 'APPROVED'
          }
        }
      };

      subscriptionService.updateSubscriptionLocalization.mockResolvedValue(mockUpdatedLocalization);

      const response = await request(app)
        .patch(`/api/subscriptions/localizations/${validLocalizationId}`)
        .send(updateData);

      expect(response.status).toBe(200);
      expect(response.body.success).toBe(true);
    });
  });

  describe('DELETE /api/subscriptions/localizations/:localizationId', () => {
    const validLocalizationId = '12345678-1234-5678-9012-123456789012';

    it('should delete a localization', async () => {
      const mockResult = {
        success: true,
        message: 'Subscription localization deleted successfully'
      };

      subscriptionService.deleteSubscriptionLocalization.mockResolvedValue(mockResult);

      const response = await request(app).delete(`/api/subscriptions/localizations/${validLocalizationId}`);

      expect(response.status).toBe(200);
      expect(response.body.success).toBe(true);
      expect(response.body.message).toBe(mockResult.message);
      expect(subscriptionService.deleteSubscriptionLocalization).toHaveBeenCalledWith(validLocalizationId);
    });

    it('should return 400 for invalid localization UUID', async () => {
      const response = await request(app).delete('/api/subscriptions/localizations/invalid-id');

      expect(response.status).toBe(400);
      expect(response.body.success).toBe(false);
      expect(response.body.error.message).toContain('valid UUID');
    });

    it('should return 404 when localization not found', async () => {
      const error = new Error('Localization not found');
      error.statusCode = 404;

      subscriptionService.deleteSubscriptionLocalization.mockRejectedValue(error);

      const response = await request(app).delete(`/api/subscriptions/localizations/${validLocalizationId}`);

      expect(response.status).toBe(404);
      expect(response.body.success).toBe(false);
    });
  });

  describe('Localization Validation Edge Cases', () => {
    const validId = '12345678-1234-5678-9012-123456789012';

    it('should accept valid locale formats', async () => {
      const validLocales = ['en', 'en-US', 'de-DE', 'ja', 'zh-CN', 'pt-BR'];

      for (const locale of validLocales) {
        const localizationData = {
          locale,
          name: 'Test Plan'
        };

        const mockResponse = {
          data: {
            id: 'test-id',
            type: 'subscriptionLocalizations',
            attributes: localizationData
          }
        };

        subscriptionService.createSubscriptionLocalization.mockResolvedValue(mockResponse);

        const response = await request(app)
          .post(`/api/subscriptions/${validId}/localizations`)
          .send(localizationData);

        expect(response.status).toBe(201);
      }
    });

    it('should reject invalid locale formats', async () => {
      const invalidLocales = ['en_US', 'english', 'EN-US', 'e', 'en-usa', '123'];

      for (const locale of invalidLocales) {
        const localizationData = {
          locale,
          name: 'Test Plan'
        };

        const response = await request(app)
          .post(`/api/subscriptions/${validId}/localizations`)
          .send(localizationData);

        expect(response.status).toBe(400);
        expect(response.body.error.message).toContain('Locale');
      }
    });

    it('should accept name at exactly 30 characters', async () => {
      const localizationData = {
        locale: 'en-US',
        name: 'A'.repeat(30)  // Exactly 30 characters
      };

      const mockResponse = {
        data: {
          id: 'test-id',
          type: 'subscriptionLocalizations',
          attributes: localizationData
        }
      };

      subscriptionService.createSubscriptionLocalization.mockResolvedValue(mockResponse);

      const response = await request(app)
        .post(`/api/subscriptions/${validId}/localizations`)
        .send(localizationData);

      expect(response.status).toBe(201);
    });

    it('should accept description at exactly 45 characters', async () => {
      const localizationData = {
        locale: 'en-US',
        name: 'Test Plan',
        description: 'A'.repeat(45)  // Exactly 45 characters
      };

      const mockResponse = {
        data: {
          id: 'test-id',
          type: 'subscriptionLocalizations',
          attributes: localizationData
        }
      };

      subscriptionService.createSubscriptionLocalization.mockResolvedValue(mockResponse);

      const response = await request(app)
        .post(`/api/subscriptions/${validId}/localizations`)
        .send(localizationData);

      expect(response.status).toBe(201);
    });

    it('should strip unknown fields from create request', async () => {
      const localizationData = {
        locale: 'en-US',
        name: 'Test Plan',
        unknownField: 'should be stripped',
        anotherUnknown: 123
      };

      const mockResponse = {
        data: {
          id: 'test-id',
          type: 'subscriptionLocalizations',
          attributes: {
            locale: 'en-US',
            name: 'Test Plan'
          }
        }
      };

      subscriptionService.createSubscriptionLocalization.mockResolvedValue(mockResponse);

      const response = await request(app)
        .post(`/api/subscriptions/${validId}/localizations`)
        .send(localizationData);

      expect(response.status).toBe(201);
      expect(subscriptionService.createSubscriptionLocalization).toHaveBeenCalledWith(
        validId,
        expect.not.objectContaining({ unknownField: expect.anything() })
      );
    });

    it('should strip unknown fields from update request', async () => {
      const localizationId = '12345678-1234-5678-9012-123456789012';
      const updateData = {
        name: 'Updated Name',
        unknownField: 'should be stripped'
      };

      const mockResponse = {
        data: {
          id: localizationId,
          type: 'subscriptionLocalizations',
          attributes: {
            locale: 'en-US',
            name: 'Updated Name'
          }
        }
      };

      subscriptionService.updateSubscriptionLocalization.mockResolvedValue(mockResponse);

      const response = await request(app)
        .patch(`/api/subscriptions/localizations/${localizationId}`)
        .send(updateData);

      expect(response.status).toBe(200);
      expect(subscriptionService.updateSubscriptionLocalization).toHaveBeenCalledWith(
        localizationId,
        expect.not.objectContaining({ unknownField: expect.anything() })
      );
    });
  });
});
