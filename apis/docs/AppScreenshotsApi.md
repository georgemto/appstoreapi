# AppStoreConnectApi.AppScreenshotsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**appScreenshotsCreateInstance**](AppScreenshotsApi.md#appScreenshotsCreateInstance) | **POST** /v1/appScreenshots | 
[**appScreenshotsDeleteInstance**](AppScreenshotsApi.md#appScreenshotsDeleteInstance) | **DELETE** /v1/appScreenshots/{id} | 
[**appScreenshotsGetInstance**](AppScreenshotsApi.md#appScreenshotsGetInstance) | **GET** /v1/appScreenshots/{id} | 
[**appScreenshotsUpdateInstance**](AppScreenshotsApi.md#appScreenshotsUpdateInstance) | **PATCH** /v1/appScreenshots/{id} | 



## appScreenshotsCreateInstance

> AppScreenshotResponse appScreenshotsCreateInstance(appScreenshotCreateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppScreenshotsApi();
let appScreenshotCreateRequest = new AppStoreConnectApi.AppScreenshotCreateRequest(); // AppScreenshotCreateRequest | AppScreenshot representation
apiInstance.appScreenshotsCreateInstance(appScreenshotCreateRequest, (error, data, response) => {
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
 **appScreenshotCreateRequest** | [**AppScreenshotCreateRequest**](AppScreenshotCreateRequest.md)| AppScreenshot representation | 

### Return type

[**AppScreenshotResponse**](AppScreenshotResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## appScreenshotsDeleteInstance

> appScreenshotsDeleteInstance(id)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppScreenshotsApi();
let id = "id_example"; // String | the id of the requested resource
apiInstance.appScreenshotsDeleteInstance(id, (error, data, response) => {
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


## appScreenshotsGetInstance

> AppScreenshotResponse appScreenshotsGetInstance(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppScreenshotsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsAppScreenshots': ["null"], // [String] | the fields to include for returned resources of type appScreenshots
  'include': ["null"] // [String] | comma-separated list of relationships to include
};
apiInstance.appScreenshotsGetInstance(id, opts, (error, data, response) => {
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
 **fieldsAppScreenshots** | [**[String]**](String.md)| the fields to include for returned resources of type appScreenshots | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 

### Return type

[**AppScreenshotResponse**](AppScreenshotResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## appScreenshotsUpdateInstance

> AppScreenshotResponse appScreenshotsUpdateInstance(id, appScreenshotUpdateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppScreenshotsApi();
let id = "id_example"; // String | the id of the requested resource
let appScreenshotUpdateRequest = new AppStoreConnectApi.AppScreenshotUpdateRequest(); // AppScreenshotUpdateRequest | AppScreenshot representation
apiInstance.appScreenshotsUpdateInstance(id, appScreenshotUpdateRequest, (error, data, response) => {
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
 **appScreenshotUpdateRequest** | [**AppScreenshotUpdateRequest**](AppScreenshotUpdateRequest.md)| AppScreenshot representation | 

### Return type

[**AppScreenshotResponse**](AppScreenshotResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

