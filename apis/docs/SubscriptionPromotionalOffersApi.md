# AppStoreConnectApi.SubscriptionPromotionalOffersApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**subscriptionPromotionalOffersCreateInstance**](SubscriptionPromotionalOffersApi.md#subscriptionPromotionalOffersCreateInstance) | **POST** /v1/subscriptionPromotionalOffers | 
[**subscriptionPromotionalOffersDeleteInstance**](SubscriptionPromotionalOffersApi.md#subscriptionPromotionalOffersDeleteInstance) | **DELETE** /v1/subscriptionPromotionalOffers/{id} | 
[**subscriptionPromotionalOffersGetInstance**](SubscriptionPromotionalOffersApi.md#subscriptionPromotionalOffersGetInstance) | **GET** /v1/subscriptionPromotionalOffers/{id} | 
[**subscriptionPromotionalOffersPricesGetToManyRelated**](SubscriptionPromotionalOffersApi.md#subscriptionPromotionalOffersPricesGetToManyRelated) | **GET** /v1/subscriptionPromotionalOffers/{id}/prices | 
[**subscriptionPromotionalOffersPricesGetToManyRelationship**](SubscriptionPromotionalOffersApi.md#subscriptionPromotionalOffersPricesGetToManyRelationship) | **GET** /v1/subscriptionPromotionalOffers/{id}/relationships/prices | 
[**subscriptionPromotionalOffersUpdateInstance**](SubscriptionPromotionalOffersApi.md#subscriptionPromotionalOffersUpdateInstance) | **PATCH** /v1/subscriptionPromotionalOffers/{id} | 



## subscriptionPromotionalOffersCreateInstance

> SubscriptionPromotionalOfferResponse subscriptionPromotionalOffersCreateInstance(subscriptionPromotionalOfferCreateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.SubscriptionPromotionalOffersApi();
let subscriptionPromotionalOfferCreateRequest = new AppStoreConnectApi.SubscriptionPromotionalOfferCreateRequest(); // SubscriptionPromotionalOfferCreateRequest | SubscriptionPromotionalOffer representation
apiInstance.subscriptionPromotionalOffersCreateInstance(subscriptionPromotionalOfferCreateRequest, (error, data, response) => {
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
 **subscriptionPromotionalOfferCreateRequest** | [**SubscriptionPromotionalOfferCreateRequest**](SubscriptionPromotionalOfferCreateRequest.md)| SubscriptionPromotionalOffer representation | 

### Return type

[**SubscriptionPromotionalOfferResponse**](SubscriptionPromotionalOfferResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## subscriptionPromotionalOffersDeleteInstance

> subscriptionPromotionalOffersDeleteInstance(id)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.SubscriptionPromotionalOffersApi();
let id = "id_example"; // String | the id of the requested resource
apiInstance.subscriptionPromotionalOffersDeleteInstance(id, (error, data, response) => {
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


## subscriptionPromotionalOffersGetInstance

> SubscriptionPromotionalOfferResponse subscriptionPromotionalOffersGetInstance(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.SubscriptionPromotionalOffersApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsSubscriptionPromotionalOffers': ["null"], // [String] | the fields to include for returned resources of type subscriptionPromotionalOffers
  'fieldsSubscriptionPromotionalOfferPrices': ["null"], // [String] | the fields to include for returned resources of type subscriptionPromotionalOfferPrices
  'include': ["null"], // [String] | comma-separated list of relationships to include
  'limitPrices': 56 // Number | maximum number of related prices returned (when they are included)
};
apiInstance.subscriptionPromotionalOffersGetInstance(id, opts, (error, data, response) => {
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
 **fieldsSubscriptionPromotionalOffers** | [**[String]**](String.md)| the fields to include for returned resources of type subscriptionPromotionalOffers | [optional] 
 **fieldsSubscriptionPromotionalOfferPrices** | [**[String]**](String.md)| the fields to include for returned resources of type subscriptionPromotionalOfferPrices | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 
 **limitPrices** | **Number**| maximum number of related prices returned (when they are included) | [optional] 

### Return type

[**SubscriptionPromotionalOfferResponse**](SubscriptionPromotionalOfferResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## subscriptionPromotionalOffersPricesGetToManyRelated

> SubscriptionPromotionalOfferPricesResponse subscriptionPromotionalOffersPricesGetToManyRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.SubscriptionPromotionalOffersApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'filterTerritory': ["null"], // [String] | filter by id(s) of related 'territory'
  'fieldsSubscriptionPromotionalOfferPrices': ["null"], // [String] | the fields to include for returned resources of type subscriptionPromotionalOfferPrices
  'fieldsTerritories': ["null"], // [String] | the fields to include for returned resources of type territories
  'fieldsSubscriptionPricePoints': ["null"], // [String] | the fields to include for returned resources of type subscriptionPricePoints
  'limit': 56, // Number | maximum resources per page
  'include': ["null"] // [String] | comma-separated list of relationships to include
};
apiInstance.subscriptionPromotionalOffersPricesGetToManyRelated(id, opts, (error, data, response) => {
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
 **fieldsSubscriptionPromotionalOfferPrices** | [**[String]**](String.md)| the fields to include for returned resources of type subscriptionPromotionalOfferPrices | [optional] 
 **fieldsTerritories** | [**[String]**](String.md)| the fields to include for returned resources of type territories | [optional] 
 **fieldsSubscriptionPricePoints** | [**[String]**](String.md)| the fields to include for returned resources of type subscriptionPricePoints | [optional] 
 **limit** | **Number**| maximum resources per page | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 

### Return type

[**SubscriptionPromotionalOfferPricesResponse**](SubscriptionPromotionalOfferPricesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## subscriptionPromotionalOffersPricesGetToManyRelationship

> SubscriptionPromotionalOfferPricesLinkagesResponse subscriptionPromotionalOffersPricesGetToManyRelationship(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.SubscriptionPromotionalOffersApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'limit': 56 // Number | maximum resources per page
};
apiInstance.subscriptionPromotionalOffersPricesGetToManyRelationship(id, opts, (error, data, response) => {
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

[**SubscriptionPromotionalOfferPricesLinkagesResponse**](SubscriptionPromotionalOfferPricesLinkagesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## subscriptionPromotionalOffersUpdateInstance

> SubscriptionPromotionalOfferResponse subscriptionPromotionalOffersUpdateInstance(id, subscriptionPromotionalOfferUpdateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.SubscriptionPromotionalOffersApi();
let id = "id_example"; // String | the id of the requested resource
let subscriptionPromotionalOfferUpdateRequest = new AppStoreConnectApi.SubscriptionPromotionalOfferUpdateRequest(); // SubscriptionPromotionalOfferUpdateRequest | SubscriptionPromotionalOffer representation
apiInstance.subscriptionPromotionalOffersUpdateInstance(id, subscriptionPromotionalOfferUpdateRequest, (error, data, response) => {
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
 **subscriptionPromotionalOfferUpdateRequest** | [**SubscriptionPromotionalOfferUpdateRequest**](SubscriptionPromotionalOfferUpdateRequest.md)| SubscriptionPromotionalOffer representation | 

### Return type

[**SubscriptionPromotionalOfferResponse**](SubscriptionPromotionalOfferResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

