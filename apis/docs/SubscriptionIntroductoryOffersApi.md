# AppStoreConnectApi.SubscriptionIntroductoryOffersApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**subscriptionIntroductoryOffersCreateInstance**](SubscriptionIntroductoryOffersApi.md#subscriptionIntroductoryOffersCreateInstance) | **POST** /v1/subscriptionIntroductoryOffers | 
[**subscriptionIntroductoryOffersDeleteInstance**](SubscriptionIntroductoryOffersApi.md#subscriptionIntroductoryOffersDeleteInstance) | **DELETE** /v1/subscriptionIntroductoryOffers/{id} | 
[**subscriptionIntroductoryOffersUpdateInstance**](SubscriptionIntroductoryOffersApi.md#subscriptionIntroductoryOffersUpdateInstance) | **PATCH** /v1/subscriptionIntroductoryOffers/{id} | 



## subscriptionIntroductoryOffersCreateInstance

> SubscriptionIntroductoryOfferResponse subscriptionIntroductoryOffersCreateInstance(subscriptionIntroductoryOfferCreateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.SubscriptionIntroductoryOffersApi();
let subscriptionIntroductoryOfferCreateRequest = new AppStoreConnectApi.SubscriptionIntroductoryOfferCreateRequest(); // SubscriptionIntroductoryOfferCreateRequest | SubscriptionIntroductoryOffer representation
apiInstance.subscriptionIntroductoryOffersCreateInstance(subscriptionIntroductoryOfferCreateRequest, (error, data, response) => {
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
 **subscriptionIntroductoryOfferCreateRequest** | [**SubscriptionIntroductoryOfferCreateRequest**](SubscriptionIntroductoryOfferCreateRequest.md)| SubscriptionIntroductoryOffer representation | 

### Return type

[**SubscriptionIntroductoryOfferResponse**](SubscriptionIntroductoryOfferResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## subscriptionIntroductoryOffersDeleteInstance

> subscriptionIntroductoryOffersDeleteInstance(id)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.SubscriptionIntroductoryOffersApi();
let id = "id_example"; // String | the id of the requested resource
apiInstance.subscriptionIntroductoryOffersDeleteInstance(id, (error, data, response) => {
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


## subscriptionIntroductoryOffersUpdateInstance

> SubscriptionIntroductoryOfferResponse subscriptionIntroductoryOffersUpdateInstance(id, subscriptionIntroductoryOfferUpdateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.SubscriptionIntroductoryOffersApi();
let id = "id_example"; // String | the id of the requested resource
let subscriptionIntroductoryOfferUpdateRequest = new AppStoreConnectApi.SubscriptionIntroductoryOfferUpdateRequest(); // SubscriptionIntroductoryOfferUpdateRequest | SubscriptionIntroductoryOffer representation
apiInstance.subscriptionIntroductoryOffersUpdateInstance(id, subscriptionIntroductoryOfferUpdateRequest, (error, data, response) => {
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
 **subscriptionIntroductoryOfferUpdateRequest** | [**SubscriptionIntroductoryOfferUpdateRequest**](SubscriptionIntroductoryOfferUpdateRequest.md)| SubscriptionIntroductoryOffer representation | 

### Return type

[**SubscriptionIntroductoryOfferResponse**](SubscriptionIntroductoryOfferResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

