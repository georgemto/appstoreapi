# AppStoreConnectApi.GameCenterLeaderboardSetsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**gameCenterLeaderboardSetsCreateInstance**](GameCenterLeaderboardSetsApi.md#gameCenterLeaderboardSetsCreateInstance) | **POST** /v1/gameCenterLeaderboardSets | 
[**gameCenterLeaderboardSetsDeleteInstance**](GameCenterLeaderboardSetsApi.md#gameCenterLeaderboardSetsDeleteInstance) | **DELETE** /v1/gameCenterLeaderboardSets/{id} | 
[**gameCenterLeaderboardSetsGameCenterLeaderboardsCreateToManyRelationship**](GameCenterLeaderboardSetsApi.md#gameCenterLeaderboardSetsGameCenterLeaderboardsCreateToManyRelationship) | **POST** /v1/gameCenterLeaderboardSets/{id}/relationships/gameCenterLeaderboards | 
[**gameCenterLeaderboardSetsGameCenterLeaderboardsDeleteToManyRelationship**](GameCenterLeaderboardSetsApi.md#gameCenterLeaderboardSetsGameCenterLeaderboardsDeleteToManyRelationship) | **DELETE** /v1/gameCenterLeaderboardSets/{id}/relationships/gameCenterLeaderboards | 
[**gameCenterLeaderboardSetsGameCenterLeaderboardsGetToManyRelated**](GameCenterLeaderboardSetsApi.md#gameCenterLeaderboardSetsGameCenterLeaderboardsGetToManyRelated) | **GET** /v1/gameCenterLeaderboardSets/{id}/gameCenterLeaderboards | 
[**gameCenterLeaderboardSetsGameCenterLeaderboardsGetToManyRelationship**](GameCenterLeaderboardSetsApi.md#gameCenterLeaderboardSetsGameCenterLeaderboardsGetToManyRelationship) | **GET** /v1/gameCenterLeaderboardSets/{id}/relationships/gameCenterLeaderboards | 
[**gameCenterLeaderboardSetsGameCenterLeaderboardsReplaceToManyRelationship**](GameCenterLeaderboardSetsApi.md#gameCenterLeaderboardSetsGameCenterLeaderboardsReplaceToManyRelationship) | **PATCH** /v1/gameCenterLeaderboardSets/{id}/relationships/gameCenterLeaderboards | 
[**gameCenterLeaderboardSetsGetInstance**](GameCenterLeaderboardSetsApi.md#gameCenterLeaderboardSetsGetInstance) | **GET** /v1/gameCenterLeaderboardSets/{id} | 
[**gameCenterLeaderboardSetsGroupLeaderboardSetGetToOneRelated**](GameCenterLeaderboardSetsApi.md#gameCenterLeaderboardSetsGroupLeaderboardSetGetToOneRelated) | **GET** /v1/gameCenterLeaderboardSets/{id}/groupLeaderboardSet | 
[**gameCenterLeaderboardSetsGroupLeaderboardSetGetToOneRelationship**](GameCenterLeaderboardSetsApi.md#gameCenterLeaderboardSetsGroupLeaderboardSetGetToOneRelationship) | **GET** /v1/gameCenterLeaderboardSets/{id}/relationships/groupLeaderboardSet | 
[**gameCenterLeaderboardSetsGroupLeaderboardSetUpdateToOneRelationship**](GameCenterLeaderboardSetsApi.md#gameCenterLeaderboardSetsGroupLeaderboardSetUpdateToOneRelationship) | **PATCH** /v1/gameCenterLeaderboardSets/{id}/relationships/groupLeaderboardSet | 
[**gameCenterLeaderboardSetsLocalizationsGetToManyRelated**](GameCenterLeaderboardSetsApi.md#gameCenterLeaderboardSetsLocalizationsGetToManyRelated) | **GET** /v1/gameCenterLeaderboardSets/{id}/localizations | 
[**gameCenterLeaderboardSetsLocalizationsGetToManyRelationship**](GameCenterLeaderboardSetsApi.md#gameCenterLeaderboardSetsLocalizationsGetToManyRelationship) | **GET** /v1/gameCenterLeaderboardSets/{id}/relationships/localizations | 
[**gameCenterLeaderboardSetsReleasesGetToManyRelated**](GameCenterLeaderboardSetsApi.md#gameCenterLeaderboardSetsReleasesGetToManyRelated) | **GET** /v1/gameCenterLeaderboardSets/{id}/releases | 
[**gameCenterLeaderboardSetsReleasesGetToManyRelationship**](GameCenterLeaderboardSetsApi.md#gameCenterLeaderboardSetsReleasesGetToManyRelationship) | **GET** /v1/gameCenterLeaderboardSets/{id}/relationships/releases | 
[**gameCenterLeaderboardSetsUpdateInstance**](GameCenterLeaderboardSetsApi.md#gameCenterLeaderboardSetsUpdateInstance) | **PATCH** /v1/gameCenterLeaderboardSets/{id} | 



## gameCenterLeaderboardSetsCreateInstance

> GameCenterLeaderboardSetResponse gameCenterLeaderboardSetsCreateInstance(gameCenterLeaderboardSetCreateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterLeaderboardSetsApi();
let gameCenterLeaderboardSetCreateRequest = new AppStoreConnectApi.GameCenterLeaderboardSetCreateRequest(); // GameCenterLeaderboardSetCreateRequest | GameCenterLeaderboardSet representation
apiInstance.gameCenterLeaderboardSetsCreateInstance(gameCenterLeaderboardSetCreateRequest, (error, data, response) => {
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
 **gameCenterLeaderboardSetCreateRequest** | [**GameCenterLeaderboardSetCreateRequest**](GameCenterLeaderboardSetCreateRequest.md)| GameCenterLeaderboardSet representation | 

### Return type

[**GameCenterLeaderboardSetResponse**](GameCenterLeaderboardSetResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## gameCenterLeaderboardSetsDeleteInstance

> gameCenterLeaderboardSetsDeleteInstance(id)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterLeaderboardSetsApi();
let id = "id_example"; // String | the id of the requested resource
apiInstance.gameCenterLeaderboardSetsDeleteInstance(id, (error, data, response) => {
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


## gameCenterLeaderboardSetsGameCenterLeaderboardsCreateToManyRelationship

> gameCenterLeaderboardSetsGameCenterLeaderboardsCreateToManyRelationship(id, gameCenterLeaderboardSetGameCenterLeaderboardsLinkagesRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterLeaderboardSetsApi();
let id = "id_example"; // String | the id of the requested resource
let gameCenterLeaderboardSetGameCenterLeaderboardsLinkagesRequest = new AppStoreConnectApi.GameCenterLeaderboardSetGameCenterLeaderboardsLinkagesRequest(); // GameCenterLeaderboardSetGameCenterLeaderboardsLinkagesRequest | List of related linkages
apiInstance.gameCenterLeaderboardSetsGameCenterLeaderboardsCreateToManyRelationship(id, gameCenterLeaderboardSetGameCenterLeaderboardsLinkagesRequest, (error, data, response) => {
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
 **gameCenterLeaderboardSetGameCenterLeaderboardsLinkagesRequest** | [**GameCenterLeaderboardSetGameCenterLeaderboardsLinkagesRequest**](GameCenterLeaderboardSetGameCenterLeaderboardsLinkagesRequest.md)| List of related linkages | 

### Return type

null (empty response body)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## gameCenterLeaderboardSetsGameCenterLeaderboardsDeleteToManyRelationship

> gameCenterLeaderboardSetsGameCenterLeaderboardsDeleteToManyRelationship(id, gameCenterLeaderboardSetGameCenterLeaderboardsLinkagesRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterLeaderboardSetsApi();
let id = "id_example"; // String | the id of the requested resource
let gameCenterLeaderboardSetGameCenterLeaderboardsLinkagesRequest = new AppStoreConnectApi.GameCenterLeaderboardSetGameCenterLeaderboardsLinkagesRequest(); // GameCenterLeaderboardSetGameCenterLeaderboardsLinkagesRequest | List of related linkages
apiInstance.gameCenterLeaderboardSetsGameCenterLeaderboardsDeleteToManyRelationship(id, gameCenterLeaderboardSetGameCenterLeaderboardsLinkagesRequest, (error, data, response) => {
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
 **gameCenterLeaderboardSetGameCenterLeaderboardsLinkagesRequest** | [**GameCenterLeaderboardSetGameCenterLeaderboardsLinkagesRequest**](GameCenterLeaderboardSetGameCenterLeaderboardsLinkagesRequest.md)| List of related linkages | 

### Return type

null (empty response body)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## gameCenterLeaderboardSetsGameCenterLeaderboardsGetToManyRelated

> GameCenterLeaderboardsResponse gameCenterLeaderboardSetsGameCenterLeaderboardsGetToManyRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterLeaderboardSetsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'filterReferenceName': ["null"], // [String] | filter by attribute 'referenceName'
  'filterArchived': ["null"], // [String] | filter by attribute 'archived'
  'filterId': ["null"], // [String] | filter by id(s)
  'fieldsGameCenterLeaderboards': ["null"], // [String] | the fields to include for returned resources of type gameCenterLeaderboards
  'fieldsGameCenterDetails': ["null"], // [String] | the fields to include for returned resources of type gameCenterDetails
  'fieldsGameCenterGroups': ["null"], // [String] | the fields to include for returned resources of type gameCenterGroups
  'fieldsGameCenterLeaderboardSets': ["null"], // [String] | the fields to include for returned resources of type gameCenterLeaderboardSets
  'fieldsGameCenterLeaderboardLocalizations': ["null"], // [String] | the fields to include for returned resources of type gameCenterLeaderboardLocalizations
  'fieldsGameCenterLeaderboardReleases': ["null"], // [String] | the fields to include for returned resources of type gameCenterLeaderboardReleases
  'fieldsGameCenterActivities': ["null"], // [String] | the fields to include for returned resources of type gameCenterActivities
  'fieldsGameCenterChallenges': ["null"], // [String] | the fields to include for returned resources of type gameCenterChallenges
  'limit': 56, // Number | maximum resources per page
  'include': ["null"], // [String] | comma-separated list of relationships to include
  'limitGameCenterLeaderboardSets': 56, // Number | maximum number of related gameCenterLeaderboardSets returned (when they are included)
  'limitLocalizations': 56, // Number | maximum number of related localizations returned (when they are included)
  'limitReleases': 56 // Number | maximum number of related releases returned (when they are included)
};
apiInstance.gameCenterLeaderboardSetsGameCenterLeaderboardsGetToManyRelated(id, opts, (error, data, response) => {
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
 **filterReferenceName** | [**[String]**](String.md)| filter by attribute &#39;referenceName&#39; | [optional] 
 **filterArchived** | [**[String]**](String.md)| filter by attribute &#39;archived&#39; | [optional] 
 **filterId** | [**[String]**](String.md)| filter by id(s) | [optional] 
 **fieldsGameCenterLeaderboards** | [**[String]**](String.md)| the fields to include for returned resources of type gameCenterLeaderboards | [optional] 
 **fieldsGameCenterDetails** | [**[String]**](String.md)| the fields to include for returned resources of type gameCenterDetails | [optional] 
 **fieldsGameCenterGroups** | [**[String]**](String.md)| the fields to include for returned resources of type gameCenterGroups | [optional] 
 **fieldsGameCenterLeaderboardSets** | [**[String]**](String.md)| the fields to include for returned resources of type gameCenterLeaderboardSets | [optional] 
 **fieldsGameCenterLeaderboardLocalizations** | [**[String]**](String.md)| the fields to include for returned resources of type gameCenterLeaderboardLocalizations | [optional] 
 **fieldsGameCenterLeaderboardReleases** | [**[String]**](String.md)| the fields to include for returned resources of type gameCenterLeaderboardReleases | [optional] 
 **fieldsGameCenterActivities** | [**[String]**](String.md)| the fields to include for returned resources of type gameCenterActivities | [optional] 
 **fieldsGameCenterChallenges** | [**[String]**](String.md)| the fields to include for returned resources of type gameCenterChallenges | [optional] 
 **limit** | **Number**| maximum resources per page | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 
 **limitGameCenterLeaderboardSets** | **Number**| maximum number of related gameCenterLeaderboardSets returned (when they are included) | [optional] 
 **limitLocalizations** | **Number**| maximum number of related localizations returned (when they are included) | [optional] 
 **limitReleases** | **Number**| maximum number of related releases returned (when they are included) | [optional] 

### Return type

[**GameCenterLeaderboardsResponse**](GameCenterLeaderboardsResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## gameCenterLeaderboardSetsGameCenterLeaderboardsGetToManyRelationship

> GameCenterLeaderboardSetGameCenterLeaderboardsLinkagesResponse gameCenterLeaderboardSetsGameCenterLeaderboardsGetToManyRelationship(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterLeaderboardSetsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'limit': 56 // Number | maximum resources per page
};
apiInstance.gameCenterLeaderboardSetsGameCenterLeaderboardsGetToManyRelationship(id, opts, (error, data, response) => {
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

[**GameCenterLeaderboardSetGameCenterLeaderboardsLinkagesResponse**](GameCenterLeaderboardSetGameCenterLeaderboardsLinkagesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## gameCenterLeaderboardSetsGameCenterLeaderboardsReplaceToManyRelationship

> gameCenterLeaderboardSetsGameCenterLeaderboardsReplaceToManyRelationship(id, gameCenterLeaderboardSetGameCenterLeaderboardsLinkagesRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterLeaderboardSetsApi();
let id = "id_example"; // String | the id of the requested resource
let gameCenterLeaderboardSetGameCenterLeaderboardsLinkagesRequest = new AppStoreConnectApi.GameCenterLeaderboardSetGameCenterLeaderboardsLinkagesRequest(); // GameCenterLeaderboardSetGameCenterLeaderboardsLinkagesRequest | List of related linkages
apiInstance.gameCenterLeaderboardSetsGameCenterLeaderboardsReplaceToManyRelationship(id, gameCenterLeaderboardSetGameCenterLeaderboardsLinkagesRequest, (error, data, response) => {
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
 **gameCenterLeaderboardSetGameCenterLeaderboardsLinkagesRequest** | [**GameCenterLeaderboardSetGameCenterLeaderboardsLinkagesRequest**](GameCenterLeaderboardSetGameCenterLeaderboardsLinkagesRequest.md)| List of related linkages | 

### Return type

null (empty response body)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## gameCenterLeaderboardSetsGetInstance

> GameCenterLeaderboardSetResponse gameCenterLeaderboardSetsGetInstance(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterLeaderboardSetsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsGameCenterLeaderboardSets': ["null"], // [String] | the fields to include for returned resources of type gameCenterLeaderboardSets
  'fieldsGameCenterLeaderboardSetLocalizations': ["null"], // [String] | the fields to include for returned resources of type gameCenterLeaderboardSetLocalizations
  'fieldsGameCenterLeaderboards': ["null"], // [String] | the fields to include for returned resources of type gameCenterLeaderboards
  'fieldsGameCenterLeaderboardSetReleases': ["null"], // [String] | the fields to include for returned resources of type gameCenterLeaderboardSetReleases
  'include': ["null"], // [String] | comma-separated list of relationships to include
  'limitGameCenterLeaderboards': 56, // Number | maximum number of related gameCenterLeaderboards returned (when they are included)
  'limitLocalizations': 56, // Number | maximum number of related localizations returned (when they are included)
  'limitReleases': 56 // Number | maximum number of related releases returned (when they are included)
};
apiInstance.gameCenterLeaderboardSetsGetInstance(id, opts, (error, data, response) => {
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
 **fieldsGameCenterLeaderboardSets** | [**[String]**](String.md)| the fields to include for returned resources of type gameCenterLeaderboardSets | [optional] 
 **fieldsGameCenterLeaderboardSetLocalizations** | [**[String]**](String.md)| the fields to include for returned resources of type gameCenterLeaderboardSetLocalizations | [optional] 
 **fieldsGameCenterLeaderboards** | [**[String]**](String.md)| the fields to include for returned resources of type gameCenterLeaderboards | [optional] 
 **fieldsGameCenterLeaderboardSetReleases** | [**[String]**](String.md)| the fields to include for returned resources of type gameCenterLeaderboardSetReleases | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 
 **limitGameCenterLeaderboards** | **Number**| maximum number of related gameCenterLeaderboards returned (when they are included) | [optional] 
 **limitLocalizations** | **Number**| maximum number of related localizations returned (when they are included) | [optional] 
 **limitReleases** | **Number**| maximum number of related releases returned (when they are included) | [optional] 

### Return type

[**GameCenterLeaderboardSetResponse**](GameCenterLeaderboardSetResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## gameCenterLeaderboardSetsGroupLeaderboardSetGetToOneRelated

> GameCenterLeaderboardSetResponse gameCenterLeaderboardSetsGroupLeaderboardSetGetToOneRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterLeaderboardSetsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsGameCenterLeaderboardSets': ["null"], // [String] | the fields to include for returned resources of type gameCenterLeaderboardSets
  'fieldsGameCenterDetails': ["null"], // [String] | the fields to include for returned resources of type gameCenterDetails
  'fieldsGameCenterGroups': ["null"], // [String] | the fields to include for returned resources of type gameCenterGroups
  'fieldsGameCenterLeaderboardSetLocalizations': ["null"], // [String] | the fields to include for returned resources of type gameCenterLeaderboardSetLocalizations
  'fieldsGameCenterLeaderboards': ["null"], // [String] | the fields to include for returned resources of type gameCenterLeaderboards
  'fieldsGameCenterLeaderboardSetReleases': ["null"], // [String] | the fields to include for returned resources of type gameCenterLeaderboardSetReleases
  'include': ["null"], // [String] | comma-separated list of relationships to include
  'limitLocalizations': 56, // Number | maximum number of related localizations returned (when they are included)
  'limitGameCenterLeaderboards': 56, // Number | maximum number of related gameCenterLeaderboards returned (when they are included)
  'limitReleases': 56 // Number | maximum number of related releases returned (when they are included)
};
apiInstance.gameCenterLeaderboardSetsGroupLeaderboardSetGetToOneRelated(id, opts, (error, data, response) => {
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
 **fieldsGameCenterLeaderboardSets** | [**[String]**](String.md)| the fields to include for returned resources of type gameCenterLeaderboardSets | [optional] 
 **fieldsGameCenterDetails** | [**[String]**](String.md)| the fields to include for returned resources of type gameCenterDetails | [optional] 
 **fieldsGameCenterGroups** | [**[String]**](String.md)| the fields to include for returned resources of type gameCenterGroups | [optional] 
 **fieldsGameCenterLeaderboardSetLocalizations** | [**[String]**](String.md)| the fields to include for returned resources of type gameCenterLeaderboardSetLocalizations | [optional] 
 **fieldsGameCenterLeaderboards** | [**[String]**](String.md)| the fields to include for returned resources of type gameCenterLeaderboards | [optional] 
 **fieldsGameCenterLeaderboardSetReleases** | [**[String]**](String.md)| the fields to include for returned resources of type gameCenterLeaderboardSetReleases | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 
 **limitLocalizations** | **Number**| maximum number of related localizations returned (when they are included) | [optional] 
 **limitGameCenterLeaderboards** | **Number**| maximum number of related gameCenterLeaderboards returned (when they are included) | [optional] 
 **limitReleases** | **Number**| maximum number of related releases returned (when they are included) | [optional] 

### Return type

[**GameCenterLeaderboardSetResponse**](GameCenterLeaderboardSetResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## gameCenterLeaderboardSetsGroupLeaderboardSetGetToOneRelationship

> GameCenterLeaderboardSetGroupLeaderboardSetLinkageResponse gameCenterLeaderboardSetsGroupLeaderboardSetGetToOneRelationship(id)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterLeaderboardSetsApi();
let id = "id_example"; // String | the id of the requested resource
apiInstance.gameCenterLeaderboardSetsGroupLeaderboardSetGetToOneRelationship(id, (error, data, response) => {
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

[**GameCenterLeaderboardSetGroupLeaderboardSetLinkageResponse**](GameCenterLeaderboardSetGroupLeaderboardSetLinkageResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## gameCenterLeaderboardSetsGroupLeaderboardSetUpdateToOneRelationship

> gameCenterLeaderboardSetsGroupLeaderboardSetUpdateToOneRelationship(id, gameCenterLeaderboardSetGroupLeaderboardSetLinkageRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterLeaderboardSetsApi();
let id = "id_example"; // String | the id of the requested resource
let gameCenterLeaderboardSetGroupLeaderboardSetLinkageRequest = new AppStoreConnectApi.GameCenterLeaderboardSetGroupLeaderboardSetLinkageRequest(); // GameCenterLeaderboardSetGroupLeaderboardSetLinkageRequest | Related linkage
apiInstance.gameCenterLeaderboardSetsGroupLeaderboardSetUpdateToOneRelationship(id, gameCenterLeaderboardSetGroupLeaderboardSetLinkageRequest, (error, data, response) => {
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
 **gameCenterLeaderboardSetGroupLeaderboardSetLinkageRequest** | [**GameCenterLeaderboardSetGroupLeaderboardSetLinkageRequest**](GameCenterLeaderboardSetGroupLeaderboardSetLinkageRequest.md)| Related linkage | 

### Return type

null (empty response body)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## gameCenterLeaderboardSetsLocalizationsGetToManyRelated

> GameCenterLeaderboardSetLocalizationsResponse gameCenterLeaderboardSetsLocalizationsGetToManyRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterLeaderboardSetsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsGameCenterLeaderboardSetLocalizations': ["null"], // [String] | the fields to include for returned resources of type gameCenterLeaderboardSetLocalizations
  'fieldsGameCenterLeaderboardSets': ["null"], // [String] | the fields to include for returned resources of type gameCenterLeaderboardSets
  'fieldsGameCenterLeaderboardSetImages': ["null"], // [String] | the fields to include for returned resources of type gameCenterLeaderboardSetImages
  'limit': 56, // Number | maximum resources per page
  'include': ["null"] // [String] | comma-separated list of relationships to include
};
apiInstance.gameCenterLeaderboardSetsLocalizationsGetToManyRelated(id, opts, (error, data, response) => {
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
 **fieldsGameCenterLeaderboardSetLocalizations** | [**[String]**](String.md)| the fields to include for returned resources of type gameCenterLeaderboardSetLocalizations | [optional] 
 **fieldsGameCenterLeaderboardSets** | [**[String]**](String.md)| the fields to include for returned resources of type gameCenterLeaderboardSets | [optional] 
 **fieldsGameCenterLeaderboardSetImages** | [**[String]**](String.md)| the fields to include for returned resources of type gameCenterLeaderboardSetImages | [optional] 
 **limit** | **Number**| maximum resources per page | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 

### Return type

[**GameCenterLeaderboardSetLocalizationsResponse**](GameCenterLeaderboardSetLocalizationsResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## gameCenterLeaderboardSetsLocalizationsGetToManyRelationship

> GameCenterLeaderboardSetLocalizationsLinkagesResponse gameCenterLeaderboardSetsLocalizationsGetToManyRelationship(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterLeaderboardSetsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'limit': 56 // Number | maximum resources per page
};
apiInstance.gameCenterLeaderboardSetsLocalizationsGetToManyRelationship(id, opts, (error, data, response) => {
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

[**GameCenterLeaderboardSetLocalizationsLinkagesResponse**](GameCenterLeaderboardSetLocalizationsLinkagesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## gameCenterLeaderboardSetsReleasesGetToManyRelated

> GameCenterLeaderboardSetReleasesResponse gameCenterLeaderboardSetsReleasesGetToManyRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterLeaderboardSetsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'filterLive': ["null"], // [String] | filter by attribute 'live'
  'filterGameCenterDetail': ["null"], // [String] | filter by id(s) of related 'gameCenterDetail'
  'fieldsGameCenterLeaderboardSetReleases': ["null"], // [String] | the fields to include for returned resources of type gameCenterLeaderboardSetReleases
  'fieldsGameCenterDetails': ["null"], // [String] | the fields to include for returned resources of type gameCenterDetails
  'fieldsGameCenterLeaderboardSets': ["null"], // [String] | the fields to include for returned resources of type gameCenterLeaderboardSets
  'limit': 56, // Number | maximum resources per page
  'include': ["null"] // [String] | comma-separated list of relationships to include
};
apiInstance.gameCenterLeaderboardSetsReleasesGetToManyRelated(id, opts, (error, data, response) => {
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
 **filterLive** | [**[String]**](String.md)| filter by attribute &#39;live&#39; | [optional] 
 **filterGameCenterDetail** | [**[String]**](String.md)| filter by id(s) of related &#39;gameCenterDetail&#39; | [optional] 
 **fieldsGameCenterLeaderboardSetReleases** | [**[String]**](String.md)| the fields to include for returned resources of type gameCenterLeaderboardSetReleases | [optional] 
 **fieldsGameCenterDetails** | [**[String]**](String.md)| the fields to include for returned resources of type gameCenterDetails | [optional] 
 **fieldsGameCenterLeaderboardSets** | [**[String]**](String.md)| the fields to include for returned resources of type gameCenterLeaderboardSets | [optional] 
 **limit** | **Number**| maximum resources per page | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 

### Return type

[**GameCenterLeaderboardSetReleasesResponse**](GameCenterLeaderboardSetReleasesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## gameCenterLeaderboardSetsReleasesGetToManyRelationship

> GameCenterLeaderboardSetReleasesLinkagesResponse gameCenterLeaderboardSetsReleasesGetToManyRelationship(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterLeaderboardSetsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'limit': 56 // Number | maximum resources per page
};
apiInstance.gameCenterLeaderboardSetsReleasesGetToManyRelationship(id, opts, (error, data, response) => {
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

[**GameCenterLeaderboardSetReleasesLinkagesResponse**](GameCenterLeaderboardSetReleasesLinkagesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## gameCenterLeaderboardSetsUpdateInstance

> GameCenterLeaderboardSetResponse gameCenterLeaderboardSetsUpdateInstance(id, gameCenterLeaderboardSetUpdateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterLeaderboardSetsApi();
let id = "id_example"; // String | the id of the requested resource
let gameCenterLeaderboardSetUpdateRequest = new AppStoreConnectApi.GameCenterLeaderboardSetUpdateRequest(); // GameCenterLeaderboardSetUpdateRequest | GameCenterLeaderboardSet representation
apiInstance.gameCenterLeaderboardSetsUpdateInstance(id, gameCenterLeaderboardSetUpdateRequest, (error, data, response) => {
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
 **gameCenterLeaderboardSetUpdateRequest** | [**GameCenterLeaderboardSetUpdateRequest**](GameCenterLeaderboardSetUpdateRequest.md)| GameCenterLeaderboardSet representation | 

### Return type

[**GameCenterLeaderboardSetResponse**](GameCenterLeaderboardSetResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

