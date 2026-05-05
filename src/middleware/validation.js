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
      }),

    nameMatch: Joi.string().min(1).max(100).optional()
      .messages({
        'string.max': 'Name filter cannot exceed 100 characters'
      }),

    planPeriodFilter: Joi.array().items(
      Joi.string().valid(
        'THREE_DAYS', 'ONE_WEEK', 'TWO_WEEKS', 'ONE_MONTH',
        'TWO_MONTHS', 'THREE_MONTHS', 'SIX_MONTHS', 'ONE_YEAR'
      )
    ).min(1).optional()
      .messages({
        'array.min': 'planPeriodFilter must contain at least one value',
        'any.only': 'planPeriodFilter values must be one of: THREE_DAYS, ONE_WEEK, TWO_WEEKS, ONE_MONTH, TWO_MONTHS, THREE_MONTHS, SIX_MONTHS, ONE_YEAR'
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
    subscriptionPricePoint: Joi.string().optional(),

    nameMatch: Joi.string().min(1).max(100).optional()
      .messages({
        'string.max': 'Name filter cannot exceed 100 characters'
      }),

    planPeriodFilter: Joi.array().items(
      Joi.string().valid(
        'THREE_DAYS', 'ONE_WEEK', 'TWO_WEEKS', 'ONE_MONTH',
        'TWO_MONTHS', 'THREE_MONTHS', 'SIX_MONTHS', 'ONE_YEAR'
      )
    ).min(1).optional()
      .messages({
        'array.min': 'planPeriodFilter must contain at least one value',
        'any.only': 'planPeriodFilter values must be one of: THREE_DAYS, ONE_WEEK, TWO_WEEKS, ONE_MONTH, TWO_MONTHS, THREE_MONTHS, SIX_MONTHS, ONE_YEAR'
      })
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

// Android Offer validation schemas
const androidOfferPhaseSchema = Joi.object({
  // Support both iOS-style offerMode and Google Play phaseType
  offerMode: Joi.string().valid('FREE_TRIAL', 'PAY_UP_FRONT', 'PAY_AS_YOU_GO').optional(),
  phaseType: Joi.string().valid(
    'SUBSCRIPTION_OFFER_PHASE_TYPE_FREE',
    'SUBSCRIPTION_OFFER_PHASE_TYPE_SINGLE_PAYMENT',
    'SUBSCRIPTION_OFFER_PHASE_TYPE_RECURRING_PAYMENT',
    'FREE',
    'SINGLE_PAYMENT',
    'DISCOUNTED_RECURRING_PAYMENT'
  ).optional(),
  
  // Duration in iOS format or ISO 8601
  duration: Joi.string().valid(
    'ONE_WEEK', 'TWO_WEEKS', 'ONE_MONTH', 'TWO_MONTHS', 'THREE_MONTHS', 'SIX_MONTHS', 'ONE_YEAR',
    'P1W', 'P2W', 'P1M', 'P2M', 'P3M', 'P6M', 'P1Y'
  ).required()
    .messages({
      'any.only': 'Duration must be one of: ONE_WEEK, TWO_WEEKS, ONE_MONTH, TWO_MONTHS, THREE_MONTHS, SIX_MONTHS, ONE_YEAR (or ISO 8601: P1W, P2W, P1M, P2M, P3M, P6M, P1Y)'
    }),
  
  recurrenceCount: Joi.number().integer().min(1).max(52).optional()
    .messages({
      'number.min': 'Recurrence count must be at least 1',
      'number.max': 'Recurrence count cannot exceed 52'
    }),
  
  // Price configuration for paid phases
  price: Joi.object({
    units: Joi.string().pattern(/^\d+$/).optional(),
    nanos: Joi.number().integer().min(0).max(999999999).optional(),
    currencyCode: Joi.string().length(3).optional()
  }).optional(),
  
  pricePercentageDiscount: Joi.number().min(1).max(99).optional()
    .messages({
      'number.min': 'Price percentage discount must be at least 1%',
      'number.max': 'Price percentage discount cannot exceed 99%'
    })
}).or('offerMode', 'phaseType')
  .messages({
    'object.missing': 'Either offerMode or phaseType is required for each phase'
  });

const androidOfferCreateSchema = Joi.object({
  packageName: Joi.string().pattern(/^[a-zA-Z][a-zA-Z0-9._]*$/).required()
    .messages({
      'string.pattern.base': 'Package name must be a valid Android package name',
      'string.empty': 'Package name is required'
    }),
  
  productId: Joi.string().pattern(/^[a-zA-Z0-9._-]+$/).required()
    .messages({
      'string.pattern.base': 'Product ID can only contain letters, numbers, dots, underscores, and hyphens',
      'string.empty': 'Product ID is required'
    }),
  
  basePlanId: Joi.string().pattern(/^[a-zA-Z0-9_-]+$/).required()
    .messages({
      'string.pattern.base': 'Base plan ID can only contain letters, numbers, underscores, and hyphens',
      'string.empty': 'Base plan ID is required'
    }),
  
  offerId: Joi.string().pattern(/^[a-zA-Z0-9_-]+$/).min(1).max(63).required()
    .messages({
      'string.pattern.base': 'Offer ID can only contain letters, numbers, underscores, and hyphens',
      'string.empty': 'Offer ID is required',
      'string.max': 'Offer ID cannot exceed 63 characters'
    }),
  
  phases: Joi.array().items(androidOfferPhaseSchema).min(1).max(2).required()
    .messages({
      'array.min': 'At least one phase is required',
      'array.max': 'Maximum of 2 phases allowed',
      'array.base': 'Phases must be an array'
    }),
  
  offerTags: Joi.array().items(Joi.string().max(40)).max(20).optional()
    .messages({
      'array.max': 'Maximum of 20 offer tags allowed'
    }),
  
  targetNewCustomers: Joi.boolean().optional(),
  
  targeting: Joi.object({
    acquisitionRule: Joi.object({
      scope: Joi.object({
        thisSubscription: Joi.object().optional(),
        anySubscriptionInApp: Joi.object().optional(),
        specificSubscriptionInApp: Joi.string().optional()
      }).optional()
    }).optional()
  }).optional(),
  
  regionalConfigs: Joi.array().items(
    Joi.object({
      regionCode: Joi.string().length(2).required(),
      newSubscriberAvailability: Joi.boolean().optional(),
      price: Joi.object({
        currencyCode: Joi.string().length(3).required(),
        units: Joi.string().pattern(/^\d+$/).required(),
        nanos: Joi.number().integer().min(0).max(999999999).optional()
      }).optional()
    })
  ).optional()
});

const androidOfferUpdateSchema = Joi.object({
  phases: Joi.array().items(androidOfferPhaseSchema).min(1).max(2).optional(),
  
  offerTags: Joi.array().items(Joi.string().max(40)).max(20).optional(),
  
  targeting: Joi.object({
    acquisitionRule: Joi.object({
      scope: Joi.object({
        thisSubscription: Joi.object().optional(),
        anySubscriptionInApp: Joi.object().optional(),
        specificSubscriptionInApp: Joi.string().optional()
      }).optional()
    }).optional()
  }).optional(),
  
  regionalConfigs: Joi.array().items(
    Joi.object({
      regionCode: Joi.string().length(2).required(),
      newSubscriberAvailability: Joi.boolean().optional(),
      price: Joi.object({
        currencyCode: Joi.string().length(3).required(),
        units: Joi.string().pattern(/^\d+$/).required(),
        nanos: Joi.number().integer().min(0).max(999999999).optional()
      }).optional()
    })
  ).optional()
}).min(1)
  .messages({
    'object.min': 'At least one field must be provided for update'
  });

const androidOfferBulkCreateSchema = Joi.object({
  packageName: Joi.string().pattern(/^[a-zA-Z][a-zA-Z0-9._]*$/).required()
    .messages({
      'string.pattern.base': 'Package name must be a valid Android package name',
      'string.empty': 'Package name is required'
    }),
  
  offerTemplate: Joi.object({
    offerId: Joi.string().pattern(/^[a-zA-Z0-9_-]+$/).min(1).max(63).required()
      .messages({
        'string.pattern.base': 'Offer ID can only contain letters, numbers, underscores, and hyphens',
        'string.empty': 'Offer ID is required'
      }),
    
    phases: Joi.array().items(androidOfferPhaseSchema).min(1).max(2).required()
      .messages({
        'array.min': 'At least one phase is required',
        'array.max': 'Maximum of 2 phases allowed'
      }),
    
    offerTags: Joi.array().items(Joi.string().max(40)).max(20).optional(),
    
    targetNewCustomers: Joi.boolean().optional(),
    
    targeting: Joi.object({
      acquisitionRule: Joi.object({
        scope: Joi.object({
          thisSubscription: Joi.object().optional(),
          anySubscriptionInApp: Joi.object().optional(),
          specificSubscriptionInApp: Joi.string().optional()
        }).optional()
      }).optional()
    }).optional(),
    
    // Optional filters for which subscriptions/base plans to target
    productIds: Joi.array().items(Joi.string()).optional(),
    basePlanIds: Joi.array().items(Joi.string()).optional(),
    basePlanPeriods: Joi.array().items(
      Joi.string().pattern(/^P(\d+W|\d+M|\d+Y|\d+D)$/)
    ).min(1).optional()
      .messages({
        'string.pattern.base': 'basePlanPeriods entries must be ISO 8601 durations (e.g. P1W, P1M, P1Y)',
        'array.min': 'basePlanPeriods must contain at least one value'
      })
  }).required()
    .messages({
      'object.base': 'Offer template is required'
    })
});

const androidOfferPackageQuerySchema = Joi.object({
  productId: Joi.string().optional(),
  basePlanId: Joi.string().optional(),
  limit: Joi.number().integer().min(1).max(200).optional()
});

// Subscription Localization validation schemas
const subscriptionLocalizationCreateSchema = Joi.object({
  locale: Joi.string().pattern(/^[a-z]{2}(-[A-Z]{2})?$/).required()
    .messages({
      'string.pattern.base': 'Locale must be in format "en" or "en-US"',
      'string.empty': 'Locale is required'
    }),
  
  name: Joi.string().min(1).max(30).required()
    .messages({
      'string.empty': 'Name is required',
      'string.max': 'Name cannot exceed 30 characters'
    }),
  
  description: Joi.string().max(45).optional().allow('')
    .messages({
      'string.max': 'Description cannot exceed 45 characters'
    })
});

const subscriptionLocalizationUpdateSchema = Joi.object({
  name: Joi.string().min(1).max(30).optional()
    .messages({
      'string.empty': 'Name cannot be empty',
      'string.max': 'Name cannot exceed 30 characters'
    }),
  
  description: Joi.string().max(45).optional().allow('')
    .messages({
      'string.max': 'Description cannot exceed 45 characters'
    })
}).min(1)
  .messages({
    'object.min': 'At least one field must be provided for update (name or description)'
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

// Middleware to validate subscription localization ID parameter
const validateLocalizationId = (req, res, next) => {
  const { localizationId } = req.params;
  
  if (!localizationId || typeof localizationId !== 'string' || localizationId.trim() === '') {
    return next(new ValidationError('Valid localization ID is required'));
  }

  // Basic UUID format validation (Apple uses UUIDs for resource IDs)
  const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
  if (!uuidRegex.test(localizationId)) {
    return next(new ValidationError('Localization ID must be a valid UUID'));
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
  androidOfferCreateSchema,
  androidOfferUpdateSchema,
  androidOfferBulkCreateSchema,
  androidOfferPackageQuerySchema,
  subscriptionLocalizationCreateSchema,
  subscriptionLocalizationUpdateSchema,

  // Validation middleware
  validate,
  validateSubscriptionId,
  validatePromotionalOfferId,
  validateIntroductoryOfferId,
  validateLocalizationId,
  validatePagination,
  validateIncludes
};
