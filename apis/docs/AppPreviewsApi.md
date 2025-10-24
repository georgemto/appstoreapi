# AppStoreConnectApi.AppPreviewsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**appPreviewsCreateInstance**](AppPreviewsApi.md#appPreviewsCreateInstance) | **POST** /v1/appPreviews | 
[**appPreviewsDeleteInstance**](AppPreviewsApi.md#appPreviewsDeleteInstance) | **DELETE** /v1/appPreviews/{id} | 
[**appPreviewsGetInstance**](AppPreviewsApi.md#appPreviewsGetInstance) | **GET** /v1/appPreviews/{id} | 
[**appPreviewsUpdateInstance**](AppPreviewsApi.md#appPreviewsUpdateInstance) | **PATCH** /v1/appPreviews/{id} | 



## appPreviewsCreateInstance

> AppPreviewResponse appPreviewsCreateInstance(appPreviewCreateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppPreviewsApi();
let appPreviewCreateRequest = new AppStoreConnectApi.AppPreviewCreateRequest(); // AppPreviewCreateRequest | AppPreview representation
apiInstance.appPreviewsCreateInstance(appPreviewCreateRequest, (error, data, response) => {
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
 **appPreviewCreateRequest** | [**AppPreviewCreateRequest**](AppPreviewCreateRequest.md)| AppPreview representation | 

### Return type

[**AppPreviewResponse**](AppPreviewResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## appPreviewsDeleteInstance

> appPreviewsDeleteInstance(id)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppPreviewsApi();
let id = "id_example"; // String | the id of the requested resource
apiInstance.appPreviewsDeleteInstance(id, (error, data, response) => {
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


## appPreviewsGetInstance

> AppPreviewResponse appPreviewsGetInstance(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppPreviewsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsAppPreviews': ["null"], // [String] | the fields to include for returned resources of type appPreviews
  'include': ["null"] // [String] | comma-separated list of relationships to include
};
apiInstance.appPreviewsGetInstance(id, opts, (error, data, response) => {
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
 **fieldsAppPreviews** | [**[String]**](String.md)| the fields to include for returned resources of type appPreviews | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 

### Return type

[**AppPreviewResponse**](AppPreviewResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## appPreviewsUpdateInstance

> AppPreviewResponse appPreviewsUpdateInstance(id, appPreviewUpdateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppPreviewsApi();
let id = "id_example"; // String | the id of the requested resource
let appPreviewUpdateRequest = new AppStoreConnectApi.AppPreviewUpdateRequest(); // AppPreviewUpdateRequest | AppPreview representation
apiInstance.appPreviewsUpdateInstance(id, appPreviewUpdateRequest, (error, data, response) => {
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
 **appPreviewUpdateRequest** | [**AppPreviewUpdateRequest**](AppPreviewUpdateRequest.md)| AppPreview representation | 

### Return type

[**AppPreviewResponse**](AppPreviewResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

