const Joi = require('joi');
const { ValidationError } = require('../utils/errors');

// Subscription validation schemas
const subscriptionCreateSchema = Joi.object({
  name: Joi.string().min(1).max(100).required()
    .messages({
      'string.empty': 'Subscription name is required',
      'string.max': 'Subscription name cannot exceed 100 characters'
    }),
  
  productId: Joi.string().pattern(/^[a-zA-Z0-9._-]+$/).required()
    .messages({
      'string.pattern.base': 'Product ID can only contain letters, numbers, dots, underscores, and hyphens',
      'string.empty': 'Product ID is required'
    }),
  
  subscriptionPeriod: Joi.string().valid(
    'ONE_WEEK', 'ONE_MONTH', 'TWO_MONTHS', 'THREE_MONTHS', 
    'SIX_MONTHS', 'ONE_YEAR'
  ).required()
    .messages({
      'any.only': 'Subscription period must be one of: ONE_WEEK, ONE_MONTH, TWO_MONTHS, THREE_MONTHS, SIX_MONTHS, ONE_YEAR'
    }),
  
  subscriptionGroupId: Joi.string().required()
    .messages({
      'string.empty': 'Subscription group ID is required'
    }),
  
  reviewNote: Joi.string().max(500).optional(),
  familySharable: Joi.boolean().optional()
});

const subscriptionUpdateSchema = Joi.object({
  name: Joi.string().min(1).max(100).optional(),
  reviewNote: Joi.string().max(500).optional(),
  familySharable: Joi.boolean().optional()
}).min(1)
  .messages({
    'object.min': 'At least one field must be provided for update'
  });

const subscriptionQuerySchema = Joi.object({
  appId: Joi.string().optional(),
  subscriptionGroupId: Joi.string().optional(),
  state: Joi.string().valid('MISSING_METADATA', 'READY_FOR_REVIEW', 'WAITING_FOR_REVIEW', 'IN_REVIEW', 'DEVELOPER_ACTION_NEEDED', 'PENDING_DEVELOPER_RELEASE', 'PROCESSING_FOR_APP_STORE', 'PENDING_APPLE_RELEASE', 'READY_FOR_SALE', 'REMOVED_FROM_SALE').optional(),
  includes: Joi.array().items(Joi.string()).optional(),
  limit: Joi.number().integer().min(1).max(200).optional()
});

const pricingUpdateSchema = Joi.object({
  prices: Joi.array().items(
    Joi.object({
      territory: Joi.string().required(),
      startDate: Joi.date().iso().required(),
      endDate: Joi.date().iso().optional(),
      preserveCurrentPrice: Joi.boolean().optional()
    })
  ).min(1).required()
});

// Middleware function to validate request data
const validate = (schema, property = 'body') => {
  return (req, res, next) => {
    const { error, value } = schema.validate(req[property], {
      abortEarly: false,
      stripUnknown: true
    });

    if (error) {
      const errorMessage = error.details.map(detail => detail.message).join(', ');
      return next(new ValidationError(errorMessage));
    }

    // Replace the property with the validated and sanitized value
    req[property] = value;
    next();
  };
};

// Middleware to validate subscription ID parameter
const validateSubscriptionId = (req, res, next) => {
  const { id } = req.params;
  
  if (!id || typeof id !== 'string' || id.trim() === '') {
    return next(new ValidationError('Valid subscription ID is required'));
  }

  // Basic UUID format validation (Apple uses UUIDs for resource IDs)
  const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
  if (!uuidRegex.test(id)) {
    return next(new ValidationError('Subscription ID must be a valid UUID'));
  }

  next();
};

// Middleware to validate pagination parameters
const validatePagination = (req, res, next) => {
  const { limit, offset } = req.query;

  if (limit !== undefined) {
    const limitNum = parseInt(limit, 10);
    if (isNaN(limitNum) || limitNum < 1 || limitNum > 200) {
      return next(new ValidationError('Limit must be a number between 1 and 200'));
    }
    req.query.limit = limitNum;
  }

  if (offset !== undefined) {
    const offsetNum = parseInt(offset, 10);
    if (isNaN(offsetNum) || offsetNum < 0) {
      return next(new ValidationError('Offset must be a non-negative number'));
    }
    req.query.offset = offsetNum;
  }

  next();
};

// Middleware to sanitize and validate includes parameter
const validateIncludes = (allowedIncludes = []) => {
  return (req, res, next) => {
    const { includes } = req.query;

    if (includes) {
      let includeArray;
      
      if (typeof includes === 'string') {
        includeArray = includes.split(',').map(item => item.trim());
      } else if (Array.isArray(includes)) {
        includeArray = includes;
      } else {
        return next(new ValidationError('Includes must be a string or array'));
      }

      // Validate that all includes are allowed
      const invalidIncludes = includeArray.filter(include => !allowedIncludes.includes(include));
      if (invalidIncludes.length > 0) {
        return next(new ValidationError(
          `Invalid includes: ${invalidIncludes.join(', ')}. Allowed values: ${allowedIncludes.join(', ')}`
        ));
      }

      req.query.includes = includeArray;
    }

    next();
  };
};

module.exports = {
  // Validation schemas
  subscriptionCreateSchema,
  subscriptionUpdateSchema,
  subscriptionQuerySchema,
  pricingUpdateSchema,

  // Validation middleware
  validate,
  validateSubscriptionId,
  validatePagination,
  validateIncludes
};
