# AppStoreConnectApi.AppCustomProductPageLocalizationsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**appCustomProductPageLocalizationsAppPreviewSetsGetToManyRelated**](AppCustomProductPageLocalizationsApi.md#appCustomProductPageLocalizationsAppPreviewSetsGetToManyRelated) | **GET** /v1/appCustomProductPageLocalizations/{id}/appPreviewSets | 
[**appCustomProductPageLocalizationsAppPreviewSetsGetToManyRelationship**](AppCustomProductPageLocalizationsApi.md#appCustomProductPageLocalizationsAppPreviewSetsGetToManyRelationship) | **GET** /v1/appCustomProductPageLocalizations/{id}/relationships/appPreviewSets | 
[**appCustomProductPageLocalizationsAppScreenshotSetsGetToManyRelated**](AppCustomProductPageLocalizationsApi.md#appCustomProductPageLocalizationsAppScreenshotSetsGetToManyRelated) | **GET** /v1/appCustomProductPageLocalizations/{id}/appScreenshotSets | 
[**appCustomProductPageLocalizationsAppScreenshotSetsGetToManyRelationship**](AppCustomProductPageLocalizationsApi.md#appCustomProductPageLocalizationsAppScreenshotSetsGetToManyRelationship) | **GET** /v1/appCustomProductPageLocalizations/{id}/relationships/appScreenshotSets | 
[**appCustomProductPageLocalizationsCreateInstance**](AppCustomProductPageLocalizationsApi.md#appCustomProductPageLocalizationsCreateInstance) | **POST** /v1/appCustomProductPageLocalizations | 
[**appCustomProductPageLocalizationsDeleteInstance**](AppCustomProductPageLocalizationsApi.md#appCustomProductPageLocalizationsDeleteInstance) | **DELETE** /v1/appCustomProductPageLocalizations/{id} | 
[**appCustomProductPageLocalizationsGetInstance**](AppCustomProductPageLocalizationsApi.md#appCustomProductPageLocalizationsGetInstance) | **GET** /v1/appCustomProductPageLocalizations/{id} | 
[**appCustomProductPageLocalizationsSearchKeywordsCreateToManyRelationship**](AppCustomProductPageLocalizationsApi.md#appCustomProductPageLocalizationsSearchKeywordsCreateToManyRelationship) | **POST** /v1/appCustomProductPageLocalizations/{id}/relationships/searchKeywords | 
[**appCustomProductPageLocalizationsSearchKeywordsDeleteToManyRelationship**](AppCustomProductPageLocalizationsApi.md#appCustomProductPageLocalizationsSearchKeywordsDeleteToManyRelationship) | **DELETE** /v1/appCustomProductPageLocalizations/{id}/relationships/searchKeywords | 
[**appCustomProductPageLocalizationsSearchKeywordsGetToManyRelated**](AppCustomProductPageLocalizationsApi.md#appCustomProductPageLocalizationsSearchKeywordsGetToManyRelated) | **GET** /v1/appCustomProductPageLocalizations/{id}/searchKeywords | 
[**appCustomProductPageLocalizationsSearchKeywordsGetToManyRelationship**](AppCustomProductPageLocalizationsApi.md#appCustomProductPageLocalizationsSearchKeywordsGetToManyRelationship) | **GET** /v1/appCustomProductPageLocalizations/{id}/relationships/searchKeywords | 
[**appCustomProductPageLocalizationsUpdateInstance**](AppCustomProductPageLocalizationsApi.md#appCustomProductPageLocalizationsUpdateInstance) | **PATCH** /v1/appCustomProductPageLocalizations/{id} | 



## appCustomProductPageLocalizationsAppPreviewSetsGetToManyRelated

> AppPreviewSetsResponse appCustomProductPageLocalizationsAppPreviewSetsGetToManyRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppCustomProductPageLocalizationsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'filterPreviewType': ["null"], // [String] | filter by attribute 'previewType'
  'filterAppStoreVersionLocalization': ["null"], // [String] | filter by id(s) of related 'appStoreVersionLocalization'
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
apiInstance.appCustomProductPageLocalizationsAppPreviewSetsGetToManyRelated(id, opts, (error, data, response) => {
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


## appCustomProductPageLocalizationsAppPreviewSetsGetToManyRelationship

> AppCustomProductPageLocalizationAppPreviewSetsLinkagesResponse appCustomProductPageLocalizationsAppPreviewSetsGetToManyRelationship(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppCustomProductPageLocalizationsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'limit': 56 // Number | maximum resources per page
};
apiInstance.appCustomProductPageLocalizationsAppPreviewSetsGetToManyRelationship(id, opts, (error, data, response) => {
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

[**AppCustomProductPageLocalizationAppPreviewSetsLinkagesResponse**](AppCustomProductPageLocalizationAppPreviewSetsLinkagesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## appCustomProductPageLocalizationsAppScreenshotSetsGetToManyRelated

> AppScreenshotSetsResponse appCustomProductPageLocalizationsAppScreenshotSetsGetToManyRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppCustomProductPageLocalizationsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'filterScreenshotDisplayType': ["null"], // [String] | filter by attribute 'screenshotDisplayType'
  'filterAppStoreVersionLocalization': ["null"], // [String] | filter by id(s) of related 'appStoreVersionLocalization'
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
apiInstance.appCustomProductPageLocalizationsAppScreenshotSetsGetToManyRelated(id, opts, (error, data, response) => {
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


## appCustomProductPageLocalizationsAppScreenshotSetsGetToManyRelationship

> AppCustomProductPageLocalizationAppScreenshotSetsLinkagesResponse appCustomProductPageLocalizationsAppScreenshotSetsGetToManyRelationship(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppCustomProductPageLocalizationsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'limit': 56 // Number | maximum resources per page
};
apiInstance.appCustomProductPageLocalizationsAppScreenshotSetsGetToManyRelationship(id, opts, (error, data, response) => {
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

[**AppCustomProductPageLocalizationAppScreenshotSetsLinkagesResponse**](AppCustomProductPageLocalizationAppScreenshotSetsLinkagesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## appCustomProductPageLocalizationsCreateInstance

> AppCustomProductPageLocalizationResponse appCustomProductPageLocalizationsCreateInstance(appCustomProductPageLocalizationCreateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppCustomProductPageLocalizationsApi();
let appCustomProductPageLocalizationCreateRequest = new AppStoreConnectApi.AppCustomProductPageLocalizationCreateRequest(); // AppCustomProductPageLocalizationCreateRequest | AppCustomProductPageLocalization representation
apiInstance.appCustomProductPageLocalizationsCreateInstance(appCustomProductPageLocalizationCreateRequest, (error, data, response) => {
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
 **appCustomProductPageLocalizationCreateRequest** | [**AppCustomProductPageLocalizationCreateRequest**](AppCustomProductPageLocalizationCreateRequest.md)| AppCustomProductPageLocalization representation | 

### Return type

[**AppCustomProductPageLocalizationResponse**](AppCustomProductPageLocalizationResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## appCustomProductPageLocalizationsDeleteInstance

> appCustomProductPageLocalizationsDeleteInstance(id)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppCustomProductPageLocalizationsApi();
let id = "id_example"; // String | the id of the requested resource
apiInstance.appCustomProductPageLocalizationsDeleteInstance(id, (error, data, response) => {
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


## appCustomProductPageLocalizationsGetInstance

> AppCustomProductPageLocalizationResponse appCustomProductPageLocalizationsGetInstance(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppCustomProductPageLocalizationsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsAppCustomProductPageLocalizations': ["null"], // [String] | the fields to include for returned resources of type appCustomProductPageLocalizations
  'fieldsAppScreenshotSets': ["null"], // [String] | the fields to include for returned resources of type appScreenshotSets
  'fieldsAppPreviewSets': ["null"], // [String] | the fields to include for returned resources of type appPreviewSets
  'include': ["null"], // [String] | comma-separated list of relationships to include
  'limitAppPreviewSets': 56, // Number | maximum number of related appPreviewSets returned (when they are included)
  'limitAppScreenshotSets': 56, // Number | maximum number of related appScreenshotSets returned (when they are included)
  'limitSearchKeywords': 56 // Number | maximum number of related searchKeywords returned (when they are included)
};
apiInstance.appCustomProductPageLocalizationsGetInstance(id, opts, (error, data, response) => {
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
 **fieldsAppCustomProductPageLocalizations** | [**[String]**](String.md)| the fields to include for returned resources of type appCustomProductPageLocalizations | [optional] 
 **fieldsAppScreenshotSets** | [**[String]**](String.md)| the fields to include for returned resources of type appScreenshotSets | [optional] 
 **fieldsAppPreviewSets** | [**[String]**](String.md)| the fields to include for returned resources of type appPreviewSets | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 
 **limitAppPreviewSets** | **Number**| maximum number of related appPreviewSets returned (when they are included) | [optional] 
 **limitAppScreenshotSets** | **Number**| maximum number of related appScreenshotSets returned (when they are included) | [optional] 
 **limitSearchKeywords** | **Number**| maximum number of related searchKeywords returned (when they are included) | [optional] 

### Return type

[**AppCustomProductPageLocalizationResponse**](AppCustomProductPageLocalizationResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## appCustomProductPageLocalizationsSearchKeywordsCreateToManyRelationship

> appCustomProductPageLocalizationsSearchKeywordsCreateToManyRelationship(id, appCustomProductPageLocalizationSearchKeywordsLinkagesRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppCustomProductPageLocalizationsApi();
let id = "id_example"; // String | the id of the requested resource
let appCustomProductPageLocalizationSearchKeywordsLinkagesRequest = new AppStoreConnectApi.AppCustomProductPageLocalizationSearchKeywordsLinkagesRequest(); // AppCustomProductPageLocalizationSearchKeywordsLinkagesRequest | List of related linkages
apiInstance.appCustomProductPageLocalizationsSearchKeywordsCreateToManyRelationship(id, appCustomProductPageLocalizationSearchKeywordsLinkagesRequest, (error, data, response) => {
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
 **appCustomProductPageLocalizationSearchKeywordsLinkagesRequest** | [**AppCustomProductPageLocalizationSearchKeywordsLinkagesRequest**](AppCustomProductPageLocalizationSearchKeywordsLinkagesRequest.md)| List of related linkages | 

### Return type

null (empty response body)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## appCustomProductPageLocalizationsSearchKeywordsDeleteToManyRelationship

> appCustomProductPageLocalizationsSearchKeywordsDeleteToManyRelationship(id, appCustomProductPageLocalizationSearchKeywordsLinkagesRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppCustomProductPageLocalizationsApi();
let id = "id_example"; // String | the id of the requested resource
let appCustomProductPageLocalizationSearchKeywordsLinkagesRequest = new AppStoreConnectApi.AppCustomProductPageLocalizationSearchKeywordsLinkagesRequest(); // AppCustomProductPageLocalizationSearchKeywordsLinkagesRequest | List of related linkages
apiInstance.appCustomProductPageLocalizationsSearchKeywordsDeleteToManyRelationship(id, appCustomProductPageLocalizationSearchKeywordsLinkagesRequest, (error, data, response) => {
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
 **appCustomProductPageLocalizationSearchKeywordsLinkagesRequest** | [**AppCustomProductPageLocalizationSearchKeywordsLinkagesRequest**](AppCustomProductPageLocalizationSearchKeywordsLinkagesRequest.md)| List of related linkages | 

### Return type

null (empty response body)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## appCustomProductPageLocalizationsSearchKeywordsGetToManyRelated

> AppKeywordsResponse appCustomProductPageLocalizationsSearchKeywordsGetToManyRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppCustomProductPageLocalizationsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'filterPlatform': ["null"], // [String] | filter by platform
  'filterLocale': ["null"], // [String] | filter by locale
  'fieldsAppKeywords': ["null"], // [String] | the fields to include for returned resources of type appKeywords
  'limit': 56 // Number | maximum resources per page
};
apiInstance.appCustomProductPageLocalizationsSearchKeywordsGetToManyRelated(id, opts, (error, data, response) => {
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


## appCustomProductPageLocalizationsSearchKeywordsGetToManyRelationship

> AppCustomProductPageLocalizationSearchKeywordsLinkagesResponse appCustomProductPageLocalizationsSearchKeywordsGetToManyRelationship(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppCustomProductPageLocalizationsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'limit': 56 // Number | maximum resources per page
};
apiInstance.appCustomProductPageLocalizationsSearchKeywordsGetToManyRelationship(id, opts, (error, data, response) => {
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

[**AppCustomProductPageLocalizationSearchKeywordsLinkagesResponse**](AppCustomProductPageLocalizationSearchKeywordsLinkagesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## appCustomProductPageLocalizationsUpdateInstance

> AppCustomProductPageLocalizationResponse appCustomProductPageLocalizationsUpdateInstance(id, appCustomProductPageLocalizationUpdateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppCustomProductPageLocalizationsApi();
let id = "id_example"; // String | the id of the requested resource
let appCustomProductPageLocalizationUpdateRequest = new AppStoreConnectApi.AppCustomProductPageLocalizationUpdateRequest(); // AppCustomProductPageLocalizationUpdateRequest | AppCustomProductPageLocalization representation
apiInstance.appCustomProductPageLocalizationsUpdateInstance(id, appCustomProductPageLocalizationUpdateRequest, (error, data, response) => {
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
 **appCustomProductPageLocalizationUpdateRequest** | [**AppCustomProductPageLocalizationUpdateRequest**](AppCustomProductPageLocalizationUpdateRequest.md)| AppCustomProductPageLocalization representation | 

### Return type

[**AppCustomProductPageLocalizationResponse**](AppCustomProductPageLocalizationResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

