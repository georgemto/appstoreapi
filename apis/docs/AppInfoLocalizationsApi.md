# AppStoreConnectApi.AppInfoLocalizationsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**appInfoLocalizationsCreateInstance**](AppInfoLocalizationsApi.md#appInfoLocalizationsCreateInstance) | **POST** /v1/appInfoLocalizations | 
[**appInfoLocalizationsDeleteInstance**](AppInfoLocalizationsApi.md#appInfoLocalizationsDeleteInstance) | **DELETE** /v1/appInfoLocalizations/{id} | 
[**appInfoLocalizationsGetInstance**](AppInfoLocalizationsApi.md#appInfoLocalizationsGetInstance) | **GET** /v1/appInfoLocalizations/{id} | 
[**appInfoLocalizationsUpdateInstance**](AppInfoLocalizationsApi.md#appInfoLocalizationsUpdateInstance) | **PATCH** /v1/appInfoLocalizations/{id} | 



## appInfoLocalizationsCreateInstance

> AppInfoLocalizationResponse appInfoLocalizationsCreateInstance(appInfoLocalizationCreateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppInfoLocalizationsApi();
let appInfoLocalizationCreateRequest = new AppStoreConnectApi.AppInfoLocalizationCreateRequest(); // AppInfoLocalizationCreateRequest | AppInfoLocalization representation
apiInstance.appInfoLocalizationsCreateInstance(appInfoLocalizationCreateRequest, (error, data, response) => {
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
 **appInfoLocalizationCreateRequest** | [**AppInfoLocalizationCreateRequest**](AppInfoLocalizationCreateRequest.md)| AppInfoLocalization representation | 

### Return type

[**AppInfoLocalizationResponse**](AppInfoLocalizationResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## appInfoLocalizationsDeleteInstance

> appInfoLocalizationsDeleteInstance(id)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppInfoLocalizationsApi();
let id = "id_example"; // String | the id of the requested resource
apiInstance.appInfoLocalizationsDeleteInstance(id, (error, data, response) => {
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


## appInfoLocalizationsGetInstance

> AppInfoLocalizationResponse appInfoLocalizationsGetInstance(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppInfoLocalizationsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsAppInfoLocalizations': ["null"], // [String] | the fields to include for returned resources of type appInfoLocalizations
  'include': ["null"] // [String] | comma-separated list of relationships to include
};
apiInstance.appInfoLocalizationsGetInstance(id, opts, (error, data, response) => {
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
 **fieldsAppInfoLocalizations** | [**[String]**](String.md)| the fields to include for returned resources of type appInfoLocalizations | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 

### Return type

[**AppInfoLocalizationResponse**](AppInfoLocalizationResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## appInfoLocalizationsUpdateInstance

> AppInfoLocalizationResponse appInfoLocalizationsUpdateInstance(id, appInfoLocalizationUpdateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppInfoLocalizationsApi();
let id = "id_example"; // String | the id of the requested resource
let appInfoLocalizationUpdateRequest = new AppStoreConnectApi.AppInfoLocalizationUpdateRequest(); // AppInfoLocalizationUpdateRequest | AppInfoLocalization representation
apiInstance.appInfoLocalizationsUpdateInstance(id, appInfoLocalizationUpdateRequest, (error, data, response) => {
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
 **appInfoLocalizationUpdateRequest** | [**AppInfoLocalizationUpdateRequest**](AppInfoLocalizationUpdateRequest.md)| AppInfoLocalization representation | 

### Return type

[**AppInfoLocalizationResponse**](AppInfoLocalizationResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

