# AppStoreConnectApi.WebhookDeliveriesApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**webhookDeliveriesCreateInstance**](WebhookDeliveriesApi.md#webhookDeliveriesCreateInstance) | **POST** /v1/webhookDeliveries | 



## webhookDeliveriesCreateInstance

> WebhookDeliveryResponse webhookDeliveriesCreateInstance(webhookDeliveryCreateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.WebhookDeliveriesApi();
let webhookDeliveryCreateRequest = new AppStoreConnectApi.WebhookDeliveryCreateRequest(); // WebhookDeliveryCreateRequest | WebhookDelivery representation
apiInstance.webhookDeliveriesCreateInstance(webhookDeliveryCreateRequest, (error, data, response) => {
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
 **webhookDeliveryCreateRequest** | [**WebhookDeliveryCreateRequest**](WebhookDeliveryCreateRequest.md)| WebhookDelivery representation | 

### Return type

[**WebhookDeliveryResponse**](WebhookDeliveryResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

