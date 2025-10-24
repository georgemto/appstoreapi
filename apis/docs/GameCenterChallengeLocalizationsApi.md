# AppStoreConnectApi.GameCenterChallengeLocalizationsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**gameCenterChallengeLocalizationsCreateInstance**](GameCenterChallengeLocalizationsApi.md#gameCenterChallengeLocalizationsCreateInstance) | **POST** /v1/gameCenterChallengeLocalizations | 
[**gameCenterChallengeLocalizationsDeleteInstance**](GameCenterChallengeLocalizationsApi.md#gameCenterChallengeLocalizationsDeleteInstance) | **DELETE** /v1/gameCenterChallengeLocalizations/{id} | 
[**gameCenterChallengeLocalizationsGetInstance**](GameCenterChallengeLocalizationsApi.md#gameCenterChallengeLocalizationsGetInstance) | **GET** /v1/gameCenterChallengeLocalizations/{id} | 
[**gameCenterChallengeLocalizationsImageGetToOneRelated**](GameCenterChallengeLocalizationsApi.md#gameCenterChallengeLocalizationsImageGetToOneRelated) | **GET** /v1/gameCenterChallengeLocalizations/{id}/image | 
[**gameCenterChallengeLocalizationsImageGetToOneRelationship**](GameCenterChallengeLocalizationsApi.md#gameCenterChallengeLocalizationsImageGetToOneRelationship) | **GET** /v1/gameCenterChallengeLocalizations/{id}/relationships/image | 
[**gameCenterChallengeLocalizationsUpdateInstance**](GameCenterChallengeLocalizationsApi.md#gameCenterChallengeLocalizationsUpdateInstance) | **PATCH** /v1/gameCenterChallengeLocalizations/{id} | 



## gameCenterChallengeLocalizationsCreateInstance

> GameCenterChallengeLocalizationResponse gameCenterChallengeLocalizationsCreateInstance(gameCenterChallengeLocalizationCreateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterChallengeLocalizationsApi();
let gameCenterChallengeLocalizationCreateRequest = new AppStoreConnectApi.GameCenterChallengeLocalizationCreateRequest(); // GameCenterChallengeLocalizationCreateRequest | GameCenterChallengeLocalization representation
apiInstance.gameCenterChallengeLocalizationsCreateInstance(gameCenterChallengeLocalizationCreateRequest, (error, data, response) => {
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
 **gameCenterChallengeLocalizationCreateRequest** | [**GameCenterChallengeLocalizationCreateRequest**](GameCenterChallengeLocalizationCreateRequest.md)| GameCenterChallengeLocalization representation | 

### Return type

[**GameCenterChallengeLocalizationResponse**](GameCenterChallengeLocalizationResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## gameCenterChallengeLocalizationsDeleteInstance

> gameCenterChallengeLocalizationsDeleteInstance(id)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterChallengeLocalizationsApi();
let id = "id_example"; // String | the id of the requested resource
apiInstance.gameCenterChallengeLocalizationsDeleteInstance(id, (error, data, response) => {
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


## gameCenterChallengeLocalizationsGetInstance

> GameCenterChallengeLocalizationResponse gameCenterChallengeLocalizationsGetInstance(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterChallengeLocalizationsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsGameCenterChallengeLocalizations': ["null"], // [String] | the fields to include for returned resources of type gameCenterChallengeLocalizations
  'fieldsGameCenterChallengeImages': ["null"], // [String] | the fields to include for returned resources of type gameCenterChallengeImages
  'include': ["null"] // [String] | comma-separated list of relationships to include
};
apiInstance.gameCenterChallengeLocalizationsGetInstance(id, opts, (error, data, response) => {
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
 **fieldsGameCenterChallengeLocalizations** | [**[String]**](String.md)| the fields to include for returned resources of type gameCenterChallengeLocalizations | [optional] 
 **fieldsGameCenterChallengeImages** | [**[String]**](String.md)| the fields to include for returned resources of type gameCenterChallengeImages | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 

### Return type

[**GameCenterChallengeLocalizationResponse**](GameCenterChallengeLocalizationResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## gameCenterChallengeLocalizationsImageGetToOneRelated

> GameCenterChallengeImageResponse gameCenterChallengeLocalizationsImageGetToOneRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterChallengeLocalizationsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsGameCenterChallengeImages': ["null"] // [String] | the fields to include for returned resources of type gameCenterChallengeImages
};
apiInstance.gameCenterChallengeLocalizationsImageGetToOneRelated(id, opts, (error, data, response) => {
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
 **fieldsGameCenterChallengeImages** | [**[String]**](String.md)| the fields to include for returned resources of type gameCenterChallengeImages | [optional] 

### Return type

[**GameCenterChallengeImageResponse**](GameCenterChallengeImageResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## gameCenterChallengeLocalizationsImageGetToOneRelationship

> GameCenterChallengeLocalizationImageLinkageResponse gameCenterChallengeLocalizationsImageGetToOneRelationship(id)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterChallengeLocalizationsApi();
let id = "id_example"; // String | the id of the requested resource
apiInstance.gameCenterChallengeLocalizationsImageGetToOneRelationship(id, (error, data, response) => {
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

[**GameCenterChallengeLocalizationImageLinkageResponse**](GameCenterChallengeLocalizationImageLinkageResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## gameCenterChallengeLocalizationsUpdateInstance

> GameCenterChallengeLocalizationResponse gameCenterChallengeLocalizationsUpdateInstance(id, gameCenterChallengeLocalizationUpdateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterChallengeLocalizationsApi();
let id = "id_example"; // String | the id of the requested resource
let gameCenterChallengeLocalizationUpdateRequest = new AppStoreConnectApi.GameCenterChallengeLocalizationUpdateRequest(); // GameCenterChallengeLocalizationUpdateRequest | GameCenterChallengeLocalization representation
apiInstance.gameCenterChallengeLocalizationsUpdateInstance(id, gameCenterChallengeLocalizationUpdateRequest, (error, data, response) => {
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
 **gameCenterChallengeLocalizationUpdateRequest** | [**GameCenterChallengeLocalizationUpdateRequest**](GameCenterChallengeLocalizationUpdateRequest.md)| GameCenterChallengeLocalization representation | 

### Return type

[**GameCenterChallengeLocalizationResponse**](GameCenterChallengeLocalizationResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

