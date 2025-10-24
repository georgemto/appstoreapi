# AppStoreConnectApi.GameCenterActivitiesApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**gameCenterActivitiesAchievementsCreateToManyRelationship**](GameCenterActivitiesApi.md#gameCenterActivitiesAchievementsCreateToManyRelationship) | **POST** /v1/gameCenterActivities/{id}/relationships/achievements | 
[**gameCenterActivitiesAchievementsDeleteToManyRelationship**](GameCenterActivitiesApi.md#gameCenterActivitiesAchievementsDeleteToManyRelationship) | **DELETE** /v1/gameCenterActivities/{id}/relationships/achievements | 
[**gameCenterActivitiesCreateInstance**](GameCenterActivitiesApi.md#gameCenterActivitiesCreateInstance) | **POST** /v1/gameCenterActivities | 
[**gameCenterActivitiesDeleteInstance**](GameCenterActivitiesApi.md#gameCenterActivitiesDeleteInstance) | **DELETE** /v1/gameCenterActivities/{id} | 
[**gameCenterActivitiesGetInstance**](GameCenterActivitiesApi.md#gameCenterActivitiesGetInstance) | **GET** /v1/gameCenterActivities/{id} | 
[**gameCenterActivitiesLeaderboardsCreateToManyRelationship**](GameCenterActivitiesApi.md#gameCenterActivitiesLeaderboardsCreateToManyRelationship) | **POST** /v1/gameCenterActivities/{id}/relationships/leaderboards | 
[**gameCenterActivitiesLeaderboardsDeleteToManyRelationship**](GameCenterActivitiesApi.md#gameCenterActivitiesLeaderboardsDeleteToManyRelationship) | **DELETE** /v1/gameCenterActivities/{id}/relationships/leaderboards | 
[**gameCenterActivitiesUpdateInstance**](GameCenterActivitiesApi.md#gameCenterActivitiesUpdateInstance) | **PATCH** /v1/gameCenterActivities/{id} | 
[**gameCenterActivitiesVersionsGetToManyRelated**](GameCenterActivitiesApi.md#gameCenterActivitiesVersionsGetToManyRelated) | **GET** /v1/gameCenterActivities/{id}/versions | 
[**gameCenterActivitiesVersionsGetToManyRelationship**](GameCenterActivitiesApi.md#gameCenterActivitiesVersionsGetToManyRelationship) | **GET** /v1/gameCenterActivities/{id}/relationships/versions | 



## gameCenterActivitiesAchievementsCreateToManyRelationship

> gameCenterActivitiesAchievementsCreateToManyRelationship(id, gameCenterActivityAchievementsLinkagesRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterActivitiesApi();
let id = "id_example"; // String | the id of the requested resource
let gameCenterActivityAchievementsLinkagesRequest = new AppStoreConnectApi.GameCenterActivityAchievementsLinkagesRequest(); // GameCenterActivityAchievementsLinkagesRequest | List of related linkages
apiInstance.gameCenterActivitiesAchievementsCreateToManyRelationship(id, gameCenterActivityAchievementsLinkagesRequest, (error, data, response) => {
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
 **gameCenterActivityAchievementsLinkagesRequest** | [**GameCenterActivityAchievementsLinkagesRequest**](GameCenterActivityAchievementsLinkagesRequest.md)| List of related linkages | 

### Return type

null (empty response body)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## gameCenterActivitiesAchievementsDeleteToManyRelationship

> gameCenterActivitiesAchievementsDeleteToManyRelationship(id, gameCenterActivityAchievementsLinkagesRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterActivitiesApi();
let id = "id_example"; // String | the id of the requested resource
let gameCenterActivityAchievementsLinkagesRequest = new AppStoreConnectApi.GameCenterActivityAchievementsLinkagesRequest(); // GameCenterActivityAchievementsLinkagesRequest | List of related linkages
apiInstance.gameCenterActivitiesAchievementsDeleteToManyRelationship(id, gameCenterActivityAchievementsLinkagesRequest, (error, data, response) => {
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
 **gameCenterActivityAchievementsLinkagesRequest** | [**GameCenterActivityAchievementsLinkagesRequest**](GameCenterActivityAchievementsLinkagesRequest.md)| List of related linkages | 

### Return type

null (empty response body)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## gameCenterActivitiesCreateInstance

> GameCenterActivityResponse gameCenterActivitiesCreateInstance(gameCenterActivityCreateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterActivitiesApi();
let gameCenterActivityCreateRequest = new AppStoreConnectApi.GameCenterActivityCreateRequest(); // GameCenterActivityCreateRequest | GameCenterActivity representation
apiInstance.gameCenterActivitiesCreateInstance(gameCenterActivityCreateRequest, (error, data, response) => {
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
 **gameCenterActivityCreateRequest** | [**GameCenterActivityCreateRequest**](GameCenterActivityCreateRequest.md)| GameCenterActivity representation | 

### Return type

[**GameCenterActivityResponse**](GameCenterActivityResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## gameCenterActivitiesDeleteInstance

> gameCenterActivitiesDeleteInstance(id)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterActivitiesApi();
let id = "id_example"; // String | the id of the requested resource
apiInstance.gameCenterActivitiesDeleteInstance(id, (error, data, response) => {
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


## gameCenterActivitiesGetInstance

> GameCenterActivityResponse gameCenterActivitiesGetInstance(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterActivitiesApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsGameCenterActivities': ["null"], // [String] | the fields to include for returned resources of type gameCenterActivities
  'fieldsGameCenterActivityVersions': ["null"], // [String] | the fields to include for returned resources of type gameCenterActivityVersions
  'include': ["null"], // [String] | comma-separated list of relationships to include
  'limitAchievements': 56, // Number | maximum number of related achievements returned (when they are included)
  'limitLeaderboards': 56, // Number | maximum number of related leaderboards returned (when they are included)
  'limitVersions': 56 // Number | maximum number of related versions returned (when they are included)
};
apiInstance.gameCenterActivitiesGetInstance(id, opts, (error, data, response) => {
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
 **fieldsGameCenterActivities** | [**[String]**](String.md)| the fields to include for returned resources of type gameCenterActivities | [optional] 
 **fieldsGameCenterActivityVersions** | [**[String]**](String.md)| the fields to include for returned resources of type gameCenterActivityVersions | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 
 **limitAchievements** | **Number**| maximum number of related achievements returned (when they are included) | [optional] 
 **limitLeaderboards** | **Number**| maximum number of related leaderboards returned (when they are included) | [optional] 
 **limitVersions** | **Number**| maximum number of related versions returned (when they are included) | [optional] 

### Return type

[**GameCenterActivityResponse**](GameCenterActivityResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## gameCenterActivitiesLeaderboardsCreateToManyRelationship

> gameCenterActivitiesLeaderboardsCreateToManyRelationship(id, gameCenterActivityLeaderboardsLinkagesRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterActivitiesApi();
let id = "id_example"; // String | the id of the requested resource
let gameCenterActivityLeaderboardsLinkagesRequest = new AppStoreConnectApi.GameCenterActivityLeaderboardsLinkagesRequest(); // GameCenterActivityLeaderboardsLinkagesRequest | List of related linkages
apiInstance.gameCenterActivitiesLeaderboardsCreateToManyRelationship(id, gameCenterActivityLeaderboardsLinkagesRequest, (error, data, response) => {
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
 **gameCenterActivityLeaderboardsLinkagesRequest** | [**GameCenterActivityLeaderboardsLinkagesRequest**](GameCenterActivityLeaderboardsLinkagesRequest.md)| List of related linkages | 

### Return type

null (empty response body)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## gameCenterActivitiesLeaderboardsDeleteToManyRelationship

> gameCenterActivitiesLeaderboardsDeleteToManyRelationship(id, gameCenterActivityLeaderboardsLinkagesRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterActivitiesApi();
let id = "id_example"; // String | the id of the requested resource
let gameCenterActivityLeaderboardsLinkagesRequest = new AppStoreConnectApi.GameCenterActivityLeaderboardsLinkagesRequest(); // GameCenterActivityLeaderboardsLinkagesRequest | List of related linkages
apiInstance.gameCenterActivitiesLeaderboardsDeleteToManyRelationship(id, gameCenterActivityLeaderboardsLinkagesRequest, (error, data, response) => {
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
 **gameCenterActivityLeaderboardsLinkagesRequest** | [**GameCenterActivityLeaderboardsLinkagesRequest**](GameCenterActivityLeaderboardsLinkagesRequest.md)| List of related linkages | 

### Return type

null (empty response body)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## gameCenterActivitiesUpdateInstance

> GameCenterActivityResponse gameCenterActivitiesUpdateInstance(id, gameCenterActivityUpdateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterActivitiesApi();
let id = "id_example"; // String | the id of the requested resource
let gameCenterActivityUpdateRequest = new AppStoreConnectApi.GameCenterActivityUpdateRequest(); // GameCenterActivityUpdateRequest | GameCenterActivity representation
apiInstance.gameCenterActivitiesUpdateInstance(id, gameCenterActivityUpdateRequest, (error, data, response) => {
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
 **gameCenterActivityUpdateRequest** | [**GameCenterActivityUpdateRequest**](GameCenterActivityUpdateRequest.md)| GameCenterActivity representation | 

### Return type

[**GameCenterActivityResponse**](GameCenterActivityResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## gameCenterActivitiesVersionsGetToManyRelated

> GameCenterActivityVersionsResponse gameCenterActivitiesVersionsGetToManyRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterActivitiesApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsGameCenterActivityVersions': ["null"], // [String] | the fields to include for returned resources of type gameCenterActivityVersions
  'fieldsGameCenterActivities': ["null"], // [String] | the fields to include for returned resources of type gameCenterActivities
  'fieldsGameCenterActivityLocalizations': ["null"], // [String] | the fields to include for returned resources of type gameCenterActivityLocalizations
  'fieldsGameCenterActivityImages': ["null"], // [String] | the fields to include for returned resources of type gameCenterActivityImages
  'fieldsGameCenterActivityVersionReleases': ["null"], // [String] | the fields to include for returned resources of type gameCenterActivityVersionReleases
  'limit': 56, // Number | maximum resources per page
  'include': ["null"], // [String] | comma-separated list of relationships to include
  'limitLocalizations': 56, // Number | maximum number of related localizations returned (when they are included)
  'limitReleases': 56 // Number | maximum number of related releases returned (when they are included)
};
apiInstance.gameCenterActivitiesVersionsGetToManyRelated(id, opts, (error, data, response) => {
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
 **fieldsGameCenterActivityVersions** | [**[String]**](String.md)| the fields to include for returned resources of type gameCenterActivityVersions | [optional] 
 **fieldsGameCenterActivities** | [**[String]**](String.md)| the fields to include for returned resources of type gameCenterActivities | [optional] 
 **fieldsGameCenterActivityLocalizations** | [**[String]**](String.md)| the fields to include for returned resources of type gameCenterActivityLocalizations | [optional] 
 **fieldsGameCenterActivityImages** | [**[String]**](String.md)| the fields to include for returned resources of type gameCenterActivityImages | [optional] 
 **fieldsGameCenterActivityVersionReleases** | [**[String]**](String.md)| the fields to include for returned resources of type gameCenterActivityVersionReleases | [optional] 
 **limit** | **Number**| maximum resources per page | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 
 **limitLocalizations** | **Number**| maximum number of related localizations returned (when they are included) | [optional] 
 **limitReleases** | **Number**| maximum number of related releases returned (when they are included) | [optional] 

### Return type

[**GameCenterActivityVersionsResponse**](GameCenterActivityVersionsResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## gameCenterActivitiesVersionsGetToManyRelationship

> GameCenterActivityVersionsLinkagesResponse gameCenterActivitiesVersionsGetToManyRelationship(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterActivitiesApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'limit': 56 // Number | maximum resources per page
};
apiInstance.gameCenterActivitiesVersionsGetToManyRelationship(id, opts, (error, data, response) => {
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

[**GameCenterActivityVersionsLinkagesResponse**](GameCenterActivityVersionsLinkagesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

