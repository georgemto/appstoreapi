# AppStoreConnectApi.NominationsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**nominationsCreateInstance**](NominationsApi.md#nominationsCreateInstance) | **POST** /v1/nominations | 
[**nominationsDeleteInstance**](NominationsApi.md#nominationsDeleteInstance) | **DELETE** /v1/nominations/{id} | 
[**nominationsGetCollection**](NominationsApi.md#nominationsGetCollection) | **GET** /v1/nominations | 
[**nominationsGetInstance**](NominationsApi.md#nominationsGetInstance) | **GET** /v1/nominations/{id} | 
[**nominationsUpdateInstance**](NominationsApi.md#nominationsUpdateInstance) | **PATCH** /v1/nominations/{id} | 



## nominationsCreateInstance

> NominationResponse nominationsCreateInstance(nominationCreateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.NominationsApi();
let nominationCreateRequest = new AppStoreConnectApi.NominationCreateRequest(); // NominationCreateRequest | Nomination representation
apiInstance.nominationsCreateInstance(nominationCreateRequest, (error, data, response) => {
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
 **nominationCreateRequest** | [**NominationCreateRequest**](NominationCreateRequest.md)| Nomination representation | 

### Return type

[**NominationResponse**](NominationResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## nominationsDeleteInstance

> nominationsDeleteInstance(id)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.NominationsApi();
let id = "id_example"; // String | the id of the requested resource
apiInstance.nominationsDeleteInstance(id, (error, data, response) => {
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


## nominationsGetCollection

> NominationsResponse nominationsGetCollection(filterState, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.NominationsApi();
let filterState = ["null"]; // [String] | filter by attribute 'state'
let opts = {
  'filterType': ["null"], // [String] | filter by attribute 'type'
  'filterRelatedApps': ["null"], // [String] | filter by id(s) of related 'relatedApps'
  'sort': ["null"], // [String] | comma-separated list of sort expressions; resources will be sorted as specified
  'fieldsNominations': ["null"], // [String] | the fields to include for returned resources of type nominations
  'limit': 56, // Number | maximum resources per page
  'include': ["null"], // [String] | comma-separated list of relationships to include
  'limitInAppEvents': 56, // Number | maximum number of related inAppEvents returned (when they are included)
  'limitRelatedApps': 56, // Number | maximum number of related relatedApps returned (when they are included)
  'limitSupportedTerritories': 56 // Number | maximum number of related supportedTerritories returned (when they are included)
};
apiInstance.nominationsGetCollection(filterState, opts, (error, data, response) => {
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
 **filterState** | [**[String]**](String.md)| filter by attribute &#39;state&#39; | 
 **filterType** | [**[String]**](String.md)| filter by attribute &#39;type&#39; | [optional] 
 **filterRelatedApps** | [**[String]**](String.md)| filter by id(s) of related &#39;relatedApps&#39; | [optional] 
 **sort** | [**[String]**](String.md)| comma-separated list of sort expressions; resources will be sorted as specified | [optional] 
 **fieldsNominations** | [**[String]**](String.md)| the fields to include for returned resources of type nominations | [optional] 
 **limit** | **Number**| maximum resources per page | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 
 **limitInAppEvents** | **Number**| maximum number of related inAppEvents returned (when they are included) | [optional] 
 **limitRelatedApps** | **Number**| maximum number of related relatedApps returned (when they are included) | [optional] 
 **limitSupportedTerritories** | **Number**| maximum number of related supportedTerritories returned (when they are included) | [optional] 

### Return type

[**NominationsResponse**](NominationsResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/csv


## nominationsGetInstance

> NominationResponse nominationsGetInstance(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.NominationsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsNominations': ["null"], // [String] | the fields to include for returned resources of type nominations
  'include': ["null"], // [String] | comma-separated list of relationships to include
  'limitInAppEvents': 56, // Number | maximum number of related inAppEvents returned (when they are included)
  'limitRelatedApps': 56, // Number | maximum number of related relatedApps returned (when they are included)
  'limitSupportedTerritories': 56 // Number | maximum number of related supportedTerritories returned (when they are included)
};
apiInstance.nominationsGetInstance(id, opts, (error, data, response) => {
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
 **fieldsNominations** | [**[String]**](String.md)| the fields to include for returned resources of type nominations | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 
 **limitInAppEvents** | **Number**| maximum number of related inAppEvents returned (when they are included) | [optional] 
 **limitRelatedApps** | **Number**| maximum number of related relatedApps returned (when they are included) | [optional] 
 **limitSupportedTerritories** | **Number**| maximum number of related supportedTerritories returned (when they are included) | [optional] 

### Return type

[**NominationResponse**](NominationResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## nominationsUpdateInstance

> NominationResponse nominationsUpdateInstance(id, nominationUpdateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.NominationsApi();
let id = "id_example"; // String | the id of the requested resource
let nominationUpdateRequest = new AppStoreConnectApi.NominationUpdateRequest(); // NominationUpdateRequest | Nomination representation
apiInstance.nominationsUpdateInstance(id, nominationUpdateRequest, (error, data, response) => {
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
 **nominationUpdateRequest** | [**NominationUpdateRequest**](NominationUpdateRequest.md)| Nomination representation | 

### Return type

[**NominationResponse**](NominationResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

