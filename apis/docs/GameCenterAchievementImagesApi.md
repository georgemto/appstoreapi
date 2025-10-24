# AppStoreConnectApi.GameCenterAchievementImagesApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**gameCenterAchievementImagesCreateInstance**](GameCenterAchievementImagesApi.md#gameCenterAchievementImagesCreateInstance) | **POST** /v1/gameCenterAchievementImages | 
[**gameCenterAchievementImagesDeleteInstance**](GameCenterAchievementImagesApi.md#gameCenterAchievementImagesDeleteInstance) | **DELETE** /v1/gameCenterAchievementImages/{id} | 
[**gameCenterAchievementImagesGetInstance**](GameCenterAchievementImagesApi.md#gameCenterAchievementImagesGetInstance) | **GET** /v1/gameCenterAchievementImages/{id} | 
[**gameCenterAchievementImagesUpdateInstance**](GameCenterAchievementImagesApi.md#gameCenterAchievementImagesUpdateInstance) | **PATCH** /v1/gameCenterAchievementImages/{id} | 



## gameCenterAchievementImagesCreateInstance

> GameCenterAchievementImageResponse gameCenterAchievementImagesCreateInstance(gameCenterAchievementImageCreateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterAchievementImagesApi();
let gameCenterAchievementImageCreateRequest = new AppStoreConnectApi.GameCenterAchievementImageCreateRequest(); // GameCenterAchievementImageCreateRequest | GameCenterAchievementImage representation
apiInstance.gameCenterAchievementImagesCreateInstance(gameCenterAchievementImageCreateRequest, (error, data, response) => {
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
 **gameCenterAchievementImageCreateRequest** | [**GameCenterAchievementImageCreateRequest**](GameCenterAchievementImageCreateRequest.md)| GameCenterAchievementImage representation | 

### Return type

[**GameCenterAchievementImageResponse**](GameCenterAchievementImageResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## gameCenterAchievementImagesDeleteInstance

> gameCenterAchievementImagesDeleteInstance(id)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterAchievementImagesApi();
let id = "id_example"; // String | the id of the requested resource
apiInstance.gameCenterAchievementImagesDeleteInstance(id, (error, data, response) => {
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


## gameCenterAchievementImagesGetInstance

> GameCenterAchievementImageResponse gameCenterAchievementImagesGetInstance(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterAchievementImagesApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsGameCenterAchievementImages': ["null"], // [String] | the fields to include for returned resources of type gameCenterAchievementImages
  'include': ["null"] // [String] | comma-separated list of relationships to include
};
apiInstance.gameCenterAchievementImagesGetInstance(id, opts, (error, data, response) => {
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
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 

### Return type

[**GameCenterAchievementImageResponse**](GameCenterAchievementImageResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## gameCenterAchievementImagesUpdateInstance

> GameCenterAchievementImageResponse gameCenterAchievementImagesUpdateInstance(id, gameCenterAchievementImageUpdateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterAchievementImagesApi();
let id = "id_example"; // String | the id of the requested resource
let gameCenterAchievementImageUpdateRequest = new AppStoreConnectApi.GameCenterAchievementImageUpdateRequest(); // GameCenterAchievementImageUpdateRequest | GameCenterAchievementImage representation
apiInstance.gameCenterAchievementImagesUpdateInstance(id, gameCenterAchievementImageUpdateRequest, (error, data, response) => {
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
 **gameCenterAchievementImageUpdateRequest** | [**GameCenterAchievementImageUpdateRequest**](GameCenterAchievementImageUpdateRequest.md)| GameCenterAchievementImage representation | 

### Return type

[**GameCenterAchievementImageResponse**](GameCenterAchievementImageResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

