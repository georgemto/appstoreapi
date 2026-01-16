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

// Promotional Offer validation schemas
const promotionalOfferCreateSchema = Joi.object({
  subscriptionId: Joi.string().uuid().required()
    .messages({
      'string.guid': 'Subscription ID must be a valid UUID',
      'string.empty': 'Subscription ID is required'
    }),
  
  name: Joi.string().min(1).max(100).required()
    .messages({
      'string.empty': 'Offer name is required',
      'string.max': 'Offer name cannot exceed 100 characters'
    }),
  
  offerCode: Joi.string().uppercase().pattern(/^[A-Z0-9_-]+$/).min(3).max(25).optional()
    .messages({
      'string.pattern.base': 'Offer code can only contain uppercase letters, numbers, underscores, and hyphens',
      'string.min': 'Offer code must be at least 3 characters',
      'string.max': 'Offer code cannot exceed 25 characters'
    }),
  
  offerCodePrefix: Joi.string().uppercase().alphanum().min(2).max(15).optional()
    .messages({
      'string.pattern.base': 'Offer code prefix can only contain uppercase letters and numbers',
      'string.min': 'Offer code prefix must be at least 2 characters',
      'string.max': 'Offer code prefix cannot exceed 15 characters'
    }),
  
  duration: Joi.string().valid(
    'THREE_DAYS', 'ONE_WEEK', 'TWO_WEEKS', 'ONE_MONTH',
    'TWO_MONTHS', 'THREE_MONTHS', 'SIX_MONTHS', 'ONE_YEAR'
  ).required()
    .messages({
      'any.only': 'Duration must be one of: THREE_DAYS, ONE_WEEK, TWO_WEEKS, ONE_MONTH, TWO_MONTHS, THREE_MONTHS, SIX_MONTHS, ONE_YEAR'
    }),
  
  offerMode: Joi.string().valid('PAY_AS_YOU_GO', 'PAY_UP_FRONT', 'FREE_TRIAL').required()
    .messages({
      'any.only': 'Offer mode must be one of: PAY_AS_YOU_GO, PAY_UP_FRONT, FREE_TRIAL'
    }),
  
  numberOfPeriods: Joi.number().integer().min(1).max(12).required()
    .messages({
      'number.min': 'Number of periods must be at least 1',
      'number.max': 'Number of periods cannot exceed 12',
      'number.base': 'Number of periods must be a number'
    })
});

const promotionalOfferUpdateSchema = Joi.object({
  name: Joi.string().min(1).max(100).optional()
    .messages({
      'string.empty': 'Offer name cannot be empty',
      'string.max': 'Offer name cannot exceed 100 characters'
    })
}).min(1)
  .messages({
    'object.min': 'At least one field must be provided for update'
  });

const promotionalOfferBulkCreateSchema = Joi.object({
  bundleId: Joi.string().pattern(/^[a-zA-Z0-9.-]+$/).required()
    .messages({
      'string.pattern.base': 'Bundle ID format is invalid',
      'string.empty': 'Bundle ID is required'
    }),
  
  referenceName: Joi.string().min(1).max(64).required()
    .messages({
      'string.empty': 'Reference name is required for bulk creation',
      'string.max': 'Reference name cannot exceed 64 characters'
    }),
  
  offerTemplate: Joi.object({
    name: Joi.string().min(1).max(100).required()
      .messages({
        'string.empty': 'Offer name is required',
        'string.max': 'Offer name cannot exceed 100 characters'
      }),
    
    offerCodePrefix: Joi.string().uppercase().pattern(/^[A-Z0-9]+$/).min(2).max(15).optional()
      .messages({
        'string.pattern.base': 'Offer code prefix can only contain uppercase letters and numbers',
        'string.min': 'Offer code prefix must be at least 2 characters',
        'string.max': 'Offer code prefix cannot exceed 15 characters'
      }),
    
    duration: Joi.string().valid(
      'THREE_DAYS', 'ONE_WEEK', 'TWO_WEEKS', 'ONE_MONTH',
      'TWO_MONTHS', 'THREE_MONTHS', 'SIX_MONTHS', 'ONE_YEAR'
    ).required()
      .messages({
        'any.only': 'Duration must be one of: THREE_DAYS, ONE_WEEK, TWO_WEEKS, ONE_MONTH, TWO_MONTHS, THREE_MONTHS, SIX_MONTHS, ONE_YEAR'
      }),
    
    offerMode: Joi.string().valid('PAY_AS_YOU_GO', 'PAY_UP_FRONT', 'FREE_TRIAL').required()
      .messages({
        'any.only': 'Offer mode must be one of: PAY_AS_YOU_GO, PAY_UP_FRONT, FREE_TRIAL'
      }),
    
    numberOfPeriods: Joi.number().integer().min(1).max(12).required()
      .messages({
        'number.min': 'Number of periods must be at least 1',
        'number.max': 'Number of periods cannot exceed 12',
        'number.base': 'Number of periods must be a number'
      })
  }).required()
    .messages({
      'object.base': 'Offer template is required'
    })
});

