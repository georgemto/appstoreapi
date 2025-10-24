# AppStoreConnectApi.WinBackOfferCreateRequestDataAttributes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**referenceName** | **String** |  | 
**offerId** | **String** |  | 
**duration** | [**SubscriptionOfferDuration**](SubscriptionOfferDuration.md) |  | 
**offerMode** | [**SubscriptionOfferMode**](SubscriptionOfferMode.md) |  | 
**periodCount** | **Number** |  | 
**customerEligibilityPaidSubscriptionDurationInMonths** | **Number** |  | 
**customerEligibilityTimeSinceLastSubscribedInMonths** | [**IntegerRange**](IntegerRange.md) |  | 
**customerEligibilityWaitBetweenOffersInMonths** | **Number** |  | [optional] 
**startDate** | **Date** |  | 
**endDate** | **Date** |  | [optional] 
**priority** | **String** |  | 
**promotionIntent** | **String** |  | [optional] 



## Enum: PriorityEnum


* `HIGH` (value: `"HIGH"`)

* `NORMAL` (value: `"NORMAL"`)





## Enum: PromotionIntentEnum


* `NOT_PROMOTED` (value: `"NOT_PROMOTED"`)

* `USE_AUTO_GENERATED_ASSETS` (value: `"USE_AUTO_GENERATED_ASSETS"`)




