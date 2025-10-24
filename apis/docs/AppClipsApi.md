# AppStoreConnectApi.AppClipsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**appClipsAppClipAdvancedExperiencesGetToManyRelated**](AppClipsApi.md#appClipsAppClipAdvancedExperiencesGetToManyRelated) | **GET** /v1/appClips/{id}/appClipAdvancedExperiences | 
[**appClipsAppClipAdvancedExperiencesGetToManyRelationship**](AppClipsApi.md#appClipsAppClipAdvancedExperiencesGetToManyRelationship) | **GET** /v1/appClips/{id}/relationships/appClipAdvancedExperiences | 
[**appClipsAppClipDefaultExperiencesGetToManyRelated**](AppClipsApi.md#appClipsAppClipDefaultExperiencesGetToManyRelated) | **GET** /v1/appClips/{id}/appClipDefaultExperiences | 
[**appClipsAppClipDefaultExperiencesGetToManyRelationship**](AppClipsApi.md#appClipsAppClipDefaultExperiencesGetToManyRelationship) | **GET** /v1/appClips/{id}/relationships/appClipDefaultExperiences | 
[**appClipsGetInstance**](AppClipsApi.md#appClipsGetInstance) | **GET** /v1/appClips/{id} | 



## appClipsAppClipAdvancedExperiencesGetToManyRelated

> AppClipAdvancedExperiencesResponse appClipsAppClipAdvancedExperiencesGetToManyRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppClipsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'filterStatus': ["null"], // [String] | filter by attribute 'status'
  'filterPlaceStatus': ["null"], // [String] | filter by attribute 'placeStatus'
  'filterAction': ["null"], // [String] | filter by attribute 'action'
  'fieldsAppClipAdvancedExperiences': ["null"], // [String] | the fields to include for returned resources of type appClipAdvancedExperiences
  'fieldsAppClips': ["null"], // [String] | the fields to include for returned resources of type appClips
  'fieldsAppClipAdvancedExperienceImages': ["null"], // [String] | the fields to include for returned resources of type appClipAdvancedExperienceImages
  'fieldsAppClipAdvancedExperienceLocalizations': ["null"], // [String] | the fields to include for returned resources of type appClipAdvancedExperienceLocalizations
  'limit': 56, // Number | maximum resources per page
  'include': ["null"], // [String] | comma-separated list of relationships to include
  'limitLocalizations': 56 // Number | maximum number of related localizations returned (when they are included)
};
apiInstance.appClipsAppClipAdvancedExperiencesGetToManyRelated(id, opts, (error, data, response) => {
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
 **filterStatus** | [**[String]**](String.md)| filter by attribute &#39;status&#39; | [optional] 
 **filterPlaceStatus** | [**[String]**](String.md)| filter by attribute &#39;placeStatus&#39; | [optional] 
 **filterAction** | [**[String]**](String.md)| filter by attribute &#39;action&#39; | [optional] 
 **fieldsAppClipAdvancedExperiences** | [**[String]**](String.md)| the fields to include for returned resources of type appClipAdvancedExperiences | [optional] 
 **fieldsAppClips** | [**[String]**](String.md)| the fields to include for returned resources of type appClips | [optional] 
 **fieldsAppClipAdvancedExperienceImages** | [**[String]**](String.md)| the fields to include for returned resources of type appClipAdvancedExperienceImages | [optional] 
 **fieldsAppClipAdvancedExperienceLocalizations** | [**[String]**](String.md)| the fields to include for returned resources of type appClipAdvancedExperienceLocalizations | [optional] 
 **limit** | **Number**| maximum resources per page | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 
 **limitLocalizations** | **Number**| maximum number of related localizations returned (when they are included) | [optional] 

### Return type

[**AppClipAdvancedExperiencesResponse**](AppClipAdvancedExperiencesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## appClipsAppClipAdvancedExperiencesGetToManyRelationship

> AppClipAppClipAdvancedExperiencesLinkagesResponse appClipsAppClipAdvancedExperiencesGetToManyRelationship(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppClipsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'limit': 56 // Number | maximum resources per page
};
apiInstance.appClipsAppClipAdvancedExperiencesGetToManyRelationship(id, opts, (error, data, response) => {
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

[**AppClipAppClipAdvancedExperiencesLinkagesResponse**](AppClipAppClipAdvancedExperiencesLinkagesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## appClipsAppClipDefaultExperiencesGetToManyRelated

> AppClipDefaultExperiencesResponse appClipsAppClipDefaultExperiencesGetToManyRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppClipsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'existsReleaseWithAppStoreVersion': true, // Boolean | filter by existence or non-existence of related 'releaseWithAppStoreVersion'
  'fieldsAppClipDefaultExperiences': ["null"], // [String] | the fields to include for returned resources of type appClipDefaultExperiences
  'fieldsAppClips': ["null"], // [String] | the fields to include for returned resources of type appClips
  'fieldsAppStoreVersions': ["null"], // [String] | the fields to include for returned resources of type appStoreVersions
  'fieldsAppClipDefaultExperienceLocalizations': ["null"], // [String] | the fields to include for returned resources of type appClipDefaultExperienceLocalizations
  'fieldsAppClipAppStoreReviewDetails': ["null"], // [String] | the fields to include for returned resources of type appClipAppStoreReviewDetails
  'limit': 56, // Number | maximum resources per page
  'include': ["null"], // [String] | comma-separated list of relationships to include
  'limitAppClipDefaultExperienceLocalizations': 56 // Number | maximum number of related appClipDefaultExperienceLocalizations returned (when they are included)
};
apiInstance.appClipsAppClipDefaultExperiencesGetToManyRelated(id, opts, (error, data, response) => {
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
 **existsReleaseWithAppStoreVersion** | **Boolean**| filter by existence or non-existence of related &#39;releaseWithAppStoreVersion&#39; | [optional] 
 **fieldsAppClipDefaultExperiences** | [**[String]**](String.md)| the fields to include for returned resources of type appClipDefaultExperiences | [optional] 
 **fieldsAppClips** | [**[String]**](String.md)| the fields to include for returned resources of type appClips | [optional] 
 **fieldsAppStoreVersions** | [**[String]**](String.md)| the fields to include for returned resources of type appStoreVersions | [optional] 
 **fieldsAppClipDefaultExperienceLocalizations** | [**[String]**](String.md)| the fields to include for returned resources of type appClipDefaultExperienceLocalizations | [optional] 
 **fieldsAppClipAppStoreReviewDetails** | [**[String]**](String.md)| the fields to include for returned resources of type appClipAppStoreReviewDetails | [optional] 
 **limit** | **Number**| maximum resources per page | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 
 **limitAppClipDefaultExperienceLocalizations** | **Number**| maximum number of related appClipDefaultExperienceLocalizations returned (when they are included) | [optional] 

### Return type

[**AppClipDefaultExperiencesResponse**](AppClipDefaultExperiencesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## appClipsAppClipDefaultExperiencesGetToManyRelationship

> AppClipAppClipDefaultExperiencesLinkagesResponse appClipsAppClipDefaultExperiencesGetToManyRelationship(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppClipsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'limit': 56 // Number | maximum resources per page
};
apiInstance.appClipsAppClipDefaultExperiencesGetToManyRelationship(id, opts, (error, data, response) => {
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

[**AppClipAppClipDefaultExperiencesLinkagesResponse**](AppClipAppClipDefaultExperiencesLinkagesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## appClipsGetInstance

> AppClipResponse appClipsGetInstance(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppClipsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsAppClips': ["null"], // [String] | the fields to include for returned resources of type appClips
  'fieldsAppClipDefaultExperiences': ["null"], // [String] | the fields to include for returned resources of type appClipDefaultExperiences
  'include': ["null"], // [String] | comma-separated list of relationships to include
  'limitAppClipDefaultExperiences': 56 // Number | maximum number of related appClipDefaultExperiences returned (when they are included)
};
apiInstance.appClipsGetInstance(id, opts, (error, data, response) => {
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
 **fieldsAppClips** | [**[String]**](String.md)| the fields to include for returned resources of type appClips | [optional] 
 **fieldsAppClipDefaultExperiences** | [**[String]**](String.md)| the fields to include for returned resources of type appClipDefaultExperiences | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 
 **limitAppClipDefaultExperiences** | **Number**| maximum number of related appClipDefaultExperiences returned (when they are included) | [optional] 

### Return type

[**AppClipResponse**](AppClipResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

