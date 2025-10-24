# AppStoreConnectApi.InAppPurchasePriceSchedulesApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**inAppPurchasePriceSchedulesAutomaticPricesGetToManyRelated**](InAppPurchasePriceSchedulesApi.md#inAppPurchasePriceSchedulesAutomaticPricesGetToManyRelated) | **GET** /v1/inAppPurchasePriceSchedules/{id}/automaticPrices | 
[**inAppPurchasePriceSchedulesAutomaticPricesGetToManyRelationship**](InAppPurchasePriceSchedulesApi.md#inAppPurchasePriceSchedulesAutomaticPricesGetToManyRelationship) | **GET** /v1/inAppPurchasePriceSchedules/{id}/relationships/automaticPrices | 
[**inAppPurchasePriceSchedulesBaseTerritoryGetToOneRelated**](InAppPurchasePriceSchedulesApi.md#inAppPurchasePriceSchedulesBaseTerritoryGetToOneRelated) | **GET** /v1/inAppPurchasePriceSchedules/{id}/baseTerritory | 
[**inAppPurchasePriceSchedulesBaseTerritoryGetToOneRelationship**](InAppPurchasePriceSchedulesApi.md#inAppPurchasePriceSchedulesBaseTerritoryGetToOneRelationship) | **GET** /v1/inAppPurchasePriceSchedules/{id}/relationships/baseTerritory | 
[**inAppPurchasePriceSchedulesCreateInstance**](InAppPurchasePriceSchedulesApi.md#inAppPurchasePriceSchedulesCreateInstance) | **POST** /v1/inAppPurchasePriceSchedules | 
[**inAppPurchasePriceSchedulesGetInstance**](InAppPurchasePriceSchedulesApi.md#inAppPurchasePriceSchedulesGetInstance) | **GET** /v1/inAppPurchasePriceSchedules/{id} | 
[**inAppPurchasePriceSchedulesManualPricesGetToManyRelated**](InAppPurchasePriceSchedulesApi.md#inAppPurchasePriceSchedulesManualPricesGetToManyRelated) | **GET** /v1/inAppPurchasePriceSchedules/{id}/manualPrices | 
[**inAppPurchasePriceSchedulesManualPricesGetToManyRelationship**](InAppPurchasePriceSchedulesApi.md#inAppPurchasePriceSchedulesManualPricesGetToManyRelationship) | **GET** /v1/inAppPurchasePriceSchedules/{id}/relationships/manualPrices | 



## inAppPurchasePriceSchedulesAutomaticPricesGetToManyRelated

> InAppPurchasePricesResponse inAppPurchasePriceSchedulesAutomaticPricesGetToManyRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.InAppPurchasePriceSchedulesApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'filterTerritory': ["null"], // [String] | filter by id(s) of related 'territory'
  'fieldsInAppPurchasePrices': ["null"], // [String] | the fields to include for returned resources of type inAppPurchasePrices
  'fieldsInAppPurchasePricePoints': ["null"], // [String] | the fields to include for returned resources of type inAppPurchasePricePoints
  'fieldsTerritories': ["null"], // [String] | the fields to include for returned resources of type territories
  'limit': 56, // Number | maximum resources per page
  'include': ["null"] // [String] | comma-separated list of relationships to include
};
apiInstance.inAppPurchasePriceSchedulesAutomaticPricesGetToManyRelated(id, opts, (error, data, response) => {
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
 **fieldsInAppPurchasePrices** | [**[String]**](String.md)| the fields to include for returned resources of type inAppPurchasePrices | [optional] 
 **fieldsInAppPurchasePricePoints** | [**[String]**](String.md)| the fields to include for returned resources of type inAppPurchasePricePoints | [optional] 
 **fieldsTerritories** | [**[String]**](String.md)| the fields to include for returned resources of type territories | [optional] 
 **limit** | **Number**| maximum resources per page | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 

### Return type

[**InAppPurchasePricesResponse**](InAppPurchasePricesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## inAppPurchasePriceSchedulesAutomaticPricesGetToManyRelationship

> InAppPurchasePriceScheduleAutomaticPricesLinkagesResponse inAppPurchasePriceSchedulesAutomaticPricesGetToManyRelationship(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.InAppPurchasePriceSchedulesApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'limit': 56 // Number | maximum resources per page
};
apiInstance.inAppPurchasePriceSchedulesAutomaticPricesGetToManyRelationship(id, opts, (error, data, response) => {
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

[**InAppPurchasePriceScheduleAutomaticPricesLinkagesResponse**](InAppPurchasePriceScheduleAutomaticPricesLinkagesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## inAppPurchasePriceSchedulesBaseTerritoryGetToOneRelated

> TerritoryResponse inAppPurchasePriceSchedulesBaseTerritoryGetToOneRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.InAppPurchasePriceSchedulesApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsTerritories': ["null"] // [String] | the fields to include for returned resources of type territories
};
apiInstance.inAppPurchasePriceSchedulesBaseTerritoryGetToOneRelated(id, opts, (error, data, response) => {
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
 **fieldsTerritories** | [**[String]**](String.md)| the fields to include for returned resources of type territories | [optional] 

### Return type

[**TerritoryResponse**](TerritoryResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## inAppPurchasePriceSchedulesBaseTerritoryGetToOneRelationship

> InAppPurchasePriceScheduleBaseTerritoryLinkageResponse inAppPurchasePriceSchedulesBaseTerritoryGetToOneRelationship(id)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.InAppPurchasePriceSchedulesApi();
let id = "id_example"; // String | the id of the requested resource
apiInstance.inAppPurchasePriceSchedulesBaseTerritoryGetToOneRelationship(id, (error, data, response) => {
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

### Return type

[**InAppPurchasePriceScheduleBaseTerritoryLinkageResponse**](InAppPurchasePriceScheduleBaseTerritoryLinkageResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## inAppPurchasePriceSchedulesCreateInstance

> InAppPurchasePriceScheduleResponse inAppPurchasePriceSchedulesCreateInstance(inAppPurchasePriceScheduleCreateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.InAppPurchasePriceSchedulesApi();
let inAppPurchasePriceScheduleCreateRequest = new AppStoreConnectApi.InAppPurchasePriceScheduleCreateRequest(); // InAppPurchasePriceScheduleCreateRequest | InAppPurchasePriceSchedule representation
apiInstance.inAppPurchasePriceSchedulesCreateInstance(inAppPurchasePriceScheduleCreateRequest, (error, data, response) => {
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
 **inAppPurchasePriceScheduleCreateRequest** | [**InAppPurchasePriceScheduleCreateRequest**](InAppPurchasePriceScheduleCreateRequest.md)| InAppPurchasePriceSchedule representation | 

### Return type

[**InAppPurchasePriceScheduleResponse**](InAppPurchasePriceScheduleResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## inAppPurchasePriceSchedulesGetInstance

> InAppPurchasePriceScheduleResponse inAppPurchasePriceSchedulesGetInstance(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.InAppPurchasePriceSchedulesApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsInAppPurchasePriceSchedules': ["null"], // [String] | the fields to include for returned resources of type inAppPurchasePriceSchedules
  'fieldsTerritories': ["null"], // [String] | the fields to include for returned resources of type territories
  'fieldsInAppPurchasePrices': ["null"], // [String] | the fields to include for returned resources of type inAppPurchasePrices
  'include': ["null"], // [String] | comma-separated list of relationships to include
  'limitAutomaticPrices': 56, // Number | maximum number of related automaticPrices returned (when they are included)
  'limitManualPrices': 56 // Number | maximum number of related manualPrices returned (when they are included)
};
apiInstance.inAppPurchasePriceSchedulesGetInstance(id, opts, (error, data, response) => {
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
 **fieldsInAppPurchasePriceSchedules** | [**[String]**](String.md)| the fields to include for returned resources of type inAppPurchasePriceSchedules | [optional] 
 **fieldsTerritories** | [**[String]**](String.md)| the fields to include for returned resources of type territories | [optional] 
 **fieldsInAppPurchasePrices** | [**[String]**](String.md)| the fields to include for returned resources of type inAppPurchasePrices | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 
 **limitAutomaticPrices** | **Number**| maximum number of related automaticPrices returned (when they are included) | [optional] 
 **limitManualPrices** | **Number**| maximum number of related manualPrices returned (when they are included) | [optional] 

### Return type

[**InAppPurchasePriceScheduleResponse**](InAppPurchasePriceScheduleResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## inAppPurchasePriceSchedulesManualPricesGetToManyRelated

> InAppPurchasePricesResponse inAppPurchasePriceSchedulesManualPricesGetToManyRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.InAppPurchasePriceSchedulesApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'filterTerritory': ["null"], // [String] | filter by id(s) of related 'territory'
  'fieldsInAppPurchasePrices': ["null"], // [String] | the fields to include for returned resources of type inAppPurchasePrices
  'fieldsInAppPurchasePricePoints': ["null"], // [String] | the fields to include for returned resources of type inAppPurchasePricePoints
  'fieldsTerritories': ["null"], // [String] | the fields to include for returned resources of type territories
  'limit': 56, // Number | maximum resources per page
  'include': ["null"] // [String] | comma-separated list of relationships to include
};
apiInstance.inAppPurchasePriceSchedulesManualPricesGetToManyRelated(id, opts, (error, data, response) => {
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
 **fieldsInAppPurchasePrices** | [**[String]**](String.md)| the fields to include for returned resources of type inAppPurchasePrices | [optional] 
 **fieldsInAppPurchasePricePoints** | [**[String]**](String.md)| the fields to include for returned resources of type inAppPurchasePricePoints | [optional] 
 **fieldsTerritories** | [**[String]**](String.md)| the fields to include for returned resources of type territories | [optional] 
 **limit** | **Number**| maximum resources per page | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 

### Return type

[**InAppPurchasePricesResponse**](InAppPurchasePricesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## inAppPurchasePriceSchedulesManualPricesGetToManyRelationship

> InAppPurchasePriceScheduleManualPricesLinkagesResponse inAppPurchasePriceSchedulesManualPricesGetToManyRelationship(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.InAppPurchasePriceSchedulesApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'limit': 56 // Number | maximum resources per page
};
apiInstance.inAppPurchasePriceSchedulesManualPricesGetToManyRelationship(id, opts, (error, data, response) => {
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

[**InAppPurchasePriceScheduleManualPricesLinkagesResponse**](InAppPurchasePriceScheduleManualPricesLinkagesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

