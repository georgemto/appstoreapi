# AppStoreConnectApi.AppStoreVersionExperimentTreatmentsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**appStoreVersionExperimentTreatmentsAppStoreVersionExperimentTreatmentLocalizationsGetToManyRelated**](AppStoreVersionExperimentTreatmentsApi.md#appStoreVersionExperimentTreatmentsAppStoreVersionExperimentTreatmentLocalizationsGetToManyRelated) | **GET** /v1/appStoreVersionExperimentTreatments/{id}/appStoreVersionExperimentTreatmentLocalizations | 
[**appStoreVersionExperimentTreatmentsAppStoreVersionExperimentTreatmentLocalizationsGetToManyRelationship**](AppStoreVersionExperimentTreatmentsApi.md#appStoreVersionExperimentTreatmentsAppStoreVersionExperimentTreatmentLocalizationsGetToManyRelationship) | **GET** /v1/appStoreVersionExperimentTreatments/{id}/relationships/appStoreVersionExperimentTreatmentLocalizations | 
[**appStoreVersionExperimentTreatmentsCreateInstance**](AppStoreVersionExperimentTreatmentsApi.md#appStoreVersionExperimentTreatmentsCreateInstance) | **POST** /v1/appStoreVersionExperimentTreatments | 
[**appStoreVersionExperimentTreatmentsDeleteInstance**](AppStoreVersionExperimentTreatmentsApi.md#appStoreVersionExperimentTreatmentsDeleteInstance) | **DELETE** /v1/appStoreVersionExperimentTreatments/{id} | 
[**appStoreVersionExperimentTreatmentsGetInstance**](AppStoreVersionExperimentTreatmentsApi.md#appStoreVersionExperimentTreatmentsGetInstance) | **GET** /v1/appStoreVersionExperimentTreatments/{id} | 
[**appStoreVersionExperimentTreatmentsUpdateInstance**](AppStoreVersionExperimentTreatmentsApi.md#appStoreVersionExperimentTreatmentsUpdateInstance) | **PATCH** /v1/appStoreVersionExperimentTreatments/{id} | 



## appStoreVersionExperimentTreatmentsAppStoreVersionExperimentTreatmentLocalizationsGetToManyRelated

> AppStoreVersionExperimentTreatmentLocalizationsResponse appStoreVersionExperimentTreatmentsAppStoreVersionExperimentTreatmentLocalizationsGetToManyRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppStoreVersionExperimentTreatmentsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'filterLocale': ["null"], // [String] | filter by attribute 'locale'
  'fieldsAppStoreVersionExperimentTreatmentLocalizations': ["null"], // [String] | the fields to include for returned resources of type appStoreVersionExperimentTreatmentLocalizations
  'fieldsAppStoreVersionExperimentTreatments': ["null"], // [String] | the fields to include for returned resources of type appStoreVersionExperimentTreatments
  'fieldsAppScreenshotSets': ["null"], // [String] | the fields to include for returned resources of type appScreenshotSets
  'fieldsAppPreviewSets': ["null"], // [String] | the fields to include for returned resources of type appPreviewSets
  'limit': 56, // Number | maximum resources per page
  'include': ["null"], // [String] | comma-separated list of relationships to include
  'limitAppScreenshotSets': 56, // Number | maximum number of related appScreenshotSets returned (when they are included)
  'limitAppPreviewSets': 56 // Number | maximum number of related appPreviewSets returned (when they are included)
};
apiInstance.appStoreVersionExperimentTreatmentsAppStoreVersionExperimentTreatmentLocalizationsGetToManyRelated(id, opts, (error, data, response) => {
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
 **fieldsAppStoreVersionExperimentTreatmentLocalizations** | [**[String]**](String.md)| the fields to include for returned resources of type appStoreVersionExperimentTreatmentLocalizations | [optional] 
 **fieldsAppStoreVersionExperimentTreatments** | [**[String]**](String.md)| the fields to include for returned resources of type appStoreVersionExperimentTreatments | [optional] 
 **fieldsAppScreenshotSets** | [**[String]**](String.md)| the fields to include for returned resources of type appScreenshotSets | [optional] 
 **fieldsAppPreviewSets** | [**[String]**](String.md)| the fields to include for returned resources of type appPreviewSets | [optional] 
 **limit** | **Number**| maximum resources per page | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 
 **limitAppScreenshotSets** | **Number**| maximum number of related appScreenshotSets returned (when they are included) | [optional] 
 **limitAppPreviewSets** | **Number**| maximum number of related appPreviewSets returned (when they are included) | [optional] 

### Return type

[**AppStoreVersionExperimentTreatmentLocalizationsResponse**](AppStoreVersionExperimentTreatmentLocalizationsResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## appStoreVersionExperimentTreatmentsAppStoreVersionExperimentTreatmentLocalizationsGetToManyRelationship

> AppStoreVersionExperimentTreatmentAppStoreVersionExperimentTreatmentLocalizationsLinkagesResponse appStoreVersionExperimentTreatmentsAppStoreVersionExperimentTreatmentLocalizationsGetToManyRelationship(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppStoreVersionExperimentTreatmentsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'limit': 56 // Number | maximum resources per page
};
apiInstance.appStoreVersionExperimentTreatmentsAppStoreVersionExperimentTreatmentLocalizationsGetToManyRelationship(id, opts, (error, data, response) => {
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

[**AppStoreVersionExperimentTreatmentAppStoreVersionExperimentTreatmentLocalizationsLinkagesResponse**](AppStoreVersionExperimentTreatmentAppStoreVersionExperimentTreatmentLocalizationsLinkagesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## appStoreVersionExperimentTreatmentsCreateInstance

> AppStoreVersionExperimentTreatmentResponse appStoreVersionExperimentTreatmentsCreateInstance(appStoreVersionExperimentTreatmentCreateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppStoreVersionExperimentTreatmentsApi();
let appStoreVersionExperimentTreatmentCreateRequest = new AppStoreConnectApi.AppStoreVersionExperimentTreatmentCreateRequest(); // AppStoreVersionExperimentTreatmentCreateRequest | AppStoreVersionExperimentTreatment representation
apiInstance.appStoreVersionExperimentTreatmentsCreateInstance(appStoreVersionExperimentTreatmentCreateRequest, (error, data, response) => {
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
 **appStoreVersionExperimentTreatmentCreateRequest** | [**AppStoreVersionExperimentTreatmentCreateRequest**](AppStoreVersionExperimentTreatmentCreateRequest.md)| AppStoreVersionExperimentTreatment representation | 

### Return type

[**AppStoreVersionExperimentTreatmentResponse**](AppStoreVersionExperimentTreatmentResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## appStoreVersionExperimentTreatmentsDeleteInstance

> appStoreVersionExperimentTreatmentsDeleteInstance(id)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppStoreVersionExperimentTreatmentsApi();
let id = "id_example"; // String | the id of the requested resource
apiInstance.appStoreVersionExperimentTreatmentsDeleteInstance(id, (error, data, response) => {
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


## appStoreVersionExperimentTreatmentsGetInstance

> AppStoreVersionExperimentTreatmentResponse appStoreVersionExperimentTreatmentsGetInstance(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppStoreVersionExperimentTreatmentsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsAppStoreVersionExperimentTreatments': ["null"], // [String] | the fields to include for returned resources of type appStoreVersionExperimentTreatments
  'fieldsAppStoreVersionExperimentTreatmentLocalizations': ["null"], // [String] | the fields to include for returned resources of type appStoreVersionExperimentTreatmentLocalizations
  'include': ["null"], // [String] | comma-separated list of relationships to include
  'limitAppStoreVersionExperimentTreatmentLocalizations': 56 // Number | maximum number of related appStoreVersionExperimentTreatmentLocalizations returned (when they are included)
};
apiInstance.appStoreVersionExperimentTreatmentsGetInstance(id, opts, (error, data, response) => {
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
 **fieldsAppStoreVersionExperimentTreatments** | [**[String]**](String.md)| the fields to include for returned resources of type appStoreVersionExperimentTreatments | [optional] 
 **fieldsAppStoreVersionExperimentTreatmentLocalizations** | [**[String]**](String.md)| the fields to include for returned resources of type appStoreVersionExperimentTreatmentLocalizations | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 
 **limitAppStoreVersionExperimentTreatmentLocalizations** | **Number**| maximum number of related appStoreVersionExperimentTreatmentLocalizations returned (when they are included) | [optional] 

### Return type

[**AppStoreVersionExperimentTreatmentResponse**](AppStoreVersionExperimentTreatmentResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## appStoreVersionExperimentTreatmentsUpdateInstance

> AppStoreVersionExperimentTreatmentResponse appStoreVersionExperimentTreatmentsUpdateInstance(id, appStoreVersionExperimentTreatmentUpdateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppStoreVersionExperimentTreatmentsApi();
let id = "id_example"; // String | the id of the requested resource
let appStoreVersionExperimentTreatmentUpdateRequest = new AppStoreConnectApi.AppStoreVersionExperimentTreatmentUpdateRequest(); // AppStoreVersionExperimentTreatmentUpdateRequest | AppStoreVersionExperimentTreatment representation
apiInstance.appStoreVersionExperimentTreatmentsUpdateInstance(id, appStoreVersionExperimentTreatmentUpdateRequest, (error, data, response) => {
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
 **appStoreVersionExperimentTreatmentUpdateRequest** | [**AppStoreVersionExperimentTreatmentUpdateRequest**](AppStoreVersionExperimentTreatmentUpdateRequest.md)| AppStoreVersionExperimentTreatment representation | 

### Return type

[**AppStoreVersionExperimentTreatmentResponse**](AppStoreVersionExperimentTreatmentResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

