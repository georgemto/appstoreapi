# AppStoreConnectApi.GameCenterMatchmakingQueuesApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**gameCenterMatchmakingQueuesCreateInstance**](GameCenterMatchmakingQueuesApi.md#gameCenterMatchmakingQueuesCreateInstance) | **POST** /v1/gameCenterMatchmakingQueues | 
[**gameCenterMatchmakingQueuesDeleteInstance**](GameCenterMatchmakingQueuesApi.md#gameCenterMatchmakingQueuesDeleteInstance) | **DELETE** /v1/gameCenterMatchmakingQueues/{id} | 
[**gameCenterMatchmakingQueuesExperimentMatchmakingQueueSizesGetMetrics**](GameCenterMatchmakingQueuesApi.md#gameCenterMatchmakingQueuesExperimentMatchmakingQueueSizesGetMetrics) | **GET** /v1/gameCenterMatchmakingQueues/{id}/metrics/experimentMatchmakingQueueSizes | 
[**gameCenterMatchmakingQueuesExperimentMatchmakingRequestsGetMetrics**](GameCenterMatchmakingQueuesApi.md#gameCenterMatchmakingQueuesExperimentMatchmakingRequestsGetMetrics) | **GET** /v1/gameCenterMatchmakingQueues/{id}/metrics/experimentMatchmakingRequests | 
[**gameCenterMatchmakingQueuesGetCollection**](GameCenterMatchmakingQueuesApi.md#gameCenterMatchmakingQueuesGetCollection) | **GET** /v1/gameCenterMatchmakingQueues | 
[**gameCenterMatchmakingQueuesGetInstance**](GameCenterMatchmakingQueuesApi.md#gameCenterMatchmakingQueuesGetInstance) | **GET** /v1/gameCenterMatchmakingQueues/{id} | 
[**gameCenterMatchmakingQueuesMatchmakingQueueSizesGetMetrics**](GameCenterMatchmakingQueuesApi.md#gameCenterMatchmakingQueuesMatchmakingQueueSizesGetMetrics) | **GET** /v1/gameCenterMatchmakingQueues/{id}/metrics/matchmakingQueueSizes | 
[**gameCenterMatchmakingQueuesMatchmakingRequestsGetMetrics**](GameCenterMatchmakingQueuesApi.md#gameCenterMatchmakingQueuesMatchmakingRequestsGetMetrics) | **GET** /v1/gameCenterMatchmakingQueues/{id}/metrics/matchmakingRequests | 
[**gameCenterMatchmakingQueuesMatchmakingSessionsGetMetrics**](GameCenterMatchmakingQueuesApi.md#gameCenterMatchmakingQueuesMatchmakingSessionsGetMetrics) | **GET** /v1/gameCenterMatchmakingQueues/{id}/metrics/matchmakingSessions | 
[**gameCenterMatchmakingQueuesUpdateInstance**](GameCenterMatchmakingQueuesApi.md#gameCenterMatchmakingQueuesUpdateInstance) | **PATCH** /v1/gameCenterMatchmakingQueues/{id} | 



## gameCenterMatchmakingQueuesCreateInstance

> GameCenterMatchmakingQueueResponse gameCenterMatchmakingQueuesCreateInstance(gameCenterMatchmakingQueueCreateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterMatchmakingQueuesApi();
let gameCenterMatchmakingQueueCreateRequest = new AppStoreConnectApi.GameCenterMatchmakingQueueCreateRequest(); // GameCenterMatchmakingQueueCreateRequest | GameCenterMatchmakingQueue representation
apiInstance.gameCenterMatchmakingQueuesCreateInstance(gameCenterMatchmakingQueueCreateRequest, (error, data, response) => {
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
 **gameCenterMatchmakingQueueCreateRequest** | [**GameCenterMatchmakingQueueCreateRequest**](GameCenterMatchmakingQueueCreateRequest.md)| GameCenterMatchmakingQueue representation | 

### Return type

[**GameCenterMatchmakingQueueResponse**](GameCenterMatchmakingQueueResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## gameCenterMatchmakingQueuesDeleteInstance

> gameCenterMatchmakingQueuesDeleteInstance(id)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterMatchmakingQueuesApi();
let id = "id_example"; // String | the id of the requested resource
apiInstance.gameCenterMatchmakingQueuesDeleteInstance(id, (error, data, response) => {
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


## gameCenterMatchmakingQueuesExperimentMatchmakingQueueSizesGetMetrics

> GameCenterMatchmakingQueueSizesV1MetricResponse gameCenterMatchmakingQueuesExperimentMatchmakingQueueSizesGetMetrics(id, granularity, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterMatchmakingQueuesApi();
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

let apiInstance = new AppStoreConnectApi.GameCenterMatchmakingQueuesApi();
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


## gameCenterMatchmakingQueuesGetCollection

> GameCenterMatchmakingQueuesResponse gameCenterMatchmakingQueuesGetCollection(opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterMatchmakingQueuesApi();
let opts = {
  'fieldsGameCenterMatchmakingQueues': ["null"], // [String] | the fields to include for returned resources of type gameCenterMatchmakingQueues
  'limit': 56, // Number | maximum resources per page
  'include': ["null"] // [String] | comma-separated list of relationships to include
};
apiInstance.gameCenterMatchmakingQueuesGetCollection(opts, (error, data, response) => {
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
 **fieldsGameCenterMatchmakingQueues** | [**[String]**](String.md)| the fields to include for returned resources of type gameCenterMatchmakingQueues | [optional] 
 **limit** | **Number**| maximum resources per page | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 

### Return type

[**GameCenterMatchmakingQueuesResponse**](GameCenterMatchmakingQueuesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## gameCenterMatchmakingQueuesGetInstance

> GameCenterMatchmakingQueueResponse gameCenterMatchmakingQueuesGetInstance(id, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterMatchmakingQueuesApi();
let id = "id_example"; // String | the id of the requested resource
let opts = {
  'fieldsGameCenterMatchmakingQueues': ["null"], // [String] | the fields to include for returned resources of type gameCenterMatchmakingQueues
  'include': ["null"] // [String] | comma-separated list of relationships to include
};
apiInstance.gameCenterMatchmakingQueuesGetInstance(id, opts, (error, data, response) => {
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
 **fieldsGameCenterMatchmakingQueues** | [**[String]**](String.md)| the fields to include for returned resources of type gameCenterMatchmakingQueues | [optional] 
 **include** | [**[String]**](String.md)| comma-separated list of relationships to include | [optional] 

### Return type

[**GameCenterMatchmakingQueueResponse**](GameCenterMatchmakingQueueResponse.md)

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

let apiInstance = new AppStoreConnectApi.GameCenterMatchmakingQueuesApi();
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

let apiInstance = new AppStoreConnectApi.GameCenterMatchmakingQueuesApi();
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

let apiInstance = new AppStoreConnectApi.GameCenterMatchmakingQueuesApi();
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


## gameCenterMatchmakingQueuesUpdateInstance

> GameCenterMatchmakingQueueResponse gameCenterMatchmakingQueuesUpdateInstance(id, gameCenterMatchmakingQueueUpdateRequest)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.GameCenterMatchmakingQueuesApi();
let id = "id_example"; // String | the id of the requested resource
let gameCenterMatchmakingQueueUpdateRequest = new AppStoreConnectApi.GameCenterMatchmakingQueueUpdateRequest(); // GameCenterMatchmakingQueueUpdateRequest | GameCenterMatchmakingQueue representation
apiInstance.gameCenterMatchmakingQueuesUpdateInstance(id, gameCenterMatchmakingQueueUpdateRequest, (error, data, response) => {
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
 **gameCenterMatchmakingQueueUpdateRequest** | [**GameCenterMatchmakingQueueUpdateRequest**](GameCenterMatchmakingQueueUpdateRequest.md)| GameCenterMatchmakingQueue representation | 

### Return type

[**GameCenterMatchmakingQueueResponse**](GameCenterMatchmakingQueueResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

