# AppStoreConnectApi.AppClipDefaultExperiencesApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**appClipDefaultExperiencesAppClipAppStoreReviewDetailGetToOneRelated**](AppClipDefaultExperiencesApi.md#appClipDefaultExperiencesAppClipAppStoreReviewDetailGetToOneRelated) | **GET** /v1/appClipDefaultExperiences/{id}/appClipAppStoreReviewDetail | 
[**appClipDefaultExperiencesAppClipAppStoreReviewDetailGetToOneRelationship**](AppClipDefaultExperiencesApi.md#appClipDefaultExperiencesAppClipAppStoreReviewDetailGetToOneRelationship) | **GET** /v1/appClipDefaultExperiences/{id}/relationships/appClipAppStoreReviewDetail | 
[**appClipDefaultExperiencesAppClipDefaultExperienceLocalizationsGetToManyRelated**](AppClipDefaultExperiencesApi.md#appClipDefaultExperiencesAppClipDefaultExperienceLocalizationsGetToManyRelated) | **GET** /v1/appClipDefaultExperiences/{id}/appClipDefaultExperienceLocalizations | 
[**appClipDefaultExperiencesAppClipDefaultExperienceLocalizationsGetToManyRelationship**](AppClipDefaultExperiencesApi.md#appClipDefaultExperiencesAppClipDefaultExperienceLocalizationsGetToManyRelationship) | **GET** /v1/appClipDefaultExperiences/{id}/relationships/appClipDefaultExperienceLocalizations | 
[**appClipDefaultExperiencesCreateInstance**](AppClipDefaultExperiencesApi.md#appClipDefaultExperiencesCreateInstance) | **POST** /v1/appClipDefaultExperiences | 
[**appClipDefaultExperiencesDeleteInstance**](AppClipDefaultExperiencesApi.md#appClipDefaultExperiencesDeleteInstance) | **DELETE** /v1/appClipDefaultExperiences/{id} | 
[**appClipDefaultExperiencesGetInstance**](AppClipDefaultExperiencesApi.md#appClipDefaultExperiencesGetInstance) | **GET** /v1/appClipDefaultExperiences/{id} | 
[**appClipDefaultExperiencesReleaseWithAppStoreVersionGetToOneRelated**](AppClipDefaultExperiencesApi.md#appClipDefaultExperiencesReleaseWithAppStoreVersionGetToOneRelated) | **GET** /v1/appClipDefaultExperiences/{id}/releaseWithAppStoreVersion | 
[**appClipDefaultExperiencesReleaseWithAppStoreVersionGetToOneRelationship**](AppClipDefaultExperiencesApi.md#appClipDefaultExperiencesReleaseWithAppStoreVersionGetToOneRelationship) | **GET** /v1/appClipDefaultExperiences/{id}/relationships/releaseWithAppStoreVersion | 
[**appClipDefaultExperiencesReleaseWithAppStoreVersionUpdateToOneRelationship**](AppClipDefaultExperiencesApi.md#appClipDefaultExperiencesReleaseWithAppStoreVersionUpdateToOneRelationship) | **PATCH** /v1/appClipDefaultExperiences/{id}/relationships/releaseWithAppStoreVersion | 
[**appClipDefaultExperiencesUpdateInstance**](AppClipDefaultExperiencesApi.md#appClipDefaultExperiencesUpdateInstance) | **PATCH** /v1/appClipDefaultExperiences/{id} | 



## appClipDefaultExperiencesAppClipAppStoreReviewDetailGetToOneRelated

> AppClipAppStoreReviewDetailResponse appClipDefaultExperiencesAppClipAppStoreReviewDetailGetToOneRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppClipDefaultExperiencesApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsAppClipAppStoreReviewDetails': ["null"], // [String] | the fields to include for returned resources of type appClipAppStoreReviewDetails
  'fieldsAppClipDefaultExperiences': ["null"], // [String] | the fields to include for returned resources of type appClipDefaultExperiences
  'include': ["null"] // [String] | comma-separated list of relationships to include
};
apiInstance.appClipDefaultExperiencesAppClipAppStoreReviewDetailGetToOneRelated(id, opts, (error, data, response) => {
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
 **fieldsAppClipAppStoreReviewDetails** | [**[String]**](String.md)| the fields to include for returned resources of type appClipAppStoreReviewDetails | [optional] 
 **fieldsAppClipDefaultExperiences** | [**[String]**](String.md)| the fields to include for returned resources of type appClipDefaultExperiences | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 

### Return type

[**AppClipAppStoreReviewDetailResponse**](AppClipAppStoreReviewDetailResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## appClipDefaultExperiencesAppClipAppStoreReviewDetailGetToOneRelationship

> AppClipDefaultExperienceAppClipAppStoreReviewDetailLinkageResponse appClipDefaultExperiencesAppClipAppStoreReviewDetailGetToOneRelationship(id)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppClipDefaultExperiencesApi();
let id = "id_example"; // String | the id of the requested resource
apiInstance.appClipDefaultExperiencesAppClipAppStoreReviewDetailGetToOneRelationship(id, (error, data, response) => {
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

### Return type

[**AppClipDefaultExperienceAppClipAppStoreReviewDetailLinkageResponse**](AppClipDefaultExperienceAppClipAppStoreReviewDetailLinkageResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## appClipDefaultExperiencesAppClipDefaultExperienceLocalizationsGetToManyRelated

> AppClipDefaultExperienceLocalizationsResponse appClipDefaultExperiencesAppClipDefaultExperienceLocalizationsGetToManyRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppClipDefaultExperiencesApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'filterLocale': ["null"], // [String] | filter by attribute 'locale'
  'fieldsAppClipDefaultExperienceLocalizations': ["null"], // [String] | the fields to include for returned resources of type appClipDefaultExperienceLocalizations
  'fieldsAppClipDefaultExperiences': ["null"], // [String] | the fields to include for returned resources of type appClipDefaultExperiences
  'fieldsAppClipHeaderImages': ["null"], // [String] | the fields to include for returned resources of type appClipHeaderImages
  'limit': 56, // Number | maximum resources per page
  'include': ["null"] // [String] | comma-separated list of relationships to include
};
apiInstance.appClipDefaultExperiencesAppClipDefaultExperienceLocalizationsGetToManyRelated(id, opts, (error, data, response) => {
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
 **fieldsAppClipDefaultExperienceLocalizations** | [**[String]**](String.md)| the fields to include for returned resources of type appClipDefaultExperienceLocalizations | [optional] 
 **fieldsAppClipDefaultExperiences** | [**[String]**](String.md)| the fields to include for returned resources of type appClipDefaultExperiences | [optional] 
 **fieldsAppClipHeaderImages** | [**[String]**](String.md)| the fields to include for returned resources of type appClipHeaderImages | [optional] 
 **limit** | **Number**| maximum resources per page | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 

### Return type

[**AppClipDefaultExperienceLocalizationsResponse**](AppClipDefaultExperienceLocalizationsResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## appClipDefaultExperiencesAppClipDefaultExperienceLocalizationsGetToManyRelationship

> AppClipDefaultExperienceAppClipDefaultExperienceLocalizationsLinkagesResponse appClipDefaultExperiencesAppClipDefaultExperienceLocalizationsGetToManyRelationship(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppClipDefaultExperiencesApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'limit': 56 // Number | maximum resources per page
};
apiInstance.appClipDefaultExperiencesAppClipDefaultExperienceLocalizationsGetToManyRelationship(id, opts, (error, data, response) => {
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

[**AppClipDefaultExperienceAppClipDefaultExperienceLocalizationsLinkagesResponse**](AppClipDefaultExperienceAppClipDefaultExperienceLocalizationsLinkagesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## appClipDefaultExperiencesCreateInstance

> AppClipDefaultExperienceResponse appClipDefaultExperiencesCreateInstance(appClipDefaultExperienceCreateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppClipDefaultExperiencesApi();
let appClipDefaultExperienceCreateRequest = new AppStoreConnectApi.AppClipDefaultExperienceCreateRequest(); // AppClipDefaultExperienceCreateRequest | AppClipDefaultExperience representation
apiInstance.appClipDefaultExperiencesCreateInstance(appClipDefaultExperienceCreateRequest, (error, data, response) => {
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
 **appClipDefaultExperienceCreateRequest** | [**AppClipDefaultExperienceCreateRequest**](AppClipDefaultExperienceCreateRequest.md)| AppClipDefaultExperience representation | 

### Return type

[**AppClipDefaultExperienceResponse**](AppClipDefaultExperienceResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## appClipDefaultExperiencesDeleteInstance

> appClipDefaultExperiencesDeleteInstance(id)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppClipDefaultExperiencesApi();
let id = "id_example"; // String | the id of the requested resource
apiInstance.appClipDefaultExperiencesDeleteInstance(id, (error, data, response) => {
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


## appClipDefaultExperiencesGetInstance

> AppClipDefaultExperienceResponse appClipDefaultExperiencesGetInstance(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppClipDefaultExperiencesApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsAppClipDefaultExperiences': ["null"], // [String] | the fields to include for returned resources of type appClipDefaultExperiences
  'fieldsAppStoreVersions': ["null"], // [String] | the fields to include for returned resources of type appStoreVersions
  'fieldsAppClipDefaultExperienceLocalizations': ["null"], // [String] | the fields to include for returned resources of type appClipDefaultExperienceLocalizations
  'fieldsAppClipAppStoreReviewDetails': ["null"], // [String] | the fields to include for returned resources of type appClipAppStoreReviewDetails
  'include': ["null"], // [String] | comma-separated list of relationships to include
  'limitAppClipDefaultExperienceLocalizations': 56 // Number | maximum number of related appClipDefaultExperienceLocalizations returned (when they are included)
};
apiInstance.appClipDefaultExperiencesGetInstance(id, opts, (error, data, response) => {
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
 **fieldsAppClipDefaultExperiences** | [**[String]**](String.md)| the fields to include for returned resources of type appClipDefaultExperiences | [optional] 
 **fieldsAppStoreVersions** | [**[String]**](String.md)| the fields to include for returned resources of type appStoreVersions | [optional] 
 **fieldsAppClipDefaultExperienceLocalizations** | [**[String]**](String.md)| the fields to include for returned resources of type appClipDefaultExperienceLocalizations | [optional] 
 **fieldsAppClipAppStoreReviewDetails** | [**[String]**](String.md)| the fields to include for returned resources of type appClipAppStoreReviewDetails | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 
 **limitAppClipDefaultExperienceLocalizations** | **Number**| maximum number of related appClipDefaultExperienceLocalizations returned (when they are included) | [optional] 

### Return type

[**AppClipDefaultExperienceResponse**](AppClipDefaultExperienceResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## appClipDefaultExperiencesReleaseWithAppStoreVersionGetToOneRelated

> AppStoreVersionResponse appClipDefaultExperiencesReleaseWithAppStoreVersionGetToOneRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppClipDefaultExperiencesApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsAppStoreVersions': ["null"], // [String] | the fields to include for returned resources of type appStoreVersions
  'fieldsApps': ["null"], // [String] | the fields to include for returned resources of type apps
  'fieldsAgeRatingDeclarations': ["null"], // [String] | the fields to include for returned resources of type ageRatingDeclarations
  'fieldsAppStoreVersionLocalizations': ["null"], // [String] | the fields to include for returned resources of type appStoreVersionLocalizations
  'fieldsBuilds': ["null"], // [String] | the fields to include for returned resources of type builds
  'fieldsAppStoreVersionPhasedReleases': ["null"], // [String] | the fields to include for returned resources of type appStoreVersionPhasedReleases
  'fieldsGameCenterAppVersions': ["null"], // [String] | the fields to include for returned resources of type gameCenterAppVersions
  'fieldsRoutingAppCoverages': ["null"], // [String] | the fields to include for returned resources of type routingAppCoverages
  'fieldsAppStoreReviewDetails': ["null"], // [String] | the fields to include for returned resources of type appStoreReviewDetails
  'fieldsAppStoreVersionSubmissions': ["null"], // [String] | the fields to include for returned resources of type appStoreVersionSubmissions
  'fieldsAppClipDefaultExperiences': ["null"], // [String] | the fields to include for returned resources of type appClipDefaultExperiences
  'fieldsAppStoreVersionExperiments': ["null"], // [String] | the fields to include for returned resources of type appStoreVersionExperiments
  'fieldsAlternativeDistributionPackages': ["null"], // [String] | the fields to include for returned resources of type alternativeDistributionPackages
  'include': ["null"], // [String] | comma-separated list of relationships to include
  'limitAppStoreVersionLocalizations': 56, // Number | maximum number of related appStoreVersionLocalizations returned (when they are included)
  'limitAppStoreVersionExperiments': 56, // Number | maximum number of related appStoreVersionExperiments returned (when they are included)
  'limitAppStoreVersionExperimentsV2': 56 // Number | maximum number of related appStoreVersionExperimentsV2 returned (when they are included)
};
apiInstance.appClipDefaultExperiencesReleaseWithAppStoreVersionGetToOneRelated(id, opts, (error, data, response) => {
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
 **fieldsAppStoreVersions** | [**[String]**](String.md)| the fields to include for returned resources of type appStoreVersions | [optional] 
 **fieldsApps** | [**[String]**](String.md)| the fields to include for returned resources of type apps | [optional] 
 **fieldsAgeRatingDeclarations** | [**[String]**](String.md)| the fields to include for returned resources of type ageRatingDeclarations | [optional] 
 **fieldsAppStoreVersionLocalizations** | [**[String]**](String.md)| the fields to include for returned resources of type appStoreVersionLocalizations | [optional] 
 **fieldsBuilds** | [**[String]**](String.md)| the fields to include for returned resources of type builds | [optional] 
 **fieldsAppStoreVersionPhasedReleases** | [**[String]**](String.md)| the fields to include for returned resources of type appStoreVersionPhasedReleases | [optional] 
 **fieldsGameCenterAppVersions** | [**[String]**](String.md)| the fields to include for returned resources of type gameCenterAppVersions | [optional] 
 **fieldsRoutingAppCoverages** | [**[String]**](String.md)| the fields to include for returned resources of type routingAppCoverages | [optional] 
 **fieldsAppStoreReviewDetails** | [**[String]**](String.md)| the fields to include for returned resources of type appStoreReviewDetails | [optional] 
 **fieldsAppStoreVersionSubmissions** | [**[String]**](String.md)| the fields to include for returned resources of type appStoreVersionSubmissions | [optional] 
 **fieldsAppClipDefaultExperiences** | [**[String]**](String.md)| the fields to include for returned resources of type appClipDefaultExperiences | [optional] 
 **fieldsAppStoreVersionExperiments** | [**[String]**](String.md)| the fields to include for returned resources of type appStoreVersionExperiments | [optional] 
 **fieldsAlternativeDistributionPackages** | [**[String]**](String.md)| the fields to include for returned resources of type alternativeDistributionPackages | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 
 **limitAppStoreVersionLocalizations** | **Number**| maximum number of related appStoreVersionLocalizations returned (when they are included) | [optional] 
 **limitAppStoreVersionExperiments** | **Number**| maximum number of related appStoreVersionExperiments returned (when they are included) | [optional] 
 **limitAppStoreVersionExperimentsV2** | **Number**| maximum number of related appStoreVersionExperimentsV2 returned (when they are included) | [optional] 

### Return type

[**AppStoreVersionResponse**](AppStoreVersionResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## appClipDefaultExperiencesReleaseWithAppStoreVersionGetToOneRelationship

> AppClipDefaultExperienceReleaseWithAppStoreVersionLinkageResponse appClipDefaultExperiencesReleaseWithAppStoreVersionGetToOneRelationship(id)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppClipDefaultExperiencesApi();
let id = "id_example"; // String | the id of the requested resource
apiInstance.appClipDefaultExperiencesReleaseWithAppStoreVersionGetToOneRelationship(id, (error, data, response) => {
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

### Return type

[**AppClipDefaultExperienceReleaseWithAppStoreVersionLinkageResponse**](AppClipDefaultExperienceReleaseWithAppStoreVersionLinkageResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## appClipDefaultExperiencesReleaseWithAppStoreVersionUpdateToOneRelationship

> appClipDefaultExperiencesReleaseWithAppStoreVersionUpdateToOneRelationship(id, appClipDefaultExperienceReleaseWithAppStoreVersionLinkageRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppClipDefaultExperiencesApi();
let id = "id_example"; // String | the id of the requested resource
let appClipDefaultExperienceReleaseWithAppStoreVersionLinkageRequest = new AppStoreConnectApi.AppClipDefaultExperienceReleaseWithAppStoreVersionLinkageRequest(); // AppClipDefaultExperienceReleaseWithAppStoreVersionLinkageRequest | Related linkage
apiInstance.appClipDefaultExperiencesReleaseWithAppStoreVersionUpdateToOneRelationship(id, appClipDefaultExperienceReleaseWithAppStoreVersionLinkageRequest, (error, data, response) => {
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
 **appClipDefaultExperienceReleaseWithAppStoreVersionLinkageRequest** | [**AppClipDefaultExperienceReleaseWithAppStoreVersionLinkageRequest**](AppClipDefaultExperienceReleaseWithAppStoreVersionLinkageRequest.md)| Related linkage | 

### Return type

null (empty response body)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## appClipDefaultExperiencesUpdateInstance

> AppClipDefaultExperienceResponse appClipDefaultExperiencesUpdateInstance(id, appClipDefaultExperienceUpdateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppClipDefaultExperiencesApi();
let id = "id_example"; // String | the id of the requested resource
let appClipDefaultExperienceUpdateRequest = new AppStoreConnectApi.AppClipDefaultExperienceUpdateRequest(); // AppClipDefaultExperienceUpdateRequest | AppClipDefaultExperience representation
apiInstance.appClipDefaultExperiencesUpdateInstance(id, appClipDefaultExperienceUpdateRequest, (error, data, response) => {
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
 **appClipDefaultExperienceUpdateRequest** | [**AppClipDefaultExperienceUpdateRequest**](AppClipDefaultExperienceUpdateRequest.md)| AppClipDefaultExperience representation | 

### Return type

[**AppClipDefaultExperienceResponse**](AppClipDefaultExperienceResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

