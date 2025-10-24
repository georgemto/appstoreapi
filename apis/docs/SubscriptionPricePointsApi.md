# AppStoreConnectApi.SubscriptionPricePointsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**subscriptionPricePointsEqualizationsGetToManyRelated**](SubscriptionPricePointsApi.md#subscriptionPricePointsEqualizationsGetToManyRelated) | **GET** /v1/subscriptionPricePoints/{id}/equalizations | 
[**subscriptionPricePointsEqualizationsGetToManyRelationship**](SubscriptionPricePointsApi.md#subscriptionPricePointsEqualizationsGetToManyRelationship) | **GET** /v1/subscriptionPricePoints/{id}/relationships/equalizations | 
[**subscriptionPricePointsGetInstance**](SubscriptionPricePointsApi.md#subscriptionPricePointsGetInstance) | **GET** /v1/subscriptionPricePoints/{id} | 



## subscriptionPricePointsEqualizationsGetToManyRelated

> SubscriptionPricePointsResponse subscriptionPricePointsEqualizationsGetToManyRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.SubscriptionPricePointsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'filterTerritory': ["null"], // [String] | filter by id(s) of related 'territory'
  'filterSubscription': ["null"], // [String] | filter by id(s) of related 'subscription'
  'fieldsSubscriptionPricePoints': ["null"], // [String] | the fields to include for returned resources of type subscriptionPricePoints
  'fieldsTerritories': ["null"], // [String] | the fields to include for returned resources of type territories
  'limit': 56, // Number | maximum resources per page
  'include': ["null"] // [String] | comma-separated list of relationships to include
};
apiInstance.subscriptionPricePointsEqualizationsGetToManyRelated(id, opts, (error, data, response) => {
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
 **filterTerritory** | [**[String]**](String.md)| filter by id(s) of related &#39;territory&#39; | [optional] 
 **filterSubscription** | [**[String]**](String.md)| filter by id(s) of related &#39;subscription&#39; | [optional] 
 **fieldsSubscriptionPricePoints** | [**[String]**](String.md)| the fields to include for returned resources of type subscriptionPricePoints | [optional] 
 **fieldsTerritories** | [**[String]**](String.md)| the fields to include for returned resources of type territories | [optional] 
 **limit** | **Number**| maximum resources per page | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 

### Return type

[**SubscriptionPricePointsResponse**](SubscriptionPricePointsResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/csv


## subscriptionPricePointsEqualizationsGetToManyRelationship

> SubscriptionPricePointEqualizationsLinkagesResponse subscriptionPricePointsEqualizationsGetToManyRelationship(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.SubscriptionPricePointsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'limit': 56 // Number | maximum resources per page
};
apiInstance.subscriptionPricePointsEqualizationsGetToManyRelationship(id, opts, (error, data, response) => {
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

[**SubscriptionPricePointEqualizationsLinkagesResponse**](SubscriptionPricePointEqualizationsLinkagesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## subscriptionPricePointsGetInstance

> SubscriptionPricePointResponse subscriptionPricePointsGetInstance(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.SubscriptionPricePointsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsSubscriptionPricePoints': ["null"], // [String] | the fields to include for returned resources of type subscriptionPricePoints
  'include': ["null"] // [String] | comma-separated list of relationships to include
};
apiInstance.subscriptionPricePointsGetInstance(id, opts, (error, data, response) => {
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
 **fieldsSubscriptionPricePoints** | [**[String]**](String.md)| the fields to include for returned resources of type subscriptionPricePoints | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 

### Return type

[**SubscriptionPricePointResponse**](SubscriptionPricePointResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

