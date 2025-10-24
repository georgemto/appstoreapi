# AppStoreConnectApi.SubscriptionImagesApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**subscriptionImagesCreateInstance**](SubscriptionImagesApi.md#subscriptionImagesCreateInstance) | **POST** /v1/subscriptionImages | 
[**subscriptionImagesDeleteInstance**](SubscriptionImagesApi.md#subscriptionImagesDeleteInstance) | **DELETE** /v1/subscriptionImages/{id} | 
[**subscriptionImagesGetInstance**](SubscriptionImagesApi.md#subscriptionImagesGetInstance) | **GET** /v1/subscriptionImages/{id} | 
[**subscriptionImagesUpdateInstance**](SubscriptionImagesApi.md#subscriptionImagesUpdateInstance) | **PATCH** /v1/subscriptionImages/{id} | 



## subscriptionImagesCreateInstance

> SubscriptionImageResponse subscriptionImagesCreateInstance(subscriptionImageCreateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.SubscriptionImagesApi();
let subscriptionImageCreateRequest = new AppStoreConnectApi.SubscriptionImageCreateRequest(); // SubscriptionImageCreateRequest | SubscriptionImage representation
apiInstance.subscriptionImagesCreateInstance(subscriptionImageCreateRequest, (error, data, response) => {
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
 **subscriptionImageCreateRequest** | [**SubscriptionImageCreateRequest**](SubscriptionImageCreateRequest.md)| SubscriptionImage representation | 

### Return type

[**SubscriptionImageResponse**](SubscriptionImageResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## subscriptionImagesDeleteInstance

> subscriptionImagesDeleteInstance(id)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.SubscriptionImagesApi();
let id = "id_example"; // String | the id of the requested resource
apiInstance.subscriptionImagesDeleteInstance(id, (error, data, response) => {
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


## subscriptionImagesGetInstance

> SubscriptionImageResponse subscriptionImagesGetInstance(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.SubscriptionImagesApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsSubscriptionImages': ["null"], // [String] | the fields to include for returned resources of type subscriptionImages
  'include': ["null"] // [String] | comma-separated list of relationships to include
};
apiInstance.subscriptionImagesGetInstance(id, opts, (error, data, response) => {
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
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 

### Return type

[**SubscriptionImageResponse**](SubscriptionImageResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## subscriptionImagesUpdateInstance

> SubscriptionImageResponse subscriptionImagesUpdateInstance(id, subscriptionImageUpdateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.SubscriptionImagesApi();
let id = "id_example"; // String | the id of the requested resource
let subscriptionImageUpdateRequest = new AppStoreConnectApi.SubscriptionImageUpdateRequest(); // SubscriptionImageUpdateRequest | SubscriptionImage representation
apiInstance.subscriptionImagesUpdateInstance(id, subscriptionImageUpdateRequest, (error, data, response) => {
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
 **subscriptionImageUpdateRequest** | [**SubscriptionImageUpdateRequest**](SubscriptionImageUpdateRequest.md)| SubscriptionImage representation | 

### Return type

[**SubscriptionImageResponse**](SubscriptionImageResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

