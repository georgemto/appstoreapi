# AppStoreConnectApi.AppPreviewSetsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**appPreviewSetsAppPreviewsGetToManyRelated**](AppPreviewSetsApi.md#appPreviewSetsAppPreviewsGetToManyRelated) | **GET** /v1/appPreviewSets/{id}/appPreviews | 
[**appPreviewSetsAppPreviewsGetToManyRelationship**](AppPreviewSetsApi.md#appPreviewSetsAppPreviewsGetToManyRelationship) | **GET** /v1/appPreviewSets/{id}/relationships/appPreviews | 
[**appPreviewSetsAppPreviewsReplaceToManyRelationship**](AppPreviewSetsApi.md#appPreviewSetsAppPreviewsReplaceToManyRelationship) | **PATCH** /v1/appPreviewSets/{id}/relationships/appPreviews | 
[**appPreviewSetsCreateInstance**](AppPreviewSetsApi.md#appPreviewSetsCreateInstance) | **POST** /v1/appPreviewSets | 
[**appPreviewSetsDeleteInstance**](AppPreviewSetsApi.md#appPreviewSetsDeleteInstance) | **DELETE** /v1/appPreviewSets/{id} | 
[**appPreviewSetsGetInstance**](AppPreviewSetsApi.md#appPreviewSetsGetInstance) | **GET** /v1/appPreviewSets/{id} | 



## appPreviewSetsAppPreviewsGetToManyRelated

> AppPreviewsResponse appPreviewSetsAppPreviewsGetToManyRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppPreviewSetsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsAppPreviews': ["null"], // [String] | the fields to include for returned resources of type appPreviews
  'fieldsAppPreviewSets': ["null"], // [String] | the fields to include for returned resources of type appPreviewSets
  'limit': 56, // Number | maximum resources per page
  'include': ["null"] // [String] | comma-separated list of relationships to include
};
apiInstance.appPreviewSetsAppPreviewsGetToManyRelated(id, opts, (error, data, response) => {
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
 **fieldsAppPreviewSets** | [**[String]**](String.md)| the fields to include for returned resources of type appPreviewSets | [optional] 
 **limit** | **Number**| maximum resources per page | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 

### Return type

[**AppPreviewsResponse**](AppPreviewsResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## appPreviewSetsAppPreviewsGetToManyRelationship

> AppPreviewSetAppPreviewsLinkagesResponse appPreviewSetsAppPreviewsGetToManyRelationship(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppPreviewSetsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'limit': 56 // Number | maximum resources per page
};
apiInstance.appPreviewSetsAppPreviewsGetToManyRelationship(id, opts, (error, data, response) => {
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

[**AppPreviewSetAppPreviewsLinkagesResponse**](AppPreviewSetAppPreviewsLinkagesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## appPreviewSetsAppPreviewsReplaceToManyRelationship

> appPreviewSetsAppPreviewsReplaceToManyRelationship(id, appPreviewSetAppPreviewsLinkagesRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppPreviewSetsApi();
let id = "id_example"; // String | the id of the requested resource
let appPreviewSetAppPreviewsLinkagesRequest = new AppStoreConnectApi.AppPreviewSetAppPreviewsLinkagesRequest(); // AppPreviewSetAppPreviewsLinkagesRequest | List of related linkages
apiInstance.appPreviewSetsAppPreviewsReplaceToManyRelationship(id, appPreviewSetAppPreviewsLinkagesRequest, (error, data, response) => {
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
 **appPreviewSetAppPreviewsLinkagesRequest** | [**AppPreviewSetAppPreviewsLinkagesRequest**](AppPreviewSetAppPreviewsLinkagesRequest.md)| List of related linkages | 

### Return type

null (empty response body)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## appPreviewSetsCreateInstance

> AppPreviewSetResponse appPreviewSetsCreateInstance(appPreviewSetCreateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppPreviewSetsApi();
let appPreviewSetCreateRequest = new AppStoreConnectApi.AppPreviewSetCreateRequest(); // AppPreviewSetCreateRequest | AppPreviewSet representation
apiInstance.appPreviewSetsCreateInstance(appPreviewSetCreateRequest, (error, data, response) => {
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
 **appPreviewSetCreateRequest** | [**AppPreviewSetCreateRequest**](AppPreviewSetCreateRequest.md)| AppPreviewSet representation | 

### Return type

[**AppPreviewSetResponse**](AppPreviewSetResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## appPreviewSetsDeleteInstance

> appPreviewSetsDeleteInstance(id)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppPreviewSetsApi();
let id = "id_example"; // String | the id of the requested resource
apiInstance.appPreviewSetsDeleteInstance(id, (error, data, response) => {
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


## appPreviewSetsGetInstance

> AppPreviewSetResponse appPreviewSetsGetInstance(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppPreviewSetsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsAppPreviewSets': ["null"], // [String] | the fields to include for returned resources of type appPreviewSets
  'fieldsAppPreviews': ["null"], // [String] | the fields to include for returned resources of type appPreviews
  'include': ["null"], // [String] | comma-separated list of relationships to include
  'limitAppPreviews': 56 // Number | maximum number of related appPreviews returned (when they are included)
};
apiInstance.appPreviewSetsGetInstance(id, opts, (error, data, response) => {
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
 **fieldsAppPreviewSets** | [**[String]**](String.md)| the fields to include for returned resources of type appPreviewSets | [optional] 
 **fieldsAppPreviews** | [**[String]**](String.md)| the fields to include for returned resources of type appPreviews | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 
 **limitAppPreviews** | **Number**| maximum number of related appPreviews returned (when they are included) | [optional] 

### Return type

[**AppPreviewSetResponse**](AppPreviewSetResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

