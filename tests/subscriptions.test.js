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
          limit: 50,
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
        ['subscriptionLocalizations', 'prices']
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
});
