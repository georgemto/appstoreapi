# AppStoreConnectApi.AppEventScreenshotsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**appEventScreenshotsCreateInstance**](AppEventScreenshotsApi.md#appEventScreenshotsCreateInstance) | **POST** /v1/appEventScreenshots | 
[**appEventScreenshotsDeleteInstance**](AppEventScreenshotsApi.md#appEventScreenshotsDeleteInstance) | **DELETE** /v1/appEventScreenshots/{id} | 
[**appEventScreenshotsGetInstance**](AppEventScreenshotsApi.md#appEventScreenshotsGetInstance) | **GET** /v1/appEventScreenshots/{id} | 
[**appEventScreenshotsUpdateInstance**](AppEventScreenshotsApi.md#appEventScreenshotsUpdateInstance) | **PATCH** /v1/appEventScreenshots/{id} | 



## appEventScreenshotsCreateInstance

> AppEventScreenshotResponse appEventScreenshotsCreateInstance(appEventScreenshotCreateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppEventScreenshotsApi();
let appEventScreenshotCreateRequest = new AppStoreConnectApi.AppEventScreenshotCreateRequest(); // AppEventScreenshotCreateRequest | AppEventScreenshot representation
apiInstance.appEventScreenshotsCreateInstance(appEventScreenshotCreateRequest, (error, data, response) => {
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
 **appEventScreenshotCreateRequest** | [**AppEventScreenshotCreateRequest**](AppEventScreenshotCreateRequest.md)| AppEventScreenshot representation | 

### Return type

[**AppEventScreenshotResponse**](AppEventScreenshotResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## appEventScreenshotsDeleteInstance

> appEventScreenshotsDeleteInstance(id)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppEventScreenshotsApi();
let id = "id_example"; // String | the id of the requested resource
apiInstance.appEventScreenshotsDeleteInstance(id, (error, data, response) => {
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


## appEventScreenshotsGetInstance

> AppEventScreenshotResponse appEventScreenshotsGetInstance(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppEventScreenshotsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsAppEventScreenshots': ["null"], // [String] | the fields to include for returned resources of type appEventScreenshots
  'include': ["null"] // [String] | comma-separated list of relationships to include
};
apiInstance.appEventScreenshotsGetInstance(id, opts, (error, data, response) => {
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
 **fieldsAppEventScreenshots** | [**[String]**](String.md)| the fields to include for returned resources of type appEventScreenshots | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 

### Return type

[**AppEventScreenshotResponse**](AppEventScreenshotResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## appEventScreenshotsUpdateInstance

> AppEventScreenshotResponse appEventScreenshotsUpdateInstance(id, appEventScreenshotUpdateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppEventScreenshotsApi();
let id = "id_example"; // String | the id of the requested resource
let appEventScreenshotUpdateRequest = new AppStoreConnectApi.AppEventScreenshotUpdateRequest(); // AppEventScreenshotUpdateRequest | AppEventScreenshot representation
apiInstance.appEventScreenshotsUpdateInstance(id, appEventScreenshotUpdateRequest, (error, data, response) => {
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
 **appEventScreenshotUpdateRequest** | [**AppEventScreenshotUpdateRequest**](AppEventScreenshotUpdateRequest.md)| AppEventScreenshot representation | 

### Return type

[**AppEventScreenshotResponse**](AppEventScreenshotResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

