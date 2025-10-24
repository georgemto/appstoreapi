# AppStoreConnectApi.AppCustomProductPageVersionsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**appCustomProductPageVersionsAppCustomProductPageLocalizationsGetToManyRelated**](AppCustomProductPageVersionsApi.md#appCustomProductPageVersionsAppCustomProductPageLocalizationsGetToManyRelated) | **GET** /v1/appCustomProductPageVersions/{id}/appCustomProductPageLocalizations | 
[**appCustomProductPageVersionsAppCustomProductPageLocalizationsGetToManyRelationship**](AppCustomProductPageVersionsApi.md#appCustomProductPageVersionsAppCustomProductPageLocalizationsGetToManyRelationship) | **GET** /v1/appCustomProductPageVersions/{id}/relationships/appCustomProductPageLocalizations | 
[**appCustomProductPageVersionsCreateInstance**](AppCustomProductPageVersionsApi.md#appCustomProductPageVersionsCreateInstance) | **POST** /v1/appCustomProductPageVersions | 
[**appCustomProductPageVersionsGetInstance**](AppCustomProductPageVersionsApi.md#appCustomProductPageVersionsGetInstance) | **GET** /v1/appCustomProductPageVersions/{id} | 
[**appCustomProductPageVersionsUpdateInstance**](AppCustomProductPageVersionsApi.md#appCustomProductPageVersionsUpdateInstance) | **PATCH** /v1/appCustomProductPageVersions/{id} | 



## appCustomProductPageVersionsAppCustomProductPageLocalizationsGetToManyRelated

> AppCustomProductPageLocalizationsResponse appCustomProductPageVersionsAppCustomProductPageLocalizationsGetToManyRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppCustomProductPageVersionsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'filterLocale': ["null"], // [String] | filter by attribute 'locale'
  'fieldsAppCustomProductPageLocalizations': ["null"], // [String] | the fields to include for returned resources of type appCustomProductPageLocalizations
  'fieldsAppCustomProductPageVersions': ["null"], // [String] | the fields to include for returned resources of type appCustomProductPageVersions
  'fieldsAppScreenshotSets': ["null"], // [String] | the fields to include for returned resources of type appScreenshotSets
  'fieldsAppPreviewSets': ["null"], // [String] | the fields to include for returned resources of type appPreviewSets
  'fieldsAppKeywords': ["null"], // [String] | the fields to include for returned resources of type appKeywords
  'limit': 56, // Number | maximum resources per page
  'include': ["null"], // [String] | comma-separated list of relationships to include
  'limitAppScreenshotSets': 56, // Number | maximum number of related appScreenshotSets returned (when they are included)
  'limitAppPreviewSets': 56, // Number | maximum number of related appPreviewSets returned (when they are included)
  'limitSearchKeywords': 56 // Number | maximum number of related searchKeywords returned (when they are included)
};
apiInstance.appCustomProductPageVersionsAppCustomProductPageLocalizationsGetToManyRelated(id, opts, (error, data, response) => {
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
 **filterLocale** | [**[String]**](String.md)| filter by attribute &#39;locale&#39; | [optional] 
 **fieldsAppCustomProductPageLocalizations** | [**[String]**](String.md)| the fields to include for returned resources of type appCustomProductPageLocalizations | [optional] 
 **fieldsAppCustomProductPageVersions** | [**[String]**](String.md)| the fields to include for returned resources of type appCustomProductPageVersions | [optional] 
 **fieldsAppScreenshotSets** | [**[String]**](String.md)| the fields to include for returned resources of type appScreenshotSets | [optional] 
 **fieldsAppPreviewSets** | [**[String]**](String.md)| the fields to include for returned resources of type appPreviewSets | [optional] 
 **fieldsAppKeywords** | [**[String]**](String.md)| the fields to include for returned resources of type appKeywords | [optional] 
 **limit** | **Number**| maximum resources per page | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 
 **limitAppScreenshotSets** | **Number**| maximum number of related appScreenshotSets returned (when they are included) | [optional] 
 **limitAppPreviewSets** | **Number**| maximum number of related appPreviewSets returned (when they are included) | [optional] 
 **limitSearchKeywords** | **Number**| maximum number of related searchKeywords returned (when they are included) | [optional] 

### Return type

[**AppCustomProductPageLocalizationsResponse**](AppCustomProductPageLocalizationsResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## appCustomProductPageVersionsAppCustomProductPageLocalizationsGetToManyRelationship

> AppCustomProductPageVersionAppCustomProductPageLocalizationsLinkagesResponse appCustomProductPageVersionsAppCustomProductPageLocalizationsGetToManyRelationship(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppCustomProductPageVersionsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'limit': 56 // Number | maximum resources per page
};
apiInstance.appCustomProductPageVersionsAppCustomProductPageLocalizationsGetToManyRelationship(id, opts, (error, data, response) => {
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

[**AppCustomProductPageVersionAppCustomProductPageLocalizationsLinkagesResponse**](AppCustomProductPageVersionAppCustomProductPageLocalizationsLinkagesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## appCustomProductPageVersionsCreateInstance

> AppCustomProductPageVersionResponse appCustomProductPageVersionsCreateInstance(appCustomProductPageVersionCreateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppCustomProductPageVersionsApi();
let appCustomProductPageVersionCreateRequest = new AppStoreConnectApi.AppCustomProductPageVersionCreateRequest(); // AppCustomProductPageVersionCreateRequest | AppCustomProductPageVersion representation
apiInstance.appCustomProductPageVersionsCreateInstance(appCustomProductPageVersionCreateRequest, (error, data, response) => {
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
 **appCustomProductPageVersionCreateRequest** | [**AppCustomProductPageVersionCreateRequest**](AppCustomProductPageVersionCreateRequest.md)| AppCustomProductPageVersion representation | 

### Return type

[**AppCustomProductPageVersionResponse**](AppCustomProductPageVersionResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## appCustomProductPageVersionsGetInstance

> AppCustomProductPageVersionResponse appCustomProductPageVersionsGetInstance(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppCustomProductPageVersionsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsAppCustomProductPageVersions': ["null"], // [String] | the fields to include for returned resources of type appCustomProductPageVersions
  'fieldsAppCustomProductPageLocalizations': ["null"], // [String] | the fields to include for returned resources of type appCustomProductPageLocalizations
  'include': ["null"], // [String] | comma-separated list of relationships to include
  'limitAppCustomProductPageLocalizations': 56 // Number | maximum number of related appCustomProductPageLocalizations returned (when they are included)
};
apiInstance.appCustomProductPageVersionsGetInstance(id, opts, (error, data, response) => {
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
 **fieldsAppCustomProductPageVersions** | [**[String]**](String.md)| the fields to include for returned resources of type appCustomProductPageVersions | [optional] 
 **fieldsAppCustomProductPageLocalizations** | [**[String]**](String.md)| the fields to include for returned resources of type appCustomProductPageLocalizations | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 
 **limitAppCustomProductPageLocalizations** | **Number**| maximum number of related appCustomProductPageLocalizations returned (when they are included) | [optional] 

### Return type

[**AppCustomProductPageVersionResponse**](AppCustomProductPageVersionResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## appCustomProductPageVersionsUpdateInstance

> AppCustomProductPageVersionResponse appCustomProductPageVersionsUpdateInstance(id, appCustomProductPageVersionUpdateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppCustomProductPageVersionsApi();
let id = "id_example"; // String | the id of the requested resource
let appCustomProductPageVersionUpdateRequest = new AppStoreConnectApi.AppCustomProductPageVersionUpdateRequest(); // AppCustomProductPageVersionUpdateRequest | AppCustomProductPageVersion representation
apiInstance.appCustomProductPageVersionsUpdateInstance(id, appCustomProductPageVersionUpdateRequest, (error, data, response) => {
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
 **appCustomProductPageVersionUpdateRequest** | [**AppCustomProductPageVersionUpdateRequest**](AppCustomProductPageVersionUpdateRequest.md)| AppCustomProductPageVersion representation | 

### Return type

[**AppCustomProductPageVersionResponse**](AppCustomProductPageVersionResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

