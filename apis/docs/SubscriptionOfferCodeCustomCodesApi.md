# AppStoreConnectApi.SubscriptionOfferCodeCustomCodesApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**subscriptionOfferCodeCustomCodesCreateInstance**](SubscriptionOfferCodeCustomCodesApi.md#subscriptionOfferCodeCustomCodesCreateInstance) | **POST** /v1/subscriptionOfferCodeCustomCodes | 
[**subscriptionOfferCodeCustomCodesGetInstance**](SubscriptionOfferCodeCustomCodesApi.md#subscriptionOfferCodeCustomCodesGetInstance) | **GET** /v1/subscriptionOfferCodeCustomCodes/{id} | 
[**subscriptionOfferCodeCustomCodesUpdateInstance**](SubscriptionOfferCodeCustomCodesApi.md#subscriptionOfferCodeCustomCodesUpdateInstance) | **PATCH** /v1/subscriptionOfferCodeCustomCodes/{id} | 



## subscriptionOfferCodeCustomCodesCreateInstance

> SubscriptionOfferCodeCustomCodeResponse subscriptionOfferCodeCustomCodesCreateInstance(subscriptionOfferCodeCustomCodeCreateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.SubscriptionOfferCodeCustomCodesApi();
let subscriptionOfferCodeCustomCodeCreateRequest = new AppStoreConnectApi.SubscriptionOfferCodeCustomCodeCreateRequest(); // SubscriptionOfferCodeCustomCodeCreateRequest | SubscriptionOfferCodeCustomCode representation
apiInstance.subscriptionOfferCodeCustomCodesCreateInstance(subscriptionOfferCodeCustomCodeCreateRequest, (error, data, response) => {
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
 **subscriptionOfferCodeCustomCodeCreateRequest** | [**SubscriptionOfferCodeCustomCodeCreateRequest**](SubscriptionOfferCodeCustomCodeCreateRequest.md)| SubscriptionOfferCodeCustomCode representation | 

### Return type

[**SubscriptionOfferCodeCustomCodeResponse**](SubscriptionOfferCodeCustomCodeResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## subscriptionOfferCodeCustomCodesGetInstance

> SubscriptionOfferCodeCustomCodeResponse subscriptionOfferCodeCustomCodesGetInstance(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.SubscriptionOfferCodeCustomCodesApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsSubscriptionOfferCodeCustomCodes': ["null"], // [String] | the fields to include for returned resources of type subscriptionOfferCodeCustomCodes
  'include': ["null"] // [String] | comma-separated list of relationships to include
};
apiInstance.subscriptionOfferCodeCustomCodesGetInstance(id, opts, (error, data, response) => {
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
 **fieldsSubscriptionOfferCodeCustomCodes** | [**[String]**](String.md)| the fields to include for returned resources of type subscriptionOfferCodeCustomCodes | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 

### Return type

[**SubscriptionOfferCodeCustomCodeResponse**](SubscriptionOfferCodeCustomCodeResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## subscriptionOfferCodeCustomCodesUpdateInstance

> SubscriptionOfferCodeCustomCodeResponse subscriptionOfferCodeCustomCodesUpdateInstance(id, subscriptionOfferCodeCustomCodeUpdateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.SubscriptionOfferCodeCustomCodesApi();
let id = "id_example"; // String | the id of the requested resource
let subscriptionOfferCodeCustomCodeUpdateRequest = new AppStoreConnectApi.SubscriptionOfferCodeCustomCodeUpdateRequest(); // SubscriptionOfferCodeCustomCodeUpdateRequest | SubscriptionOfferCodeCustomCode representation
apiInstance.subscriptionOfferCodeCustomCodesUpdateInstance(id, subscriptionOfferCodeCustomCodeUpdateRequest, (error, data, response) => {
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
 **subscriptionOfferCodeCustomCodeUpdateRequest** | [**SubscriptionOfferCodeCustomCodeUpdateRequest**](SubscriptionOfferCodeCustomCodeUpdateRequest.md)| SubscriptionOfferCodeCustomCode representation | 

### Return type

[**SubscriptionOfferCodeCustomCodeResponse**](SubscriptionOfferCodeCustomCodeResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

