# AppStoreConnectApi.InAppPurchaseImagesApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**inAppPurchaseImagesCreateInstance**](InAppPurchaseImagesApi.md#inAppPurchaseImagesCreateInstance) | **POST** /v1/inAppPurchaseImages | 
[**inAppPurchaseImagesDeleteInstance**](InAppPurchaseImagesApi.md#inAppPurchaseImagesDeleteInstance) | **DELETE** /v1/inAppPurchaseImages/{id} | 
[**inAppPurchaseImagesGetInstance**](InAppPurchaseImagesApi.md#inAppPurchaseImagesGetInstance) | **GET** /v1/inAppPurchaseImages/{id} | 
[**inAppPurchaseImagesUpdateInstance**](InAppPurchaseImagesApi.md#inAppPurchaseImagesUpdateInstance) | **PATCH** /v1/inAppPurchaseImages/{id} | 



## inAppPurchaseImagesCreateInstance

> InAppPurchaseImageResponse inAppPurchaseImagesCreateInstance(inAppPurchaseImageCreateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.InAppPurchaseImagesApi();
let inAppPurchaseImageCreateRequest = new AppStoreConnectApi.InAppPurchaseImageCreateRequest(); // InAppPurchaseImageCreateRequest | InAppPurchaseImage representation
apiInstance.inAppPurchaseImagesCreateInstance(inAppPurchaseImageCreateRequest, (error, data, response) => {
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
 **inAppPurchaseImageCreateRequest** | [**InAppPurchaseImageCreateRequest**](InAppPurchaseImageCreateRequest.md)| InAppPurchaseImage representation | 

### Return type

[**InAppPurchaseImageResponse**](InAppPurchaseImageResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## inAppPurchaseImagesDeleteInstance

> inAppPurchaseImagesDeleteInstance(id)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.InAppPurchaseImagesApi();
let id = "id_example"; // String | the id of the requested resource
apiInstance.inAppPurchaseImagesDeleteInstance(id, (error, data, response) => {
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


## inAppPurchaseImagesGetInstance

> InAppPurchaseImageResponse inAppPurchaseImagesGetInstance(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.InAppPurchaseImagesApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsInAppPurchaseImages': ["null"], // [String] | the fields to include for returned resources of type inAppPurchaseImages
  'include': ["null"] // [String] | comma-separated list of relationships to include
};
apiInstance.inAppPurchaseImagesGetInstance(id, opts, (error, data, response) => {
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
 **fieldsInAppPurchaseImages** | [**[String]**](String.md)| the fields to include for returned resources of type inAppPurchaseImages | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 

### Return type

[**InAppPurchaseImageResponse**](InAppPurchaseImageResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## inAppPurchaseImagesUpdateInstance

> InAppPurchaseImageResponse inAppPurchaseImagesUpdateInstance(id, inAppPurchaseImageUpdateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.InAppPurchaseImagesApi();
let id = "id_example"; // String | the id of the requested resource
let inAppPurchaseImageUpdateRequest = new AppStoreConnectApi.InAppPurchaseImageUpdateRequest(); // InAppPurchaseImageUpdateRequest | InAppPurchaseImage representation
apiInstance.inAppPurchaseImagesUpdateInstance(id, inAppPurchaseImageUpdateRequest, (error, data, response) => {
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
 **inAppPurchaseImageUpdateRequest** | [**InAppPurchaseImageUpdateRequest**](InAppPurchaseImageUpdateRequest.md)| InAppPurchaseImage representation | 

### Return type

[**InAppPurchaseImageResponse**](InAppPurchaseImageResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