const promotionalOfferBundleQuerySchema = Joi.object({
  referenceName: Joi.string().min(1).max(64).optional(),
  limit: Joi.number().integer().min(1).max(200).optional(),
  includes: Joi.array().items(Joi.string()).optional()
});

// Introductory Offer validation schemas
const introductoryOfferCreateSchema = Joi.object({
  subscriptionId: Joi.string().pattern(/^[0-9]+$/).required()
    .messages({
      'string.pattern.base': 'Subscription ID must be a numeric string',
      'string.empty': 'Subscription ID is required'
    }),
  
  territory: Joi.string().min(2).max(3).required()
    .messages({
      'string.empty': 'Territory is required',
      'string.min': 'Territory code must be at least 2 characters',
      'string.max': 'Territory code cannot exceed 3 characters'
    }),
  
  duration: Joi.string().valid(
    'THREE_DAYS', 'ONE_WEEK', 'TWO_WEEKS', 'ONE_MONTH',
    'TWO_MONTHS', 'THREE_MONTHS', 'SIX_MONTHS', 'ONE_YEAR'
  ).required()
    .messages({
      'any.only': 'Duration must be one of: THREE_DAYS, ONE_WEEK, TWO_WEEKS, ONE_MONTH, TWO_MONTHS, THREE_MONTHS, SIX_MONTHS, ONE_YEAR'
    }),
  
  offerMode: Joi.string().valid('PAY_AS_YOU_GO', 'PAY_UP_FRONT', 'FREE_TRIAL').required()
    .messages({
      'any.only': 'Offer mode must be one of: PAY_AS_YOU_GO, PAY_UP_FRONT, FREE_TRIAL'
    }),
  
  numberOfPeriods: Joi.number().integer().min(1).max(12).required()
    .messages({
      'number.min': 'Number of periods must be at least 1',
      'number.max': 'Number of periods cannot exceed 12',
      'number.base': 'Number of periods must be a number'
    }),
  
  startDate: Joi.date().iso().optional()
    .messages({
      'date.format': 'Start date must be in ISO 8601 format'
    }),
  
  endDate: Joi.date().iso().optional()
    .messages({
      'date.format': 'End date must be in ISO 8601 format'
    }),
  
  subscriptionPricePoint: Joi.string().optional()
    .messages({
      'string.empty': 'Subscription price point cannot be empty if provided'
    })
});

const introductoryOfferUpdateSchema = Joi.object({
  startDate: Joi.date().iso().allow(null).optional()
    .messages({
      'date.format': 'Start date must be in ISO 8601 format'
    }),
  
  endDate: Joi.date().iso().allow(null).optional()
    .messages({
      'date.format': 'End date must be in ISO 8601 format'
    })
}).min(1)
  .messages({
    'object.min': 'At least one field must be provided for update'
  });

