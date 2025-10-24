# AppStoreConnectApi.InAppPurchasePricePointsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**inAppPurchasePricePointsEqualizationsGetToManyRelated**](InAppPurchasePricePointsApi.md#inAppPurchasePricePointsEqualizationsGetToManyRelated) | **GET** /v1/inAppPurchasePricePoints/{id}/equalizations | 
[**inAppPurchasePricePointsEqualizationsGetToManyRelationship**](InAppPurchasePricePointsApi.md#inAppPurchasePricePointsEqualizationsGetToManyRelationship) | **GET** /v1/inAppPurchasePricePoints/{id}/relationships/equalizations | 



## inAppPurchasePricePointsEqualizationsGetToManyRelated

> InAppPurchasePricePointsResponse inAppPurchasePricePointsEqualizationsGetToManyRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.InAppPurchasePricePointsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'filterTerritory': ["null"], // [String] | filter by id(s) of related 'territory'
  'filterInAppPurchaseV2': ["null"], // [String] | filter by id(s) of related 'inAppPurchaseV2'
  'fieldsInAppPurchasePricePoints': ["null"], // [String] | the fields to include for returned resources of type inAppPurchasePricePoints
  'fieldsTerritories': ["null"], // [String] | the fields to include for returned resources of type territories
  'limit': 56, // Number | maximum resources per page
  'include': ["null"] // [String] | comma-separated list of relationships to include
};
apiInstance.inAppPurchasePricePointsEqualizationsGetToManyRelated(id, opts, (error, data, response) => {
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
 **filterInAppPurchaseV2** | [**[String]**](String.md)| filter by id(s) of related &#39;inAppPurchaseV2&#39; | [optional] 
 **fieldsInAppPurchasePricePoints** | [**[String]**](String.md)| the fields to include for returned resources of type inAppPurchasePricePoints | [optional] 
 **fieldsTerritories** | [**[String]**](String.md)| the fields to include for returned resources of type territories | [optional] 
 **limit** | **Number**| maximum resources per page | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 

### Return type

[**InAppPurchasePricePointsResponse**](InAppPurchasePricePointsResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/csv


## inAppPurchasePricePointsEqualizationsGetToManyRelationship

> InAppPurchasePricePointEqualizationsLinkagesResponse inAppPurchasePricePointsEqualizationsGetToManyRelationship(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.InAppPurchasePricePointsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'limit': 56 // Number | maximum resources per page
};
apiInstance.inAppPurchasePricePointsEqualizationsGetToManyRelationship(id, opts, (error, data, response) => {
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

[**InAppPurchasePricePointEqualizationsLinkagesResponse**](InAppPurchasePricePointEqualizationsLinkagesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

