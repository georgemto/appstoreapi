# AppStoreConnectApi.BuildBetaDetailsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**buildBetaDetailsBuildGetToOneRelated**](BuildBetaDetailsApi.md#buildBetaDetailsBuildGetToOneRelated) | **GET** /v1/buildBetaDetails/{id}/build | 
[**buildBetaDetailsBuildGetToOneRelationship**](BuildBetaDetailsApi.md#buildBetaDetailsBuildGetToOneRelationship) | **GET** /v1/buildBetaDetails/{id}/relationships/build | 
[**buildBetaDetailsGetCollection**](BuildBetaDetailsApi.md#buildBetaDetailsGetCollection) | **GET** /v1/buildBetaDetails | 
[**buildBetaDetailsGetInstance**](BuildBetaDetailsApi.md#buildBetaDetailsGetInstance) | **GET** /v1/buildBetaDetails/{id} | 
[**buildBetaDetailsUpdateInstance**](BuildBetaDetailsApi.md#buildBetaDetailsUpdateInstance) | **PATCH** /v1/buildBetaDetails/{id} | 



## buildBetaDetailsBuildGetToOneRelated

> BuildResponse buildBetaDetailsBuildGetToOneRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.BuildBetaDetailsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
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
  'include': ["null"], // [String] | comma-separated list of relationships to include
  'limitIndividualTesters': 56, // Number | maximum number of related individualTesters returned (when they are included)
  'limitBetaGroups': 56, // Number | maximum number of related betaGroups returned (when they are included)
  'limitBetaBuildLocalizations': 56, // Number | maximum number of related betaBuildLocalizations returned (when they are included)
  'limitIcons': 56, // Number | maximum number of related icons returned (when they are included)
  'limitBuildBundles': 56 // Number | maximum number of related buildBundles returned (when they are included)
};
apiInstance.buildBetaDetailsBuildGetToOneRelated(id, opts, (error, data, response) => {
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
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 
 **limitIndividualTesters** | **Number**| maximum number of related individualTesters returned (when they are included) | [optional] 
 **limitBetaGroups** | **Number**| maximum number of related betaGroups returned (when they are included) | [optional] 
 **limitBetaBuildLocalizations** | **Number**| maximum number of related betaBuildLocalizations returned (when they are included) | [optional] 
 **limitIcons** | **Number**| maximum number of related icons returned (when they are included) | [optional] 
 **limitBuildBundles** | **Number**| maximum number of related buildBundles returned (when they are included) | [optional] 

### Return type

[**BuildResponse**](BuildResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## buildBetaDetailsBuildGetToOneRelationship

> BuildBetaDetailBuildLinkageResponse buildBetaDetailsBuildGetToOneRelationship(id)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.BuildBetaDetailsApi();
let id = "id_example"; // String | the id of the requested resource
apiInstance.buildBetaDetailsBuildGetToOneRelationship(id, (error, data, response) => {
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

[**BuildBetaDetailBuildLinkageResponse**](BuildBetaDetailBuildLinkageResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## buildBetaDetailsGetCollection

> BuildBetaDetailsResponse buildBetaDetailsGetCollection(opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.BuildBetaDetailsApi();
let opts = {
  'filterBuild': ["null"], // [String] | filter by id(s) of related 'build'
  'filterId': ["null"], // [String] | filter by id(s)
  'fieldsBuildBetaDetails': ["null"], // [String] | the fields to include for returned resources of type buildBetaDetails
  'fieldsBuilds': ["null"], // [String] | the fields to include for returned resources of type builds
  'limit': 56, // Number | maximum resources per page
  'include': ["null"] // [String] | comma-separated list of relationships to include
};
apiInstance.buildBetaDetailsGetCollection(opts, (error, data, response) => {
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
 **filterBuild** | [**[String]**](String.md)| filter by id(s) of related &#39;build&#39; | [optional] 
 **filterId** | [**[String]**](String.md)| filter by id(s) | [optional] 
 **fieldsBuildBetaDetails** | [**[String]**](String.md)| the fields to include for returned resources of type buildBetaDetails | [optional] 
 **fieldsBuilds** | [**[String]**](String.md)| the fields to include for returned resources of type builds | [optional] 
 **limit** | **Number**| maximum resources per page | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 

### Return type

[**BuildBetaDetailsResponse**](BuildBetaDetailsResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## buildBetaDetailsGetInstance

> BuildBetaDetailResponse buildBetaDetailsGetInstance(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.BuildBetaDetailsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsBuildBetaDetails': ["null"], // [String] | the fields to include for returned resources of type buildBetaDetails
  'fieldsBuilds': ["null"], // [String] | the fields to include for returned resources of type builds
  'include': ["null"] // [String] | comma-separated list of relationships to include
};
apiInstance.buildBetaDetailsGetInstance(id, opts, (error, data, response) => {
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


## buildBetaDetailsUpdateInstance

> BuildBetaDetailResponse buildBetaDetailsUpdateInstance(id, buildBetaDetailUpdateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.BuildBetaDetailsApi();
let id = "id_example"; // String | the id of the requested resource
let buildBetaDetailUpdateRequest = new AppStoreConnectApi.BuildBetaDetailUpdateRequest(); // BuildBetaDetailUpdateRequest | BuildBetaDetail representation
apiInstance.buildBetaDetailsUpdateInstance(id, buildBetaDetailUpdateRequest, (error, data, response) => {
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
 **buildBetaDetailUpdateRequest** | [**BuildBetaDetailUpdateRequest**](BuildBetaDetailUpdateRequest.md)| BuildBetaDetail representation | 

### Return type

[**BuildBetaDetailResponse**](BuildBetaDetailResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