const introductoryOfferBulkCreateSchema = Joi.object({
  bundleId: Joi.string().pattern(/^[a-zA-Z0-9.-]+$/).required()
    .messages({
      'string.pattern.base': 'Bundle ID format is invalid',
      'string.empty': 'Bundle ID is required'
    }),
  
  referenceName: Joi.string().min(1).max(64).required()
    .messages({
      'string.empty': 'Reference name is required for bulk creation',
      'string.max': 'Reference name cannot exceed 64 characters'
    }),
  
  offerTemplate: Joi.object({
    territories: Joi.array().items(Joi.string().min(2).max(3)).min(1).required()
      .messages({
        'array.min': 'At least one territory is required',
        'array.base': 'Territories must be an array of territory codes'
      }),
    
    duration: Joi.string().valid(
      'THREE_DAYS', 'ONE_WEEK', 'TWO_WEEKS', 'ONE_MONTH',
      'TWO_MONTHS', 'THREE_MONTHS', 'SIX_MONTHS', 'ONE_YEAR'
    ).required()
      .messages({
        'any.only': 'Duration must be one of: THREE_DAYS, ONE_WEEK, TWO_WEEKS, ONE_MONTH, TWO_MONTHS, THREE_MONTHS, SIX_MONTHS, ONE_YEAR'
      }),
    
    offerMode: Joi.string().valid('PAY_AS_YOU_GO', 'PAY_UP_FRONT', 'FREE_TRIAL').required()
      .messages({
        'any.only': 'Offer mode must be one of: PAY_AS_YOU_GO, PAY_UP_FRONT, FREE_TRIAL'
      }),
    
    numberOfPeriods: Joi.number().integer().min(1).max(12).required()
      .messages({
        'number.min': 'Number of periods must be at least 1',
        'number.max': 'Number of periods cannot exceed 12',
        'number.base': 'Number of periods must be a number'
      }),
    
    startDate: Joi.date().iso().optional(),
    endDate: Joi.date().iso().optional(),
    subscriptionPricePoint: Joi.string().optional()
  }).required()
    .messages({
      'object.base': 'Offer template is required'
    })
});

const introductoryOfferBundleQuerySchema = Joi.object({
  referenceName: Joi.string().min(1).max(64).optional(),
  limit: Joi.number().integer().min(1).max(200).optional(),
  includes: Joi.array().items(Joi.string()).optional()
});

// Middleware function to validate request data
const validate = (schema, property = 'body') => {
  return (req, res, next) => {
    const { error, value } = schema.validate(req[property], {
      abortEarly: false,
      stripUnknown: true,
      convert: true  // Enable type coercion (e.g., string "50" -> number 50)
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

// Middleware to validate promotional offer ID parameter
const validatePromotionalOfferId = (req, res, next) => {
  const { id } = req.params;
  
  if (!id || typeof id !== 'string' || id.trim() === '') {
    return next(new ValidationError('Valid promotional offer ID is required'));
  }

  // Basic UUID format validation (Apple uses UUIDs for resource IDs)
  const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
  if (!uuidRegex.test(id)) {
    return next(new ValidationError('Promotional offer ID must be a valid UUID'));
  }

  next();
};

// Middleware to validate introductory offer ID parameter
const validateIntroductoryOfferId = (req, res, next) => {
  const { id } = req.params;
  
  if (!id || typeof id !== 'string' || id.trim() === '') {
    return next(new ValidationError('Valid introductory offer ID is required'));
  }

  // Basic UUID format validation (Apple uses UUIDs for resource IDs)
  const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
  if (!uuidRegex.test(id)) {
    return next(new ValidationError('Introductory offer ID must be a valid UUID'));
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
  promotionalOfferCreateSchema,
  promotionalOfferUpdateSchema,
  promotionalOfferBulkCreateSchema,
  promotionalOfferBundleQuerySchema,
  introductoryOfferCreateSchema,
  introductoryOfferUpdateSchema,
  introductoryOfferBulkCreateSchema,
  introductoryOfferBundleQuerySchema,

  // Validation middleware
  validate,
  validateSubscriptionId,
  validatePromotionalOfferId,
  validateIntroductoryOfferId,
  validatePagination,
  validateIncludes
};
