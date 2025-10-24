# AppStoreConnectApi.GameCenterLeaderboardLocalizationsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**gameCenterLeaderboardLocalizationsCreateInstance**](GameCenterLeaderboardLocalizationsApi.md#gameCenterLeaderboardLocalizationsCreateInstance) | **POST** /v1/gameCenterLeaderboardLocalizations | 
[**gameCenterLeaderboardLocalizationsDeleteInstance**](GameCenterLeaderboardLocalizationsApi.md#gameCenterLeaderboardLocalizationsDeleteInstance) | **DELETE** /v1/gameCenterLeaderboardLocalizations/{id} | 
[**gameCenterLeaderboardLocalizationsGameCenterLeaderboardImageGetToOneRelated**](GameCenterLeaderboardLocalizationsApi.md#gameCenterLeaderboardLocalizationsGameCenterLeaderboardImageGetToOneRelated) | **GET** /v1/gameCenterLeaderboardLocalizations/{id}/gameCenterLeaderboardImage | 
[**gameCenterLeaderboardLocalizationsGameCenterLeaderboardImageGetToOneRelationship**](GameCenterLeaderboardLocalizationsApi.md#gameCenterLeaderboardLocalizationsGameCenterLeaderboardImageGetToOneRelationship) | **GET** /v1/gameCenterLeaderboardLocalizations/{id}/relationships/gameCenterLeaderboardImage | 
[**gameCenterLeaderboardLocalizationsGetInstance**](GameCenterLeaderboardLocalizationsApi.md#gameCenterLeaderboardLocalizationsGetInstance) | **GET** /v1/gameCenterLeaderboardLocalizations/{id} | 
[**gameCenterLeaderboardLocalizationsUpdateInstance**](GameCenterLeaderboardLocalizationsApi.md#gameCenterLeaderboardLocalizationsUpdateInstance) | **PATCH** /v1/gameCenterLeaderboardLocalizations/{id} | 



## gameCenterLeaderboardLocalizationsCreateInstance

> GameCenterLeaderboardLocalizationResponse gameCenterLeaderboardLocalizationsCreateInstance(gameCenterLeaderboardLocalizationCreateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterLeaderboardLocalizationsApi();
let gameCenterLeaderboardLocalizationCreateRequest = new AppStoreConnectApi.GameCenterLeaderboardLocalizationCreateRequest(); // GameCenterLeaderboardLocalizationCreateRequest | GameCenterLeaderboardLocalization representation
apiInstance.gameCenterLeaderboardLocalizationsCreateInstance(gameCenterLeaderboardLocalizationCreateRequest, (error, data, response) => {
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
 **gameCenterLeaderboardLocalizationCreateRequest** | [**GameCenterLeaderboardLocalizationCreateRequest**](GameCenterLeaderboardLocalizationCreateRequest.md)| GameCenterLeaderboardLocalization representation | 

### Return type

[**GameCenterLeaderboardLocalizationResponse**](GameCenterLeaderboardLocalizationResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## gameCenterLeaderboardLocalizationsDeleteInstance

> gameCenterLeaderboardLocalizationsDeleteInstance(id)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterLeaderboardLocalizationsApi();
let id = "id_example"; // String | the id of the requested resource
apiInstance.gameCenterLeaderboardLocalizationsDeleteInstance(id, (error, data, response) => {
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


## gameCenterLeaderboardLocalizationsGameCenterLeaderboardImageGetToOneRelated

> GameCenterLeaderboardImageResponse gameCenterLeaderboardLocalizationsGameCenterLeaderboardImageGetToOneRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterLeaderboardLocalizationsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsGameCenterLeaderboardImages': ["null"], // [String] | the fields to include for returned resources of type gameCenterLeaderboardImages
  'fieldsGameCenterLeaderboardLocalizations': ["null"], // [String] | the fields to include for returned resources of type gameCenterLeaderboardLocalizations
  'include': ["null"] // [String] | comma-separated list of relationships to include
};
apiInstance.gameCenterLeaderboardLocalizationsGameCenterLeaderboardImageGetToOneRelated(id, opts, (error, data, response) => {
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
 **fieldsGameCenterLeaderboardImages** | [**[String]**](String.md)| the fields to include for returned resources of type gameCenterLeaderboardImages | [optional] 
 **fieldsGameCenterLeaderboardLocalizations** | [**[String]**](String.md)| the fields to include for returned resources of type gameCenterLeaderboardLocalizations | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 

### Return type

[**GameCenterLeaderboardImageResponse**](GameCenterLeaderboardImageResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## gameCenterLeaderboardLocalizationsGameCenterLeaderboardImageGetToOneRelationship

> GameCenterLeaderboardLocalizationGameCenterLeaderboardImageLinkageResponse gameCenterLeaderboardLocalizationsGameCenterLeaderboardImageGetToOneRelationship(id)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterLeaderboardLocalizationsApi();
let id = "id_example"; // String | the id of the requested resource
apiInstance.gameCenterLeaderboardLocalizationsGameCenterLeaderboardImageGetToOneRelationship(id, (error, data, response) => {
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

[**GameCenterLeaderboardLocalizationGameCenterLeaderboardImageLinkageResponse**](GameCenterLeaderboardLocalizationGameCenterLeaderboardImageLinkageResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## gameCenterLeaderboardLocalizationsGetInstance

> GameCenterLeaderboardLocalizationResponse gameCenterLeaderboardLocalizationsGetInstance(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterLeaderboardLocalizationsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsGameCenterLeaderboardLocalizations': ["null"], // [String] | the fields to include for returned resources of type gameCenterLeaderboardLocalizations
  'fieldsGameCenterLeaderboardImages': ["null"], // [String] | the fields to include for returned resources of type gameCenterLeaderboardImages
  'include': ["null"] // [String] | comma-separated list of relationships to include
};
apiInstance.gameCenterLeaderboardLocalizationsGetInstance(id, opts, (error, data, response) => {
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
 **fieldsGameCenterLeaderboardImages** | [**[String]**](String.md)| the fields to include for returned resources of type gameCenterLeaderboardImages | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 

### Return type

[**GameCenterLeaderboardLocalizationResponse**](GameCenterLeaderboardLocalizationResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## gameCenterLeaderboardLocalizationsUpdateInstance

> GameCenterLeaderboardLocalizationResponse gameCenterLeaderboardLocalizationsUpdateInstance(id, gameCenterLeaderboardLocalizationUpdateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterLeaderboardLocalizationsApi();
let id = "id_example"; // String | the id of the requested resource
let gameCenterLeaderboardLocalizationUpdateRequest = new AppStoreConnectApi.GameCenterLeaderboardLocalizationUpdateRequest(); // GameCenterLeaderboardLocalizationUpdateRequest | GameCenterLeaderboardLocalization representation
apiInstance.gameCenterLeaderboardLocalizationsUpdateInstance(id, gameCenterLeaderboardLocalizationUpdateRequest, (error, data, response) => {
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
 **gameCenterLeaderboardLocalizationUpdateRequest** | [**GameCenterLeaderboardLocalizationUpdateRequest**](GameCenterLeaderboardLocalizationUpdateRequest.md)| GameCenterLeaderboardLocalization representation | 

### Return type

[**GameCenterLeaderboardLocalizationResponse**](GameCenterLeaderboardLocalizationResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

