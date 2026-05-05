/**
 * Unit tests for the conflict-handling logic in
 * introductoryOfferService.bulkCreateIntroductoryOffers.
 *
 * Mocks the underlying clients/services so the bulk method's own branching
 * (skip / update / replace) is exercised end-to-end without HTTP.
 */

jest.mock('../src/services/appstore-client', () => ({
  get: jest.fn(),
  buildParams: jest.fn(() => ({}))
}));
jest.mock('../src/services/appstore-api-client', () => ({
  createIntroductoryOffer: jest.fn(),
  updateIntroductoryOffer: jest.fn(),
  deleteIntroductoryOffer: jest.fn(),
  getIntroductoryOffer: jest.fn()
}));
jest.mock('../src/services/apps', () => ({
  getSubscriptionProductIdsByBundleId: jest.fn()
}));
jest.mock('../src/services/subscriptions', () => ({}));
jest.mock('../src/config/appstore', () => ({
  config: {
    endpoints: {
      subscriptions: '/subscriptions',
      subscriptionGroups: '/subscriptionGroups',
      introductoryOffers: '/subscriptionIntroductoryOffers'
    }
  }
}));

const appStoreClient = require('../src/services/appstore-client');
const appStoreAPIClient = require('../src/services/appstore-api-client');
const appService = require('../src/services/apps');
const introductoryOfferService = require('../src/services/introductory-offers');

function subscriptionsDataFixture() {
  return {
    appName: 'TestApp',
    subscriptionGroups: [{ id: 'g1', referenceName: 'Group 1' }],
    subscriptions: [{ id: 'sub1', name: 'Monthly', productId: 'com.ex.monthly', groupId: 'g1' }]
  };
}

function existingOfferFixture(territory, offerId = 'existing1') {
  return {
    included: [
      {
        id: offerId,
        type: 'subscriptionIntroductoryOffers',
        attributes: { duration: 'ONE_WEEK', offerMode: 'FREE_TRIAL', numberOfPeriods: 1 },
        relationships: { territory: { data: { type: 'territories', id: territory } } }
      }
    ]
  };
}

const template = () => ({
  duration: 'ONE_WEEK',
  offerMode: 'FREE_TRIAL',
  numberOfPeriods: 1,
  territories: ['USA']
});

