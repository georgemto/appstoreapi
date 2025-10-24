# AppStoreConnectApi.SubscriptionOfferCodesApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**subscriptionOfferCodesCreateInstance**](SubscriptionOfferCodesApi.md#subscriptionOfferCodesCreateInstance) | **POST** /v1/subscriptionOfferCodes | 
[**subscriptionOfferCodesCustomCodesGetToManyRelated**](SubscriptionOfferCodesApi.md#subscriptionOfferCodesCustomCodesGetToManyRelated) | **GET** /v1/subscriptionOfferCodes/{id}/customCodes | 
[**subscriptionOfferCodesCustomCodesGetToManyRelationship**](SubscriptionOfferCodesApi.md#subscriptionOfferCodesCustomCodesGetToManyRelationship) | **GET** /v1/subscriptionOfferCodes/{id}/relationships/customCodes | 
[**subscriptionOfferCodesGetInstance**](SubscriptionOfferCodesApi.md#subscriptionOfferCodesGetInstance) | **GET** /v1/subscriptionOfferCodes/{id} | 
[**subscriptionOfferCodesOneTimeUseCodesGetToManyRelated**](SubscriptionOfferCodesApi.md#subscriptionOfferCodesOneTimeUseCodesGetToManyRelated) | **GET** /v1/subscriptionOfferCodes/{id}/oneTimeUseCodes | 
[**subscriptionOfferCodesOneTimeUseCodesGetToManyRelationship**](SubscriptionOfferCodesApi.md#subscriptionOfferCodesOneTimeUseCodesGetToManyRelationship) | **GET** /v1/subscriptionOfferCodes/{id}/relationships/oneTimeUseCodes | 
[**subscriptionOfferCodesPricesGetToManyRelated**](SubscriptionOfferCodesApi.md#subscriptionOfferCodesPricesGetToManyRelated) | **GET** /v1/subscriptionOfferCodes/{id}/prices | 
[**subscriptionOfferCodesPricesGetToManyRelationship**](SubscriptionOfferCodesApi.md#subscriptionOfferCodesPricesGetToManyRelationship) | **GET** /v1/subscriptionOfferCodes/{id}/relationships/prices | 
[**subscriptionOfferCodesUpdateInstance**](SubscriptionOfferCodesApi.md#subscriptionOfferCodesUpdateInstance) | **PATCH** /v1/subscriptionOfferCodes/{id} | 



## subscriptionOfferCodesCreateInstance

> SubscriptionOfferCodeResponse subscriptionOfferCodesCreateInstance(subscriptionOfferCodeCreateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.SubscriptionOfferCodesApi();
let subscriptionOfferCodeCreateRequest = new AppStoreConnectApi.SubscriptionOfferCodeCreateRequest(); // SubscriptionOfferCodeCreateRequest | SubscriptionOfferCode representation
apiInstance.subscriptionOfferCodesCreateInstance(subscriptionOfferCodeCreateRequest, (error, data, response) => {
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
 **subscriptionOfferCodeCreateRequest** | [**SubscriptionOfferCodeCreateRequest**](SubscriptionOfferCodeCreateRequest.md)| SubscriptionOfferCode representation | 

### Return type

[**SubscriptionOfferCodeResponse**](SubscriptionOfferCodeResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## subscriptionOfferCodesCustomCodesGetToManyRelated

> SubscriptionOfferCodeCustomCodesResponse subscriptionOfferCodesCustomCodesGetToManyRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.SubscriptionOfferCodesApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsSubscriptionOfferCodeCustomCodes': ["null"], // [String] | the fields to include for returned resources of type subscriptionOfferCodeCustomCodes
  'fieldsSubscriptionOfferCodes': ["null"], // [String] | the fields to include for returned resources of type subscriptionOfferCodes
  'limit': 56, // Number | maximum resources per page
  'include': ["null"] // [String] | comma-separated list of relationships to include
};
apiInstance.subscriptionOfferCodesCustomCodesGetToManyRelated(id, opts, (error, data, response) => {
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
 **fieldsSubscriptionOfferCodeCustomCodes** | [**[String]**](String.md)| the fields to include for returned resources of type subscriptionOfferCodeCustomCodes | [optional] 
 **fieldsSubscriptionOfferCodes** | [**[String]**](String.md)| the fields to include for returned resources of type subscriptionOfferCodes | [optional] 
 **limit** | **Number**| maximum resources per page | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 

### Return type

[**SubscriptionOfferCodeCustomCodesResponse**](SubscriptionOfferCodeCustomCodesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## subscriptionOfferCodesCustomCodesGetToManyRelationship

> SubscriptionOfferCodeCustomCodesLinkagesResponse subscriptionOfferCodesCustomCodesGetToManyRelationship(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.SubscriptionOfferCodesApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'limit': 56 // Number | maximum resources per page
};
apiInstance.subscriptionOfferCodesCustomCodesGetToManyRelationship(id, opts, (error, data, response) => {
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

[**SubscriptionOfferCodeCustomCodesLinkagesResponse**](SubscriptionOfferCodeCustomCodesLinkagesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## subscriptionOfferCodesGetInstance

> SubscriptionOfferCodeResponse subscriptionOfferCodesGetInstance(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.SubscriptionOfferCodesApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsSubscriptionOfferCodes': ["null"], // [String] | the fields to include for returned resources of type subscriptionOfferCodes
  'fieldsSubscriptionOfferCodeOneTimeUseCodes': ["null"], // [String] | the fields to include for returned resources of type subscriptionOfferCodeOneTimeUseCodes
  'fieldsSubscriptionOfferCodeCustomCodes': ["null"], // [String] | the fields to include for returned resources of type subscriptionOfferCodeCustomCodes
  'fieldsSubscriptionOfferCodePrices': ["null"], // [String] | the fields to include for returned resources of type subscriptionOfferCodePrices
  'include': ["null"], // [String] | comma-separated list of relationships to include
  'limitCustomCodes': 56, // Number | maximum number of related customCodes returned (when they are included)
  'limitOneTimeUseCodes': 56, // Number | maximum number of related oneTimeUseCodes returned (when they are included)
  'limitPrices': 56 // Number | maximum number of related prices returned (when they are included)
};
apiInstance.subscriptionOfferCodesGetInstance(id, opts, (error, data, response) => {
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
 **fieldsSubscriptionOfferCodes** | [**[String]**](String.md)| the fields to include for returned resources of type subscriptionOfferCodes | [optional] 
 **fieldsSubscriptionOfferCodeOneTimeUseCodes** | [**[String]**](String.md)| the fields to include for returned resources of type subscriptionOfferCodeOneTimeUseCodes | [optional] 
 **fieldsSubscriptionOfferCodeCustomCodes** | [**[String]**](String.md)| the fields to include for returned resources of type subscriptionOfferCodeCustomCodes | [optional] 
 **fieldsSubscriptionOfferCodePrices** | [**[String]**](String.md)| the fields to include for returned resources of type subscriptionOfferCodePrices | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 
 **limitCustomCodes** | **Number**| maximum number of related customCodes returned (when they are included) | [optional] 
 **limitOneTimeUseCodes** | **Number**| maximum number of related oneTimeUseCodes returned (when they are included) | [optional] 
 **limitPrices** | **Number**| maximum number of related prices returned (when they are included) | [optional] 

### Return type

[**SubscriptionOfferCodeResponse**](SubscriptionOfferCodeResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## subscriptionOfferCodesOneTimeUseCodesGetToManyRelated

> SubscriptionOfferCodeOneTimeUseCodesResponse subscriptionOfferCodesOneTimeUseCodesGetToManyRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.SubscriptionOfferCodesApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsSubscriptionOfferCodeOneTimeUseCodes': ["null"], // [String] | the fields to include for returned resources of type subscriptionOfferCodeOneTimeUseCodes
  'fieldsSubscriptionOfferCodes': ["null"], // [String] | the fields to include for returned resources of type subscriptionOfferCodes
  'limit': 56, // Number | maximum resources per page
  'include': ["null"] // [String] | comma-separated list of relationships to include
};
apiInstance.subscriptionOfferCodesOneTimeUseCodesGetToManyRelated(id, opts, (error, data, response) => {
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
 **fieldsSubscriptionOfferCodeOneTimeUseCodes** | [**[String]**](String.md)| the fields to include for returned resources of type subscriptionOfferCodeOneTimeUseCodes | [optional] 
 **fieldsSubscriptionOfferCodes** | [**[String]**](String.md)| the fields to include for returned resources of type subscriptionOfferCodes | [optional] 
 **limit** | **Number**| maximum resources per page | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 

### Return type

[**SubscriptionOfferCodeOneTimeUseCodesResponse**](SubscriptionOfferCodeOneTimeUseCodesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## subscriptionOfferCodesOneTimeUseCodesGetToManyRelationship

> SubscriptionOfferCodeOneTimeUseCodesLinkagesResponse subscriptionOfferCodesOneTimeUseCodesGetToManyRelationship(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.SubscriptionOfferCodesApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'limit': 56 // Number | maximum resources per page
};
apiInstance.subscriptionOfferCodesOneTimeUseCodesGetToManyRelationship(id, opts, (error, data, response) => {
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

[**SubscriptionOfferCodeOneTimeUseCodesLinkagesResponse**](SubscriptionOfferCodeOneTimeUseCodesLinkagesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## subscriptionOfferCodesPricesGetToManyRelated

> SubscriptionOfferCodePricesResponse subscriptionOfferCodesPricesGetToManyRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.SubscriptionOfferCodesApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'filterTerritory': ["null"], // [String] | filter by id(s) of related 'territory'
  'fieldsSubscriptionOfferCodePrices': ["null"], // [String] | the fields to include for returned resources of type subscriptionOfferCodePrices
  'fieldsTerritories': ["null"], // [String] | the fields to include for returned resources of type territories
  'fieldsSubscriptionPricePoints': ["null"], // [String] | the fields to include for returned resources of type subscriptionPricePoints
  'limit': 56, // Number | maximum resources per page
  'include': ["null"] // [String] | comma-separated list of relationships to include
};
apiInstance.subscriptionOfferCodesPricesGetToManyRelated(id, opts, (error, data, response) => {
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
 **fieldsSubscriptionOfferCodePrices** | [**[String]**](String.md)| the fields to include for returned resources of type subscriptionOfferCodePrices | [optional] 
 **fieldsTerritories** | [**[String]**](String.md)| the fields to include for returned resources of type territories | [optional] 
 **fieldsSubscriptionPricePoints** | [**[String]**](String.md)| the fields to include for returned resources of type subscriptionPricePoints | [optional] 
 **limit** | **Number**| maximum resources per page | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 

### Return type

[**SubscriptionOfferCodePricesResponse**](SubscriptionOfferCodePricesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## subscriptionOfferCodesPricesGetToManyRelationship

> SubscriptionOfferCodePricesLinkagesResponse subscriptionOfferCodesPricesGetToManyRelationship(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.SubscriptionOfferCodesApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'limit': 56 // Number | maximum resources per page
};
apiInstance.subscriptionOfferCodesPricesGetToManyRelationship(id, opts, (error, data, response) => {
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

[**SubscriptionOfferCodePricesLinkagesResponse**](SubscriptionOfferCodePricesLinkagesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## subscriptionOfferCodesUpdateInstance

> SubscriptionOfferCodeResponse subscriptionOfferCodesUpdateInstance(id, subscriptionOfferCodeUpdateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.SubscriptionOfferCodesApi();
let id = "id_example"; // String | the id of the requested resource
let subscriptionOfferCodeUpdateRequest = new AppStoreConnectApi.SubscriptionOfferCodeUpdateRequest(); // SubscriptionOfferCodeUpdateRequest | SubscriptionOfferCode representation
apiInstance.subscriptionOfferCodesUpdateInstance(id, subscriptionOfferCodeUpdateRequest, (error, data, response) => {
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
 **subscriptionOfferCodeUpdateRequest** | [**SubscriptionOfferCodeUpdateRequest**](SubscriptionOfferCodeUpdateRequest.md)| SubscriptionOfferCode representation | 

### Return type

[**SubscriptionOfferCodeResponse**](SubscriptionOfferCodeResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

