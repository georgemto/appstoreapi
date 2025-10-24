# AppStoreConnectApi.WebhooksApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**webhooksCreateInstance**](WebhooksApi.md#webhooksCreateInstance) | **POST** /v1/webhooks | 
[**webhooksDeleteInstance**](WebhooksApi.md#webhooksDeleteInstance) | **DELETE** /v1/webhooks/{id} | 
[**webhooksDeliveriesGetToManyRelated**](WebhooksApi.md#webhooksDeliveriesGetToManyRelated) | **GET** /v1/webhooks/{id}/deliveries | 
[**webhooksDeliveriesGetToManyRelationship**](WebhooksApi.md#webhooksDeliveriesGetToManyRelationship) | **GET** /v1/webhooks/{id}/relationships/deliveries | 
[**webhooksGetInstance**](WebhooksApi.md#webhooksGetInstance) | **GET** /v1/webhooks/{id} | 
[**webhooksUpdateInstance**](WebhooksApi.md#webhooksUpdateInstance) | **PATCH** /v1/webhooks/{id} | 



## webhooksCreateInstance

> WebhookResponse webhooksCreateInstance(webhookCreateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.WebhooksApi();
let webhookCreateRequest = new AppStoreConnectApi.WebhookCreateRequest(); // WebhookCreateRequest | Webhook representation
apiInstance.webhooksCreateInstance(webhookCreateRequest, (error, data, response) => {
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
 **webhookCreateRequest** | [**WebhookCreateRequest**](WebhookCreateRequest.md)| Webhook representation | 

### Return type

[**WebhookResponse**](WebhookResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## webhooksDeleteInstance

> webhooksDeleteInstance(id)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.WebhooksApi();
let id = "id_example"; // String | the id of the requested resource
apiInstance.webhooksDeleteInstance(id, (error, data, response) => {
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


## webhooksDeliveriesGetToManyRelated

> WebhookDeliveriesResponse webhooksDeliveriesGetToManyRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.WebhooksApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'filterDeliveryState': ["null"], // [String] | filter by attribute 'deliveryState'
  'filterCreatedDateGreaterThanOrEqualTo': ["null"], // [String] | filter by createdDateGreaterThanOrEqualTo
  'filterCreatedDateLessThan': ["null"], // [String] | filter by createdDateLessThan
  'fieldsWebhookDeliveries': ["null"], // [String] | the fields to include for returned resources of type webhookDeliveries
  'fieldsWebhookEvents': ["null"], // [String] | the fields to include for returned resources of type webhookEvents
  'limit': 56, // Number | maximum resources per page
  'include': ["null"] // [String] | comma-separated list of relationships to include
};
apiInstance.webhooksDeliveriesGetToManyRelated(id, opts, (error, data, response) => {
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
 **filterDeliveryState** | [**[String]**](String.md)| filter by attribute &#39;deliveryState&#39; | [optional] 
 **filterCreatedDateGreaterThanOrEqualTo** | [**[String]**](String.md)| filter by createdDateGreaterThanOrEqualTo | [optional] 
 **filterCreatedDateLessThan** | [**[String]**](String.md)| filter by createdDateLessThan | [optional] 
 **fieldsWebhookDeliveries** | [**[String]**](String.md)| the fields to include for returned resources of type webhookDeliveries | [optional] 
 **fieldsWebhookEvents** | [**[String]**](String.md)| the fields to include for returned resources of type webhookEvents | [optional] 
 **limit** | **Number**| maximum resources per page | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 

### Return type

[**WebhookDeliveriesResponse**](WebhookDeliveriesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## webhooksDeliveriesGetToManyRelationship

> WebhookDeliveriesLinkagesResponse webhooksDeliveriesGetToManyRelationship(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.WebhooksApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'limit': 56 // Number | maximum resources per page
};
apiInstance.webhooksDeliveriesGetToManyRelationship(id, opts, (error, data, response) => {
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
 **limit** | **Number**| maximum resources per page | [optional] 

### Return type

[**WebhookDeliveriesLinkagesResponse**](WebhookDeliveriesLinkagesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## webhooksGetInstance

> WebhookResponse webhooksGetInstance(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.WebhooksApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsWebhooks': ["null"], // [String] | the fields to include for returned resources of type webhooks
  'include': ["null"] // [String] | comma-separated list of relationships to include
};
apiInstance.webhooksGetInstance(id, opts, (error, data, response) => {
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
 **fieldsWebhooks** | [**[String]**](String.md)| the fields to include for returned resources of type webhooks | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 

### Return type

[**WebhookResponse**](WebhookResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## webhooksUpdateInstance

> WebhookResponse webhooksUpdateInstance(id, webhookUpdateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.WebhooksApi();
let id = "id_example"; // String | the id of the requested resource
let webhookUpdateRequest = new AppStoreConnectApi.WebhookUpdateRequest(); // WebhookUpdateRequest | Webhook representation
apiInstance.webhooksUpdateInstance(id, webhookUpdateRequest, (error, data, response) => {
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
 **webhookUpdateRequest** | [**WebhookUpdateRequest**](WebhookUpdateRequest.md)| Webhook representation | 

### Return type

[**WebhookResponse**](WebhookResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

