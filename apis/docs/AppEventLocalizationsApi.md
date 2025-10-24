# AppStoreConnectApi.AppEventLocalizationsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**appEventLocalizationsAppEventScreenshotsGetToManyRelated**](AppEventLocalizationsApi.md#appEventLocalizationsAppEventScreenshotsGetToManyRelated) | **GET** /v1/appEventLocalizations/{id}/appEventScreenshots | 
[**appEventLocalizationsAppEventScreenshotsGetToManyRelationship**](AppEventLocalizationsApi.md#appEventLocalizationsAppEventScreenshotsGetToManyRelationship) | **GET** /v1/appEventLocalizations/{id}/relationships/appEventScreenshots | 
[**appEventLocalizationsAppEventVideoClipsGetToManyRelated**](AppEventLocalizationsApi.md#appEventLocalizationsAppEventVideoClipsGetToManyRelated) | **GET** /v1/appEventLocalizations/{id}/appEventVideoClips | 
[**appEventLocalizationsAppEventVideoClipsGetToManyRelationship**](AppEventLocalizationsApi.md#appEventLocalizationsAppEventVideoClipsGetToManyRelationship) | **GET** /v1/appEventLocalizations/{id}/relationships/appEventVideoClips | 
[**appEventLocalizationsCreateInstance**](AppEventLocalizationsApi.md#appEventLocalizationsCreateInstance) | **POST** /v1/appEventLocalizations | 
[**appEventLocalizationsDeleteInstance**](AppEventLocalizationsApi.md#appEventLocalizationsDeleteInstance) | **DELETE** /v1/appEventLocalizations/{id} | 
[**appEventLocalizationsGetInstance**](AppEventLocalizationsApi.md#appEventLocalizationsGetInstance) | **GET** /v1/appEventLocalizations/{id} | 
[**appEventLocalizationsUpdateInstance**](AppEventLocalizationsApi.md#appEventLocalizationsUpdateInstance) | **PATCH** /v1/appEventLocalizations/{id} | 



## appEventLocalizationsAppEventScreenshotsGetToManyRelated

> AppEventScreenshotsResponse appEventLocalizationsAppEventScreenshotsGetToManyRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppEventLocalizationsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsAppEventScreenshots': ["null"], // [String] | the fields to include for returned resources of type appEventScreenshots
  'fieldsAppEventLocalizations': ["null"], // [String] | the fields to include for returned resources of type appEventLocalizations
  'limit': 56, // Number | maximum resources per page
  'include': ["null"] // [String] | comma-separated list of relationships to include
};
apiInstance.appEventLocalizationsAppEventScreenshotsGetToManyRelated(id, opts, (error, data, response) => {
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
 **fieldsAppEventScreenshots** | [**[String]**](String.md)| the fields to include for returned resources of type appEventScreenshots | [optional] 
 **fieldsAppEventLocalizations** | [**[String]**](String.md)| the fields to include for returned resources of type appEventLocalizations | [optional] 
 **limit** | **Number**| maximum resources per page | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 

### Return type

[**AppEventScreenshotsResponse**](AppEventScreenshotsResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## appEventLocalizationsAppEventScreenshotsGetToManyRelationship

> AppEventLocalizationAppEventScreenshotsLinkagesResponse appEventLocalizationsAppEventScreenshotsGetToManyRelationship(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppEventLocalizationsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'limit': 56 // Number | maximum resources per page
};
apiInstance.appEventLocalizationsAppEventScreenshotsGetToManyRelationship(id, opts, (error, data, response) => {
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

[**AppEventLocalizationAppEventScreenshotsLinkagesResponse**](AppEventLocalizationAppEventScreenshotsLinkagesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## appEventLocalizationsAppEventVideoClipsGetToManyRelated

> AppEventVideoClipsResponse appEventLocalizationsAppEventVideoClipsGetToManyRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppEventLocalizationsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsAppEventVideoClips': ["null"], // [String] | the fields to include for returned resources of type appEventVideoClips
  'fieldsAppEventLocalizations': ["null"], // [String] | the fields to include for returned resources of type appEventLocalizations
  'limit': 56, // Number | maximum resources per page
  'include': ["null"] // [String] | comma-separated list of relationships to include
};
apiInstance.appEventLocalizationsAppEventVideoClipsGetToManyRelated(id, opts, (error, data, response) => {
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
 **fieldsAppEventVideoClips** | [**[String]**](String.md)| the fields to include for returned resources of type appEventVideoClips | [optional] 
 **fieldsAppEventLocalizations** | [**[String]**](String.md)| the fields to include for returned resources of type appEventLocalizations | [optional] 
 **limit** | **Number**| maximum resources per page | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 

### Return type

[**AppEventVideoClipsResponse**](AppEventVideoClipsResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## appEventLocalizationsAppEventVideoClipsGetToManyRelationship

> AppEventLocalizationAppEventVideoClipsLinkagesResponse appEventLocalizationsAppEventVideoClipsGetToManyRelationship(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppEventLocalizationsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'limit': 56 // Number | maximum resources per page
};
apiInstance.appEventLocalizationsAppEventVideoClipsGetToManyRelationship(id, opts, (error, data, response) => {
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

[**AppEventLocalizationAppEventVideoClipsLinkagesResponse**](AppEventLocalizationAppEventVideoClipsLinkagesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## appEventLocalizationsCreateInstance

> AppEventLocalizationResponse appEventLocalizationsCreateInstance(appEventLocalizationCreateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppEventLocalizationsApi();
let appEventLocalizationCreateRequest = new AppStoreConnectApi.AppEventLocalizationCreateRequest(); // AppEventLocalizationCreateRequest | AppEventLocalization representation
apiInstance.appEventLocalizationsCreateInstance(appEventLocalizationCreateRequest, (error, data, response) => {
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
 **appEventLocalizationCreateRequest** | [**AppEventLocalizationCreateRequest**](AppEventLocalizationCreateRequest.md)| AppEventLocalization representation | 

### Return type

[**AppEventLocalizationResponse**](AppEventLocalizationResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## appEventLocalizationsDeleteInstance

> appEventLocalizationsDeleteInstance(id)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppEventLocalizationsApi();
let id = "id_example"; // String | the id of the requested resource
apiInstance.appEventLocalizationsDeleteInstance(id, (error, data, response) => {
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


## appEventLocalizationsGetInstance

> AppEventLocalizationResponse appEventLocalizationsGetInstance(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppEventLocalizationsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsAppEventLocalizations': ["null"], // [String] | the fields to include for returned resources of type appEventLocalizations
  'fieldsAppEventScreenshots': ["null"], // [String] | the fields to include for returned resources of type appEventScreenshots
  'fieldsAppEventVideoClips': ["null"], // [String] | the fields to include for returned resources of type appEventVideoClips
  'include': ["null"], // [String] | comma-separated list of relationships to include
  'limitAppEventScreenshots': 56, // Number | maximum number of related appEventScreenshots returned (when they are included)
  'limitAppEventVideoClips': 56 // Number | maximum number of related appEventVideoClips returned (when they are included)
};
apiInstance.appEventLocalizationsGetInstance(id, opts, (error, data, response) => {
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
 **fieldsAppEventLocalizations** | [**[String]**](String.md)| the fields to include for returned resources of type appEventLocalizations | [optional] 
 **fieldsAppEventScreenshots** | [**[String]**](String.md)| the fields to include for returned resources of type appEventScreenshots | [optional] 
 **fieldsAppEventVideoClips** | [**[String]**](String.md)| the fields to include for returned resources of type appEventVideoClips | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 
 **limitAppEventScreenshots** | **Number**| maximum number of related appEventScreenshots returned (when they are included) | [optional] 
 **limitAppEventVideoClips** | **Number**| maximum number of related appEventVideoClips returned (when they are included) | [optional] 

### Return type

[**AppEventLocalizationResponse**](AppEventLocalizationResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## appEventLocalizationsUpdateInstance

> AppEventLocalizationResponse appEventLocalizationsUpdateInstance(id, appEventLocalizationUpdateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppEventLocalizationsApi();
let id = "id_example"; // String | the id of the requested resource
let appEventLocalizationUpdateRequest = new AppStoreConnectApi.AppEventLocalizationUpdateRequest(); // AppEventLocalizationUpdateRequest | AppEventLocalization representation
apiInstance.appEventLocalizationsUpdateInstance(id, appEventLocalizationUpdateRequest, (error, data, response) => {
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
 **appEventLocalizationUpdateRequest** | [**AppEventLocalizationUpdateRequest**](AppEventLocalizationUpdateRequest.md)| AppEventLocalization representation | 

### Return type

[**AppEventLocalizationResponse**](AppEventLocalizationResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

