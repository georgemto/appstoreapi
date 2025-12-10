# Changelog - Group Filtering Feature

**Date:** December 10, 2025  
**Version:** 1.1.0

## Summary

Fixed subscription group filtering bug and added wildcard support for creating promotional offers across all subscription groups.

---

## 🐛 Bug Fix: Subscription Group Filtering

### Problem
When creating bulk promotional offers with a specific subscription group reference name, the system would create offers for **ALL subscriptions in the app**, not just those in the specified group.

**Example Issue:**
- App has "Group 1" (9 subs) and "Group 10" (8 subs) 
- Creating offers for "Group 1" would incorrectly create 17 offers (both groups)
- Expected: 9 offers (Group 1 only)

### Root Cause
The `getSubscriptionProductIdsByBundleId()` function in `src/services/apps.js` did not track which subscription belonged to which group. Subscriptions had no `groupId` field.

### Solution
1. **Added group-subscription mapping** (`src/services/apps.js`)
   - Query each group's subscriptions endpoint: `/subscriptionGroups/{id}/subscriptions`
   - Build mapping: `subscriptionId → groupId`
   - Add `groupId` field to every subscription object

2. **Implemented proper filtering** (`src/services/promotional-offers.js`)
   - Filter subscriptions by matching `groupId` before creation
   - Only create offers for subscriptions in the specified group(s)

### Test Results
✅ **Before Fix:** "Group 1" → 129 offers (all subscriptions)  
✅ **After Fix:** "Group 1" → 9 offers (only Group 1 subscriptions)

---

## ✨ New Feature: Wildcard Support

### Description
Added support for using `"*"` as the reference name to create promotional offers for **ALL subscription groups** at once.

### Usage

```bash
# Create for specific group (exact match)
npm run bulk-create-promo -- com.vtech.plus.inapp.ios.test3 "Group 1" --name "Spring Sale"

# Create for ALL groups (wildcard)
npm run bulk-create-promo -- com.vtech.plus.inapp.ios.test3 "*" --name "Holiday Sale"
```

### Behavior
- Selects all subscription groups in the app
- Filters subscriptions to those belonging to ANY group
- Creates offers for all matched subscriptions
- Shows warning in confirmation prompt about large number of offers
- Logs: "Creating offers for all X subscription groups"

### Use Cases
- App-wide promotional campaigns
- Holiday sales across all tiers
- New feature launches
- Testing across all subscription types

---

## 📝 Files Modified

### Core Services
1. **src/services/apps.js** (lines 333-361)
   - Added subscription-to-group mapping logic
   - Queries each group's subscriptions endpoint
   - Adds `groupId` field to subscription objects

2. **src/services/promotional-offers.js** (lines 600-677)
   - Added wildcard detection: `referenceName === '*'`
   - Implemented subscription filtering by `groupId`
   - Enhanced logging with filtered subscription counts

### Scripts
3. **bulk-create-promotional-offers.js**
   - Updated help text with wildcard documentation
   - Added wildcard example to usage
   - Enhanced confirmation prompt for wildcard operations
   - Display shows "* (ALL GROUPS)" when using wildcard

### Documentation
4. **PROMOTIONAL_OFFERS_GUIDE.md**
   - Added "Group Filtering" section
   - Added "Wildcard Support" feature documentation
   - Updated all examples with group filtering context
   - Added test scenarios for group filtering
   - Updated Quick Reference with wildcard example

---

## 🧪 Testing

### Test Environment
- Bundle ID: `com.vtech.plus.inapp.ios.test3`
- Total Groups: 28
- Total Subscriptions: 129

### Test Results

| Test Case | Expected | Actual | Status |
|-----------|----------|--------|--------|
| "Group 1" filtering | 9 offers | 9 offers | ✅ PASS |
| "Group 2" filtering | 9 offers | 9 offers | ✅ PASS |
| "Group 1" vs "Group 10" | No cross-contamination | Exact match only | ✅ PASS |
| Wildcard "*" analysis | 129 offers | 129 offers | ✅ PASS |
| Duplicate name detection | Error thrown | Error thrown | ✅ PASS |
| Delete with rollback | All deleted | All deleted | ✅ PASS |

---

## 📊 Performance Impact

**API Call Increase:**
- Previous: 2 API calls (get app, get subscription groups)
- Current: 2 + N API calls (where N = number of subscription groups)

**Example:**
- App with 28 groups: 30 API calls total
- Additional time: ~10-15 seconds for initial data fetch
- Benefit: Accurate group filtering, proper subscription-to-group mapping

**Note:** This is a necessary trade-off to ensure correct filtering. The data is not cached between operations to ensure freshness.

---

## 🔄 Breaking Changes

**None.** This update is backward compatible:
- Existing reference name filtering works the same way
- Scripts maintain the same interface
- API endpoints unchanged
- Only behavior change: now correctly filters by group (previously broken)

---

## 📚 Migration Guide

No migration needed. Existing code will work as-is, but will now correctly filter by group.

**If you were working around the bug:**
- Remove any manual filtering in your code
- The system now handles group filtering automatically
- Verify your expectations match the new (correct) behavior

---

## 🎯 Future Improvements

Potential enhancements for future versions:

1. **Caching:** Cache group-subscription mappings to reduce API calls
2. **Batch Operations:** Process multiple groups in parallel
3. **Progress Reporting:** Show real-time progress during bulk creation
4. **Filtering UI:** Add web interface for visual group selection
5. **Dry Run Mode:** Add `--dry-run` to bulk creation to preview without creating

---

## 📖 Documentation Updates

All documentation has been updated to reflect these changes:
- ✅ PROMOTIONAL_OFFERS_GUIDE.md - Added group filtering section
- ✅ Inline help text in scripts - Updated with wildcard examples
- ✅ API examples - Show both specific group and wildcard usage
- ✅ Test scenarios - Include group filtering validation

---

## 🙏 Acknowledgments

Issue identified during testing of bulk promotional offer creation.  
Fix validated with real test data from `com.vtech.plus.inapp.ios.test3`.

---

**Version:** 1.1.0  
**Release Date:** December 10, 2025  
**Status:** Production Ready ✅
