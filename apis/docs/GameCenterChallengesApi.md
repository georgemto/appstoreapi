# AppStoreConnectApi.GameCenterChallengesApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**gameCenterChallengesCreateInstance**](GameCenterChallengesApi.md#gameCenterChallengesCreateInstance) | **POST** /v1/gameCenterChallenges | 
[**gameCenterChallengesDeleteInstance**](GameCenterChallengesApi.md#gameCenterChallengesDeleteInstance) | **DELETE** /v1/gameCenterChallenges/{id} | 
[**gameCenterChallengesGetInstance**](GameCenterChallengesApi.md#gameCenterChallengesGetInstance) | **GET** /v1/gameCenterChallenges/{id} | 
[**gameCenterChallengesLeaderboardUpdateToOneRelationship**](GameCenterChallengesApi.md#gameCenterChallengesLeaderboardUpdateToOneRelationship) | **PATCH** /v1/gameCenterChallenges/{id}/relationships/leaderboard | 
[**gameCenterChallengesUpdateInstance**](GameCenterChallengesApi.md#gameCenterChallengesUpdateInstance) | **PATCH** /v1/gameCenterChallenges/{id} | 
[**gameCenterChallengesVersionsGetToManyRelated**](GameCenterChallengesApi.md#gameCenterChallengesVersionsGetToManyRelated) | **GET** /v1/gameCenterChallenges/{id}/versions | 
[**gameCenterChallengesVersionsGetToManyRelationship**](GameCenterChallengesApi.md#gameCenterChallengesVersionsGetToManyRelationship) | **GET** /v1/gameCenterChallenges/{id}/relationships/versions | 



## gameCenterChallengesCreateInstance

> GameCenterChallengeResponse gameCenterChallengesCreateInstance(gameCenterChallengeCreateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterChallengesApi();
let gameCenterChallengeCreateRequest = new AppStoreConnectApi.GameCenterChallengeCreateRequest(); // GameCenterChallengeCreateRequest | GameCenterChallenge representation
apiInstance.gameCenterChallengesCreateInstance(gameCenterChallengeCreateRequest, (error, data, response) => {
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
 **gameCenterChallengeCreateRequest** | [**GameCenterChallengeCreateRequest**](GameCenterChallengeCreateRequest.md)| GameCenterChallenge representation | 

### Return type

[**GameCenterChallengeResponse**](GameCenterChallengeResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## gameCenterChallengesDeleteInstance

> gameCenterChallengesDeleteInstance(id)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterChallengesApi();
let id = "id_example"; // String | the id of the requested resource
apiInstance.gameCenterChallengesDeleteInstance(id, (error, data, response) => {
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


## gameCenterChallengesGetInstance

> GameCenterChallengeResponse gameCenterChallengesGetInstance(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterChallengesApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsGameCenterChallenges': ["null"], // [String] | the fields to include for returned resources of type gameCenterChallenges
  'fieldsGameCenterChallengeVersions': ["null"], // [String] | the fields to include for returned resources of type gameCenterChallengeVersions
  'include': ["null"], // [String] | comma-separated list of relationships to include
  'limitVersions': 56 // Number | maximum number of related versions returned (when they are included)
};
apiInstance.gameCenterChallengesGetInstance(id, opts, (error, data, response) => {
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
 **fieldsGameCenterChallenges** | [**[String]**](String.md)| the fields to include for returned resources of type gameCenterChallenges | [optional] 
 **fieldsGameCenterChallengeVersions** | [**[String]**](String.md)| the fields to include for returned resources of type gameCenterChallengeVersions | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 
 **limitVersions** | **Number**| maximum number of related versions returned (when they are included) | [optional] 

### Return type

[**GameCenterChallengeResponse**](GameCenterChallengeResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## gameCenterChallengesLeaderboardUpdateToOneRelationship

> gameCenterChallengesLeaderboardUpdateToOneRelationship(id, gameCenterChallengeLeaderboardLinkageRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterChallengesApi();
let id = "id_example"; // String | the id of the requested resource
let gameCenterChallengeLeaderboardLinkageRequest = new AppStoreConnectApi.GameCenterChallengeLeaderboardLinkageRequest(); // GameCenterChallengeLeaderboardLinkageRequest | Related linkage
apiInstance.gameCenterChallengesLeaderboardUpdateToOneRelationship(id, gameCenterChallengeLeaderboardLinkageRequest, (error, data, response) => {
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
 **gameCenterChallengeLeaderboardLinkageRequest** | [**GameCenterChallengeLeaderboardLinkageRequest**](GameCenterChallengeLeaderboardLinkageRequest.md)| Related linkage | 

### Return type

null (empty response body)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## gameCenterChallengesUpdateInstance

> GameCenterChallengeResponse gameCenterChallengesUpdateInstance(id, gameCenterChallengeUpdateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterChallengesApi();
let id = "id_example"; // String | the id of the requested resource
let gameCenterChallengeUpdateRequest = new AppStoreConnectApi.GameCenterChallengeUpdateRequest(); // GameCenterChallengeUpdateRequest | GameCenterChallenge representation
apiInstance.gameCenterChallengesUpdateInstance(id, gameCenterChallengeUpdateRequest, (error, data, response) => {
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
 **gameCenterChallengeUpdateRequest** | [**GameCenterChallengeUpdateRequest**](GameCenterChallengeUpdateRequest.md)| GameCenterChallenge representation | 

### Return type

[**GameCenterChallengeResponse**](GameCenterChallengeResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## gameCenterChallengesVersionsGetToManyRelated

> GameCenterChallengeVersionsResponse gameCenterChallengesVersionsGetToManyRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterChallengesApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsGameCenterChallengeVersions': ["null"], // [String] | the fields to include for returned resources of type gameCenterChallengeVersions
  'fieldsGameCenterChallenges': ["null"], // [String] | the fields to include for returned resources of type gameCenterChallenges
  'fieldsGameCenterChallengeLocalizations': ["null"], // [String] | the fields to include for returned resources of type gameCenterChallengeLocalizations
  'fieldsGameCenterChallengeVersionReleases': ["null"], // [String] | the fields to include for returned resources of type gameCenterChallengeVersionReleases
  'fieldsGameCenterChallengeImages': ["null"], // [String] | the fields to include for returned resources of type gameCenterChallengeImages
  'limit': 56, // Number | maximum resources per page
  'include': ["null"], // [String] | comma-separated list of relationships to include
  'limitLocalizations': 56, // Number | maximum number of related localizations returned (when they are included)
  'limitReleases': 56 // Number | maximum number of related releases returned (when they are included)
};
apiInstance.gameCenterChallengesVersionsGetToManyRelated(id, opts, (error, data, response) => {
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
 **fieldsGameCenterChallenges** | [**[String]**](String.md)| the fields to include for returned resources of type gameCenterChallenges | [optional] 
 **fieldsGameCenterChallengeLocalizations** | [**[String]**](String.md)| the fields to include for returned resources of type gameCenterChallengeLocalizations | [optional] 
 **fieldsGameCenterChallengeVersionReleases** | [**[String]**](String.md)| the fields to include for returned resources of type gameCenterChallengeVersionReleases | [optional] 
 **fieldsGameCenterChallengeImages** | [**[String]**](String.md)| the fields to include for returned resources of type gameCenterChallengeImages | [optional] 
 **limit** | **Number**| maximum resources per page | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 
 **limitLocalizations** | **Number**| maximum number of related localizations returned (when they are included) | [optional] 
 **limitReleases** | **Number**| maximum number of related releases returned (when they are included) | [optional] 

### Return type

[**GameCenterChallengeVersionsResponse**](GameCenterChallengeVersionsResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## gameCenterChallengesVersionsGetToManyRelationship

> GameCenterChallengeVersionsLinkagesResponse gameCenterChallengesVersionsGetToManyRelationship(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterChallengesApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'limit': 56 // Number | maximum resources per page
};
apiInstance.gameCenterChallengesVersionsGetToManyRelationship(id, opts, (error, data, response) => {
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

[**GameCenterChallengeVersionsLinkagesResponse**](GameCenterChallengeVersionsLinkagesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

