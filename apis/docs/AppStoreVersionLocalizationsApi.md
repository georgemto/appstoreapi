# AppStoreConnectApi.AppStoreVersionLocalizationsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**appStoreVersionLocalizationsAppPreviewSetsGetToManyRelated**](AppStoreVersionLocalizationsApi.md#appStoreVersionLocalizationsAppPreviewSetsGetToManyRelated) | **GET** /v1/appStoreVersionLocalizations/{id}/appPreviewSets | 
[**appStoreVersionLocalizationsAppPreviewSetsGetToManyRelationship**](AppStoreVersionLocalizationsApi.md#appStoreVersionLocalizationsAppPreviewSetsGetToManyRelationship) | **GET** /v1/appStoreVersionLocalizations/{id}/relationships/appPreviewSets | 
[**appStoreVersionLocalizationsAppScreenshotSetsGetToManyRelated**](AppStoreVersionLocalizationsApi.md#appStoreVersionLocalizationsAppScreenshotSetsGetToManyRelated) | **GET** /v1/appStoreVersionLocalizations/{id}/appScreenshotSets | 
[**appStoreVersionLocalizationsAppScreenshotSetsGetToManyRelationship**](AppStoreVersionLocalizationsApi.md#appStoreVersionLocalizationsAppScreenshotSetsGetToManyRelationship) | **GET** /v1/appStoreVersionLocalizations/{id}/relationships/appScreenshotSets | 
[**appStoreVersionLocalizationsCreateInstance**](AppStoreVersionLocalizationsApi.md#appStoreVersionLocalizationsCreateInstance) | **POST** /v1/appStoreVersionLocalizations | 
[**appStoreVersionLocalizationsDeleteInstance**](AppStoreVersionLocalizationsApi.md#appStoreVersionLocalizationsDeleteInstance) | **DELETE** /v1/appStoreVersionLocalizations/{id} | 
[**appStoreVersionLocalizationsGetInstance**](AppStoreVersionLocalizationsApi.md#appStoreVersionLocalizationsGetInstance) | **GET** /v1/appStoreVersionLocalizations/{id} | 
[**appStoreVersionLocalizationsSearchKeywordsCreateToManyRelationship**](AppStoreVersionLocalizationsApi.md#appStoreVersionLocalizationsSearchKeywordsCreateToManyRelationship) | **POST** /v1/appStoreVersionLocalizations/{id}/relationships/searchKeywords | 
[**appStoreVersionLocalizationsSearchKeywordsDeleteToManyRelationship**](AppStoreVersionLocalizationsApi.md#appStoreVersionLocalizationsSearchKeywordsDeleteToManyRelationship) | **DELETE** /v1/appStoreVersionLocalizations/{id}/relationships/searchKeywords | 
[**appStoreVersionLocalizationsSearchKeywordsGetToManyRelated**](AppStoreVersionLocalizationsApi.md#appStoreVersionLocalizationsSearchKeywordsGetToManyRelated) | **GET** /v1/appStoreVersionLocalizations/{id}/searchKeywords | 
[**appStoreVersionLocalizationsSearchKeywordsGetToManyRelationship**](AppStoreVersionLocalizationsApi.md#appStoreVersionLocalizationsSearchKeywordsGetToManyRelationship) | **GET** /v1/appStoreVersionLocalizations/{id}/relationships/searchKeywords | 
[**appStoreVersionLocalizationsUpdateInstance**](AppStoreVersionLocalizationsApi.md#appStoreVersionLocalizationsUpdateInstance) | **PATCH** /v1/appStoreVersionLocalizations/{id} | 



## appStoreVersionLocalizationsAppPreviewSetsGetToManyRelated

> AppPreviewSetsResponse appStoreVersionLocalizationsAppPreviewSetsGetToManyRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppStoreVersionLocalizationsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'filterPreviewType': ["null"], // [String] | filter by attribute 'previewType'
  'filterAppCustomProductPageLocalization': ["null"], // [String] | filter by id(s) of related 'appCustomProductPageLocalization'
  'filterAppStoreVersionExperimentTreatmentLocalization': ["null"], // [String] | filter by id(s) of related 'appStoreVersionExperimentTreatmentLocalization'
  'fieldsAppPreviewSets': ["null"], // [String] | the fields to include for returned resources of type appPreviewSets
  'fieldsAppStoreVersionLocalizations': ["null"], // [String] | the fields to include for returned resources of type appStoreVersionLocalizations
  'fieldsAppCustomProductPageLocalizations': ["null"], // [String] | the fields to include for returned resources of type appCustomProductPageLocalizations
  'fieldsAppStoreVersionExperimentTreatmentLocalizations': ["null"], // [String] | the fields to include for returned resources of type appStoreVersionExperimentTreatmentLocalizations
  'fieldsAppPreviews': ["null"], // [String] | the fields to include for returned resources of type appPreviews
  'limit': 56, // Number | maximum resources per page
  'include': ["null"], // [String] | comma-separated list of relationships to include
  'limitAppPreviews': 56 // Number | maximum number of related appPreviews returned (when they are included)
};
apiInstance.appStoreVersionLocalizationsAppPreviewSetsGetToManyRelated(id, opts, (error, data, response) => {
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
 **filterAppCustomProductPageLocalization** | [**[String]**](String.md)| filter by id(s) of related &#39;appCustomProductPageLocalization&#39; | [optional] 
 **filterAppStoreVersionExperimentTreatmentLocalization** | [**[String]**](String.md)| filter by id(s) of related &#39;appStoreVersionExperimentTreatmentLocalization&#39; | [optional] 
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


## appStoreVersionLocalizationsAppPreviewSetsGetToManyRelationship

> AppStoreVersionLocalizationAppPreviewSetsLinkagesResponse appStoreVersionLocalizationsAppPreviewSetsGetToManyRelationship(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppStoreVersionLocalizationsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'limit': 56 // Number | maximum resources per page
};
apiInstance.appStoreVersionLocalizationsAppPreviewSetsGetToManyRelationship(id, opts, (error, data, response) => {
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

[**AppStoreVersionLocalizationAppPreviewSetsLinkagesResponse**](AppStoreVersionLocalizationAppPreviewSetsLinkagesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## appStoreVersionLocalizationsAppScreenshotSetsGetToManyRelated

> AppScreenshotSetsResponse appStoreVersionLocalizationsAppScreenshotSetsGetToManyRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppStoreVersionLocalizationsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'filterScreenshotDisplayType': ["null"], // [String] | filter by attribute 'screenshotDisplayType'
  'filterAppCustomProductPageLocalization': ["null"], // [String] | filter by id(s) of related 'appCustomProductPageLocalization'
  'filterAppStoreVersionExperimentTreatmentLocalization': ["null"], // [String] | filter by id(s) of related 'appStoreVersionExperimentTreatmentLocalization'
  'fieldsAppScreenshotSets': ["null"], // [String] | the fields to include for returned resources of type appScreenshotSets
  'fieldsAppStoreVersionLocalizations': ["null"], // [String] | the fields to include for returned resources of type appStoreVersionLocalizations
  'fieldsAppCustomProductPageLocalizations': ["null"], // [String] | the fields to include for returned resources of type appCustomProductPageLocalizations
  'fieldsAppStoreVersionExperimentTreatmentLocalizations': ["null"], // [String] | the fields to include for returned resources of type appStoreVersionExperimentTreatmentLocalizations
  'fieldsAppScreenshots': ["null"], // [String] | the fields to include for returned resources of type appScreenshots
  'limit': 56, // Number | maximum resources per page
  'include': ["null"], // [String] | comma-separated list of relationships to include
  'limitAppScreenshots': 56 // Number | maximum number of related appScreenshots returned (when they are included)
};
apiInstance.appStoreVersionLocalizationsAppScreenshotSetsGetToManyRelated(id, opts, (error, data, response) => {
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
 **filterAppCustomProductPageLocalization** | [**[String]**](String.md)| filter by id(s) of related &#39;appCustomProductPageLocalization&#39; | [optional] 
 **filterAppStoreVersionExperimentTreatmentLocalization** | [**[String]**](String.md)| filter by id(s) of related &#39;appStoreVersionExperimentTreatmentLocalization&#39; | [optional] 
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


## appStoreVersionLocalizationsAppScreenshotSetsGetToManyRelationship

> AppStoreVersionLocalizationAppScreenshotSetsLinkagesResponse appStoreVersionLocalizationsAppScreenshotSetsGetToManyRelationship(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppStoreVersionLocalizationsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'limit': 56 // Number | maximum resources per page
};
apiInstance.appStoreVersionLocalizationsAppScreenshotSetsGetToManyRelationship(id, opts, (error, data, response) => {
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

[**AppStoreVersionLocalizationAppScreenshotSetsLinkagesResponse**](AppStoreVersionLocalizationAppScreenshotSetsLinkagesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## appStoreVersionLocalizationsCreateInstance

> AppStoreVersionLocalizationResponse appStoreVersionLocalizationsCreateInstance(appStoreVersionLocalizationCreateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppStoreVersionLocalizationsApi();
let appStoreVersionLocalizationCreateRequest = new AppStoreConnectApi.AppStoreVersionLocalizationCreateRequest(); // AppStoreVersionLocalizationCreateRequest | AppStoreVersionLocalization representation
apiInstance.appStoreVersionLocalizationsCreateInstance(appStoreVersionLocalizationCreateRequest, (error, data, response) => {
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
 **appStoreVersionLocalizationCreateRequest** | [**AppStoreVersionLocalizationCreateRequest**](AppStoreVersionLocalizationCreateRequest.md)| AppStoreVersionLocalization representation | 

### Return type

[**AppStoreVersionLocalizationResponse**](AppStoreVersionLocalizationResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## appStoreVersionLocalizationsDeleteInstance

> appStoreVersionLocalizationsDeleteInstance(id)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppStoreVersionLocalizationsApi();
let id = "id_example"; // String | the id of the requested resource
apiInstance.appStoreVersionLocalizationsDeleteInstance(id, (error, data, response) => {
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


## appStoreVersionLocalizationsGetInstance

> AppStoreVersionLocalizationResponse appStoreVersionLocalizationsGetInstance(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppStoreVersionLocalizationsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsAppStoreVersionLocalizations': ["null"], // [String] | the fields to include for returned resources of type appStoreVersionLocalizations
  'fieldsAppScreenshotSets': ["null"], // [String] | the fields to include for returned resources of type appScreenshotSets
  'fieldsAppPreviewSets': ["null"], // [String] | the fields to include for returned resources of type appPreviewSets
  'include': ["null"], // [String] | comma-separated list of relationships to include
  'limitAppPreviewSets': 56, // Number | maximum number of related appPreviewSets returned (when they are included)
  'limitAppScreenshotSets': 56, // Number | maximum number of related appScreenshotSets returned (when they are included)
  'limitSearchKeywords': 56 // Number | maximum number of related searchKeywords returned (when they are included)
};
apiInstance.appStoreVersionLocalizationsGetInstance(id, opts, (error, data, response) => {
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
 **fieldsAppStoreVersionLocalizations** | [**[String]**](String.md)| the fields to include for returned resources of type appStoreVersionLocalizations | [optional] 
 **fieldsAppScreenshotSets** | [**[String]**](String.md)| the fields to include for returned resources of type appScreenshotSets | [optional] 
 **fieldsAppPreviewSets** | [**[String]**](String.md)| the fields to include for returned resources of type appPreviewSets | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 
 **limitAppPreviewSets** | **Number**| maximum number of related appPreviewSets returned (when they are included) | [optional] 
 **limitAppScreenshotSets** | **Number**| maximum number of related appScreenshotSets returned (when they are included) | [optional] 
 **limitSearchKeywords** | **Number**| maximum number of related searchKeywords returned (when they are included) | [optional] 

### Return type

[**AppStoreVersionLocalizationResponse**](AppStoreVersionLocalizationResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## appStoreVersionLocalizationsSearchKeywordsCreateToManyRelationship

> appStoreVersionLocalizationsSearchKeywordsCreateToManyRelationship(id, appStoreVersionLocalizationSearchKeywordsLinkagesRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppStoreVersionLocalizationsApi();
let id = "id_example"; // String | the id of the requested resource
let appStoreVersionLocalizationSearchKeywordsLinkagesRequest = new AppStoreConnectApi.AppStoreVersionLocalizationSearchKeywordsLinkagesRequest(); // AppStoreVersionLocalizationSearchKeywordsLinkagesRequest | List of related linkages
apiInstance.appStoreVersionLocalizationsSearchKeywordsCreateToManyRelationship(id, appStoreVersionLocalizationSearchKeywordsLinkagesRequest, (error, data, response) => {
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
 **appStoreVersionLocalizationSearchKeywordsLinkagesRequest** | [**AppStoreVersionLocalizationSearchKeywordsLinkagesRequest**](AppStoreVersionLocalizationSearchKeywordsLinkagesRequest.md)| List of related linkages | 

### Return type

null (empty response body)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## appStoreVersionLocalizationsSearchKeywordsDeleteToManyRelationship

> appStoreVersionLocalizationsSearchKeywordsDeleteToManyRelationship(id, appStoreVersionLocalizationSearchKeywordsLinkagesRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppStoreVersionLocalizationsApi();
let id = "id_example"; // String | the id of the requested resource
let appStoreVersionLocalizationSearchKeywordsLinkagesRequest = new AppStoreConnectApi.AppStoreVersionLocalizationSearchKeywordsLinkagesRequest(); // AppStoreVersionLocalizationSearchKeywordsLinkagesRequest | List of related linkages
apiInstance.appStoreVersionLocalizationsSearchKeywordsDeleteToManyRelationship(id, appStoreVersionLocalizationSearchKeywordsLinkagesRequest, (error, data, response) => {
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
 **appStoreVersionLocalizationSearchKeywordsLinkagesRequest** | [**AppStoreVersionLocalizationSearchKeywordsLinkagesRequest**](AppStoreVersionLocalizationSearchKeywordsLinkagesRequest.md)| List of related linkages | 

### Return type

null (empty response body)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## appStoreVersionLocalizationsSearchKeywordsGetToManyRelated

> AppKeywordsResponse appStoreVersionLocalizationsSearchKeywordsGetToManyRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppStoreVersionLocalizationsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'filterPlatform': ["null"], // [String] | filter by platform
  'filterLocale': ["null"], // [String] | filter by locale
  'fieldsAppKeywords': ["null"], // [String] | the fields to include for returned resources of type appKeywords
  'limit': 56 // Number | maximum resources per page
};
apiInstance.appStoreVersionLocalizationsSearchKeywordsGetToManyRelated(id, opts, (error, data, response) => {
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
 **filterPlatform** | [**[String]**](String.md)| filter by platform | [optional] 
 **filterLocale** | [**[String]**](String.md)| filter by locale | [optional] 
 **fieldsAppKeywords** | [**[String]**](String.md)| the fields to include for returned resources of type appKeywords | [optional] 
 **limit** | **Number**| maximum resources per page | [optional] 

### Return type

[**AppKeywordsResponse**](AppKeywordsResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## appStoreVersionLocalizationsSearchKeywordsGetToManyRelationship

> AppStoreVersionLocalizationSearchKeywordsLinkagesResponse appStoreVersionLocalizationsSearchKeywordsGetToManyRelationship(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppStoreVersionLocalizationsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'limit': 56 // Number | maximum resources per page
};
apiInstance.appStoreVersionLocalizationsSearchKeywordsGetToManyRelationship(id, opts, (error, data, response) => {
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

[**AppStoreVersionLocalizationSearchKeywordsLinkagesResponse**](AppStoreVersionLocalizationSearchKeywordsLinkagesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## appStoreVersionLocalizationsUpdateInstance

> AppStoreVersionLocalizationResponse appStoreVersionLocalizationsUpdateInstance(id, appStoreVersionLocalizationUpdateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppStoreVersionLocalizationsApi();
let id = "id_example"; // String | the id of the requested resource
let appStoreVersionLocalizationUpdateRequest = new AppStoreConnectApi.AppStoreVersionLocalizationUpdateRequest(); // AppStoreVersionLocalizationUpdateRequest | AppStoreVersionLocalization representation
apiInstance.appStoreVersionLocalizationsUpdateInstance(id, appStoreVersionLocalizationUpdateRequest, (error, data, response) => {
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
 **appStoreVersionLocalizationUpdateRequest** | [**AppStoreVersionLocalizationUpdateRequest**](AppStoreVersionLocalizationUpdateRequest.md)| AppStoreVersionLocalization representation | 

### Return type

[**AppStoreVersionLocalizationResponse**](AppStoreVersionLocalizationResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

