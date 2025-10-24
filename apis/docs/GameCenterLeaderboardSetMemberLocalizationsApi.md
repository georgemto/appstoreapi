# AppStoreConnectApi.GameCenterLeaderboardSetMemberLocalizationsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**gameCenterLeaderboardSetMemberLocalizationsCreateInstance**](GameCenterLeaderboardSetMemberLocalizationsApi.md#gameCenterLeaderboardSetMemberLocalizationsCreateInstance) | **POST** /v1/gameCenterLeaderboardSetMemberLocalizations | 
[**gameCenterLeaderboardSetMemberLocalizationsDeleteInstance**](GameCenterLeaderboardSetMemberLocalizationsApi.md#gameCenterLeaderboardSetMemberLocalizationsDeleteInstance) | **DELETE** /v1/gameCenterLeaderboardSetMemberLocalizations/{id} | 
[**gameCenterLeaderboardSetMemberLocalizationsGameCenterLeaderboardGetToOneRelated**](GameCenterLeaderboardSetMemberLocalizationsApi.md#gameCenterLeaderboardSetMemberLocalizationsGameCenterLeaderboardGetToOneRelated) | **GET** /v1/gameCenterLeaderboardSetMemberLocalizations/{id}/gameCenterLeaderboard | 
[**gameCenterLeaderboardSetMemberLocalizationsGameCenterLeaderboardGetToOneRelationship**](GameCenterLeaderboardSetMemberLocalizationsApi.md#gameCenterLeaderboardSetMemberLocalizationsGameCenterLeaderboardGetToOneRelationship) | **GET** /v1/gameCenterLeaderboardSetMemberLocalizations/{id}/relationships/gameCenterLeaderboard | 
[**gameCenterLeaderboardSetMemberLocalizationsGameCenterLeaderboardSetGetToOneRelated**](GameCenterLeaderboardSetMemberLocalizationsApi.md#gameCenterLeaderboardSetMemberLocalizationsGameCenterLeaderboardSetGetToOneRelated) | **GET** /v1/gameCenterLeaderboardSetMemberLocalizations/{id}/gameCenterLeaderboardSet | 
[**gameCenterLeaderboardSetMemberLocalizationsGameCenterLeaderboardSetGetToOneRelationship**](GameCenterLeaderboardSetMemberLocalizationsApi.md#gameCenterLeaderboardSetMemberLocalizationsGameCenterLeaderboardSetGetToOneRelationship) | **GET** /v1/gameCenterLeaderboardSetMemberLocalizations/{id}/relationships/gameCenterLeaderboardSet | 
[**gameCenterLeaderboardSetMemberLocalizationsGetCollection**](GameCenterLeaderboardSetMemberLocalizationsApi.md#gameCenterLeaderboardSetMemberLocalizationsGetCollection) | **GET** /v1/gameCenterLeaderboardSetMemberLocalizations | 
[**gameCenterLeaderboardSetMemberLocalizationsUpdateInstance**](GameCenterLeaderboardSetMemberLocalizationsApi.md#gameCenterLeaderboardSetMemberLocalizationsUpdateInstance) | **PATCH** /v1/gameCenterLeaderboardSetMemberLocalizations/{id} | 



## gameCenterLeaderboardSetMemberLocalizationsCreateInstance

> GameCenterLeaderboardSetMemberLocalizationResponse gameCenterLeaderboardSetMemberLocalizationsCreateInstance(gameCenterLeaderboardSetMemberLocalizationCreateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterLeaderboardSetMemberLocalizationsApi();
let gameCenterLeaderboardSetMemberLocalizationCreateRequest = new AppStoreConnectApi.GameCenterLeaderboardSetMemberLocalizationCreateRequest(); // GameCenterLeaderboardSetMemberLocalizationCreateRequest | GameCenterLeaderboardSetMemberLocalization representation
apiInstance.gameCenterLeaderboardSetMemberLocalizationsCreateInstance(gameCenterLeaderboardSetMemberLocalizationCreateRequest, (error, data, response) => {
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
 **gameCenterLeaderboardSetMemberLocalizationCreateRequest** | [**GameCenterLeaderboardSetMemberLocalizationCreateRequest**](GameCenterLeaderboardSetMemberLocalizationCreateRequest.md)| GameCenterLeaderboardSetMemberLocalization representation | 

### Return type

[**GameCenterLeaderboardSetMemberLocalizationResponse**](GameCenterLeaderboardSetMemberLocalizationResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## gameCenterLeaderboardSetMemberLocalizationsDeleteInstance

> gameCenterLeaderboardSetMemberLocalizationsDeleteInstance(id)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterLeaderboardSetMemberLocalizationsApi();
let id = "id_example"; // String | the id of the requested resource
apiInstance.gameCenterLeaderboardSetMemberLocalizationsDeleteInstance(id, (error, data, response) => {
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


## gameCenterLeaderboardSetMemberLocalizationsGameCenterLeaderboardGetToOneRelated

> GameCenterLeaderboardResponse gameCenterLeaderboardSetMemberLocalizationsGameCenterLeaderboardGetToOneRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterLeaderboardSetMemberLocalizationsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsGameCenterLeaderboards': ["null"], // [String] | the fields to include for returned resources of type gameCenterLeaderboards
  'fieldsGameCenterDetails': ["null"], // [String] | the fields to include for returned resources of type gameCenterDetails
  'fieldsGameCenterGroups': ["null"], // [String] | the fields to include for returned resources of type gameCenterGroups
  'fieldsGameCenterLeaderboardSets': ["null"], // [String] | the fields to include for returned resources of type gameCenterLeaderboardSets
  'fieldsGameCenterLeaderboardLocalizations': ["null"], // [String] | the fields to include for returned resources of type gameCenterLeaderboardLocalizations
  'fieldsGameCenterLeaderboardReleases': ["null"], // [String] | the fields to include for returned resources of type gameCenterLeaderboardReleases
  'fieldsGameCenterActivities': ["null"], // [String] | the fields to include for returned resources of type gameCenterActivities
  'fieldsGameCenterChallenges': ["null"], // [String] | the fields to include for returned resources of type gameCenterChallenges
  'include': ["null"], // [String] | comma-separated list of relationships to include
  'limitGameCenterLeaderboardSets': 56, // Number | maximum number of related gameCenterLeaderboardSets returned (when they are included)
  'limitLocalizations': 56, // Number | maximum number of related localizations returned (when they are included)
  'limitReleases': 56 // Number | maximum number of related releases returned (when they are included)
};
apiInstance.gameCenterLeaderboardSetMemberLocalizationsGameCenterLeaderboardGetToOneRelated(id, opts, (error, data, response) => {
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
 **fieldsGameCenterLeaderboards** | [**[String]**](String.md)| the fields to include for returned resources of type gameCenterLeaderboards | [optional] 
 **fieldsGameCenterDetails** | [**[String]**](String.md)| the fields to include for returned resources of type gameCenterDetails | [optional] 
 **fieldsGameCenterGroups** | [**[String]**](String.md)| the fields to include for returned resources of type gameCenterGroups | [optional] 
 **fieldsGameCenterLeaderboardSets** | [**[String]**](String.md)| the fields to include for returned resources of type gameCenterLeaderboardSets | [optional] 
 **fieldsGameCenterLeaderboardLocalizations** | [**[String]**](String.md)| the fields to include for returned resources of type gameCenterLeaderboardLocalizations | [optional] 
 **fieldsGameCenterLeaderboardReleases** | [**[String]**](String.md)| the fields to include for returned resources of type gameCenterLeaderboardReleases | [optional] 
 **fieldsGameCenterActivities** | [**[String]**](String.md)| the fields to include for returned resources of type gameCenterActivities | [optional] 
 **fieldsGameCenterChallenges** | [**[String]**](String.md)| the fields to include for returned resources of type gameCenterChallenges | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 
 **limitGameCenterLeaderboardSets** | **Number**| maximum number of related gameCenterLeaderboardSets returned (when they are included) | [optional] 
 **limitLocalizations** | **Number**| maximum number of related localizations returned (when they are included) | [optional] 
 **limitReleases** | **Number**| maximum number of related releases returned (when they are included) | [optional] 

### Return type

[**GameCenterLeaderboardResponse**](GameCenterLeaderboardResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## gameCenterLeaderboardSetMemberLocalizationsGameCenterLeaderboardGetToOneRelationship

> GameCenterLeaderboardSetMemberLocalizationGameCenterLeaderboardLinkageResponse gameCenterLeaderboardSetMemberLocalizationsGameCenterLeaderboardGetToOneRelationship(id)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterLeaderboardSetMemberLocalizationsApi();
let id = "id_example"; // String | the id of the requested resource
apiInstance.gameCenterLeaderboardSetMemberLocalizationsGameCenterLeaderboardGetToOneRelationship(id, (error, data, response) => {
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

[**GameCenterLeaderboardSetMemberLocalizationGameCenterLeaderboardLinkageResponse**](GameCenterLeaderboardSetMemberLocalizationGameCenterLeaderboardLinkageResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## gameCenterLeaderboardSetMemberLocalizationsGameCenterLeaderboardSetGetToOneRelated

> GameCenterLeaderboardSetResponse gameCenterLeaderboardSetMemberLocalizationsGameCenterLeaderboardSetGetToOneRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterLeaderboardSetMemberLocalizationsApi();
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
apiInstance.gameCenterLeaderboardSetMemberLocalizationsGameCenterLeaderboardSetGetToOneRelated(id, opts, (error, data, response) => {
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


## gameCenterLeaderboardSetMemberLocalizationsGameCenterLeaderboardSetGetToOneRelationship

> GameCenterLeaderboardSetMemberLocalizationGameCenterLeaderboardSetLinkageResponse gameCenterLeaderboardSetMemberLocalizationsGameCenterLeaderboardSetGetToOneRelationship(id)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterLeaderboardSetMemberLocalizationsApi();
let id = "id_example"; // String | the id of the requested resource
apiInstance.gameCenterLeaderboardSetMemberLocalizationsGameCenterLeaderboardSetGetToOneRelationship(id, (error, data, response) => {
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

[**GameCenterLeaderboardSetMemberLocalizationGameCenterLeaderboardSetLinkageResponse**](GameCenterLeaderboardSetMemberLocalizationGameCenterLeaderboardSetLinkageResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## gameCenterLeaderboardSetMemberLocalizationsGetCollection

> GameCenterLeaderboardSetMemberLocalizationsResponse gameCenterLeaderboardSetMemberLocalizationsGetCollection(filterGameCenterLeaderboardSet, filterGameCenterLeaderboard, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterLeaderboardSetMemberLocalizationsApi();
let filterGameCenterLeaderboardSet = ["null"]; // [String] | filter by id(s) of related 'gameCenterLeaderboardSet'
let filterGameCenterLeaderboard = ["null"]; // [String] | filter by id(s) of related 'gameCenterLeaderboard'
let opts = {
  'fieldsGameCenterLeaderboardSetMemberLocalizations': ["null"], // [String] | the fields to include for returned resources of type gameCenterLeaderboardSetMemberLocalizations
  'fieldsGameCenterLeaderboardSets': ["null"], // [String] | the fields to include for returned resources of type gameCenterLeaderboardSets
  'fieldsGameCenterLeaderboards': ["null"], // [String] | the fields to include for returned resources of type gameCenterLeaderboards
  'limit': 56, // Number | maximum resources per page
  'include': ["null"] // [String] | comma-separated list of relationships to include
};
apiInstance.gameCenterLeaderboardSetMemberLocalizationsGetCollection(filterGameCenterLeaderboardSet, filterGameCenterLeaderboard, opts, (error, data, response) => {
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
 **filterGameCenterLeaderboardSet** | [**[String]**](String.md)| filter by id(s) of related &#39;gameCenterLeaderboardSet&#39; | 
 **filterGameCenterLeaderboard** | [**[String]**](String.md)| filter by id(s) of related &#39;gameCenterLeaderboard&#39; | 
 **fieldsGameCenterLeaderboardSetMemberLocalizations** | [**[String]**](String.md)| the fields to include for returned resources of type gameCenterLeaderboardSetMemberLocalizations | [optional] 
 **fieldsGameCenterLeaderboardSets** | [**[String]**](String.md)| the fields to include for returned resources of type gameCenterLeaderboardSets | [optional] 
 **fieldsGameCenterLeaderboards** | [**[String]**](String.md)| the fields to include for returned resources of type gameCenterLeaderboards | [optional] 
 **limit** | **Number**| maximum resources per page | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 

### Return type

[**GameCenterLeaderboardSetMemberLocalizationsResponse**](GameCenterLeaderboardSetMemberLocalizationsResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## gameCenterLeaderboardSetMemberLocalizationsUpdateInstance

> GameCenterLeaderboardSetMemberLocalizationResponse gameCenterLeaderboardSetMemberLocalizationsUpdateInstance(id, gameCenterLeaderboardSetMemberLocalizationUpdateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterLeaderboardSetMemberLocalizationsApi();
let id = "id_example"; // String | the id of the requested resource
let gameCenterLeaderboardSetMemberLocalizationUpdateRequest = new AppStoreConnectApi.GameCenterLeaderboardSetMemberLocalizationUpdateRequest(); // GameCenterLeaderboardSetMemberLocalizationUpdateRequest | GameCenterLeaderboardSetMemberLocalization representation
apiInstance.gameCenterLeaderboardSetMemberLocalizationsUpdateInstance(id, gameCenterLeaderboardSetMemberLocalizationUpdateRequest, (error, data, response) => {
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
 **gameCenterLeaderboardSetMemberLocalizationUpdateRequest** | [**GameCenterLeaderboardSetMemberLocalizationUpdateRequest**](GameCenterLeaderboardSetMemberLocalizationUpdateRequest.md)| GameCenterLeaderboardSetMemberLocalization representation | 

### Return type

[**GameCenterLeaderboardSetMemberLocalizationResponse**](GameCenterLeaderboardSetMemberLocalizationResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

