# AppStoreConnectApi.CiProductsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ciProductsAdditionalRepositoriesGetToManyRelated**](CiProductsApi.md#ciProductsAdditionalRepositoriesGetToManyRelated) | **GET** /v1/ciProducts/{id}/additionalRepositories | 
[**ciProductsAdditionalRepositoriesGetToManyRelationship**](CiProductsApi.md#ciProductsAdditionalRepositoriesGetToManyRelationship) | **GET** /v1/ciProducts/{id}/relationships/additionalRepositories | 
[**ciProductsAppGetToOneRelated**](CiProductsApi.md#ciProductsAppGetToOneRelated) | **GET** /v1/ciProducts/{id}/app | 
[**ciProductsAppGetToOneRelationship**](CiProductsApi.md#ciProductsAppGetToOneRelationship) | **GET** /v1/ciProducts/{id}/relationships/app | 
[**ciProductsBuildRunsGetToManyRelated**](CiProductsApi.md#ciProductsBuildRunsGetToManyRelated) | **GET** /v1/ciProducts/{id}/buildRuns | 
[**ciProductsBuildRunsGetToManyRelationship**](CiProductsApi.md#ciProductsBuildRunsGetToManyRelationship) | **GET** /v1/ciProducts/{id}/relationships/buildRuns | 
[**ciProductsDeleteInstance**](CiProductsApi.md#ciProductsDeleteInstance) | **DELETE** /v1/ciProducts/{id} | 
[**ciProductsGetCollection**](CiProductsApi.md#ciProductsGetCollection) | **GET** /v1/ciProducts | 
[**ciProductsGetInstance**](CiProductsApi.md#ciProductsGetInstance) | **GET** /v1/ciProducts/{id} | 
[**ciProductsPrimaryRepositoriesGetToManyRelated**](CiProductsApi.md#ciProductsPrimaryRepositoriesGetToManyRelated) | **GET** /v1/ciProducts/{id}/primaryRepositories | 
[**ciProductsPrimaryRepositoriesGetToManyRelationship**](CiProductsApi.md#ciProductsPrimaryRepositoriesGetToManyRelationship) | **GET** /v1/ciProducts/{id}/relationships/primaryRepositories | 
[**ciProductsWorkflowsGetToManyRelated**](CiProductsApi.md#ciProductsWorkflowsGetToManyRelated) | **GET** /v1/ciProducts/{id}/workflows | 
[**ciProductsWorkflowsGetToManyRelationship**](CiProductsApi.md#ciProductsWorkflowsGetToManyRelationship) | **GET** /v1/ciProducts/{id}/relationships/workflows | 



## ciProductsAdditionalRepositoriesGetToManyRelated

> ScmRepositoriesResponse ciProductsAdditionalRepositoriesGetToManyRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.CiProductsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'filterId': ["null"], // [String] | filter by id(s)
  'fieldsScmRepositories': ["null"], // [String] | the fields to include for returned resources of type scmRepositories
  'fieldsScmProviders': ["null"], // [String] | the fields to include for returned resources of type scmProviders
  'fieldsScmGitReferences': ["null"], // [String] | the fields to include for returned resources of type scmGitReferences
  'limit': 56, // Number | maximum resources per page
  'include': ["null"] // [String] | comma-separated list of relationships to include
};
apiInstance.ciProductsAdditionalRepositoriesGetToManyRelated(id, opts, (error, data, response) => {
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
 **filterId** | [**[String]**](String.md)| filter by id(s) | [optional] 
 **fieldsScmRepositories** | [**[String]**](String.md)| the fields to include for returned resources of type scmRepositories | [optional] 
 **fieldsScmProviders** | [**[String]**](String.md)| the fields to include for returned resources of type scmProviders | [optional] 
 **fieldsScmGitReferences** | [**[String]**](String.md)| the fields to include for returned resources of type scmGitReferences | [optional] 
 **limit** | **Number**| maximum resources per page | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 

### Return type

[**ScmRepositoriesResponse**](ScmRepositoriesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## ciProductsAdditionalRepositoriesGetToManyRelationship

> CiProductAdditionalRepositoriesLinkagesResponse ciProductsAdditionalRepositoriesGetToManyRelationship(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.CiProductsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'limit': 56 // Number | maximum resources per page
};
apiInstance.ciProductsAdditionalRepositoriesGetToManyRelationship(id, opts, (error, data, response) => {
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

[**CiProductAdditionalRepositoriesLinkagesResponse**](CiProductAdditionalRepositoriesLinkagesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## ciProductsAppGetToOneRelated

> AppResponse ciProductsAppGetToOneRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.CiProductsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsApps': ["null"], // [String] | the fields to include for returned resources of type apps
  'fieldsAppEncryptionDeclarations': ["null"], // [String] | the fields to include for returned resources of type appEncryptionDeclarations
  'fieldsCiProducts': ["null"], // [String] | the fields to include for returned resources of type ciProducts
  'fieldsBetaGroups': ["null"], // [String] | the fields to include for returned resources of type betaGroups
  'fieldsAppStoreVersions': ["null"], // [String] | the fields to include for returned resources of type appStoreVersions
  'fieldsPreReleaseVersions': ["null"], // [String] | the fields to include for returned resources of type preReleaseVersions
  'fieldsBetaAppLocalizations': ["null"], // [String] | the fields to include for returned resources of type betaAppLocalizations
  'fieldsBuilds': ["null"], // [String] | the fields to include for returned resources of type builds
  'fieldsBetaLicenseAgreements': ["null"], // [String] | the fields to include for returned resources of type betaLicenseAgreements
  'fieldsBetaAppReviewDetails': ["null"], // [String] | the fields to include for returned resources of type betaAppReviewDetails
  'fieldsAppInfos': ["null"], // [String] | the fields to include for returned resources of type appInfos
  'fieldsAppClips': ["null"], // [String] | the fields to include for returned resources of type appClips
  'fieldsEndUserLicenseAgreements': ["null"], // [String] | the fields to include for returned resources of type endUserLicenseAgreements
  'fieldsInAppPurchases': ["null"], // [String] | the fields to include for returned resources of type inAppPurchases
  'fieldsSubscriptionGroups': ["null"], // [String] | the fields to include for returned resources of type subscriptionGroups
  'fieldsGameCenterEnabledVersions': ["null"], // [String] | the fields to include for returned resources of type gameCenterEnabledVersions
  'fieldsAppCustomProductPages': ["null"], // [String] | the fields to include for returned resources of type appCustomProductPages
  'fieldsPromotedPurchases': ["null"], // [String] | the fields to include for returned resources of type promotedPurchases
  'fieldsAppEvents': ["null"], // [String] | the fields to include for returned resources of type appEvents
  'fieldsReviewSubmissions': ["null"], // [String] | the fields to include for returned resources of type reviewSubmissions
  'fieldsSubscriptionGracePeriods': ["null"], // [String] | the fields to include for returned resources of type subscriptionGracePeriods
  'fieldsGameCenterDetails': ["null"], // [String] | the fields to include for returned resources of type gameCenterDetails
  'fieldsAppStoreVersionExperiments': ["null"], // [String] | the fields to include for returned resources of type appStoreVersionExperiments
  'include': ["null"], // [String] | comma-separated list of relationships to include
  'limitAppEncryptionDeclarations': 56, // Number | maximum number of related appEncryptionDeclarations returned (when they are included)
  'limitBetaGroups': 56, // Number | maximum number of related betaGroups returned (when they are included)
  'limitAppStoreVersions': 56, // Number | maximum number of related appStoreVersions returned (when they are included)
  'limitPreReleaseVersions': 56, // Number | maximum number of related preReleaseVersions returned (when they are included)
  'limitBetaAppLocalizations': 56, // Number | maximum number of related betaAppLocalizations returned (when they are included)
  'limitBuilds': 56, // Number | maximum number of related builds returned (when they are included)
  'limitAppInfos': 56, // Number | maximum number of related appInfos returned (when they are included)
  'limitAppClips': 56, // Number | maximum number of related appClips returned (when they are included)
  'limitInAppPurchases': 56, // Number | maximum number of related inAppPurchases returned (when they are included)
  'limitSubscriptionGroups': 56, // Number | maximum number of related subscriptionGroups returned (when they are included)
  'limitGameCenterEnabledVersions': 56, // Number | maximum number of related gameCenterEnabledVersions returned (when they are included)
  'limitAppCustomProductPages': 56, // Number | maximum number of related appCustomProductPages returned (when they are included)
  'limitInAppPurchasesV2': 56, // Number | maximum number of related inAppPurchasesV2 returned (when they are included)
  'limitPromotedPurchases': 56, // Number | maximum number of related promotedPurchases returned (when they are included)
  'limitAppEvents': 56, // Number | maximum number of related appEvents returned (when they are included)
  'limitReviewSubmissions': 56, // Number | maximum number of related reviewSubmissions returned (when they are included)
  'limitAppStoreVersionExperimentsV2': 56 // Number | maximum number of related appStoreVersionExperimentsV2 returned (when they are included)
};
apiInstance.ciProductsAppGetToOneRelated(id, opts, (error, data, response) => {
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
 **fieldsAppEncryptionDeclarations** | [**[String]**](String.md)| the fields to include for returned resources of type appEncryptionDeclarations | [optional] 
 **fieldsCiProducts** | [**[String]**](String.md)| the fields to include for returned resources of type ciProducts | [optional] 
 **fieldsBetaGroups** | [**[String]**](String.md)| the fields to include for returned resources of type betaGroups | [optional] 
 **fieldsAppStoreVersions** | [**[String]**](String.md)| the fields to include for returned resources of type appStoreVersions | [optional] 
 **fieldsPreReleaseVersions** | [**[String]**](String.md)| the fields to include for returned resources of type preReleaseVersions | [optional] 
 **fieldsBetaAppLocalizations** | [**[String]**](String.md)| the fields to include for returned resources of type betaAppLocalizations | [optional] 
 **fieldsBuilds** | [**[String]**](String.md)| the fields to include for returned resources of type builds | [optional] 
 **fieldsBetaLicenseAgreements** | [**[String]**](String.md)| the fields to include for returned resources of type betaLicenseAgreements | [optional] 
 **fieldsBetaAppReviewDetails** | [**[String]**](String.md)| the fields to include for returned resources of type betaAppReviewDetails | [optional] 
 **fieldsAppInfos** | [**[String]**](String.md)| the fields to include for returned resources of type appInfos | [optional] 
 **fieldsAppClips** | [**[String]**](String.md)| the fields to include for returned resources of type appClips | [optional] 
 **fieldsEndUserLicenseAgreements** | [**[String]**](String.md)| the fields to include for returned resources of type endUserLicenseAgreements | [optional] 
 **fieldsInAppPurchases** | [**[String]**](String.md)| the fields to include for returned resources of type inAppPurchases | [optional] 
 **fieldsSubscriptionGroups** | [**[String]**](String.md)| the fields to include for returned resources of type subscriptionGroups | [optional] 
 **fieldsGameCenterEnabledVersions** | [**[String]**](String.md)| the fields to include for returned resources of type gameCenterEnabledVersions | [optional] 
 **fieldsAppCustomProductPages** | [**[String]**](String.md)| the fields to include for returned resources of type appCustomProductPages | [optional] 
 **fieldsPromotedPurchases** | [**[String]**](String.md)| the fields to include for returned resources of type promotedPurchases | [optional] 
 **fieldsAppEvents** | [**[String]**](String.md)| the fields to include for returned resources of type appEvents | [optional] 
 **fieldsReviewSubmissions** | [**[String]**](String.md)| the fields to include for returned resources of type reviewSubmissions | [optional] 
 **fieldsSubscriptionGracePeriods** | [**[String]**](String.md)| the fields to include for returned resources of type subscriptionGracePeriods | [optional] 
 **fieldsGameCenterDetails** | [**[String]**](String.md)| the fields to include for returned resources of type gameCenterDetails | [optional] 
 **fieldsAppStoreVersionExperiments** | [**[String]**](String.md)| the fields to include for returned resources of type appStoreVersionExperiments | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 
 **limitAppEncryptionDeclarations** | **Number**| maximum number of related appEncryptionDeclarations returned (when they are included) | [optional] 
 **limitBetaGroups** | **Number**| maximum number of related betaGroups returned (when they are included) | [optional] 
 **limitAppStoreVersions** | **Number**| maximum number of related appStoreVersions returned (when they are included) | [optional] 
 **limitPreReleaseVersions** | **Number**| maximum number of related preReleaseVersions returned (when they are included) | [optional] 
 **limitBetaAppLocalizations** | **Number**| maximum number of related betaAppLocalizations returned (when they are included) | [optional] 
 **limitBuilds** | **Number**| maximum number of related builds returned (when they are included) | [optional] 
 **limitAppInfos** | **Number**| maximum number of related appInfos returned (when they are included) | [optional] 
 **limitAppClips** | **Number**| maximum number of related appClips returned (when they are included) | [optional] 
 **limitInAppPurchases** | **Number**| maximum number of related inAppPurchases returned (when they are included) | [optional] 
 **limitSubscriptionGroups** | **Number**| maximum number of related subscriptionGroups returned (when they are included) | [optional] 
 **limitGameCenterEnabledVersions** | **Number**| maximum number of related gameCenterEnabledVersions returned (when they are included) | [optional] 
 **limitAppCustomProductPages** | **Number**| maximum number of related appCustomProductPages returned (when they are included) | [optional] 
 **limitInAppPurchasesV2** | **Number**| maximum number of related inAppPurchasesV2 returned (when they are included) | [optional] 
 **limitPromotedPurchases** | **Number**| maximum number of related promotedPurchases returned (when they are included) | [optional] 
 **limitAppEvents** | **Number**| maximum number of related appEvents returned (when they are included) | [optional] 
 **limitReviewSubmissions** | **Number**| maximum number of related reviewSubmissions returned (when they are included) | [optional] 
 **limitAppStoreVersionExperimentsV2** | **Number**| maximum number of related appStoreVersionExperimentsV2 returned (when they are included) | [optional] 

### Return type

[**AppResponse**](AppResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## ciProductsAppGetToOneRelationship

> CiProductAppLinkageResponse ciProductsAppGetToOneRelationship(id)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.CiProductsApi();
let id = "id_example"; // String | the id of the requested resource
apiInstance.ciProductsAppGetToOneRelationship(id, (error, data, response) => {
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

[**CiProductAppLinkageResponse**](CiProductAppLinkageResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## ciProductsBuildRunsGetToManyRelated

> CiBuildRunsResponse ciProductsBuildRunsGetToManyRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.CiProductsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'filterBuilds': ["null"], // [String] | filter by id(s) of related 'builds'
  'sort': ["null"], // [String] | comma-separated list of sort expressions; resources will be sorted as specified
  'fieldsCiBuildRuns': ["null"], // [String] | the fields to include for returned resources of type ciBuildRuns
  'fieldsBuilds': ["null"], // [String] | the fields to include for returned resources of type builds
  'fieldsCiWorkflows': ["null"], // [String] | the fields to include for returned resources of type ciWorkflows
  'fieldsCiProducts': ["null"], // [String] | the fields to include for returned resources of type ciProducts
  'fieldsScmGitReferences': ["null"], // [String] | the fields to include for returned resources of type scmGitReferences
  'fieldsScmPullRequests': ["null"], // [String] | the fields to include for returned resources of type scmPullRequests
  'limit': 56, // Number | maximum resources per page
  'include': ["null"], // [String] | comma-separated list of relationships to include
  'limitBuilds': 56 // Number | maximum number of related builds returned (when they are included)
};
apiInstance.ciProductsBuildRunsGetToManyRelated(id, opts, (error, data, response) => {
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
 **filterBuilds** | [**[String]**](String.md)| filter by id(s) of related &#39;builds&#39; | [optional] 
 **sort** | [**[String]**](String.md)| comma-separated list of sort expressions; resources will be sorted as specified | [optional] 
 **fieldsCiBuildRuns** | [**[String]**](String.md)| the fields to include for returned resources of type ciBuildRuns | [optional] 
 **fieldsBuilds** | [**[String]**](String.md)| the fields to include for returned resources of type builds | [optional] 
 **fieldsCiWorkflows** | [**[String]**](String.md)| the fields to include for returned resources of type ciWorkflows | [optional] 
 **fieldsCiProducts** | [**[String]**](String.md)| the fields to include for returned resources of type ciProducts | [optional] 
 **fieldsScmGitReferences** | [**[String]**](String.md)| the fields to include for returned resources of type scmGitReferences | [optional] 
 **fieldsScmPullRequests** | [**[String]**](String.md)| the fields to include for returned resources of type scmPullRequests | [optional] 
 **limit** | **Number**| maximum resources per page | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 
 **limitBuilds** | **Number**| maximum number of related builds returned (when they are included) | [optional] 

### Return type

[**CiBuildRunsResponse**](CiBuildRunsResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## ciProductsBuildRunsGetToManyRelationship

> CiProductBuildRunsLinkagesResponse ciProductsBuildRunsGetToManyRelationship(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.CiProductsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'limit': 56 // Number | maximum resources per page
};
apiInstance.ciProductsBuildRunsGetToManyRelationship(id, opts, (error, data, response) => {
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

[**CiProductBuildRunsLinkagesResponse**](CiProductBuildRunsLinkagesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## ciProductsDeleteInstance

> ciProductsDeleteInstance(id)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.CiProductsApi();
let id = "id_example"; // String | the id of the requested resource
apiInstance.ciProductsDeleteInstance(id, (error, data, response) => {
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


## ciProductsGetCollection

> CiProductsResponse ciProductsGetCollection(opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.CiProductsApi();
let opts = {
  'filterProductType': ["null"], // [String] | filter by attribute 'productType'
  'filterApp': ["null"], // [String] | filter by id(s) of related 'app'
  'fieldsCiProducts': ["null"], // [String] | the fields to include for returned resources of type ciProducts
  'fieldsApps': ["null"], // [String] | the fields to include for returned resources of type apps
  'fieldsScmRepositories': ["null"], // [String] | the fields to include for returned resources of type scmRepositories
  'limit': 56, // Number | maximum resources per page
  'include': ["null"], // [String] | comma-separated list of relationships to include
  'limitPrimaryRepositories': 56 // Number | maximum number of related primaryRepositories returned (when they are included)
};
apiInstance.ciProductsGetCollection(opts, (error, data, response) => {
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
 **filterProductType** | [**[String]**](String.md)| filter by attribute &#39;productType&#39; | [optional] 
 **filterApp** | [**[String]**](String.md)| filter by id(s) of related &#39;app&#39; | [optional] 
 **fieldsCiProducts** | [**[String]**](String.md)| the fields to include for returned resources of type ciProducts | [optional] 
 **fieldsApps** | [**[String]**](String.md)| the fields to include for returned resources of type apps | [optional] 
 **fieldsScmRepositories** | [**[String]**](String.md)| the fields to include for returned resources of type scmRepositories | [optional] 
 **limit** | **Number**| maximum resources per page | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 
 **limitPrimaryRepositories** | **Number**| maximum number of related primaryRepositories returned (when they are included) | [optional] 

### Return type

[**CiProductsResponse**](CiProductsResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## ciProductsGetInstance

> CiProductResponse ciProductsGetInstance(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.CiProductsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsCiProducts': ["null"], // [String] | the fields to include for returned resources of type ciProducts
  'fieldsApps': ["null"], // [String] | the fields to include for returned resources of type apps
  'fieldsScmRepositories': ["null"], // [String] | the fields to include for returned resources of type scmRepositories
  'include': ["null"], // [String] | comma-separated list of relationships to include
  'limitPrimaryRepositories': 56 // Number | maximum number of related primaryRepositories returned (when they are included)
};
apiInstance.ciProductsGetInstance(id, opts, (error, data, response) => {
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
 **fieldsCiProducts** | [**[String]**](String.md)| the fields to include for returned resources of type ciProducts | [optional] 
 **fieldsApps** | [**[String]**](String.md)| the fields to include for returned resources of type apps | [optional] 
 **fieldsScmRepositories** | [**[String]**](String.md)| the fields to include for returned resources of type scmRepositories | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 
 **limitPrimaryRepositories** | **Number**| maximum number of related primaryRepositories returned (when they are included) | [optional] 

### Return type

[**CiProductResponse**](CiProductResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## ciProductsPrimaryRepositoriesGetToManyRelated

> ScmRepositoriesResponse ciProductsPrimaryRepositoriesGetToManyRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.CiProductsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'filterId': ["null"], // [String] | filter by id(s)
  'fieldsScmRepositories': ["null"], // [String] | the fields to include for returned resources of type scmRepositories
  'fieldsScmProviders': ["null"], // [String] | the fields to include for returned resources of type scmProviders
  'fieldsScmGitReferences': ["null"], // [String] | the fields to include for returned resources of type scmGitReferences
  'limit': 56, // Number | maximum resources per page
  'include': ["null"] // [String] | comma-separated list of relationships to include
};
apiInstance.ciProductsPrimaryRepositoriesGetToManyRelated(id, opts, (error, data, response) => {
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
 **filterId** | [**[String]**](String.md)| filter by id(s) | [optional] 
 **fieldsScmRepositories** | [**[String]**](String.md)| the fields to include for returned resources of type scmRepositories | [optional] 
 **fieldsScmProviders** | [**[String]**](String.md)| the fields to include for returned resources of type scmProviders | [optional] 
 **fieldsScmGitReferences** | [**[String]**](String.md)| the fields to include for returned resources of type scmGitReferences | [optional] 
 **limit** | **Number**| maximum resources per page | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 

### Return type

[**ScmRepositoriesResponse**](ScmRepositoriesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## ciProductsPrimaryRepositoriesGetToManyRelationship

> CiProductPrimaryRepositoriesLinkagesResponse ciProductsPrimaryRepositoriesGetToManyRelationship(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.CiProductsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'limit': 56 // Number | maximum resources per page
};
apiInstance.ciProductsPrimaryRepositoriesGetToManyRelationship(id, opts, (error, data, response) => {
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

[**CiProductPrimaryRepositoriesLinkagesResponse**](CiProductPrimaryRepositoriesLinkagesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## ciProductsWorkflowsGetToManyRelated

> CiWorkflowsResponse ciProductsWorkflowsGetToManyRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.CiProductsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsCiWorkflows': ["null"], // [String] | the fields to include for returned resources of type ciWorkflows
  'fieldsCiProducts': ["null"], // [String] | the fields to include for returned resources of type ciProducts
  'fieldsScmRepositories': ["null"], // [String] | the fields to include for returned resources of type scmRepositories
  'fieldsCiXcodeVersions': ["null"], // [String] | the fields to include for returned resources of type ciXcodeVersions
  'fieldsCiMacOsVersions': ["null"], // [String] | the fields to include for returned resources of type ciMacOsVersions
  'limit': 56, // Number | maximum resources per page
  'include': ["null"] // [String] | comma-separated list of relationships to include
};
apiInstance.ciProductsWorkflowsGetToManyRelated(id, opts, (error, data, response) => {
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
 **fieldsCiWorkflows** | [**[String]**](String.md)| the fields to include for returned resources of type ciWorkflows | [optional] 
 **fieldsCiProducts** | [**[String]**](String.md)| the fields to include for returned resources of type ciProducts | [optional] 
 **fieldsScmRepositories** | [**[String]**](String.md)| the fields to include for returned resources of type scmRepositories | [optional] 
 **fieldsCiXcodeVersions** | [**[String]**](String.md)| the fields to include for returned resources of type ciXcodeVersions | [optional] 
 **fieldsCiMacOsVersions** | [**[String]**](String.md)| the fields to include for returned resources of type ciMacOsVersions | [optional] 
 **limit** | **Number**| maximum resources per page | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 

### Return type

[**CiWorkflowsResponse**](CiWorkflowsResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## ciProductsWorkflowsGetToManyRelationship

> CiProductWorkflowsLinkagesResponse ciProductsWorkflowsGetToManyRelationship(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.CiProductsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'limit': 56 // Number | maximum resources per page
};
apiInstance.ciProductsWorkflowsGetToManyRelationship(id, opts, (error, data, response) => {
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

[**CiProductWorkflowsLinkagesResponse**](CiProductWorkflowsLinkagesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

