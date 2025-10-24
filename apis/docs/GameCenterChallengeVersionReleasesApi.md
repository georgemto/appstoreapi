# AppStoreConnectApi.GameCenterChallengeVersionReleasesApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**gameCenterChallengeVersionReleasesCreateInstance**](GameCenterChallengeVersionReleasesApi.md#gameCenterChallengeVersionReleasesCreateInstance) | **POST** /v1/gameCenterChallengeVersionReleases | 
[**gameCenterChallengeVersionReleasesDeleteInstance**](GameCenterChallengeVersionReleasesApi.md#gameCenterChallengeVersionReleasesDeleteInstance) | **DELETE** /v1/gameCenterChallengeVersionReleases/{id} | 
[**gameCenterChallengeVersionReleasesGetInstance**](GameCenterChallengeVersionReleasesApi.md#gameCenterChallengeVersionReleasesGetInstance) | **GET** /v1/gameCenterChallengeVersionReleases/{id} | 



## gameCenterChallengeVersionReleasesCreateInstance

> GameCenterChallengeVersionReleaseResponse gameCenterChallengeVersionReleasesCreateInstance(gameCenterChallengeVersionReleaseCreateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterChallengeVersionReleasesApi();
let gameCenterChallengeVersionReleaseCreateRequest = new AppStoreConnectApi.GameCenterChallengeVersionReleaseCreateRequest(); // GameCenterChallengeVersionReleaseCreateRequest | GameCenterChallengeVersionRelease representation
apiInstance.gameCenterChallengeVersionReleasesCreateInstance(gameCenterChallengeVersionReleaseCreateRequest, (error, data, response) => {
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
 **gameCenterChallengeVersionReleaseCreateRequest** | [**GameCenterChallengeVersionReleaseCreateRequest**](GameCenterChallengeVersionReleaseCreateRequest.md)| GameCenterChallengeVersionRelease representation | 

### Return type

[**GameCenterChallengeVersionReleaseResponse**](GameCenterChallengeVersionReleaseResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## gameCenterChallengeVersionReleasesDeleteInstance

> gameCenterChallengeVersionReleasesDeleteInstance(id)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterChallengeVersionReleasesApi();
let id = "id_example"; // String | the id of the requested resource
apiInstance.gameCenterChallengeVersionReleasesDeleteInstance(id, (error, data, response) => {
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


## gameCenterChallengeVersionReleasesGetInstance

> GameCenterChallengeVersionReleaseResponse gameCenterChallengeVersionReleasesGetInstance(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterChallengeVersionReleasesApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsGameCenterChallengeVersionReleases': ["null"], // [String] | the fields to include for returned resources of type gameCenterChallengeVersionReleases
  'include': ["null"] // [String] | comma-separated list of relationships to include
};
apiInstance.gameCenterChallengeVersionReleasesGetInstance(id, opts, (error, data, response) => {
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
 **fieldsGameCenterChallengeVersionReleases** | [**[String]**](String.md)| the fields to include for returned resources of type gameCenterChallengeVersionReleases | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 

### Return type

[**GameCenterChallengeVersionReleaseResponse**](GameCenterChallengeVersionReleaseResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

