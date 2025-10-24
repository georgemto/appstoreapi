# AppStoreConnectApi.GameCenterLeaderboardEntrySubmissionsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**gameCenterLeaderboardEntrySubmissionsCreateInstance**](GameCenterLeaderboardEntrySubmissionsApi.md#gameCenterLeaderboardEntrySubmissionsCreateInstance) | **POST** /v1/gameCenterLeaderboardEntrySubmissions | 



## gameCenterLeaderboardEntrySubmissionsCreateInstance

> GameCenterLeaderboardEntrySubmissionResponse gameCenterLeaderboardEntrySubmissionsCreateInstance(gameCenterLeaderboardEntrySubmissionCreateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterLeaderboardEntrySubmissionsApi();
let gameCenterLeaderboardEntrySubmissionCreateRequest = new AppStoreConnectApi.GameCenterLeaderboardEntrySubmissionCreateRequest(); // GameCenterLeaderboardEntrySubmissionCreateRequest | GameCenterLeaderboardEntrySubmission representation
apiInstance.gameCenterLeaderboardEntrySubmissionsCreateInstance(gameCenterLeaderboardEntrySubmissionCreateRequest, (error, data, response) => {
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
 **gameCenterLeaderboardEntrySubmissionCreateRequest** | [**GameCenterLeaderboardEntrySubmissionCreateRequest**](GameCenterLeaderboardEntrySubmissionCreateRequest.md)| GameCenterLeaderboardEntrySubmission representation | 

### Return type

[**GameCenterLeaderboardEntrySubmissionResponse**](GameCenterLeaderboardEntrySubmissionResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

