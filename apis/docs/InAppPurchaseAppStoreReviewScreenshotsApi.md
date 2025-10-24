# AppStoreConnectApi.InAppPurchaseAppStoreReviewScreenshotsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**inAppPurchaseAppStoreReviewScreenshotsCreateInstance**](InAppPurchaseAppStoreReviewScreenshotsApi.md#inAppPurchaseAppStoreReviewScreenshotsCreateInstance) | **POST** /v1/inAppPurchaseAppStoreReviewScreenshots | 
[**inAppPurchaseAppStoreReviewScreenshotsDeleteInstance**](InAppPurchaseAppStoreReviewScreenshotsApi.md#inAppPurchaseAppStoreReviewScreenshotsDeleteInstance) | **DELETE** /v1/inAppPurchaseAppStoreReviewScreenshots/{id} | 
[**inAppPurchaseAppStoreReviewScreenshotsGetInstance**](InAppPurchaseAppStoreReviewScreenshotsApi.md#inAppPurchaseAppStoreReviewScreenshotsGetInstance) | **GET** /v1/inAppPurchaseAppStoreReviewScreenshots/{id} | 
[**inAppPurchaseAppStoreReviewScreenshotsUpdateInstance**](InAppPurchaseAppStoreReviewScreenshotsApi.md#inAppPurchaseAppStoreReviewScreenshotsUpdateInstance) | **PATCH** /v1/inAppPurchaseAppStoreReviewScreenshots/{id} | 



## inAppPurchaseAppStoreReviewScreenshotsCreateInstance

> InAppPurchaseAppStoreReviewScreenshotResponse inAppPurchaseAppStoreReviewScreenshotsCreateInstance(inAppPurchaseAppStoreReviewScreenshotCreateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.InAppPurchaseAppStoreReviewScreenshotsApi();
let inAppPurchaseAppStoreReviewScreenshotCreateRequest = new AppStoreConnectApi.InAppPurchaseAppStoreReviewScreenshotCreateRequest(); // InAppPurchaseAppStoreReviewScreenshotCreateRequest | InAppPurchaseAppStoreReviewScreenshot representation
apiInstance.inAppPurchaseAppStoreReviewScreenshotsCreateInstance(inAppPurchaseAppStoreReviewScreenshotCreateRequest, (error, data, response) => {
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
 **inAppPurchaseAppStoreReviewScreenshotCreateRequest** | [**InAppPurchaseAppStoreReviewScreenshotCreateRequest**](InAppPurchaseAppStoreReviewScreenshotCreateRequest.md)| InAppPurchaseAppStoreReviewScreenshot representation | 

### Return type

[**InAppPurchaseAppStoreReviewScreenshotResponse**](InAppPurchaseAppStoreReviewScreenshotResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## inAppPurchaseAppStoreReviewScreenshotsDeleteInstance

> inAppPurchaseAppStoreReviewScreenshotsDeleteInstance(id)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.InAppPurchaseAppStoreReviewScreenshotsApi();
let id = "id_example"; // String | the id of the requested resource
apiInstance.inAppPurchaseAppStoreReviewScreenshotsDeleteInstance(id, (error, data, response) => {
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


## inAppPurchaseAppStoreReviewScreenshotsGetInstance

> InAppPurchaseAppStoreReviewScreenshotResponse inAppPurchaseAppStoreReviewScreenshotsGetInstance(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.InAppPurchaseAppStoreReviewScreenshotsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsInAppPurchaseAppStoreReviewScreenshots': ["null"], // [String] | the fields to include for returned resources of type inAppPurchaseAppStoreReviewScreenshots
  'include': ["null"] // [String] | comma-separated list of relationships to include
};
apiInstance.inAppPurchaseAppStoreReviewScreenshotsGetInstance(id, opts, (error, data, response) => {
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
 **fieldsInAppPurchaseAppStoreReviewScreenshots** | [**[String]**](String.md)| the fields to include for returned resources of type inAppPurchaseAppStoreReviewScreenshots | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 

### Return type

[**InAppPurchaseAppStoreReviewScreenshotResponse**](InAppPurchaseAppStoreReviewScreenshotResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## inAppPurchaseAppStoreReviewScreenshotsUpdateInstance

> InAppPurchaseAppStoreReviewScreenshotResponse inAppPurchaseAppStoreReviewScreenshotsUpdateInstance(id, inAppPurchaseAppStoreReviewScreenshotUpdateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.InAppPurchaseAppStoreReviewScreenshotsApi();
let id = "id_example"; // String | the id of the requested resource
let inAppPurchaseAppStoreReviewScreenshotUpdateRequest = new AppStoreConnectApi.InAppPurchaseAppStoreReviewScreenshotUpdateRequest(); // InAppPurchaseAppStoreReviewScreenshotUpdateRequest | InAppPurchaseAppStoreReviewScreenshot representation
apiInstance.inAppPurchaseAppStoreReviewScreenshotsUpdateInstance(id, inAppPurchaseAppStoreReviewScreenshotUpdateRequest, (error, data, response) => {
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
 **inAppPurchaseAppStoreReviewScreenshotUpdateRequest** | [**InAppPurchaseAppStoreReviewScreenshotUpdateRequest**](InAppPurchaseAppStoreReviewScreenshotUpdateRequest.md)| InAppPurchaseAppStoreReviewScreenshot representation | 

### Return type

[**InAppPurchaseAppStoreReviewScreenshotResponse**](InAppPurchaseAppStoreReviewScreenshotResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

