const nums1 = [1, 3];
const nums2 = [2];

function findMedianSortedArrays(nums1, nums2) {
  // Make sure nums1 is the smaller array
  if (nums1.length > nums2.length) {
    [nums1, nums2] = [nums2, nums1];
  }

  const m = nums1.length;
  const n = nums2.length;
  const total = m + n;
  const half = Math.floor((total + 1) / 2);

  let left = 0;
  let right = m;

  while (left <= right) {
    const partitionNums1 = Math.floor((left + right) / 2);
    const partitionNums2 = half - partitionNums1;

    const maxLeftNums1 =
      partitionNums1 === 0 ? -Infinity : nums1[partitionNums1 - 1];
    const minRightNums1 =
      partitionNums1 === m ? Infinity : nums1[partitionNums1];

    const maxLeftNums2 =
      partitionNums2 === 0 ? -Infinity : nums2[partitionNums2 - 1];
    const minRightNums2 =
      partitionNums2 === n ? Infinity : nums2[partitionNums2];

    if (maxLeftNums1 <= minRightNums2 && maxLeftNums2 <= minRightNums1) {
      // The correct partition is found
      if (total % 2 === 0) {
        return (
          (Math.max(maxLeftNums1, maxLeftNums2) +
            Math.min(minRightNums1, minRightNums2)) /
          2
        );
      } else {
        return Math.max(maxLeftNums1, maxLeftNums2);
      }
    } else if (maxLeftNums1 > minRightNums2) {
      right = partitionNums1 - 1;
    } else {
      left = partitionNums1 + 1;
    }
  }

  // The function should never reach here
  throw Error("No median found - check if the input arrays are sorted");
}

console.log(findMedianSortedArrays(nums1, nums2));
