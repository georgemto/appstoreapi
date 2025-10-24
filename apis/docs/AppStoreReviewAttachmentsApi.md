# AppStoreConnectApi.AppStoreReviewAttachmentsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**appStoreReviewAttachmentsCreateInstance**](AppStoreReviewAttachmentsApi.md#appStoreReviewAttachmentsCreateInstance) | **POST** /v1/appStoreReviewAttachments | 
[**appStoreReviewAttachmentsDeleteInstance**](AppStoreReviewAttachmentsApi.md#appStoreReviewAttachmentsDeleteInstance) | **DELETE** /v1/appStoreReviewAttachments/{id} | 
[**appStoreReviewAttachmentsGetInstance**](AppStoreReviewAttachmentsApi.md#appStoreReviewAttachmentsGetInstance) | **GET** /v1/appStoreReviewAttachments/{id} | 
[**appStoreReviewAttachmentsUpdateInstance**](AppStoreReviewAttachmentsApi.md#appStoreReviewAttachmentsUpdateInstance) | **PATCH** /v1/appStoreReviewAttachments/{id} | 



## appStoreReviewAttachmentsCreateInstance

> AppStoreReviewAttachmentResponse appStoreReviewAttachmentsCreateInstance(appStoreReviewAttachmentCreateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppStoreReviewAttachmentsApi();
let appStoreReviewAttachmentCreateRequest = new AppStoreConnectApi.AppStoreReviewAttachmentCreateRequest(); // AppStoreReviewAttachmentCreateRequest | AppStoreReviewAttachment representation
apiInstance.appStoreReviewAttachmentsCreateInstance(appStoreReviewAttachmentCreateRequest, (error, data, response) => {
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
 **appStoreReviewAttachmentCreateRequest** | [**AppStoreReviewAttachmentCreateRequest**](AppStoreReviewAttachmentCreateRequest.md)| AppStoreReviewAttachment representation | 

### Return type

[**AppStoreReviewAttachmentResponse**](AppStoreReviewAttachmentResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## appStoreReviewAttachmentsDeleteInstance

> appStoreReviewAttachmentsDeleteInstance(id)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppStoreReviewAttachmentsApi();
let id = "id_example"; // String | the id of the requested resource
apiInstance.appStoreReviewAttachmentsDeleteInstance(id, (error, data, response) => {
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


## appStoreReviewAttachmentsGetInstance

> AppStoreReviewAttachmentResponse appStoreReviewAttachmentsGetInstance(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppStoreReviewAttachmentsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsAppStoreReviewAttachments': ["null"], // [String] | the fields to include for returned resources of type appStoreReviewAttachments
  'include': ["null"] // [String] | comma-separated list of relationships to include
};
apiInstance.appStoreReviewAttachmentsGetInstance(id, opts, (error, data, response) => {
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
 **fieldsAppStoreReviewAttachments** | [**[String]**](String.md)| the fields to include for returned resources of type appStoreReviewAttachments | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 

### Return type

[**AppStoreReviewAttachmentResponse**](AppStoreReviewAttachmentResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## appStoreReviewAttachmentsUpdateInstance

> AppStoreReviewAttachmentResponse appStoreReviewAttachmentsUpdateInstance(id, appStoreReviewAttachmentUpdateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppStoreReviewAttachmentsApi();
let id = "id_example"; // String | the id of the requested resource
let appStoreReviewAttachmentUpdateRequest = new AppStoreConnectApi.AppStoreReviewAttachmentUpdateRequest(); // AppStoreReviewAttachmentUpdateRequest | AppStoreReviewAttachment representation
apiInstance.appStoreReviewAttachmentsUpdateInstance(id, appStoreReviewAttachmentUpdateRequest, (error, data, response) => {
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
 **appStoreReviewAttachmentUpdateRequest** | [**AppStoreReviewAttachmentUpdateRequest**](AppStoreReviewAttachmentUpdateRequest.md)| AppStoreReviewAttachment representation | 

### Return type

[**AppStoreReviewAttachmentResponse**](AppStoreReviewAttachmentResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

