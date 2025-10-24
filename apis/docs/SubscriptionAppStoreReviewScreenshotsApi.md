# AppStoreConnectApi.SubscriptionAppStoreReviewScreenshotsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**subscriptionAppStoreReviewScreenshotsCreateInstance**](SubscriptionAppStoreReviewScreenshotsApi.md#subscriptionAppStoreReviewScreenshotsCreateInstance) | **POST** /v1/subscriptionAppStoreReviewScreenshots | 
[**subscriptionAppStoreReviewScreenshotsDeleteInstance**](SubscriptionAppStoreReviewScreenshotsApi.md#subscriptionAppStoreReviewScreenshotsDeleteInstance) | **DELETE** /v1/subscriptionAppStoreReviewScreenshots/{id} | 
[**subscriptionAppStoreReviewScreenshotsGetInstance**](SubscriptionAppStoreReviewScreenshotsApi.md#subscriptionAppStoreReviewScreenshotsGetInstance) | **GET** /v1/subscriptionAppStoreReviewScreenshots/{id} | 
[**subscriptionAppStoreReviewScreenshotsUpdateInstance**](SubscriptionAppStoreReviewScreenshotsApi.md#subscriptionAppStoreReviewScreenshotsUpdateInstance) | **PATCH** /v1/subscriptionAppStoreReviewScreenshots/{id} | 



## subscriptionAppStoreReviewScreenshotsCreateInstance

> SubscriptionAppStoreReviewScreenshotResponse subscriptionAppStoreReviewScreenshotsCreateInstance(subscriptionAppStoreReviewScreenshotCreateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.SubscriptionAppStoreReviewScreenshotsApi();
let subscriptionAppStoreReviewScreenshotCreateRequest = new AppStoreConnectApi.SubscriptionAppStoreReviewScreenshotCreateRequest(); // SubscriptionAppStoreReviewScreenshotCreateRequest | SubscriptionAppStoreReviewScreenshot representation
apiInstance.subscriptionAppStoreReviewScreenshotsCreateInstance(subscriptionAppStoreReviewScreenshotCreateRequest, (error, data, response) => {
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
 **subscriptionAppStoreReviewScreenshotCreateRequest** | [**SubscriptionAppStoreReviewScreenshotCreateRequest**](SubscriptionAppStoreReviewScreenshotCreateRequest.md)| SubscriptionAppStoreReviewScreenshot representation | 

### Return type

[**SubscriptionAppStoreReviewScreenshotResponse**](SubscriptionAppStoreReviewScreenshotResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## subscriptionAppStoreReviewScreenshotsDeleteInstance

> subscriptionAppStoreReviewScreenshotsDeleteInstance(id)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.SubscriptionAppStoreReviewScreenshotsApi();
let id = "id_example"; // String | the id of the requested resource
apiInstance.subscriptionAppStoreReviewScreenshotsDeleteInstance(id, (error, data, response) => {
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


## subscriptionAppStoreReviewScreenshotsGetInstance

> SubscriptionAppStoreReviewScreenshotResponse subscriptionAppStoreReviewScreenshotsGetInstance(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.SubscriptionAppStoreReviewScreenshotsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsSubscriptionAppStoreReviewScreenshots': ["null"], // [String] | the fields to include for returned resources of type subscriptionAppStoreReviewScreenshots
  'include': ["null"] // [String] | comma-separated list of relationships to include
};
apiInstance.subscriptionAppStoreReviewScreenshotsGetInstance(id, opts, (error, data, response) => {
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
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 

### Return type

[**SubscriptionAppStoreReviewScreenshotResponse**](SubscriptionAppStoreReviewScreenshotResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## subscriptionAppStoreReviewScreenshotsUpdateInstance

> SubscriptionAppStoreReviewScreenshotResponse subscriptionAppStoreReviewScreenshotsUpdateInstance(id, subscriptionAppStoreReviewScreenshotUpdateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.SubscriptionAppStoreReviewScreenshotsApi();
let id = "id_example"; // String | the id of the requested resource
let subscriptionAppStoreReviewScreenshotUpdateRequest = new AppStoreConnectApi.SubscriptionAppStoreReviewScreenshotUpdateRequest(); // SubscriptionAppStoreReviewScreenshotUpdateRequest | SubscriptionAppStoreReviewScreenshot representation
apiInstance.subscriptionAppStoreReviewScreenshotsUpdateInstance(id, subscriptionAppStoreReviewScreenshotUpdateRequest, (error, data, response) => {
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
 **subscriptionAppStoreReviewScreenshotUpdateRequest** | [**SubscriptionAppStoreReviewScreenshotUpdateRequest**](SubscriptionAppStoreReviewScreenshotUpdateRequest.md)| SubscriptionAppStoreReviewScreenshot representation | 

### Return type

[**SubscriptionAppStoreReviewScreenshotResponse**](SubscriptionAppStoreReviewScreenshotResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

