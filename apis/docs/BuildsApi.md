# AppStoreConnectApi.BuildsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**buildsAppEncryptionDeclarationGetToOneRelated**](BuildsApi.md#buildsAppEncryptionDeclarationGetToOneRelated) | **GET** /v1/builds/{id}/appEncryptionDeclaration | 
[**buildsAppEncryptionDeclarationGetToOneRelationship**](BuildsApi.md#buildsAppEncryptionDeclarationGetToOneRelationship) | **GET** /v1/builds/{id}/relationships/appEncryptionDeclaration | 
[**buildsAppEncryptionDeclarationUpdateToOneRelationship**](BuildsApi.md#buildsAppEncryptionDeclarationUpdateToOneRelationship) | **PATCH** /v1/builds/{id}/relationships/appEncryptionDeclaration | 
[**buildsAppGetToOneRelated**](BuildsApi.md#buildsAppGetToOneRelated) | **GET** /v1/builds/{id}/app | 
[**buildsAppGetToOneRelationship**](BuildsApi.md#buildsAppGetToOneRelationship) | **GET** /v1/builds/{id}/relationships/app | 
[**buildsAppStoreVersionGetToOneRelated**](BuildsApi.md#buildsAppStoreVersionGetToOneRelated) | **GET** /v1/builds/{id}/appStoreVersion | 
[**buildsAppStoreVersionGetToOneRelationship**](BuildsApi.md#buildsAppStoreVersionGetToOneRelationship) | **GET** /v1/builds/{id}/relationships/appStoreVersion | 
[**buildsBetaAppReviewSubmissionGetToOneRelated**](BuildsApi.md#buildsBetaAppReviewSubmissionGetToOneRelated) | **GET** /v1/builds/{id}/betaAppReviewSubmission | 
[**buildsBetaAppReviewSubmissionGetToOneRelationship**](BuildsApi.md#buildsBetaAppReviewSubmissionGetToOneRelationship) | **GET** /v1/builds/{id}/relationships/betaAppReviewSubmission | 
[**buildsBetaBuildLocalizationsGetToManyRelated**](BuildsApi.md#buildsBetaBuildLocalizationsGetToManyRelated) | **GET** /v1/builds/{id}/betaBuildLocalizations | 
[**buildsBetaBuildLocalizationsGetToManyRelationship**](BuildsApi.md#buildsBetaBuildLocalizationsGetToManyRelationship) | **GET** /v1/builds/{id}/relationships/betaBuildLocalizations | 
[**buildsBetaBuildUsagesGetMetrics**](BuildsApi.md#buildsBetaBuildUsagesGetMetrics) | **GET** /v1/builds/{id}/metrics/betaBuildUsages | 
[**buildsBetaGroupsCreateToManyRelationship**](BuildsApi.md#buildsBetaGroupsCreateToManyRelationship) | **POST** /v1/builds/{id}/relationships/betaGroups | 
[**buildsBetaGroupsDeleteToManyRelationship**](BuildsApi.md#buildsBetaGroupsDeleteToManyRelationship) | **DELETE** /v1/builds/{id}/relationships/betaGroups | 
[**buildsBuildBetaDetailGetToOneRelated**](BuildsApi.md#buildsBuildBetaDetailGetToOneRelated) | **GET** /v1/builds/{id}/buildBetaDetail | 
[**buildsBuildBetaDetailGetToOneRelationship**](BuildsApi.md#buildsBuildBetaDetailGetToOneRelationship) | **GET** /v1/builds/{id}/relationships/buildBetaDetail | 
[**buildsDiagnosticSignaturesGetToManyRelated**](BuildsApi.md#buildsDiagnosticSignaturesGetToManyRelated) | **GET** /v1/builds/{id}/diagnosticSignatures | 
[**buildsDiagnosticSignaturesGetToManyRelationship**](BuildsApi.md#buildsDiagnosticSignaturesGetToManyRelationship) | **GET** /v1/builds/{id}/relationships/diagnosticSignatures | 
[**buildsGetCollection**](BuildsApi.md#buildsGetCollection) | **GET** /v1/builds | 
[**buildsGetInstance**](BuildsApi.md#buildsGetInstance) | **GET** /v1/builds/{id} | 
[**buildsIconsGetToManyRelated**](BuildsApi.md#buildsIconsGetToManyRelated) | **GET** /v1/builds/{id}/icons | 
[**buildsIconsGetToManyRelationship**](BuildsApi.md#buildsIconsGetToManyRelationship) | **GET** /v1/builds/{id}/relationships/icons | 
[**buildsIndividualTestersCreateToManyRelationship**](BuildsApi.md#buildsIndividualTestersCreateToManyRelationship) | **POST** /v1/builds/{id}/relationships/individualTesters | 
[**buildsIndividualTestersDeleteToManyRelationship**](BuildsApi.md#buildsIndividualTestersDeleteToManyRelationship) | **DELETE** /v1/builds/{id}/relationships/individualTesters | 
[**buildsIndividualTestersGetToManyRelated**](BuildsApi.md#buildsIndividualTestersGetToManyRelated) | **GET** /v1/builds/{id}/individualTesters | 
[**buildsIndividualTestersGetToManyRelationship**](BuildsApi.md#buildsIndividualTestersGetToManyRelationship) | **GET** /v1/builds/{id}/relationships/individualTesters | 
[**buildsPerfPowerMetricsGetToManyRelated**](BuildsApi.md#buildsPerfPowerMetricsGetToManyRelated) | **GET** /v1/builds/{id}/perfPowerMetrics | 
[**buildsPreReleaseVersionGetToOneRelated**](BuildsApi.md#buildsPreReleaseVersionGetToOneRelated) | **GET** /v1/builds/{id}/preReleaseVersion | 
[**buildsPreReleaseVersionGetToOneRelationship**](BuildsApi.md#buildsPreReleaseVersionGetToOneRelationship) | **GET** /v1/builds/{id}/relationships/preReleaseVersion | 
[**buildsUpdateInstance**](BuildsApi.md#buildsUpdateInstance) | **PATCH** /v1/builds/{id} | 



## buildsAppEncryptionDeclarationGetToOneRelated

> AppEncryptionDeclarationWithoutIncludesResponse buildsAppEncryptionDeclarationGetToOneRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.BuildsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsAppEncryptionDeclarations': ["null"] // [String] | the fields to include for returned resources of type appEncryptionDeclarations
};
apiInstance.buildsAppEncryptionDeclarationGetToOneRelated(id, opts, (error, data, response) => {
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
 **fieldsAppEncryptionDeclarations** | [**[String]**](String.md)| the fields to include for returned resources of type appEncryptionDeclarations | [optional] 

### Return type

[**AppEncryptionDeclarationWithoutIncludesResponse**](AppEncryptionDeclarationWithoutIncludesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## buildsAppEncryptionDeclarationGetToOneRelationship

> BuildAppEncryptionDeclarationLinkageResponse buildsAppEncryptionDeclarationGetToOneRelationship(id)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.BuildsApi();
let id = "id_example"; // String | the id of the requested resource
apiInstance.buildsAppEncryptionDeclarationGetToOneRelationship(id, (error, data, response) => {
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

[**BuildAppEncryptionDeclarationLinkageResponse**](BuildAppEncryptionDeclarationLinkageResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## buildsAppEncryptionDeclarationUpdateToOneRelationship

> buildsAppEncryptionDeclarationUpdateToOneRelationship(id, buildAppEncryptionDeclarationLinkageRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.BuildsApi();
let id = "id_example"; // String | the id of the requested resource
let buildAppEncryptionDeclarationLinkageRequest = new AppStoreConnectApi.BuildAppEncryptionDeclarationLinkageRequest(); // BuildAppEncryptionDeclarationLinkageRequest | Related linkage
apiInstance.buildsAppEncryptionDeclarationUpdateToOneRelationship(id, buildAppEncryptionDeclarationLinkageRequest, (error, data, response) => {
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
 **buildAppEncryptionDeclarationLinkageRequest** | [**BuildAppEncryptionDeclarationLinkageRequest**](BuildAppEncryptionDeclarationLinkageRequest.md)| Related linkage | 

### Return type

null (empty response body)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## buildsAppGetToOneRelated

> AppWithoutIncludesResponse buildsAppGetToOneRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.BuildsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsApps': ["null"] // [String] | the fields to include for returned resources of type apps
};
apiInstance.buildsAppGetToOneRelated(id, opts, (error, data, response) => {
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
 **fieldsApps** | [**[String]**](String.md)| the fields to include for returned resources of type apps | [optional] 

### Return type

[**AppWithoutIncludesResponse**](AppWithoutIncludesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## buildsAppGetToOneRelationship

> BuildAppLinkageResponse buildsAppGetToOneRelationship(id)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.BuildsApi();
let id = "id_example"; // String | the id of the requested resource
apiInstance.buildsAppGetToOneRelationship(id, (error, data, response) => {
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

[**BuildAppLinkageResponse**](BuildAppLinkageResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## buildsAppStoreVersionGetToOneRelated

> AppStoreVersionResponse buildsAppStoreVersionGetToOneRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.BuildsApi();
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
apiInstance.buildsAppStoreVersionGetToOneRelated(id, opts, (error, data, response) => {
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


## buildsAppStoreVersionGetToOneRelationship

> BuildAppStoreVersionLinkageResponse buildsAppStoreVersionGetToOneRelationship(id)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.BuildsApi();
let id = "id_example"; // String | the id of the requested resource
apiInstance.buildsAppStoreVersionGetToOneRelationship(id, (error, data, response) => {
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

[**BuildAppStoreVersionLinkageResponse**](BuildAppStoreVersionLinkageResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## buildsBetaAppReviewSubmissionGetToOneRelated

> BetaAppReviewSubmissionWithoutIncludesResponse buildsBetaAppReviewSubmissionGetToOneRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.BuildsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsBetaAppReviewSubmissions': ["null"] // [String] | the fields to include for returned resources of type betaAppReviewSubmissions
};
apiInstance.buildsBetaAppReviewSubmissionGetToOneRelated(id, opts, (error, data, response) => {
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
 **fieldsBetaAppReviewSubmissions** | [**[String]**](String.md)| the fields to include for returned resources of type betaAppReviewSubmissions | [optional] 

### Return type

[**BetaAppReviewSubmissionWithoutIncludesResponse**](BetaAppReviewSubmissionWithoutIncludesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## buildsBetaAppReviewSubmissionGetToOneRelationship

> BuildBetaAppReviewSubmissionLinkageResponse buildsBetaAppReviewSubmissionGetToOneRelationship(id)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.BuildsApi();
let id = "id_example"; // String | the id of the requested resource
apiInstance.buildsBetaAppReviewSubmissionGetToOneRelationship(id, (error, data, response) => {
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

[**BuildBetaAppReviewSubmissionLinkageResponse**](BuildBetaAppReviewSubmissionLinkageResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## buildsBetaBuildLocalizationsGetToManyRelated

> BetaBuildLocalizationsWithoutIncludesResponse buildsBetaBuildLocalizationsGetToManyRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.BuildsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsBetaBuildLocalizations': ["null"], // [String] | the fields to include for returned resources of type betaBuildLocalizations
  'limit': 56 // Number | maximum resources per page
};
apiInstance.buildsBetaBuildLocalizationsGetToManyRelated(id, opts, (error, data, response) => {
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
 **fieldsBetaBuildLocalizations** | [**[String]**](String.md)| the fields to include for returned resources of type betaBuildLocalizations | [optional] 
 **limit** | **Number**| maximum resources per page | [optional] 

### Return type

[**BetaBuildLocalizationsWithoutIncludesResponse**](BetaBuildLocalizationsWithoutIncludesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## buildsBetaBuildLocalizationsGetToManyRelationship

> BuildBetaBuildLocalizationsLinkagesResponse buildsBetaBuildLocalizationsGetToManyRelationship(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.BuildsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'limit': 56 // Number | maximum resources per page
};
apiInstance.buildsBetaBuildLocalizationsGetToManyRelationship(id, opts, (error, data, response) => {
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

[**BuildBetaBuildLocalizationsLinkagesResponse**](BuildBetaBuildLocalizationsLinkagesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## buildsBetaBuildUsagesGetMetrics

> BetaBuildUsagesV1MetricResponse buildsBetaBuildUsagesGetMetrics(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.BuildsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'limit': 56 // Number | maximum number of groups to return per page
};
apiInstance.buildsBetaBuildUsagesGetMetrics(id, opts, (error, data, response) => {
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
 **limit** | **Number**| maximum number of groups to return per page | [optional] 

### Return type

[**BetaBuildUsagesV1MetricResponse**](BetaBuildUsagesV1MetricResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## buildsBetaGroupsCreateToManyRelationship

> buildsBetaGroupsCreateToManyRelationship(id, buildBetaGroupsLinkagesRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.BuildsApi();
let id = "id_example"; // String | the id of the requested resource
let buildBetaGroupsLinkagesRequest = new AppStoreConnectApi.BuildBetaGroupsLinkagesRequest(); // BuildBetaGroupsLinkagesRequest | List of related linkages
apiInstance.buildsBetaGroupsCreateToManyRelationship(id, buildBetaGroupsLinkagesRequest, (error, data, response) => {
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
 **buildBetaGroupsLinkagesRequest** | [**BuildBetaGroupsLinkagesRequest**](BuildBetaGroupsLinkagesRequest.md)| List of related linkages | 

### Return type

null (empty response body)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## buildsBetaGroupsDeleteToManyRelationship

> buildsBetaGroupsDeleteToManyRelationship(id, buildBetaGroupsLinkagesRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.BuildsApi();
let id = "id_example"; // String | the id of the requested resource
let buildBetaGroupsLinkagesRequest = new AppStoreConnectApi.BuildBetaGroupsLinkagesRequest(); // BuildBetaGroupsLinkagesRequest | List of related linkages
apiInstance.buildsBetaGroupsDeleteToManyRelationship(id, buildBetaGroupsLinkagesRequest, (error, data, response) => {
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
 **buildBetaGroupsLinkagesRequest** | [**BuildBetaGroupsLinkagesRequest**](BuildBetaGroupsLinkagesRequest.md)| List of related linkages | 

### Return type

null (empty response body)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## buildsBuildBetaDetailGetToOneRelated

> BuildBetaDetailResponse buildsBuildBetaDetailGetToOneRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.BuildsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsBuildBetaDetails': ["null"], // [String] | the fields to include for returned resources of type buildBetaDetails
  'fieldsBuilds': ["null"], // [String] | the fields to include for returned resources of type builds
  'include': ["null"] // [String] | comma-separated list of relationships to include
};
apiInstance.buildsBuildBetaDetailGetToOneRelated(id, opts, (error, data, response) => {
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
 **fieldsBuildBetaDetails** | [**[String]**](String.md)| the fields to include for returned resources of type buildBetaDetails | [optional] 
 **fieldsBuilds** | [**[String]**](String.md)| the fields to include for returned resources of type builds | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 

### Return type

[**BuildBetaDetailResponse**](BuildBetaDetailResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## buildsBuildBetaDetailGetToOneRelationship

> BuildBuildBetaDetailLinkageResponse buildsBuildBetaDetailGetToOneRelationship(id)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.BuildsApi();
let id = "id_example"; // String | the id of the requested resource
apiInstance.buildsBuildBetaDetailGetToOneRelationship(id, (error, data, response) => {
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

[**BuildBuildBetaDetailLinkageResponse**](BuildBuildBetaDetailLinkageResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## buildsDiagnosticSignaturesGetToManyRelated

> DiagnosticSignaturesResponse buildsDiagnosticSignaturesGetToManyRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.BuildsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'filterDiagnosticType': ["null"], // [String] | filter by attribute 'diagnosticType'
  'fieldsDiagnosticSignatures': ["null"], // [String] | the fields to include for returned resources of type diagnosticSignatures
  'limit': 56 // Number | maximum resources per page
};
apiInstance.buildsDiagnosticSignaturesGetToManyRelated(id, opts, (error, data, response) => {
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
 **filterDiagnosticType** | [**[String]**](String.md)| filter by attribute &#39;diagnosticType&#39; | [optional] 
 **fieldsDiagnosticSignatures** | [**[String]**](String.md)| the fields to include for returned resources of type diagnosticSignatures | [optional] 
 **limit** | **Number**| maximum resources per page | [optional] 

### Return type

[**DiagnosticSignaturesResponse**](DiagnosticSignaturesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## buildsDiagnosticSignaturesGetToManyRelationship

> BuildDiagnosticSignaturesLinkagesResponse buildsDiagnosticSignaturesGetToManyRelationship(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.BuildsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'limit': 56 // Number | maximum resources per page
};
apiInstance.buildsDiagnosticSignaturesGetToManyRelationship(id, opts, (error, data, response) => {
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

[**BuildDiagnosticSignaturesLinkagesResponse**](BuildDiagnosticSignaturesLinkagesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## buildsGetCollection

> BuildsResponse buildsGetCollection(opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.BuildsApi();
let opts = {
  'filterVersion': ["null"], // [String] | filter by attribute 'version'
  'filterExpired': ["null"], // [String] | filter by attribute 'expired'
  'filterProcessingState': ["null"], // [String] | filter by attribute 'processingState'
  'filterBetaAppReviewSubmissionBetaReviewState': ["null"], // [String] | filter by attribute 'betaAppReviewSubmission.betaReviewState'
  'filterUsesNonExemptEncryption': ["null"], // [String] | filter by attribute 'usesNonExemptEncryption'
  'filterPreReleaseVersionVersion': ["null"], // [String] | filter by attribute 'preReleaseVersion.version'
  'filterPreReleaseVersionPlatform': ["null"], // [String] | filter by attribute 'preReleaseVersion.platform'
  'filterBuildAudienceType': ["null"], // [String] | filter by attribute 'buildAudienceType'
  'filterPreReleaseVersion': ["null"], // [String] | filter by id(s) of related 'preReleaseVersion'
  'filterApp': ["null"], // [String] | filter by id(s) of related 'app'
  'filterBetaGroups': ["null"], // [String] | filter by id(s) of related 'betaGroups'
  'filterAppStoreVersion': ["null"], // [String] | filter by id(s) of related 'appStoreVersion'
  'filterId': ["null"], // [String] | filter by id(s)
  'existsUsesNonExemptEncryption': true, // Boolean | filter by attribute 'usesNonExemptEncryption'
  'sort': ["null"], // [String] | comma-separated list of sort expressions; resources will be sorted as specified
  'fieldsBuilds': ["null"], // [String] | the fields to include for returned resources of type builds
  'fieldsPreReleaseVersions': ["null"], // [String] | the fields to include for returned resources of type preReleaseVersions
  'fieldsBetaTesters': ["null"], // [String] | the fields to include for returned resources of type betaTesters
  'fieldsBetaBuildLocalizations': ["null"], // [String] | the fields to include for returned resources of type betaBuildLocalizations
  'fieldsAppEncryptionDeclarations': ["null"], // [String] | the fields to include for returned resources of type appEncryptionDeclarations
  'fieldsBetaAppReviewSubmissions': ["null"], // [String] | the fields to include for returned resources of type betaAppReviewSubmissions
  'fieldsApps': ["null"], // [String] | the fields to include for returned resources of type apps
  'fieldsBuildBetaDetails': ["null"], // [String] | the fields to include for returned resources of type buildBetaDetails
  'fieldsAppStoreVersions': ["null"], // [String] | the fields to include for returned resources of type appStoreVersions
  'fieldsBuildIcons': ["null"], // [String] | the fields to include for returned resources of type buildIcons
  'limit': 56, // Number | maximum resources per page
  'include': ["null"], // [String] | comma-separated list of relationships to include
  'limitBetaBuildLocalizations': 56, // Number | maximum number of related betaBuildLocalizations returned (when they are included)
  'limitBetaGroups': 56, // Number | maximum number of related betaGroups returned (when they are included)
  'limitBuildBundles': 56, // Number | maximum number of related buildBundles returned (when they are included)
  'limitIcons': 56, // Number | maximum number of related icons returned (when they are included)
  'limitIndividualTesters': 56 // Number | maximum number of related individualTesters returned (when they are included)
};
apiInstance.buildsGetCollection(opts, (error, data, response) => {
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
 **filterVersion** | [**[String]**](String.md)| filter by attribute &#39;version&#39; | [optional] 
 **filterExpired** | [**[String]**](String.md)| filter by attribute &#39;expired&#39; | [optional] 
 **filterProcessingState** | [**[String]**](String.md)| filter by attribute &#39;processingState&#39; | [optional] 
 **filterBetaAppReviewSubmissionBetaReviewState** | [**[String]**](String.md)| filter by attribute &#39;betaAppReviewSubmission.betaReviewState&#39; | [optional] 
 **filterUsesNonExemptEncryption** | [**[String]**](String.md)| filter by attribute &#39;usesNonExemptEncryption&#39; | [optional] 
 **filterPreReleaseVersionVersion** | [**[String]**](String.md)| filter by attribute &#39;preReleaseVersion.version&#39; | [optional] 
 **filterPreReleaseVersionPlatform** | [**[String]**](String.md)| filter by attribute &#39;preReleaseVersion.platform&#39; | [optional] 
 **filterBuildAudienceType** | [**[String]**](String.md)| filter by attribute &#39;buildAudienceType&#39; | [optional] 
 **filterPreReleaseVersion** | [**[String]**](String.md)| filter by id(s) of related &#39;preReleaseVersion&#39; | [optional] 
 **filterApp** | [**[String]**](String.md)| filter by id(s) of related &#39;app&#39; | [optional] 
 **filterBetaGroups** | [**[String]**](String.md)| filter by id(s) of related &#39;betaGroups&#39; | [optional] 
 **filterAppStoreVersion** | [**[String]**](String.md)| filter by id(s) of related &#39;appStoreVersion&#39; | [optional] 
 **filterId** | [**[String]**](String.md)| filter by id(s) | [optional] 
 **existsUsesNonExemptEncryption** | **Boolean**| filter by attribute &#39;usesNonExemptEncryption&#39; | [optional] 
 **sort** | [**[String]**](String.md)| comma-separated list of sort expressions; resources will be sorted as specified | [optional] 
 **fieldsBuilds** | [**[String]**](String.md)| the fields to include for returned resources of type builds | [optional] 
 **fieldsPreReleaseVersions** | [**[String]**](String.md)| the fields to include for returned resources of type preReleaseVersions | [optional] 
 **fieldsBetaTesters** | [**[String]**](String.md)| the fields to include for returned resources of type betaTesters | [optional] 
 **fieldsBetaBuildLocalizations** | [**[String]**](String.md)| the fields to include for returned resources of type betaBuildLocalizations | [optional] 
 **fieldsAppEncryptionDeclarations** | [**[String]**](String.md)| the fields to include for returned resources of type appEncryptionDeclarations | [optional] 
 **fieldsBetaAppReviewSubmissions** | [**[String]**](String.md)| the fields to include for returned resources of type betaAppReviewSubmissions | [optional] 
 **fieldsApps** | [**[String]**](String.md)| the fields to include for returned resources of type apps | [optional] 
 **fieldsBuildBetaDetails** | [**[String]**](String.md)| the fields to include for returned resources of type buildBetaDetails | [optional] 
 **fieldsAppStoreVersions** | [**[String]**](String.md)| the fields to include for returned resources of type appStoreVersions | [optional] 
 **fieldsBuildIcons** | [**[String]**](String.md)| the fields to include for returned resources of type buildIcons | [optional] 
 **limit** | **Number**| maximum resources per page | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 
 **limitBetaBuildLocalizations** | **Number**| maximum number of related betaBuildLocalizations returned (when they are included) | [optional] 
 **limitBetaGroups** | **Number**| maximum number of related betaGroups returned (when they are included) | [optional] 
 **limitBuildBundles** | **Number**| maximum number of related buildBundles returned (when they are included) | [optional] 
 **limitIcons** | **Number**| maximum number of related icons returned (when they are included) | [optional] 
 **limitIndividualTesters** | **Number**| maximum number of related individualTesters returned (when they are included) | [optional] 

### Return type

[**BuildsResponse**](BuildsResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## buildsGetInstance

> BuildResponse buildsGetInstance(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.BuildsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsBuilds': ["null"], // [String] | the fields to include for returned resources of type builds
  'fieldsPreReleaseVersions': ["null"], // [String] | the fields to include for returned resources of type preReleaseVersions
  'fieldsBetaTesters': ["null"], // [String] | the fields to include for returned resources of type betaTesters
  'fieldsBetaBuildLocalizations': ["null"], // [String] | the fields to include for returned resources of type betaBuildLocalizations
  'fieldsAppEncryptionDeclarations': ["null"], // [String] | the fields to include for returned resources of type appEncryptionDeclarations
  'fieldsBetaAppReviewSubmissions': ["null"], // [String] | the fields to include for returned resources of type betaAppReviewSubmissions
  'fieldsApps': ["null"], // [String] | the fields to include for returned resources of type apps
  'fieldsBuildBetaDetails': ["null"], // [String] | the fields to include for returned resources of type buildBetaDetails
  'fieldsAppStoreVersions': ["null"], // [String] | the fields to include for returned resources of type appStoreVersions
  'fieldsBuildIcons': ["null"], // [String] | the fields to include for returned resources of type buildIcons
  'include': ["null"], // [String] | comma-separated list of relationships to include
  'limitBetaBuildLocalizations': 56, // Number | maximum number of related betaBuildLocalizations returned (when they are included)
  'limitBetaGroups': 56, // Number | maximum number of related betaGroups returned (when they are included)
  'limitBuildBundles': 56, // Number | maximum number of related buildBundles returned (when they are included)
  'limitIcons': 56, // Number | maximum number of related icons returned (when they are included)
  'limitIndividualTesters': 56 // Number | maximum number of related individualTesters returned (when they are included)
};
apiInstance.buildsGetInstance(id, opts, (error, data, response) => {
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
 **fieldsBuilds** | [**[String]**](String.md)| the fields to include for returned resources of type builds | [optional] 
 **fieldsPreReleaseVersions** | [**[String]**](String.md)| the fields to include for returned resources of type preReleaseVersions | [optional] 
 **fieldsBetaTesters** | [**[String]**](String.md)| the fields to include for returned resources of type betaTesters | [optional] 
 **fieldsBetaBuildLocalizations** | [**[String]**](String.md)| the fields to include for returned resources of type betaBuildLocalizations | [optional] 
 **fieldsAppEncryptionDeclarations** | [**[String]**](String.md)| the fields to include for returned resources of type appEncryptionDeclarations | [optional] 
 **fieldsBetaAppReviewSubmissions** | [**[String]**](String.md)| the fields to include for returned resources of type betaAppReviewSubmissions | [optional] 
 **fieldsApps** | [**[String]**](String.md)| the fields to include for returned resources of type apps | [optional] 
 **fieldsBuildBetaDetails** | [**[String]**](String.md)| the fields to include for returned resources of type buildBetaDetails | [optional] 
 **fieldsAppStoreVersions** | [**[String]**](String.md)| the fields to include for returned resources of type appStoreVersions | [optional] 
 **fieldsBuildIcons** | [**[String]**](String.md)| the fields to include for returned resources of type buildIcons | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 
 **limitBetaBuildLocalizations** | **Number**| maximum number of related betaBuildLocalizations returned (when they are included) | [optional] 
 **limitBetaGroups** | **Number**| maximum number of related betaGroups returned (when they are included) | [optional] 
 **limitBuildBundles** | **Number**| maximum number of related buildBundles returned (when they are included) | [optional] 
 **limitIcons** | **Number**| maximum number of related icons returned (when they are included) | [optional] 
 **limitIndividualTesters** | **Number**| maximum number of related individualTesters returned (when they are included) | [optional] 

### Return type

[**BuildResponse**](BuildResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## buildsIconsGetToManyRelated

> BuildIconsWithoutIncludesResponse buildsIconsGetToManyRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.BuildsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsBuildIcons': ["null"], // [String] | the fields to include for returned resources of type buildIcons
  'limit': 56 // Number | maximum resources per page
};
apiInstance.buildsIconsGetToManyRelated(id, opts, (error, data, response) => {
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
 **fieldsBuildIcons** | [**[String]**](String.md)| the fields to include for returned resources of type buildIcons | [optional] 
 **limit** | **Number**| maximum resources per page | [optional] 

### Return type

[**BuildIconsWithoutIncludesResponse**](BuildIconsWithoutIncludesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## buildsIconsGetToManyRelationship

> BuildIconsLinkagesResponse buildsIconsGetToManyRelationship(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.BuildsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'limit': 56 // Number | maximum resources per page
};
apiInstance.buildsIconsGetToManyRelationship(id, opts, (error, data, response) => {
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

[**BuildIconsLinkagesResponse**](BuildIconsLinkagesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## buildsIndividualTestersCreateToManyRelationship

> buildsIndividualTestersCreateToManyRelationship(id, buildIndividualTestersLinkagesRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.BuildsApi();
let id = "id_example"; // String | the id of the requested resource
let buildIndividualTestersLinkagesRequest = new AppStoreConnectApi.BuildIndividualTestersLinkagesRequest(); // BuildIndividualTestersLinkagesRequest | List of related linkages
apiInstance.buildsIndividualTestersCreateToManyRelationship(id, buildIndividualTestersLinkagesRequest, (error, data, response) => {
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
 **buildIndividualTestersLinkagesRequest** | [**BuildIndividualTestersLinkagesRequest**](BuildIndividualTestersLinkagesRequest.md)| List of related linkages | 

### Return type

null (empty response body)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## buildsIndividualTestersDeleteToManyRelationship

> buildsIndividualTestersDeleteToManyRelationship(id, buildIndividualTestersLinkagesRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.BuildsApi();
let id = "id_example"; // String | the id of the requested resource
let buildIndividualTestersLinkagesRequest = new AppStoreConnectApi.BuildIndividualTestersLinkagesRequest(); // BuildIndividualTestersLinkagesRequest | List of related linkages
apiInstance.buildsIndividualTestersDeleteToManyRelationship(id, buildIndividualTestersLinkagesRequest, (error, data, response) => {
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
 **buildIndividualTestersLinkagesRequest** | [**BuildIndividualTestersLinkagesRequest**](BuildIndividualTestersLinkagesRequest.md)| List of related linkages | 

### Return type

null (empty response body)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## buildsIndividualTestersGetToManyRelated

> BetaTestersWithoutIncludesResponse buildsIndividualTestersGetToManyRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.BuildsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsBetaTesters': ["null"], // [String] | the fields to include for returned resources of type betaTesters
  'limit': 56 // Number | maximum resources per page
};
apiInstance.buildsIndividualTestersGetToManyRelated(id, opts, (error, data, response) => {
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
 **fieldsBetaTesters** | [**[String]**](String.md)| the fields to include for returned resources of type betaTesters | [optional] 
 **limit** | **Number**| maximum resources per page | [optional] 

### Return type

[**BetaTestersWithoutIncludesResponse**](BetaTestersWithoutIncludesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## buildsIndividualTestersGetToManyRelationship

> BuildIndividualTestersLinkagesResponse buildsIndividualTestersGetToManyRelationship(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.BuildsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'limit': 56 // Number | maximum resources per page
};
apiInstance.buildsIndividualTestersGetToManyRelationship(id, opts, (error, data, response) => {
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

[**BuildIndividualTestersLinkagesResponse**](BuildIndividualTestersLinkagesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## buildsPerfPowerMetricsGetToManyRelated

> XcodeMetrics buildsPerfPowerMetricsGetToManyRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.BuildsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'filterPlatform': ["null"], // [String] | filter by attribute 'platform'
  'filterMetricType': ["null"], // [String] | filter by attribute 'metricType'
  'filterDeviceType': ["null"] // [String] | filter by attribute 'deviceType'
};
apiInstance.buildsPerfPowerMetricsGetToManyRelated(id, opts, (error, data, response) => {
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
 **filterPlatform** | [**[String]**](String.md)| filter by attribute &#39;platform&#39; | [optional] 
 **filterMetricType** | [**[String]**](String.md)| filter by attribute &#39;metricType&#39; | [optional] 
 **filterDeviceType** | [**[String]**](String.md)| filter by attribute &#39;deviceType&#39; | [optional] 

### Return type

[**XcodeMetrics**](XcodeMetrics.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/vnd.apple.xcode-metrics+json


## buildsPreReleaseVersionGetToOneRelated

> PrereleaseVersionWithoutIncludesResponse buildsPreReleaseVersionGetToOneRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.BuildsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsPreReleaseVersions': ["null"] // [String] | the fields to include for returned resources of type preReleaseVersions
};
apiInstance.buildsPreReleaseVersionGetToOneRelated(id, opts, (error, data, response) => {
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
 **fieldsPreReleaseVersions** | [**[String]**](String.md)| the fields to include for returned resources of type preReleaseVersions | [optional] 

### Return type

[**PrereleaseVersionWithoutIncludesResponse**](PrereleaseVersionWithoutIncludesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## buildsPreReleaseVersionGetToOneRelationship

> BuildPreReleaseVersionLinkageResponse buildsPreReleaseVersionGetToOneRelationship(id)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.BuildsApi();
let id = "id_example"; // String | the id of the requested resource
apiInstance.buildsPreReleaseVersionGetToOneRelationship(id, (error, data, response) => {
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

[**BuildPreReleaseVersionLinkageResponse**](BuildPreReleaseVersionLinkageResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## buildsUpdateInstance

> BuildResponse buildsUpdateInstance(id, buildUpdateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.BuildsApi();
let id = "id_example"; // String | the id of the requested resource
let buildUpdateRequest = new AppStoreConnectApi.BuildUpdateRequest(); // BuildUpdateRequest | Build representation
apiInstance.buildsUpdateInstance(id, buildUpdateRequest, (error, data, response) => {
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
 **buildUpdateRequest** | [**BuildUpdateRequest**](BuildUpdateRequest.md)| Build representation | 

### Return type

[**BuildResponse**](BuildResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

