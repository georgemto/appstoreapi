# AppStoreConnectApi.AppClipAdvancedExperiencesApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**appClipAdvancedExperiencesCreateInstance**](AppClipAdvancedExperiencesApi.md#appClipAdvancedExperiencesCreateInstance) | **POST** /v1/appClipAdvancedExperiences | 
[**appClipAdvancedExperiencesGetInstance**](AppClipAdvancedExperiencesApi.md#appClipAdvancedExperiencesGetInstance) | **GET** /v1/appClipAdvancedExperiences/{id} | 
[**appClipAdvancedExperiencesUpdateInstance**](AppClipAdvancedExperiencesApi.md#appClipAdvancedExperiencesUpdateInstance) | **PATCH** /v1/appClipAdvancedExperiences/{id} | 



## appClipAdvancedExperiencesCreateInstance

> AppClipAdvancedExperienceResponse appClipAdvancedExperiencesCreateInstance(appClipAdvancedExperienceCreateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppClipAdvancedExperiencesApi();
let appClipAdvancedExperienceCreateRequest = new AppStoreConnectApi.AppClipAdvancedExperienceCreateRequest(); // AppClipAdvancedExperienceCreateRequest | AppClipAdvancedExperience representation
apiInstance.appClipAdvancedExperiencesCreateInstance(appClipAdvancedExperienceCreateRequest, (error, data, response) => {
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
 **appClipAdvancedExperienceCreateRequest** | [**AppClipAdvancedExperienceCreateRequest**](AppClipAdvancedExperienceCreateRequest.md)| AppClipAdvancedExperience representation | 

### Return type

[**AppClipAdvancedExperienceResponse**](AppClipAdvancedExperienceResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## appClipAdvancedExperiencesGetInstance

> AppClipAdvancedExperienceResponse appClipAdvancedExperiencesGetInstance(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppClipAdvancedExperiencesApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsAppClipAdvancedExperiences': ["null"], // [String] | the fields to include for returned resources of type appClipAdvancedExperiences
  'include': ["null"], // [String] | comma-separated list of relationships to include
  'limitLocalizations': 56 // Number | maximum number of related localizations returned (when they are included)
};
apiInstance.appClipAdvancedExperiencesGetInstance(id, opts, (error, data, response) => {
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
 **fieldsAppClipAdvancedExperiences** | [**[String]**](String.md)| the fields to include for returned resources of type appClipAdvancedExperiences | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 
 **limitLocalizations** | **Number**| maximum number of related localizations returned (when they are included) | [optional] 

### Return type

[**AppClipAdvancedExperienceResponse**](AppClipAdvancedExperienceResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## appClipAdvancedExperiencesUpdateInstance

> AppClipAdvancedExperienceResponse appClipAdvancedExperiencesUpdateInstance(id, appClipAdvancedExperienceUpdateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppClipAdvancedExperiencesApi();
let id = "id_example"; // String | the id of the requested resource
let appClipAdvancedExperienceUpdateRequest = new AppStoreConnectApi.AppClipAdvancedExperienceUpdateRequest(); // AppClipAdvancedExperienceUpdateRequest | AppClipAdvancedExperience representation
apiInstance.appClipAdvancedExperiencesUpdateInstance(id, appClipAdvancedExperienceUpdateRequest, (error, data, response) => {
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
 **appClipAdvancedExperienceUpdateRequest** | [**AppClipAdvancedExperienceUpdateRequest**](AppClipAdvancedExperienceUpdateRequest.md)| AppClipAdvancedExperience representation | 

### Return type

[**AppClipAdvancedExperienceResponse**](AppClipAdvancedExperienceResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

