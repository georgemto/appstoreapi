const appStoreAPIClient = require('../services/appstore-api-client');
const { handleAsyncError } = require('../utils/errors');
const logger = require('../utils/logger');

class CertificatesController {
  /**
   * Get all certificates
   * GET /api/certificates
   */
  getAllCertificates = handleAsyncError(async (req, res) => {
    const options = {
      filterCertificateType: req.query.certificateType,
      filterDisplayName: req.query.displayName,
      filterSerialNumber: req.query.serialNumber,
      include: req.query.include,
      fieldsCertificates: req.query.fieldsCertificates,
      fieldsPassTypeIds: req.query.fieldsPassTypeIds,
      limit: req.query.limit,
      sort: req.query.sort
    };

    const result = await appStoreAPIClient.listCertificates(options);

    res.status(200).json({
      success: true,
      data: result.data,
      included: result.included,
      links: result.links,
      meta: result.meta
    });
  });

  /**
   * Create new certificate
   * POST /api/certificates
   */
  createCertificate = handleAsyncError(async (req, res) => {
    const certificateData = req.body;

    const result = await appStoreAPIClient.createCertificate(certificateData);

    logger.info(`Certificate created successfully`, {
      certificateId: result.data?.id,
      type: result.data?.attributes?.certificateType,
      displayName: result.data?.attributes?.displayName
    });

    res.status(201).json({
      success: true,
      data: result.data,
      message: 'Certificate created successfully'
    });
  });

  /**
   * Get certificate by ID
   * GET /api/certificates/:id
   */
  getCertificateById = handleAsyncError(async (req, res) => {
    const { id } = req.params;
    const options = {
      include: req.query.include,
      fieldsCertificates: req.query.fieldsCertificates,
      fieldsPassTypeIds: req.query.fieldsPassTypeIds
    };

    const result = await appStoreAPIClient.getCertificate(id, options);

    res.status(200).json({
      success: true,
      data: result.data,
      included: result.included
    });
  });

  /**
   * Delete certificate
   * DELETE /api/certificates/:id
   */
  deleteCertificate = handleAsyncError(async (req, res) => {
    const { id } = req.params;

    await appStoreAPIClient.deleteCertificate(id);

    logger.info(`Certificate deleted successfully`, { certificateId: id });

    res.status(200).json({
      success: true,
      message: 'Certificate deleted successfully'
    });
  });

  /**
   * Get certificates summary with statistics
   * GET /api/certificates/summary
   */
  getCertificatesSummary = handleAsyncError(async (req, res) => {
    const allCertificates = await appStoreAPIClient.listCertificates({
      limit: 200 // Get more certificates for better statistics
    });

    const certificates = allCertificates.data || [];
    
    // Calculate summary statistics
    const now = new Date();
    const summary = {
      total: certificates.length,
      byType: {},
      byStatus: {
        active: 0,
        expired: 0,
        expiringSoon: 0 // Within 30 days
      },
      recentCertificates: certificates.slice(0, 10) // Most recent 10 certificates
    };

    // Group by certificate type and check expiration
    certificates.forEach(certificate => {
      const type = certificate.attributes?.certificateType || 'UNKNOWN';
      summary.byType[type] = (summary.byType[type] || 0) + 1;

      // Check expiration status
      const expirationDate = certificate.attributes?.expirationDate 
        ? new Date(certificate.attributes.expirationDate) 
        : null;
      
      if (expirationDate) {
        const timeDiff = expirationDate.getTime() - now.getTime();
        const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
        
        if (daysDiff < 0) {
          summary.byStatus.expired++;
        } else if (daysDiff <= 30) {
          summary.byStatus.expiringSoon++;
        } else {
          summary.byStatus.active++;
        }
      }
    });

    res.status(200).json({
      success: true,
      data: summary
    });
  });

  /**
   * Get expiring certificates
   * GET /api/certificates/expiring
   */
  getExpiringCertificates = handleAsyncError(async (req, res) => {
    const daysThreshold = parseInt(req.query.days) || 30;
    
    const allCertificates = await appStoreAPIClient.listCertificates({
      limit: 200
    });

    const certificates = allCertificates.data || [];
    const now = new Date();
    
    // Filter certificates expiring within the threshold
    const expiringCertificates = certificates.filter(certificate => {
      const expirationDate = certificate.attributes?.expirationDate 
        ? new Date(certificate.attributes.expirationDate) 
        : null;
      
      if (!expirationDate) return false;
      
      const timeDiff = expirationDate.getTime() - now.getTime();
      const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
      
      return daysDiff >= 0 && daysDiff <= daysThreshold;
    });

    // Sort by expiration date (soonest first)
    expiringCertificates.sort((a, b) => {
      const dateA = new Date(a.attributes?.expirationDate || 0);
      const dateB = new Date(b.attributes?.expirationDate || 0);
      return dateA - dateB;
    });

    res.status(200).json({
      success: true,
      data: expiringCertificates,
      meta: {
        total: expiringCertificates.length,
        daysThreshold
      }
    });
  });

  /**
   * Get certificates by type
   * GET /api/certificates/by-type/:type
   */
  getCertificatesByType = handleAsyncError(async (req, res) => {
    const { type } = req.params;
    
    const options = {
      filterCertificateType: type,
      limit: req.query.limit || 50,
      sort: req.query.sort
    };

    const result = await appStoreAPIClient.listCertificates(options);

    res.status(200).json({
      success: true,
      data: result.data,
      meta: {
        certificateType: type,
        total: result.data?.length || 0
      }
    });
  });

  /**
   * Health check endpoint
   * GET /api/certificates/health
   */
  healthCheck = handleAsyncError(async (req, res) => {
    res.status(200).json({
      success: true,
      message: 'Certificates API is healthy',
      timestamp: new Date().toISOString()
    });
  });
}

module.exports = new CertificatesController();