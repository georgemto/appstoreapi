# AppStoreConnectApi.SubscriptionGroupsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**subscriptionGroupsCreateInstance**](SubscriptionGroupsApi.md#subscriptionGroupsCreateInstance) | **POST** /v1/subscriptionGroups | 
[**subscriptionGroupsDeleteInstance**](SubscriptionGroupsApi.md#subscriptionGroupsDeleteInstance) | **DELETE** /v1/subscriptionGroups/{id} | 
[**subscriptionGroupsGetInstance**](SubscriptionGroupsApi.md#subscriptionGroupsGetInstance) | **GET** /v1/subscriptionGroups/{id} | 
[**subscriptionGroupsSubscriptionGroupLocalizationsGetToManyRelated**](SubscriptionGroupsApi.md#subscriptionGroupsSubscriptionGroupLocalizationsGetToManyRelated) | **GET** /v1/subscriptionGroups/{id}/subscriptionGroupLocalizations | 
[**subscriptionGroupsSubscriptionGroupLocalizationsGetToManyRelationship**](SubscriptionGroupsApi.md#subscriptionGroupsSubscriptionGroupLocalizationsGetToManyRelationship) | **GET** /v1/subscriptionGroups/{id}/relationships/subscriptionGroupLocalizations | 
[**subscriptionGroupsSubscriptionsGetToManyRelated**](SubscriptionGroupsApi.md#subscriptionGroupsSubscriptionsGetToManyRelated) | **GET** /v1/subscriptionGroups/{id}/subscriptions | 
[**subscriptionGroupsSubscriptionsGetToManyRelationship**](SubscriptionGroupsApi.md#subscriptionGroupsSubscriptionsGetToManyRelationship) | **GET** /v1/subscriptionGroups/{id}/relationships/subscriptions | 
[**subscriptionGroupsUpdateInstance**](SubscriptionGroupsApi.md#subscriptionGroupsUpdateInstance) | **PATCH** /v1/subscriptionGroups/{id} | 



## subscriptionGroupsCreateInstance

> SubscriptionGroupResponse subscriptionGroupsCreateInstance(subscriptionGroupCreateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.SubscriptionGroupsApi();
let subscriptionGroupCreateRequest = new AppStoreConnectApi.SubscriptionGroupCreateRequest(); // SubscriptionGroupCreateRequest | SubscriptionGroup representation
apiInstance.subscriptionGroupsCreateInstance(subscriptionGroupCreateRequest, (error, data, response) => {
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
 **subscriptionGroupCreateRequest** | [**SubscriptionGroupCreateRequest**](SubscriptionGroupCreateRequest.md)| SubscriptionGroup representation | 

### Return type

[**SubscriptionGroupResponse**](SubscriptionGroupResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## subscriptionGroupsDeleteInstance

> subscriptionGroupsDeleteInstance(id)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.SubscriptionGroupsApi();
let id = "id_example"; // String | the id of the requested resource
apiInstance.subscriptionGroupsDeleteInstance(id, (error, data, response) => {
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


## subscriptionGroupsGetInstance

> SubscriptionGroupResponse subscriptionGroupsGetInstance(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.SubscriptionGroupsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsSubscriptionGroups': ["null"], // [String] | the fields to include for returned resources of type subscriptionGroups
  'fieldsSubscriptions': ["null"], // [String] | the fields to include for returned resources of type subscriptions
  'fieldsSubscriptionGroupLocalizations': ["null"], // [String] | the fields to include for returned resources of type subscriptionGroupLocalizations
  'include': ["null"], // [String] | comma-separated list of relationships to include
  'limitSubscriptionGroupLocalizations': 56, // Number | maximum number of related subscriptionGroupLocalizations returned (when they are included)
  'limitSubscriptions': 56 // Number | maximum number of related subscriptions returned (when they are included)
};
apiInstance.subscriptionGroupsGetInstance(id, opts, (error, data, response) => {
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
 **fieldsSubscriptionGroups** | [**[String]**](String.md)| the fields to include for returned resources of type subscriptionGroups | [optional] 
 **fieldsSubscriptions** | [**[String]**](String.md)| the fields to include for returned resources of type subscriptions | [optional] 
 **fieldsSubscriptionGroupLocalizations** | [**[String]**](String.md)| the fields to include for returned resources of type subscriptionGroupLocalizations | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 
 **limitSubscriptionGroupLocalizations** | **Number**| maximum number of related subscriptionGroupLocalizations returned (when they are included) | [optional] 
 **limitSubscriptions** | **Number**| maximum number of related subscriptions returned (when they are included) | [optional] 

### Return type

[**SubscriptionGroupResponse**](SubscriptionGroupResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## subscriptionGroupsSubscriptionGroupLocalizationsGetToManyRelated

> SubscriptionGroupLocalizationsResponse subscriptionGroupsSubscriptionGroupLocalizationsGetToManyRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.SubscriptionGroupsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsSubscriptionGroupLocalizations': ["null"], // [String] | the fields to include for returned resources of type subscriptionGroupLocalizations
  'fieldsSubscriptionGroups': ["null"], // [String] | the fields to include for returned resources of type subscriptionGroups
  'limit': 56, // Number | maximum resources per page
  'include': ["null"] // [String] | comma-separated list of relationships to include
};
apiInstance.subscriptionGroupsSubscriptionGroupLocalizationsGetToManyRelated(id, opts, (error, data, response) => {
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
 **fieldsSubscriptionGroupLocalizations** | [**[String]**](String.md)| the fields to include for returned resources of type subscriptionGroupLocalizations | [optional] 
 **fieldsSubscriptionGroups** | [**[String]**](String.md)| the fields to include for returned resources of type subscriptionGroups | [optional] 
 **limit** | **Number**| maximum resources per page | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 

### Return type

[**SubscriptionGroupLocalizationsResponse**](SubscriptionGroupLocalizationsResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## subscriptionGroupsSubscriptionGroupLocalizationsGetToManyRelationship

> SubscriptionGroupSubscriptionGroupLocalizationsLinkagesResponse subscriptionGroupsSubscriptionGroupLocalizationsGetToManyRelationship(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.SubscriptionGroupsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'limit': 56 // Number | maximum resources per page
};
apiInstance.subscriptionGroupsSubscriptionGroupLocalizationsGetToManyRelationship(id, opts, (error, data, response) => {
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

[**SubscriptionGroupSubscriptionGroupLocalizationsLinkagesResponse**](SubscriptionGroupSubscriptionGroupLocalizationsLinkagesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## subscriptionGroupsSubscriptionsGetToManyRelated

> SubscriptionsResponse subscriptionGroupsSubscriptionsGetToManyRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.SubscriptionGroupsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'filterProductId': ["null"], // [String] | filter by attribute 'productId'
  'filterName': ["null"], // [String] | filter by attribute 'name'
  'filterState': ["null"], // [String] | filter by attribute 'state'
  'sort': ["null"], // [String] | comma-separated list of sort expressions; resources will be sorted as specified
  'fieldsSubscriptions': ["null"], // [String] | the fields to include for returned resources of type subscriptions
  'fieldsSubscriptionLocalizations': ["null"], // [String] | the fields to include for returned resources of type subscriptionLocalizations
  'fieldsSubscriptionAppStoreReviewScreenshots': ["null"], // [String] | the fields to include for returned resources of type subscriptionAppStoreReviewScreenshots
  'fieldsSubscriptionGroups': ["null"], // [String] | the fields to include for returned resources of type subscriptionGroups
  'fieldsSubscriptionIntroductoryOffers': ["null"], // [String] | the fields to include for returned resources of type subscriptionIntroductoryOffers
  'fieldsSubscriptionPromotionalOffers': ["null"], // [String] | the fields to include for returned resources of type subscriptionPromotionalOffers
  'fieldsSubscriptionOfferCodes': ["null"], // [String] | the fields to include for returned resources of type subscriptionOfferCodes
  'fieldsSubscriptionPrices': ["null"], // [String] | the fields to include for returned resources of type subscriptionPrices
  'fieldsPromotedPurchases': ["null"], // [String] | the fields to include for returned resources of type promotedPurchases
  'fieldsSubscriptionAvailabilities': ["null"], // [String] | the fields to include for returned resources of type subscriptionAvailabilities
  'fieldsWinBackOffers': ["null"], // [String] | the fields to include for returned resources of type winBackOffers
  'fieldsSubscriptionImages': ["null"], // [String] | the fields to include for returned resources of type subscriptionImages
  'limit': 56, // Number | maximum resources per page
  'include': ["null"], // [String] | comma-separated list of relationships to include
  'limitSubscriptionLocalizations': 56, // Number | maximum number of related subscriptionLocalizations returned (when they are included)
  'limitIntroductoryOffers': 56, // Number | maximum number of related introductoryOffers returned (when they are included)
  'limitPromotionalOffers': 56, // Number | maximum number of related promotionalOffers returned (when they are included)
  'limitOfferCodes': 56, // Number | maximum number of related offerCodes returned (when they are included)
  'limitPrices': 56, // Number | maximum number of related prices returned (when they are included)
  'limitWinBackOffers': 56, // Number | maximum number of related winBackOffers returned (when they are included)
  'limitImages': 56 // Number | maximum number of related images returned (when they are included)
};
apiInstance.subscriptionGroupsSubscriptionsGetToManyRelated(id, opts, (error, data, response) => {
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
 **filterProductId** | [**[String]**](String.md)| filter by attribute &#39;productId&#39; | [optional] 
 **filterName** | [**[String]**](String.md)| filter by attribute &#39;name&#39; | [optional] 
 **filterState** | [**[String]**](String.md)| filter by attribute &#39;state&#39; | [optional] 
 **sort** | [**[String]**](String.md)| comma-separated list of sort expressions; resources will be sorted as specified | [optional] 
 **fieldsSubscriptions** | [**[String]**](String.md)| the fields to include for returned resources of type subscriptions | [optional] 
 **fieldsSubscriptionLocalizations** | [**[String]**](String.md)| the fields to include for returned resources of type subscriptionLocalizations | [optional] 
 **fieldsSubscriptionAppStoreReviewScreenshots** | [**[String]**](String.md)| the fields to include for returned resources of type subscriptionAppStoreReviewScreenshots | [optional] 
 **fieldsSubscriptionGroups** | [**[String]**](String.md)| the fields to include for returned resources of type subscriptionGroups | [optional] 
 **fieldsSubscriptionIntroductoryOffers** | [**[String]**](String.md)| the fields to include for returned resources of type subscriptionIntroductoryOffers | [optional] 
 **fieldsSubscriptionPromotionalOffers** | [**[String]**](String.md)| the fields to include for returned resources of type subscriptionPromotionalOffers | [optional] 
 **fieldsSubscriptionOfferCodes** | [**[String]**](String.md)| the fields to include for returned resources of type subscriptionOfferCodes | [optional] 
 **fieldsSubscriptionPrices** | [**[String]**](String.md)| the fields to include for returned resources of type subscriptionPrices | [optional] 
 **fieldsPromotedPurchases** | [**[String]**](String.md)| the fields to include for returned resources of type promotedPurchases | [optional] 
 **fieldsSubscriptionAvailabilities** | [**[String]**](String.md)| the fields to include for returned resources of type subscriptionAvailabilities | [optional] 
 **fieldsWinBackOffers** | [**[String]**](String.md)| the fields to include for returned resources of type winBackOffers | [optional] 
 **fieldsSubscriptionImages** | [**[String]**](String.md)| the fields to include for returned resources of type subscriptionImages | [optional] 
 **limit** | **Number**| maximum resources per page | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 
 **limitSubscriptionLocalizations** | **Number**| maximum number of related subscriptionLocalizations returned (when they are included) | [optional] 
 **limitIntroductoryOffers** | **Number**| maximum number of related introductoryOffers returned (when they are included) | [optional] 
 **limitPromotionalOffers** | **Number**| maximum number of related promotionalOffers returned (when they are included) | [optional] 
 **limitOfferCodes** | **Number**| maximum number of related offerCodes returned (when they are included) | [optional] 
 **limitPrices** | **Number**| maximum number of related prices returned (when they are included) | [optional] 
 **limitWinBackOffers** | **Number**| maximum number of related winBackOffers returned (when they are included) | [optional] 
 **limitImages** | **Number**| maximum number of related images returned (when they are included) | [optional] 

### Return type

[**SubscriptionsResponse**](SubscriptionsResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## subscriptionGroupsSubscriptionsGetToManyRelationship

> SubscriptionGroupSubscriptionsLinkagesResponse subscriptionGroupsSubscriptionsGetToManyRelationship(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.SubscriptionGroupsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'limit': 56 // Number | maximum resources per page
};
apiInstance.subscriptionGroupsSubscriptionsGetToManyRelationship(id, opts, (error, data, response) => {
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

[**SubscriptionGroupSubscriptionsLinkagesResponse**](SubscriptionGroupSubscriptionsLinkagesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## subscriptionGroupsUpdateInstance

> SubscriptionGroupResponse subscriptionGroupsUpdateInstance(id, subscriptionGroupUpdateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.SubscriptionGroupsApi();
let id = "id_example"; // String | the id of the requested resource
let subscriptionGroupUpdateRequest = new AppStoreConnectApi.SubscriptionGroupUpdateRequest(); // SubscriptionGroupUpdateRequest | SubscriptionGroup representation
apiInstance.subscriptionGroupsUpdateInstance(id, subscriptionGroupUpdateRequest, (error, data, response) => {
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
 **subscriptionGroupUpdateRequest** | [**SubscriptionGroupUpdateRequest**](SubscriptionGroupUpdateRequest.md)| SubscriptionGroup representation | 

### Return type

[**SubscriptionGroupResponse**](SubscriptionGroupResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

