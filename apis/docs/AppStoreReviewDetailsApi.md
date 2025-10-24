# AppStoreConnectApi.AppStoreReviewDetailsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**appStoreReviewDetailsAppStoreReviewAttachmentsGetToManyRelated**](AppStoreReviewDetailsApi.md#appStoreReviewDetailsAppStoreReviewAttachmentsGetToManyRelated) | **GET** /v1/appStoreReviewDetails/{id}/appStoreReviewAttachments | 
[**appStoreReviewDetailsAppStoreReviewAttachmentsGetToManyRelationship**](AppStoreReviewDetailsApi.md#appStoreReviewDetailsAppStoreReviewAttachmentsGetToManyRelationship) | **GET** /v1/appStoreReviewDetails/{id}/relationships/appStoreReviewAttachments | 
[**appStoreReviewDetailsCreateInstance**](AppStoreReviewDetailsApi.md#appStoreReviewDetailsCreateInstance) | **POST** /v1/appStoreReviewDetails | 
[**appStoreReviewDetailsGetInstance**](AppStoreReviewDetailsApi.md#appStoreReviewDetailsGetInstance) | **GET** /v1/appStoreReviewDetails/{id} | 
[**appStoreReviewDetailsUpdateInstance**](AppStoreReviewDetailsApi.md#appStoreReviewDetailsUpdateInstance) | **PATCH** /v1/appStoreReviewDetails/{id} | 



## appStoreReviewDetailsAppStoreReviewAttachmentsGetToManyRelated

> AppStoreReviewAttachmentsResponse appStoreReviewDetailsAppStoreReviewAttachmentsGetToManyRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppStoreReviewDetailsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsAppStoreReviewAttachments': ["null"], // [String] | the fields to include for returned resources of type appStoreReviewAttachments
  'fieldsAppStoreReviewDetails': ["null"], // [String] | the fields to include for returned resources of type appStoreReviewDetails
  'limit': 56, // Number | maximum resources per page
  'include': ["null"] // [String] | comma-separated list of relationships to include
};
apiInstance.appStoreReviewDetailsAppStoreReviewAttachmentsGetToManyRelated(id, opts, (error, data, response) => {
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
 **fieldsAppStoreReviewDetails** | [**[String]**](String.md)| the fields to include for returned resources of type appStoreReviewDetails | [optional] 
 **limit** | **Number**| maximum resources per page | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 

### Return type

[**AppStoreReviewAttachmentsResponse**](AppStoreReviewAttachmentsResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## appStoreReviewDetailsAppStoreReviewAttachmentsGetToManyRelationship

> AppStoreReviewDetailAppStoreReviewAttachmentsLinkagesResponse appStoreReviewDetailsAppStoreReviewAttachmentsGetToManyRelationship(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppStoreReviewDetailsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'limit': 56 // Number | maximum resources per page
};
apiInstance.appStoreReviewDetailsAppStoreReviewAttachmentsGetToManyRelationship(id, opts, (error, data, response) => {
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
 **limit** | **Number**| maximum resources per page | [optional] 

### Return type

[**AppStoreReviewDetailAppStoreReviewAttachmentsLinkagesResponse**](AppStoreReviewDetailAppStoreReviewAttachmentsLinkagesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## appStoreReviewDetailsCreateInstance

> AppStoreReviewDetailResponse appStoreReviewDetailsCreateInstance(appStoreReviewDetailCreateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppStoreReviewDetailsApi();
let appStoreReviewDetailCreateRequest = new AppStoreConnectApi.AppStoreReviewDetailCreateRequest(); // AppStoreReviewDetailCreateRequest | AppStoreReviewDetail representation
apiInstance.appStoreReviewDetailsCreateInstance(appStoreReviewDetailCreateRequest, (error, data, response) => {
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
 **appStoreReviewDetailCreateRequest** | [**AppStoreReviewDetailCreateRequest**](AppStoreReviewDetailCreateRequest.md)| AppStoreReviewDetail representation | 

### Return type

[**AppStoreReviewDetailResponse**](AppStoreReviewDetailResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## appStoreReviewDetailsGetInstance

> AppStoreReviewDetailResponse appStoreReviewDetailsGetInstance(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppStoreReviewDetailsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsAppStoreReviewDetails': ["null"], // [String] | the fields to include for returned resources of type appStoreReviewDetails
  'fieldsAppStoreReviewAttachments': ["null"], // [String] | the fields to include for returned resources of type appStoreReviewAttachments
  'include': ["null"], // [String] | comma-separated list of relationships to include
  'limitAppStoreReviewAttachments': 56 // Number | maximum number of related appStoreReviewAttachments returned (when they are included)
};
apiInstance.appStoreReviewDetailsGetInstance(id, opts, (error, data, response) => {
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
 **fieldsAppStoreReviewDetails** | [**[String]**](String.md)| the fields to include for returned resources of type appStoreReviewDetails | [optional] 
 **fieldsAppStoreReviewAttachments** | [**[String]**](String.md)| the fields to include for returned resources of type appStoreReviewAttachments | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 
 **limitAppStoreReviewAttachments** | **Number**| maximum number of related appStoreReviewAttachments returned (when they are included) | [optional] 

### Return type

[**AppStoreReviewDetailResponse**](AppStoreReviewDetailResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## appStoreReviewDetailsUpdateInstance

> AppStoreReviewDetailResponse appStoreReviewDetailsUpdateInstance(id, appStoreReviewDetailUpdateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppStoreReviewDetailsApi();
let id = "id_example"; // String | the id of the requested resource
let appStoreReviewDetailUpdateRequest = new AppStoreConnectApi.AppStoreReviewDetailUpdateRequest(); // AppStoreReviewDetailUpdateRequest | AppStoreReviewDetail representation
apiInstance.appStoreReviewDetailsUpdateInstance(id, appStoreReviewDetailUpdateRequest, (error, data, response) => {
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
 **appStoreReviewDetailUpdateRequest** | [**AppStoreReviewDetailUpdateRequest**](AppStoreReviewDetailUpdateRequest.md)| AppStoreReviewDetail representation | 

### Return type

[**AppStoreReviewDetailResponse**](AppStoreReviewDetailResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

