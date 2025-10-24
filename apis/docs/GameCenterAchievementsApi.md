# AppStoreConnectApi.GameCenterAchievementsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**gameCenterAchievementsActivityUpdateToOneRelationship**](GameCenterAchievementsApi.md#gameCenterAchievementsActivityUpdateToOneRelationship) | **PATCH** /v1/gameCenterAchievements/{id}/relationships/activity | 
[**gameCenterAchievementsCreateInstance**](GameCenterAchievementsApi.md#gameCenterAchievementsCreateInstance) | **POST** /v1/gameCenterAchievements | 
[**gameCenterAchievementsDeleteInstance**](GameCenterAchievementsApi.md#gameCenterAchievementsDeleteInstance) | **DELETE** /v1/gameCenterAchievements/{id} | 
[**gameCenterAchievementsGetInstance**](GameCenterAchievementsApi.md#gameCenterAchievementsGetInstance) | **GET** /v1/gameCenterAchievements/{id} | 
[**gameCenterAchievementsGroupAchievementGetToOneRelated**](GameCenterAchievementsApi.md#gameCenterAchievementsGroupAchievementGetToOneRelated) | **GET** /v1/gameCenterAchievements/{id}/groupAchievement | 
[**gameCenterAchievementsGroupAchievementGetToOneRelationship**](GameCenterAchievementsApi.md#gameCenterAchievementsGroupAchievementGetToOneRelationship) | **GET** /v1/gameCenterAchievements/{id}/relationships/groupAchievement | 
[**gameCenterAchievementsGroupAchievementUpdateToOneRelationship**](GameCenterAchievementsApi.md#gameCenterAchievementsGroupAchievementUpdateToOneRelationship) | **PATCH** /v1/gameCenterAchievements/{id}/relationships/groupAchievement | 
[**gameCenterAchievementsLocalizationsGetToManyRelated**](GameCenterAchievementsApi.md#gameCenterAchievementsLocalizationsGetToManyRelated) | **GET** /v1/gameCenterAchievements/{id}/localizations | 
[**gameCenterAchievementsLocalizationsGetToManyRelationship**](GameCenterAchievementsApi.md#gameCenterAchievementsLocalizationsGetToManyRelationship) | **GET** /v1/gameCenterAchievements/{id}/relationships/localizations | 
[**gameCenterAchievementsReleasesGetToManyRelated**](GameCenterAchievementsApi.md#gameCenterAchievementsReleasesGetToManyRelated) | **GET** /v1/gameCenterAchievements/{id}/releases | 
[**gameCenterAchievementsReleasesGetToManyRelationship**](GameCenterAchievementsApi.md#gameCenterAchievementsReleasesGetToManyRelationship) | **GET** /v1/gameCenterAchievements/{id}/relationships/releases | 
[**gameCenterAchievementsUpdateInstance**](GameCenterAchievementsApi.md#gameCenterAchievementsUpdateInstance) | **PATCH** /v1/gameCenterAchievements/{id} | 



## gameCenterAchievementsActivityUpdateToOneRelationship

> gameCenterAchievementsActivityUpdateToOneRelationship(id, gameCenterAchievementActivityLinkageRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterAchievementsApi();
let id = "id_example"; // String | the id of the requested resource
let gameCenterAchievementActivityLinkageRequest = new AppStoreConnectApi.GameCenterAchievementActivityLinkageRequest(); // GameCenterAchievementActivityLinkageRequest | Related linkage
apiInstance.gameCenterAchievementsActivityUpdateToOneRelationship(id, gameCenterAchievementActivityLinkageRequest, (error, data, response) => {
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
 **gameCenterAchievementActivityLinkageRequest** | [**GameCenterAchievementActivityLinkageRequest**](GameCenterAchievementActivityLinkageRequest.md)| Related linkage | 

### Return type

null (empty response body)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## gameCenterAchievementsCreateInstance

> GameCenterAchievementResponse gameCenterAchievementsCreateInstance(gameCenterAchievementCreateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterAchievementsApi();
let gameCenterAchievementCreateRequest = new AppStoreConnectApi.GameCenterAchievementCreateRequest(); // GameCenterAchievementCreateRequest | GameCenterAchievement representation
apiInstance.gameCenterAchievementsCreateInstance(gameCenterAchievementCreateRequest, (error, data, response) => {
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
 **gameCenterAchievementCreateRequest** | [**GameCenterAchievementCreateRequest**](GameCenterAchievementCreateRequest.md)| GameCenterAchievement representation | 

### Return type

[**GameCenterAchievementResponse**](GameCenterAchievementResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## gameCenterAchievementsDeleteInstance

> gameCenterAchievementsDeleteInstance(id)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterAchievementsApi();
let id = "id_example"; // String | the id of the requested resource
apiInstance.gameCenterAchievementsDeleteInstance(id, (error, data, response) => {
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


## gameCenterAchievementsGetInstance

> GameCenterAchievementResponse gameCenterAchievementsGetInstance(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterAchievementsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsGameCenterAchievements': ["null"], // [String] | the fields to include for returned resources of type gameCenterAchievements
  'fieldsGameCenterAchievementLocalizations': ["null"], // [String] | the fields to include for returned resources of type gameCenterAchievementLocalizations
  'fieldsGameCenterAchievementReleases': ["null"], // [String] | the fields to include for returned resources of type gameCenterAchievementReleases
  'include': ["null"], // [String] | comma-separated list of relationships to include
  'limitLocalizations': 56, // Number | maximum number of related localizations returned (when they are included)
  'limitReleases': 56 // Number | maximum number of related releases returned (when they are included)
};
apiInstance.gameCenterAchievementsGetInstance(id, opts, (error, data, response) => {
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
 **fieldsGameCenterAchievements** | [**[String]**](String.md)| the fields to include for returned resources of type gameCenterAchievements | [optional] 
 **fieldsGameCenterAchievementLocalizations** | [**[String]**](String.md)| the fields to include for returned resources of type gameCenterAchievementLocalizations | [optional] 
 **fieldsGameCenterAchievementReleases** | [**[String]**](String.md)| the fields to include for returned resources of type gameCenterAchievementReleases | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 
 **limitLocalizations** | **Number**| maximum number of related localizations returned (when they are included) | [optional] 
 **limitReleases** | **Number**| maximum number of related releases returned (when they are included) | [optional] 

### Return type

[**GameCenterAchievementResponse**](GameCenterAchievementResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## gameCenterAchievementsGroupAchievementGetToOneRelated

> GameCenterAchievementResponse gameCenterAchievementsGroupAchievementGetToOneRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterAchievementsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsGameCenterAchievements': ["null"], // [String] | the fields to include for returned resources of type gameCenterAchievements
  'fieldsGameCenterDetails': ["null"], // [String] | the fields to include for returned resources of type gameCenterDetails
  'fieldsGameCenterGroups': ["null"], // [String] | the fields to include for returned resources of type gameCenterGroups
  'fieldsGameCenterAchievementLocalizations': ["null"], // [String] | the fields to include for returned resources of type gameCenterAchievementLocalizations
  'fieldsGameCenterAchievementReleases': ["null"], // [String] | the fields to include for returned resources of type gameCenterAchievementReleases
  'fieldsGameCenterActivities': ["null"], // [String] | the fields to include for returned resources of type gameCenterActivities
  'include': ["null"], // [String] | comma-separated list of relationships to include
  'limitLocalizations': 56, // Number | maximum number of related localizations returned (when they are included)
  'limitReleases': 56 // Number | maximum number of related releases returned (when they are included)
};
apiInstance.gameCenterAchievementsGroupAchievementGetToOneRelated(id, opts, (error, data, response) => {
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
 **fieldsGameCenterAchievements** | [**[String]**](String.md)| the fields to include for returned resources of type gameCenterAchievements | [optional] 
 **fieldsGameCenterDetails** | [**[String]**](String.md)| the fields to include for returned resources of type gameCenterDetails | [optional] 
 **fieldsGameCenterGroups** | [**[String]**](String.md)| the fields to include for returned resources of type gameCenterGroups | [optional] 
 **fieldsGameCenterAchievementLocalizations** | [**[String]**](String.md)| the fields to include for returned resources of type gameCenterAchievementLocalizations | [optional] 
 **fieldsGameCenterAchievementReleases** | [**[String]**](String.md)| the fields to include for returned resources of type gameCenterAchievementReleases | [optional] 
 **fieldsGameCenterActivities** | [**[String]**](String.md)| the fields to include for returned resources of type gameCenterActivities | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 
 **limitLocalizations** | **Number**| maximum number of related localizations returned (when they are included) | [optional] 
 **limitReleases** | **Number**| maximum number of related releases returned (when they are included) | [optional] 

### Return type

[**GameCenterAchievementResponse**](GameCenterAchievementResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## gameCenterAchievementsGroupAchievementGetToOneRelationship

> GameCenterAchievementGroupAchievementLinkageResponse gameCenterAchievementsGroupAchievementGetToOneRelationship(id)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterAchievementsApi();
let id = "id_example"; // String | the id of the requested resource
apiInstance.gameCenterAchievementsGroupAchievementGetToOneRelationship(id, (error, data, response) => {
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

[**GameCenterAchievementGroupAchievementLinkageResponse**](GameCenterAchievementGroupAchievementLinkageResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## gameCenterAchievementsGroupAchievementUpdateToOneRelationship

> gameCenterAchievementsGroupAchievementUpdateToOneRelationship(id, gameCenterAchievementGroupAchievementLinkageRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterAchievementsApi();
let id = "id_example"; // String | the id of the requested resource
let gameCenterAchievementGroupAchievementLinkageRequest = new AppStoreConnectApi.GameCenterAchievementGroupAchievementLinkageRequest(); // GameCenterAchievementGroupAchievementLinkageRequest | Related linkage
apiInstance.gameCenterAchievementsGroupAchievementUpdateToOneRelationship(id, gameCenterAchievementGroupAchievementLinkageRequest, (error, data, response) => {
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
 **gameCenterAchievementGroupAchievementLinkageRequest** | [**GameCenterAchievementGroupAchievementLinkageRequest**](GameCenterAchievementGroupAchievementLinkageRequest.md)| Related linkage | 

### Return type

null (empty response body)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## gameCenterAchievementsLocalizationsGetToManyRelated

> GameCenterAchievementLocalizationsResponse gameCenterAchievementsLocalizationsGetToManyRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterAchievementsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsGameCenterAchievementLocalizations': ["null"], // [String] | the fields to include for returned resources of type gameCenterAchievementLocalizations
  'fieldsGameCenterAchievements': ["null"], // [String] | the fields to include for returned resources of type gameCenterAchievements
  'fieldsGameCenterAchievementImages': ["null"], // [String] | the fields to include for returned resources of type gameCenterAchievementImages
  'limit': 56, // Number | maximum resources per page
  'include': ["null"] // [String] | comma-separated list of relationships to include
};
apiInstance.gameCenterAchievementsLocalizationsGetToManyRelated(id, opts, (error, data, response) => {
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
 **fieldsGameCenterAchievementLocalizations** | [**[String]**](String.md)| the fields to include for returned resources of type gameCenterAchievementLocalizations | [optional] 
 **fieldsGameCenterAchievements** | [**[String]**](String.md)| the fields to include for returned resources of type gameCenterAchievements | [optional] 
 **fieldsGameCenterAchievementImages** | [**[String]**](String.md)| the fields to include for returned resources of type gameCenterAchievementImages | [optional] 
 **limit** | **Number**| maximum resources per page | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 

### Return type

[**GameCenterAchievementLocalizationsResponse**](GameCenterAchievementLocalizationsResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## gameCenterAchievementsLocalizationsGetToManyRelationship

> GameCenterAchievementLocalizationsLinkagesResponse gameCenterAchievementsLocalizationsGetToManyRelationship(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterAchievementsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'limit': 56 // Number | maximum resources per page
};
apiInstance.gameCenterAchievementsLocalizationsGetToManyRelationship(id, opts, (error, data, response) => {
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

[**GameCenterAchievementLocalizationsLinkagesResponse**](GameCenterAchievementLocalizationsLinkagesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## gameCenterAchievementsReleasesGetToManyRelated

> GameCenterAchievementReleasesResponse gameCenterAchievementsReleasesGetToManyRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterAchievementsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'filterLive': ["null"], // [String] | filter by attribute 'live'
  'filterGameCenterDetail': ["null"], // [String] | filter by id(s) of related 'gameCenterDetail'
  'fieldsGameCenterAchievementReleases': ["null"], // [String] | the fields to include for returned resources of type gameCenterAchievementReleases
  'fieldsGameCenterDetails': ["null"], // [String] | the fields to include for returned resources of type gameCenterDetails
  'fieldsGameCenterAchievements': ["null"], // [String] | the fields to include for returned resources of type gameCenterAchievements
  'limit': 56, // Number | maximum resources per page
  'include': ["null"] // [String] | comma-separated list of relationships to include
};
apiInstance.gameCenterAchievementsReleasesGetToManyRelated(id, opts, (error, data, response) => {
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
 **fieldsGameCenterAchievementReleases** | [**[String]**](String.md)| the fields to include for returned resources of type gameCenterAchievementReleases | [optional] 
 **fieldsGameCenterDetails** | [**[String]**](String.md)| the fields to include for returned resources of type gameCenterDetails | [optional] 
 **fieldsGameCenterAchievements** | [**[String]**](String.md)| the fields to include for returned resources of type gameCenterAchievements | [optional] 
 **limit** | **Number**| maximum resources per page | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 

### Return type

[**GameCenterAchievementReleasesResponse**](GameCenterAchievementReleasesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## gameCenterAchievementsReleasesGetToManyRelationship

> GameCenterAchievementReleasesLinkagesResponse gameCenterAchievementsReleasesGetToManyRelationship(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterAchievementsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'limit': 56 // Number | maximum resources per page
};
apiInstance.gameCenterAchievementsReleasesGetToManyRelationship(id, opts, (error, data, response) => {
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

[**GameCenterAchievementReleasesLinkagesResponse**](GameCenterAchievementReleasesLinkagesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## gameCenterAchievementsUpdateInstance

> GameCenterAchievementResponse gameCenterAchievementsUpdateInstance(id, gameCenterAchievementUpdateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterAchievementsApi();
let id = "id_example"; // String | the id of the requested resource
let gameCenterAchievementUpdateRequest = new AppStoreConnectApi.GameCenterAchievementUpdateRequest(); // GameCenterAchievementUpdateRequest | GameCenterAchievement representation
apiInstance.gameCenterAchievementsUpdateInstance(id, gameCenterAchievementUpdateRequest, (error, data, response) => {
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
 **gameCenterAchievementUpdateRequest** | [**GameCenterAchievementUpdateRequest**](GameCenterAchievementUpdateRequest.md)| GameCenterAchievement representation | 

### Return type

[**GameCenterAchievementResponse**](GameCenterAchievementResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

