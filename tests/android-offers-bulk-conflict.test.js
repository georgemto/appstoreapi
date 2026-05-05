/**
 * Unit tests for conflict handling in
 * androidOffersService.bulkCreateOffers (skip / update / replace).
 */

jest.mock('../src/services/googleplay-client', () => ({
  getSubscriptions: jest.fn(),
  createSubscriptionOffer: jest.fn(),
  updateSubscriptionOffer: jest.fn(),
  deleteSubscriptionOffer: jest.fn()
}));
jest.mock('../src/config/googleplay', () => ({
  config: {},
  OFFER_PHASE_TYPES: {
    FREE_TRIAL: 'SUBSCRIPTION_OFFER_PHASE_TYPE_FREE',
    SINGLE_PAYMENT: 'SUBSCRIPTION_OFFER_PHASE_TYPE_SINGLE_PAYMENT',
    RECURRING_PAYMENT: 'SUBSCRIPTION_OFFER_PHASE_TYPE_RECURRING_PAYMENT'
  },
  RECURRENCE_MODES: {
    INFINITE: 'SUBSCRIPTION_OFFER_PHASE_RECURRENCE_MODE_INFINITE_RECURRING',
    FINITE: 'SUBSCRIPTION_OFFER_PHASE_RECURRENCE_MODE_FINITE_RECURRING',
    NON_RECURRING: 'SUBSCRIPTION_OFFER_PHASE_RECURRENCE_MODE_NON_RECURRING'
  },
  VALID_DURATIONS: ['P1W', 'P1M', 'P3M', 'P6M', 'P1Y'],
  DURATION_MAPPING: {
    ONE_WEEK: 'P1W', TWO_WEEKS: 'P2W', ONE_MONTH: 'P1M',
    P1W: 'P1W', P2W: 'P2W', P1M: 'P1M'
  },
  OFFER_MODE_MAPPING: {
    FREE_TRIAL: 'SUBSCRIPTION_OFFER_PHASE_TYPE_FREE',
    PAY_UP_FRONT: 'SUBSCRIPTION_OFFER_PHASE_TYPE_SINGLE_PAYMENT',
    PAY_AS_YOU_GO: 'SUBSCRIPTION_OFFER_PHASE_TYPE_RECURRING_PAYMENT'
  },
  TARGETING_TYPES: { NEW_CUSTOMER: 'ACQUISITION_TYPE_NEW_CUSTOMER_ACQUISITION' },
  ALL_REGIONS: ['US']
}));

const googlePlayClient = require('../src/services/googleplay-client');
const androidOffersService = require('../src/services/android-offers');

function subscriptionsFixture() {
  return {
    subscriptions: [
      {
        productId: 'com.ex.monthly',
        basePlans: [
          {
            basePlanId: 'monthly-autorenew',
            state: 'ACTIVE',
            regionalConfigs: [{ regionCode: 'US', newSubscriberAvailability: true }]
          }
        ]
      }
    ]
  };
}

const baseTemplate = () => ({
  offerId: 'intro-trial',
  phases: [{ offerMode: 'FREE_TRIAL', duration: 'P1W' }],
  targetNewCustomers: true
});

const alreadyExistsError = () => {
  const e = new Error('Resource already exists');
  e.statusCode = 409;
  return e;
};

