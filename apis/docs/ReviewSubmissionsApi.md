# AppStoreConnectApi.ReviewSubmissionsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**reviewSubmissionsCreateInstance**](ReviewSubmissionsApi.md#reviewSubmissionsCreateInstance) | **POST** /v1/reviewSubmissions | 
[**reviewSubmissionsGetCollection**](ReviewSubmissionsApi.md#reviewSubmissionsGetCollection) | **GET** /v1/reviewSubmissions | 
[**reviewSubmissionsGetInstance**](ReviewSubmissionsApi.md#reviewSubmissionsGetInstance) | **GET** /v1/reviewSubmissions/{id} | 
[**reviewSubmissionsItemsGetToManyRelated**](ReviewSubmissionsApi.md#reviewSubmissionsItemsGetToManyRelated) | **GET** /v1/reviewSubmissions/{id}/items | 
[**reviewSubmissionsItemsGetToManyRelationship**](ReviewSubmissionsApi.md#reviewSubmissionsItemsGetToManyRelationship) | **GET** /v1/reviewSubmissions/{id}/relationships/items | 
[**reviewSubmissionsUpdateInstance**](ReviewSubmissionsApi.md#reviewSubmissionsUpdateInstance) | **PATCH** /v1/reviewSubmissions/{id} | 



## reviewSubmissionsCreateInstance

> ReviewSubmissionResponse reviewSubmissionsCreateInstance(reviewSubmissionCreateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.ReviewSubmissionsApi();
let reviewSubmissionCreateRequest = new AppStoreConnectApi.ReviewSubmissionCreateRequest(); // ReviewSubmissionCreateRequest | ReviewSubmission representation
apiInstance.reviewSubmissionsCreateInstance(reviewSubmissionCreateRequest, (error, data, response) => {
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
 **reviewSubmissionCreateRequest** | [**ReviewSubmissionCreateRequest**](ReviewSubmissionCreateRequest.md)| ReviewSubmission representation | 

### Return type

[**ReviewSubmissionResponse**](ReviewSubmissionResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## reviewSubmissionsGetCollection

> ReviewSubmissionsResponse reviewSubmissionsGetCollection(filterApp, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.ReviewSubmissionsApi();
let filterApp = ["null"]; // [String] | filter by id(s) of related 'app'
let opts = {
  'filterPlatform': ["null"], // [String] | filter by attribute 'platform'
  'filterState': ["null"], // [String] | filter by attribute 'state'
  'fieldsReviewSubmissions': ["null"], // [String] | the fields to include for returned resources of type reviewSubmissions
  'fieldsReviewSubmissionItems': ["null"], // [String] | the fields to include for returned resources of type reviewSubmissionItems
  'limit': 56, // Number | maximum resources per page
  'include': ["null"], // [String] | comma-separated list of relationships to include
  'limitItems': 56 // Number | maximum number of related items returned (when they are included)
};
apiInstance.reviewSubmissionsGetCollection(filterApp, opts, (error, data, response) => {
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
 **filterPlatform** | [**[String]**](String.md)| filter by attribute &#39;platform&#39; | [optional] 
 **filterState** | [**[String]**](String.md)| filter by attribute &#39;state&#39; | [optional] 
 **fieldsReviewSubmissions** | [**[String]**](String.md)| the fields to include for returned resources of type reviewSubmissions | [optional] 
 **fieldsReviewSubmissionItems** | [**[String]**](String.md)| the fields to include for returned resources of type reviewSubmissionItems | [optional] 
 **limit** | **Number**| maximum resources per page | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 
 **limitItems** | **Number**| maximum number of related items returned (when they are included) | [optional] 

### Return type

[**ReviewSubmissionsResponse**](ReviewSubmissionsResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## reviewSubmissionsGetInstance

> ReviewSubmissionResponse reviewSubmissionsGetInstance(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.ReviewSubmissionsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsReviewSubmissions': ["null"], // [String] | the fields to include for returned resources of type reviewSubmissions
  'fieldsReviewSubmissionItems': ["null"], // [String] | the fields to include for returned resources of type reviewSubmissionItems
  'include': ["null"], // [String] | comma-separated list of relationships to include
  'limitItems': 56 // Number | maximum number of related items returned (when they are included)
};
apiInstance.reviewSubmissionsGetInstance(id, opts, (error, data, response) => {
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
 **fieldsReviewSubmissions** | [**[String]**](String.md)| the fields to include for returned resources of type reviewSubmissions | [optional] 
 **fieldsReviewSubmissionItems** | [**[String]**](String.md)| the fields to include for returned resources of type reviewSubmissionItems | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 
 **limitItems** | **Number**| maximum number of related items returned (when they are included) | [optional] 

### Return type

[**ReviewSubmissionResponse**](ReviewSubmissionResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## reviewSubmissionsItemsGetToManyRelated

> ReviewSubmissionItemsResponse reviewSubmissionsItemsGetToManyRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.ReviewSubmissionsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsReviewSubmissionItems': ["null"], // [String] | the fields to include for returned resources of type reviewSubmissionItems
  'fieldsAppStoreVersions': ["null"], // [String] | the fields to include for returned resources of type appStoreVersions
  'fieldsAppCustomProductPageVersions': ["null"], // [String] | the fields to include for returned resources of type appCustomProductPageVersions
  'fieldsAppStoreVersionExperiments': ["null"], // [String] | the fields to include for returned resources of type appStoreVersionExperiments
  'fieldsAppEvents': ["null"], // [String] | the fields to include for returned resources of type appEvents
  'fieldsBackgroundAssetVersions': ["null"], // [String] | the fields to include for returned resources of type backgroundAssetVersions
  'limit': 56, // Number | maximum resources per page
  'include': ["null"] // [String] | comma-separated list of relationships to include
};
apiInstance.reviewSubmissionsItemsGetToManyRelated(id, opts, (error, data, response) => {
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
 **fieldsReviewSubmissionItems** | [**[String]**](String.md)| the fields to include for returned resources of type reviewSubmissionItems | [optional] 
 **fieldsAppStoreVersions** | [**[String]**](String.md)| the fields to include for returned resources of type appStoreVersions | [optional] 
 **fieldsAppCustomProductPageVersions** | [**[String]**](String.md)| the fields to include for returned resources of type appCustomProductPageVersions | [optional] 
 **fieldsAppStoreVersionExperiments** | [**[String]**](String.md)| the fields to include for returned resources of type appStoreVersionExperiments | [optional] 
 **fieldsAppEvents** | [**[String]**](String.md)| the fields to include for returned resources of type appEvents | [optional] 
 **fieldsBackgroundAssetVersions** | [**[String]**](String.md)| the fields to include for returned resources of type backgroundAssetVersions | [optional] 
 **limit** | **Number**| maximum resources per page | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 

### Return type

[**ReviewSubmissionItemsResponse**](ReviewSubmissionItemsResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## reviewSubmissionsItemsGetToManyRelationship

> ReviewSubmissionItemsLinkagesResponse reviewSubmissionsItemsGetToManyRelationship(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.ReviewSubmissionsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'limit': 56 // Number | maximum resources per page
};
apiInstance.reviewSubmissionsItemsGetToManyRelationship(id, opts, (error, data, response) => {
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

[**ReviewSubmissionItemsLinkagesResponse**](ReviewSubmissionItemsLinkagesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## reviewSubmissionsUpdateInstance

> ReviewSubmissionResponse reviewSubmissionsUpdateInstance(id, reviewSubmissionUpdateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.ReviewSubmissionsApi();
let id = "id_example"; // String | the id of the requested resource
let reviewSubmissionUpdateRequest = new AppStoreConnectApi.ReviewSubmissionUpdateRequest(); // ReviewSubmissionUpdateRequest | ReviewSubmission representation
apiInstance.reviewSubmissionsUpdateInstance(id, reviewSubmissionUpdateRequest, (error, data, response) => {
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
 **reviewSubmissionUpdateRequest** | [**ReviewSubmissionUpdateRequest**](ReviewSubmissionUpdateRequest.md)| ReviewSubmission representation | 

### Return type

[**ReviewSubmissionResponse**](ReviewSubmissionResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

