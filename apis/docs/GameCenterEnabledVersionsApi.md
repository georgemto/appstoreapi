# AppStoreConnectApi.GameCenterEnabledVersionsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**gameCenterEnabledVersionsCompatibleVersionsCreateToManyRelationship**](GameCenterEnabledVersionsApi.md#gameCenterEnabledVersionsCompatibleVersionsCreateToManyRelationship) | **POST** /v1/gameCenterEnabledVersions/{id}/relationships/compatibleVersions | 
[**gameCenterEnabledVersionsCompatibleVersionsDeleteToManyRelationship**](GameCenterEnabledVersionsApi.md#gameCenterEnabledVersionsCompatibleVersionsDeleteToManyRelationship) | **DELETE** /v1/gameCenterEnabledVersions/{id}/relationships/compatibleVersions | 
[**gameCenterEnabledVersionsCompatibleVersionsGetToManyRelated**](GameCenterEnabledVersionsApi.md#gameCenterEnabledVersionsCompatibleVersionsGetToManyRelated) | **GET** /v1/gameCenterEnabledVersions/{id}/compatibleVersions | 
[**gameCenterEnabledVersionsCompatibleVersionsGetToManyRelationship**](GameCenterEnabledVersionsApi.md#gameCenterEnabledVersionsCompatibleVersionsGetToManyRelationship) | **GET** /v1/gameCenterEnabledVersions/{id}/relationships/compatibleVersions | 
[**gameCenterEnabledVersionsCompatibleVersionsReplaceToManyRelationship**](GameCenterEnabledVersionsApi.md#gameCenterEnabledVersionsCompatibleVersionsReplaceToManyRelationship) | **PATCH** /v1/gameCenterEnabledVersions/{id}/relationships/compatibleVersions | 



## gameCenterEnabledVersionsCompatibleVersionsCreateToManyRelationship

> gameCenterEnabledVersionsCompatibleVersionsCreateToManyRelationship(id, gameCenterEnabledVersionCompatibleVersionsLinkagesRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterEnabledVersionsApi();
let id = "id_example"; // String | the id of the requested resource
let gameCenterEnabledVersionCompatibleVersionsLinkagesRequest = new AppStoreConnectApi.GameCenterEnabledVersionCompatibleVersionsLinkagesRequest(); // GameCenterEnabledVersionCompatibleVersionsLinkagesRequest | List of related linkages
apiInstance.gameCenterEnabledVersionsCompatibleVersionsCreateToManyRelationship(id, gameCenterEnabledVersionCompatibleVersionsLinkagesRequest, (error, data, response) => {
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
 **gameCenterEnabledVersionCompatibleVersionsLinkagesRequest** | [**GameCenterEnabledVersionCompatibleVersionsLinkagesRequest**](GameCenterEnabledVersionCompatibleVersionsLinkagesRequest.md)| List of related linkages | 

### Return type

null (empty response body)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## gameCenterEnabledVersionsCompatibleVersionsDeleteToManyRelationship

> gameCenterEnabledVersionsCompatibleVersionsDeleteToManyRelationship(id, gameCenterEnabledVersionCompatibleVersionsLinkagesRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterEnabledVersionsApi();
let id = "id_example"; // String | the id of the requested resource
let gameCenterEnabledVersionCompatibleVersionsLinkagesRequest = new AppStoreConnectApi.GameCenterEnabledVersionCompatibleVersionsLinkagesRequest(); // GameCenterEnabledVersionCompatibleVersionsLinkagesRequest | List of related linkages
apiInstance.gameCenterEnabledVersionsCompatibleVersionsDeleteToManyRelationship(id, gameCenterEnabledVersionCompatibleVersionsLinkagesRequest, (error, data, response) => {
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
 **gameCenterEnabledVersionCompatibleVersionsLinkagesRequest** | [**GameCenterEnabledVersionCompatibleVersionsLinkagesRequest**](GameCenterEnabledVersionCompatibleVersionsLinkagesRequest.md)| List of related linkages | 

### Return type

null (empty response body)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## gameCenterEnabledVersionsCompatibleVersionsGetToManyRelated

> GameCenterEnabledVersionsResponse gameCenterEnabledVersionsCompatibleVersionsGetToManyRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterEnabledVersionsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'filterPlatform': ["null"], // [String] | filter by attribute 'platform'
  'filterVersionString': ["null"], // [String] | filter by attribute 'versionString'
  'filterApp': ["null"], // [String] | filter by id(s) of related 'app'
  'filterId': ["null"], // [String] | filter by id(s)
  'sort': ["null"], // [String] | comma-separated list of sort expressions; resources will be sorted as specified
  'fieldsGameCenterEnabledVersions': ["null"], // [String] | the fields to include for returned resources of type gameCenterEnabledVersions
  'fieldsApps': ["null"], // [String] | the fields to include for returned resources of type apps
  'limit': 56, // Number | maximum resources per page
  'include': ["null"], // [String] | comma-separated list of relationships to include
  'limitCompatibleVersions': 56 // Number | maximum number of related compatibleVersions returned (when they are included)
};
apiInstance.gameCenterEnabledVersionsCompatibleVersionsGetToManyRelated(id, opts, (error, data, response) => {
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
 **filterVersionString** | [**[String]**](String.md)| filter by attribute &#39;versionString&#39; | [optional] 
 **filterApp** | [**[String]**](String.md)| filter by id(s) of related &#39;app&#39; | [optional] 
 **filterId** | [**[String]**](String.md)| filter by id(s) | [optional] 
 **sort** | [**[String]**](String.md)| comma-separated list of sort expressions; resources will be sorted as specified | [optional] 
 **fieldsGameCenterEnabledVersions** | [**[String]**](String.md)| the fields to include for returned resources of type gameCenterEnabledVersions | [optional] 
 **fieldsApps** | [**[String]**](String.md)| the fields to include for returned resources of type apps | [optional] 
 **limit** | **Number**| maximum resources per page | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 
 **limitCompatibleVersions** | **Number**| maximum number of related compatibleVersions returned (when they are included) | [optional] 

### Return type

[**GameCenterEnabledVersionsResponse**](GameCenterEnabledVersionsResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## gameCenterEnabledVersionsCompatibleVersionsGetToManyRelationship

> GameCenterEnabledVersionCompatibleVersionsLinkagesResponse gameCenterEnabledVersionsCompatibleVersionsGetToManyRelationship(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterEnabledVersionsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'limit': 56 // Number | maximum resources per page
};
apiInstance.gameCenterEnabledVersionsCompatibleVersionsGetToManyRelationship(id, opts, (error, data, response) => {
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

[**GameCenterEnabledVersionCompatibleVersionsLinkagesResponse**](GameCenterEnabledVersionCompatibleVersionsLinkagesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## gameCenterEnabledVersionsCompatibleVersionsReplaceToManyRelationship

> gameCenterEnabledVersionsCompatibleVersionsReplaceToManyRelationship(id, gameCenterEnabledVersionCompatibleVersionsLinkagesRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterEnabledVersionsApi();
let id = "id_example"; // String | the id of the requested resource
let gameCenterEnabledVersionCompatibleVersionsLinkagesRequest = new AppStoreConnectApi.GameCenterEnabledVersionCompatibleVersionsLinkagesRequest(); // GameCenterEnabledVersionCompatibleVersionsLinkagesRequest | List of related linkages
apiInstance.gameCenterEnabledVersionsCompatibleVersionsReplaceToManyRelationship(id, gameCenterEnabledVersionCompatibleVersionsLinkagesRequest, (error, data, response) => {
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
 **gameCenterEnabledVersionCompatibleVersionsLinkagesRequest** | [**GameCenterEnabledVersionCompatibleVersionsLinkagesRequest**](GameCenterEnabledVersionCompatibleVersionsLinkagesRequest.md)| List of related linkages | 

### Return type

null (empty response body)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

