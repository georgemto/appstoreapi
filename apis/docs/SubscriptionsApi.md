# AppStoreConnectApi.SubscriptionsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**subscriptionsAppStoreReviewScreenshotGetToOneRelated**](SubscriptionsApi.md#subscriptionsAppStoreReviewScreenshotGetToOneRelated) | **GET** /v1/subscriptions/{id}/appStoreReviewScreenshot | 
[**subscriptionsAppStoreReviewScreenshotGetToOneRelationship**](SubscriptionsApi.md#subscriptionsAppStoreReviewScreenshotGetToOneRelationship) | **GET** /v1/subscriptions/{id}/relationships/appStoreReviewScreenshot | 
[**subscriptionsCreateInstance**](SubscriptionsApi.md#subscriptionsCreateInstance) | **POST** /v1/subscriptions | 
[**subscriptionsDeleteInstance**](SubscriptionsApi.md#subscriptionsDeleteInstance) | **DELETE** /v1/subscriptions/{id} | 
[**subscriptionsGetInstance**](SubscriptionsApi.md#subscriptionsGetInstance) | **GET** /v1/subscriptions/{id} | 
[**subscriptionsImagesGetToManyRelated**](SubscriptionsApi.md#subscriptionsImagesGetToManyRelated) | **GET** /v1/subscriptions/{id}/images | 
[**subscriptionsImagesGetToManyRelationship**](SubscriptionsApi.md#subscriptionsImagesGetToManyRelationship) | **GET** /v1/subscriptions/{id}/relationships/images | 
[**subscriptionsIntroductoryOffersDeleteToManyRelationship**](SubscriptionsApi.md#subscriptionsIntroductoryOffersDeleteToManyRelationship) | **DELETE** /v1/subscriptions/{id}/relationships/introductoryOffers | 
[**subscriptionsIntroductoryOffersGetToManyRelated**](SubscriptionsApi.md#subscriptionsIntroductoryOffersGetToManyRelated) | **GET** /v1/subscriptions/{id}/introductoryOffers | 
[**subscriptionsIntroductoryOffersGetToManyRelationship**](SubscriptionsApi.md#subscriptionsIntroductoryOffersGetToManyRelationship) | **GET** /v1/subscriptions/{id}/relationships/introductoryOffers | 
[**subscriptionsOfferCodesGetToManyRelated**](SubscriptionsApi.md#subscriptionsOfferCodesGetToManyRelated) | **GET** /v1/subscriptions/{id}/offerCodes | 
[**subscriptionsOfferCodesGetToManyRelationship**](SubscriptionsApi.md#subscriptionsOfferCodesGetToManyRelationship) | **GET** /v1/subscriptions/{id}/relationships/offerCodes | 
[**subscriptionsPricePointsGetToManyRelated**](SubscriptionsApi.md#subscriptionsPricePointsGetToManyRelated) | **GET** /v1/subscriptions/{id}/pricePoints | 
[**subscriptionsPricePointsGetToManyRelationship**](SubscriptionsApi.md#subscriptionsPricePointsGetToManyRelationship) | **GET** /v1/subscriptions/{id}/relationships/pricePoints | 
[**subscriptionsPricesDeleteToManyRelationship**](SubscriptionsApi.md#subscriptionsPricesDeleteToManyRelationship) | **DELETE** /v1/subscriptions/{id}/relationships/prices | 
[**subscriptionsPricesGetToManyRelated**](SubscriptionsApi.md#subscriptionsPricesGetToManyRelated) | **GET** /v1/subscriptions/{id}/prices | 
[**subscriptionsPricesGetToManyRelationship**](SubscriptionsApi.md#subscriptionsPricesGetToManyRelationship) | **GET** /v1/subscriptions/{id}/relationships/prices | 
[**subscriptionsPromotedPurchaseGetToOneRelated**](SubscriptionsApi.md#subscriptionsPromotedPurchaseGetToOneRelated) | **GET** /v1/subscriptions/{id}/promotedPurchase | 
[**subscriptionsPromotedPurchaseGetToOneRelationship**](SubscriptionsApi.md#subscriptionsPromotedPurchaseGetToOneRelationship) | **GET** /v1/subscriptions/{id}/relationships/promotedPurchase | 
[**subscriptionsPromotionalOffersGetToManyRelated**](SubscriptionsApi.md#subscriptionsPromotionalOffersGetToManyRelated) | **GET** /v1/subscriptions/{id}/promotionalOffers | 
[**subscriptionsPromotionalOffersGetToManyRelationship**](SubscriptionsApi.md#subscriptionsPromotionalOffersGetToManyRelationship) | **GET** /v1/subscriptions/{id}/relationships/promotionalOffers | 
[**subscriptionsSubscriptionAvailabilityGetToOneRelated**](SubscriptionsApi.md#subscriptionsSubscriptionAvailabilityGetToOneRelated) | **GET** /v1/subscriptions/{id}/subscriptionAvailability | 
[**subscriptionsSubscriptionAvailabilityGetToOneRelationship**](SubscriptionsApi.md#subscriptionsSubscriptionAvailabilityGetToOneRelationship) | **GET** /v1/subscriptions/{id}/relationships/subscriptionAvailability | 
[**subscriptionsSubscriptionLocalizationsGetToManyRelated**](SubscriptionsApi.md#subscriptionsSubscriptionLocalizationsGetToManyRelated) | **GET** /v1/subscriptions/{id}/subscriptionLocalizations | 
[**subscriptionsSubscriptionLocalizationsGetToManyRelationship**](SubscriptionsApi.md#subscriptionsSubscriptionLocalizationsGetToManyRelationship) | **GET** /v1/subscriptions/{id}/relationships/subscriptionLocalizations | 
[**subscriptionsUpdateInstance**](SubscriptionsApi.md#subscriptionsUpdateInstance) | **PATCH** /v1/subscriptions/{id} | 
[**subscriptionsWinBackOffersGetToManyRelated**](SubscriptionsApi.md#subscriptionsWinBackOffersGetToManyRelated) | **GET** /v1/subscriptions/{id}/winBackOffers | 
[**subscriptionsWinBackOffersGetToManyRelationship**](SubscriptionsApi.md#subscriptionsWinBackOffersGetToManyRelationship) | **GET** /v1/subscriptions/{id}/relationships/winBackOffers | 



## subscriptionsAppStoreReviewScreenshotGetToOneRelated

> SubscriptionAppStoreReviewScreenshotResponse subscriptionsAppStoreReviewScreenshotGetToOneRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.SubscriptionsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsSubscriptionAppStoreReviewScreenshots': ["null"], // [String] | the fields to include for returned resources of type subscriptionAppStoreReviewScreenshots
  'fieldsSubscriptions': ["null"], // [String] | the fields to include for returned resources of type subscriptions
  'include': ["null"] // [String] | comma-separated list of relationships to include
};
apiInstance.subscriptionsAppStoreReviewScreenshotGetToOneRelated(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| the id of the requested resource | 
 **fieldsSubscriptionAppStoreReviewScreenshots** | [**[String]**](String.md)| the fields to include for returned resources of type subscriptionAppStoreReviewScreenshots | [optional] 
 **fieldsSubscriptions** | [**[String]**](String.md)| the fields to include for returned resources of type subscriptions | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 

### Return type

[**SubscriptionAppStoreReviewScreenshotResponse**](SubscriptionAppStoreReviewScreenshotResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## subscriptionsAppStoreReviewScreenshotGetToOneRelationship

> SubscriptionAppStoreReviewScreenshotLinkageResponse subscriptionsAppStoreReviewScreenshotGetToOneRelationship(id)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.SubscriptionsApi();
let id = "id_example"; // String | the id of the requested resource
apiInstance.subscriptionsAppStoreReviewScreenshotGetToOneRelationship(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| the id of the requested resource | 

### Return type

[**SubscriptionAppStoreReviewScreenshotLinkageResponse**](SubscriptionAppStoreReviewScreenshotLinkageResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## subscriptionsCreateInstance

> SubscriptionResponse subscriptionsCreateInstance(subscriptionCreateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.SubscriptionsApi();
let subscriptionCreateRequest = new AppStoreConnectApi.SubscriptionCreateRequest(); // SubscriptionCreateRequest | Subscription representation
apiInstance.subscriptionsCreateInstance(subscriptionCreateRequest, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscriptionCreateRequest** | [**SubscriptionCreateRequest**](SubscriptionCreateRequest.md)| Subscription representation | 

### Return type

[**SubscriptionResponse**](SubscriptionResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## subscriptionsDeleteInstance

> subscriptionsDeleteInstance(id)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.SubscriptionsApi();
let id = "id_example"; // String | the id of the requested resource
apiInstance.subscriptionsDeleteInstance(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| the id of the requested resource | 

### Return type

null (empty response body)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## subscriptionsGetInstance

> SubscriptionResponse subscriptionsGetInstance(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.SubscriptionsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsSubscriptions': ["null"], // [String] | the fields to include for returned resources of type subscriptions
  'fieldsSubscriptionLocalizations': ["null"], // [String] | the fields to include for returned resources of type subscriptionLocalizations
  'fieldsSubscriptionAppStoreReviewScreenshots': ["null"], // [String] | the fields to include for returned resources of type subscriptionAppStoreReviewScreenshots
  'fieldsSubscriptionIntroductoryOffers': ["null"], // [String] | the fields to include for returned resources of type subscriptionIntroductoryOffers
  'fieldsSubscriptionPromotionalOffers': ["null"], // [String] | the fields to include for returned resources of type subscriptionPromotionalOffers
  'fieldsSubscriptionOfferCodes': ["null"], // [String] | the fields to include for returned resources of type subscriptionOfferCodes
  'fieldsSubscriptionPrices': ["null"], // [String] | the fields to include for returned resources of type subscriptionPrices
  'fieldsPromotedPurchases': ["null"], // [String] | the fields to include for returned resources of type promotedPurchases
  'fieldsSubscriptionAvailabilities': ["null"], // [String] | the fields to include for returned resources of type subscriptionAvailabilities
  'fieldsWinBackOffers': ["null"], // [String] | the fields to include for returned resources of type winBackOffers
  'fieldsSubscriptionImages': ["null"], // [String] | the fields to include for returned resources of type subscriptionImages
  'include': ["null"], // [String] | comma-separated list of relationships to include
  'limitImages': 56, // Number | maximum number of related images returned (when they are included)
  'limitIntroductoryOffers': 56, // Number | maximum number of related introductoryOffers returned (when they are included)
  'limitOfferCodes': 56, // Number | maximum number of related offerCodes returned (when they are included)
  'limitPrices': 56, // Number | maximum number of related prices returned (when they are included)
  'limitPromotionalOffers': 56, // Number | maximum number of related promotionalOffers returned (when they are included)
  'limitSubscriptionLocalizations': 56, // Number | maximum number of related subscriptionLocalizations returned (when they are included)
  'limitWinBackOffers': 56 // Number | maximum number of related winBackOffers returned (when they are included)
};
apiInstance.subscriptionsGetInstance(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| the id of the requested resource | 
 **fieldsSubscriptions** | [**[String]**](String.md)| the fields to include for returned resources of type subscriptions | [optional] 
 **fieldsSubscriptionLocalizations** | [**[String]**](String.md)| the fields to include for returned resources of type subscriptionLocalizations | [optional] 
 **fieldsSubscriptionAppStoreReviewScreenshots** | [**[String]**](String.md)| the fields to include for returned resources of type subscriptionAppStoreReviewScreenshots | [optional] 
 **fieldsSubscriptionIntroductoryOffers** | [**[String]**](String.md)| the fields to include for returned resources of type subscriptionIntroductoryOffers | [optional] 
 **fieldsSubscriptionPromotionalOffers** | [**[String]**](String.md)| the fields to include for returned resources of type subscriptionPromotionalOffers | [optional] 
 **fieldsSubscriptionOfferCodes** | [**[String]**](String.md)| the fields to include for returned resources of type subscriptionOfferCodes | [optional] 
 **fieldsSubscriptionPrices** | [**[String]**](String.md)| the fields to include for returned resources of type subscriptionPrices | [optional] 
 **fieldsPromotedPurchases** | [**[String]**](String.md)| the fields to include for returned resources of type promotedPurchases | [optional] 
 **fieldsSubscriptionAvailabilities** | [**[String]**](String.md)| the fields to include for returned resources of type subscriptionAvailabilities | [optional] 
 **fieldsWinBackOffers** | [**[String]**](String.md)| the fields to include for returned resources of type winBackOffers | [optional] 
 **fieldsSubscriptionImages** | [**[String]**](String.md)| the fields to include for returned resources of type subscriptionImages | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 
 **limitImages** | **Number**| maximum number of related images returned (when they are included) | [optional] 
 **limitIntroductoryOffers** | **Number**| maximum number of related introductoryOffers returned (when they are included) | [optional] 
 **limitOfferCodes** | **Number**| maximum number of related offerCodes returned (when they are included) | [optional] 
 **limitPrices** | **Number**| maximum number of related prices returned (when they are included) | [optional] 
 **limitPromotionalOffers** | **Number**| maximum number of related promotionalOffers returned (when they are included) | [optional] 
 **limitSubscriptionLocalizations** | **Number**| maximum number of related subscriptionLocalizations returned (when they are included) | [optional] 
 **limitWinBackOffers** | **Number**| maximum number of related winBackOffers returned (when they are included) | [optional] 

### Return type

[**SubscriptionResponse**](SubscriptionResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## subscriptionsImagesGetToManyRelated

> SubscriptionImagesResponse subscriptionsImagesGetToManyRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.SubscriptionsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsSubscriptionImages': ["null"], // [String] | the fields to include for returned resources of type subscriptionImages
  'fieldsSubscriptions': ["null"], // [String] | the fields to include for returned resources of type subscriptions
  'limit': 56, // Number | maximum resources per page
  'include': ["null"] // [String] | comma-separated list of relationships to include
};
apiInstance.subscriptionsImagesGetToManyRelated(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| the id of the requested resource | 
 **fieldsSubscriptionImages** | [**[String]**](String.md)| the fields to include for returned resources of type subscriptionImages | [optional] 
 **fieldsSubscriptions** | [**[String]**](String.md)| the fields to include for returned resources of type subscriptions | [optional] 
 **limit** | **Number**| maximum resources per page | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 

### Return type

[**SubscriptionImagesResponse**](SubscriptionImagesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## subscriptionsImagesGetToManyRelationship

> SubscriptionImagesLinkagesResponse subscriptionsImagesGetToManyRelationship(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.SubscriptionsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'limit': 56 // Number | maximum resources per page
};
apiInstance.subscriptionsImagesGetToManyRelationship(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| the id of the requested resource | 
 **limit** | **Number**| maximum resources per page | [optional] 

### Return type

[**SubscriptionImagesLinkagesResponse**](SubscriptionImagesLinkagesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## subscriptionsIntroductoryOffersDeleteToManyRelationship

> subscriptionsIntroductoryOffersDeleteToManyRelationship(id, subscriptionIntroductoryOffersLinkagesRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.SubscriptionsApi();
let id = "id_example"; // String | the id of the requested resource
let subscriptionIntroductoryOffersLinkagesRequest = new AppStoreConnectApi.SubscriptionIntroductoryOffersLinkagesRequest(); // SubscriptionIntroductoryOffersLinkagesRequest | List of related linkages
apiInstance.subscriptionsIntroductoryOffersDeleteToManyRelationship(id, subscriptionIntroductoryOffersLinkagesRequest, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| the id of the requested resource | 
 **subscriptionIntroductoryOffersLinkagesRequest** | [**SubscriptionIntroductoryOffersLinkagesRequest**](SubscriptionIntroductoryOffersLinkagesRequest.md)| List of related linkages | 

### Return type

null (empty response body)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## subscriptionsIntroductoryOffersGetToManyRelated

> SubscriptionIntroductoryOffersResponse subscriptionsIntroductoryOffersGetToManyRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.SubscriptionsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'filterTerritory': ["null"], // [String] | filter by id(s) of related 'territory'
  'fieldsSubscriptionIntroductoryOffers': ["null"], // [String] | the fields to include for returned resources of type subscriptionIntroductoryOffers
  'fieldsSubscriptions': ["null"], // [String] | the fields to include for returned resources of type subscriptions
  'fieldsTerritories': ["null"], // [String] | the fields to include for returned resources of type territories
  'fieldsSubscriptionPricePoints': ["null"], // [String] | the fields to include for returned resources of type subscriptionPricePoints
  'limit': 56, // Number | maximum resources per page
  'include': ["null"] // [String] | comma-separated list of relationships to include
};
apiInstance.subscriptionsIntroductoryOffersGetToManyRelated(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| the id of the requested resource | 
 **filterTerritory** | [**[String]**](String.md)| filter by id(s) of related &#39;territory&#39; | [optional] 
 **fieldsSubscriptionIntroductoryOffers** | [**[String]**](String.md)| the fields to include for returned resources of type subscriptionIntroductoryOffers | [optional] 
 **fieldsSubscriptions** | [**[String]**](String.md)| the fields to include for returned resources of type subscriptions | [optional] 
 **fieldsTerritories** | [**[String]**](String.md)| the fields to include for returned resources of type territories | [optional] 
 **fieldsSubscriptionPricePoints** | [**[String]**](String.md)| the fields to include for returned resources of type subscriptionPricePoints | [optional] 
 **limit** | **Number**| maximum resources per page | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 

### Return type

[**SubscriptionIntroductoryOffersResponse**](SubscriptionIntroductoryOffersResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## subscriptionsIntroductoryOffersGetToManyRelationship

> SubscriptionIntroductoryOffersLinkagesResponse subscriptionsIntroductoryOffersGetToManyRelationship(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.SubscriptionsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'limit': 56 // Number | maximum resources per page
};
apiInstance.subscriptionsIntroductoryOffersGetToManyRelationship(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| the id of the requested resource | 
 **limit** | **Number**| maximum resources per page | [optional] 

### Return type

[**SubscriptionIntroductoryOffersLinkagesResponse**](SubscriptionIntroductoryOffersLinkagesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## subscriptionsOfferCodesGetToManyRelated

> SubscriptionOfferCodesResponse subscriptionsOfferCodesGetToManyRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.SubscriptionsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'filterTerritory': ["null"], // [String] | filter by territory
  'fieldsSubscriptionOfferCodes': ["null"], // [String] | the fields to include for returned resources of type subscriptionOfferCodes
  'fieldsSubscriptions': ["null"], // [String] | the fields to include for returned resources of type subscriptions
  'fieldsSubscriptionOfferCodeOneTimeUseCodes': ["null"], // [String] | the fields to include for returned resources of type subscriptionOfferCodeOneTimeUseCodes
  'fieldsSubscriptionOfferCodeCustomCodes': ["null"], // [String] | the fields to include for returned resources of type subscriptionOfferCodeCustomCodes
  'fieldsSubscriptionOfferCodePrices': ["null"], // [String] | the fields to include for returned resources of type subscriptionOfferCodePrices
  'limit': 56, // Number | maximum resources per page
  'include': ["null"], // [String] | comma-separated list of relationships to include
  'limitOneTimeUseCodes': 56, // Number | maximum number of related oneTimeUseCodes returned (when they are included)
  'limitCustomCodes': 56, // Number | maximum number of related customCodes returned (when they are included)
  'limitPrices': 56 // Number | maximum number of related prices returned (when they are included)
};
apiInstance.subscriptionsOfferCodesGetToManyRelated(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| the id of the requested resource | 
 **filterTerritory** | [**[String]**](String.md)| filter by territory | [optional] 
 **fieldsSubscriptionOfferCodes** | [**[String]**](String.md)| the fields to include for returned resources of type subscriptionOfferCodes | [optional] 
 **fieldsSubscriptions** | [**[String]**](String.md)| the fields to include for returned resources of type subscriptions | [optional] 
 **fieldsSubscriptionOfferCodeOneTimeUseCodes** | [**[String]**](String.md)| the fields to include for returned resources of type subscriptionOfferCodeOneTimeUseCodes | [optional] 
 **fieldsSubscriptionOfferCodeCustomCodes** | [**[String]**](String.md)| the fields to include for returned resources of type subscriptionOfferCodeCustomCodes | [optional] 
 **fieldsSubscriptionOfferCodePrices** | [**[String]**](String.md)| the fields to include for returned resources of type subscriptionOfferCodePrices | [optional] 
 **limit** | **Number**| maximum resources per page | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 
 **limitOneTimeUseCodes** | **Number**| maximum number of related oneTimeUseCodes returned (when they are included) | [optional] 
 **limitCustomCodes** | **Number**| maximum number of related customCodes returned (when they are included) | [optional] 
 **limitPrices** | **Number**| maximum number of related prices returned (when they are included) | [optional] 

### Return type

[**SubscriptionOfferCodesResponse**](SubscriptionOfferCodesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## subscriptionsOfferCodesGetToManyRelationship

> SubscriptionOfferCodesLinkagesResponse subscriptionsOfferCodesGetToManyRelationship(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.SubscriptionsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'limit': 56 // Number | maximum resources per page
};
apiInstance.subscriptionsOfferCodesGetToManyRelationship(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| the id of the requested resource | 
 **limit** | **Number**| maximum resources per page | [optional] 

### Return type

[**SubscriptionOfferCodesLinkagesResponse**](SubscriptionOfferCodesLinkagesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## subscriptionsPricePointsGetToManyRelated

> SubscriptionPricePointsResponse subscriptionsPricePointsGetToManyRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.SubscriptionsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'filterTerritory': ["null"], // [String] | filter by id(s) of related 'territory'
  'fieldsSubscriptionPricePoints': ["null"], // [String] | the fields to include for returned resources of type subscriptionPricePoints
  'fieldsTerritories': ["null"], // [String] | the fields to include for returned resources of type territories
  'limit': 56, // Number | maximum resources per page
  'include': ["null"] // [String] | comma-separated list of relationships to include
};
apiInstance.subscriptionsPricePointsGetToManyRelated(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| the id of the requested resource | 
 **filterTerritory** | [**[String]**](String.md)| filter by id(s) of related &#39;territory&#39; | [optional] 
 **fieldsSubscriptionPricePoints** | [**[String]**](String.md)| the fields to include for returned resources of type subscriptionPricePoints | [optional] 
 **fieldsTerritories** | [**[String]**](String.md)| the fields to include for returned resources of type territories | [optional] 
 **limit** | **Number**| maximum resources per page | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 

### Return type

[**SubscriptionPricePointsResponse**](SubscriptionPricePointsResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/csv


## subscriptionsPricePointsGetToManyRelationship

> SubscriptionPricePointsLinkagesResponse subscriptionsPricePointsGetToManyRelationship(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.SubscriptionsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'limit': 56 // Number | maximum resources per page
};
apiInstance.subscriptionsPricePointsGetToManyRelationship(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| the id of the requested resource | 
 **limit** | **Number**| maximum resources per page | [optional] 

### Return type

[**SubscriptionPricePointsLinkagesResponse**](SubscriptionPricePointsLinkagesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## subscriptionsPricesDeleteToManyRelationship

> subscriptionsPricesDeleteToManyRelationship(id, subscriptionPricesLinkagesRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.SubscriptionsApi();
let id = "id_example"; // String | the id of the requested resource
let subscriptionPricesLinkagesRequest = new AppStoreConnectApi.SubscriptionPricesLinkagesRequest(); // SubscriptionPricesLinkagesRequest | List of related linkages
apiInstance.subscriptionsPricesDeleteToManyRelationship(id, subscriptionPricesLinkagesRequest, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| the id of the requested resource | 
 **subscriptionPricesLinkagesRequest** | [**SubscriptionPricesLinkagesRequest**](SubscriptionPricesLinkagesRequest.md)| List of related linkages | 

### Return type

null (empty response body)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## subscriptionsPricesGetToManyRelated

> SubscriptionPricesResponse subscriptionsPricesGetToManyRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.SubscriptionsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'filterSubscriptionPricePoint': ["null"], // [String] | filter by id(s) of related 'subscriptionPricePoint'
  'filterTerritory': ["null"], // [String] | filter by id(s) of related 'territory'
  'fieldsSubscriptionPrices': ["null"], // [String] | the fields to include for returned resources of type subscriptionPrices
  'fieldsTerritories': ["null"], // [String] | the fields to include for returned resources of type territories
  'fieldsSubscriptionPricePoints': ["null"], // [String] | the fields to include for returned resources of type subscriptionPricePoints
  'limit': 56, // Number | maximum resources per page
  'include': ["null"] // [String] | comma-separated list of relationships to include
};
apiInstance.subscriptionsPricesGetToManyRelated(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| the id of the requested resource | 
 **filterSubscriptionPricePoint** | [**[String]**](String.md)| filter by id(s) of related &#39;subscriptionPricePoint&#39; | [optional] 
 **filterTerritory** | [**[String]**](String.md)| filter by id(s) of related &#39;territory&#39; | [optional] 
 **fieldsSubscriptionPrices** | [**[String]**](String.md)| the fields to include for returned resources of type subscriptionPrices | [optional] 
 **fieldsTerritories** | [**[String]**](String.md)| the fields to include for returned resources of type territories | [optional] 
 **fieldsSubscriptionPricePoints** | [**[String]**](String.md)| the fields to include for returned resources of type subscriptionPricePoints | [optional] 
 **limit** | **Number**| maximum resources per page | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 

### Return type

[**SubscriptionPricesResponse**](SubscriptionPricesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## subscriptionsPricesGetToManyRelationship

> SubscriptionPricesLinkagesResponse subscriptionsPricesGetToManyRelationship(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.SubscriptionsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'limit': 56 // Number | maximum resources per page
};
apiInstance.subscriptionsPricesGetToManyRelationship(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| the id of the requested resource | 
 **limit** | **Number**| maximum resources per page | [optional] 

### Return type

[**SubscriptionPricesLinkagesResponse**](SubscriptionPricesLinkagesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## subscriptionsPromotedPurchaseGetToOneRelated

> PromotedPurchaseResponse subscriptionsPromotedPurchaseGetToOneRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.SubscriptionsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsPromotedPurchases': ["null"], // [String] | the fields to include for returned resources of type promotedPurchases
  'fieldsInAppPurchases': ["null"], // [String] | the fields to include for returned resources of type inAppPurchases
  'fieldsSubscriptions': ["null"], // [String] | the fields to include for returned resources of type subscriptions
  'include': ["null"] // [String] | comma-separated list of relationships to include
};
apiInstance.subscriptionsPromotedPurchaseGetToOneRelated(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| the id of the requested resource | 
 **fieldsPromotedPurchases** | [**[String]**](String.md)| the fields to include for returned resources of type promotedPurchases | [optional] 
 **fieldsInAppPurchases** | [**[String]**](String.md)| the fields to include for returned resources of type inAppPurchases | [optional] 
 **fieldsSubscriptions** | [**[String]**](String.md)| the fields to include for returned resources of type subscriptions | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 

### Return type

[**PromotedPurchaseResponse**](PromotedPurchaseResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## subscriptionsPromotedPurchaseGetToOneRelationship

> SubscriptionPromotedPurchaseLinkageResponse subscriptionsPromotedPurchaseGetToOneRelationship(id)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.SubscriptionsApi();
let id = "id_example"; // String | the id of the requested resource
apiInstance.subscriptionsPromotedPurchaseGetToOneRelationship(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| the id of the requested resource | 

### Return type

[**SubscriptionPromotedPurchaseLinkageResponse**](SubscriptionPromotedPurchaseLinkageResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## subscriptionsPromotionalOffersGetToManyRelated

> SubscriptionPromotionalOffersResponse subscriptionsPromotionalOffersGetToManyRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.SubscriptionsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'filterTerritory': ["null"], // [String] | filter by territory
  'fieldsSubscriptionPromotionalOffers': ["null"], // [String] | the fields to include for returned resources of type subscriptionPromotionalOffers
  'fieldsSubscriptions': ["null"], // [String] | the fields to include for returned resources of type subscriptions
  'fieldsSubscriptionPromotionalOfferPrices': ["null"], // [String] | the fields to include for returned resources of type subscriptionPromotionalOfferPrices
  'limit': 56, // Number | maximum resources per page
  'include': ["null"], // [String] | comma-separated list of relationships to include
  'limitPrices': 56 // Number | maximum number of related prices returned (when they are included)
};
apiInstance.subscriptionsPromotionalOffersGetToManyRelated(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| the id of the requested resource | 
 **filterTerritory** | [**[String]**](String.md)| filter by territory | [optional] 
 **fieldsSubscriptionPromotionalOffers** | [**[String]**](String.md)| the fields to include for returned resources of type subscriptionPromotionalOffers | [optional] 
 **fieldsSubscriptions** | [**[String]**](String.md)| the fields to include for returned resources of type subscriptions | [optional] 
 **fieldsSubscriptionPromotionalOfferPrices** | [**[String]**](String.md)| the fields to include for returned resources of type subscriptionPromotionalOfferPrices | [optional] 
 **limit** | **Number**| maximum resources per page | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 
 **limitPrices** | **Number**| maximum number of related prices returned (when they are included) | [optional] 

### Return type

[**SubscriptionPromotionalOffersResponse**](SubscriptionPromotionalOffersResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## subscriptionsPromotionalOffersGetToManyRelationship

> SubscriptionPromotionalOffersLinkagesResponse subscriptionsPromotionalOffersGetToManyRelationship(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.SubscriptionsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'limit': 56 // Number | maximum resources per page
};
apiInstance.subscriptionsPromotionalOffersGetToManyRelationship(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| the id of the requested resource | 
 **limit** | **Number**| maximum resources per page | [optional] 

### Return type

[**SubscriptionPromotionalOffersLinkagesResponse**](SubscriptionPromotionalOffersLinkagesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## subscriptionsSubscriptionAvailabilityGetToOneRelated

> SubscriptionAvailabilityResponse subscriptionsSubscriptionAvailabilityGetToOneRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.SubscriptionsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsSubscriptionAvailabilities': ["null"], // [String] | the fields to include for returned resources of type subscriptionAvailabilities
  'fieldsTerritories': ["null"], // [String] | the fields to include for returned resources of type territories
  'include': ["null"], // [String] | comma-separated list of relationships to include
  'limitAvailableTerritories': 56 // Number | maximum number of related availableTerritories returned (when they are included)
};
apiInstance.subscriptionsSubscriptionAvailabilityGetToOneRelated(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| the id of the requested resource | 
 **fieldsSubscriptionAvailabilities** | [**[String]**](String.md)| the fields to include for returned resources of type subscriptionAvailabilities | [optional] 
 **fieldsTerritories** | [**[String]**](String.md)| the fields to include for returned resources of type territories | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 
 **limitAvailableTerritories** | **Number**| maximum number of related availableTerritories returned (when they are included) | [optional] 

### Return type

[**SubscriptionAvailabilityResponse**](SubscriptionAvailabilityResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## subscriptionsSubscriptionAvailabilityGetToOneRelationship

> SubscriptionSubscriptionAvailabilityLinkageResponse subscriptionsSubscriptionAvailabilityGetToOneRelationship(id)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.SubscriptionsApi();
let id = "id_example"; // String | the id of the requested resource
apiInstance.subscriptionsSubscriptionAvailabilityGetToOneRelationship(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| the id of the requested resource | 

### Return type

[**SubscriptionSubscriptionAvailabilityLinkageResponse**](SubscriptionSubscriptionAvailabilityLinkageResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## subscriptionsSubscriptionLocalizationsGetToManyRelated

> SubscriptionLocalizationsResponse subscriptionsSubscriptionLocalizationsGetToManyRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.SubscriptionsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsSubscriptionLocalizations': ["null"], // [String] | the fields to include for returned resources of type subscriptionLocalizations
  'fieldsSubscriptions': ["null"], // [String] | the fields to include for returned resources of type subscriptions
  'limit': 56, // Number | maximum resources per page
  'include': ["null"] // [String] | comma-separated list of relationships to include
};
apiInstance.subscriptionsSubscriptionLocalizationsGetToManyRelated(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| the id of the requested resource | 
 **fieldsSubscriptionLocalizations** | [**[String]**](String.md)| the fields to include for returned resources of type subscriptionLocalizations | [optional] 
 **fieldsSubscriptions** | [**[String]**](String.md)| the fields to include for returned resources of type subscriptions | [optional] 
 **limit** | **Number**| maximum resources per page | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 

### Return type

[**SubscriptionLocalizationsResponse**](SubscriptionLocalizationsResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## subscriptionsSubscriptionLocalizationsGetToManyRelationship

> SubscriptionSubscriptionLocalizationsLinkagesResponse subscriptionsSubscriptionLocalizationsGetToManyRelationship(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.SubscriptionsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'limit': 56 // Number | maximum resources per page
};
apiInstance.subscriptionsSubscriptionLocalizationsGetToManyRelationship(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| the id of the requested resource | 
 **limit** | **Number**| maximum resources per page | [optional] 

### Return type

[**SubscriptionSubscriptionLocalizationsLinkagesResponse**](SubscriptionSubscriptionLocalizationsLinkagesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## subscriptionsUpdateInstance

> SubscriptionResponse subscriptionsUpdateInstance(id, subscriptionUpdateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.SubscriptionsApi();
let id = "id_example"; // String | the id of the requested resource
let subscriptionUpdateRequest = new AppStoreConnectApi.SubscriptionUpdateRequest(); // SubscriptionUpdateRequest | Subscription representation
apiInstance.subscriptionsUpdateInstance(id, subscriptionUpdateRequest, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| the id of the requested resource | 
 **subscriptionUpdateRequest** | [**SubscriptionUpdateRequest**](SubscriptionUpdateRequest.md)| Subscription representation | 

### Return type

[**SubscriptionResponse**](SubscriptionResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## subscriptionsWinBackOffersGetToManyRelated

> WinBackOffersResponse subscriptionsWinBackOffersGetToManyRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.SubscriptionsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsWinBackOffers': ["null"], // [String] | the fields to include for returned resources of type winBackOffers
  'fieldsWinBackOfferPrices': ["null"], // [String] | the fields to include for returned resources of type winBackOfferPrices
  'limit': 56, // Number | maximum resources per page
  'include': ["null"], // [String] | comma-separated list of relationships to include
  'limitPrices': 56 // Number | maximum number of related prices returned (when they are included)
};
apiInstance.subscriptionsWinBackOffersGetToManyRelated(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| the id of the requested resource | 
 **fieldsWinBackOffers** | [**[String]**](String.md)| the fields to include for returned resources of type winBackOffers | [optional] 
 **fieldsWinBackOfferPrices** | [**[String]**](String.md)| the fields to include for returned resources of type winBackOfferPrices | [optional] 
 **limit** | **Number**| maximum resources per page | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 
 **limitPrices** | **Number**| maximum number of related prices returned (when they are included) | [optional] 

### Return type

[**WinBackOffersResponse**](WinBackOffersResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## subscriptionsWinBackOffersGetToManyRelationship

> SubscriptionWinBackOffersLinkagesResponse subscriptionsWinBackOffersGetToManyRelationship(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.SubscriptionsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'limit': 56 // Number | maximum resources per page
};
apiInstance.subscriptionsWinBackOffersGetToManyRelationship(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| the id of the requested resource | 
 **limit** | **Number**| maximum resources per page | [optional] 

### Return type

[**SubscriptionWinBackOffersLinkagesResponse**](SubscriptionWinBackOffersLinkagesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

