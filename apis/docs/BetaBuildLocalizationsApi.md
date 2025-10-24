# AppStoreConnectApi.BetaBuildLocalizationsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**betaBuildLocalizationsBuildGetToOneRelated**](BetaBuildLocalizationsApi.md#betaBuildLocalizationsBuildGetToOneRelated) | **GET** /v1/betaBuildLocalizations/{id}/build | 
[**betaBuildLocalizationsBuildGetToOneRelationship**](BetaBuildLocalizationsApi.md#betaBuildLocalizationsBuildGetToOneRelationship) | **GET** /v1/betaBuildLocalizations/{id}/relationships/build | 
[**betaBuildLocalizationsCreateInstance**](BetaBuildLocalizationsApi.md#betaBuildLocalizationsCreateInstance) | **POST** /v1/betaBuildLocalizations | 
[**betaBuildLocalizationsDeleteInstance**](BetaBuildLocalizationsApi.md#betaBuildLocalizationsDeleteInstance) | **DELETE** /v1/betaBuildLocalizations/{id} | 
[**betaBuildLocalizationsGetCollection**](BetaBuildLocalizationsApi.md#betaBuildLocalizationsGetCollection) | **GET** /v1/betaBuildLocalizations | 
[**betaBuildLocalizationsGetInstance**](BetaBuildLocalizationsApi.md#betaBuildLocalizationsGetInstance) | **GET** /v1/betaBuildLocalizations/{id} | 
[**betaBuildLocalizationsUpdateInstance**](BetaBuildLocalizationsApi.md#betaBuildLocalizationsUpdateInstance) | **PATCH** /v1/betaBuildLocalizations/{id} | 



## betaBuildLocalizationsBuildGetToOneRelated

> BuildWithoutIncludesResponse betaBuildLocalizationsBuildGetToOneRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.BetaBuildLocalizationsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsBuilds': ["null"] // [String] | the fields to include for returned resources of type builds
};
apiInstance.betaBuildLocalizationsBuildGetToOneRelated(id, opts, (error, data, response) => {
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
 **fieldsBuilds** | [**[String]**](String.md)| the fields to include for returned resources of type builds | [optional] 

### Return type

[**BuildWithoutIncludesResponse**](BuildWithoutIncludesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## betaBuildLocalizationsBuildGetToOneRelationship

> BetaBuildLocalizationBuildLinkageResponse betaBuildLocalizationsBuildGetToOneRelationship(id)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.BetaBuildLocalizationsApi();
let id = "id_example"; // String | the id of the requested resource
apiInstance.betaBuildLocalizationsBuildGetToOneRelationship(id, (error, data, response) => {
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

[**BetaBuildLocalizationBuildLinkageResponse**](BetaBuildLocalizationBuildLinkageResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## betaBuildLocalizationsCreateInstance

> BetaBuildLocalizationResponse betaBuildLocalizationsCreateInstance(betaBuildLocalizationCreateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.BetaBuildLocalizationsApi();
let betaBuildLocalizationCreateRequest = new AppStoreConnectApi.BetaBuildLocalizationCreateRequest(); // BetaBuildLocalizationCreateRequest | BetaBuildLocalization representation
apiInstance.betaBuildLocalizationsCreateInstance(betaBuildLocalizationCreateRequest, (error, data, response) => {
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
 **betaBuildLocalizationCreateRequest** | [**BetaBuildLocalizationCreateRequest**](BetaBuildLocalizationCreateRequest.md)| BetaBuildLocalization representation | 

### Return type

[**BetaBuildLocalizationResponse**](BetaBuildLocalizationResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## betaBuildLocalizationsDeleteInstance

> betaBuildLocalizationsDeleteInstance(id)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.BetaBuildLocalizationsApi();
let id = "id_example"; // String | the id of the requested resource
apiInstance.betaBuildLocalizationsDeleteInstance(id, (error, data, response) => {
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


## betaBuildLocalizationsGetCollection

> BetaBuildLocalizationsResponse betaBuildLocalizationsGetCollection(opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.BetaBuildLocalizationsApi();
let opts = {
  'filterLocale': ["null"], // [String] | filter by attribute 'locale'
  'filterBuild': ["null"], // [String] | filter by id(s) of related 'build'
  'fieldsBetaBuildLocalizations': ["null"], // [String] | the fields to include for returned resources of type betaBuildLocalizations
  'fieldsBuilds': ["null"], // [String] | the fields to include for returned resources of type builds
  'limit': 56, // Number | maximum resources per page
  'include': ["null"] // [String] | comma-separated list of relationships to include
};
apiInstance.betaBuildLocalizationsGetCollection(opts, (error, data, response) => {
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
 **filterBuild** | [**[String]**](String.md)| filter by id(s) of related &#39;build&#39; | [optional] 
 **fieldsBetaBuildLocalizations** | [**[String]**](String.md)| the fields to include for returned resources of type betaBuildLocalizations | [optional] 
 **fieldsBuilds** | [**[String]**](String.md)| the fields to include for returned resources of type builds | [optional] 
 **limit** | **Number**| maximum resources per page | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 

### Return type

[**BetaBuildLocalizationsResponse**](BetaBuildLocalizationsResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## betaBuildLocalizationsGetInstance

> BetaBuildLocalizationResponse betaBuildLocalizationsGetInstance(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.BetaBuildLocalizationsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsBetaBuildLocalizations': ["null"], // [String] | the fields to include for returned resources of type betaBuildLocalizations
  'fieldsBuilds': ["null"], // [String] | the fields to include for returned resources of type builds
  'include': ["null"] // [String] | comma-separated list of relationships to include
};
apiInstance.betaBuildLocalizationsGetInstance(id, opts, (error, data, response) => {
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
 **fieldsBetaBuildLocalizations** | [**[String]**](String.md)| the fields to include for returned resources of type betaBuildLocalizations | [optional] 
 **fieldsBuilds** | [**[String]**](String.md)| the fields to include for returned resources of type builds | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 

### Return type

[**BetaBuildLocalizationResponse**](BetaBuildLocalizationResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## betaBuildLocalizationsUpdateInstance

> BetaBuildLocalizationResponse betaBuildLocalizationsUpdateInstance(id, betaBuildLocalizationUpdateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.BetaBuildLocalizationsApi();
let id = "id_example"; // String | the id of the requested resource
let betaBuildLocalizationUpdateRequest = new AppStoreConnectApi.BetaBuildLocalizationUpdateRequest(); // BetaBuildLocalizationUpdateRequest | BetaBuildLocalization representation
apiInstance.betaBuildLocalizationsUpdateInstance(id, betaBuildLocalizationUpdateRequest, (error, data, response) => {
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
 **betaBuildLocalizationUpdateRequest** | [**BetaBuildLocalizationUpdateRequest**](BetaBuildLocalizationUpdateRequest.md)| BetaBuildLocalization representation | 

### Return type

[**BetaBuildLocalizationResponse**](BetaBuildLocalizationResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

