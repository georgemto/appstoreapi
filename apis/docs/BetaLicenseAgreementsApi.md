# AppStoreConnectApi.BetaLicenseAgreementsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**betaLicenseAgreementsAppGetToOneRelated**](BetaLicenseAgreementsApi.md#betaLicenseAgreementsAppGetToOneRelated) | **GET** /v1/betaLicenseAgreements/{id}/app | 
[**betaLicenseAgreementsAppGetToOneRelationship**](BetaLicenseAgreementsApi.md#betaLicenseAgreementsAppGetToOneRelationship) | **GET** /v1/betaLicenseAgreements/{id}/relationships/app | 
[**betaLicenseAgreementsGetCollection**](BetaLicenseAgreementsApi.md#betaLicenseAgreementsGetCollection) | **GET** /v1/betaLicenseAgreements | 
[**betaLicenseAgreementsGetInstance**](BetaLicenseAgreementsApi.md#betaLicenseAgreementsGetInstance) | **GET** /v1/betaLicenseAgreements/{id} | 
[**betaLicenseAgreementsUpdateInstance**](BetaLicenseAgreementsApi.md#betaLicenseAgreementsUpdateInstance) | **PATCH** /v1/betaLicenseAgreements/{id} | 



## betaLicenseAgreementsAppGetToOneRelated

> AppWithoutIncludesResponse betaLicenseAgreementsAppGetToOneRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.BetaLicenseAgreementsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsApps': ["null"] // [String] | the fields to include for returned resources of type apps
};
apiInstance.betaLicenseAgreementsAppGetToOneRelated(id, opts, (error, data, response) => {
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


## betaLicenseAgreementsAppGetToOneRelationship

> BetaLicenseAgreementAppLinkageResponse betaLicenseAgreementsAppGetToOneRelationship(id)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.BetaLicenseAgreementsApi();
let id = "id_example"; // String | the id of the requested resource
apiInstance.betaLicenseAgreementsAppGetToOneRelationship(id, (error, data, response) => {
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

[**BetaLicenseAgreementAppLinkageResponse**](BetaLicenseAgreementAppLinkageResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## betaLicenseAgreementsGetCollection

> BetaLicenseAgreementsResponse betaLicenseAgreementsGetCollection(opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.BetaLicenseAgreementsApi();
let opts = {
  'filterApp': ["null"], // [String] | filter by id(s) of related 'app'
  'fieldsBetaLicenseAgreements': ["null"], // [String] | the fields to include for returned resources of type betaLicenseAgreements
  'fieldsApps': ["null"], // [String] | the fields to include for returned resources of type apps
  'limit': 56, // Number | maximum resources per page
  'include': ["null"] // [String] | comma-separated list of relationships to include
};
apiInstance.betaLicenseAgreementsGetCollection(opts, (error, data, response) => {
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
 **filterApp** | [**[String]**](String.md)| filter by id(s) of related &#39;app&#39; | [optional] 
 **fieldsBetaLicenseAgreements** | [**[String]**](String.md)| the fields to include for returned resources of type betaLicenseAgreements | [optional] 
 **fieldsApps** | [**[String]**](String.md)| the fields to include for returned resources of type apps | [optional] 
 **limit** | **Number**| maximum resources per page | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 

### Return type

[**BetaLicenseAgreementsResponse**](BetaLicenseAgreementsResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## betaLicenseAgreementsGetInstance

> BetaLicenseAgreementResponse betaLicenseAgreementsGetInstance(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.BetaLicenseAgreementsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsBetaLicenseAgreements': ["null"], // [String] | the fields to include for returned resources of type betaLicenseAgreements
  'fieldsApps': ["null"], // [String] | the fields to include for returned resources of type apps
  'include': ["null"] // [String] | comma-separated list of relationships to include
};
apiInstance.betaLicenseAgreementsGetInstance(id, opts, (error, data, response) => {
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
 **fieldsBetaLicenseAgreements** | [**[String]**](String.md)| the fields to include for returned resources of type betaLicenseAgreements | [optional] 
 **fieldsApps** | [**[String]**](String.md)| the fields to include for returned resources of type apps | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 

### Return type

[**BetaLicenseAgreementResponse**](BetaLicenseAgreementResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## betaLicenseAgreementsUpdateInstance

> BetaLicenseAgreementResponse betaLicenseAgreementsUpdateInstance(id, betaLicenseAgreementUpdateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.BetaLicenseAgreementsApi();
let id = "id_example"; // String | the id of the requested resource
let betaLicenseAgreementUpdateRequest = new AppStoreConnectApi.BetaLicenseAgreementUpdateRequest(); // BetaLicenseAgreementUpdateRequest | BetaLicenseAgreement representation
apiInstance.betaLicenseAgreementsUpdateInstance(id, betaLicenseAgreementUpdateRequest, (error, data, response) => {
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
 **betaLicenseAgreementUpdateRequest** | [**BetaLicenseAgreementUpdateRequest**](BetaLicenseAgreementUpdateRequest.md)| BetaLicenseAgreement representation | 

### Return type

[**BetaLicenseAgreementResponse**](BetaLicenseAgreementResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

