class AppStoreConnectError extends Error {
  constructor(message, statusCode = 500, isOperational = true, stack = '') {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = isOperational;
    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

class ValidationError extends AppStoreConnectError {
  constructor(message) {
    super(message, 400);
  }
}

class AuthenticationError extends AppStoreConnectError {
  constructor(message = 'Authentication failed') {
    super(message, 401);
  }
}

class AuthorizationError extends AppStoreConnectError {
  constructor(message = 'Insufficient permissions') {
    super(message, 403);
  }
}

class NotFoundError extends AppStoreConnectError {
  constructor(message = 'Resource not found') {
    super(message, 404);
  }
}

class ConflictError extends AppStoreConnectError {
  constructor(message = 'Resource conflict') {
    super(message, 409);
  }
}

class RateLimitError extends AppStoreConnectError {
  constructor(message = 'Rate limit exceeded') {
    super(message, 429);
  }
}

class AppleAPIError extends AppStoreConnectError {
  constructor(message, appleErrorCode, statusCode = 500) {
    super(message, statusCode);
    this.appleErrorCode = appleErrorCode;
  }
}

const handleAsyncError = (fn) => {
  return (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
};

const errorHandler = (err, req, res, next) => {
  const logger = require('./logger');
  
  // Log error
  logger.error({
    message: err.message,
    stack: err.stack,
    url: req.url,
    method: req.method,
    ip: req.ip,
    statusCode: err.statusCode
  });

  // Default error values
  let statusCode = err.statusCode || 500;
  let message = err.message || 'Internal server error';

  // Handle specific error types
  if (err.name === 'ValidationError') {
    statusCode = 400;
    message = err.message;
  } else if (err.name === 'CastError') {
    statusCode = 400;
    message = 'Invalid resource ID';
  } else if (err.code === 11000) {
    statusCode = 409;
    message = 'Duplicate resource';
  }

  // Don't leak error details in production
  if (process.env.NODE_ENV === 'production' && !err.isOperational) {
    message = 'Something went wrong';
  }

  res.status(statusCode).json({
    success: false,
    error: {
      message,
      ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
    }
  });
};

module.exports = {
  AppStoreConnectError,
  ValidationError,
  AuthenticationError,
  AuthorizationError,
  NotFoundError,
  ConflictError,
  RateLimitError,
  AppleAPIError,
  handleAsyncError,
  errorHandler
};
