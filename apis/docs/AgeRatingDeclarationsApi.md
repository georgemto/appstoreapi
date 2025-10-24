# AppStoreConnectApi.AgeRatingDeclarationsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ageRatingDeclarationsUpdateInstance**](AgeRatingDeclarationsApi.md#ageRatingDeclarationsUpdateInstance) | **PATCH** /v1/ageRatingDeclarations/{id} | 



## ageRatingDeclarationsUpdateInstance

> AgeRatingDeclarationResponse ageRatingDeclarationsUpdateInstance(id, ageRatingDeclarationUpdateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AgeRatingDeclarationsApi();
let id = "id_example"; // String | the id of the requested resource
let ageRatingDeclarationUpdateRequest = new AppStoreConnectApi.AgeRatingDeclarationUpdateRequest(); // AgeRatingDeclarationUpdateRequest | AgeRatingDeclaration representation
apiInstance.ageRatingDeclarationsUpdateInstance(id, ageRatingDeclarationUpdateRequest, (error, data, response) => {
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
 **ageRatingDeclarationUpdateRequest** | [**AgeRatingDeclarationUpdateRequest**](AgeRatingDeclarationUpdateRequest.md)| AgeRatingDeclaration representation | 

### Return type

[**AgeRatingDeclarationResponse**](AgeRatingDeclarationResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

