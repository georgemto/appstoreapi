# AppStoreConnectApi.CertificatesApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**certificatesCreateInstance**](CertificatesApi.md#certificatesCreateInstance) | **POST** /v1/certificates | 
[**certificatesDeleteInstance**](CertificatesApi.md#certificatesDeleteInstance) | **DELETE** /v1/certificates/{id} | 
[**certificatesGetCollection**](CertificatesApi.md#certificatesGetCollection) | **GET** /v1/certificates | 
[**certificatesGetInstance**](CertificatesApi.md#certificatesGetInstance) | **GET** /v1/certificates/{id} | 
[**certificatesPassTypeIdGetToOneRelated**](CertificatesApi.md#certificatesPassTypeIdGetToOneRelated) | **GET** /v1/certificates/{id}/passTypeId | 
[**certificatesPassTypeIdGetToOneRelationship**](CertificatesApi.md#certificatesPassTypeIdGetToOneRelationship) | **GET** /v1/certificates/{id}/relationships/passTypeId | 
[**certificatesUpdateInstance**](CertificatesApi.md#certificatesUpdateInstance) | **PATCH** /v1/certificates/{id} | 



## certificatesCreateInstance

> CertificateResponse certificatesCreateInstance(certificateCreateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.CertificatesApi();
let certificateCreateRequest = new AppStoreConnectApi.CertificateCreateRequest(); // CertificateCreateRequest | Certificate representation
apiInstance.certificatesCreateInstance(certificateCreateRequest, (error, data, response) => {
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
 **certificateCreateRequest** | [**CertificateCreateRequest**](CertificateCreateRequest.md)| Certificate representation | 

### Return type

[**CertificateResponse**](CertificateResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## certificatesDeleteInstance

> certificatesDeleteInstance(id)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.CertificatesApi();
let id = "id_example"; // String | the id of the requested resource
apiInstance.certificatesDeleteInstance(id, (error, data, response) => {
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


## certificatesGetCollection

> CertificatesResponse certificatesGetCollection(opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.CertificatesApi();
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
apiInstance.certificatesGetCollection(opts, (error, data, response) => {
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


## certificatesGetInstance

> CertificateResponse certificatesGetInstance(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.CertificatesApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsCertificates': ["null"], // [String] | the fields to include for returned resources of type certificates
  'fieldsPassTypeIds': ["null"], // [String] | the fields to include for returned resources of type passTypeIds
  'include': ["null"] // [String] | comma-separated list of relationships to include
};
apiInstance.certificatesGetInstance(id, opts, (error, data, response) => {
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
 **fieldsCertificates** | [**[String]**](String.md)| the fields to include for returned resources of type certificates | [optional] 
 **fieldsPassTypeIds** | [**[String]**](String.md)| the fields to include for returned resources of type passTypeIds | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 

### Return type

[**CertificateResponse**](CertificateResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## certificatesPassTypeIdGetToOneRelated

> PassTypeIdResponse certificatesPassTypeIdGetToOneRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.CertificatesApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsPassTypeIds': ["null"], // [String] | the fields to include for returned resources of type passTypeIds
  'fieldsCertificates': ["null"], // [String] | the fields to include for returned resources of type certificates
  'include': ["null"], // [String] | comma-separated list of relationships to include
  'limitCertificates': 56 // Number | maximum number of related certificates returned (when they are included)
};
apiInstance.certificatesPassTypeIdGetToOneRelated(id, opts, (error, data, response) => {
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


## certificatesPassTypeIdGetToOneRelationship

> CertificatePassTypeIdLinkageResponse certificatesPassTypeIdGetToOneRelationship(id)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.CertificatesApi();
let id = "id_example"; // String | the id of the requested resource
apiInstance.certificatesPassTypeIdGetToOneRelationship(id, (error, data, response) => {
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

[**CertificatePassTypeIdLinkageResponse**](CertificatePassTypeIdLinkageResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## certificatesUpdateInstance

> CertificateResponse certificatesUpdateInstance(id, certificateUpdateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.CertificatesApi();
let id = "id_example"; // String | the id of the requested resource
let certificateUpdateRequest = new AppStoreConnectApi.CertificateUpdateRequest(); // CertificateUpdateRequest | Certificate representation
apiInstance.certificatesUpdateInstance(id, certificateUpdateRequest, (error, data, response) => {
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
 **certificateUpdateRequest** | [**CertificateUpdateRequest**](CertificateUpdateRequest.md)| Certificate representation | 

### Return type

[**CertificateResponse**](CertificateResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

