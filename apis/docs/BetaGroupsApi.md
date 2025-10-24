# AppStoreConnectApi.BetaGroupsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**betaGroupsAppGetToOneRelated**](BetaGroupsApi.md#betaGroupsAppGetToOneRelated) | **GET** /v1/betaGroups/{id}/app | 
[**betaGroupsAppGetToOneRelationship**](BetaGroupsApi.md#betaGroupsAppGetToOneRelationship) | **GET** /v1/betaGroups/{id}/relationships/app | 
[**betaGroupsBetaRecruitmentCriteriaGetToOneRelated**](BetaGroupsApi.md#betaGroupsBetaRecruitmentCriteriaGetToOneRelated) | **GET** /v1/betaGroups/{id}/betaRecruitmentCriteria | 
[**betaGroupsBetaRecruitmentCriteriaGetToOneRelationship**](BetaGroupsApi.md#betaGroupsBetaRecruitmentCriteriaGetToOneRelationship) | **GET** /v1/betaGroups/{id}/relationships/betaRecruitmentCriteria | 
[**betaGroupsBetaRecruitmentCriterionCompatibleBuildCheckGetToOneRelated**](BetaGroupsApi.md#betaGroupsBetaRecruitmentCriterionCompatibleBuildCheckGetToOneRelated) | **GET** /v1/betaGroups/{id}/betaRecruitmentCriterionCompatibleBuildCheck | 
[**betaGroupsBetaRecruitmentCriterionCompatibleBuildCheckGetToOneRelationship**](BetaGroupsApi.md#betaGroupsBetaRecruitmentCriterionCompatibleBuildCheckGetToOneRelationship) | **GET** /v1/betaGroups/{id}/relationships/betaRecruitmentCriterionCompatibleBuildCheck | 
[**betaGroupsBetaTesterUsagesGetMetrics**](BetaGroupsApi.md#betaGroupsBetaTesterUsagesGetMetrics) | **GET** /v1/betaGroups/{id}/metrics/betaTesterUsages | 
[**betaGroupsBetaTestersCreateToManyRelationship**](BetaGroupsApi.md#betaGroupsBetaTestersCreateToManyRelationship) | **POST** /v1/betaGroups/{id}/relationships/betaTesters | 
[**betaGroupsBetaTestersDeleteToManyRelationship**](BetaGroupsApi.md#betaGroupsBetaTestersDeleteToManyRelationship) | **DELETE** /v1/betaGroups/{id}/relationships/betaTesters | 
[**betaGroupsBetaTestersGetToManyRelated**](BetaGroupsApi.md#betaGroupsBetaTestersGetToManyRelated) | **GET** /v1/betaGroups/{id}/betaTesters | 
[**betaGroupsBetaTestersGetToManyRelationship**](BetaGroupsApi.md#betaGroupsBetaTestersGetToManyRelationship) | **GET** /v1/betaGroups/{id}/relationships/betaTesters | 
[**betaGroupsBuildsCreateToManyRelationship**](BetaGroupsApi.md#betaGroupsBuildsCreateToManyRelationship) | **POST** /v1/betaGroups/{id}/relationships/builds | 
[**betaGroupsBuildsDeleteToManyRelationship**](BetaGroupsApi.md#betaGroupsBuildsDeleteToManyRelationship) | **DELETE** /v1/betaGroups/{id}/relationships/builds | 
[**betaGroupsBuildsGetToManyRelated**](BetaGroupsApi.md#betaGroupsBuildsGetToManyRelated) | **GET** /v1/betaGroups/{id}/builds | 
[**betaGroupsBuildsGetToManyRelationship**](BetaGroupsApi.md#betaGroupsBuildsGetToManyRelationship) | **GET** /v1/betaGroups/{id}/relationships/builds | 
[**betaGroupsCreateInstance**](BetaGroupsApi.md#betaGroupsCreateInstance) | **POST** /v1/betaGroups | 
[**betaGroupsDeleteInstance**](BetaGroupsApi.md#betaGroupsDeleteInstance) | **DELETE** /v1/betaGroups/{id} | 
[**betaGroupsGetCollection**](BetaGroupsApi.md#betaGroupsGetCollection) | **GET** /v1/betaGroups | 
[**betaGroupsGetInstance**](BetaGroupsApi.md#betaGroupsGetInstance) | **GET** /v1/betaGroups/{id} | 
[**betaGroupsPublicLinkUsagesGetMetrics**](BetaGroupsApi.md#betaGroupsPublicLinkUsagesGetMetrics) | **GET** /v1/betaGroups/{id}/metrics/publicLinkUsages | 
[**betaGroupsUpdateInstance**](BetaGroupsApi.md#betaGroupsUpdateInstance) | **PATCH** /v1/betaGroups/{id} | 



## betaGroupsAppGetToOneRelated

> AppWithoutIncludesResponse betaGroupsAppGetToOneRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.BetaGroupsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsApps': ["null"] // [String] | the fields to include for returned resources of type apps
};
apiInstance.betaGroupsAppGetToOneRelated(id, opts, (error, data, response) => {
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


## betaGroupsAppGetToOneRelationship

> BetaGroupAppLinkageResponse betaGroupsAppGetToOneRelationship(id)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.BetaGroupsApi();
let id = "id_example"; // String | the id of the requested resource
apiInstance.betaGroupsAppGetToOneRelationship(id, (error, data, response) => {
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

[**BetaGroupAppLinkageResponse**](BetaGroupAppLinkageResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## betaGroupsBetaRecruitmentCriteriaGetToOneRelated

> BetaRecruitmentCriterionResponse betaGroupsBetaRecruitmentCriteriaGetToOneRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.BetaGroupsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsBetaRecruitmentCriteria': ["null"] // [String] | the fields to include for returned resources of type betaRecruitmentCriteria
};
apiInstance.betaGroupsBetaRecruitmentCriteriaGetToOneRelated(id, opts, (error, data, response) => {
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
 **fieldsBetaRecruitmentCriteria** | [**[String]**](String.md)| the fields to include for returned resources of type betaRecruitmentCriteria | [optional] 

### Return type

[**BetaRecruitmentCriterionResponse**](BetaRecruitmentCriterionResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## betaGroupsBetaRecruitmentCriteriaGetToOneRelationship

> BetaGroupBetaRecruitmentCriteriaLinkageResponse betaGroupsBetaRecruitmentCriteriaGetToOneRelationship(id)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.BetaGroupsApi();
let id = "id_example"; // String | the id of the requested resource
apiInstance.betaGroupsBetaRecruitmentCriteriaGetToOneRelationship(id, (error, data, response) => {
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

[**BetaGroupBetaRecruitmentCriteriaLinkageResponse**](BetaGroupBetaRecruitmentCriteriaLinkageResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## betaGroupsBetaRecruitmentCriterionCompatibleBuildCheckGetToOneRelated

> BetaRecruitmentCriterionCompatibleBuildCheckResponse betaGroupsBetaRecruitmentCriterionCompatibleBuildCheckGetToOneRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.BetaGroupsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsBetaRecruitmentCriterionCompatibleBuildChecks': ["null"] // [String] | the fields to include for returned resources of type betaRecruitmentCriterionCompatibleBuildChecks
};
apiInstance.betaGroupsBetaRecruitmentCriterionCompatibleBuildCheckGetToOneRelated(id, opts, (error, data, response) => {
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
 **fieldsBetaRecruitmentCriterionCompatibleBuildChecks** | [**[String]**](String.md)| the fields to include for returned resources of type betaRecruitmentCriterionCompatibleBuildChecks | [optional] 

### Return type

[**BetaRecruitmentCriterionCompatibleBuildCheckResponse**](BetaRecruitmentCriterionCompatibleBuildCheckResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## betaGroupsBetaRecruitmentCriterionCompatibleBuildCheckGetToOneRelationship

> BetaGroupBetaRecruitmentCriterionCompatibleBuildCheckLinkageResponse betaGroupsBetaRecruitmentCriterionCompatibleBuildCheckGetToOneRelationship(id)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.BetaGroupsApi();
let id = "id_example"; // String | the id of the requested resource
apiInstance.betaGroupsBetaRecruitmentCriterionCompatibleBuildCheckGetToOneRelationship(id, (error, data, response) => {
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

[**BetaGroupBetaRecruitmentCriterionCompatibleBuildCheckLinkageResponse**](BetaGroupBetaRecruitmentCriterionCompatibleBuildCheckLinkageResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## betaGroupsBetaTesterUsagesGetMetrics

> AppsBetaTesterUsagesV1MetricResponse betaGroupsBetaTesterUsagesGetMetrics(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.BetaGroupsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'period': "P7D", // String | the duration of the reporting period
  'groupBy': ["null"], // [String] | the dimension by which to group the results
  'filterBetaTesters': "filterBetaTesters_example", // String | filter by 'betaTesters' relationship dimension
  'limit': 56 // Number | maximum number of groups to return per page
};
apiInstance.betaGroupsBetaTesterUsagesGetMetrics(id, opts, (error, data, response) => {
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
 **period** | **String**| the duration of the reporting period | [optional] 
 **groupBy** | [**[String]**](String.md)| the dimension by which to group the results | [optional] 
 **filterBetaTesters** | **String**| filter by &#39;betaTesters&#39; relationship dimension | [optional] 
 **limit** | **Number**| maximum number of groups to return per page | [optional] 

### Return type

[**AppsBetaTesterUsagesV1MetricResponse**](AppsBetaTesterUsagesV1MetricResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## betaGroupsBetaTestersCreateToManyRelationship

> betaGroupsBetaTestersCreateToManyRelationship(id, betaGroupBetaTestersLinkagesRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.BetaGroupsApi();
let id = "id_example"; // String | the id of the requested resource
let betaGroupBetaTestersLinkagesRequest = new AppStoreConnectApi.BetaGroupBetaTestersLinkagesRequest(); // BetaGroupBetaTestersLinkagesRequest | List of related linkages
apiInstance.betaGroupsBetaTestersCreateToManyRelationship(id, betaGroupBetaTestersLinkagesRequest, (error, data, response) => {
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
 **betaGroupBetaTestersLinkagesRequest** | [**BetaGroupBetaTestersLinkagesRequest**](BetaGroupBetaTestersLinkagesRequest.md)| List of related linkages | 

### Return type

null (empty response body)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## betaGroupsBetaTestersDeleteToManyRelationship

> betaGroupsBetaTestersDeleteToManyRelationship(id, betaGroupBetaTestersLinkagesRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.BetaGroupsApi();
let id = "id_example"; // String | the id of the requested resource
let betaGroupBetaTestersLinkagesRequest = new AppStoreConnectApi.BetaGroupBetaTestersLinkagesRequest(); // BetaGroupBetaTestersLinkagesRequest | List of related linkages
apiInstance.betaGroupsBetaTestersDeleteToManyRelationship(id, betaGroupBetaTestersLinkagesRequest, (error, data, response) => {
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
 **betaGroupBetaTestersLinkagesRequest** | [**BetaGroupBetaTestersLinkagesRequest**](BetaGroupBetaTestersLinkagesRequest.md)| List of related linkages | 

### Return type

null (empty response body)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## betaGroupsBetaTestersGetToManyRelated

> BetaTestersWithoutIncludesResponse betaGroupsBetaTestersGetToManyRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.BetaGroupsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsBetaTesters': ["null"], // [String] | the fields to include for returned resources of type betaTesters
  'limit': 56 // Number | maximum resources per page
};
apiInstance.betaGroupsBetaTestersGetToManyRelated(id, opts, (error, data, response) => {
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
 **fieldsBetaTesters** | [**[String]**](String.md)| the fields to include for returned resources of type betaTesters | [optional] 
 **limit** | **Number**| maximum resources per page | [optional] 

### Return type

[**BetaTestersWithoutIncludesResponse**](BetaTestersWithoutIncludesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## betaGroupsBetaTestersGetToManyRelationship

> BetaGroupBetaTestersLinkagesResponse betaGroupsBetaTestersGetToManyRelationship(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.BetaGroupsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'limit': 56 // Number | maximum resources per page
};
apiInstance.betaGroupsBetaTestersGetToManyRelationship(id, opts, (error, data, response) => {
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

[**BetaGroupBetaTestersLinkagesResponse**](BetaGroupBetaTestersLinkagesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## betaGroupsBuildsCreateToManyRelationship

> betaGroupsBuildsCreateToManyRelationship(id, betaGroupBuildsLinkagesRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.BetaGroupsApi();
let id = "id_example"; // String | the id of the requested resource
let betaGroupBuildsLinkagesRequest = new AppStoreConnectApi.BetaGroupBuildsLinkagesRequest(); // BetaGroupBuildsLinkagesRequest | List of related linkages
apiInstance.betaGroupsBuildsCreateToManyRelationship(id, betaGroupBuildsLinkagesRequest, (error, data, response) => {
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
 **betaGroupBuildsLinkagesRequest** | [**BetaGroupBuildsLinkagesRequest**](BetaGroupBuildsLinkagesRequest.md)| List of related linkages | 

### Return type

null (empty response body)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## betaGroupsBuildsDeleteToManyRelationship

> betaGroupsBuildsDeleteToManyRelationship(id, betaGroupBuildsLinkagesRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.BetaGroupsApi();
let id = "id_example"; // String | the id of the requested resource
let betaGroupBuildsLinkagesRequest = new AppStoreConnectApi.BetaGroupBuildsLinkagesRequest(); // BetaGroupBuildsLinkagesRequest | List of related linkages
apiInstance.betaGroupsBuildsDeleteToManyRelationship(id, betaGroupBuildsLinkagesRequest, (error, data, response) => {
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
 **betaGroupBuildsLinkagesRequest** | [**BetaGroupBuildsLinkagesRequest**](BetaGroupBuildsLinkagesRequest.md)| List of related linkages | 

### Return type

null (empty response body)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## betaGroupsBuildsGetToManyRelated

> BuildsWithoutIncludesResponse betaGroupsBuildsGetToManyRelated(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.BetaGroupsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsBuilds': ["null"], // [String] | the fields to include for returned resources of type builds
  'limit': 56 // Number | maximum resources per page
};
apiInstance.betaGroupsBuildsGetToManyRelated(id, opts, (error, data, response) => {
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
 **fieldsBuilds** | [**[String]**](String.md)| the fields to include for returned resources of type builds | [optional] 
 **limit** | **Number**| maximum resources per page | [optional] 

### Return type

[**BuildsWithoutIncludesResponse**](BuildsWithoutIncludesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## betaGroupsBuildsGetToManyRelationship

> BetaGroupBuildsLinkagesResponse betaGroupsBuildsGetToManyRelationship(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.BetaGroupsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'limit': 56 // Number | maximum resources per page
};
apiInstance.betaGroupsBuildsGetToManyRelationship(id, opts, (error, data, response) => {
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

[**BetaGroupBuildsLinkagesResponse**](BetaGroupBuildsLinkagesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## betaGroupsCreateInstance

> BetaGroupResponse betaGroupsCreateInstance(betaGroupCreateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.BetaGroupsApi();
let betaGroupCreateRequest = new AppStoreConnectApi.BetaGroupCreateRequest(); // BetaGroupCreateRequest | BetaGroup representation
apiInstance.betaGroupsCreateInstance(betaGroupCreateRequest, (error, data, response) => {
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
 **betaGroupCreateRequest** | [**BetaGroupCreateRequest**](BetaGroupCreateRequest.md)| BetaGroup representation | 

### Return type

[**BetaGroupResponse**](BetaGroupResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## betaGroupsDeleteInstance

> betaGroupsDeleteInstance(id)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.BetaGroupsApi();
let id = "id_example"; // String | the id of the requested resource
apiInstance.betaGroupsDeleteInstance(id, (error, data, response) => {
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


## betaGroupsGetCollection

> BetaGroupsResponse betaGroupsGetCollection(opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.BetaGroupsApi();
let opts = {
  'filterName': ["null"], // [String] | filter by attribute 'name'
  'filterIsInternalGroup': ["null"], // [String] | filter by attribute 'isInternalGroup'
  'filterPublicLinkEnabled': ["null"], // [String] | filter by attribute 'publicLinkEnabled'
  'filterPublicLinkLimitEnabled': ["null"], // [String] | filter by attribute 'publicLinkLimitEnabled'
  'filterPublicLink': ["null"], // [String] | filter by attribute 'publicLink'
  'filterApp': ["null"], // [String] | filter by id(s) of related 'app'
  'filterBuilds': ["null"], // [String] | filter by id(s) of related 'builds'
  'filterId': ["null"], // [String] | filter by id(s)
  'sort': ["null"], // [String] | comma-separated list of sort expressions; resources will be sorted as specified
  'fieldsBetaGroups': ["null"], // [String] | the fields to include for returned resources of type betaGroups
  'fieldsApps': ["null"], // [String] | the fields to include for returned resources of type apps
  'fieldsBuilds': ["null"], // [String] | the fields to include for returned resources of type builds
  'fieldsBetaTesters': ["null"], // [String] | the fields to include for returned resources of type betaTesters
  'fieldsBetaRecruitmentCriteria': ["null"], // [String] | the fields to include for returned resources of type betaRecruitmentCriteria
  'limit': 56, // Number | maximum resources per page
  'include': ["null"], // [String] | comma-separated list of relationships to include
  'limitBetaTesters': 56, // Number | maximum number of related betaTesters returned (when they are included)
  'limitBuilds': 56 // Number | maximum number of related builds returned (when they are included)
};
apiInstance.betaGroupsGetCollection(opts, (error, data, response) => {
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
 **filterIsInternalGroup** | [**[String]**](String.md)| filter by attribute &#39;isInternalGroup&#39; | [optional] 
 **filterPublicLinkEnabled** | [**[String]**](String.md)| filter by attribute &#39;publicLinkEnabled&#39; | [optional] 
 **filterPublicLinkLimitEnabled** | [**[String]**](String.md)| filter by attribute &#39;publicLinkLimitEnabled&#39; | [optional] 
 **filterPublicLink** | [**[String]**](String.md)| filter by attribute &#39;publicLink&#39; | [optional] 
 **filterApp** | [**[String]**](String.md)| filter by id(s) of related &#39;app&#39; | [optional] 
 **filterBuilds** | [**[String]**](String.md)| filter by id(s) of related &#39;builds&#39; | [optional] 
 **filterId** | [**[String]**](String.md)| filter by id(s) | [optional] 
 **sort** | [**[String]**](String.md)| comma-separated list of sort expressions; resources will be sorted as specified | [optional] 
 **fieldsBetaGroups** | [**[String]**](String.md)| the fields to include for returned resources of type betaGroups | [optional] 
 **fieldsApps** | [**[String]**](String.md)| the fields to include for returned resources of type apps | [optional] 
 **fieldsBuilds** | [**[String]**](String.md)| the fields to include for returned resources of type builds | [optional] 
 **fieldsBetaTesters** | [**[String]**](String.md)| the fields to include for returned resources of type betaTesters | [optional] 
 **fieldsBetaRecruitmentCriteria** | [**[String]**](String.md)| the fields to include for returned resources of type betaRecruitmentCriteria | [optional] 
 **limit** | **Number**| maximum resources per page | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 
 **limitBetaTesters** | **Number**| maximum number of related betaTesters returned (when they are included) | [optional] 
 **limitBuilds** | **Number**| maximum number of related builds returned (when they are included) | [optional] 

### Return type

[**BetaGroupsResponse**](BetaGroupsResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## betaGroupsGetInstance

> BetaGroupResponse betaGroupsGetInstance(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.BetaGroupsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsBetaGroups': ["null"], // [String] | the fields to include for returned resources of type betaGroups
  'fieldsApps': ["null"], // [String] | the fields to include for returned resources of type apps
  'fieldsBuilds': ["null"], // [String] | the fields to include for returned resources of type builds
  'fieldsBetaTesters': ["null"], // [String] | the fields to include for returned resources of type betaTesters
  'fieldsBetaRecruitmentCriteria': ["null"], // [String] | the fields to include for returned resources of type betaRecruitmentCriteria
  'include': ["null"], // [String] | comma-separated list of relationships to include
  'limitBetaTesters': 56, // Number | maximum number of related betaTesters returned (when they are included)
  'limitBuilds': 56 // Number | maximum number of related builds returned (when they are included)
};
apiInstance.betaGroupsGetInstance(id, opts, (error, data, response) => {
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
 **fieldsBetaGroups** | [**[String]**](String.md)| the fields to include for returned resources of type betaGroups | [optional] 
 **fieldsApps** | [**[String]**](String.md)| the fields to include for returned resources of type apps | [optional] 
 **fieldsBuilds** | [**[String]**](String.md)| the fields to include for returned resources of type builds | [optional] 
 **fieldsBetaTesters** | [**[String]**](String.md)| the fields to include for returned resources of type betaTesters | [optional] 
 **fieldsBetaRecruitmentCriteria** | [**[String]**](String.md)| the fields to include for returned resources of type betaRecruitmentCriteria | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 
 **limitBetaTesters** | **Number**| maximum number of related betaTesters returned (when they are included) | [optional] 
 **limitBuilds** | **Number**| maximum number of related builds returned (when they are included) | [optional] 

### Return type

[**BetaGroupResponse**](BetaGroupResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## betaGroupsPublicLinkUsagesGetMetrics

> BetaPublicLinkUsagesV1MetricResponse betaGroupsPublicLinkUsagesGetMetrics(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.BetaGroupsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'limit': 56 // Number | maximum number of groups to return per page
};
apiInstance.betaGroupsPublicLinkUsagesGetMetrics(id, opts, (error, data, response) => {
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
 **limit** | **Number**| maximum number of groups to return per page | [optional] 

### Return type

[**BetaPublicLinkUsagesV1MetricResponse**](BetaPublicLinkUsagesV1MetricResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## betaGroupsUpdateInstance

> BetaGroupResponse betaGroupsUpdateInstance(id, betaGroupUpdateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.BetaGroupsApi();
let id = "id_example"; // String | the id of the requested resource
let betaGroupUpdateRequest = new AppStoreConnectApi.BetaGroupUpdateRequest(); // BetaGroupUpdateRequest | BetaGroup representation
apiInstance.betaGroupsUpdateInstance(id, betaGroupUpdateRequest, (error, data, response) => {
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
 **betaGroupUpdateRequest** | [**BetaGroupUpdateRequest**](BetaGroupUpdateRequest.md)| BetaGroup representation | 

### Return type

[**BetaGroupResponse**](BetaGroupResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

