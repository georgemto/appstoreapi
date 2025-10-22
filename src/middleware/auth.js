const rateLimit = require('express-rate-limit');
const { config } = require('../config/appstore');
const { RateLimitError, AuthenticationError } = require('../utils/errors');
const logger = require('../utils/logger');

// Rate limiting middleware
const createRateLimiter = (windowMs, max, message) => {
  return rateLimit({
    windowMs,
    max,
    message: {
      success: false,
      error: {
        message: message || 'Too many requests, please try again later',
        type: 'RATE_LIMIT_EXCEEDED'
      }
    },
    standardHeaders: true,
    legacyHeaders: false,
    handler: (req, res) => {
      logger.warn('Rate limit exceeded', {
        ip: req.ip,
        url: req.url,
        method: req.method,
        userAgent: req.get('User-Agent')
      });
      
      res.status(429).json({
        success: false,
        error: {
          message: 'Rate limit exceeded. Please try again later.',
          type: 'RATE_LIMIT_EXCEEDED'
        }
      });
    }
  });
};

// General API rate limiter
const generalLimiter = createRateLimiter(
  config.rateLimiting.windowMs,
  config.rateLimiting.maxRequests,
  'Too many API requests from this IP, please try again later'
);

// Stricter rate limiter for write operations (POST, PUT, DELETE)
const writeLimiter = createRateLimiter(
  5 * 60 * 1000, // 5 minutes
  20, // 20 requests per 5 minutes
  'Too many write operations from this IP, please try again later'
);

// Very strict limiter for subscription creation
const createLimiter = createRateLimiter(
  15 * 60 * 1000, // 15 minutes
  5, // 5 requests per 15 minutes
  'Too many subscription creation requests, please try again later'
);

// API Key validation middleware (if you want to add your own API key layer)
const validateApiKey = (req, res, next) => {
  const apiKey = req.headers['x-api-key'];
  const expectedApiKey = process.env.API_KEY;

  // Skip API key validation if not configured
  if (!expectedApiKey) {
    return next();
  }

  if (!apiKey) {
    logger.warn('Missing API key', {
      ip: req.ip,
      url: req.url,
      method: req.method
    });
    
    return res.status(401).json({
      success: false,
      error: {
        message: 'API key is required',
        type: 'MISSING_API_KEY'
      }
    });
  }

  if (apiKey !== expectedApiKey) {
    logger.warn('Invalid API key', {
      ip: req.ip,
      url: req.url,
      method: req.method,
      providedKey: apiKey.substring(0, 8) + '...' // Log partial key for debugging
    });
    
    return res.status(401).json({
      success: false,
      error: {
        message: 'Invalid API key',
        type: 'INVALID_API_KEY'
      }
    });
  }

  next();
};

// Middleware to validate App Store Connect configuration
const validateAppStoreConfig = (req, res, next) => {
  try {
    const authService = require('../services/auth');
    authService.validateConfiguration();
    next();
  } catch (error) {
    logger.error('App Store Connect configuration validation failed', {
      error: error.message,
      url: req.url
    });
    
    return res.status(503).json({
      success: false,
      error: {
        message: 'Service configuration error. Please contact administrator.',
        type: 'CONFIGURATION_ERROR'
      }
    });
  }
};

// Request logging middleware
const requestLogger = (req, res, next) => {
  const start = Date.now();
  
  // Log request
  logger.info('Incoming request', {
    method: req.method,
    url: req.url,
    ip: req.ip,
    userAgent: req.get('User-Agent'),
    contentLength: req.get('Content-Length')
  });

  // Log response when request completes
  res.on('finish', () => {
    const duration = Date.now() - start;
    
    logger.info('Request completed', {
      method: req.method,
      url: req.url,
      statusCode: res.statusCode,
      duration: `${duration}ms`,
      ip: req.ip
    });
  });

  next();
};

// CORS headers middleware (if needed for browser requests)
const corsHeaders = (req, res, next) => {
  res.header('Access-Control-Allow-Origin', process.env.CORS_ORIGIN || '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-API-Key');
  res.header('Access-Control-Max-Age', '3600');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }

  next();
};

module.exports = {
  generalLimiter,
  writeLimiter,
  createLimiter,
  validateApiKey,
  validateAppStoreConfig,
  requestLogger,
  corsHeaders
};
