# AppStoreConnectApi.GameCenterChallengeImagesApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**gameCenterChallengeImagesCreateInstance**](GameCenterChallengeImagesApi.md#gameCenterChallengeImagesCreateInstance) | **POST** /v1/gameCenterChallengeImages | 
[**gameCenterChallengeImagesDeleteInstance**](GameCenterChallengeImagesApi.md#gameCenterChallengeImagesDeleteInstance) | **DELETE** /v1/gameCenterChallengeImages/{id} | 
[**gameCenterChallengeImagesGetInstance**](GameCenterChallengeImagesApi.md#gameCenterChallengeImagesGetInstance) | **GET** /v1/gameCenterChallengeImages/{id} | 
[**gameCenterChallengeImagesUpdateInstance**](GameCenterChallengeImagesApi.md#gameCenterChallengeImagesUpdateInstance) | **PATCH** /v1/gameCenterChallengeImages/{id} | 



## gameCenterChallengeImagesCreateInstance

> GameCenterChallengeImageResponse gameCenterChallengeImagesCreateInstance(gameCenterChallengeImageCreateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterChallengeImagesApi();
let gameCenterChallengeImageCreateRequest = new AppStoreConnectApi.GameCenterChallengeImageCreateRequest(); // GameCenterChallengeImageCreateRequest | GameCenterChallengeImage representation
apiInstance.gameCenterChallengeImagesCreateInstance(gameCenterChallengeImageCreateRequest, (error, data, response) => {
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
 **gameCenterChallengeImageCreateRequest** | [**GameCenterChallengeImageCreateRequest**](GameCenterChallengeImageCreateRequest.md)| GameCenterChallengeImage representation | 

### Return type

[**GameCenterChallengeImageResponse**](GameCenterChallengeImageResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## gameCenterChallengeImagesDeleteInstance

> gameCenterChallengeImagesDeleteInstance(id)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterChallengeImagesApi();
let id = "id_example"; // String | the id of the requested resource
apiInstance.gameCenterChallengeImagesDeleteInstance(id, (error, data, response) => {
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


## gameCenterChallengeImagesGetInstance

> GameCenterChallengeImageResponse gameCenterChallengeImagesGetInstance(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterChallengeImagesApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsGameCenterChallengeImages': ["null"] // [String] | the fields to include for returned resources of type gameCenterChallengeImages
};
apiInstance.gameCenterChallengeImagesGetInstance(id, opts, (error, data, response) => {
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


## gameCenterChallengeImagesUpdateInstance

> GameCenterChallengeImageResponse gameCenterChallengeImagesUpdateInstance(id, gameCenterChallengeImageUpdateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterChallengeImagesApi();
let id = "id_example"; // String | the id of the requested resource
let gameCenterChallengeImageUpdateRequest = new AppStoreConnectApi.GameCenterChallengeImageUpdateRequest(); // GameCenterChallengeImageUpdateRequest | GameCenterChallengeImage representation
apiInstance.gameCenterChallengeImagesUpdateInstance(id, gameCenterChallengeImageUpdateRequest, (error, data, response) => {
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
 **gameCenterChallengeImageUpdateRequest** | [**GameCenterChallengeImageUpdateRequest**](GameCenterChallengeImageUpdateRequest.md)| GameCenterChallengeImage representation | 

### Return type

[**GameCenterChallengeImageResponse**](GameCenterChallengeImageResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

