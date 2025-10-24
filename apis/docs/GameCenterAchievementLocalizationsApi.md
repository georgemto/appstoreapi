# AppStoreConnectApi.GameCenterAchievementLocalizationsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**gameCenterAchievementLocalizationsCreateInstance**](GameCenterAchievementLocalizationsApi.md#gameCenterAchievementLocalizationsCreateInstance) | **POST** /v1/gameCenterAchievementLocalizations | 
[**gameCenterAchievementLocalizationsDeleteInstance**](GameCenterAchievementLocalizationsApi.md#gameCenterAchievementLocalizationsDeleteInstance) | **DELETE** /v1/gameCenterAchievementLocalizations/{id} | 
[**gameCenterAchievementLocalizationsGameCenterAchievementGetToOneRelated**](GameCenterAchievementLocalizationsApi.md#gameCenterAchievementLocalizationsGameCenterAchievementGetToOneRelated) | **GET** /v1/gameCenterAchievementLocalizations/{id}/gameCenterAchievement | 
[**gameCenterAchievementLocalizationsGameCenterAchievementGetToOneRelationship**](GameCenterAchievementLocalizationsApi.md#gameCenterAchievementLocalizationsGameCenterAchievementGetToOneRelationship) | **GET** /v1/gameCenterAchievementLocalizations/{id}/relationships/gameCenterAchievement | 
[**gameCenterAchievementLocalizationsGameCenterAchievementImageGetToOneRelated**](GameCenterAchievementLocalizationsApi.md#gameCenterAchievementLocalizationsGameCenterAchievementImageGetToOneRelated) | **GET** /v1/gameCenterAchievementLocalizations/{id}/gameCenterAchievementImage | 
[**gameCenterAchievementLocalizationsGameCenterAchievementImageGetToOneRelationship**](GameCenterAchievementLocalizationsApi.md#gameCenterAchievementLocalizationsGameCenterAchievementImageGetToOneRelationship) | **GET** /v1/gameCenterAchievementLocalizations/{id}/relationships/gameCenterAchievementImage | 
[**gameCenterAchievementLocalizationsGetInstance**](GameCenterAchievementLocalizationsApi.md#gameCenterAchievementLocalizationsGetInstance) | **GET** /v1/gameCenterAchievementLocalizations/{id} | 
[**gameCenterAchievementLocalizationsUpdateInstance**](GameCenterAchievementLocalizationsApi.md#gameCenterAchievementLocalizationsUpdateInstance) | **PATCH** /v1/gameCenterAchievementLocalizations/{id} | 



## gameCenterAchievementLocalizationsCreateInstance

> GameCenterAchievementLocalizationResponse gameCenterAchievementLocalizationsCreateInstance(gameCenterAchievementLocalizationCreateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterAchievementLocalizationsApi();
let gameCenterAchievementLocalizationCreateRequest = new AppStoreConnectApi.GameCenterAchievementLocalizationCreateRequest(); // GameCenterAchievementLocalizationCreateRequest | GameCenterAchievementLocalization representation
apiInstance.gameCenterAchievementLocalizationsCreateInstance(gameCenterAchievementLocalizationCreateRequest, (error, data, response) => {
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
 **gameCenterAchievementLocalizationCreateRequest** | [**GameCenterAchievementLocalizationCreateRequest**](GameCenterAchievementLocalizationCreateRequest.md)| GameCenterAchievementLocalization representation | 

### Return type

[**GameCenterAchievementLocalizationResponse**](GameCenterAchievementLocalizationResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## gameCenterAchievementLocalizationsDeleteInstance

> gameCenterAchievementLocalizationsDeleteInstance(id)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterAchievementLocalizationsApi();
let id = "id_example"; // String | the id of the requested resource
apiInstance.gameCenterAchievementLocalizationsDeleteInstance(id, (error, data, response) => {
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


## gameCenterAchievementLocalizationsGameCenterAchievementGetToOneRelated

> GameCenterAchievementResponse gameCenterAchievementLocalizationsGameCenterAchievementGetToOneRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterAchievementLocalizationsApi();
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
apiInstance.gameCenterAchievementLocalizationsGameCenterAchievementGetToOneRelated(id, opts, (error, data, response) => {
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


## gameCenterAchievementLocalizationsGameCenterAchievementGetToOneRelationship

> GameCenterAchievementLocalizationGameCenterAchievementLinkageResponse gameCenterAchievementLocalizationsGameCenterAchievementGetToOneRelationship(id)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterAchievementLocalizationsApi();
let id = "id_example"; // String | the id of the requested resource
apiInstance.gameCenterAchievementLocalizationsGameCenterAchievementGetToOneRelationship(id, (error, data, response) => {
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

[**GameCenterAchievementLocalizationGameCenterAchievementLinkageResponse**](GameCenterAchievementLocalizationGameCenterAchievementLinkageResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## gameCenterAchievementLocalizationsGameCenterAchievementImageGetToOneRelated

> GameCenterAchievementImageResponse gameCenterAchievementLocalizationsGameCenterAchievementImageGetToOneRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterAchievementLocalizationsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsGameCenterAchievementImages': ["null"], // [String] | the fields to include for returned resources of type gameCenterAchievementImages
  'fieldsGameCenterAchievementLocalizations': ["null"], // [String] | the fields to include for returned resources of type gameCenterAchievementLocalizations
  'include': ["null"] // [String] | comma-separated list of relationships to include
};
apiInstance.gameCenterAchievementLocalizationsGameCenterAchievementImageGetToOneRelated(id, opts, (error, data, response) => {
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
 **fieldsGameCenterAchievementImages** | [**[String]**](String.md)| the fields to include for returned resources of type gameCenterAchievementImages | [optional] 
 **fieldsGameCenterAchievementLocalizations** | [**[String]**](String.md)| the fields to include for returned resources of type gameCenterAchievementLocalizations | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 

### Return type

[**GameCenterAchievementImageResponse**](GameCenterAchievementImageResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## gameCenterAchievementLocalizationsGameCenterAchievementImageGetToOneRelationship

> GameCenterAchievementLocalizationGameCenterAchievementImageLinkageResponse gameCenterAchievementLocalizationsGameCenterAchievementImageGetToOneRelationship(id)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterAchievementLocalizationsApi();
let id = "id_example"; // String | the id of the requested resource
apiInstance.gameCenterAchievementLocalizationsGameCenterAchievementImageGetToOneRelationship(id, (error, data, response) => {
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

[**GameCenterAchievementLocalizationGameCenterAchievementImageLinkageResponse**](GameCenterAchievementLocalizationGameCenterAchievementImageLinkageResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## gameCenterAchievementLocalizationsGetInstance

> GameCenterAchievementLocalizationResponse gameCenterAchievementLocalizationsGetInstance(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterAchievementLocalizationsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsGameCenterAchievementLocalizations': ["null"], // [String] | the fields to include for returned resources of type gameCenterAchievementLocalizations
  'fieldsGameCenterAchievements': ["null"], // [String] | the fields to include for returned resources of type gameCenterAchievements
  'fieldsGameCenterAchievementImages': ["null"], // [String] | the fields to include for returned resources of type gameCenterAchievementImages
  'include': ["null"] // [String] | comma-separated list of relationships to include
};
apiInstance.gameCenterAchievementLocalizationsGetInstance(id, opts, (error, data, response) => {
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
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 

### Return type

[**GameCenterAchievementLocalizationResponse**](GameCenterAchievementLocalizationResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## gameCenterAchievementLocalizationsUpdateInstance

> GameCenterAchievementLocalizationResponse gameCenterAchievementLocalizationsUpdateInstance(id, gameCenterAchievementLocalizationUpdateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterAchievementLocalizationsApi();
let id = "id_example"; // String | the id of the requested resource
let gameCenterAchievementLocalizationUpdateRequest = new AppStoreConnectApi.GameCenterAchievementLocalizationUpdateRequest(); // GameCenterAchievementLocalizationUpdateRequest | GameCenterAchievementLocalization representation
apiInstance.gameCenterAchievementLocalizationsUpdateInstance(id, gameCenterAchievementLocalizationUpdateRequest, (error, data, response) => {
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
 **gameCenterAchievementLocalizationUpdateRequest** | [**GameCenterAchievementLocalizationUpdateRequest**](GameCenterAchievementLocalizationUpdateRequest.md)| GameCenterAchievementLocalization representation | 

### Return type

[**GameCenterAchievementLocalizationResponse**](GameCenterAchievementLocalizationResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

