# AppStoreConnectApi.WinBackOffersApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**winBackOffersCreateInstance**](WinBackOffersApi.md#winBackOffersCreateInstance) | **POST** /v1/winBackOffers | 
[**winBackOffersDeleteInstance**](WinBackOffersApi.md#winBackOffersDeleteInstance) | **DELETE** /v1/winBackOffers/{id} | 
[**winBackOffersGetInstance**](WinBackOffersApi.md#winBackOffersGetInstance) | **GET** /v1/winBackOffers/{id} | 
[**winBackOffersPricesGetToManyRelated**](WinBackOffersApi.md#winBackOffersPricesGetToManyRelated) | **GET** /v1/winBackOffers/{id}/prices | 
[**winBackOffersPricesGetToManyRelationship**](WinBackOffersApi.md#winBackOffersPricesGetToManyRelationship) | **GET** /v1/winBackOffers/{id}/relationships/prices | 
[**winBackOffersUpdateInstance**](WinBackOffersApi.md#winBackOffersUpdateInstance) | **PATCH** /v1/winBackOffers/{id} | 



## winBackOffersCreateInstance

> WinBackOfferResponse winBackOffersCreateInstance(winBackOfferCreateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.WinBackOffersApi();
let winBackOfferCreateRequest = new AppStoreConnectApi.WinBackOfferCreateRequest(); // WinBackOfferCreateRequest | WinBackOffer representation
apiInstance.winBackOffersCreateInstance(winBackOfferCreateRequest, (error, data, response) => {
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
 **winBackOfferCreateRequest** | [**WinBackOfferCreateRequest**](WinBackOfferCreateRequest.md)| WinBackOffer representation | 

### Return type

[**WinBackOfferResponse**](WinBackOfferResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## winBackOffersDeleteInstance

> winBackOffersDeleteInstance(id)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.WinBackOffersApi();
let id = "id_example"; // String | the id of the requested resource
apiInstance.winBackOffersDeleteInstance(id, (error, data, response) => {
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


## winBackOffersGetInstance

> WinBackOfferResponse winBackOffersGetInstance(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.WinBackOffersApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsWinBackOffers': ["null"], // [String] | the fields to include for returned resources of type winBackOffers
  'fieldsWinBackOfferPrices': ["null"], // [String] | the fields to include for returned resources of type winBackOfferPrices
  'include': ["null"], // [String] | comma-separated list of relationships to include
  'limitPrices': 56 // Number | maximum number of related prices returned (when they are included)
};
apiInstance.winBackOffersGetInstance(id, opts, (error, data, response) => {
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
 **fieldsWinBackOffers** | [**[String]**](String.md)| the fields to include for returned resources of type winBackOffers | [optional] 
 **fieldsWinBackOfferPrices** | [**[String]**](String.md)| the fields to include for returned resources of type winBackOfferPrices | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 
 **limitPrices** | **Number**| maximum number of related prices returned (when they are included) | [optional] 

### Return type

[**WinBackOfferResponse**](WinBackOfferResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## winBackOffersPricesGetToManyRelated

> WinBackOfferPricesResponse winBackOffersPricesGetToManyRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.WinBackOffersApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'filterTerritory': ["null"], // [String] | filter by id(s) of related 'territory'
  'fieldsWinBackOfferPrices': ["null"], // [String] | the fields to include for returned resources of type winBackOfferPrices
  'fieldsTerritories': ["null"], // [String] | the fields to include for returned resources of type territories
  'fieldsSubscriptionPricePoints': ["null"], // [String] | the fields to include for returned resources of type subscriptionPricePoints
  'limit': 56, // Number | maximum resources per page
  'include': ["null"] // [String] | comma-separated list of relationships to include
};
apiInstance.winBackOffersPricesGetToManyRelated(id, opts, (error, data, response) => {
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
 **fieldsWinBackOfferPrices** | [**[String]**](String.md)| the fields to include for returned resources of type winBackOfferPrices | [optional] 
 **fieldsTerritories** | [**[String]**](String.md)| the fields to include for returned resources of type territories | [optional] 
 **fieldsSubscriptionPricePoints** | [**[String]**](String.md)| the fields to include for returned resources of type subscriptionPricePoints | [optional] 
 **limit** | **Number**| maximum resources per page | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 

### Return type

[**WinBackOfferPricesResponse**](WinBackOfferPricesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## winBackOffersPricesGetToManyRelationship

> WinBackOfferPricesLinkagesResponse winBackOffersPricesGetToManyRelationship(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.WinBackOffersApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'limit': 56 // Number | maximum resources per page
};
apiInstance.winBackOffersPricesGetToManyRelationship(id, opts, (error, data, response) => {
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

[**WinBackOfferPricesLinkagesResponse**](WinBackOfferPricesLinkagesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## winBackOffersUpdateInstance

> WinBackOfferResponse winBackOffersUpdateInstance(id, winBackOfferUpdateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.WinBackOffersApi();
let id = "id_example"; // String | the id of the requested resource
let winBackOfferUpdateRequest = new AppStoreConnectApi.WinBackOfferUpdateRequest(); // WinBackOfferUpdateRequest | WinBackOffer representation
apiInstance.winBackOffersUpdateInstance(id, winBackOfferUpdateRequest, (error, data, response) => {
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
 **winBackOfferUpdateRequest** | [**WinBackOfferUpdateRequest**](WinBackOfferUpdateRequest.md)| WinBackOffer representation | 

### Return type

[**WinBackOfferResponse**](WinBackOfferResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

