# AppStoreConnectApi.EndUserLicenseAgreementsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**endUserLicenseAgreementsCreateInstance**](EndUserLicenseAgreementsApi.md#endUserLicenseAgreementsCreateInstance) | **POST** /v1/endUserLicenseAgreements | 
[**endUserLicenseAgreementsDeleteInstance**](EndUserLicenseAgreementsApi.md#endUserLicenseAgreementsDeleteInstance) | **DELETE** /v1/endUserLicenseAgreements/{id} | 
[**endUserLicenseAgreementsGetInstance**](EndUserLicenseAgreementsApi.md#endUserLicenseAgreementsGetInstance) | **GET** /v1/endUserLicenseAgreements/{id} | 
[**endUserLicenseAgreementsTerritoriesGetToManyRelated**](EndUserLicenseAgreementsApi.md#endUserLicenseAgreementsTerritoriesGetToManyRelated) | **GET** /v1/endUserLicenseAgreements/{id}/territories | 
[**endUserLicenseAgreementsTerritoriesGetToManyRelationship**](EndUserLicenseAgreementsApi.md#endUserLicenseAgreementsTerritoriesGetToManyRelationship) | **GET** /v1/endUserLicenseAgreements/{id}/relationships/territories | 
[**endUserLicenseAgreementsUpdateInstance**](EndUserLicenseAgreementsApi.md#endUserLicenseAgreementsUpdateInstance) | **PATCH** /v1/endUserLicenseAgreements/{id} | 



## endUserLicenseAgreementsCreateInstance

> EndUserLicenseAgreementResponse endUserLicenseAgreementsCreateInstance(endUserLicenseAgreementCreateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.EndUserLicenseAgreementsApi();
let endUserLicenseAgreementCreateRequest = new AppStoreConnectApi.EndUserLicenseAgreementCreateRequest(); // EndUserLicenseAgreementCreateRequest | EndUserLicenseAgreement representation
apiInstance.endUserLicenseAgreementsCreateInstance(endUserLicenseAgreementCreateRequest, (error, data, response) => {
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
 **endUserLicenseAgreementCreateRequest** | [**EndUserLicenseAgreementCreateRequest**](EndUserLicenseAgreementCreateRequest.md)| EndUserLicenseAgreement representation | 

### Return type

[**EndUserLicenseAgreementResponse**](EndUserLicenseAgreementResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## endUserLicenseAgreementsDeleteInstance

> endUserLicenseAgreementsDeleteInstance(id)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.EndUserLicenseAgreementsApi();
let id = "id_example"; // String | the id of the requested resource
apiInstance.endUserLicenseAgreementsDeleteInstance(id, (error, data, response) => {
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


## endUserLicenseAgreementsGetInstance

> EndUserLicenseAgreementResponse endUserLicenseAgreementsGetInstance(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.EndUserLicenseAgreementsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsEndUserLicenseAgreements': ["null"], // [String] | the fields to include for returned resources of type endUserLicenseAgreements
  'fieldsTerritories': ["null"], // [String] | the fields to include for returned resources of type territories
  'include': ["null"], // [String] | comma-separated list of relationships to include
  'limitTerritories': 56 // Number | maximum number of related territories returned (when they are included)
};
apiInstance.endUserLicenseAgreementsGetInstance(id, opts, (error, data, response) => {
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
 **fieldsEndUserLicenseAgreements** | [**[String]**](String.md)| the fields to include for returned resources of type endUserLicenseAgreements | [optional] 
 **fieldsTerritories** | [**[String]**](String.md)| the fields to include for returned resources of type territories | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 
 **limitTerritories** | **Number**| maximum number of related territories returned (when they are included) | [optional] 

### Return type

[**EndUserLicenseAgreementResponse**](EndUserLicenseAgreementResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## endUserLicenseAgreementsTerritoriesGetToManyRelated

> TerritoriesWithoutIncludesResponse endUserLicenseAgreementsTerritoriesGetToManyRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.EndUserLicenseAgreementsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsTerritories': ["null"], // [String] | the fields to include for returned resources of type territories
  'limit': 56 // Number | maximum resources per page
};
apiInstance.endUserLicenseAgreementsTerritoriesGetToManyRelated(id, opts, (error, data, response) => {
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
 **limit** | **Number**| maximum resources per page | [optional] 

### Return type

[**TerritoriesWithoutIncludesResponse**](TerritoriesWithoutIncludesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## endUserLicenseAgreementsTerritoriesGetToManyRelationship

> EndUserLicenseAgreementTerritoriesLinkagesResponse endUserLicenseAgreementsTerritoriesGetToManyRelationship(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.EndUserLicenseAgreementsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'limit': 56 // Number | maximum resources per page
};
apiInstance.endUserLicenseAgreementsTerritoriesGetToManyRelationship(id, opts, (error, data, response) => {
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

[**EndUserLicenseAgreementTerritoriesLinkagesResponse**](EndUserLicenseAgreementTerritoriesLinkagesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## endUserLicenseAgreementsUpdateInstance

> EndUserLicenseAgreementResponse endUserLicenseAgreementsUpdateInstance(id, endUserLicenseAgreementUpdateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.EndUserLicenseAgreementsApi();
let id = "id_example"; // String | the id of the requested resource
let endUserLicenseAgreementUpdateRequest = new AppStoreConnectApi.EndUserLicenseAgreementUpdateRequest(); // EndUserLicenseAgreementUpdateRequest | EndUserLicenseAgreement representation
apiInstance.endUserLicenseAgreementsUpdateInstance(id, endUserLicenseAgreementUpdateRequest, (error, data, response) => {
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
 **endUserLicenseAgreementUpdateRequest** | [**EndUserLicenseAgreementUpdateRequest**](EndUserLicenseAgreementUpdateRequest.md)| EndUserLicenseAgreement representation | 

### Return type

[**EndUserLicenseAgreementResponse**](EndUserLicenseAgreementResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

