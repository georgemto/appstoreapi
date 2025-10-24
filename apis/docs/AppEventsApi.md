# AppStoreConnectApi.AppEventsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**appEventsCreateInstance**](AppEventsApi.md#appEventsCreateInstance) | **POST** /v1/appEvents | 
[**appEventsDeleteInstance**](AppEventsApi.md#appEventsDeleteInstance) | **DELETE** /v1/appEvents/{id} | 
[**appEventsGetInstance**](AppEventsApi.md#appEventsGetInstance) | **GET** /v1/appEvents/{id} | 
[**appEventsLocalizationsGetToManyRelated**](AppEventsApi.md#appEventsLocalizationsGetToManyRelated) | **GET** /v1/appEvents/{id}/localizations | 
[**appEventsLocalizationsGetToManyRelationship**](AppEventsApi.md#appEventsLocalizationsGetToManyRelationship) | **GET** /v1/appEvents/{id}/relationships/localizations | 
[**appEventsUpdateInstance**](AppEventsApi.md#appEventsUpdateInstance) | **PATCH** /v1/appEvents/{id} | 



## appEventsCreateInstance

> AppEventResponse appEventsCreateInstance(appEventCreateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppEventsApi();
let appEventCreateRequest = new AppStoreConnectApi.AppEventCreateRequest(); // AppEventCreateRequest | AppEvent representation
apiInstance.appEventsCreateInstance(appEventCreateRequest, (error, data, response) => {
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
 **appEventCreateRequest** | [**AppEventCreateRequest**](AppEventCreateRequest.md)| AppEvent representation | 

### Return type

[**AppEventResponse**](AppEventResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## appEventsDeleteInstance

> appEventsDeleteInstance(id)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppEventsApi();
let id = "id_example"; // String | the id of the requested resource
apiInstance.appEventsDeleteInstance(id, (error, data, response) => {
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


## appEventsGetInstance

> AppEventResponse appEventsGetInstance(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppEventsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsAppEvents': ["null"], // [String] | the fields to include for returned resources of type appEvents
  'fieldsAppEventLocalizations': ["null"], // [String] | the fields to include for returned resources of type appEventLocalizations
  'include': ["null"], // [String] | comma-separated list of relationships to include
  'limitLocalizations': 56 // Number | maximum number of related localizations returned (when they are included)
};
apiInstance.appEventsGetInstance(id, opts, (error, data, response) => {
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
 **fieldsAppEvents** | [**[String]**](String.md)| the fields to include for returned resources of type appEvents | [optional] 
 **fieldsAppEventLocalizations** | [**[String]**](String.md)| the fields to include for returned resources of type appEventLocalizations | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 
 **limitLocalizations** | **Number**| maximum number of related localizations returned (when they are included) | [optional] 

### Return type

[**AppEventResponse**](AppEventResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## appEventsLocalizationsGetToManyRelated

> AppEventLocalizationsResponse appEventsLocalizationsGetToManyRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppEventsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsAppEventLocalizations': ["null"], // [String] | the fields to include for returned resources of type appEventLocalizations
  'fieldsAppEvents': ["null"], // [String] | the fields to include for returned resources of type appEvents
  'fieldsAppEventScreenshots': ["null"], // [String] | the fields to include for returned resources of type appEventScreenshots
  'fieldsAppEventVideoClips': ["null"], // [String] | the fields to include for returned resources of type appEventVideoClips
  'limit': 56, // Number | maximum resources per page
  'include': ["null"], // [String] | comma-separated list of relationships to include
  'limitAppEventScreenshots': 56, // Number | maximum number of related appEventScreenshots returned (when they are included)
  'limitAppEventVideoClips': 56 // Number | maximum number of related appEventVideoClips returned (when they are included)
};
apiInstance.appEventsLocalizationsGetToManyRelated(id, opts, (error, data, response) => {
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
 **fieldsAppEvents** | [**[String]**](String.md)| the fields to include for returned resources of type appEvents | [optional] 
 **fieldsAppEventScreenshots** | [**[String]**](String.md)| the fields to include for returned resources of type appEventScreenshots | [optional] 
 **fieldsAppEventVideoClips** | [**[String]**](String.md)| the fields to include for returned resources of type appEventVideoClips | [optional] 
 **limit** | **Number**| maximum resources per page | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 
 **limitAppEventScreenshots** | **Number**| maximum number of related appEventScreenshots returned (when they are included) | [optional] 
 **limitAppEventVideoClips** | **Number**| maximum number of related appEventVideoClips returned (when they are included) | [optional] 

### Return type

[**AppEventLocalizationsResponse**](AppEventLocalizationsResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## appEventsLocalizationsGetToManyRelationship

> AppEventLocalizationsLinkagesResponse appEventsLocalizationsGetToManyRelationship(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppEventsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'limit': 56 // Number | maximum resources per page
};
apiInstance.appEventsLocalizationsGetToManyRelationship(id, opts, (error, data, response) => {
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

[**AppEventLocalizationsLinkagesResponse**](AppEventLocalizationsLinkagesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## appEventsUpdateInstance

> AppEventResponse appEventsUpdateInstance(id, appEventUpdateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppEventsApi();
let id = "id_example"; // String | the id of the requested resource
let appEventUpdateRequest = new AppStoreConnectApi.AppEventUpdateRequest(); // AppEventUpdateRequest | AppEvent representation
apiInstance.appEventsUpdateInstance(id, appEventUpdateRequest, (error, data, response) => {
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
 **appEventUpdateRequest** | [**AppEventUpdateRequest**](AppEventUpdateRequest.md)| AppEvent representation | 

### Return type

[**AppEventResponse**](AppEventResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

