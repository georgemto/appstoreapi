# AppStoreConnectApi.AppCustomProductPagesApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**appCustomProductPagesAppCustomProductPageVersionsGetToManyRelated**](AppCustomProductPagesApi.md#appCustomProductPagesAppCustomProductPageVersionsGetToManyRelated) | **GET** /v1/appCustomProductPages/{id}/appCustomProductPageVersions | 
[**appCustomProductPagesAppCustomProductPageVersionsGetToManyRelationship**](AppCustomProductPagesApi.md#appCustomProductPagesAppCustomProductPageVersionsGetToManyRelationship) | **GET** /v1/appCustomProductPages/{id}/relationships/appCustomProductPageVersions | 
[**appCustomProductPagesCreateInstance**](AppCustomProductPagesApi.md#appCustomProductPagesCreateInstance) | **POST** /v1/appCustomProductPages | 
[**appCustomProductPagesDeleteInstance**](AppCustomProductPagesApi.md#appCustomProductPagesDeleteInstance) | **DELETE** /v1/appCustomProductPages/{id} | 
[**appCustomProductPagesGetInstance**](AppCustomProductPagesApi.md#appCustomProductPagesGetInstance) | **GET** /v1/appCustomProductPages/{id} | 
[**appCustomProductPagesUpdateInstance**](AppCustomProductPagesApi.md#appCustomProductPagesUpdateInstance) | **PATCH** /v1/appCustomProductPages/{id} | 



## appCustomProductPagesAppCustomProductPageVersionsGetToManyRelated

> AppCustomProductPageVersionsResponse appCustomProductPagesAppCustomProductPageVersionsGetToManyRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppCustomProductPagesApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'filterState': ["null"], // [String] | filter by attribute 'state'
  'fieldsAppCustomProductPageVersions': ["null"], // [String] | the fields to include for returned resources of type appCustomProductPageVersions
  'fieldsAppCustomProductPages': ["null"], // [String] | the fields to include for returned resources of type appCustomProductPages
  'fieldsAppCustomProductPageLocalizations': ["null"], // [String] | the fields to include for returned resources of type appCustomProductPageLocalizations
  'limit': 56, // Number | maximum resources per page
  'include': ["null"], // [String] | comma-separated list of relationships to include
  'limitAppCustomProductPageLocalizations': 56 // Number | maximum number of related appCustomProductPageLocalizations returned (when they are included)
};
apiInstance.appCustomProductPagesAppCustomProductPageVersionsGetToManyRelated(id, opts, (error, data, response) => {
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
 **filterState** | [**[String]**](String.md)| filter by attribute &#39;state&#39; | [optional] 
 **fieldsAppCustomProductPageVersions** | [**[String]**](String.md)| the fields to include for returned resources of type appCustomProductPageVersions | [optional] 
 **fieldsAppCustomProductPages** | [**[String]**](String.md)| the fields to include for returned resources of type appCustomProductPages | [optional] 
 **fieldsAppCustomProductPageLocalizations** | [**[String]**](String.md)| the fields to include for returned resources of type appCustomProductPageLocalizations | [optional] 
 **limit** | **Number**| maximum resources per page | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 
 **limitAppCustomProductPageLocalizations** | **Number**| maximum number of related appCustomProductPageLocalizations returned (when they are included) | [optional] 

### Return type

[**AppCustomProductPageVersionsResponse**](AppCustomProductPageVersionsResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## appCustomProductPagesAppCustomProductPageVersionsGetToManyRelationship

> AppCustomProductPageAppCustomProductPageVersionsLinkagesResponse appCustomProductPagesAppCustomProductPageVersionsGetToManyRelationship(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppCustomProductPagesApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'limit': 56 // Number | maximum resources per page
};
apiInstance.appCustomProductPagesAppCustomProductPageVersionsGetToManyRelationship(id, opts, (error, data, response) => {
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

[**AppCustomProductPageAppCustomProductPageVersionsLinkagesResponse**](AppCustomProductPageAppCustomProductPageVersionsLinkagesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## appCustomProductPagesCreateInstance

> AppCustomProductPageResponse appCustomProductPagesCreateInstance(appCustomProductPageCreateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppCustomProductPagesApi();
let appCustomProductPageCreateRequest = new AppStoreConnectApi.AppCustomProductPageCreateRequest(); // AppCustomProductPageCreateRequest | AppCustomProductPage representation
apiInstance.appCustomProductPagesCreateInstance(appCustomProductPageCreateRequest, (error, data, response) => {
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
 **appCustomProductPageCreateRequest** | [**AppCustomProductPageCreateRequest**](AppCustomProductPageCreateRequest.md)| AppCustomProductPage representation | 

### Return type

[**AppCustomProductPageResponse**](AppCustomProductPageResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## appCustomProductPagesDeleteInstance

> appCustomProductPagesDeleteInstance(id)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppCustomProductPagesApi();
let id = "id_example"; // String | the id of the requested resource
apiInstance.appCustomProductPagesDeleteInstance(id, (error, data, response) => {
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


## appCustomProductPagesGetInstance

> AppCustomProductPageResponse appCustomProductPagesGetInstance(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppCustomProductPagesApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsAppCustomProductPages': ["null"], // [String] | the fields to include for returned resources of type appCustomProductPages
  'fieldsAppCustomProductPageVersions': ["null"], // [String] | the fields to include for returned resources of type appCustomProductPageVersions
  'include': ["null"], // [String] | comma-separated list of relationships to include
  'limitAppCustomProductPageVersions': 56 // Number | maximum number of related appCustomProductPageVersions returned (when they are included)
};
apiInstance.appCustomProductPagesGetInstance(id, opts, (error, data, response) => {
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
 **fieldsAppCustomProductPages** | [**[String]**](String.md)| the fields to include for returned resources of type appCustomProductPages | [optional] 
 **fieldsAppCustomProductPageVersions** | [**[String]**](String.md)| the fields to include for returned resources of type appCustomProductPageVersions | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 
 **limitAppCustomProductPageVersions** | **Number**| maximum number of related appCustomProductPageVersions returned (when they are included) | [optional] 

### Return type

[**AppCustomProductPageResponse**](AppCustomProductPageResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## appCustomProductPagesUpdateInstance

> AppCustomProductPageResponse appCustomProductPagesUpdateInstance(id, appCustomProductPageUpdateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppCustomProductPagesApi();
let id = "id_example"; // String | the id of the requested resource
let appCustomProductPageUpdateRequest = new AppStoreConnectApi.AppCustomProductPageUpdateRequest(); // AppCustomProductPageUpdateRequest | AppCustomProductPage representation
apiInstance.appCustomProductPagesUpdateInstance(id, appCustomProductPageUpdateRequest, (error, data, response) => {
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
 **appCustomProductPageUpdateRequest** | [**AppCustomProductPageUpdateRequest**](AppCustomProductPageUpdateRequest.md)| AppCustomProductPage representation | 

### Return type

[**AppCustomProductPageResponse**](AppCustomProductPageResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

