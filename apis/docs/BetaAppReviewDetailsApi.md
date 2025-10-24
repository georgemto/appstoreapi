# AppStoreConnectApi.BetaAppReviewDetailsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**betaAppReviewDetailsAppGetToOneRelated**](BetaAppReviewDetailsApi.md#betaAppReviewDetailsAppGetToOneRelated) | **GET** /v1/betaAppReviewDetails/{id}/app | 
[**betaAppReviewDetailsAppGetToOneRelationship**](BetaAppReviewDetailsApi.md#betaAppReviewDetailsAppGetToOneRelationship) | **GET** /v1/betaAppReviewDetails/{id}/relationships/app | 
[**betaAppReviewDetailsGetCollection**](BetaAppReviewDetailsApi.md#betaAppReviewDetailsGetCollection) | **GET** /v1/betaAppReviewDetails | 
[**betaAppReviewDetailsGetInstance**](BetaAppReviewDetailsApi.md#betaAppReviewDetailsGetInstance) | **GET** /v1/betaAppReviewDetails/{id} | 
[**betaAppReviewDetailsUpdateInstance**](BetaAppReviewDetailsApi.md#betaAppReviewDetailsUpdateInstance) | **PATCH** /v1/betaAppReviewDetails/{id} | 



## betaAppReviewDetailsAppGetToOneRelated

> AppWithoutIncludesResponse betaAppReviewDetailsAppGetToOneRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.BetaAppReviewDetailsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsApps': ["null"] // [String] | the fields to include for returned resources of type apps
};
apiInstance.betaAppReviewDetailsAppGetToOneRelated(id, opts, (error, data, response) => {
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
 **fieldsApps** | [**[String]**](String.md)| the fields to include for returned resources of type apps | [optional] 

### Return type

[**AppWithoutIncludesResponse**](AppWithoutIncludesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## betaAppReviewDetailsAppGetToOneRelationship

> BetaAppReviewDetailAppLinkageResponse betaAppReviewDetailsAppGetToOneRelationship(id)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.BetaAppReviewDetailsApi();
let id = "id_example"; // String | the id of the requested resource
apiInstance.betaAppReviewDetailsAppGetToOneRelationship(id, (error, data, response) => {
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

[**BetaAppReviewDetailAppLinkageResponse**](BetaAppReviewDetailAppLinkageResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## betaAppReviewDetailsGetCollection

> BetaAppReviewDetailsResponse betaAppReviewDetailsGetCollection(filterApp, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.BetaAppReviewDetailsApi();
let filterApp = ["null"]; // [String] | filter by id(s) of related 'app'
let opts = {
  'fieldsBetaAppReviewDetails': ["null"], // [String] | the fields to include for returned resources of type betaAppReviewDetails
  'fieldsApps': ["null"], // [String] | the fields to include for returned resources of type apps
  'limit': 56, // Number | maximum resources per page
  'include': ["null"] // [String] | comma-separated list of relationships to include
};
apiInstance.betaAppReviewDetailsGetCollection(filterApp, opts, (error, data, response) => {
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
 **filterApp** | [**[String]**](String.md)| filter by id(s) of related &#39;app&#39; | 
 **fieldsBetaAppReviewDetails** | [**[String]**](String.md)| the fields to include for returned resources of type betaAppReviewDetails | [optional] 
 **fieldsApps** | [**[String]**](String.md)| the fields to include for returned resources of type apps | [optional] 
 **limit** | **Number**| maximum resources per page | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 

### Return type

[**BetaAppReviewDetailsResponse**](BetaAppReviewDetailsResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## betaAppReviewDetailsGetInstance

> BetaAppReviewDetailResponse betaAppReviewDetailsGetInstance(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.BetaAppReviewDetailsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsBetaAppReviewDetails': ["null"], // [String] | the fields to include for returned resources of type betaAppReviewDetails
  'fieldsApps': ["null"], // [String] | the fields to include for returned resources of type apps
  'include': ["null"] // [String] | comma-separated list of relationships to include
};
apiInstance.betaAppReviewDetailsGetInstance(id, opts, (error, data, response) => {
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
 **fieldsBetaAppReviewDetails** | [**[String]**](String.md)| the fields to include for returned resources of type betaAppReviewDetails | [optional] 
 **fieldsApps** | [**[String]**](String.md)| the fields to include for returned resources of type apps | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 

### Return type

[**BetaAppReviewDetailResponse**](BetaAppReviewDetailResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## betaAppReviewDetailsUpdateInstance

> BetaAppReviewDetailResponse betaAppReviewDetailsUpdateInstance(id, betaAppReviewDetailUpdateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.BetaAppReviewDetailsApi();
let id = "id_example"; // String | the id of the requested resource
let betaAppReviewDetailUpdateRequest = new AppStoreConnectApi.BetaAppReviewDetailUpdateRequest(); // BetaAppReviewDetailUpdateRequest | BetaAppReviewDetail representation
apiInstance.betaAppReviewDetailsUpdateInstance(id, betaAppReviewDetailUpdateRequest, (error, data, response) => {
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
 **betaAppReviewDetailUpdateRequest** | [**BetaAppReviewDetailUpdateRequest**](BetaAppReviewDetailUpdateRequest.md)| BetaAppReviewDetail representation | 

### Return type

[**BetaAppReviewDetailResponse**](BetaAppReviewDetailResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

