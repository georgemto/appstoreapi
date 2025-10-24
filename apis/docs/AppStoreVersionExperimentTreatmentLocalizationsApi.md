# AppStoreConnectApi.AppStoreVersionExperimentTreatmentLocalizationsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**appStoreVersionExperimentTreatmentLocalizationsAppPreviewSetsGetToManyRelated**](AppStoreVersionExperimentTreatmentLocalizationsApi.md#appStoreVersionExperimentTreatmentLocalizationsAppPreviewSetsGetToManyRelated) | **GET** /v1/appStoreVersionExperimentTreatmentLocalizations/{id}/appPreviewSets | 
[**appStoreVersionExperimentTreatmentLocalizationsAppPreviewSetsGetToManyRelationship**](AppStoreVersionExperimentTreatmentLocalizationsApi.md#appStoreVersionExperimentTreatmentLocalizationsAppPreviewSetsGetToManyRelationship) | **GET** /v1/appStoreVersionExperimentTreatmentLocalizations/{id}/relationships/appPreviewSets | 
[**appStoreVersionExperimentTreatmentLocalizationsAppScreenshotSetsGetToManyRelated**](AppStoreVersionExperimentTreatmentLocalizationsApi.md#appStoreVersionExperimentTreatmentLocalizationsAppScreenshotSetsGetToManyRelated) | **GET** /v1/appStoreVersionExperimentTreatmentLocalizations/{id}/appScreenshotSets | 
[**appStoreVersionExperimentTreatmentLocalizationsAppScreenshotSetsGetToManyRelationship**](AppStoreVersionExperimentTreatmentLocalizationsApi.md#appStoreVersionExperimentTreatmentLocalizationsAppScreenshotSetsGetToManyRelationship) | **GET** /v1/appStoreVersionExperimentTreatmentLocalizations/{id}/relationships/appScreenshotSets | 
[**appStoreVersionExperimentTreatmentLocalizationsCreateInstance**](AppStoreVersionExperimentTreatmentLocalizationsApi.md#appStoreVersionExperimentTreatmentLocalizationsCreateInstance) | **POST** /v1/appStoreVersionExperimentTreatmentLocalizations | 
[**appStoreVersionExperimentTreatmentLocalizationsDeleteInstance**](AppStoreVersionExperimentTreatmentLocalizationsApi.md#appStoreVersionExperimentTreatmentLocalizationsDeleteInstance) | **DELETE** /v1/appStoreVersionExperimentTreatmentLocalizations/{id} | 
[**appStoreVersionExperimentTreatmentLocalizationsGetInstance**](AppStoreVersionExperimentTreatmentLocalizationsApi.md#appStoreVersionExperimentTreatmentLocalizationsGetInstance) | **GET** /v1/appStoreVersionExperimentTreatmentLocalizations/{id} | 



## appStoreVersionExperimentTreatmentLocalizationsAppPreviewSetsGetToManyRelated

> AppPreviewSetsResponse appStoreVersionExperimentTreatmentLocalizationsAppPreviewSetsGetToManyRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppStoreVersionExperimentTreatmentLocalizationsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'filterPreviewType': ["null"], // [String] | filter by attribute 'previewType'
  'filterAppStoreVersionLocalization': ["null"], // [String] | filter by id(s) of related 'appStoreVersionLocalization'
  'filterAppCustomProductPageLocalization': ["null"], // [String] | filter by id(s) of related 'appCustomProductPageLocalization'
  'fieldsAppPreviewSets': ["null"], // [String] | the fields to include for returned resources of type appPreviewSets
  'fieldsAppStoreVersionLocalizations': ["null"], // [String] | the fields to include for returned resources of type appStoreVersionLocalizations
  'fieldsAppCustomProductPageLocalizations': ["null"], // [String] | the fields to include for returned resources of type appCustomProductPageLocalizations
  'fieldsAppStoreVersionExperimentTreatmentLocalizations': ["null"], // [String] | the fields to include for returned resources of type appStoreVersionExperimentTreatmentLocalizations
  'fieldsAppPreviews': ["null"], // [String] | the fields to include for returned resources of type appPreviews
  'limit': 56, // Number | maximum resources per page
  'include': ["null"], // [String] | comma-separated list of relationships to include
  'limitAppPreviews': 56 // Number | maximum number of related appPreviews returned (when they are included)
};
apiInstance.appStoreVersionExperimentTreatmentLocalizationsAppPreviewSetsGetToManyRelated(id, opts, (error, data, response) => {
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
 **filterPreviewType** | [**[String]**](String.md)| filter by attribute &#39;previewType&#39; | [optional] 
 **filterAppStoreVersionLocalization** | [**[String]**](String.md)| filter by id(s) of related &#39;appStoreVersionLocalization&#39; | [optional] 
 **filterAppCustomProductPageLocalization** | [**[String]**](String.md)| filter by id(s) of related &#39;appCustomProductPageLocalization&#39; | [optional] 
 **fieldsAppPreviewSets** | [**[String]**](String.md)| the fields to include for returned resources of type appPreviewSets | [optional] 
 **fieldsAppStoreVersionLocalizations** | [**[String]**](String.md)| the fields to include for returned resources of type appStoreVersionLocalizations | [optional] 
 **fieldsAppCustomProductPageLocalizations** | [**[String]**](String.md)| the fields to include for returned resources of type appCustomProductPageLocalizations | [optional] 
 **fieldsAppStoreVersionExperimentTreatmentLocalizations** | [**[String]**](String.md)| the fields to include for returned resources of type appStoreVersionExperimentTreatmentLocalizations | [optional] 
 **fieldsAppPreviews** | [**[String]**](String.md)| the fields to include for returned resources of type appPreviews | [optional] 
 **limit** | **Number**| maximum resources per page | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 
 **limitAppPreviews** | **Number**| maximum number of related appPreviews returned (when they are included) | [optional] 

### Return type

[**AppPreviewSetsResponse**](AppPreviewSetsResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## appStoreVersionExperimentTreatmentLocalizationsAppPreviewSetsGetToManyRelationship

> AppStoreVersionExperimentTreatmentLocalizationAppPreviewSetsLinkagesResponse appStoreVersionExperimentTreatmentLocalizationsAppPreviewSetsGetToManyRelationship(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppStoreVersionExperimentTreatmentLocalizationsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'limit': 56 // Number | maximum resources per page
};
apiInstance.appStoreVersionExperimentTreatmentLocalizationsAppPreviewSetsGetToManyRelationship(id, opts, (error, data, response) => {
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

[**AppStoreVersionExperimentTreatmentLocalizationAppPreviewSetsLinkagesResponse**](AppStoreVersionExperimentTreatmentLocalizationAppPreviewSetsLinkagesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## appStoreVersionExperimentTreatmentLocalizationsAppScreenshotSetsGetToManyRelated

> AppScreenshotSetsResponse appStoreVersionExperimentTreatmentLocalizationsAppScreenshotSetsGetToManyRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppStoreVersionExperimentTreatmentLocalizationsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'filterScreenshotDisplayType': ["null"], // [String] | filter by attribute 'screenshotDisplayType'
  'filterAppStoreVersionLocalization': ["null"], // [String] | filter by id(s) of related 'appStoreVersionLocalization'
  'filterAppCustomProductPageLocalization': ["null"], // [String] | filter by id(s) of related 'appCustomProductPageLocalization'
  'fieldsAppScreenshotSets': ["null"], // [String] | the fields to include for returned resources of type appScreenshotSets
  'fieldsAppStoreVersionLocalizations': ["null"], // [String] | the fields to include for returned resources of type appStoreVersionLocalizations
  'fieldsAppCustomProductPageLocalizations': ["null"], // [String] | the fields to include for returned resources of type appCustomProductPageLocalizations
  'fieldsAppStoreVersionExperimentTreatmentLocalizations': ["null"], // [String] | the fields to include for returned resources of type appStoreVersionExperimentTreatmentLocalizations
  'fieldsAppScreenshots': ["null"], // [String] | the fields to include for returned resources of type appScreenshots
  'limit': 56, // Number | maximum resources per page
  'include': ["null"], // [String] | comma-separated list of relationships to include
  'limitAppScreenshots': 56 // Number | maximum number of related appScreenshots returned (when they are included)
};
apiInstance.appStoreVersionExperimentTreatmentLocalizationsAppScreenshotSetsGetToManyRelated(id, opts, (error, data, response) => {
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
 **filterScreenshotDisplayType** | [**[String]**](String.md)| filter by attribute &#39;screenshotDisplayType&#39; | [optional] 
 **filterAppStoreVersionLocalization** | [**[String]**](String.md)| filter by id(s) of related &#39;appStoreVersionLocalization&#39; | [optional] 
 **filterAppCustomProductPageLocalization** | [**[String]**](String.md)| filter by id(s) of related &#39;appCustomProductPageLocalization&#39; | [optional] 
 **fieldsAppScreenshotSets** | [**[String]**](String.md)| the fields to include for returned resources of type appScreenshotSets | [optional] 
 **fieldsAppStoreVersionLocalizations** | [**[String]**](String.md)| the fields to include for returned resources of type appStoreVersionLocalizations | [optional] 
 **fieldsAppCustomProductPageLocalizations** | [**[String]**](String.md)| the fields to include for returned resources of type appCustomProductPageLocalizations | [optional] 
 **fieldsAppStoreVersionExperimentTreatmentLocalizations** | [**[String]**](String.md)| the fields to include for returned resources of type appStoreVersionExperimentTreatmentLocalizations | [optional] 
 **fieldsAppScreenshots** | [**[String]**](String.md)| the fields to include for returned resources of type appScreenshots | [optional] 
 **limit** | **Number**| maximum resources per page | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 
 **limitAppScreenshots** | **Number**| maximum number of related appScreenshots returned (when they are included) | [optional] 

### Return type

[**AppScreenshotSetsResponse**](AppScreenshotSetsResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## appStoreVersionExperimentTreatmentLocalizationsAppScreenshotSetsGetToManyRelationship

> AppStoreVersionExperimentTreatmentLocalizationAppScreenshotSetsLinkagesResponse appStoreVersionExperimentTreatmentLocalizationsAppScreenshotSetsGetToManyRelationship(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppStoreVersionExperimentTreatmentLocalizationsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'limit': 56 // Number | maximum resources per page
};
apiInstance.appStoreVersionExperimentTreatmentLocalizationsAppScreenshotSetsGetToManyRelationship(id, opts, (error, data, response) => {
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

[**AppStoreVersionExperimentTreatmentLocalizationAppScreenshotSetsLinkagesResponse**](AppStoreVersionExperimentTreatmentLocalizationAppScreenshotSetsLinkagesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## appStoreVersionExperimentTreatmentLocalizationsCreateInstance

> AppStoreVersionExperimentTreatmentLocalizationResponse appStoreVersionExperimentTreatmentLocalizationsCreateInstance(appStoreVersionExperimentTreatmentLocalizationCreateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppStoreVersionExperimentTreatmentLocalizationsApi();
let appStoreVersionExperimentTreatmentLocalizationCreateRequest = new AppStoreConnectApi.AppStoreVersionExperimentTreatmentLocalizationCreateRequest(); // AppStoreVersionExperimentTreatmentLocalizationCreateRequest | AppStoreVersionExperimentTreatmentLocalization representation
apiInstance.appStoreVersionExperimentTreatmentLocalizationsCreateInstance(appStoreVersionExperimentTreatmentLocalizationCreateRequest, (error, data, response) => {
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
 **appStoreVersionExperimentTreatmentLocalizationCreateRequest** | [**AppStoreVersionExperimentTreatmentLocalizationCreateRequest**](AppStoreVersionExperimentTreatmentLocalizationCreateRequest.md)| AppStoreVersionExperimentTreatmentLocalization representation | 

### Return type

[**AppStoreVersionExperimentTreatmentLocalizationResponse**](AppStoreVersionExperimentTreatmentLocalizationResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## appStoreVersionExperimentTreatmentLocalizationsDeleteInstance

> appStoreVersionExperimentTreatmentLocalizationsDeleteInstance(id)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppStoreVersionExperimentTreatmentLocalizationsApi();
let id = "id_example"; // String | the id of the requested resource
apiInstance.appStoreVersionExperimentTreatmentLocalizationsDeleteInstance(id, (error, data, response) => {
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


## appStoreVersionExperimentTreatmentLocalizationsGetInstance

> AppStoreVersionExperimentTreatmentLocalizationResponse appStoreVersionExperimentTreatmentLocalizationsGetInstance(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppStoreVersionExperimentTreatmentLocalizationsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsAppStoreVersionExperimentTreatmentLocalizations': ["null"], // [String] | the fields to include for returned resources of type appStoreVersionExperimentTreatmentLocalizations
  'fieldsAppScreenshotSets': ["null"], // [String] | the fields to include for returned resources of type appScreenshotSets
  'fieldsAppPreviewSets': ["null"], // [String] | the fields to include for returned resources of type appPreviewSets
  'include': ["null"], // [String] | comma-separated list of relationships to include
  'limitAppPreviewSets': 56, // Number | maximum number of related appPreviewSets returned (when they are included)
  'limitAppScreenshotSets': 56 // Number | maximum number of related appScreenshotSets returned (when they are included)
};
apiInstance.appStoreVersionExperimentTreatmentLocalizationsGetInstance(id, opts, (error, data, response) => {
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
 **fieldsAppStoreVersionExperimentTreatmentLocalizations** | [**[String]**](String.md)| the fields to include for returned resources of type appStoreVersionExperimentTreatmentLocalizations | [optional] 
 **fieldsAppScreenshotSets** | [**[String]**](String.md)| the fields to include for returned resources of type appScreenshotSets | [optional] 
 **fieldsAppPreviewSets** | [**[String]**](String.md)| the fields to include for returned resources of type appPreviewSets | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 
 **limitAppPreviewSets** | **Number**| maximum number of related appPreviewSets returned (when they are included) | [optional] 
 **limitAppScreenshotSets** | **Number**| maximum number of related appScreenshotSets returned (when they are included) | [optional] 

### Return type

[**AppStoreVersionExperimentTreatmentLocalizationResponse**](AppStoreVersionExperimentTreatmentLocalizationResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

