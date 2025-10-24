# AppStoreConnectApi.CiBuildRunsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ciBuildRunsActionsGetToManyRelated**](CiBuildRunsApi.md#ciBuildRunsActionsGetToManyRelated) | **GET** /v1/ciBuildRuns/{id}/actions | 
[**ciBuildRunsActionsGetToManyRelationship**](CiBuildRunsApi.md#ciBuildRunsActionsGetToManyRelationship) | **GET** /v1/ciBuildRuns/{id}/relationships/actions | 
[**ciBuildRunsBuildsGetToManyRelated**](CiBuildRunsApi.md#ciBuildRunsBuildsGetToManyRelated) | **GET** /v1/ciBuildRuns/{id}/builds | 
[**ciBuildRunsBuildsGetToManyRelationship**](CiBuildRunsApi.md#ciBuildRunsBuildsGetToManyRelationship) | **GET** /v1/ciBuildRuns/{id}/relationships/builds | 
[**ciBuildRunsCreateInstance**](CiBuildRunsApi.md#ciBuildRunsCreateInstance) | **POST** /v1/ciBuildRuns | 
[**ciBuildRunsGetInstance**](CiBuildRunsApi.md#ciBuildRunsGetInstance) | **GET** /v1/ciBuildRuns/{id} | 



## ciBuildRunsActionsGetToManyRelated

> CiBuildActionsResponse ciBuildRunsActionsGetToManyRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.CiBuildRunsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsCiBuildActions': ["null"], // [String] | the fields to include for returned resources of type ciBuildActions
  'fieldsCiBuildRuns': ["null"], // [String] | the fields to include for returned resources of type ciBuildRuns
  'limit': 56, // Number | maximum resources per page
  'include': ["null"] // [String] | comma-separated list of relationships to include
};
apiInstance.ciBuildRunsActionsGetToManyRelated(id, opts, (error, data, response) => {
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
 **fieldsCiBuildActions** | [**[String]**](String.md)| the fields to include for returned resources of type ciBuildActions | [optional] 
 **fieldsCiBuildRuns** | [**[String]**](String.md)| the fields to include for returned resources of type ciBuildRuns | [optional] 
 **limit** | **Number**| maximum resources per page | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 

### Return type

[**CiBuildActionsResponse**](CiBuildActionsResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## ciBuildRunsActionsGetToManyRelationship

> CiBuildRunActionsLinkagesResponse ciBuildRunsActionsGetToManyRelationship(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.CiBuildRunsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'limit': 56 // Number | maximum resources per page
};
apiInstance.ciBuildRunsActionsGetToManyRelationship(id, opts, (error, data, response) => {
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

[**CiBuildRunActionsLinkagesResponse**](CiBuildRunActionsLinkagesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## ciBuildRunsBuildsGetToManyRelated

> BuildsResponse ciBuildRunsBuildsGetToManyRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.CiBuildRunsApi();
let id = "id_example"; // String | the id of the requested resource
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
  'fieldsBetaGroups': ["null"], // [String] | the fields to include for returned resources of type betaGroups
  'fieldsBetaBuildLocalizations': ["null"], // [String] | the fields to include for returned resources of type betaBuildLocalizations
  'fieldsAppEncryptionDeclarations': ["null"], // [String] | the fields to include for returned resources of type appEncryptionDeclarations
  'fieldsBetaAppReviewSubmissions': ["null"], // [String] | the fields to include for returned resources of type betaAppReviewSubmissions
  'fieldsApps': ["null"], // [String] | the fields to include for returned resources of type apps
  'fieldsBuildBetaDetails': ["null"], // [String] | the fields to include for returned resources of type buildBetaDetails
  'fieldsAppStoreVersions': ["null"], // [String] | the fields to include for returned resources of type appStoreVersions
  'fieldsBuildIcons': ["null"], // [String] | the fields to include for returned resources of type buildIcons
  'fieldsBuildBundles': ["null"], // [String] | the fields to include for returned resources of type buildBundles
  'fieldsBuildUploads': ["null"], // [String] | the fields to include for returned resources of type buildUploads
  'limit': 56, // Number | maximum resources per page
  'include': ["null"], // [String] | comma-separated list of relationships to include
  'limitIndividualTesters': 56, // Number | maximum number of related individualTesters returned (when they are included)
  'limitBetaGroups': 56, // Number | maximum number of related betaGroups returned (when they are included)
  'limitBetaBuildLocalizations': 56, // Number | maximum number of related betaBuildLocalizations returned (when they are included)
  'limitIcons': 56, // Number | maximum number of related icons returned (when they are included)
  'limitBuildBundles': 56 // Number | maximum number of related buildBundles returned (when they are included)
};
apiInstance.ciBuildRunsBuildsGetToManyRelated(id, opts, (error, data, response) => {
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
 **fieldsBetaGroups** | [**[String]**](String.md)| the fields to include for returned resources of type betaGroups | [optional] 
 **fieldsBetaBuildLocalizations** | [**[String]**](String.md)| the fields to include for returned resources of type betaBuildLocalizations | [optional] 
 **fieldsAppEncryptionDeclarations** | [**[String]**](String.md)| the fields to include for returned resources of type appEncryptionDeclarations | [optional] 
 **fieldsBetaAppReviewSubmissions** | [**[String]**](String.md)| the fields to include for returned resources of type betaAppReviewSubmissions | [optional] 
 **fieldsApps** | [**[String]**](String.md)| the fields to include for returned resources of type apps | [optional] 
 **fieldsBuildBetaDetails** | [**[String]**](String.md)| the fields to include for returned resources of type buildBetaDetails | [optional] 
 **fieldsAppStoreVersions** | [**[String]**](String.md)| the fields to include for returned resources of type appStoreVersions | [optional] 
 **fieldsBuildIcons** | [**[String]**](String.md)| the fields to include for returned resources of type buildIcons | [optional] 
 **fieldsBuildBundles** | [**[String]**](String.md)| the fields to include for returned resources of type buildBundles | [optional] 
 **fieldsBuildUploads** | [**[String]**](String.md)| the fields to include for returned resources of type buildUploads | [optional] 
 **limit** | **Number**| maximum resources per page | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 
 **limitIndividualTesters** | **Number**| maximum number of related individualTesters returned (when they are included) | [optional] 
 **limitBetaGroups** | **Number**| maximum number of related betaGroups returned (when they are included) | [optional] 
 **limitBetaBuildLocalizations** | **Number**| maximum number of related betaBuildLocalizations returned (when they are included) | [optional] 
 **limitIcons** | **Number**| maximum number of related icons returned (when they are included) | [optional] 
 **limitBuildBundles** | **Number**| maximum number of related buildBundles returned (when they are included) | [optional] 

### Return type

[**BuildsResponse**](BuildsResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## ciBuildRunsBuildsGetToManyRelationship

> CiBuildRunBuildsLinkagesResponse ciBuildRunsBuildsGetToManyRelationship(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.CiBuildRunsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'limit': 56 // Number | maximum resources per page
};
apiInstance.ciBuildRunsBuildsGetToManyRelationship(id, opts, (error, data, response) => {
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

[**CiBuildRunBuildsLinkagesResponse**](CiBuildRunBuildsLinkagesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## ciBuildRunsCreateInstance

> CiBuildRunResponse ciBuildRunsCreateInstance(ciBuildRunCreateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.CiBuildRunsApi();
let ciBuildRunCreateRequest = new AppStoreConnectApi.CiBuildRunCreateRequest(); // CiBuildRunCreateRequest | CiBuildRun representation
apiInstance.ciBuildRunsCreateInstance(ciBuildRunCreateRequest, (error, data, response) => {
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
 **ciBuildRunCreateRequest** | [**CiBuildRunCreateRequest**](CiBuildRunCreateRequest.md)| CiBuildRun representation | 

### Return type

[**CiBuildRunResponse**](CiBuildRunResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## ciBuildRunsGetInstance

> CiBuildRunResponse ciBuildRunsGetInstance(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.CiBuildRunsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsCiBuildRuns': ["null"], // [String] | the fields to include for returned resources of type ciBuildRuns
  'fieldsBuilds': ["null"], // [String] | the fields to include for returned resources of type builds
  'include': ["null"], // [String] | comma-separated list of relationships to include
  'limitBuilds': 56 // Number | maximum number of related builds returned (when they are included)
};
apiInstance.ciBuildRunsGetInstance(id, opts, (error, data, response) => {
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
 **fieldsCiBuildRuns** | [**[String]**](String.md)| the fields to include for returned resources of type ciBuildRuns | [optional] 
 **fieldsBuilds** | [**[String]**](String.md)| the fields to include for returned resources of type builds | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 
 **limitBuilds** | **Number**| maximum number of related builds returned (when they are included) | [optional] 

### Return type

[**CiBuildRunResponse**](CiBuildRunResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

