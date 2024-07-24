const merge = (left: number[], right: number[]): number[] => {
  let sortedArr: number[] = []; // the sorted items will go here
  while (left.length && right.length) {
    // Insert the smallest item into sortedArr
    if (left[0] < right[0]) {
      sortedArr.push(left.shift()!);
    } else {
      sortedArr.push(right.shift()!);
    }
  }
  // Use spread operators to create a new array, combining the three arrays
  return [...sortedArr, ...left, ...right];
};

const findMedianSortedArrays = (nums1: number[], nums2: number[]): number => {
  const nums = merge(nums1, nums2);
  if (nums.length % 2 === 1) {
    return nums[Math.floor(nums.length / 2)];
  } else {
    if (nums.length === 0) {
      return 0;
    } else {
      return (nums[nums.length / 2 - 1] + nums[nums.length / 2]) / 2;
    }
  }
};

export default findMedianSortedArrays;
