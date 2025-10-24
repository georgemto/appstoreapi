# AppStoreConnectApi.GameCenterMatchmakingTeamsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**gameCenterMatchmakingTeamsCreateInstance**](GameCenterMatchmakingTeamsApi.md#gameCenterMatchmakingTeamsCreateInstance) | **POST** /v1/gameCenterMatchmakingTeams | 
[**gameCenterMatchmakingTeamsDeleteInstance**](GameCenterMatchmakingTeamsApi.md#gameCenterMatchmakingTeamsDeleteInstance) | **DELETE** /v1/gameCenterMatchmakingTeams/{id} | 
[**gameCenterMatchmakingTeamsUpdateInstance**](GameCenterMatchmakingTeamsApi.md#gameCenterMatchmakingTeamsUpdateInstance) | **PATCH** /v1/gameCenterMatchmakingTeams/{id} | 



## gameCenterMatchmakingTeamsCreateInstance

> GameCenterMatchmakingTeamResponse gameCenterMatchmakingTeamsCreateInstance(gameCenterMatchmakingTeamCreateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterMatchmakingTeamsApi();
let gameCenterMatchmakingTeamCreateRequest = new AppStoreConnectApi.GameCenterMatchmakingTeamCreateRequest(); // GameCenterMatchmakingTeamCreateRequest | GameCenterMatchmakingTeam representation
apiInstance.gameCenterMatchmakingTeamsCreateInstance(gameCenterMatchmakingTeamCreateRequest, (error, data, response) => {
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
 **gameCenterMatchmakingTeamCreateRequest** | [**GameCenterMatchmakingTeamCreateRequest**](GameCenterMatchmakingTeamCreateRequest.md)| GameCenterMatchmakingTeam representation | 

### Return type

[**GameCenterMatchmakingTeamResponse**](GameCenterMatchmakingTeamResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## gameCenterMatchmakingTeamsDeleteInstance

> gameCenterMatchmakingTeamsDeleteInstance(id)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterMatchmakingTeamsApi();
let id = "id_example"; // String | the id of the requested resource
apiInstance.gameCenterMatchmakingTeamsDeleteInstance(id, (error, data, response) => {
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


## gameCenterMatchmakingTeamsUpdateInstance

> GameCenterMatchmakingTeamResponse gameCenterMatchmakingTeamsUpdateInstance(id, gameCenterMatchmakingTeamUpdateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterMatchmakingTeamsApi();
let id = "id_example"; // String | the id of the requested resource
let gameCenterMatchmakingTeamUpdateRequest = new AppStoreConnectApi.GameCenterMatchmakingTeamUpdateRequest(); // GameCenterMatchmakingTeamUpdateRequest | GameCenterMatchmakingTeam representation
apiInstance.gameCenterMatchmakingTeamsUpdateInstance(id, gameCenterMatchmakingTeamUpdateRequest, (error, data, response) => {
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
 **gameCenterMatchmakingTeamUpdateRequest** | [**GameCenterMatchmakingTeamUpdateRequest**](GameCenterMatchmakingTeamUpdateRequest.md)| GameCenterMatchmakingTeam representation | 

### Return type

[**GameCenterMatchmakingTeamResponse**](GameCenterMatchmakingTeamResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

