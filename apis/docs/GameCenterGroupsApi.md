# AppStoreConnectApi.GameCenterGroupsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**gameCenterGroupsCreateInstance**](GameCenterGroupsApi.md#gameCenterGroupsCreateInstance) | **POST** /v1/gameCenterGroups | 
[**gameCenterGroupsDeleteInstance**](GameCenterGroupsApi.md#gameCenterGroupsDeleteInstance) | **DELETE** /v1/gameCenterGroups/{id} | 
[**gameCenterGroupsGameCenterAchievementsGetToManyRelated**](GameCenterGroupsApi.md#gameCenterGroupsGameCenterAchievementsGetToManyRelated) | **GET** /v1/gameCenterGroups/{id}/gameCenterAchievements | 
[**gameCenterGroupsGameCenterAchievementsGetToManyRelationship**](GameCenterGroupsApi.md#gameCenterGroupsGameCenterAchievementsGetToManyRelationship) | **GET** /v1/gameCenterGroups/{id}/relationships/gameCenterAchievements | 
[**gameCenterGroupsGameCenterAchievementsReplaceToManyRelationship**](GameCenterGroupsApi.md#gameCenterGroupsGameCenterAchievementsReplaceToManyRelationship) | **PATCH** /v1/gameCenterGroups/{id}/relationships/gameCenterAchievements | 
[**gameCenterGroupsGameCenterActivitiesGetToManyRelated**](GameCenterGroupsApi.md#gameCenterGroupsGameCenterActivitiesGetToManyRelated) | **GET** /v1/gameCenterGroups/{id}/gameCenterActivities | 
[**gameCenterGroupsGameCenterActivitiesGetToManyRelationship**](GameCenterGroupsApi.md#gameCenterGroupsGameCenterActivitiesGetToManyRelationship) | **GET** /v1/gameCenterGroups/{id}/relationships/gameCenterActivities | 
[**gameCenterGroupsGameCenterChallengesGetToManyRelated**](GameCenterGroupsApi.md#gameCenterGroupsGameCenterChallengesGetToManyRelated) | **GET** /v1/gameCenterGroups/{id}/gameCenterChallenges | 
[**gameCenterGroupsGameCenterChallengesGetToManyRelationship**](GameCenterGroupsApi.md#gameCenterGroupsGameCenterChallengesGetToManyRelationship) | **GET** /v1/gameCenterGroups/{id}/relationships/gameCenterChallenges | 
[**gameCenterGroupsGameCenterDetailsGetToManyRelated**](GameCenterGroupsApi.md#gameCenterGroupsGameCenterDetailsGetToManyRelated) | **GET** /v1/gameCenterGroups/{id}/gameCenterDetails | 
[**gameCenterGroupsGameCenterDetailsGetToManyRelationship**](GameCenterGroupsApi.md#gameCenterGroupsGameCenterDetailsGetToManyRelationship) | **GET** /v1/gameCenterGroups/{id}/relationships/gameCenterDetails | 
[**gameCenterGroupsGameCenterLeaderboardSetsGetToManyRelated**](GameCenterGroupsApi.md#gameCenterGroupsGameCenterLeaderboardSetsGetToManyRelated) | **GET** /v1/gameCenterGroups/{id}/gameCenterLeaderboardSets | 
[**gameCenterGroupsGameCenterLeaderboardSetsGetToManyRelationship**](GameCenterGroupsApi.md#gameCenterGroupsGameCenterLeaderboardSetsGetToManyRelationship) | **GET** /v1/gameCenterGroups/{id}/relationships/gameCenterLeaderboardSets | 
[**gameCenterGroupsGameCenterLeaderboardSetsReplaceToManyRelationship**](GameCenterGroupsApi.md#gameCenterGroupsGameCenterLeaderboardSetsReplaceToManyRelationship) | **PATCH** /v1/gameCenterGroups/{id}/relationships/gameCenterLeaderboardSets | 
[**gameCenterGroupsGameCenterLeaderboardsGetToManyRelated**](GameCenterGroupsApi.md#gameCenterGroupsGameCenterLeaderboardsGetToManyRelated) | **GET** /v1/gameCenterGroups/{id}/gameCenterLeaderboards | 
[**gameCenterGroupsGameCenterLeaderboardsGetToManyRelationship**](GameCenterGroupsApi.md#gameCenterGroupsGameCenterLeaderboardsGetToManyRelationship) | **GET** /v1/gameCenterGroups/{id}/relationships/gameCenterLeaderboards | 
[**gameCenterGroupsGameCenterLeaderboardsReplaceToManyRelationship**](GameCenterGroupsApi.md#gameCenterGroupsGameCenterLeaderboardsReplaceToManyRelationship) | **PATCH** /v1/gameCenterGroups/{id}/relationships/gameCenterLeaderboards | 
[**gameCenterGroupsGetCollection**](GameCenterGroupsApi.md#gameCenterGroupsGetCollection) | **GET** /v1/gameCenterGroups | 
[**gameCenterGroupsGetInstance**](GameCenterGroupsApi.md#gameCenterGroupsGetInstance) | **GET** /v1/gameCenterGroups/{id} | 
[**gameCenterGroupsUpdateInstance**](GameCenterGroupsApi.md#gameCenterGroupsUpdateInstance) | **PATCH** /v1/gameCenterGroups/{id} | 



## gameCenterGroupsCreateInstance

> GameCenterGroupResponse gameCenterGroupsCreateInstance(gameCenterGroupCreateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterGroupsApi();
let gameCenterGroupCreateRequest = new AppStoreConnectApi.GameCenterGroupCreateRequest(); // GameCenterGroupCreateRequest | GameCenterGroup representation
apiInstance.gameCenterGroupsCreateInstance(gameCenterGroupCreateRequest, (error, data, response) => {
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
 **gameCenterGroupCreateRequest** | [**GameCenterGroupCreateRequest**](GameCenterGroupCreateRequest.md)| GameCenterGroup representation | 

### Return type

[**GameCenterGroupResponse**](GameCenterGroupResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## gameCenterGroupsDeleteInstance

> gameCenterGroupsDeleteInstance(id)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterGroupsApi();
let id = "id_example"; // String | the id of the requested resource
apiInstance.gameCenterGroupsDeleteInstance(id, (error, data, response) => {
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


## gameCenterGroupsGameCenterAchievementsGetToManyRelated

> GameCenterAchievementsResponse gameCenterGroupsGameCenterAchievementsGetToManyRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterGroupsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'filterReferenceName': ["null"], // [String] | filter by attribute 'referenceName'
  'filterArchived': ["null"], // [String] | filter by attribute 'archived'
  'filterId': ["null"], // [String] | filter by id(s)
  'fieldsGameCenterAchievements': ["null"], // [String] | the fields to include for returned resources of type gameCenterAchievements
  'fieldsGameCenterDetails': ["null"], // [String] | the fields to include for returned resources of type gameCenterDetails
  'fieldsGameCenterGroups': ["null"], // [String] | the fields to include for returned resources of type gameCenterGroups
  'fieldsGameCenterAchievementLocalizations': ["null"], // [String] | the fields to include for returned resources of type gameCenterAchievementLocalizations
  'fieldsGameCenterAchievementReleases': ["null"], // [String] | the fields to include for returned resources of type gameCenterAchievementReleases
  'fieldsGameCenterActivities': ["null"], // [String] | the fields to include for returned resources of type gameCenterActivities
  'limit': 56, // Number | maximum resources per page
  'include': ["null"], // [String] | comma-separated list of relationships to include
  'limitLocalizations': 56, // Number | maximum number of related localizations returned (when they are included)
  'limitReleases': 56 // Number | maximum number of related releases returned (when they are included)
};
apiInstance.gameCenterGroupsGameCenterAchievementsGetToManyRelated(id, opts, (error, data, response) => {
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
 **fieldsGameCenterAchievements** | [**[String]**](String.md)| the fields to include for returned resources of type gameCenterAchievements | [optional] 
 **fieldsGameCenterDetails** | [**[String]**](String.md)| the fields to include for returned resources of type gameCenterDetails | [optional] 
 **fieldsGameCenterGroups** | [**[String]**](String.md)| the fields to include for returned resources of type gameCenterGroups | [optional] 
 **fieldsGameCenterAchievementLocalizations** | [**[String]**](String.md)| the fields to include for returned resources of type gameCenterAchievementLocalizations | [optional] 
 **fieldsGameCenterAchievementReleases** | [**[String]**](String.md)| the fields to include for returned resources of type gameCenterAchievementReleases | [optional] 
 **fieldsGameCenterActivities** | [**[String]**](String.md)| the fields to include for returned resources of type gameCenterActivities | [optional] 
 **limit** | **Number**| maximum resources per page | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 
 **limitLocalizations** | **Number**| maximum number of related localizations returned (when they are included) | [optional] 
 **limitReleases** | **Number**| maximum number of related releases returned (when they are included) | [optional] 

### Return type

[**GameCenterAchievementsResponse**](GameCenterAchievementsResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## gameCenterGroupsGameCenterAchievementsGetToManyRelationship

> GameCenterGroupGameCenterAchievementsLinkagesResponse gameCenterGroupsGameCenterAchievementsGetToManyRelationship(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterGroupsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'limit': 56 // Number | maximum resources per page
};
apiInstance.gameCenterGroupsGameCenterAchievementsGetToManyRelationship(id, opts, (error, data, response) => {
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

[**GameCenterGroupGameCenterAchievementsLinkagesResponse**](GameCenterGroupGameCenterAchievementsLinkagesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## gameCenterGroupsGameCenterAchievementsReplaceToManyRelationship

> gameCenterGroupsGameCenterAchievementsReplaceToManyRelationship(id, gameCenterGroupGameCenterAchievementsLinkagesRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterGroupsApi();
let id = "id_example"; // String | the id of the requested resource
let gameCenterGroupGameCenterAchievementsLinkagesRequest = new AppStoreConnectApi.GameCenterGroupGameCenterAchievementsLinkagesRequest(); // GameCenterGroupGameCenterAchievementsLinkagesRequest | List of related linkages
apiInstance.gameCenterGroupsGameCenterAchievementsReplaceToManyRelationship(id, gameCenterGroupGameCenterAchievementsLinkagesRequest, (error, data, response) => {
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
 **gameCenterGroupGameCenterAchievementsLinkagesRequest** | [**GameCenterGroupGameCenterAchievementsLinkagesRequest**](GameCenterGroupGameCenterAchievementsLinkagesRequest.md)| List of related linkages | 

### Return type

null (empty response body)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## gameCenterGroupsGameCenterActivitiesGetToManyRelated

> GameCenterActivitiesResponse gameCenterGroupsGameCenterActivitiesGetToManyRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterGroupsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsGameCenterActivities': ["null"], // [String] | the fields to include for returned resources of type gameCenterActivities
  'fieldsGameCenterDetails': ["null"], // [String] | the fields to include for returned resources of type gameCenterDetails
  'fieldsGameCenterGroups': ["null"], // [String] | the fields to include for returned resources of type gameCenterGroups
  'fieldsGameCenterAchievements': ["null"], // [String] | the fields to include for returned resources of type gameCenterAchievements
  'fieldsGameCenterLeaderboards': ["null"], // [String] | the fields to include for returned resources of type gameCenterLeaderboards
  'fieldsGameCenterActivityVersions': ["null"], // [String] | the fields to include for returned resources of type gameCenterActivityVersions
  'limit': 56, // Number | maximum resources per page
  'include': ["null"], // [String] | comma-separated list of relationships to include
  'limitAchievements': 56, // Number | maximum number of related achievements returned (when they are included)
  'limitLeaderboards': 56, // Number | maximum number of related leaderboards returned (when they are included)
  'limitVersions': 56 // Number | maximum number of related versions returned (when they are included)
};
apiInstance.gameCenterGroupsGameCenterActivitiesGetToManyRelated(id, opts, (error, data, response) => {
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
 **fieldsGameCenterDetails** | [**[String]**](String.md)| the fields to include for returned resources of type gameCenterDetails | [optional] 
 **fieldsGameCenterGroups** | [**[String]**](String.md)| the fields to include for returned resources of type gameCenterGroups | [optional] 
 **fieldsGameCenterAchievements** | [**[String]**](String.md)| the fields to include for returned resources of type gameCenterAchievements | [optional] 
 **fieldsGameCenterLeaderboards** | [**[String]**](String.md)| the fields to include for returned resources of type gameCenterLeaderboards | [optional] 
 **fieldsGameCenterActivityVersions** | [**[String]**](String.md)| the fields to include for returned resources of type gameCenterActivityVersions | [optional] 
 **limit** | **Number**| maximum resources per page | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 
 **limitAchievements** | **Number**| maximum number of related achievements returned (when they are included) | [optional] 
 **limitLeaderboards** | **Number**| maximum number of related leaderboards returned (when they are included) | [optional] 
 **limitVersions** | **Number**| maximum number of related versions returned (when they are included) | [optional] 

### Return type

[**GameCenterActivitiesResponse**](GameCenterActivitiesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## gameCenterGroupsGameCenterActivitiesGetToManyRelationship

> GameCenterGroupGameCenterActivitiesLinkagesResponse gameCenterGroupsGameCenterActivitiesGetToManyRelationship(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterGroupsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'limit': 56 // Number | maximum resources per page
};
apiInstance.gameCenterGroupsGameCenterActivitiesGetToManyRelationship(id, opts, (error, data, response) => {
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

[**GameCenterGroupGameCenterActivitiesLinkagesResponse**](GameCenterGroupGameCenterActivitiesLinkagesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## gameCenterGroupsGameCenterChallengesGetToManyRelated

> GameCenterChallengesResponse gameCenterGroupsGameCenterChallengesGetToManyRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterGroupsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'filterReferenceName': ["null"], // [String] | filter by attribute 'referenceName'
  'filterArchived': ["null"], // [String] | filter by attribute 'archived'
  'filterId': ["null"], // [String] | filter by id(s)
  'fieldsGameCenterChallenges': ["null"], // [String] | the fields to include for returned resources of type gameCenterChallenges
  'fieldsGameCenterDetails': ["null"], // [String] | the fields to include for returned resources of type gameCenterDetails
  'fieldsGameCenterGroups': ["null"], // [String] | the fields to include for returned resources of type gameCenterGroups
  'fieldsGameCenterChallengeVersions': ["null"], // [String] | the fields to include for returned resources of type gameCenterChallengeVersions
  'fieldsGameCenterLeaderboards': ["null"], // [String] | the fields to include for returned resources of type gameCenterLeaderboards
  'limit': 56, // Number | maximum resources per page
  'include': ["null"], // [String] | comma-separated list of relationships to include
  'limitVersions': 56 // Number | maximum number of related versions returned (when they are included)
};
apiInstance.gameCenterGroupsGameCenterChallengesGetToManyRelated(id, opts, (error, data, response) => {
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
 **fieldsGameCenterChallenges** | [**[String]**](String.md)| the fields to include for returned resources of type gameCenterChallenges | [optional] 
 **fieldsGameCenterDetails** | [**[String]**](String.md)| the fields to include for returned resources of type gameCenterDetails | [optional] 
 **fieldsGameCenterGroups** | [**[String]**](String.md)| the fields to include for returned resources of type gameCenterGroups | [optional] 
 **fieldsGameCenterChallengeVersions** | [**[String]**](String.md)| the fields to include for returned resources of type gameCenterChallengeVersions | [optional] 
 **fieldsGameCenterLeaderboards** | [**[String]**](String.md)| the fields to include for returned resources of type gameCenterLeaderboards | [optional] 
 **limit** | **Number**| maximum resources per page | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 
 **limitVersions** | **Number**| maximum number of related versions returned (when they are included) | [optional] 

### Return type

[**GameCenterChallengesResponse**](GameCenterChallengesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## gameCenterGroupsGameCenterChallengesGetToManyRelationship

> GameCenterGroupGameCenterChallengesLinkagesResponse gameCenterGroupsGameCenterChallengesGetToManyRelationship(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterGroupsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'limit': 56 // Number | maximum resources per page
};
apiInstance.gameCenterGroupsGameCenterChallengesGetToManyRelationship(id, opts, (error, data, response) => {
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

[**GameCenterGroupGameCenterChallengesLinkagesResponse**](GameCenterGroupGameCenterChallengesLinkagesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## gameCenterGroupsGameCenterDetailsGetToManyRelated

> GameCenterDetailsResponse gameCenterGroupsGameCenterDetailsGetToManyRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterGroupsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'filterGameCenterAppVersionsEnabled': ["null"], // [String] | filter by attribute 'gameCenterAppVersions.enabled'
  'fieldsGameCenterDetails': ["null"], // [String] | the fields to include for returned resources of type gameCenterDetails
  'fieldsApps': ["null"], // [String] | the fields to include for returned resources of type apps
  'fieldsGameCenterAppVersions': ["null"], // [String] | the fields to include for returned resources of type gameCenterAppVersions
  'fieldsGameCenterGroups': ["null"], // [String] | the fields to include for returned resources of type gameCenterGroups
  'fieldsGameCenterLeaderboards': ["null"], // [String] | the fields to include for returned resources of type gameCenterLeaderboards
  'fieldsGameCenterLeaderboardSets': ["null"], // [String] | the fields to include for returned resources of type gameCenterLeaderboardSets
  'fieldsGameCenterAchievements': ["null"], // [String] | the fields to include for returned resources of type gameCenterAchievements
  'fieldsGameCenterActivities': ["null"], // [String] | the fields to include for returned resources of type gameCenterActivities
  'fieldsGameCenterChallenges': ["null"], // [String] | the fields to include for returned resources of type gameCenterChallenges
  'fieldsGameCenterAchievementReleases': ["null"], // [String] | the fields to include for returned resources of type gameCenterAchievementReleases
  'fieldsGameCenterActivityVersionReleases': ["null"], // [String] | the fields to include for returned resources of type gameCenterActivityVersionReleases
  'fieldsGameCenterChallengeVersionReleases': ["null"], // [String] | the fields to include for returned resources of type gameCenterChallengeVersionReleases
  'fieldsGameCenterLeaderboardReleases': ["null"], // [String] | the fields to include for returned resources of type gameCenterLeaderboardReleases
  'fieldsGameCenterLeaderboardSetReleases': ["null"], // [String] | the fields to include for returned resources of type gameCenterLeaderboardSetReleases
  'fieldsAppStoreVersions': ["null"], // [String] | the fields to include for returned resources of type appStoreVersions
  'limit': 56, // Number | maximum resources per page
  'include': ["null"], // [String] | comma-separated list of relationships to include
  'limitGameCenterAppVersions': 56, // Number | maximum number of related gameCenterAppVersions returned (when they are included)
  'limitGameCenterLeaderboards': 56, // Number | maximum number of related gameCenterLeaderboards returned (when they are included)
  'limitGameCenterLeaderboardSets': 56, // Number | maximum number of related gameCenterLeaderboardSets returned (when they are included)
  'limitGameCenterAchievements': 56, // Number | maximum number of related gameCenterAchievements returned (when they are included)
  'limitGameCenterActivities': 56, // Number | maximum number of related gameCenterActivities returned (when they are included)
  'limitGameCenterChallenges': 56, // Number | maximum number of related gameCenterChallenges returned (when they are included)
  'limitAchievementReleases': 56, // Number | maximum number of related achievementReleases returned (when they are included)
  'limitActivityReleases': 56, // Number | maximum number of related activityReleases returned (when they are included)
  'limitChallengeReleases': 56, // Number | maximum number of related challengeReleases returned (when they are included)
  'limitLeaderboardReleases': 56, // Number | maximum number of related leaderboardReleases returned (when they are included)
  'limitLeaderboardSetReleases': 56, // Number | maximum number of related leaderboardSetReleases returned (when they are included)
  'limitChallengesMinimumPlatformVersions': 56 // Number | maximum number of related challengesMinimumPlatformVersions returned (when they are included)
};
apiInstance.gameCenterGroupsGameCenterDetailsGetToManyRelated(id, opts, (error, data, response) => {
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
 **filterGameCenterAppVersionsEnabled** | [**[String]**](String.md)| filter by attribute &#39;gameCenterAppVersions.enabled&#39; | [optional] 
 **fieldsGameCenterDetails** | [**[String]**](String.md)| the fields to include for returned resources of type gameCenterDetails | [optional] 
 **fieldsApps** | [**[String]**](String.md)| the fields to include for returned resources of type apps | [optional] 
 **fieldsGameCenterAppVersions** | [**[String]**](String.md)| the fields to include for returned resources of type gameCenterAppVersions | [optional] 
 **fieldsGameCenterGroups** | [**[String]**](String.md)| the fields to include for returned resources of type gameCenterGroups | [optional] 
 **fieldsGameCenterLeaderboards** | [**[String]**](String.md)| the fields to include for returned resources of type gameCenterLeaderboards | [optional] 
 **fieldsGameCenterLeaderboardSets** | [**[String]**](String.md)| the fields to include for returned resources of type gameCenterLeaderboardSets | [optional] 
 **fieldsGameCenterAchievements** | [**[String]**](String.md)| the fields to include for returned resources of type gameCenterAchievements | [optional] 
 **fieldsGameCenterActivities** | [**[String]**](String.md)| the fields to include for returned resources of type gameCenterActivities | [optional] 
 **fieldsGameCenterChallenges** | [**[String]**](String.md)| the fields to include for returned resources of type gameCenterChallenges | [optional] 
 **fieldsGameCenterAchievementReleases** | [**[String]**](String.md)| the fields to include for returned resources of type gameCenterAchievementReleases | [optional] 
 **fieldsGameCenterActivityVersionReleases** | [**[String]**](String.md)| the fields to include for returned resources of type gameCenterActivityVersionReleases | [optional] 
 **fieldsGameCenterChallengeVersionReleases** | [**[String]**](String.md)| the fields to include for returned resources of type gameCenterChallengeVersionReleases | [optional] 
 **fieldsGameCenterLeaderboardReleases** | [**[String]**](String.md)| the fields to include for returned resources of type gameCenterLeaderboardReleases | [optional] 
 **fieldsGameCenterLeaderboardSetReleases** | [**[String]**](String.md)| the fields to include for returned resources of type gameCenterLeaderboardSetReleases | [optional] 
 **fieldsAppStoreVersions** | [**[String]**](String.md)| the fields to include for returned resources of type appStoreVersions | [optional] 
 **limit** | **Number**| maximum resources per page | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 
 **limitGameCenterAppVersions** | **Number**| maximum number of related gameCenterAppVersions returned (when they are included) | [optional] 
 **limitGameCenterLeaderboards** | **Number**| maximum number of related gameCenterLeaderboards returned (when they are included) | [optional] 
 **limitGameCenterLeaderboardSets** | **Number**| maximum number of related gameCenterLeaderboardSets returned (when they are included) | [optional] 
 **limitGameCenterAchievements** | **Number**| maximum number of related gameCenterAchievements returned (when they are included) | [optional] 
 **limitGameCenterActivities** | **Number**| maximum number of related gameCenterActivities returned (when they are included) | [optional] 
 **limitGameCenterChallenges** | **Number**| maximum number of related gameCenterChallenges returned (when they are included) | [optional] 
 **limitAchievementReleases** | **Number**| maximum number of related achievementReleases returned (when they are included) | [optional] 
 **limitActivityReleases** | **Number**| maximum number of related activityReleases returned (when they are included) | [optional] 
 **limitChallengeReleases** | **Number**| maximum number of related challengeReleases returned (when they are included) | [optional] 
 **limitLeaderboardReleases** | **Number**| maximum number of related leaderboardReleases returned (when they are included) | [optional] 
 **limitLeaderboardSetReleases** | **Number**| maximum number of related leaderboardSetReleases returned (when they are included) | [optional] 
 **limitChallengesMinimumPlatformVersions** | **Number**| maximum number of related challengesMinimumPlatformVersions returned (when they are included) | [optional] 

### Return type

[**GameCenterDetailsResponse**](GameCenterDetailsResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## gameCenterGroupsGameCenterDetailsGetToManyRelationship

> GameCenterGroupGameCenterDetailsLinkagesResponse gameCenterGroupsGameCenterDetailsGetToManyRelationship(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterGroupsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'limit': 56 // Number | maximum resources per page
};
apiInstance.gameCenterGroupsGameCenterDetailsGetToManyRelationship(id, opts, (error, data, response) => {
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

[**GameCenterGroupGameCenterDetailsLinkagesResponse**](GameCenterGroupGameCenterDetailsLinkagesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## gameCenterGroupsGameCenterLeaderboardSetsGetToManyRelated

> GameCenterLeaderboardSetsResponse gameCenterGroupsGameCenterLeaderboardSetsGetToManyRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterGroupsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'filterReferenceName': ["null"], // [String] | filter by attribute 'referenceName'
  'filterId': ["null"], // [String] | filter by id(s)
  'fieldsGameCenterLeaderboardSets': ["null"], // [String] | the fields to include for returned resources of type gameCenterLeaderboardSets
  'fieldsGameCenterDetails': ["null"], // [String] | the fields to include for returned resources of type gameCenterDetails
  'fieldsGameCenterGroups': ["null"], // [String] | the fields to include for returned resources of type gameCenterGroups
  'fieldsGameCenterLeaderboardSetLocalizations': ["null"], // [String] | the fields to include for returned resources of type gameCenterLeaderboardSetLocalizations
  'fieldsGameCenterLeaderboards': ["null"], // [String] | the fields to include for returned resources of type gameCenterLeaderboards
  'fieldsGameCenterLeaderboardSetReleases': ["null"], // [String] | the fields to include for returned resources of type gameCenterLeaderboardSetReleases
  'limit': 56, // Number | maximum resources per page
  'include': ["null"], // [String] | comma-separated list of relationships to include
  'limitLocalizations': 56, // Number | maximum number of related localizations returned (when they are included)
  'limitGameCenterLeaderboards': 56, // Number | maximum number of related gameCenterLeaderboards returned (when they are included)
  'limitReleases': 56 // Number | maximum number of related releases returned (when they are included)
};
apiInstance.gameCenterGroupsGameCenterLeaderboardSetsGetToManyRelated(id, opts, (error, data, response) => {
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
 **filterId** | [**[String]**](String.md)| filter by id(s) | [optional] 
 **fieldsGameCenterLeaderboardSets** | [**[String]**](String.md)| the fields to include for returned resources of type gameCenterLeaderboardSets | [optional] 
 **fieldsGameCenterDetails** | [**[String]**](String.md)| the fields to include for returned resources of type gameCenterDetails | [optional] 
 **fieldsGameCenterGroups** | [**[String]**](String.md)| the fields to include for returned resources of type gameCenterGroups | [optional] 
 **fieldsGameCenterLeaderboardSetLocalizations** | [**[String]**](String.md)| the fields to include for returned resources of type gameCenterLeaderboardSetLocalizations | [optional] 
 **fieldsGameCenterLeaderboards** | [**[String]**](String.md)| the fields to include for returned resources of type gameCenterLeaderboards | [optional] 
 **fieldsGameCenterLeaderboardSetReleases** | [**[String]**](String.md)| the fields to include for returned resources of type gameCenterLeaderboardSetReleases | [optional] 
 **limit** | **Number**| maximum resources per page | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 
 **limitLocalizations** | **Number**| maximum number of related localizations returned (when they are included) | [optional] 
 **limitGameCenterLeaderboards** | **Number**| maximum number of related gameCenterLeaderboards returned (when they are included) | [optional] 
 **limitReleases** | **Number**| maximum number of related releases returned (when they are included) | [optional] 

### Return type

[**GameCenterLeaderboardSetsResponse**](GameCenterLeaderboardSetsResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## gameCenterGroupsGameCenterLeaderboardSetsGetToManyRelationship

> GameCenterGroupGameCenterLeaderboardSetsLinkagesResponse gameCenterGroupsGameCenterLeaderboardSetsGetToManyRelationship(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterGroupsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'limit': 56 // Number | maximum resources per page
};
apiInstance.gameCenterGroupsGameCenterLeaderboardSetsGetToManyRelationship(id, opts, (error, data, response) => {
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

[**GameCenterGroupGameCenterLeaderboardSetsLinkagesResponse**](GameCenterGroupGameCenterLeaderboardSetsLinkagesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## gameCenterGroupsGameCenterLeaderboardSetsReplaceToManyRelationship

> gameCenterGroupsGameCenterLeaderboardSetsReplaceToManyRelationship(id, gameCenterGroupGameCenterLeaderboardSetsLinkagesRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterGroupsApi();
let id = "id_example"; // String | the id of the requested resource
let gameCenterGroupGameCenterLeaderboardSetsLinkagesRequest = new AppStoreConnectApi.GameCenterGroupGameCenterLeaderboardSetsLinkagesRequest(); // GameCenterGroupGameCenterLeaderboardSetsLinkagesRequest | List of related linkages
apiInstance.gameCenterGroupsGameCenterLeaderboardSetsReplaceToManyRelationship(id, gameCenterGroupGameCenterLeaderboardSetsLinkagesRequest, (error, data, response) => {
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
 **gameCenterGroupGameCenterLeaderboardSetsLinkagesRequest** | [**GameCenterGroupGameCenterLeaderboardSetsLinkagesRequest**](GameCenterGroupGameCenterLeaderboardSetsLinkagesRequest.md)| List of related linkages | 

### Return type

null (empty response body)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## gameCenterGroupsGameCenterLeaderboardsGetToManyRelated

> GameCenterLeaderboardsResponse gameCenterGroupsGameCenterLeaderboardsGetToManyRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterGroupsApi();
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
apiInstance.gameCenterGroupsGameCenterLeaderboardsGetToManyRelated(id, opts, (error, data, response) => {
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


## gameCenterGroupsGameCenterLeaderboardsGetToManyRelationship

> GameCenterGroupGameCenterLeaderboardsLinkagesResponse gameCenterGroupsGameCenterLeaderboardsGetToManyRelationship(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterGroupsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'limit': 56 // Number | maximum resources per page
};
apiInstance.gameCenterGroupsGameCenterLeaderboardsGetToManyRelationship(id, opts, (error, data, response) => {
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

[**GameCenterGroupGameCenterLeaderboardsLinkagesResponse**](GameCenterGroupGameCenterLeaderboardsLinkagesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## gameCenterGroupsGameCenterLeaderboardsReplaceToManyRelationship

> gameCenterGroupsGameCenterLeaderboardsReplaceToManyRelationship(id, gameCenterGroupGameCenterLeaderboardsLinkagesRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterGroupsApi();
let id = "id_example"; // String | the id of the requested resource
let gameCenterGroupGameCenterLeaderboardsLinkagesRequest = new AppStoreConnectApi.GameCenterGroupGameCenterLeaderboardsLinkagesRequest(); // GameCenterGroupGameCenterLeaderboardsLinkagesRequest | List of related linkages
apiInstance.gameCenterGroupsGameCenterLeaderboardsReplaceToManyRelationship(id, gameCenterGroupGameCenterLeaderboardsLinkagesRequest, (error, data, response) => {
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
 **gameCenterGroupGameCenterLeaderboardsLinkagesRequest** | [**GameCenterGroupGameCenterLeaderboardsLinkagesRequest**](GameCenterGroupGameCenterLeaderboardsLinkagesRequest.md)| List of related linkages | 

### Return type

null (empty response body)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## gameCenterGroupsGetCollection

> GameCenterGroupsResponse gameCenterGroupsGetCollection(opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterGroupsApi();
let opts = {
  'filterGameCenterDetails': ["null"], // [String] | filter by id(s) of related 'gameCenterDetails'
  'fieldsGameCenterGroups': ["null"], // [String] | the fields to include for returned resources of type gameCenterGroups
  'fieldsGameCenterDetails': ["null"], // [String] | the fields to include for returned resources of type gameCenterDetails
  'fieldsGameCenterLeaderboards': ["null"], // [String] | the fields to include for returned resources of type gameCenterLeaderboards
  'fieldsGameCenterLeaderboardSets': ["null"], // [String] | the fields to include for returned resources of type gameCenterLeaderboardSets
  'fieldsGameCenterAchievements': ["null"], // [String] | the fields to include for returned resources of type gameCenterAchievements
  'fieldsGameCenterActivities': ["null"], // [String] | the fields to include for returned resources of type gameCenterActivities
  'fieldsGameCenterChallenges': ["null"], // [String] | the fields to include for returned resources of type gameCenterChallenges
  'limit': 56, // Number | maximum resources per page
  'include': ["null"], // [String] | comma-separated list of relationships to include
  'limitGameCenterAchievements': 56, // Number | maximum number of related gameCenterAchievements returned (when they are included)
  'limitGameCenterActivities': 56, // Number | maximum number of related gameCenterActivities returned (when they are included)
  'limitGameCenterChallenges': 56, // Number | maximum number of related gameCenterChallenges returned (when they are included)
  'limitGameCenterDetails': 56, // Number | maximum number of related gameCenterDetails returned (when they are included)
  'limitGameCenterLeaderboardSets': 56, // Number | maximum number of related gameCenterLeaderboardSets returned (when they are included)
  'limitGameCenterLeaderboards': 56 // Number | maximum number of related gameCenterLeaderboards returned (when they are included)
};
apiInstance.gameCenterGroupsGetCollection(opts, (error, data, response) => {
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
 **filterGameCenterDetails** | [**[String]**](String.md)| filter by id(s) of related &#39;gameCenterDetails&#39; | [optional] 
 **fieldsGameCenterGroups** | [**[String]**](String.md)| the fields to include for returned resources of type gameCenterGroups | [optional] 
 **fieldsGameCenterDetails** | [**[String]**](String.md)| the fields to include for returned resources of type gameCenterDetails | [optional] 
 **fieldsGameCenterLeaderboards** | [**[String]**](String.md)| the fields to include for returned resources of type gameCenterLeaderboards | [optional] 
 **fieldsGameCenterLeaderboardSets** | [**[String]**](String.md)| the fields to include for returned resources of type gameCenterLeaderboardSets | [optional] 
 **fieldsGameCenterAchievements** | [**[String]**](String.md)| the fields to include for returned resources of type gameCenterAchievements | [optional] 
 **fieldsGameCenterActivities** | [**[String]**](String.md)| the fields to include for returned resources of type gameCenterActivities | [optional] 
 **fieldsGameCenterChallenges** | [**[String]**](String.md)| the fields to include for returned resources of type gameCenterChallenges | [optional] 
 **limit** | **Number**| maximum resources per page | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 
 **limitGameCenterAchievements** | **Number**| maximum number of related gameCenterAchievements returned (when they are included) | [optional] 
 **limitGameCenterActivities** | **Number**| maximum number of related gameCenterActivities returned (when they are included) | [optional] 
 **limitGameCenterChallenges** | **Number**| maximum number of related gameCenterChallenges returned (when they are included) | [optional] 
 **limitGameCenterDetails** | **Number**| maximum number of related gameCenterDetails returned (when they are included) | [optional] 
 **limitGameCenterLeaderboardSets** | **Number**| maximum number of related gameCenterLeaderboardSets returned (when they are included) | [optional] 
 **limitGameCenterLeaderboards** | **Number**| maximum number of related gameCenterLeaderboards returned (when they are included) | [optional] 

### Return type

[**GameCenterGroupsResponse**](GameCenterGroupsResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## gameCenterGroupsGetInstance

> GameCenterGroupResponse gameCenterGroupsGetInstance(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterGroupsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsGameCenterGroups': ["null"], // [String] | the fields to include for returned resources of type gameCenterGroups
  'fieldsGameCenterDetails': ["null"], // [String] | the fields to include for returned resources of type gameCenterDetails
  'fieldsGameCenterLeaderboards': ["null"], // [String] | the fields to include for returned resources of type gameCenterLeaderboards
  'fieldsGameCenterLeaderboardSets': ["null"], // [String] | the fields to include for returned resources of type gameCenterLeaderboardSets
  'fieldsGameCenterAchievements': ["null"], // [String] | the fields to include for returned resources of type gameCenterAchievements
  'fieldsGameCenterActivities': ["null"], // [String] | the fields to include for returned resources of type gameCenterActivities
  'fieldsGameCenterChallenges': ["null"], // [String] | the fields to include for returned resources of type gameCenterChallenges
  'include': ["null"], // [String] | comma-separated list of relationships to include
  'limitGameCenterAchievements': 56, // Number | maximum number of related gameCenterAchievements returned (when they are included)
  'limitGameCenterActivities': 56, // Number | maximum number of related gameCenterActivities returned (when they are included)
  'limitGameCenterChallenges': 56, // Number | maximum number of related gameCenterChallenges returned (when they are included)
  'limitGameCenterDetails': 56, // Number | maximum number of related gameCenterDetails returned (when they are included)
  'limitGameCenterLeaderboardSets': 56, // Number | maximum number of related gameCenterLeaderboardSets returned (when they are included)
  'limitGameCenterLeaderboards': 56 // Number | maximum number of related gameCenterLeaderboards returned (when they are included)
};
apiInstance.gameCenterGroupsGetInstance(id, opts, (error, data, response) => {
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
 **fieldsGameCenterGroups** | [**[String]**](String.md)| the fields to include for returned resources of type gameCenterGroups | [optional] 
 **fieldsGameCenterDetails** | [**[String]**](String.md)| the fields to include for returned resources of type gameCenterDetails | [optional] 
 **fieldsGameCenterLeaderboards** | [**[String]**](String.md)| the fields to include for returned resources of type gameCenterLeaderboards | [optional] 
 **fieldsGameCenterLeaderboardSets** | [**[String]**](String.md)| the fields to include for returned resources of type gameCenterLeaderboardSets | [optional] 
 **fieldsGameCenterAchievements** | [**[String]**](String.md)| the fields to include for returned resources of type gameCenterAchievements | [optional] 
 **fieldsGameCenterActivities** | [**[String]**](String.md)| the fields to include for returned resources of type gameCenterActivities | [optional] 
 **fieldsGameCenterChallenges** | [**[String]**](String.md)| the fields to include for returned resources of type gameCenterChallenges | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 
 **limitGameCenterAchievements** | **Number**| maximum number of related gameCenterAchievements returned (when they are included) | [optional] 
 **limitGameCenterActivities** | **Number**| maximum number of related gameCenterActivities returned (when they are included) | [optional] 
 **limitGameCenterChallenges** | **Number**| maximum number of related gameCenterChallenges returned (when they are included) | [optional] 
 **limitGameCenterDetails** | **Number**| maximum number of related gameCenterDetails returned (when they are included) | [optional] 
 **limitGameCenterLeaderboardSets** | **Number**| maximum number of related gameCenterLeaderboardSets returned (when they are included) | [optional] 
 **limitGameCenterLeaderboards** | **Number**| maximum number of related gameCenterLeaderboards returned (when they are included) | [optional] 

### Return type

[**GameCenterGroupResponse**](GameCenterGroupResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## gameCenterGroupsUpdateInstance

> GameCenterGroupResponse gameCenterGroupsUpdateInstance(id, gameCenterGroupUpdateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterGroupsApi();
let id = "id_example"; // String | the id of the requested resource
let gameCenterGroupUpdateRequest = new AppStoreConnectApi.GameCenterGroupUpdateRequest(); // GameCenterGroupUpdateRequest | GameCenterGroup representation
apiInstance.gameCenterGroupsUpdateInstance(id, gameCenterGroupUpdateRequest, (error, data, response) => {
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
 **gameCenterGroupUpdateRequest** | [**GameCenterGroupUpdateRequest**](GameCenterGroupUpdateRequest.md)| GameCenterGroup representation | 

### Return type

[**GameCenterGroupResponse**](GameCenterGroupResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

