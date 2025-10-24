# AppStoreConnectApi.BetaTesterInvitationsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**betaTesterInvitationsCreateInstance**](BetaTesterInvitationsApi.md#betaTesterInvitationsCreateInstance) | **POST** /v1/betaTesterInvitations | 



## betaTesterInvitationsCreateInstance

> BetaTesterInvitationResponse betaTesterInvitationsCreateInstance(betaTesterInvitationCreateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.BetaTesterInvitationsApi();
let betaTesterInvitationCreateRequest = new AppStoreConnectApi.BetaTesterInvitationCreateRequest(); // BetaTesterInvitationCreateRequest | BetaTesterInvitation representation
apiInstance.betaTesterInvitationsCreateInstance(betaTesterInvitationCreateRequest, (error, data, response) => {
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
 **betaTesterInvitationCreateRequest** | [**BetaTesterInvitationCreateRequest**](BetaTesterInvitationCreateRequest.md)| BetaTesterInvitation representation | 

### Return type

[**BetaTesterInvitationResponse**](BetaTesterInvitationResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

