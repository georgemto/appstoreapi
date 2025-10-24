# AppStoreConnectApi.AppPriceSchedulesApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**appPriceSchedulesAutomaticPricesGetToManyRelated**](AppPriceSchedulesApi.md#appPriceSchedulesAutomaticPricesGetToManyRelated) | **GET** /v1/appPriceSchedules/{id}/automaticPrices | 
[**appPriceSchedulesAutomaticPricesGetToManyRelationship**](AppPriceSchedulesApi.md#appPriceSchedulesAutomaticPricesGetToManyRelationship) | **GET** /v1/appPriceSchedules/{id}/relationships/automaticPrices | 
[**appPriceSchedulesBaseTerritoryGetToOneRelated**](AppPriceSchedulesApi.md#appPriceSchedulesBaseTerritoryGetToOneRelated) | **GET** /v1/appPriceSchedules/{id}/baseTerritory | 
[**appPriceSchedulesBaseTerritoryGetToOneRelationship**](AppPriceSchedulesApi.md#appPriceSchedulesBaseTerritoryGetToOneRelationship) | **GET** /v1/appPriceSchedules/{id}/relationships/baseTerritory | 
[**appPriceSchedulesCreateInstance**](AppPriceSchedulesApi.md#appPriceSchedulesCreateInstance) | **POST** /v1/appPriceSchedules | 
[**appPriceSchedulesGetInstance**](AppPriceSchedulesApi.md#appPriceSchedulesGetInstance) | **GET** /v1/appPriceSchedules/{id} | 
[**appPriceSchedulesManualPricesGetToManyRelated**](AppPriceSchedulesApi.md#appPriceSchedulesManualPricesGetToManyRelated) | **GET** /v1/appPriceSchedules/{id}/manualPrices | 
[**appPriceSchedulesManualPricesGetToManyRelationship**](AppPriceSchedulesApi.md#appPriceSchedulesManualPricesGetToManyRelationship) | **GET** /v1/appPriceSchedules/{id}/relationships/manualPrices | 



## appPriceSchedulesAutomaticPricesGetToManyRelated

> AppPricesV2Response appPriceSchedulesAutomaticPricesGetToManyRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppPriceSchedulesApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'filterStartDate': ["null"], // [String] | filter by attribute 'startDate'
  'filterEndDate': ["null"], // [String] | filter by attribute 'endDate'
  'filterTerritory': ["null"], // [String] | filter by id(s) of related 'territory'
  'fieldsAppPrices': ["null"], // [String] | the fields to include for returned resources of type appPrices
  'fieldsAppPricePoints': ["null"], // [String] | the fields to include for returned resources of type appPricePoints
  'fieldsTerritories': ["null"], // [String] | the fields to include for returned resources of type territories
  'limit': 56, // Number | maximum resources per page
  'include': ["null"] // [String] | comma-separated list of relationships to include
};
apiInstance.appPriceSchedulesAutomaticPricesGetToManyRelated(id, opts, (error, data, response) => {
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
 **filterStartDate** | [**[String]**](String.md)| filter by attribute &#39;startDate&#39; | [optional] 
 **filterEndDate** | [**[String]**](String.md)| filter by attribute &#39;endDate&#39; | [optional] 
 **filterTerritory** | [**[String]**](String.md)| filter by id(s) of related &#39;territory&#39; | [optional] 
 **fieldsAppPrices** | [**[String]**](String.md)| the fields to include for returned resources of type appPrices | [optional] 
 **fieldsAppPricePoints** | [**[String]**](String.md)| the fields to include for returned resources of type appPricePoints | [optional] 
 **fieldsTerritories** | [**[String]**](String.md)| the fields to include for returned resources of type territories | [optional] 
 **limit** | **Number**| maximum resources per page | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 

### Return type

[**AppPricesV2Response**](AppPricesV2Response.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## appPriceSchedulesAutomaticPricesGetToManyRelationship

> AppPriceScheduleAutomaticPricesLinkagesResponse appPriceSchedulesAutomaticPricesGetToManyRelationship(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppPriceSchedulesApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'limit': 56 // Number | maximum resources per page
};
apiInstance.appPriceSchedulesAutomaticPricesGetToManyRelationship(id, opts, (error, data, response) => {
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

[**AppPriceScheduleAutomaticPricesLinkagesResponse**](AppPriceScheduleAutomaticPricesLinkagesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## appPriceSchedulesBaseTerritoryGetToOneRelated

> TerritoryResponse appPriceSchedulesBaseTerritoryGetToOneRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppPriceSchedulesApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsTerritories': ["null"] // [String] | the fields to include for returned resources of type territories
};
apiInstance.appPriceSchedulesBaseTerritoryGetToOneRelated(id, opts, (error, data, response) => {
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


## appPriceSchedulesBaseTerritoryGetToOneRelationship

> AppPriceScheduleBaseTerritoryLinkageResponse appPriceSchedulesBaseTerritoryGetToOneRelationship(id)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppPriceSchedulesApi();
let id = "id_example"; // String | the id of the requested resource
apiInstance.appPriceSchedulesBaseTerritoryGetToOneRelationship(id, (error, data, response) => {
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

[**AppPriceScheduleBaseTerritoryLinkageResponse**](AppPriceScheduleBaseTerritoryLinkageResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## appPriceSchedulesCreateInstance

> AppPriceScheduleResponse appPriceSchedulesCreateInstance(appPriceScheduleCreateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppPriceSchedulesApi();
let appPriceScheduleCreateRequest = new AppStoreConnectApi.AppPriceScheduleCreateRequest(); // AppPriceScheduleCreateRequest | AppPriceSchedule representation
apiInstance.appPriceSchedulesCreateInstance(appPriceScheduleCreateRequest, (error, data, response) => {
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
 **appPriceScheduleCreateRequest** | [**AppPriceScheduleCreateRequest**](AppPriceScheduleCreateRequest.md)| AppPriceSchedule representation | 

### Return type

[**AppPriceScheduleResponse**](AppPriceScheduleResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## appPriceSchedulesGetInstance

> AppPriceScheduleResponse appPriceSchedulesGetInstance(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppPriceSchedulesApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsAppPriceSchedules': ["null"], // [String] | the fields to include for returned resources of type appPriceSchedules
  'fieldsTerritories': ["null"], // [String] | the fields to include for returned resources of type territories
  'fieldsAppPrices': ["null"], // [String] | the fields to include for returned resources of type appPrices
  'include': ["null"], // [String] | comma-separated list of relationships to include
  'limitAutomaticPrices': 56, // Number | maximum number of related automaticPrices returned (when they are included)
  'limitManualPrices': 56 // Number | maximum number of related manualPrices returned (when they are included)
};
apiInstance.appPriceSchedulesGetInstance(id, opts, (error, data, response) => {
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
 **fieldsAppPriceSchedules** | [**[String]**](String.md)| the fields to include for returned resources of type appPriceSchedules | [optional] 
 **fieldsTerritories** | [**[String]**](String.md)| the fields to include for returned resources of type territories | [optional] 
 **fieldsAppPrices** | [**[String]**](String.md)| the fields to include for returned resources of type appPrices | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 
 **limitAutomaticPrices** | **Number**| maximum number of related automaticPrices returned (when they are included) | [optional] 
 **limitManualPrices** | **Number**| maximum number of related manualPrices returned (when they are included) | [optional] 

### Return type

[**AppPriceScheduleResponse**](AppPriceScheduleResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## appPriceSchedulesManualPricesGetToManyRelated

> AppPricesV2Response appPriceSchedulesManualPricesGetToManyRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppPriceSchedulesApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'filterStartDate': ["null"], // [String] | filter by attribute 'startDate'
  'filterEndDate': ["null"], // [String] | filter by attribute 'endDate'
  'filterTerritory': ["null"], // [String] | filter by id(s) of related 'territory'
  'fieldsAppPrices': ["null"], // [String] | the fields to include for returned resources of type appPrices
  'fieldsAppPricePoints': ["null"], // [String] | the fields to include for returned resources of type appPricePoints
  'fieldsTerritories': ["null"], // [String] | the fields to include for returned resources of type territories
  'limit': 56, // Number | maximum resources per page
  'include': ["null"] // [String] | comma-separated list of relationships to include
};
apiInstance.appPriceSchedulesManualPricesGetToManyRelated(id, opts, (error, data, response) => {
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
 **filterStartDate** | [**[String]**](String.md)| filter by attribute &#39;startDate&#39; | [optional] 
 **filterEndDate** | [**[String]**](String.md)| filter by attribute &#39;endDate&#39; | [optional] 
 **filterTerritory** | [**[String]**](String.md)| filter by id(s) of related &#39;territory&#39; | [optional] 
 **fieldsAppPrices** | [**[String]**](String.md)| the fields to include for returned resources of type appPrices | [optional] 
 **fieldsAppPricePoints** | [**[String]**](String.md)| the fields to include for returned resources of type appPricePoints | [optional] 
 **fieldsTerritories** | [**[String]**](String.md)| the fields to include for returned resources of type territories | [optional] 
 **limit** | **Number**| maximum resources per page | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 

### Return type

[**AppPricesV2Response**](AppPricesV2Response.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## appPriceSchedulesManualPricesGetToManyRelationship

> AppPriceScheduleManualPricesLinkagesResponse appPriceSchedulesManualPricesGetToManyRelationship(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppPriceSchedulesApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'limit': 56 // Number | maximum resources per page
};
apiInstance.appPriceSchedulesManualPricesGetToManyRelationship(id, opts, (error, data, response) => {
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

[**AppPriceScheduleManualPricesLinkagesResponse**](AppPriceScheduleManualPricesLinkagesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

