# AppStoreConnectApi.MetricsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**appsBetaTesterUsagesGetMetrics**](MetricsApi.md#appsBetaTesterUsagesGetMetrics) | **GET** /v1/apps/{id}/metrics/betaTesterUsages | 
[**betaGroupsBetaTesterUsagesGetMetrics**](MetricsApi.md#betaGroupsBetaTesterUsagesGetMetrics) | **GET** /v1/betaGroups/{id}/metrics/betaTesterUsages | 
[**betaGroupsPublicLinkUsagesGetMetrics**](MetricsApi.md#betaGroupsPublicLinkUsagesGetMetrics) | **GET** /v1/betaGroups/{id}/metrics/publicLinkUsages | 
[**betaTestersBetaTesterUsagesGetMetrics**](MetricsApi.md#betaTestersBetaTesterUsagesGetMetrics) | **GET** /v1/betaTesters/{id}/metrics/betaTesterUsages | 
[**buildsBetaBuildUsagesGetMetrics**](MetricsApi.md#buildsBetaBuildUsagesGetMetrics) | **GET** /v1/builds/{id}/metrics/betaBuildUsages | 
[**gameCenterDetailsClassicMatchmakingRequestsGetMetrics**](MetricsApi.md#gameCenterDetailsClassicMatchmakingRequestsGetMetrics) | **GET** /v1/gameCenterDetails/{id}/metrics/classicMatchmakingRequests | 
[**gameCenterDetailsRuleBasedMatchmakingRequestsGetMetrics**](MetricsApi.md#gameCenterDetailsRuleBasedMatchmakingRequestsGetMetrics) | **GET** /v1/gameCenterDetails/{id}/metrics/ruleBasedMatchmakingRequests | 
[**gameCenterMatchmakingQueuesExperimentMatchmakingQueueSizesGetMetrics**](MetricsApi.md#gameCenterMatchmakingQueuesExperimentMatchmakingQueueSizesGetMetrics) | **GET** /v1/gameCenterMatchmakingQueues/{id}/metrics/experimentMatchmakingQueueSizes | 
[**gameCenterMatchmakingQueuesExperimentMatchmakingRequestsGetMetrics**](MetricsApi.md#gameCenterMatchmakingQueuesExperimentMatchmakingRequestsGetMetrics) | **GET** /v1/gameCenterMatchmakingQueues/{id}/metrics/experimentMatchmakingRequests | 
[**gameCenterMatchmakingQueuesMatchmakingQueueSizesGetMetrics**](MetricsApi.md#gameCenterMatchmakingQueuesMatchmakingQueueSizesGetMetrics) | **GET** /v1/gameCenterMatchmakingQueues/{id}/metrics/matchmakingQueueSizes | 
[**gameCenterMatchmakingQueuesMatchmakingRequestsGetMetrics**](MetricsApi.md#gameCenterMatchmakingQueuesMatchmakingRequestsGetMetrics) | **GET** /v1/gameCenterMatchmakingQueues/{id}/metrics/matchmakingRequests | 
[**gameCenterMatchmakingQueuesMatchmakingSessionsGetMetrics**](MetricsApi.md#gameCenterMatchmakingQueuesMatchmakingSessionsGetMetrics) | **GET** /v1/gameCenterMatchmakingQueues/{id}/metrics/matchmakingSessions | 
[**gameCenterMatchmakingRulesMatchmakingBooleanRuleResultsGetMetrics**](MetricsApi.md#gameCenterMatchmakingRulesMatchmakingBooleanRuleResultsGetMetrics) | **GET** /v1/gameCenterMatchmakingRules/{id}/metrics/matchmakingBooleanRuleResults | 
[**gameCenterMatchmakingRulesMatchmakingNumberRuleResultsGetMetrics**](MetricsApi.md#gameCenterMatchmakingRulesMatchmakingNumberRuleResultsGetMetrics) | **GET** /v1/gameCenterMatchmakingRules/{id}/metrics/matchmakingNumberRuleResults | 
[**gameCenterMatchmakingRulesMatchmakingRuleErrorsGetMetrics**](MetricsApi.md#gameCenterMatchmakingRulesMatchmakingRuleErrorsGetMetrics) | **GET** /v1/gameCenterMatchmakingRules/{id}/metrics/matchmakingRuleErrors | 



## appsBetaTesterUsagesGetMetrics

> AppsBetaTesterUsagesV1MetricResponse appsBetaTesterUsagesGetMetrics(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.MetricsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'period': "P7D", // String | the duration of the reporting period
  'groupBy': ["null"], // [String] | the dimension by which to group the results
  'filterBetaTesters': "filterBetaTesters_example", // String | filter by 'betaTesters' relationship dimension
  'limit': 56 // Number | maximum number of groups to return per page
};
apiInstance.appsBetaTesterUsagesGetMetrics(id, opts, (error, data, response) => {
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


## betaGroupsBetaTesterUsagesGetMetrics

> AppsBetaTesterUsagesV1MetricResponse betaGroupsBetaTesterUsagesGetMetrics(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.MetricsApi();
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


## betaGroupsPublicLinkUsagesGetMetrics

> BetaPublicLinkUsagesV1MetricResponse betaGroupsPublicLinkUsagesGetMetrics(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.MetricsApi();
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


## betaTestersBetaTesterUsagesGetMetrics

> BetaTesterUsagesV1MetricResponse betaTestersBetaTesterUsagesGetMetrics(id, filterApps, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.MetricsApi();
let id = "id_example"; // String | the id of the requested resource
let filterApps = "filterApps_example"; // String | filter by 'apps' relationship dimension
let opts = {
  'period': "P7D", // String | the duration of the reporting period
  'limit': 56 // Number | maximum number of groups to return per page
};
apiInstance.betaTestersBetaTesterUsagesGetMetrics(id, filterApps, opts, (error, data, response) => {
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
 **filterApps** | **String**| filter by &#39;apps&#39; relationship dimension | 
 **period** | **String**| the duration of the reporting period | [optional] 
 **limit** | **Number**| maximum number of groups to return per page | [optional] 

### Return type

[**BetaTesterUsagesV1MetricResponse**](BetaTesterUsagesV1MetricResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## buildsBetaBuildUsagesGetMetrics

> BetaBuildUsagesV1MetricResponse buildsBetaBuildUsagesGetMetrics(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.MetricsApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'limit': 56 // Number | maximum number of groups to return per page
};
apiInstance.buildsBetaBuildUsagesGetMetrics(id, opts, (error, data, response) => {
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

[**BetaBuildUsagesV1MetricResponse**](BetaBuildUsagesV1MetricResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## gameCenterDetailsClassicMatchmakingRequestsGetMetrics

> GameCenterMatchmakingAppRequestsV1MetricResponse gameCenterDetailsClassicMatchmakingRequestsGetMetrics(id, granularity, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.MetricsApi();
let id = "id_example"; // String | the id of the requested resource
let granularity = "P7D"; // String | the granularity of the per-group dataset
let opts = {
  'groupBy': ["null"], // [String] | the dimension by which to group the results
  'filterResult': "filterResult_example", // String | filter by 'result' attribute dimension
  'sort': ["null"], // [String] | comma-separated list of sort expressions; metrics will be sorted as specified
  'limit': 56 // Number | maximum number of groups to return per page
};
apiInstance.gameCenterDetailsClassicMatchmakingRequestsGetMetrics(id, granularity, opts, (error, data, response) => {
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
 **sort** | [**[String]**](String.md)| comma-separated list of sort expressions; metrics will be sorted as specified | [optional] 
 **limit** | **Number**| maximum number of groups to return per page | [optional] 

### Return type

[**GameCenterMatchmakingAppRequestsV1MetricResponse**](GameCenterMatchmakingAppRequestsV1MetricResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## gameCenterDetailsRuleBasedMatchmakingRequestsGetMetrics

> GameCenterMatchmakingAppRequestsV1MetricResponse gameCenterDetailsRuleBasedMatchmakingRequestsGetMetrics(id, granularity, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.MetricsApi();
let id = "id_example"; // String | the id of the requested resource
let granularity = "P7D"; // String | the granularity of the per-group dataset
let opts = {
  'groupBy': ["null"], // [String] | the dimension by which to group the results
  'filterResult': "filterResult_example", // String | filter by 'result' attribute dimension
  'sort': ["null"], // [String] | comma-separated list of sort expressions; metrics will be sorted as specified
  'limit': 56 // Number | maximum number of groups to return per page
};
apiInstance.gameCenterDetailsRuleBasedMatchmakingRequestsGetMetrics(id, granularity, opts, (error, data, response) => {
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
 **sort** | [**[String]**](String.md)| comma-separated list of sort expressions; metrics will be sorted as specified | [optional] 
 **limit** | **Number**| maximum number of groups to return per page | [optional] 

### Return type

[**GameCenterMatchmakingAppRequestsV1MetricResponse**](GameCenterMatchmakingAppRequestsV1MetricResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## gameCenterMatchmakingQueuesExperimentMatchmakingQueueSizesGetMetrics

> GameCenterMatchmakingQueueSizesV1MetricResponse gameCenterMatchmakingQueuesExperimentMatchmakingQueueSizesGetMetrics(id, granularity, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.MetricsApi();
let id = "id_example"; // String | the id of the requested resource
let granularity = "P7D"; // String | the granularity of the per-group dataset
let opts = {
  'sort': ["null"], // [String] | comma-separated list of sort expressions; metrics will be sorted as specified
  'limit': 56 // Number | maximum number of groups to return per page
};
apiInstance.gameCenterMatchmakingQueuesExperimentMatchmakingQueueSizesGetMetrics(id, granularity, opts, (error, data, response) => {
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
 **sort** | [**[String]**](String.md)| comma-separated list of sort expressions; metrics will be sorted as specified | [optional] 
 **limit** | **Number**| maximum number of groups to return per page | [optional] 

### Return type

[**GameCenterMatchmakingQueueSizesV1MetricResponse**](GameCenterMatchmakingQueueSizesV1MetricResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## gameCenterMatchmakingQueuesExperimentMatchmakingRequestsGetMetrics

> GameCenterMatchmakingQueueRequestsV1MetricResponse gameCenterMatchmakingQueuesExperimentMatchmakingRequestsGetMetrics(id, granularity, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.MetricsApi();
let id = "id_example"; // String | the id of the requested resource
let granularity = "P7D"; // String | the granularity of the per-group dataset
let opts = {
  'groupBy': ["null"], // [String] | the dimension by which to group the results
  'filterResult': "filterResult_example", // String | filter by 'result' attribute dimension
  'filterGameCenterDetail': "filterGameCenterDetail_example", // String | filter by 'gameCenterDetail' relationship dimension
  'sort': ["null"], // [String] | comma-separated list of sort expressions; metrics will be sorted as specified
  'limit': 56 // Number | maximum number of groups to return per page
};
apiInstance.gameCenterMatchmakingQueuesExperimentMatchmakingRequestsGetMetrics(id, granularity, opts, (error, data, response) => {
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
 **filterGameCenterDetail** | **String**| filter by &#39;gameCenterDetail&#39; relationship dimension | [optional] 
 **sort** | [**[String]**](String.md)| comma-separated list of sort expressions; metrics will be sorted as specified | [optional] 
 **limit** | **Number**| maximum number of groups to return per page | [optional] 

### Return type

[**GameCenterMatchmakingQueueRequestsV1MetricResponse**](GameCenterMatchmakingQueueRequestsV1MetricResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## gameCenterMatchmakingQueuesMatchmakingQueueSizesGetMetrics

> GameCenterMatchmakingQueueSizesV1MetricResponse gameCenterMatchmakingQueuesMatchmakingQueueSizesGetMetrics(id, granularity, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.MetricsApi();
let id = "id_example"; // String | the id of the requested resource
let granularity = "P7D"; // String | the granularity of the per-group dataset
let opts = {
  'sort': ["null"], // [String] | comma-separated list of sort expressions; metrics will be sorted as specified
  'limit': 56 // Number | maximum number of groups to return per page
};
apiInstance.gameCenterMatchmakingQueuesMatchmakingQueueSizesGetMetrics(id, granularity, opts, (error, data, response) => {
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
 **sort** | [**[String]**](String.md)| comma-separated list of sort expressions; metrics will be sorted as specified | [optional] 
 **limit** | **Number**| maximum number of groups to return per page | [optional] 

### Return type

[**GameCenterMatchmakingQueueSizesV1MetricResponse**](GameCenterMatchmakingQueueSizesV1MetricResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## gameCenterMatchmakingQueuesMatchmakingRequestsGetMetrics

> GameCenterMatchmakingQueueRequestsV1MetricResponse gameCenterMatchmakingQueuesMatchmakingRequestsGetMetrics(id, granularity, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.MetricsApi();
let id = "id_example"; // String | the id of the requested resource
let granularity = "P7D"; // String | the granularity of the per-group dataset
let opts = {
  'groupBy': ["null"], // [String] | the dimension by which to group the results
  'filterResult': "filterResult_example", // String | filter by 'result' attribute dimension
  'filterGameCenterDetail': "filterGameCenterDetail_example", // String | filter by 'gameCenterDetail' relationship dimension
  'sort': ["null"], // [String] | comma-separated list of sort expressions; metrics will be sorted as specified
  'limit': 56 // Number | maximum number of groups to return per page
};
apiInstance.gameCenterMatchmakingQueuesMatchmakingRequestsGetMetrics(id, granularity, opts, (error, data, response) => {
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
 **filterGameCenterDetail** | **String**| filter by &#39;gameCenterDetail&#39; relationship dimension | [optional] 
 **sort** | [**[String]**](String.md)| comma-separated list of sort expressions; metrics will be sorted as specified | [optional] 
 **limit** | **Number**| maximum number of groups to return per page | [optional] 

### Return type

[**GameCenterMatchmakingQueueRequestsV1MetricResponse**](GameCenterMatchmakingQueueRequestsV1MetricResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## gameCenterMatchmakingQueuesMatchmakingSessionsGetMetrics

> GameCenterMatchmakingSessionsV1MetricResponse gameCenterMatchmakingQueuesMatchmakingSessionsGetMetrics(id, granularity, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.MetricsApi();
let id = "id_example"; // String | the id of the requested resource
let granularity = "P7D"; // String | the granularity of the per-group dataset
let opts = {
  'sort': ["null"], // [String] | comma-separated list of sort expressions; metrics will be sorted as specified
  'limit': 56 // Number | maximum number of groups to return per page
};
apiInstance.gameCenterMatchmakingQueuesMatchmakingSessionsGetMetrics(id, granularity, opts, (error, data, response) => {
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
 **sort** | [**[String]**](String.md)| comma-separated list of sort expressions; metrics will be sorted as specified | [optional] 
 **limit** | **Number**| maximum number of groups to return per page | [optional] 

### Return type

[**GameCenterMatchmakingSessionsV1MetricResponse**](GameCenterMatchmakingSessionsV1MetricResponse.md)

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

let apiInstance = new AppStoreConnectApi.MetricsApi();
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

let apiInstance = new AppStoreConnectApi.MetricsApi();
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

let apiInstance = new AppStoreConnectApi.MetricsApi();
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

