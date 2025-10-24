# AppStoreConnectApi.GameCenterLeaderboardCreateRequestDataAttributes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**defaultFormatter** | [**GameCenterLeaderboardFormatter**](GameCenterLeaderboardFormatter.md) |  | 
**referenceName** | **String** |  | 
**vendorIdentifier** | **String** |  | 
**submissionType** | **String** |  | 
**scoreSortType** | **String** |  | 
**scoreRangeStart** | **Number** |  | [optional] 
**scoreRangeEnd** | **Number** |  | [optional] 
**recurrenceStartDate** | **Date** |  | [optional] 
**recurrenceDuration** | **String** |  | [optional] 
**recurrenceRule** | **String** |  | [optional] 
**activityProperties** | **{String: String}** |  | [optional] 
**visibility** | **String** |  | [optional] 



## Enum: SubmissionTypeEnum


* `BEST_SCORE` (value: `"BEST_SCORE"`)

* `MOST_RECENT_SCORE` (value: `"MOST_RECENT_SCORE"`)





## Enum: ScoreSortTypeEnum


* `ASC` (value: `"ASC"`)

* `DESC` (value: `"DESC"`)





## Enum: VisibilityEnum


* `SHOW_FOR_ALL` (value: `"SHOW_FOR_ALL"`)

* `HIDE_FOR_ALL` (value: `"HIDE_FOR_ALL"`)




