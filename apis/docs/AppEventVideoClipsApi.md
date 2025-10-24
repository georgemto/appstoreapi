# AppStoreConnectApi.AppEventVideoClipsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**appEventVideoClipsCreateInstance**](AppEventVideoClipsApi.md#appEventVideoClipsCreateInstance) | **POST** /v1/appEventVideoClips | 
[**appEventVideoClipsDeleteInstance**](AppEventVideoClipsApi.md#appEventVideoClipsDeleteInstance) | **DELETE** /v1/appEventVideoClips/{id} | 
[**appEventVideoClipsGetInstance**](AppEventVideoClipsApi.md#appEventVideoClipsGetInstance) | **GET** /v1/appEventVideoClips/{id} | 
[**appEventVideoClipsUpdateInstance**](AppEventVideoClipsApi.md#appEventVideoClipsUpdateInstance) | **PATCH** /v1/appEventVideoClips/{id} | 



## appEventVideoClipsCreateInstance

> AppEventVideoClipResponse appEventVideoClipsCreateInstance(appEventVideoClipCreateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppEventVideoClipsApi();
let appEventVideoClipCreateRequest = new AppStoreConnectApi.AppEventVideoClipCreateRequest(); // AppEventVideoClipCreateRequest | AppEventVideoClip representation
apiInstance.appEventVideoClipsCreateInstance(appEventVideoClipCreateRequest, (error, data, response) => {
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
 **appEventVideoClipCreateRequest** | [**AppEventVideoClipCreateRequest**](AppEventVideoClipCreateRequest.md)| AppEventVideoClip representation | 

### Return type

[**AppEventVideoClipResponse**](AppEventVideoClipResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## appEventVideoClipsDeleteInstance

> appEventVideoClipsDeleteInstance(id)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppEventVideoClipsApi();
let id = "id_example"; // String | the id of the requested resource
apiInstance.appEventVideoClipsDeleteInstance(id, (error, data, response) => {
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


## appEventVideoClipsGetInstance

> AppEventVideoClipResponse appEventVideoClipsGetInstance(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppEventVideoClipsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsAppEventVideoClips': ["null"], // [String] | the fields to include for returned resources of type appEventVideoClips
  'include': ["null"] // [String] | comma-separated list of relationships to include
};
apiInstance.appEventVideoClipsGetInstance(id, opts, (error, data, response) => {
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
 **fieldsAppEventVideoClips** | [**[String]**](String.md)| the fields to include for returned resources of type appEventVideoClips | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 

### Return type

[**AppEventVideoClipResponse**](AppEventVideoClipResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## appEventVideoClipsUpdateInstance

> AppEventVideoClipResponse appEventVideoClipsUpdateInstance(id, appEventVideoClipUpdateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppEventVideoClipsApi();
let id = "id_example"; // String | the id of the requested resource
let appEventVideoClipUpdateRequest = new AppStoreConnectApi.AppEventVideoClipUpdateRequest(); // AppEventVideoClipUpdateRequest | AppEventVideoClip representation
apiInstance.appEventVideoClipsUpdateInstance(id, appEventVideoClipUpdateRequest, (error, data, response) => {
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
 **appEventVideoClipUpdateRequest** | [**AppEventVideoClipUpdateRequest**](AppEventVideoClipUpdateRequest.md)| AppEventVideoClip representation | 

### Return type

[**AppEventVideoClipResponse**](AppEventVideoClipResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

