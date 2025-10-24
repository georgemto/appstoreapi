# AppStoreConnectApi.BetaRecruitmentCriterionOptionsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**betaRecruitmentCriterionOptionsGetCollection**](BetaRecruitmentCriterionOptionsApi.md#betaRecruitmentCriterionOptionsGetCollection) | **GET** /v1/betaRecruitmentCriterionOptions | 



## betaRecruitmentCriterionOptionsGetCollection

> BetaRecruitmentCriterionOptionsResponse betaRecruitmentCriterionOptionsGetCollection(opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.BetaRecruitmentCriterionOptionsApi();
let opts = {
  'fieldsBetaRecruitmentCriterionOptions': ["null"], // [String] | the fields to include for returned resources of type betaRecruitmentCriterionOptions
  'limit': 56 // Number | maximum resources per page
};
apiInstance.betaRecruitmentCriterionOptionsGetCollection(opts, (error, data, response) => {
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
 **fieldsBetaRecruitmentCriterionOptions** | [**[String]**](String.md)| the fields to include for returned resources of type betaRecruitmentCriterionOptions | [optional] 
 **limit** | **Number**| maximum resources per page | [optional] 

### Return type

[**BetaRecruitmentCriterionOptionsResponse**](BetaRecruitmentCriterionOptionsResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

