# AppStoreConnectApi.BetaAppLocalizationsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**betaAppLocalizationsAppGetToOneRelated**](BetaAppLocalizationsApi.md#betaAppLocalizationsAppGetToOneRelated) | **GET** /v1/betaAppLocalizations/{id}/app | 
[**betaAppLocalizationsAppGetToOneRelationship**](BetaAppLocalizationsApi.md#betaAppLocalizationsAppGetToOneRelationship) | **GET** /v1/betaAppLocalizations/{id}/relationships/app | 
[**betaAppLocalizationsCreateInstance**](BetaAppLocalizationsApi.md#betaAppLocalizationsCreateInstance) | **POST** /v1/betaAppLocalizations | 
[**betaAppLocalizationsDeleteInstance**](BetaAppLocalizationsApi.md#betaAppLocalizationsDeleteInstance) | **DELETE** /v1/betaAppLocalizations/{id} | 
[**betaAppLocalizationsGetCollection**](BetaAppLocalizationsApi.md#betaAppLocalizationsGetCollection) | **GET** /v1/betaAppLocalizations | 
[**betaAppLocalizationsGetInstance**](BetaAppLocalizationsApi.md#betaAppLocalizationsGetInstance) | **GET** /v1/betaAppLocalizations/{id} | 
[**betaAppLocalizationsUpdateInstance**](BetaAppLocalizationsApi.md#betaAppLocalizationsUpdateInstance) | **PATCH** /v1/betaAppLocalizations/{id} | 



## betaAppLocalizationsAppGetToOneRelated

> AppWithoutIncludesResponse betaAppLocalizationsAppGetToOneRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.BetaAppLocalizationsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsApps': ["null"] // [String] | the fields to include for returned resources of type apps
};
apiInstance.betaAppLocalizationsAppGetToOneRelated(id, opts, (error, data, response) => {
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
 **fieldsApps** | [**[String]**](String.md)| the fields to include for returned resources of type apps | [optional] 

### Return type

[**AppWithoutIncludesResponse**](AppWithoutIncludesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## betaAppLocalizationsAppGetToOneRelationship

> BetaAppLocalizationAppLinkageResponse betaAppLocalizationsAppGetToOneRelationship(id)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.BetaAppLocalizationsApi();
let id = "id_example"; // String | the id of the requested resource
apiInstance.betaAppLocalizationsAppGetToOneRelationship(id, (error, data, response) => {
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

### Return type

[**BetaAppLocalizationAppLinkageResponse**](BetaAppLocalizationAppLinkageResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## betaAppLocalizationsCreateInstance

> BetaAppLocalizationResponse betaAppLocalizationsCreateInstance(betaAppLocalizationCreateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.BetaAppLocalizationsApi();
let betaAppLocalizationCreateRequest = new AppStoreConnectApi.BetaAppLocalizationCreateRequest(); // BetaAppLocalizationCreateRequest | BetaAppLocalization representation
apiInstance.betaAppLocalizationsCreateInstance(betaAppLocalizationCreateRequest, (error, data, response) => {
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
 **betaAppLocalizationCreateRequest** | [**BetaAppLocalizationCreateRequest**](BetaAppLocalizationCreateRequest.md)| BetaAppLocalization representation | 

### Return type

[**BetaAppLocalizationResponse**](BetaAppLocalizationResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## betaAppLocalizationsDeleteInstance

> betaAppLocalizationsDeleteInstance(id)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.BetaAppLocalizationsApi();
let id = "id_example"; // String | the id of the requested resource
apiInstance.betaAppLocalizationsDeleteInstance(id, (error, data, response) => {
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


## betaAppLocalizationsGetCollection

> BetaAppLocalizationsResponse betaAppLocalizationsGetCollection(opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.BetaAppLocalizationsApi();
let opts = {
  'filterLocale': ["null"], // [String] | filter by attribute 'locale'
  'filterApp': ["null"], // [String] | filter by id(s) of related 'app'
  'fieldsBetaAppLocalizations': ["null"], // [String] | the fields to include for returned resources of type betaAppLocalizations
  'fieldsApps': ["null"], // [String] | the fields to include for returned resources of type apps
  'limit': 56, // Number | maximum resources per page
  'include': ["null"] // [String] | comma-separated list of relationships to include
};
apiInstance.betaAppLocalizationsGetCollection(opts, (error, data, response) => {
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
 **filterLocale** | [**[String]**](String.md)| filter by attribute &#39;locale&#39; | [optional] 
 **filterApp** | [**[String]**](String.md)| filter by id(s) of related &#39;app&#39; | [optional] 
 **fieldsBetaAppLocalizations** | [**[String]**](String.md)| the fields to include for returned resources of type betaAppLocalizations | [optional] 
 **fieldsApps** | [**[String]**](String.md)| the fields to include for returned resources of type apps | [optional] 
 **limit** | **Number**| maximum resources per page | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 

### Return type

[**BetaAppLocalizationsResponse**](BetaAppLocalizationsResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## betaAppLocalizationsGetInstance

> BetaAppLocalizationResponse betaAppLocalizationsGetInstance(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.BetaAppLocalizationsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsBetaAppLocalizations': ["null"], // [String] | the fields to include for returned resources of type betaAppLocalizations
  'fieldsApps': ["null"], // [String] | the fields to include for returned resources of type apps
  'include': ["null"] // [String] | comma-separated list of relationships to include
};
apiInstance.betaAppLocalizationsGetInstance(id, opts, (error, data, response) => {
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
 **fieldsBetaAppLocalizations** | [**[String]**](String.md)| the fields to include for returned resources of type betaAppLocalizations | [optional] 
 **fieldsApps** | [**[String]**](String.md)| the fields to include for returned resources of type apps | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 

### Return type

[**BetaAppLocalizationResponse**](BetaAppLocalizationResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## betaAppLocalizationsUpdateInstance

> BetaAppLocalizationResponse betaAppLocalizationsUpdateInstance(id, betaAppLocalizationUpdateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.BetaAppLocalizationsApi();
let id = "id_example"; // String | the id of the requested resource
let betaAppLocalizationUpdateRequest = new AppStoreConnectApi.BetaAppLocalizationUpdateRequest(); // BetaAppLocalizationUpdateRequest | BetaAppLocalization representation
apiInstance.betaAppLocalizationsUpdateInstance(id, betaAppLocalizationUpdateRequest, (error, data, response) => {
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
 **betaAppLocalizationUpdateRequest** | [**BetaAppLocalizationUpdateRequest**](BetaAppLocalizationUpdateRequest.md)| BetaAppLocalization representation | 

### Return type

[**BetaAppLocalizationResponse**](BetaAppLocalizationResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

