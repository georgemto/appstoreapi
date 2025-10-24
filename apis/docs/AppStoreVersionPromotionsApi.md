# AppStoreConnectApi.AppStoreVersionPromotionsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**appStoreVersionPromotionsCreateInstance**](AppStoreVersionPromotionsApi.md#appStoreVersionPromotionsCreateInstance) | **POST** /v1/appStoreVersionPromotions | 



## appStoreVersionPromotionsCreateInstance

> AppStoreVersionPromotionResponse appStoreVersionPromotionsCreateInstance(appStoreVersionPromotionCreateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppStoreVersionPromotionsApi();
let appStoreVersionPromotionCreateRequest = new AppStoreConnectApi.AppStoreVersionPromotionCreateRequest(); // AppStoreVersionPromotionCreateRequest | AppStoreVersionPromotion representation
apiInstance.appStoreVersionPromotionsCreateInstance(appStoreVersionPromotionCreateRequest, (error, data, response) => {
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
 **appStoreVersionPromotionCreateRequest** | [**AppStoreVersionPromotionCreateRequest**](AppStoreVersionPromotionCreateRequest.md)| AppStoreVersionPromotion representation | 

### Return type

[**AppStoreVersionPromotionResponse**](AppStoreVersionPromotionResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

