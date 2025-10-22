const axios = require('axios');
const { config } = require('../config/appstore');
const authService = require('./auth');
const { AppleAPIError, RateLimitError } = require('../utils/errors');
const logger = require('../utils/logger');

class AppStoreConnectClient {
  constructor() {
    this.baseURL = config.apiBaseUrl;
    this.retryCount = 3;
    this.retryDelay = 1000; // 1 second
  }

  async makeRequest(method, endpoint, data = null, params = null) {
    let lastError;
    
    for (let attempt = 1; attempt <= this.retryCount; attempt++) {
      try {
        const headers = authService.getAuthHeaders();
        
        const requestConfig = {
          method,
          url: `${this.baseURL}${endpoint}`,
          headers,
          timeout: 30000, // 30 seconds
        };

        if (data) {
          requestConfig.data = data;
        }

        if (params) {
          requestConfig.params = params;
        }

        logger.info(`Making ${method} request to ${endpoint}`, { attempt, params });

        const response = await axios(requestConfig);
        
        logger.info(`Request successful`, { 
          status: response.status, 
          endpoint,
          dataLength: response.data?.data?.length 
        });

        return response.data;
      } catch (error) {
        lastError = error;
        
        if (error.response) {
          const { status, data } = error.response;
          
          logger.error(`API request failed`, {
            status,
            endpoint,
            attempt,
            error: data
          });

          // Handle specific error cases
          if (status === 429) {
            const retryAfter = error.response.headers['retry-after'];
            const waitTime = retryAfter ? parseInt(retryAfter) * 1000 : this.retryDelay * attempt;
            
            if (attempt < this.retryCount) {
              logger.warn(`Rate limited. Retrying after ${waitTime}ms`, { attempt });
              await this.sleep(waitTime);
              continue;
            } else {
              throw new RateLimitError('Rate limit exceeded. Please try again later.');
            }
          }

          // Don't retry for client errors (4xx) except rate limiting
          if (status >= 400 && status < 500 && status !== 429) {
            throw new AppleAPIError(
              data?.errors?.[0]?.detail || 'Client error',
              data?.errors?.[0]?.code,
              status
            );
          }

          // Retry for server errors (5xx)
          if (status >= 500 && attempt < this.retryCount) {
            logger.warn(`Server error. Retrying attempt ${attempt + 1}`, { status });
            await this.sleep(this.retryDelay * attempt);
            continue;
          }

          throw new AppleAPIError(
            data?.errors?.[0]?.detail || 'Server error',
            data?.errors?.[0]?.code,
            status
          );
        } else if (error.code === 'ECONNABORTED') {
          logger.error(`Request timeout on attempt ${attempt}`, { endpoint });
          if (attempt < this.retryCount) {
            await this.sleep(this.retryDelay * attempt);
            continue;
          }
          throw new AppleAPIError('Request timeout');
        } else {
          logger.error(`Network error on attempt ${attempt}`, { 
            endpoint, 
            error: error.message 
          });
          if (attempt < this.retryCount) {
            await this.sleep(this.retryDelay * attempt);
            continue;
          }
          throw new AppleAPIError(`Network error: ${error.message}`);
        }
      }
    }

    throw lastError;
  }

  async get(endpoint, params = null) {
    return this.makeRequest('GET', endpoint, null, params);
  }

  async post(endpoint, data) {
    return this.makeRequest('POST', endpoint, data);
  }

  async patch(endpoint, data) {
    return this.makeRequest('PATCH', endpoint, data);
  }

  async delete(endpoint) {
    return this.makeRequest('DELETE', endpoint);
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  // Helper method to build query parameters
  buildParams(filters = {}, includes = [], fields = {}, sort = null, limit = null) {
    const params = {};

    // Add filters
    if (Object.keys(filters).length > 0) {
      Object.entries(filters).forEach(([key, value]) => {
        params[`filter[${key}]`] = value;
      });
    }

    // Add includes
    if (includes.length > 0) {
      params.include = includes.join(',');
    }

    // Add fields
    if (Object.keys(fields).length > 0) {
      Object.entries(fields).forEach(([resource, fieldList]) => {
        params[`fields[${resource}]`] = fieldList.join(',');
      });
    }

    // Add sort
    if (sort) {
      params.sort = sort;
    }

    // Add limit
    if (limit) {
      params.limit = limit;
    }

    return params;
  }
}

// Export singleton instance
const appStoreClient = new AppStoreConnectClient();
module.exports = appStoreClient;
