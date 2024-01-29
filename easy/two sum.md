# Two sum

## Description

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

```
Example 1:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
```

```
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
```

```
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
```

Constraints:

- 2 <= nums.length <= 10^4
- -10^9 <= nums[i] <= 10^9
- -10^9 <= target <= 10^9
- Only one valid answer exists.

## Solution

```
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // create the hashmap;
    const hash = new Map();
    // loop over the array nums
    for(let i = 0; i < nums.length; i++){
        // find missing value to target;
        const diff = target - nums[i];
        // if hash have the missing value
        if (hash.has(diff)){
            // return index of the missing value and the current index.
            return [hash.get(diff), i];
        }
        // store the current value with it index in the hashmap.
        hash.set(nums[i], i);
    }
    return [];
};

```
