# AppStoreConnectApi.GameCenterAppVersionsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**gameCenterAppVersionsAppStoreVersionGetToOneRelated**](GameCenterAppVersionsApi.md#gameCenterAppVersionsAppStoreVersionGetToOneRelated) | **GET** /v1/gameCenterAppVersions/{id}/appStoreVersion | 
[**gameCenterAppVersionsAppStoreVersionGetToOneRelationship**](GameCenterAppVersionsApi.md#gameCenterAppVersionsAppStoreVersionGetToOneRelationship) | **GET** /v1/gameCenterAppVersions/{id}/relationships/appStoreVersion | 
[**gameCenterAppVersionsCompatibilityVersionsCreateToManyRelationship**](GameCenterAppVersionsApi.md#gameCenterAppVersionsCompatibilityVersionsCreateToManyRelationship) | **POST** /v1/gameCenterAppVersions/{id}/relationships/compatibilityVersions | 
[**gameCenterAppVersionsCompatibilityVersionsDeleteToManyRelationship**](GameCenterAppVersionsApi.md#gameCenterAppVersionsCompatibilityVersionsDeleteToManyRelationship) | **DELETE** /v1/gameCenterAppVersions/{id}/relationships/compatibilityVersions | 
[**gameCenterAppVersionsCompatibilityVersionsGetToManyRelated**](GameCenterAppVersionsApi.md#gameCenterAppVersionsCompatibilityVersionsGetToManyRelated) | **GET** /v1/gameCenterAppVersions/{id}/compatibilityVersions | 
[**gameCenterAppVersionsCompatibilityVersionsGetToManyRelationship**](GameCenterAppVersionsApi.md#gameCenterAppVersionsCompatibilityVersionsGetToManyRelationship) | **GET** /v1/gameCenterAppVersions/{id}/relationships/compatibilityVersions | 
[**gameCenterAppVersionsCreateInstance**](GameCenterAppVersionsApi.md#gameCenterAppVersionsCreateInstance) | **POST** /v1/gameCenterAppVersions | 
[**gameCenterAppVersionsGetInstance**](GameCenterAppVersionsApi.md#gameCenterAppVersionsGetInstance) | **GET** /v1/gameCenterAppVersions/{id} | 
[**gameCenterAppVersionsUpdateInstance**](GameCenterAppVersionsApi.md#gameCenterAppVersionsUpdateInstance) | **PATCH** /v1/gameCenterAppVersions/{id} | 



## gameCenterAppVersionsAppStoreVersionGetToOneRelated

> AppStoreVersionResponse gameCenterAppVersionsAppStoreVersionGetToOneRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterAppVersionsApi();
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
apiInstance.gameCenterAppVersionsAppStoreVersionGetToOneRelated(id, opts, (error, data, response) => {
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


## gameCenterAppVersionsAppStoreVersionGetToOneRelationship

> GameCenterAppVersionAppStoreVersionLinkageResponse gameCenterAppVersionsAppStoreVersionGetToOneRelationship(id)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterAppVersionsApi();
let id = "id_example"; // String | the id of the requested resource
apiInstance.gameCenterAppVersionsAppStoreVersionGetToOneRelationship(id, (error, data, response) => {
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

[**GameCenterAppVersionAppStoreVersionLinkageResponse**](GameCenterAppVersionAppStoreVersionLinkageResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## gameCenterAppVersionsCompatibilityVersionsCreateToManyRelationship

> gameCenterAppVersionsCompatibilityVersionsCreateToManyRelationship(id, gameCenterAppVersionCompatibilityVersionsLinkagesRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterAppVersionsApi();
let id = "id_example"; // String | the id of the requested resource
let gameCenterAppVersionCompatibilityVersionsLinkagesRequest = new AppStoreConnectApi.GameCenterAppVersionCompatibilityVersionsLinkagesRequest(); // GameCenterAppVersionCompatibilityVersionsLinkagesRequest | List of related linkages
apiInstance.gameCenterAppVersionsCompatibilityVersionsCreateToManyRelationship(id, gameCenterAppVersionCompatibilityVersionsLinkagesRequest, (error, data, response) => {
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
 **gameCenterAppVersionCompatibilityVersionsLinkagesRequest** | [**GameCenterAppVersionCompatibilityVersionsLinkagesRequest**](GameCenterAppVersionCompatibilityVersionsLinkagesRequest.md)| List of related linkages | 

### Return type

null (empty response body)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## gameCenterAppVersionsCompatibilityVersionsDeleteToManyRelationship

> gameCenterAppVersionsCompatibilityVersionsDeleteToManyRelationship(id, gameCenterAppVersionCompatibilityVersionsLinkagesRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterAppVersionsApi();
let id = "id_example"; // String | the id of the requested resource
let gameCenterAppVersionCompatibilityVersionsLinkagesRequest = new AppStoreConnectApi.GameCenterAppVersionCompatibilityVersionsLinkagesRequest(); // GameCenterAppVersionCompatibilityVersionsLinkagesRequest | List of related linkages
apiInstance.gameCenterAppVersionsCompatibilityVersionsDeleteToManyRelationship(id, gameCenterAppVersionCompatibilityVersionsLinkagesRequest, (error, data, response) => {
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
 **gameCenterAppVersionCompatibilityVersionsLinkagesRequest** | [**GameCenterAppVersionCompatibilityVersionsLinkagesRequest**](GameCenterAppVersionCompatibilityVersionsLinkagesRequest.md)| List of related linkages | 

### Return type

null (empty response body)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## gameCenterAppVersionsCompatibilityVersionsGetToManyRelated

> GameCenterAppVersionsResponse gameCenterAppVersionsCompatibilityVersionsGetToManyRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterAppVersionsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'filterEnabled': ["null"], // [String] | filter by attribute 'enabled'
  'fieldsGameCenterAppVersions': ["null"], // [String] | the fields to include for returned resources of type gameCenterAppVersions
  'fieldsAppStoreVersions': ["null"], // [String] | the fields to include for returned resources of type appStoreVersions
  'limit': 56, // Number | maximum resources per page
  'include': ["null"], // [String] | comma-separated list of relationships to include
  'limitCompatibilityVersions': 56 // Number | maximum number of related compatibilityVersions returned (when they are included)
};
apiInstance.gameCenterAppVersionsCompatibilityVersionsGetToManyRelated(id, opts, (error, data, response) => {
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
 **filterEnabled** | [**[String]**](String.md)| filter by attribute &#39;enabled&#39; | [optional] 
 **fieldsGameCenterAppVersions** | [**[String]**](String.md)| the fields to include for returned resources of type gameCenterAppVersions | [optional] 
 **fieldsAppStoreVersions** | [**[String]**](String.md)| the fields to include for returned resources of type appStoreVersions | [optional] 
 **limit** | **Number**| maximum resources per page | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 
 **limitCompatibilityVersions** | **Number**| maximum number of related compatibilityVersions returned (when they are included) | [optional] 

### Return type

[**GameCenterAppVersionsResponse**](GameCenterAppVersionsResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## gameCenterAppVersionsCompatibilityVersionsGetToManyRelationship

> GameCenterAppVersionCompatibilityVersionsLinkagesResponse gameCenterAppVersionsCompatibilityVersionsGetToManyRelationship(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterAppVersionsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'limit': 56 // Number | maximum resources per page
};
apiInstance.gameCenterAppVersionsCompatibilityVersionsGetToManyRelationship(id, opts, (error, data, response) => {
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

[**GameCenterAppVersionCompatibilityVersionsLinkagesResponse**](GameCenterAppVersionCompatibilityVersionsLinkagesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## gameCenterAppVersionsCreateInstance

> GameCenterAppVersionResponse gameCenterAppVersionsCreateInstance(gameCenterAppVersionCreateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterAppVersionsApi();
let gameCenterAppVersionCreateRequest = new AppStoreConnectApi.GameCenterAppVersionCreateRequest(); // GameCenterAppVersionCreateRequest | GameCenterAppVersion representation
apiInstance.gameCenterAppVersionsCreateInstance(gameCenterAppVersionCreateRequest, (error, data, response) => {
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
 **gameCenterAppVersionCreateRequest** | [**GameCenterAppVersionCreateRequest**](GameCenterAppVersionCreateRequest.md)| GameCenterAppVersion representation | 

### Return type

[**GameCenterAppVersionResponse**](GameCenterAppVersionResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## gameCenterAppVersionsGetInstance

> GameCenterAppVersionResponse gameCenterAppVersionsGetInstance(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterAppVersionsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsGameCenterAppVersions': ["null"], // [String] | the fields to include for returned resources of type gameCenterAppVersions
  'fieldsAppStoreVersions': ["null"], // [String] | the fields to include for returned resources of type appStoreVersions
  'include': ["null"], // [String] | comma-separated list of relationships to include
  'limitCompatibilityVersions': 56 // Number | maximum number of related compatibilityVersions returned (when they are included)
};
apiInstance.gameCenterAppVersionsGetInstance(id, opts, (error, data, response) => {
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
 **fieldsGameCenterAppVersions** | [**[String]**](String.md)| the fields to include for returned resources of type gameCenterAppVersions | [optional] 
 **fieldsAppStoreVersions** | [**[String]**](String.md)| the fields to include for returned resources of type appStoreVersions | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 
 **limitCompatibilityVersions** | **Number**| maximum number of related compatibilityVersions returned (when they are included) | [optional] 

### Return type

[**GameCenterAppVersionResponse**](GameCenterAppVersionResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## gameCenterAppVersionsUpdateInstance

> GameCenterAppVersionResponse gameCenterAppVersionsUpdateInstance(id, gameCenterAppVersionUpdateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterAppVersionsApi();
let id = "id_example"; // String | the id of the requested resource
let gameCenterAppVersionUpdateRequest = new AppStoreConnectApi.GameCenterAppVersionUpdateRequest(); // GameCenterAppVersionUpdateRequest | GameCenterAppVersion representation
apiInstance.gameCenterAppVersionsUpdateInstance(id, gameCenterAppVersionUpdateRequest, (error, data, response) => {
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
 **gameCenterAppVersionUpdateRequest** | [**GameCenterAppVersionUpdateRequest**](GameCenterAppVersionUpdateRequest.md)| GameCenterAppVersion representation | 

### Return type

[**GameCenterAppVersionResponse**](GameCenterAppVersionResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

