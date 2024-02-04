const nums = [3, 2, 4],
  target = 6;

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  // create the hashmap;
  const hash = new Map();
  // loop over the array nums
  for (let i = 0; i < nums.length; i++) {
    // find missing value to target;
    const diff = target - nums[i];
    // if hash have the missing value
    if (hash.has(diff)) {
      // return index of the missing value and the current index.
      return [hash.get(diff), i];
    }
    // store the current value with it index in the hashmap.
    hash.set(nums[i], i);
  }
  return [];
};

console.log(twoSum(nums, target));
