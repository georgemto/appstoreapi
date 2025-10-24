# AppStoreConnectApi.SalesReportsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**salesReportsGetCollection**](SalesReportsApi.md#salesReportsGetCollection) | **GET** /v1/salesReports | 



## salesReportsGetCollection

> File salesReportsGetCollection(filterVendorNumber, filterReportType, filterReportSubType, filterFrequency, opts)



### Example

```javascript
import AppStoreConnectApi from 'app_store_connect_api';
let defaultClient = AppStoreConnectApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: itc-bearer-token
let itc-bearer-token = defaultClient.authentications['itc-bearer-token'];
itc-bearer-token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new AppStoreConnectApi.SalesReportsApi();
let filterVendorNumber = ["null"]; // [String] | filter by attribute 'vendorNumber'
let filterReportType = ["null"]; // [String] | filter by attribute 'reportType'
let filterReportSubType = ["null"]; // [String] | filter by attribute 'reportSubType'
let filterFrequency = ["null"]; // [String] | filter by attribute 'frequency'
let opts = {
  'filterReportDate': ["null"], // [String] | filter by attribute 'reportDate'
  'filterVersion': ["null"] // [String] | filter by attribute 'version'
};
apiInstance.salesReportsGetCollection(filterVendorNumber, filterReportType, filterReportSubType, filterFrequency, opts, (error, data, response) => {
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
 **filterVendorNumber** | [**[String]**](String.md)| filter by attribute &#39;vendorNumber&#39; | 
 **filterReportType** | [**[String]**](String.md)| filter by attribute &#39;reportType&#39; | 
 **filterReportSubType** | [**[String]**](String.md)| filter by attribute &#39;reportSubType&#39; | 
 **filterFrequency** | [**[String]**](String.md)| filter by attribute &#39;frequency&#39; | 
 **filterReportDate** | [**[String]**](String.md)| filter by attribute &#39;reportDate&#39; | [optional] 
 **filterVersion** | [**[String]**](String.md)| filter by attribute &#39;version&#39; | [optional] 

### Return type

**File**

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/a-gzip

