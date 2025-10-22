const jwt = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');
const { config } = require('../config/appstore');
const { AuthenticationError } = require('../utils/errors');
const logger = require('../utils/logger');

class AppStoreAuthService {
  constructor() {
    this.token = null;
    this.tokenExpiry = null;
    this.privateKey = null;
    this.loadPrivateKey();
  }

  loadPrivateKey() {
    try {
      if (!config.privateKeyPath) {
        throw new AuthenticationError('Private key path not configured');
      }

      const keyPath = path.resolve(config.privateKeyPath);
      if (!fs.existsSync(keyPath)) {
        throw new AuthenticationError(`Private key file not found at: ${keyPath}`);
      }

      this.privateKey = fs.readFileSync(keyPath, 'utf8');
      logger.info('Private key loaded successfully');
    } catch (error) {
      logger.error('Failed to load private key:', error);
      throw new AuthenticationError(`Failed to load private key: ${error.message}`);
    }
  }

  generateToken() {
    try {
      if (!this.privateKey) {
        throw new AuthenticationError('Private key not loaded');
      }

      const now = Math.floor(Date.now() / 1000);
      const expirationTime = now + config.tokenExpiration;

      const payload = {
        iss: config.issuerId,
        iat: now,
        exp: expirationTime,
        aud: 'appstoreconnect-v1'
      };

      const token = jwt.sign(payload, this.privateKey, {
        algorithm: 'ES256',
        keyid: config.keyId
      });

      this.token = token;
      this.tokenExpiry = expirationTime * 1000; // Convert to milliseconds

      logger.info('JWT token generated successfully');
      return token;
    } catch (error) {
      logger.error('Failed to generate JWT token:', error);
      throw new AuthenticationError(`Failed to generate token: ${error.message}`);
    }
  }

  getValidToken() {
    const now = Date.now();
    
    // Generate new token if current one doesn't exist or is about to expire (5 minutes buffer)
    if (!this.token || !this.tokenExpiry || (this.tokenExpiry - now) < (5 * 60 * 1000)) {
      logger.info('Generating new JWT token');
      return this.generateToken();
    }

    return this.token;
  }

  getAuthHeaders() {
    const token = this.getValidToken();
    return {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    };
  }

  validateConfiguration() {
    const requiredFields = {
      teamId: config.teamId,
      keyId: config.keyId,
      issuerId: config.issuerId,
      privateKeyPath: config.privateKeyPath
    };

    const missingFields = Object.entries(requiredFields)
      .filter(([key, value]) => !value)
      .map(([key]) => key);

    if (missingFields.length > 0) {
      throw new AuthenticationError(
        `Missing required configuration fields: ${missingFields.join(', ')}`
      );
    }

    return true;
  }
}

// Export singleton instance
const authService = new AppStoreAuthService();
module.exports = authService;
