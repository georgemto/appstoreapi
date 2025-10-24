# AppStoreConnectApi.PassTypeIdsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**passTypeIdsCertificatesGetToManyRelated**](PassTypeIdsApi.md#passTypeIdsCertificatesGetToManyRelated) | **GET** /v1/passTypeIds/{id}/certificates | 
[**passTypeIdsCertificatesGetToManyRelationship**](PassTypeIdsApi.md#passTypeIdsCertificatesGetToManyRelationship) | **GET** /v1/passTypeIds/{id}/relationships/certificates | 
[**passTypeIdsCreateInstance**](PassTypeIdsApi.md#passTypeIdsCreateInstance) | **POST** /v1/passTypeIds | 
[**passTypeIdsDeleteInstance**](PassTypeIdsApi.md#passTypeIdsDeleteInstance) | **DELETE** /v1/passTypeIds/{id} | 
[**passTypeIdsGetCollection**](PassTypeIdsApi.md#passTypeIdsGetCollection) | **GET** /v1/passTypeIds | 
[**passTypeIdsGetInstance**](PassTypeIdsApi.md#passTypeIdsGetInstance) | **GET** /v1/passTypeIds/{id} | 
[**passTypeIdsUpdateInstance**](PassTypeIdsApi.md#passTypeIdsUpdateInstance) | **PATCH** /v1/passTypeIds/{id} | 



## passTypeIdsCertificatesGetToManyRelated

> CertificatesResponse passTypeIdsCertificatesGetToManyRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.PassTypeIdsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'filterDisplayName': ["null"], // [String] | filter by attribute 'displayName'
  'filterCertificateType': ["null"], // [String] | filter by attribute 'certificateType'
  'filterSerialNumber': ["null"], // [String] | filter by attribute 'serialNumber'
  'filterId': ["null"], // [String] | filter by id(s)
  'sort': ["null"], // [String] | comma-separated list of sort expressions; resources will be sorted as specified
  'fieldsCertificates': ["null"], // [String] | the fields to include for returned resources of type certificates
  'fieldsPassTypeIds': ["null"], // [String] | the fields to include for returned resources of type passTypeIds
  'limit': 56, // Number | maximum resources per page
  'include': ["null"] // [String] | comma-separated list of relationships to include
};
apiInstance.passTypeIdsCertificatesGetToManyRelated(id, opts, (error, data, response) => {
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
 **filterDisplayName** | [**[String]**](String.md)| filter by attribute &#39;displayName&#39; | [optional] 
 **filterCertificateType** | [**[String]**](String.md)| filter by attribute &#39;certificateType&#39; | [optional] 
 **filterSerialNumber** | [**[String]**](String.md)| filter by attribute &#39;serialNumber&#39; | [optional] 
 **filterId** | [**[String]**](String.md)| filter by id(s) | [optional] 
 **sort** | [**[String]**](String.md)| comma-separated list of sort expressions; resources will be sorted as specified | [optional] 
 **fieldsCertificates** | [**[String]**](String.md)| the fields to include for returned resources of type certificates | [optional] 
 **fieldsPassTypeIds** | [**[String]**](String.md)| the fields to include for returned resources of type passTypeIds | [optional] 
 **limit** | **Number**| maximum resources per page | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 

### Return type

[**CertificatesResponse**](CertificatesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## passTypeIdsCertificatesGetToManyRelationship

> PassTypeIdCertificatesLinkagesResponse passTypeIdsCertificatesGetToManyRelationship(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.PassTypeIdsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'limit': 56 // Number | maximum resources per page
};
apiInstance.passTypeIdsCertificatesGetToManyRelationship(id, opts, (error, data, response) => {
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

[**PassTypeIdCertificatesLinkagesResponse**](PassTypeIdCertificatesLinkagesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## passTypeIdsCreateInstance

> PassTypeIdResponse passTypeIdsCreateInstance(passTypeIdCreateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.PassTypeIdsApi();
let passTypeIdCreateRequest = new AppStoreConnectApi.PassTypeIdCreateRequest(); // PassTypeIdCreateRequest | PassTypeId representation
apiInstance.passTypeIdsCreateInstance(passTypeIdCreateRequest, (error, data, response) => {
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
 **passTypeIdCreateRequest** | [**PassTypeIdCreateRequest**](PassTypeIdCreateRequest.md)| PassTypeId representation | 

### Return type

[**PassTypeIdResponse**](PassTypeIdResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## passTypeIdsDeleteInstance

> passTypeIdsDeleteInstance(id)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.PassTypeIdsApi();
let id = "id_example"; // String | the id of the requested resource
apiInstance.passTypeIdsDeleteInstance(id, (error, data, response) => {
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


## passTypeIdsGetCollection

> PassTypeIdsResponse passTypeIdsGetCollection(opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.PassTypeIdsApi();
let opts = {
  'filterName': ["null"], // [String] | filter by attribute 'name'
  'filterIdentifier': ["null"], // [String] | filter by attribute 'identifier'
  'filterId': ["null"], // [String] | filter by id(s)
  'sort': ["null"], // [String] | comma-separated list of sort expressions; resources will be sorted as specified
  'fieldsPassTypeIds': ["null"], // [String] | the fields to include for returned resources of type passTypeIds
  'fieldsCertificates': ["null"], // [String] | the fields to include for returned resources of type certificates
  'limit': 56, // Number | maximum resources per page
  'include': ["null"], // [String] | comma-separated list of relationships to include
  'limitCertificates': 56 // Number | maximum number of related certificates returned (when they are included)
};
apiInstance.passTypeIdsGetCollection(opts, (error, data, response) => {
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
 **filterName** | [**[String]**](String.md)| filter by attribute &#39;name&#39; | [optional] 
 **filterIdentifier** | [**[String]**](String.md)| filter by attribute &#39;identifier&#39; | [optional] 
 **filterId** | [**[String]**](String.md)| filter by id(s) | [optional] 
 **sort** | [**[String]**](String.md)| comma-separated list of sort expressions; resources will be sorted as specified | [optional] 
 **fieldsPassTypeIds** | [**[String]**](String.md)| the fields to include for returned resources of type passTypeIds | [optional] 
 **fieldsCertificates** | [**[String]**](String.md)| the fields to include for returned resources of type certificates | [optional] 
 **limit** | **Number**| maximum resources per page | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 
 **limitCertificates** | **Number**| maximum number of related certificates returned (when they are included) | [optional] 

### Return type

[**PassTypeIdsResponse**](PassTypeIdsResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## passTypeIdsGetInstance

> PassTypeIdResponse passTypeIdsGetInstance(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.PassTypeIdsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsPassTypeIds': ["null"], // [String] | the fields to include for returned resources of type passTypeIds
  'fieldsCertificates': ["null"], // [String] | the fields to include for returned resources of type certificates
  'include': ["null"], // [String] | comma-separated list of relationships to include
  'limitCertificates': 56 // Number | maximum number of related certificates returned (when they are included)
};
apiInstance.passTypeIdsGetInstance(id, opts, (error, data, response) => {
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
 **fieldsPassTypeIds** | [**[String]**](String.md)| the fields to include for returned resources of type passTypeIds | [optional] 
 **fieldsCertificates** | [**[String]**](String.md)| the fields to include for returned resources of type certificates | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 
 **limitCertificates** | **Number**| maximum number of related certificates returned (when they are included) | [optional] 

### Return type

[**PassTypeIdResponse**](PassTypeIdResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## passTypeIdsUpdateInstance

> PassTypeIdResponse passTypeIdsUpdateInstance(id, passTypeIdUpdateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.PassTypeIdsApi();
let id = "id_example"; // String | the id of the requested resource
let passTypeIdUpdateRequest = new AppStoreConnectApi.PassTypeIdUpdateRequest(); // PassTypeIdUpdateRequest | PassTypeId representation
apiInstance.passTypeIdsUpdateInstance(id, passTypeIdUpdateRequest, (error, data, response) => {
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
 **passTypeIdUpdateRequest** | [**PassTypeIdUpdateRequest**](PassTypeIdUpdateRequest.md)| PassTypeId representation | 

### Return type

[**PassTypeIdResponse**](PassTypeIdResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

