# AppStoreConnectApi.AppScreenshotSetsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**appScreenshotSetsAppScreenshotsGetToManyRelated**](AppScreenshotSetsApi.md#appScreenshotSetsAppScreenshotsGetToManyRelated) | **GET** /v1/appScreenshotSets/{id}/appScreenshots | 
[**appScreenshotSetsAppScreenshotsGetToManyRelationship**](AppScreenshotSetsApi.md#appScreenshotSetsAppScreenshotsGetToManyRelationship) | **GET** /v1/appScreenshotSets/{id}/relationships/appScreenshots | 
[**appScreenshotSetsAppScreenshotsReplaceToManyRelationship**](AppScreenshotSetsApi.md#appScreenshotSetsAppScreenshotsReplaceToManyRelationship) | **PATCH** /v1/appScreenshotSets/{id}/relationships/appScreenshots | 
[**appScreenshotSetsCreateInstance**](AppScreenshotSetsApi.md#appScreenshotSetsCreateInstance) | **POST** /v1/appScreenshotSets | 
[**appScreenshotSetsDeleteInstance**](AppScreenshotSetsApi.md#appScreenshotSetsDeleteInstance) | **DELETE** /v1/appScreenshotSets/{id} | 
[**appScreenshotSetsGetInstance**](AppScreenshotSetsApi.md#appScreenshotSetsGetInstance) | **GET** /v1/appScreenshotSets/{id} | 



## appScreenshotSetsAppScreenshotsGetToManyRelated

> AppScreenshotsResponse appScreenshotSetsAppScreenshotsGetToManyRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppScreenshotSetsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsAppScreenshots': ["null"], // [String] | the fields to include for returned resources of type appScreenshots
  'fieldsAppScreenshotSets': ["null"], // [String] | the fields to include for returned resources of type appScreenshotSets
  'limit': 56, // Number | maximum resources per page
  'include': ["null"] // [String] | comma-separated list of relationships to include
};
apiInstance.appScreenshotSetsAppScreenshotsGetToManyRelated(id, opts, (error, data, response) => {
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
 **fieldsAppScreenshotSets** | [**[String]**](String.md)| the fields to include for returned resources of type appScreenshotSets | [optional] 
 **limit** | **Number**| maximum resources per page | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 

### Return type

[**AppScreenshotsResponse**](AppScreenshotsResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## appScreenshotSetsAppScreenshotsGetToManyRelationship

> AppScreenshotSetAppScreenshotsLinkagesResponse appScreenshotSetsAppScreenshotsGetToManyRelationship(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppScreenshotSetsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'limit': 56 // Number | maximum resources per page
};
apiInstance.appScreenshotSetsAppScreenshotsGetToManyRelationship(id, opts, (error, data, response) => {
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

[**AppScreenshotSetAppScreenshotsLinkagesResponse**](AppScreenshotSetAppScreenshotsLinkagesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## appScreenshotSetsAppScreenshotsReplaceToManyRelationship

> appScreenshotSetsAppScreenshotsReplaceToManyRelationship(id, appScreenshotSetAppScreenshotsLinkagesRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppScreenshotSetsApi();
let id = "id_example"; // String | the id of the requested resource
let appScreenshotSetAppScreenshotsLinkagesRequest = new AppStoreConnectApi.AppScreenshotSetAppScreenshotsLinkagesRequest(); // AppScreenshotSetAppScreenshotsLinkagesRequest | List of related linkages
apiInstance.appScreenshotSetsAppScreenshotsReplaceToManyRelationship(id, appScreenshotSetAppScreenshotsLinkagesRequest, (error, data, response) => {
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
 **appScreenshotSetAppScreenshotsLinkagesRequest** | [**AppScreenshotSetAppScreenshotsLinkagesRequest**](AppScreenshotSetAppScreenshotsLinkagesRequest.md)| List of related linkages | 

### Return type

null (empty response body)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## appScreenshotSetsCreateInstance

> AppScreenshotSetResponse appScreenshotSetsCreateInstance(appScreenshotSetCreateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppScreenshotSetsApi();
let appScreenshotSetCreateRequest = new AppStoreConnectApi.AppScreenshotSetCreateRequest(); // AppScreenshotSetCreateRequest | AppScreenshotSet representation
apiInstance.appScreenshotSetsCreateInstance(appScreenshotSetCreateRequest, (error, data, response) => {
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
 **appScreenshotSetCreateRequest** | [**AppScreenshotSetCreateRequest**](AppScreenshotSetCreateRequest.md)| AppScreenshotSet representation | 

### Return type

[**AppScreenshotSetResponse**](AppScreenshotSetResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## appScreenshotSetsDeleteInstance

> appScreenshotSetsDeleteInstance(id)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppScreenshotSetsApi();
let id = "id_example"; // String | the id of the requested resource
apiInstance.appScreenshotSetsDeleteInstance(id, (error, data, response) => {
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


## appScreenshotSetsGetInstance

> AppScreenshotSetResponse appScreenshotSetsGetInstance(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppScreenshotSetsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsAppScreenshotSets': ["null"], // [String] | the fields to include for returned resources of type appScreenshotSets
  'fieldsAppScreenshots': ["null"], // [String] | the fields to include for returned resources of type appScreenshots
  'include': ["null"], // [String] | comma-separated list of relationships to include
  'limitAppScreenshots': 56 // Number | maximum number of related appScreenshots returned (when they are included)
};
apiInstance.appScreenshotSetsGetInstance(id, opts, (error, data, response) => {
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
 **fieldsAppScreenshotSets** | [**[String]**](String.md)| the fields to include for returned resources of type appScreenshotSets | [optional] 
 **fieldsAppScreenshots** | [**[String]**](String.md)| the fields to include for returned resources of type appScreenshots | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 
 **limitAppScreenshots** | **Number**| maximum number of related appScreenshots returned (when they are included) | [optional] 

### Return type

[**AppScreenshotSetResponse**](AppScreenshotSetResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

