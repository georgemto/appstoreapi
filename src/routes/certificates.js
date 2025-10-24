const express = require('express');
const certificatesController = require('../controllers/certificates');
const {
  validate,
  validatePagination,
  validateIncludes
} = require('../middleware/validation');
const Joi = require('joi');

const router = express.Router();

// Define allowed includes for different endpoints
const certificateIncludes = [
  'passTypeId'
];

// Validation schemas
const certificateQuerySchema = Joi.object({
  certificateType: Joi.string().valid(
    'IOS_DEVELOPMENT',
    'IOS_DISTRIBUTION',
    'MAC_APP_DEVELOPMENT',
    'MAC_APP_DISTRIBUTION',
    'MAC_INSTALLER_DISTRIBUTION',
    'DEVELOPER_ID_KEXT',
    'DEVELOPER_ID_APPLICATION',
    'DEVELOPMENT',
    'DISTRIBUTION',
    'PASS_TYPE_ID',
    'PASS_TYPE_ID_WITH_NFC'
  ).optional(),
  displayName: Joi.string().optional(),
  serialNumber: Joi.string().optional(),
  include: Joi.string().optional(),
  limit: Joi.number().integer().min(1).max(200).optional(),
  sort: Joi.string().valid(
    'certificateType',
    '-certificateType',
    'displayName',
    '-displayName',
    'serialNumber',
    '-serialNumber'
  ).optional()
});

const certificateCreateSchema = Joi.object({
  data: Joi.object({
    type: Joi.string().valid('certificates').required(),
    attributes: Joi.object({
      certificateType: Joi.string().valid(
        'IOS_DEVELOPMENT',
        'IOS_DISTRIBUTION',
        'MAC_APP_DEVELOPMENT',
        'MAC_APP_DISTRIBUTION',
        'MAC_INSTALLER_DISTRIBUTION',
        'DEVELOPER_ID_KEXT',
        'DEVELOPER_ID_APPLICATION',
        'DEVELOPMENT',
        'DISTRIBUTION',
        'PASS_TYPE_ID',
        'PASS_TYPE_ID_WITH_NFC'
      ).required(),
      csrContent: Joi.string().required()
    }).required(),
    relationships: Joi.object({
      passTypeId: Joi.object({
        data: Joi.object({
          type: Joi.string().valid('passTypeIds').required(),
          id: Joi.string().required()
        }).optional()
      }).optional()
    }).optional()
  }).required()
});

const expiringQuerySchema = Joi.object({
  days: Joi.number().integer().min(1).max(365).optional()
});

/**
 * @route   GET /api/certificates/health
 * @desc    Health check endpoint
 * @access  Public
 */
router.get('/health', certificatesController.healthCheck);

/**
 * @route   GET /api/certificates/summary
 * @desc    Get certificates summary with statistics
 * @access  Public
 */
router.get('/summary', certificatesController.getCertificatesSummary);

/**
 * @route   GET /api/certificates/expiring
 * @desc    Get certificates expiring within specified days
 * @access  Public
 */
router.get('/expiring',
  validate(expiringQuerySchema, 'query'),
  certificatesController.getExpiringCertificates
);

/**
 * @route   GET /api/certificates/by-type/:type
 * @desc    Get certificates by type
 * @access  Public
 */
router.get('/by-type/:type',
  validatePagination,
  certificatesController.getCertificatesByType
);

/**
 * @route   GET /api/certificates
 * @desc    Get all certificates with optional filtering
 * @access  Public
 */
router.get('/',
  validate(certificateQuerySchema, 'query'),
  validatePagination,
  validateIncludes(certificateIncludes),
  certificatesController.getAllCertificates
);

/**
 * @route   POST /api/certificates
 * @desc    Create a new certificate
 * @access  Public
 */
router.post('/',
  validate(certificateCreateSchema),
  certificatesController.createCertificate
);

/**
 * @route   GET /api/certificates/:id
 * @desc    Get certificate by ID
 * @access  Public
 */
router.get('/:id',
  validateIncludes(certificateIncludes),
  certificatesController.getCertificateById
);

/**
 * @route   DELETE /api/certificates/:id
 * @desc    Delete certificate
 * @access  Public
 */
router.delete('/:id',
  certificatesController.deleteCertificate
);

module.exports = router;