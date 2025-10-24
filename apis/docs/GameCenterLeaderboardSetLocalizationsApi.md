# AppStoreConnectApi.GameCenterLeaderboardSetLocalizationsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**gameCenterLeaderboardSetLocalizationsCreateInstance**](GameCenterLeaderboardSetLocalizationsApi.md#gameCenterLeaderboardSetLocalizationsCreateInstance) | **POST** /v1/gameCenterLeaderboardSetLocalizations | 
[**gameCenterLeaderboardSetLocalizationsDeleteInstance**](GameCenterLeaderboardSetLocalizationsApi.md#gameCenterLeaderboardSetLocalizationsDeleteInstance) | **DELETE** /v1/gameCenterLeaderboardSetLocalizations/{id} | 
[**gameCenterLeaderboardSetLocalizationsGameCenterLeaderboardSetImageGetToOneRelated**](GameCenterLeaderboardSetLocalizationsApi.md#gameCenterLeaderboardSetLocalizationsGameCenterLeaderboardSetImageGetToOneRelated) | **GET** /v1/gameCenterLeaderboardSetLocalizations/{id}/gameCenterLeaderboardSetImage | 
[**gameCenterLeaderboardSetLocalizationsGameCenterLeaderboardSetImageGetToOneRelationship**](GameCenterLeaderboardSetLocalizationsApi.md#gameCenterLeaderboardSetLocalizationsGameCenterLeaderboardSetImageGetToOneRelationship) | **GET** /v1/gameCenterLeaderboardSetLocalizations/{id}/relationships/gameCenterLeaderboardSetImage | 
[**gameCenterLeaderboardSetLocalizationsGetInstance**](GameCenterLeaderboardSetLocalizationsApi.md#gameCenterLeaderboardSetLocalizationsGetInstance) | **GET** /v1/gameCenterLeaderboardSetLocalizations/{id} | 
[**gameCenterLeaderboardSetLocalizationsUpdateInstance**](GameCenterLeaderboardSetLocalizationsApi.md#gameCenterLeaderboardSetLocalizationsUpdateInstance) | **PATCH** /v1/gameCenterLeaderboardSetLocalizations/{id} | 



## gameCenterLeaderboardSetLocalizationsCreateInstance

> GameCenterLeaderboardSetLocalizationResponse gameCenterLeaderboardSetLocalizationsCreateInstance(gameCenterLeaderboardSetLocalizationCreateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterLeaderboardSetLocalizationsApi();
let gameCenterLeaderboardSetLocalizationCreateRequest = new AppStoreConnectApi.GameCenterLeaderboardSetLocalizationCreateRequest(); // GameCenterLeaderboardSetLocalizationCreateRequest | GameCenterLeaderboardSetLocalization representation
apiInstance.gameCenterLeaderboardSetLocalizationsCreateInstance(gameCenterLeaderboardSetLocalizationCreateRequest, (error, data, response) => {
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
 **gameCenterLeaderboardSetLocalizationCreateRequest** | [**GameCenterLeaderboardSetLocalizationCreateRequest**](GameCenterLeaderboardSetLocalizationCreateRequest.md)| GameCenterLeaderboardSetLocalization representation | 

### Return type

[**GameCenterLeaderboardSetLocalizationResponse**](GameCenterLeaderboardSetLocalizationResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## gameCenterLeaderboardSetLocalizationsDeleteInstance

> gameCenterLeaderboardSetLocalizationsDeleteInstance(id)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterLeaderboardSetLocalizationsApi();
let id = "id_example"; // String | the id of the requested resource
apiInstance.gameCenterLeaderboardSetLocalizationsDeleteInstance(id, (error, data, response) => {
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


## gameCenterLeaderboardSetLocalizationsGameCenterLeaderboardSetImageGetToOneRelated

> GameCenterLeaderboardSetImageResponse gameCenterLeaderboardSetLocalizationsGameCenterLeaderboardSetImageGetToOneRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterLeaderboardSetLocalizationsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsGameCenterLeaderboardSetImages': ["null"], // [String] | the fields to include for returned resources of type gameCenterLeaderboardSetImages
  'fieldsGameCenterLeaderboardSetLocalizations': ["null"], // [String] | the fields to include for returned resources of type gameCenterLeaderboardSetLocalizations
  'include': ["null"] // [String] | comma-separated list of relationships to include
};
apiInstance.gameCenterLeaderboardSetLocalizationsGameCenterLeaderboardSetImageGetToOneRelated(id, opts, (error, data, response) => {
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
 **fieldsGameCenterLeaderboardSetImages** | [**[String]**](String.md)| the fields to include for returned resources of type gameCenterLeaderboardSetImages | [optional] 
 **fieldsGameCenterLeaderboardSetLocalizations** | [**[String]**](String.md)| the fields to include for returned resources of type gameCenterLeaderboardSetLocalizations | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 

### Return type

[**GameCenterLeaderboardSetImageResponse**](GameCenterLeaderboardSetImageResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## gameCenterLeaderboardSetLocalizationsGameCenterLeaderboardSetImageGetToOneRelationship

> GameCenterLeaderboardSetLocalizationGameCenterLeaderboardSetImageLinkageResponse gameCenterLeaderboardSetLocalizationsGameCenterLeaderboardSetImageGetToOneRelationship(id)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterLeaderboardSetLocalizationsApi();
let id = "id_example"; // String | the id of the requested resource
apiInstance.gameCenterLeaderboardSetLocalizationsGameCenterLeaderboardSetImageGetToOneRelationship(id, (error, data, response) => {
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

[**GameCenterLeaderboardSetLocalizationGameCenterLeaderboardSetImageLinkageResponse**](GameCenterLeaderboardSetLocalizationGameCenterLeaderboardSetImageLinkageResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## gameCenterLeaderboardSetLocalizationsGetInstance

> GameCenterLeaderboardSetLocalizationResponse gameCenterLeaderboardSetLocalizationsGetInstance(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterLeaderboardSetLocalizationsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsGameCenterLeaderboardSetLocalizations': ["null"], // [String] | the fields to include for returned resources of type gameCenterLeaderboardSetLocalizations
  'fieldsGameCenterLeaderboardSetImages': ["null"], // [String] | the fields to include for returned resources of type gameCenterLeaderboardSetImages
  'include': ["null"] // [String] | comma-separated list of relationships to include
};
apiInstance.gameCenterLeaderboardSetLocalizationsGetInstance(id, opts, (error, data, response) => {
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
 **fieldsGameCenterLeaderboardSetImages** | [**[String]**](String.md)| the fields to include for returned resources of type gameCenterLeaderboardSetImages | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 

### Return type

[**GameCenterLeaderboardSetLocalizationResponse**](GameCenterLeaderboardSetLocalizationResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## gameCenterLeaderboardSetLocalizationsUpdateInstance

> GameCenterLeaderboardSetLocalizationResponse gameCenterLeaderboardSetLocalizationsUpdateInstance(id, gameCenterLeaderboardSetLocalizationUpdateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterLeaderboardSetLocalizationsApi();
let id = "id_example"; // String | the id of the requested resource
let gameCenterLeaderboardSetLocalizationUpdateRequest = new AppStoreConnectApi.GameCenterLeaderboardSetLocalizationUpdateRequest(); // GameCenterLeaderboardSetLocalizationUpdateRequest | GameCenterLeaderboardSetLocalization representation
apiInstance.gameCenterLeaderboardSetLocalizationsUpdateInstance(id, gameCenterLeaderboardSetLocalizationUpdateRequest, (error, data, response) => {
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
 **gameCenterLeaderboardSetLocalizationUpdateRequest** | [**GameCenterLeaderboardSetLocalizationUpdateRequest**](GameCenterLeaderboardSetLocalizationUpdateRequest.md)| GameCenterLeaderboardSetLocalization representation | 

### Return type

[**GameCenterLeaderboardSetLocalizationResponse**](GameCenterLeaderboardSetLocalizationResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

