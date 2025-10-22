require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const { validateConfig } = require('./src/config/appstore');
const { errorHandler } = require('./src/utils/errors');
const logger = require('./src/utils/logger');
const {
  generalLimiter,
  writeLimiter,
  createLimiter,
  validateApiKey,
  validateAppStoreConfig,
  requestLogger,
  corsHeaders
} = require('./src/middleware/auth');

// Import routes
const subscriptionRoutes = require('./src/routes/subscriptions');

const app = express();
const PORT = process.env.PORT || 3000;

// Trust proxy (important for rate limiting behind reverse proxies)
app.set('trust proxy', 1);

// Security middleware
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      scriptSrc: ["'self'"],
      imgSrc: ["'self'", "data:", "https:"],
    },
  },
  hsts: {
    maxAge: 31536000,
    includeSubDomains: true,
    preload: true
  }
}));

// CORS middleware
app.use(cors({
  origin: process.env.CORS_ORIGIN || '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-API-Key'],
  credentials: false
}));

// Request parsing middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Request logging
app.use(requestLogger);

// General rate limiting
app.use(generalLimiter);

// API key validation (optional)
app.use(validateApiKey);

// App Store Connect configuration validation
app.use('/api', validateAppStoreConfig);

// Health check endpoint (before rate limiting)
app.get('/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Server is running',
    timestamp: new Date().toISOString(),
    version: process.env.npm_package_version || '1.0.0'
  });
});

// API routes with specific rate limiting
app.use('/api/subscriptions',
  // Apply write limiter to POST, PUT, DELETE operations
  (req, res, next) => {
    if (['POST', 'PUT', 'DELETE'].includes(req.method)) {
      if (req.method === 'POST' && req.path === '/') {
        // Apply create limiter specifically to subscription creation
        return createLimiter(req, res, next);
      }
      return writeLimiter(req, res, next);
    }
    next();
  },
  subscriptionRoutes
);

// Root endpoint
app.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Apple App Store Connect API Service',
    version: '1.0.0',
    endpoints: {
      health: '/health',
      subscriptions: '/api/subscriptions',
      documentation: '/api/docs' // Future implementation
    }
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    error: {
      message: 'Endpoint not found',
      type: 'NOT_FOUND'
    }
  });
});

// Global error handler
app.use(errorHandler);

// Graceful shutdown
const gracefulShutdown = (signal) => {
  logger.info(`Received ${signal}. Starting graceful shutdown...`);
  
  server.close(() => {
    logger.info('HTTP server closed');
    process.exit(0);
  });

  // Force close after 30 seconds
  setTimeout(() => {
    logger.error('Could not close connections in time, forcefully shutting down');
    process.exit(1);
  }, 30000);
};

// Validate configuration on startup
const initializeApp = async () => {
  try {
    logger.info('Validating App Store Connect configuration...');
    validateConfig();
    logger.info('Configuration validation successful');
    
    // Test authentication service
    const authService = require('./src/services/auth');
    authService.validateConfiguration();
    logger.info('Authentication service initialized successfully');
    
  } catch (error) {
    logger.error('Configuration validation failed:', error);
    
    if (process.env.NODE_ENV === 'production') {
      logger.error('Exiting due to configuration errors in production');
      process.exit(1);
    } else {
      logger.warn('Continuing in development mode despite configuration errors');
    }
  }
};

// Start server
const server = app.listen(PORT, async () => {
  await initializeApp();
  
  logger.info(`Server running on port ${PORT}`, {
    environment: process.env.NODE_ENV || 'development',
    port: PORT,
    nodeVersion: process.version
  });
  
  console.log(`
🚀 App Store Connect API Service
📍 Server: http://localhost:${PORT}
🔍 Health: http://localhost:${PORT}/health
📚 Subscriptions: http://localhost:${PORT}/api/subscriptions
🌍 Environment: ${process.env.NODE_ENV || 'development'}
  `);
});

// Handle uncaught exceptions
process.on('uncaughtException', (error) => {
  logger.error('Uncaught Exception:', error);
  process.exit(1);
});

process.on('unhandledRejection', (reason, promise) => {
  logger.error('Unhandled Rejection at:', promise, 'reason:', reason);
  process.exit(1);
});

// Handle shutdown signals
process.on('SIGTERM', () => gracefulShutdown('SIGTERM'));
process.on('SIGINT', () => gracefulShutdown('SIGINT'));

module.exports = app;
