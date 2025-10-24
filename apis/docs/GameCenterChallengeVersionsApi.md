# AppStoreConnectApi.GameCenterChallengeVersionsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**gameCenterChallengeVersionsCreateInstance**](GameCenterChallengeVersionsApi.md#gameCenterChallengeVersionsCreateInstance) | **POST** /v1/gameCenterChallengeVersions | 
[**gameCenterChallengeVersionsDefaultImageGetToOneRelated**](GameCenterChallengeVersionsApi.md#gameCenterChallengeVersionsDefaultImageGetToOneRelated) | **GET** /v1/gameCenterChallengeVersions/{id}/defaultImage | 
[**gameCenterChallengeVersionsDefaultImageGetToOneRelationship**](GameCenterChallengeVersionsApi.md#gameCenterChallengeVersionsDefaultImageGetToOneRelationship) | **GET** /v1/gameCenterChallengeVersions/{id}/relationships/defaultImage | 
[**gameCenterChallengeVersionsGetInstance**](GameCenterChallengeVersionsApi.md#gameCenterChallengeVersionsGetInstance) | **GET** /v1/gameCenterChallengeVersions/{id} | 
[**gameCenterChallengeVersionsLocalizationsGetToManyRelated**](GameCenterChallengeVersionsApi.md#gameCenterChallengeVersionsLocalizationsGetToManyRelated) | **GET** /v1/gameCenterChallengeVersions/{id}/localizations | 
[**gameCenterChallengeVersionsLocalizationsGetToManyRelationship**](GameCenterChallengeVersionsApi.md#gameCenterChallengeVersionsLocalizationsGetToManyRelationship) | **GET** /v1/gameCenterChallengeVersions/{id}/relationships/localizations | 



## gameCenterChallengeVersionsCreateInstance

> GameCenterChallengeVersionResponse gameCenterChallengeVersionsCreateInstance(gameCenterChallengeVersionCreateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterChallengeVersionsApi();
let gameCenterChallengeVersionCreateRequest = new AppStoreConnectApi.GameCenterChallengeVersionCreateRequest(); // GameCenterChallengeVersionCreateRequest | GameCenterChallengeVersion representation
apiInstance.gameCenterChallengeVersionsCreateInstance(gameCenterChallengeVersionCreateRequest, (error, data, response) => {
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
 **gameCenterChallengeVersionCreateRequest** | [**GameCenterChallengeVersionCreateRequest**](GameCenterChallengeVersionCreateRequest.md)| GameCenterChallengeVersion representation | 

### Return type

[**GameCenterChallengeVersionResponse**](GameCenterChallengeVersionResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## gameCenterChallengeVersionsDefaultImageGetToOneRelated

> GameCenterChallengeImageResponse gameCenterChallengeVersionsDefaultImageGetToOneRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterChallengeVersionsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsGameCenterChallengeImages': ["null"] // [String] | the fields to include for returned resources of type gameCenterChallengeImages
};
apiInstance.gameCenterChallengeVersionsDefaultImageGetToOneRelated(id, opts, (error, data, response) => {
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
 **fieldsGameCenterChallengeImages** | [**[String]**](String.md)| the fields to include for returned resources of type gameCenterChallengeImages | [optional] 

### Return type

[**GameCenterChallengeImageResponse**](GameCenterChallengeImageResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## gameCenterChallengeVersionsDefaultImageGetToOneRelationship

> GameCenterChallengeVersionDefaultImageLinkageResponse gameCenterChallengeVersionsDefaultImageGetToOneRelationship(id)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterChallengeVersionsApi();
let id = "id_example"; // String | the id of the requested resource
apiInstance.gameCenterChallengeVersionsDefaultImageGetToOneRelationship(id, (error, data, response) => {
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

[**GameCenterChallengeVersionDefaultImageLinkageResponse**](GameCenterChallengeVersionDefaultImageLinkageResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## gameCenterChallengeVersionsGetInstance

> GameCenterChallengeVersionResponse gameCenterChallengeVersionsGetInstance(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterChallengeVersionsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsGameCenterChallengeVersions': ["null"], // [String] | the fields to include for returned resources of type gameCenterChallengeVersions
  'fieldsGameCenterChallengeLocalizations': ["null"], // [String] | the fields to include for returned resources of type gameCenterChallengeLocalizations
  'fieldsGameCenterChallengeImages': ["null"], // [String] | the fields to include for returned resources of type gameCenterChallengeImages
  'include': ["null"], // [String] | comma-separated list of relationships to include
  'limitLocalizations': 56, // Number | maximum number of related localizations returned (when they are included)
  'limitReleases': 56 // Number | maximum number of related releases returned (when they are included)
};
apiInstance.gameCenterChallengeVersionsGetInstance(id, opts, (error, data, response) => {
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
 **fieldsGameCenterChallengeVersions** | [**[String]**](String.md)| the fields to include for returned resources of type gameCenterChallengeVersions | [optional] 
 **fieldsGameCenterChallengeLocalizations** | [**[String]**](String.md)| the fields to include for returned resources of type gameCenterChallengeLocalizations | [optional] 
 **fieldsGameCenterChallengeImages** | [**[String]**](String.md)| the fields to include for returned resources of type gameCenterChallengeImages | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 
 **limitLocalizations** | **Number**| maximum number of related localizations returned (when they are included) | [optional] 
 **limitReleases** | **Number**| maximum number of related releases returned (when they are included) | [optional] 

### Return type

[**GameCenterChallengeVersionResponse**](GameCenterChallengeVersionResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## gameCenterChallengeVersionsLocalizationsGetToManyRelated

> GameCenterChallengeLocalizationsResponse gameCenterChallengeVersionsLocalizationsGetToManyRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterChallengeVersionsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsGameCenterChallengeLocalizations': ["null"], // [String] | the fields to include for returned resources of type gameCenterChallengeLocalizations
  'fieldsGameCenterChallengeVersions': ["null"], // [String] | the fields to include for returned resources of type gameCenterChallengeVersions
  'fieldsGameCenterChallengeImages': ["null"], // [String] | the fields to include for returned resources of type gameCenterChallengeImages
  'limit': 56, // Number | maximum resources per page
  'include': ["null"] // [String] | comma-separated list of relationships to include
};
apiInstance.gameCenterChallengeVersionsLocalizationsGetToManyRelated(id, opts, (error, data, response) => {
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
 **fieldsGameCenterChallengeLocalizations** | [**[String]**](String.md)| the fields to include for returned resources of type gameCenterChallengeLocalizations | [optional] 
 **fieldsGameCenterChallengeVersions** | [**[String]**](String.md)| the fields to include for returned resources of type gameCenterChallengeVersions | [optional] 
 **fieldsGameCenterChallengeImages** | [**[String]**](String.md)| the fields to include for returned resources of type gameCenterChallengeImages | [optional] 
 **limit** | **Number**| maximum resources per page | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 

### Return type

[**GameCenterChallengeLocalizationsResponse**](GameCenterChallengeLocalizationsResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## gameCenterChallengeVersionsLocalizationsGetToManyRelationship

> GameCenterChallengeVersionLocalizationsLinkagesResponse gameCenterChallengeVersionsLocalizationsGetToManyRelationship(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterChallengeVersionsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'limit': 56 // Number | maximum resources per page
};
apiInstance.gameCenterChallengeVersionsLocalizationsGetToManyRelationship(id, opts, (error, data, response) => {
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

[**GameCenterChallengeVersionLocalizationsLinkagesResponse**](GameCenterChallengeVersionLocalizationsLinkagesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