describe('bulkCreateOffers — conflict handling', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    googlePlayClient.getSubscriptions.mockResolvedValue(subscriptionsFixture());
  });

  test('skip (default): conflict → skipped[], no update/delete', async () => {
    googlePlayClient.createSubscriptionOffer.mockRejectedValueOnce(alreadyExistsError());

    const result = await androidOffersService.bulkCreateOffers('com.ex', baseTemplate());

    expect(result.summary.succeeded).toBe(0);
    expect(result.summary.skipped).toBe(1);
    expect(result.summary.failed).toBe(0);
    expect(result.skipped[0]).toMatchObject({
      productId: 'com.ex.monthly',
      basePlanId: 'monthly-autorenew',
      offerId: 'intro-trial'
    });
    expect(googlePlayClient.updateSubscriptionOffer).not.toHaveBeenCalled();
    expect(googlePlayClient.deleteSubscriptionOffer).not.toHaveBeenCalled();
  });

  test('update: conflict → updateSubscriptionOffer called with default mask', async () => {
    googlePlayClient.createSubscriptionOffer.mockRejectedValueOnce(alreadyExistsError());
    googlePlayClient.updateSubscriptionOffer.mockResolvedValueOnce({ state: 'ACTIVE' });

    const tpl = { ...baseTemplate(), onConflict: 'update' };
    const result = await androidOffersService.bulkCreateOffers('com.ex', tpl);

    expect(result.summary.updated).toBe(1);
    expect(result.summary.succeeded).toBe(0);
    expect(result.summary.failed).toBe(0);
    expect(result.updated[0]).toMatchObject({
      productId: 'com.ex.monthly',
      basePlanId: 'monthly-autorenew',
      offerId: 'intro-trial',
      updateMask: 'phases,offerTags,targeting,regionalConfigs'
    });

    expect(googlePlayClient.updateSubscriptionOffer).toHaveBeenCalledTimes(1);
    const [pkg, pid, bp, oid, payload, mask] = googlePlayClient.updateSubscriptionOffer.mock.calls[0];
    expect(pkg).toBe('com.ex');
    expect(pid).toBe('com.ex.monthly');
    expect(bp).toBe('monthly-autorenew');
    expect(oid).toBe('intro-trial');
    expect(mask).toBe('phases,offerTags,targeting,regionalConfigs');
    // Payload should contain only the masked keys
    expect(Object.keys(payload).sort()).toEqual(['offerTags', 'phases', 'regionalConfigs', 'targeting'].sort());
  });

  test('update with --update-mask: only listed keys are sent', async () => {
    googlePlayClient.createSubscriptionOffer.mockRejectedValueOnce(alreadyExistsError());
    googlePlayClient.updateSubscriptionOffer.mockResolvedValueOnce({ state: 'ACTIVE' });

    const tpl = { ...baseTemplate(), onConflict: 'update', updateMask: 'offerTags,regionalConfigs' };
    const result = await androidOffersService.bulkCreateOffers('com.ex', tpl);

    expect(result.summary.updated).toBe(1);
    const [, , , , payload, mask] = googlePlayClient.updateSubscriptionOffer.mock.calls[0];
    expect(mask).toBe('offerTags,regionalConfigs');
    expect(Object.keys(payload).sort()).toEqual(['offerTags', 'regionalConfigs']);
    expect(payload.phases).toBeUndefined();
    expect(payload.targeting).toBeUndefined();
  });

  test('update with mask matching no fields: EMPTY_UPDATE', async () => {
    googlePlayClient.createSubscriptionOffer.mockRejectedValueOnce(alreadyExistsError());

    const tpl = { ...baseTemplate(), onConflict: 'update', updateMask: 'nonExistentField' };
    const result = await androidOffersService.bulkCreateOffers('com.ex', tpl);

    expect(result.summary.updated).toBe(0);
    expect(result.summary.failed).toBe(1);
    expect(result.failed[0].code).toBe('EMPTY_UPDATE');
    expect(googlePlayClient.updateSubscriptionOffer).not.toHaveBeenCalled();
  });

  test('replace: delete then create, records new offer', async () => {
    googlePlayClient.createSubscriptionOffer
      .mockRejectedValueOnce(alreadyExistsError())
      .mockResolvedValueOnce({ state: 'DRAFT' });
    googlePlayClient.deleteSubscriptionOffer.mockResolvedValueOnce({});

    const tpl = { ...baseTemplate(), onConflict: 'replace' };
    const result = await androidOffersService.bulkCreateOffers('com.ex', tpl);

    expect(result.summary.replaced).toBe(1);
    expect(result.summary.failed).toBe(0);
    expect(result.replaced[0]).toMatchObject({
      productId: 'com.ex.monthly',
      basePlanId: 'monthly-autorenew',
      offerId: 'intro-trial'
    });
    expect(googlePlayClient.deleteSubscriptionOffer).toHaveBeenCalledWith(
      'com.ex', 'com.ex.monthly', 'monthly-autorenew', 'intro-trial'
    );
    expect(googlePlayClient.createSubscriptionOffer).toHaveBeenCalledTimes(2);
  });

  test('replace with delete failure (Play rejects non-DRAFT): DELETE_FAILED', async () => {
    googlePlayClient.createSubscriptionOffer.mockRejectedValueOnce(alreadyExistsError());
    googlePlayClient.deleteSubscriptionOffer.mockRejectedValueOnce(
      new Error('Cannot delete a subscription offer that is not draft.')
    );

    const tpl = { ...baseTemplate(), onConflict: 'replace' };
    const result = await androidOffersService.bulkCreateOffers('com.ex', tpl);

    expect(result.summary.replaced).toBe(0);
    expect(result.summary.failed).toBe(1);
    expect(result.failed[0].code).toBe('DELETE_FAILED');
    expect(result.failed[0].error).toMatch(/delete failed/);
    expect(googlePlayClient.createSubscriptionOffer).toHaveBeenCalledTimes(1);
  });

  test('invalid onConflict mode: throws ValidationError', async () => {
    const tpl = { ...baseTemplate(), onConflict: 'wat' };
    await expect(
      androidOffersService.bulkCreateOffers('com.ex', tpl)
    ).rejects.toThrow(/Invalid onConflict/);
  });

  test('non-conflict error still marked failed, no update/delete', async () => {
    googlePlayClient.createSubscriptionOffer.mockRejectedValueOnce(new Error('some other error'));

    const tpl = { ...baseTemplate(), onConflict: 'update' };
    const result = await androidOffersService.bulkCreateOffers('com.ex', tpl);

    expect(result.summary.failed).toBe(1);
    expect(result.summary.updated).toBe(0);
    expect(googlePlayClient.updateSubscriptionOffer).not.toHaveBeenCalled();
  });
});
