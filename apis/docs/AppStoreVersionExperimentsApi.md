# AppStoreConnectApi.AppStoreVersionExperimentsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**appStoreVersionExperimentsAppStoreVersionExperimentTreatmentsGetToManyRelated**](AppStoreVersionExperimentsApi.md#appStoreVersionExperimentsAppStoreVersionExperimentTreatmentsGetToManyRelated) | **GET** /v1/appStoreVersionExperiments/{id}/appStoreVersionExperimentTreatments | 
[**appStoreVersionExperimentsAppStoreVersionExperimentTreatmentsGetToManyRelationship**](AppStoreVersionExperimentsApi.md#appStoreVersionExperimentsAppStoreVersionExperimentTreatmentsGetToManyRelationship) | **GET** /v1/appStoreVersionExperiments/{id}/relationships/appStoreVersionExperimentTreatments | 
[**appStoreVersionExperimentsCreateInstance**](AppStoreVersionExperimentsApi.md#appStoreVersionExperimentsCreateInstance) | **POST** /v1/appStoreVersionExperiments | 
[**appStoreVersionExperimentsDeleteInstance**](AppStoreVersionExperimentsApi.md#appStoreVersionExperimentsDeleteInstance) | **DELETE** /v1/appStoreVersionExperiments/{id} | 
[**appStoreVersionExperimentsGetInstance**](AppStoreVersionExperimentsApi.md#appStoreVersionExperimentsGetInstance) | **GET** /v1/appStoreVersionExperiments/{id} | 
[**appStoreVersionExperimentsUpdateInstance**](AppStoreVersionExperimentsApi.md#appStoreVersionExperimentsUpdateInstance) | **PATCH** /v1/appStoreVersionExperiments/{id} | 
[**appStoreVersionExperimentsV2AppStoreVersionExperimentTreatmentsGetToManyRelated**](AppStoreVersionExperimentsApi.md#appStoreVersionExperimentsV2AppStoreVersionExperimentTreatmentsGetToManyRelated) | **GET** /v2/appStoreVersionExperiments/{id}/appStoreVersionExperimentTreatments | 
[**appStoreVersionExperimentsV2AppStoreVersionExperimentTreatmentsGetToManyRelationship**](AppStoreVersionExperimentsApi.md#appStoreVersionExperimentsV2AppStoreVersionExperimentTreatmentsGetToManyRelationship) | **GET** /v2/appStoreVersionExperiments/{id}/relationships/appStoreVersionExperimentTreatments | 
[**appStoreVersionExperimentsV2CreateInstance**](AppStoreVersionExperimentsApi.md#appStoreVersionExperimentsV2CreateInstance) | **POST** /v2/appStoreVersionExperiments | 
[**appStoreVersionExperimentsV2DeleteInstance**](AppStoreVersionExperimentsApi.md#appStoreVersionExperimentsV2DeleteInstance) | **DELETE** /v2/appStoreVersionExperiments/{id} | 
[**appStoreVersionExperimentsV2GetInstance**](AppStoreVersionExperimentsApi.md#appStoreVersionExperimentsV2GetInstance) | **GET** /v2/appStoreVersionExperiments/{id} | 
[**appStoreVersionExperimentsV2UpdateInstance**](AppStoreVersionExperimentsApi.md#appStoreVersionExperimentsV2UpdateInstance) | **PATCH** /v2/appStoreVersionExperiments/{id} | 



## appStoreVersionExperimentsAppStoreVersionExperimentTreatmentsGetToManyRelated

> AppStoreVersionExperimentTreatmentsResponse appStoreVersionExperimentsAppStoreVersionExperimentTreatmentsGetToManyRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppStoreVersionExperimentsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsAppStoreVersionExperimentTreatments': ["null"], // [String] | the fields to include for returned resources of type appStoreVersionExperimentTreatments
  'fieldsAppStoreVersionExperiments': ["null"], // [String] | the fields to include for returned resources of type appStoreVersionExperiments
  'fieldsAppStoreVersionExperimentTreatmentLocalizations': ["null"], // [String] | the fields to include for returned resources of type appStoreVersionExperimentTreatmentLocalizations
  'limit': 56, // Number | maximum resources per page
  'include': ["null"], // [String] | comma-separated list of relationships to include
  'limitAppStoreVersionExperimentTreatmentLocalizations': 56 // Number | maximum number of related appStoreVersionExperimentTreatmentLocalizations returned (when they are included)
};
apiInstance.appStoreVersionExperimentsAppStoreVersionExperimentTreatmentsGetToManyRelated(id, opts, (error, data, response) => {
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
 **fieldsAppStoreVersionExperimentTreatments** | [**[String]**](String.md)| the fields to include for returned resources of type appStoreVersionExperimentTreatments | [optional] 
 **fieldsAppStoreVersionExperiments** | [**[String]**](String.md)| the fields to include for returned resources of type appStoreVersionExperiments | [optional] 
 **fieldsAppStoreVersionExperimentTreatmentLocalizations** | [**[String]**](String.md)| the fields to include for returned resources of type appStoreVersionExperimentTreatmentLocalizations | [optional] 
 **limit** | **Number**| maximum resources per page | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 
 **limitAppStoreVersionExperimentTreatmentLocalizations** | **Number**| maximum number of related appStoreVersionExperimentTreatmentLocalizations returned (when they are included) | [optional] 

### Return type

[**AppStoreVersionExperimentTreatmentsResponse**](AppStoreVersionExperimentTreatmentsResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## appStoreVersionExperimentsAppStoreVersionExperimentTreatmentsGetToManyRelationship

> AppStoreVersionExperimentAppStoreVersionExperimentTreatmentsLinkagesResponse appStoreVersionExperimentsAppStoreVersionExperimentTreatmentsGetToManyRelationship(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppStoreVersionExperimentsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'limit': 56 // Number | maximum resources per page
};
apiInstance.appStoreVersionExperimentsAppStoreVersionExperimentTreatmentsGetToManyRelationship(id, opts, (error, data, response) => {
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

[**AppStoreVersionExperimentAppStoreVersionExperimentTreatmentsLinkagesResponse**](AppStoreVersionExperimentAppStoreVersionExperimentTreatmentsLinkagesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## appStoreVersionExperimentsCreateInstance

> AppStoreVersionExperimentResponse appStoreVersionExperimentsCreateInstance(appStoreVersionExperimentCreateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppStoreVersionExperimentsApi();
let appStoreVersionExperimentCreateRequest = new AppStoreConnectApi.AppStoreVersionExperimentCreateRequest(); // AppStoreVersionExperimentCreateRequest | AppStoreVersionExperiment representation
apiInstance.appStoreVersionExperimentsCreateInstance(appStoreVersionExperimentCreateRequest, (error, data, response) => {
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
 **appStoreVersionExperimentCreateRequest** | [**AppStoreVersionExperimentCreateRequest**](AppStoreVersionExperimentCreateRequest.md)| AppStoreVersionExperiment representation | 

### Return type

[**AppStoreVersionExperimentResponse**](AppStoreVersionExperimentResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## appStoreVersionExperimentsDeleteInstance

> appStoreVersionExperimentsDeleteInstance(id)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppStoreVersionExperimentsApi();
let id = "id_example"; // String | the id of the requested resource
apiInstance.appStoreVersionExperimentsDeleteInstance(id, (error, data, response) => {
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


## appStoreVersionExperimentsGetInstance

> AppStoreVersionExperimentResponse appStoreVersionExperimentsGetInstance(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppStoreVersionExperimentsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsAppStoreVersionExperiments': ["null"], // [String] | the fields to include for returned resources of type appStoreVersionExperiments
  'fieldsAppStoreVersionExperimentTreatments': ["null"], // [String] | the fields to include for returned resources of type appStoreVersionExperimentTreatments
  'include': ["null"], // [String] | comma-separated list of relationships to include
  'limitAppStoreVersionExperimentTreatments': 56 // Number | maximum number of related appStoreVersionExperimentTreatments returned (when they are included)
};
apiInstance.appStoreVersionExperimentsGetInstance(id, opts, (error, data, response) => {
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
 **fieldsAppStoreVersionExperiments** | [**[String]**](String.md)| the fields to include for returned resources of type appStoreVersionExperiments | [optional] 
 **fieldsAppStoreVersionExperimentTreatments** | [**[String]**](String.md)| the fields to include for returned resources of type appStoreVersionExperimentTreatments | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 
 **limitAppStoreVersionExperimentTreatments** | **Number**| maximum number of related appStoreVersionExperimentTreatments returned (when they are included) | [optional] 

### Return type

[**AppStoreVersionExperimentResponse**](AppStoreVersionExperimentResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## appStoreVersionExperimentsUpdateInstance

> AppStoreVersionExperimentResponse appStoreVersionExperimentsUpdateInstance(id, appStoreVersionExperimentUpdateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppStoreVersionExperimentsApi();
let id = "id_example"; // String | the id of the requested resource
let appStoreVersionExperimentUpdateRequest = new AppStoreConnectApi.AppStoreVersionExperimentUpdateRequest(); // AppStoreVersionExperimentUpdateRequest | AppStoreVersionExperiment representation
apiInstance.appStoreVersionExperimentsUpdateInstance(id, appStoreVersionExperimentUpdateRequest, (error, data, response) => {
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
 **appStoreVersionExperimentUpdateRequest** | [**AppStoreVersionExperimentUpdateRequest**](AppStoreVersionExperimentUpdateRequest.md)| AppStoreVersionExperiment representation | 

### Return type

[**AppStoreVersionExperimentResponse**](AppStoreVersionExperimentResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## appStoreVersionExperimentsV2AppStoreVersionExperimentTreatmentsGetToManyRelated

> AppStoreVersionExperimentTreatmentsResponse appStoreVersionExperimentsV2AppStoreVersionExperimentTreatmentsGetToManyRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppStoreVersionExperimentsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsAppStoreVersionExperimentTreatments': ["null"], // [String] | the fields to include for returned resources of type appStoreVersionExperimentTreatments
  'fieldsAppStoreVersionExperiments': ["null"], // [String] | the fields to include for returned resources of type appStoreVersionExperiments
  'fieldsAppStoreVersionExperimentTreatmentLocalizations': ["null"], // [String] | the fields to include for returned resources of type appStoreVersionExperimentTreatmentLocalizations
  'limit': 56, // Number | maximum resources per page
  'include': ["null"], // [String] | comma-separated list of relationships to include
  'limitAppStoreVersionExperimentTreatmentLocalizations': 56 // Number | maximum number of related appStoreVersionExperimentTreatmentLocalizations returned (when they are included)
};
apiInstance.appStoreVersionExperimentsV2AppStoreVersionExperimentTreatmentsGetToManyRelated(id, opts, (error, data, response) => {
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
 **fieldsAppStoreVersionExperimentTreatments** | [**[String]**](String.md)| the fields to include for returned resources of type appStoreVersionExperimentTreatments | [optional] 
 **fieldsAppStoreVersionExperiments** | [**[String]**](String.md)| the fields to include for returned resources of type appStoreVersionExperiments | [optional] 
 **fieldsAppStoreVersionExperimentTreatmentLocalizations** | [**[String]**](String.md)| the fields to include for returned resources of type appStoreVersionExperimentTreatmentLocalizations | [optional] 
 **limit** | **Number**| maximum resources per page | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 
 **limitAppStoreVersionExperimentTreatmentLocalizations** | **Number**| maximum number of related appStoreVersionExperimentTreatmentLocalizations returned (when they are included) | [optional] 

### Return type

[**AppStoreVersionExperimentTreatmentsResponse**](AppStoreVersionExperimentTreatmentsResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## appStoreVersionExperimentsV2AppStoreVersionExperimentTreatmentsGetToManyRelationship

> AppStoreVersionExperimentV2AppStoreVersionExperimentTreatmentsLinkagesResponse appStoreVersionExperimentsV2AppStoreVersionExperimentTreatmentsGetToManyRelationship(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppStoreVersionExperimentsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'limit': 56 // Number | maximum resources per page
};
apiInstance.appStoreVersionExperimentsV2AppStoreVersionExperimentTreatmentsGetToManyRelationship(id, opts, (error, data, response) => {
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

[**AppStoreVersionExperimentV2AppStoreVersionExperimentTreatmentsLinkagesResponse**](AppStoreVersionExperimentV2AppStoreVersionExperimentTreatmentsLinkagesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## appStoreVersionExperimentsV2CreateInstance

> AppStoreVersionExperimentV2Response appStoreVersionExperimentsV2CreateInstance(appStoreVersionExperimentV2CreateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppStoreVersionExperimentsApi();
let appStoreVersionExperimentV2CreateRequest = new AppStoreConnectApi.AppStoreVersionExperimentV2CreateRequest(); // AppStoreVersionExperimentV2CreateRequest | AppStoreVersionExperiment representation
apiInstance.appStoreVersionExperimentsV2CreateInstance(appStoreVersionExperimentV2CreateRequest, (error, data, response) => {
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
 **appStoreVersionExperimentV2CreateRequest** | [**AppStoreVersionExperimentV2CreateRequest**](AppStoreVersionExperimentV2CreateRequest.md)| AppStoreVersionExperiment representation | 

### Return type

[**AppStoreVersionExperimentV2Response**](AppStoreVersionExperimentV2Response.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## appStoreVersionExperimentsV2DeleteInstance

> appStoreVersionExperimentsV2DeleteInstance(id)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppStoreVersionExperimentsApi();
let id = "id_example"; // String | the id of the requested resource
apiInstance.appStoreVersionExperimentsV2DeleteInstance(id, (error, data, response) => {
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


## appStoreVersionExperimentsV2GetInstance

> AppStoreVersionExperimentV2Response appStoreVersionExperimentsV2GetInstance(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppStoreVersionExperimentsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsAppStoreVersionExperiments': ["null"], // [String] | the fields to include for returned resources of type appStoreVersionExperiments
  'fieldsAppStoreVersionExperimentTreatments': ["null"], // [String] | the fields to include for returned resources of type appStoreVersionExperimentTreatments
  'include': ["null"], // [String] | comma-separated list of relationships to include
  'limitAppStoreVersionExperimentTreatments': 56, // Number | maximum number of related appStoreVersionExperimentTreatments returned (when they are included)
  'limitControlVersions': 56 // Number | maximum number of related controlVersions returned (when they are included)
};
apiInstance.appStoreVersionExperimentsV2GetInstance(id, opts, (error, data, response) => {
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
 **fieldsAppStoreVersionExperiments** | [**[String]**](String.md)| the fields to include for returned resources of type appStoreVersionExperiments | [optional] 
 **fieldsAppStoreVersionExperimentTreatments** | [**[String]**](String.md)| the fields to include for returned resources of type appStoreVersionExperimentTreatments | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 
 **limitAppStoreVersionExperimentTreatments** | **Number**| maximum number of related appStoreVersionExperimentTreatments returned (when they are included) | [optional] 
 **limitControlVersions** | **Number**| maximum number of related controlVersions returned (when they are included) | [optional] 

### Return type

[**AppStoreVersionExperimentV2Response**](AppStoreVersionExperimentV2Response.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## appStoreVersionExperimentsV2UpdateInstance

> AppStoreVersionExperimentV2Response appStoreVersionExperimentsV2UpdateInstance(id, appStoreVersionExperimentV2UpdateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.AppStoreVersionExperimentsApi();
let id = "id_example"; // String | the id of the requested resource
let appStoreVersionExperimentV2UpdateRequest = new AppStoreConnectApi.AppStoreVersionExperimentV2UpdateRequest(); // AppStoreVersionExperimentV2UpdateRequest | AppStoreVersionExperiment representation
apiInstance.appStoreVersionExperimentsV2UpdateInstance(id, appStoreVersionExperimentV2UpdateRequest, (error, data, response) => {
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
 **appStoreVersionExperimentV2UpdateRequest** | [**AppStoreVersionExperimentV2UpdateRequest**](AppStoreVersionExperimentV2UpdateRequest.md)| AppStoreVersionExperiment representation | 

### Return type

[**AppStoreVersionExperimentV2Response**](AppStoreVersionExperimentV2Response.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

