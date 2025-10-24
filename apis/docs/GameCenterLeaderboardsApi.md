# AppStoreConnectApi.GameCenterLeaderboardsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**gameCenterLeaderboardsActivityUpdateToOneRelationship**](GameCenterLeaderboardsApi.md#gameCenterLeaderboardsActivityUpdateToOneRelationship) | **PATCH** /v1/gameCenterLeaderboards/{id}/relationships/activity | 
[**gameCenterLeaderboardsChallengeUpdateToOneRelationship**](GameCenterLeaderboardsApi.md#gameCenterLeaderboardsChallengeUpdateToOneRelationship) | **PATCH** /v1/gameCenterLeaderboards/{id}/relationships/challenge | 
[**gameCenterLeaderboardsCreateInstance**](GameCenterLeaderboardsApi.md#gameCenterLeaderboardsCreateInstance) | **POST** /v1/gameCenterLeaderboards | 
[**gameCenterLeaderboardsDeleteInstance**](GameCenterLeaderboardsApi.md#gameCenterLeaderboardsDeleteInstance) | **DELETE** /v1/gameCenterLeaderboards/{id} | 
[**gameCenterLeaderboardsGetInstance**](GameCenterLeaderboardsApi.md#gameCenterLeaderboardsGetInstance) | **GET** /v1/gameCenterLeaderboards/{id} | 
[**gameCenterLeaderboardsGroupLeaderboardGetToOneRelated**](GameCenterLeaderboardsApi.md#gameCenterLeaderboardsGroupLeaderboardGetToOneRelated) | **GET** /v1/gameCenterLeaderboards/{id}/groupLeaderboard | 
[**gameCenterLeaderboardsGroupLeaderboardGetToOneRelationship**](GameCenterLeaderboardsApi.md#gameCenterLeaderboardsGroupLeaderboardGetToOneRelationship) | **GET** /v1/gameCenterLeaderboards/{id}/relationships/groupLeaderboard | 
[**gameCenterLeaderboardsGroupLeaderboardUpdateToOneRelationship**](GameCenterLeaderboardsApi.md#gameCenterLeaderboardsGroupLeaderboardUpdateToOneRelationship) | **PATCH** /v1/gameCenterLeaderboards/{id}/relationships/groupLeaderboard | 
[**gameCenterLeaderboardsLocalizationsGetToManyRelated**](GameCenterLeaderboardsApi.md#gameCenterLeaderboardsLocalizationsGetToManyRelated) | **GET** /v1/gameCenterLeaderboards/{id}/localizations | 
[**gameCenterLeaderboardsLocalizationsGetToManyRelationship**](GameCenterLeaderboardsApi.md#gameCenterLeaderboardsLocalizationsGetToManyRelationship) | **GET** /v1/gameCenterLeaderboards/{id}/relationships/localizations | 
[**gameCenterLeaderboardsReleasesGetToManyRelated**](GameCenterLeaderboardsApi.md#gameCenterLeaderboardsReleasesGetToManyRelated) | **GET** /v1/gameCenterLeaderboards/{id}/releases | 
[**gameCenterLeaderboardsReleasesGetToManyRelationship**](GameCenterLeaderboardsApi.md#gameCenterLeaderboardsReleasesGetToManyRelationship) | **GET** /v1/gameCenterLeaderboards/{id}/relationships/releases | 
[**gameCenterLeaderboardsUpdateInstance**](GameCenterLeaderboardsApi.md#gameCenterLeaderboardsUpdateInstance) | **PATCH** /v1/gameCenterLeaderboards/{id} | 



## gameCenterLeaderboardsActivityUpdateToOneRelationship

> gameCenterLeaderboardsActivityUpdateToOneRelationship(id, gameCenterLeaderboardActivityLinkageRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterLeaderboardsApi();
let id = "id_example"; // String | the id of the requested resource
let gameCenterLeaderboardActivityLinkageRequest = new AppStoreConnectApi.GameCenterLeaderboardActivityLinkageRequest(); // GameCenterLeaderboardActivityLinkageRequest | Related linkage
apiInstance.gameCenterLeaderboardsActivityUpdateToOneRelationship(id, gameCenterLeaderboardActivityLinkageRequest, (error, data, response) => {
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
 **gameCenterLeaderboardActivityLinkageRequest** | [**GameCenterLeaderboardActivityLinkageRequest**](GameCenterLeaderboardActivityLinkageRequest.md)| Related linkage | 

### Return type

null (empty response body)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## gameCenterLeaderboardsChallengeUpdateToOneRelationship

> gameCenterLeaderboardsChallengeUpdateToOneRelationship(id, gameCenterLeaderboardChallengeLinkageRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterLeaderboardsApi();
let id = "id_example"; // String | the id of the requested resource
let gameCenterLeaderboardChallengeLinkageRequest = new AppStoreConnectApi.GameCenterLeaderboardChallengeLinkageRequest(); // GameCenterLeaderboardChallengeLinkageRequest | Related linkage
apiInstance.gameCenterLeaderboardsChallengeUpdateToOneRelationship(id, gameCenterLeaderboardChallengeLinkageRequest, (error, data, response) => {
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
 **gameCenterLeaderboardChallengeLinkageRequest** | [**GameCenterLeaderboardChallengeLinkageRequest**](GameCenterLeaderboardChallengeLinkageRequest.md)| Related linkage | 

### Return type

null (empty response body)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## gameCenterLeaderboardsCreateInstance

> GameCenterLeaderboardResponse gameCenterLeaderboardsCreateInstance(gameCenterLeaderboardCreateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterLeaderboardsApi();
let gameCenterLeaderboardCreateRequest = new AppStoreConnectApi.GameCenterLeaderboardCreateRequest(); // GameCenterLeaderboardCreateRequest | GameCenterLeaderboard representation
apiInstance.gameCenterLeaderboardsCreateInstance(gameCenterLeaderboardCreateRequest, (error, data, response) => {
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
 **gameCenterLeaderboardCreateRequest** | [**GameCenterLeaderboardCreateRequest**](GameCenterLeaderboardCreateRequest.md)| GameCenterLeaderboard representation | 

### Return type

[**GameCenterLeaderboardResponse**](GameCenterLeaderboardResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## gameCenterLeaderboardsDeleteInstance

> gameCenterLeaderboardsDeleteInstance(id)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterLeaderboardsApi();
let id = "id_example"; // String | the id of the requested resource
apiInstance.gameCenterLeaderboardsDeleteInstance(id, (error, data, response) => {
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


## gameCenterLeaderboardsGetInstance

> GameCenterLeaderboardResponse gameCenterLeaderboardsGetInstance(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterLeaderboardsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsGameCenterLeaderboards': ["null"], // [String] | the fields to include for returned resources of type gameCenterLeaderboards
  'fieldsGameCenterLeaderboardLocalizations': ["null"], // [String] | the fields to include for returned resources of type gameCenterLeaderboardLocalizations
  'fieldsGameCenterLeaderboardReleases': ["null"], // [String] | the fields to include for returned resources of type gameCenterLeaderboardReleases
  'include': ["null"], // [String] | comma-separated list of relationships to include
  'limitGameCenterLeaderboardSets': 56, // Number | maximum number of related gameCenterLeaderboardSets returned (when they are included)
  'limitLocalizations': 56, // Number | maximum number of related localizations returned (when they are included)
  'limitReleases': 56 // Number | maximum number of related releases returned (when they are included)
};
apiInstance.gameCenterLeaderboardsGetInstance(id, opts, (error, data, response) => {
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
 **fieldsGameCenterLeaderboardLocalizations** | [**[String]**](String.md)| the fields to include for returned resources of type gameCenterLeaderboardLocalizations | [optional] 
 **fieldsGameCenterLeaderboardReleases** | [**[String]**](String.md)| the fields to include for returned resources of type gameCenterLeaderboardReleases | [optional] 
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


## gameCenterLeaderboardsGroupLeaderboardGetToOneRelated

> GameCenterLeaderboardResponse gameCenterLeaderboardsGroupLeaderboardGetToOneRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterLeaderboardsApi();
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
apiInstance.gameCenterLeaderboardsGroupLeaderboardGetToOneRelated(id, opts, (error, data, response) => {
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


## gameCenterLeaderboardsGroupLeaderboardGetToOneRelationship

> GameCenterLeaderboardGroupLeaderboardLinkageResponse gameCenterLeaderboardsGroupLeaderboardGetToOneRelationship(id)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterLeaderboardsApi();
let id = "id_example"; // String | the id of the requested resource
apiInstance.gameCenterLeaderboardsGroupLeaderboardGetToOneRelationship(id, (error, data, response) => {
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

[**GameCenterLeaderboardGroupLeaderboardLinkageResponse**](GameCenterLeaderboardGroupLeaderboardLinkageResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## gameCenterLeaderboardsGroupLeaderboardUpdateToOneRelationship

> gameCenterLeaderboardsGroupLeaderboardUpdateToOneRelationship(id, gameCenterLeaderboardGroupLeaderboardLinkageRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterLeaderboardsApi();
let id = "id_example"; // String | the id of the requested resource
let gameCenterLeaderboardGroupLeaderboardLinkageRequest = new AppStoreConnectApi.GameCenterLeaderboardGroupLeaderboardLinkageRequest(); // GameCenterLeaderboardGroupLeaderboardLinkageRequest | Related linkage
apiInstance.gameCenterLeaderboardsGroupLeaderboardUpdateToOneRelationship(id, gameCenterLeaderboardGroupLeaderboardLinkageRequest, (error, data, response) => {
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
 **gameCenterLeaderboardGroupLeaderboardLinkageRequest** | [**GameCenterLeaderboardGroupLeaderboardLinkageRequest**](GameCenterLeaderboardGroupLeaderboardLinkageRequest.md)| Related linkage | 

### Return type

null (empty response body)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## gameCenterLeaderboardsLocalizationsGetToManyRelated

> GameCenterLeaderboardLocalizationsResponse gameCenterLeaderboardsLocalizationsGetToManyRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterLeaderboardsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsGameCenterLeaderboardLocalizations': ["null"], // [String] | the fields to include for returned resources of type gameCenterLeaderboardLocalizations
  'fieldsGameCenterLeaderboards': ["null"], // [String] | the fields to include for returned resources of type gameCenterLeaderboards
  'fieldsGameCenterLeaderboardImages': ["null"], // [String] | the fields to include for returned resources of type gameCenterLeaderboardImages
  'limit': 56, // Number | maximum resources per page
  'include': ["null"] // [String] | comma-separated list of relationships to include
};
apiInstance.gameCenterLeaderboardsLocalizationsGetToManyRelated(id, opts, (error, data, response) => {
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
 **fieldsGameCenterLeaderboardLocalizations** | [**[String]**](String.md)| the fields to include for returned resources of type gameCenterLeaderboardLocalizations | [optional] 
 **fieldsGameCenterLeaderboards** | [**[String]**](String.md)| the fields to include for returned resources of type gameCenterLeaderboards | [optional] 
 **fieldsGameCenterLeaderboardImages** | [**[String]**](String.md)| the fields to include for returned resources of type gameCenterLeaderboardImages | [optional] 
 **limit** | **Number**| maximum resources per page | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 

### Return type

[**GameCenterLeaderboardLocalizationsResponse**](GameCenterLeaderboardLocalizationsResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## gameCenterLeaderboardsLocalizationsGetToManyRelationship

> GameCenterLeaderboardLocalizationsLinkagesResponse gameCenterLeaderboardsLocalizationsGetToManyRelationship(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterLeaderboardsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'limit': 56 // Number | maximum resources per page
};
apiInstance.gameCenterLeaderboardsLocalizationsGetToManyRelationship(id, opts, (error, data, response) => {
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

[**GameCenterLeaderboardLocalizationsLinkagesResponse**](GameCenterLeaderboardLocalizationsLinkagesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## gameCenterLeaderboardsReleasesGetToManyRelated

> GameCenterLeaderboardReleasesResponse gameCenterLeaderboardsReleasesGetToManyRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterLeaderboardsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'filterLive': ["null"], // [String] | filter by attribute 'live'
  'filterGameCenterDetail': ["null"], // [String] | filter by id(s) of related 'gameCenterDetail'
  'fieldsGameCenterLeaderboardReleases': ["null"], // [String] | the fields to include for returned resources of type gameCenterLeaderboardReleases
  'fieldsGameCenterDetails': ["null"], // [String] | the fields to include for returned resources of type gameCenterDetails
  'fieldsGameCenterLeaderboards': ["null"], // [String] | the fields to include for returned resources of type gameCenterLeaderboards
  'limit': 56, // Number | maximum resources per page
  'include': ["null"] // [String] | comma-separated list of relationships to include
};
apiInstance.gameCenterLeaderboardsReleasesGetToManyRelated(id, opts, (error, data, response) => {
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
 **fieldsGameCenterLeaderboardReleases** | [**[String]**](String.md)| the fields to include for returned resources of type gameCenterLeaderboardReleases | [optional] 
 **fieldsGameCenterDetails** | [**[String]**](String.md)| the fields to include for returned resources of type gameCenterDetails | [optional] 
 **fieldsGameCenterLeaderboards** | [**[String]**](String.md)| the fields to include for returned resources of type gameCenterLeaderboards | [optional] 
 **limit** | **Number**| maximum resources per page | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 

### Return type

[**GameCenterLeaderboardReleasesResponse**](GameCenterLeaderboardReleasesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## gameCenterLeaderboardsReleasesGetToManyRelationship

> GameCenterLeaderboardReleasesLinkagesResponse gameCenterLeaderboardsReleasesGetToManyRelationship(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterLeaderboardsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'limit': 56 // Number | maximum resources per page
};
apiInstance.gameCenterLeaderboardsReleasesGetToManyRelationship(id, opts, (error, data, response) => {
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

[**GameCenterLeaderboardReleasesLinkagesResponse**](GameCenterLeaderboardReleasesLinkagesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## gameCenterLeaderboardsUpdateInstance

> GameCenterLeaderboardResponse gameCenterLeaderboardsUpdateInstance(id, gameCenterLeaderboardUpdateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterLeaderboardsApi();
let id = "id_example"; // String | the id of the requested resource
let gameCenterLeaderboardUpdateRequest = new AppStoreConnectApi.GameCenterLeaderboardUpdateRequest(); // GameCenterLeaderboardUpdateRequest | GameCenterLeaderboard representation
apiInstance.gameCenterLeaderboardsUpdateInstance(id, gameCenterLeaderboardUpdateRequest, (error, data, response) => {
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
 **gameCenterLeaderboardUpdateRequest** | [**GameCenterLeaderboardUpdateRequest**](GameCenterLeaderboardUpdateRequest.md)| GameCenterLeaderboard representation | 

### Return type

[**GameCenterLeaderboardResponse**](GameCenterLeaderboardResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

