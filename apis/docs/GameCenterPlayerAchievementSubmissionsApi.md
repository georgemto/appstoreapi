# AppStoreConnectApi.GameCenterPlayerAchievementSubmissionsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**gameCenterPlayerAchievementSubmissionsCreateInstance**](GameCenterPlayerAchievementSubmissionsApi.md#gameCenterPlayerAchievementSubmissionsCreateInstance) | **POST** /v1/gameCenterPlayerAchievementSubmissions | 



## gameCenterPlayerAchievementSubmissionsCreateInstance

> GameCenterPlayerAchievementSubmissionResponse gameCenterPlayerAchievementSubmissionsCreateInstance(gameCenterPlayerAchievementSubmissionCreateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterPlayerAchievementSubmissionsApi();
let gameCenterPlayerAchievementSubmissionCreateRequest = new AppStoreConnectApi.GameCenterPlayerAchievementSubmissionCreateRequest(); // GameCenterPlayerAchievementSubmissionCreateRequest | GameCenterPlayerAchievementSubmission representation
apiInstance.gameCenterPlayerAchievementSubmissionsCreateInstance(gameCenterPlayerAchievementSubmissionCreateRequest, (error, data, response) => {
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
 **gameCenterPlayerAchievementSubmissionCreateRequest** | [**GameCenterPlayerAchievementSubmissionCreateRequest**](GameCenterPlayerAchievementSubmissionCreateRequest.md)| GameCenterPlayerAchievementSubmission representation | 

### Return type

[**GameCenterPlayerAchievementSubmissionResponse**](GameCenterPlayerAchievementSubmissionResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