describe('bulkCreateIntroductoryOffers — conflict handling', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    appService.getSubscriptionProductIdsByBundleId.mockResolvedValue(subscriptionsDataFixture());
  });

  test('skip (default): conflict is logged as skipped, no update/delete calls', async () => {
    appStoreAPIClient.createIntroductoryOffer.mockRejectedValueOnce(
      new Error('An introductory offer already exists for this subscription')
    );

    const result = await introductoryOfferService.bulkCreateIntroductoryOffers(
      'com.ex', 'Group 1', template()
    );

    expect(result.summary.succeeded).toBe(0);
    expect(result.summary.skipped).toBe(1);
    expect(result.summary.failed).toBe(0);
    expect(result.skipped).toHaveLength(1);
    expect(result.skipped[0]).toMatchObject({ territory: 'USA', subscriptionId: 'sub1' });
    expect(appStoreAPIClient.updateIntroductoryOffer).not.toHaveBeenCalled();
    expect(appStoreAPIClient.deleteIntroductoryOffer).not.toHaveBeenCalled();
  });

  test('update: calls updateIntroductoryOffer with template dates', async () => {
    appStoreAPIClient.createIntroductoryOffer.mockRejectedValueOnce(
      new Error('An introductory offer already exists for this subscription')
    );
    appStoreClient.get.mockResolvedValueOnce(existingOfferFixture('USA', 'existing-USA'));
    appStoreAPIClient.updateIntroductoryOffer.mockResolvedValueOnce({
      data: { id: 'existing-USA', attributes: { startDate: '2026-05-01' } }
    });

    const tpl = { ...template(), onConflict: 'update', startDate: '2026-05-01', endDate: '2026-05-31' };
    const result = await introductoryOfferService.bulkCreateIntroductoryOffers('com.ex', 'Group 1', tpl);

    expect(result.summary.updated).toBe(1);
    expect(result.summary.succeeded).toBe(0);
    expect(result.summary.failed).toBe(0);
    expect(result.updated[0]).toMatchObject({ offerId: 'existing-USA', territory: 'USA' });
    expect(appStoreAPIClient.updateIntroductoryOffer).toHaveBeenCalledWith(
      'existing-USA',
      expect.objectContaining({
        data: expect.objectContaining({
          id: 'existing-USA',
          attributes: expect.objectContaining({ startDate: '2026-05-01', endDate: '2026-05-31' })
        })
      })
    );
    expect(appStoreAPIClient.deleteIntroductoryOffer).not.toHaveBeenCalled();
  });

  test('update with no dates: marked failed with NO_UPDATE_FIELDS', async () => {
    appStoreAPIClient.createIntroductoryOffer.mockRejectedValueOnce(
      new Error('An introductory offer already exists for this subscription')
    );
    appStoreClient.get.mockResolvedValueOnce(existingOfferFixture('USA'));

    const tpl = { ...template(), onConflict: 'update' }; // no startDate/endDate
    const result = await introductoryOfferService.bulkCreateIntroductoryOffers('com.ex', 'Group 1', tpl);

    expect(result.summary.updated).toBe(0);
    expect(result.summary.failed).toBe(1);
    expect(result.failed[0].code).toBe('NO_UPDATE_FIELDS');
    expect(appStoreAPIClient.updateIntroductoryOffer).not.toHaveBeenCalled();
  });

  test('replace: deletes then creates, records old + new IDs', async () => {
    // First create call: conflict
    appStoreAPIClient.createIntroductoryOffer
      .mockRejectedValueOnce(new Error('An introductory offer already exists for this subscription'))
      .mockResolvedValueOnce({ data: { id: 'new-offer' } });
    appStoreClient.get.mockResolvedValueOnce(existingOfferFixture('USA', 'old-offer'));
    appStoreAPIClient.deleteIntroductoryOffer.mockResolvedValueOnce({});

    const tpl = { ...template(), onConflict: 'replace' };
    const result = await introductoryOfferService.bulkCreateIntroductoryOffers('com.ex', 'Group 1', tpl);

    expect(result.summary.replaced).toBe(1);
    expect(result.summary.succeeded).toBe(0);
    expect(result.summary.failed).toBe(0);
    expect(result.replaced[0]).toMatchObject({
      oldOfferId: 'old-offer',
      offerId: 'new-offer',
      territory: 'USA'
    });
    expect(appStoreAPIClient.deleteIntroductoryOffer).toHaveBeenCalledWith('old-offer');
    expect(appStoreAPIClient.createIntroductoryOffer).toHaveBeenCalledTimes(2);
  });

  test('replace with delete failure: marked failed with DELETE_FAILED', async () => {
    appStoreAPIClient.createIntroductoryOffer.mockRejectedValueOnce(
      new Error('An introductory offer already exists for this subscription')
    );
    appStoreClient.get.mockResolvedValueOnce(existingOfferFixture('USA', 'stuck-offer'));
    appStoreAPIClient.deleteIntroductoryOffer.mockRejectedValueOnce(
      new Error('cannot delete active offer')
    );

    const tpl = { ...template(), onConflict: 'replace' };
    const result = await introductoryOfferService.bulkCreateIntroductoryOffers('com.ex', 'Group 1', tpl);

    expect(result.summary.replaced).toBe(0);
    expect(result.summary.failed).toBe(1);
    expect(result.failed[0].code).toBe('DELETE_FAILED');
    expect(result.failed[0].error).toMatch(/delete failed/);
    expect(appStoreAPIClient.createIntroductoryOffer).toHaveBeenCalledTimes(1);
  });

  test('invalid onConflict mode: throws ValidationError', async () => {
    const tpl = { ...template(), onConflict: 'wat' };
    await expect(
      introductoryOfferService.bulkCreateIntroductoryOffers('com.ex', 'Group 1', tpl)
    ).rejects.toThrow(/Invalid onConflict/);
  });
});
