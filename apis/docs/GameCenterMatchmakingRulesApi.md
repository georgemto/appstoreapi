# AppStoreConnectApi.GameCenterMatchmakingRulesApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**gameCenterMatchmakingRulesCreateInstance**](GameCenterMatchmakingRulesApi.md#gameCenterMatchmakingRulesCreateInstance) | **POST** /v1/gameCenterMatchmakingRules | 
[**gameCenterMatchmakingRulesDeleteInstance**](GameCenterMatchmakingRulesApi.md#gameCenterMatchmakingRulesDeleteInstance) | **DELETE** /v1/gameCenterMatchmakingRules/{id} | 
[**gameCenterMatchmakingRulesMatchmakingBooleanRuleResultsGetMetrics**](GameCenterMatchmakingRulesApi.md#gameCenterMatchmakingRulesMatchmakingBooleanRuleResultsGetMetrics) | **GET** /v1/gameCenterMatchmakingRules/{id}/metrics/matchmakingBooleanRuleResults | 
[**gameCenterMatchmakingRulesMatchmakingNumberRuleResultsGetMetrics**](GameCenterMatchmakingRulesApi.md#gameCenterMatchmakingRulesMatchmakingNumberRuleResultsGetMetrics) | **GET** /v1/gameCenterMatchmakingRules/{id}/metrics/matchmakingNumberRuleResults | 
[**gameCenterMatchmakingRulesMatchmakingRuleErrorsGetMetrics**](GameCenterMatchmakingRulesApi.md#gameCenterMatchmakingRulesMatchmakingRuleErrorsGetMetrics) | **GET** /v1/gameCenterMatchmakingRules/{id}/metrics/matchmakingRuleErrors | 
[**gameCenterMatchmakingRulesUpdateInstance**](GameCenterMatchmakingRulesApi.md#gameCenterMatchmakingRulesUpdateInstance) | **PATCH** /v1/gameCenterMatchmakingRules/{id} | 



## gameCenterMatchmakingRulesCreateInstance

> GameCenterMatchmakingRuleResponse gameCenterMatchmakingRulesCreateInstance(gameCenterMatchmakingRuleCreateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterMatchmakingRulesApi();
let gameCenterMatchmakingRuleCreateRequest = new AppStoreConnectApi.GameCenterMatchmakingRuleCreateRequest(); // GameCenterMatchmakingRuleCreateRequest | GameCenterMatchmakingRule representation
apiInstance.gameCenterMatchmakingRulesCreateInstance(gameCenterMatchmakingRuleCreateRequest, (error, data, response) => {
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
 **gameCenterMatchmakingRuleCreateRequest** | [**GameCenterMatchmakingRuleCreateRequest**](GameCenterMatchmakingRuleCreateRequest.md)| GameCenterMatchmakingRule representation | 

### Return type

[**GameCenterMatchmakingRuleResponse**](GameCenterMatchmakingRuleResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## gameCenterMatchmakingRulesDeleteInstance

> gameCenterMatchmakingRulesDeleteInstance(id)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterMatchmakingRulesApi();
let id = "id_example"; // String | the id of the requested resource
apiInstance.gameCenterMatchmakingRulesDeleteInstance(id, (error, data, response) => {
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


## gameCenterMatchmakingRulesMatchmakingBooleanRuleResultsGetMetrics

> GameCenterMatchmakingBooleanRuleResultsV1MetricResponse gameCenterMatchmakingRulesMatchmakingBooleanRuleResultsGetMetrics(id, granularity, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterMatchmakingRulesApi();
let id = "id_example"; // String | the id of the requested resource
let granularity = "P7D"; // String | the granularity of the per-group dataset
let opts = {
  'groupBy': ["null"], // [String] | the dimension by which to group the results
  'filterResult': "filterResult_example", // String | filter by 'result' attribute dimension
  'filterGameCenterMatchmakingQueue': "filterGameCenterMatchmakingQueue_example", // String | filter by 'gameCenterMatchmakingQueue' relationship dimension
  'sort': ["null"], // [String] | comma-separated list of sort expressions; metrics will be sorted as specified
  'limit': 56 // Number | maximum number of groups to return per page
};
apiInstance.gameCenterMatchmakingRulesMatchmakingBooleanRuleResultsGetMetrics(id, granularity, opts, (error, data, response) => {
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
 **granularity** | **String**| the granularity of the per-group dataset | 
 **groupBy** | [**[String]**](String.md)| the dimension by which to group the results | [optional] 
 **filterResult** | **String**| filter by &#39;result&#39; attribute dimension | [optional] 
 **filterGameCenterMatchmakingQueue** | **String**| filter by &#39;gameCenterMatchmakingQueue&#39; relationship dimension | [optional] 
 **sort** | [**[String]**](String.md)| comma-separated list of sort expressions; metrics will be sorted as specified | [optional] 
 **limit** | **Number**| maximum number of groups to return per page | [optional] 

### Return type

[**GameCenterMatchmakingBooleanRuleResultsV1MetricResponse**](GameCenterMatchmakingBooleanRuleResultsV1MetricResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## gameCenterMatchmakingRulesMatchmakingNumberRuleResultsGetMetrics

> GameCenterMatchmakingNumberRuleResultsV1MetricResponse gameCenterMatchmakingRulesMatchmakingNumberRuleResultsGetMetrics(id, granularity, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterMatchmakingRulesApi();
let id = "id_example"; // String | the id of the requested resource
let granularity = "P7D"; // String | the granularity of the per-group dataset
let opts = {
  'groupBy': ["null"], // [String] | the dimension by which to group the results
  'filterGameCenterMatchmakingQueue': "filterGameCenterMatchmakingQueue_example", // String | filter by 'gameCenterMatchmakingQueue' relationship dimension
  'sort': ["null"], // [String] | comma-separated list of sort expressions; metrics will be sorted as specified
  'limit': 56 // Number | maximum number of groups to return per page
};
apiInstance.gameCenterMatchmakingRulesMatchmakingNumberRuleResultsGetMetrics(id, granularity, opts, (error, data, response) => {
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
 **granularity** | **String**| the granularity of the per-group dataset | 
 **groupBy** | [**[String]**](String.md)| the dimension by which to group the results | [optional] 
 **filterGameCenterMatchmakingQueue** | **String**| filter by &#39;gameCenterMatchmakingQueue&#39; relationship dimension | [optional] 
 **sort** | [**[String]**](String.md)| comma-separated list of sort expressions; metrics will be sorted as specified | [optional] 
 **limit** | **Number**| maximum number of groups to return per page | [optional] 

### Return type

[**GameCenterMatchmakingNumberRuleResultsV1MetricResponse**](GameCenterMatchmakingNumberRuleResultsV1MetricResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## gameCenterMatchmakingRulesMatchmakingRuleErrorsGetMetrics

> GameCenterMatchmakingRuleErrorsV1MetricResponse gameCenterMatchmakingRulesMatchmakingRuleErrorsGetMetrics(id, granularity, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterMatchmakingRulesApi();
let id = "id_example"; // String | the id of the requested resource
let granularity = "P7D"; // String | the granularity of the per-group dataset
let opts = {
  'groupBy': ["null"], // [String] | the dimension by which to group the results
  'filterGameCenterMatchmakingQueue': "filterGameCenterMatchmakingQueue_example", // String | filter by 'gameCenterMatchmakingQueue' relationship dimension
  'sort': ["null"], // [String] | comma-separated list of sort expressions; metrics will be sorted as specified
  'limit': 56 // Number | maximum number of groups to return per page
};
apiInstance.gameCenterMatchmakingRulesMatchmakingRuleErrorsGetMetrics(id, granularity, opts, (error, data, response) => {
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
 **granularity** | **String**| the granularity of the per-group dataset | 
 **groupBy** | [**[String]**](String.md)| the dimension by which to group the results | [optional] 
 **filterGameCenterMatchmakingQueue** | **String**| filter by &#39;gameCenterMatchmakingQueue&#39; relationship dimension | [optional] 
 **sort** | [**[String]**](String.md)| comma-separated list of sort expressions; metrics will be sorted as specified | [optional] 
 **limit** | **Number**| maximum number of groups to return per page | [optional] 

### Return type

[**GameCenterMatchmakingRuleErrorsV1MetricResponse**](GameCenterMatchmakingRuleErrorsV1MetricResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## gameCenterMatchmakingRulesUpdateInstance

> GameCenterMatchmakingRuleResponse gameCenterMatchmakingRulesUpdateInstance(id, gameCenterMatchmakingRuleUpdateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterMatchmakingRulesApi();
let id = "id_example"; // String | the id of the requested resource
let gameCenterMatchmakingRuleUpdateRequest = new AppStoreConnectApi.GameCenterMatchmakingRuleUpdateRequest(); // GameCenterMatchmakingRuleUpdateRequest | GameCenterMatchmakingRule representation
apiInstance.gameCenterMatchmakingRulesUpdateInstance(id, gameCenterMatchmakingRuleUpdateRequest, (error, data, response) => {
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
 **gameCenterMatchmakingRuleUpdateRequest** | [**GameCenterMatchmakingRuleUpdateRequest**](GameCenterMatchmakingRuleUpdateRequest.md)| GameCenterMatchmakingRule representation | 

### Return type

[**GameCenterMatchmakingRuleResponse**](GameCenterMatchmakingRuleResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

