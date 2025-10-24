# AppStoreConnectApi.AppClipAdvancedExperienceImagesApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**appClipAdvancedExperienceImagesCreateInstance**](AppClipAdvancedExperienceImagesApi.md#appClipAdvancedExperienceImagesCreateInstance) | **POST** /v1/appClipAdvancedExperienceImages | 
[**appClipAdvancedExperienceImagesGetInstance**](AppClipAdvancedExperienceImagesApi.md#appClipAdvancedExperienceImagesGetInstance) | **GET** /v1/appClipAdvancedExperienceImages/{id} | 
[**appClipAdvancedExperienceImagesUpdateInstance**](AppClipAdvancedExperienceImagesApi.md#appClipAdvancedExperienceImagesUpdateInstance) | **PATCH** /v1/appClipAdvancedExperienceImages/{id} | 



## appClipAdvancedExperienceImagesCreateInstance

> AppClipAdvancedExperienceImageResponse appClipAdvancedExperienceImagesCreateInstance(appClipAdvancedExperienceImageCreateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppClipAdvancedExperienceImagesApi();
let appClipAdvancedExperienceImageCreateRequest = new AppStoreConnectApi.AppClipAdvancedExperienceImageCreateRequest(); // AppClipAdvancedExperienceImageCreateRequest | AppClipAdvancedExperienceImage representation
apiInstance.appClipAdvancedExperienceImagesCreateInstance(appClipAdvancedExperienceImageCreateRequest, (error, data, response) => {
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
 **appClipAdvancedExperienceImageCreateRequest** | [**AppClipAdvancedExperienceImageCreateRequest**](AppClipAdvancedExperienceImageCreateRequest.md)| AppClipAdvancedExperienceImage representation | 

### Return type

[**AppClipAdvancedExperienceImageResponse**](AppClipAdvancedExperienceImageResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## appClipAdvancedExperienceImagesGetInstance

> AppClipAdvancedExperienceImageResponse appClipAdvancedExperienceImagesGetInstance(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppClipAdvancedExperienceImagesApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsAppClipAdvancedExperienceImages': ["null"] // [String] | the fields to include for returned resources of type appClipAdvancedExperienceImages
};
apiInstance.appClipAdvancedExperienceImagesGetInstance(id, opts, (error, data, response) => {
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
 **fieldsAppClipAdvancedExperienceImages** | [**[String]**](String.md)| the fields to include for returned resources of type appClipAdvancedExperienceImages | [optional] 

### Return type

[**AppClipAdvancedExperienceImageResponse**](AppClipAdvancedExperienceImageResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## appClipAdvancedExperienceImagesUpdateInstance

> AppClipAdvancedExperienceImageResponse appClipAdvancedExperienceImagesUpdateInstance(id, appClipAdvancedExperienceImageUpdateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppClipAdvancedExperienceImagesApi();
let id = "id_example"; // String | the id of the requested resource
let appClipAdvancedExperienceImageUpdateRequest = new AppStoreConnectApi.AppClipAdvancedExperienceImageUpdateRequest(); // AppClipAdvancedExperienceImageUpdateRequest | AppClipAdvancedExperienceImage representation
apiInstance.appClipAdvancedExperienceImagesUpdateInstance(id, appClipAdvancedExperienceImageUpdateRequest, (error, data, response) => {
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
 **appClipAdvancedExperienceImageUpdateRequest** | [**AppClipAdvancedExperienceImageUpdateRequest**](AppClipAdvancedExperienceImageUpdateRequest.md)| AppClipAdvancedExperienceImage representation | 

### Return type

[**AppClipAdvancedExperienceImageResponse**](AppClipAdvancedExperienceImageResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

