# AppStoreConnectApi.AppClipDefaultExperienceLocalizationsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**appClipDefaultExperienceLocalizationsAppClipHeaderImageGetToOneRelated**](AppClipDefaultExperienceLocalizationsApi.md#appClipDefaultExperienceLocalizationsAppClipHeaderImageGetToOneRelated) | **GET** /v1/appClipDefaultExperienceLocalizations/{id}/appClipHeaderImage | 
[**appClipDefaultExperienceLocalizationsAppClipHeaderImageGetToOneRelationship**](AppClipDefaultExperienceLocalizationsApi.md#appClipDefaultExperienceLocalizationsAppClipHeaderImageGetToOneRelationship) | **GET** /v1/appClipDefaultExperienceLocalizations/{id}/relationships/appClipHeaderImage | 
[**appClipDefaultExperienceLocalizationsCreateInstance**](AppClipDefaultExperienceLocalizationsApi.md#appClipDefaultExperienceLocalizationsCreateInstance) | **POST** /v1/appClipDefaultExperienceLocalizations | 
[**appClipDefaultExperienceLocalizationsDeleteInstance**](AppClipDefaultExperienceLocalizationsApi.md#appClipDefaultExperienceLocalizationsDeleteInstance) | **DELETE** /v1/appClipDefaultExperienceLocalizations/{id} | 
[**appClipDefaultExperienceLocalizationsGetInstance**](AppClipDefaultExperienceLocalizationsApi.md#appClipDefaultExperienceLocalizationsGetInstance) | **GET** /v1/appClipDefaultExperienceLocalizations/{id} | 
[**appClipDefaultExperienceLocalizationsUpdateInstance**](AppClipDefaultExperienceLocalizationsApi.md#appClipDefaultExperienceLocalizationsUpdateInstance) | **PATCH** /v1/appClipDefaultExperienceLocalizations/{id} | 



## appClipDefaultExperienceLocalizationsAppClipHeaderImageGetToOneRelated

> AppClipHeaderImageResponse appClipDefaultExperienceLocalizationsAppClipHeaderImageGetToOneRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppClipDefaultExperienceLocalizationsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsAppClipHeaderImages': ["null"], // [String] | the fields to include for returned resources of type appClipHeaderImages
  'fieldsAppClipDefaultExperienceLocalizations': ["null"], // [String] | the fields to include for returned resources of type appClipDefaultExperienceLocalizations
  'include': ["null"] // [String] | comma-separated list of relationships to include
};
apiInstance.appClipDefaultExperienceLocalizationsAppClipHeaderImageGetToOneRelated(id, opts, (error, data, response) => {
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
 **fieldsAppClipHeaderImages** | [**[String]**](String.md)| the fields to include for returned resources of type appClipHeaderImages | [optional] 
 **fieldsAppClipDefaultExperienceLocalizations** | [**[String]**](String.md)| the fields to include for returned resources of type appClipDefaultExperienceLocalizations | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 

### Return type

[**AppClipHeaderImageResponse**](AppClipHeaderImageResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## appClipDefaultExperienceLocalizationsAppClipHeaderImageGetToOneRelationship

> AppClipDefaultExperienceLocalizationAppClipHeaderImageLinkageResponse appClipDefaultExperienceLocalizationsAppClipHeaderImageGetToOneRelationship(id)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppClipDefaultExperienceLocalizationsApi();
let id = "id_example"; // String | the id of the requested resource
apiInstance.appClipDefaultExperienceLocalizationsAppClipHeaderImageGetToOneRelationship(id, (error, data, response) => {
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

[**AppClipDefaultExperienceLocalizationAppClipHeaderImageLinkageResponse**](AppClipDefaultExperienceLocalizationAppClipHeaderImageLinkageResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## appClipDefaultExperienceLocalizationsCreateInstance

> AppClipDefaultExperienceLocalizationResponse appClipDefaultExperienceLocalizationsCreateInstance(appClipDefaultExperienceLocalizationCreateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppClipDefaultExperienceLocalizationsApi();
let appClipDefaultExperienceLocalizationCreateRequest = new AppStoreConnectApi.AppClipDefaultExperienceLocalizationCreateRequest(); // AppClipDefaultExperienceLocalizationCreateRequest | AppClipDefaultExperienceLocalization representation
apiInstance.appClipDefaultExperienceLocalizationsCreateInstance(appClipDefaultExperienceLocalizationCreateRequest, (error, data, response) => {
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
 **appClipDefaultExperienceLocalizationCreateRequest** | [**AppClipDefaultExperienceLocalizationCreateRequest**](AppClipDefaultExperienceLocalizationCreateRequest.md)| AppClipDefaultExperienceLocalization representation | 

### Return type

[**AppClipDefaultExperienceLocalizationResponse**](AppClipDefaultExperienceLocalizationResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## appClipDefaultExperienceLocalizationsDeleteInstance

> appClipDefaultExperienceLocalizationsDeleteInstance(id)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppClipDefaultExperienceLocalizationsApi();
let id = "id_example"; // String | the id of the requested resource
apiInstance.appClipDefaultExperienceLocalizationsDeleteInstance(id, (error, data, response) => {
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


## appClipDefaultExperienceLocalizationsGetInstance

> AppClipDefaultExperienceLocalizationResponse appClipDefaultExperienceLocalizationsGetInstance(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppClipDefaultExperienceLocalizationsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsAppClipDefaultExperienceLocalizations': ["null"], // [String] | the fields to include for returned resources of type appClipDefaultExperienceLocalizations
  'fieldsAppClipHeaderImages': ["null"], // [String] | the fields to include for returned resources of type appClipHeaderImages
  'include': ["null"] // [String] | comma-separated list of relationships to include
};
apiInstance.appClipDefaultExperienceLocalizationsGetInstance(id, opts, (error, data, response) => {
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
 **fieldsAppClipDefaultExperienceLocalizations** | [**[String]**](String.md)| the fields to include for returned resources of type appClipDefaultExperienceLocalizations | [optional] 
 **fieldsAppClipHeaderImages** | [**[String]**](String.md)| the fields to include for returned resources of type appClipHeaderImages | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 

### Return type

[**AppClipDefaultExperienceLocalizationResponse**](AppClipDefaultExperienceLocalizationResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## appClipDefaultExperienceLocalizationsUpdateInstance

> AppClipDefaultExperienceLocalizationResponse appClipDefaultExperienceLocalizationsUpdateInstance(id, appClipDefaultExperienceLocalizationUpdateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppClipDefaultExperienceLocalizationsApi();
let id = "id_example"; // String | the id of the requested resource
let appClipDefaultExperienceLocalizationUpdateRequest = new AppStoreConnectApi.AppClipDefaultExperienceLocalizationUpdateRequest(); // AppClipDefaultExperienceLocalizationUpdateRequest | AppClipDefaultExperienceLocalization representation
apiInstance.appClipDefaultExperienceLocalizationsUpdateInstance(id, appClipDefaultExperienceLocalizationUpdateRequest, (error, data, response) => {
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
 **appClipDefaultExperienceLocalizationUpdateRequest** | [**AppClipDefaultExperienceLocalizationUpdateRequest**](AppClipDefaultExperienceLocalizationUpdateRequest.md)| AppClipDefaultExperienceLocalization representation | 

### Return type

[**AppClipDefaultExperienceLocalizationResponse**](AppClipDefaultExperienceLocalizationResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

