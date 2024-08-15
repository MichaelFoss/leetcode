// const NUM_MIN = -1000;
const NUM_MAX = 1000;
// const NUMS_MIN = 3;
// const NUMS_MAX = 500;
// const TARGET_MIN = 0 - Math.pow(10, 4);
const TARGET_MAX = Math.pow(10, 4);

const threeSumClosest = (...args: Array<any>): number => {
  let nums: Array<number> = args[0].sort((a: number, b: number) =>
    a < b ? -1 : 0
  );
  const target: number = args[1];

  // Set the initial value to one more than the worst possible outcome
  let smallestDiff = TARGET_MAX + NUM_MAX * 3 + 1;
  let smallestSum: number = undefined;
  for (
    let i = 0, lastLeft: number = undefined, lastRight: number = undefined;
    smallestDiff > 0 && i < nums.length - 2;
    i++, lastLeft = undefined, lastRight = undefined
  ) {
    if (i === 0 || nums[i] !== nums[i - 1]) {
      for (let left = i + 1, right = nums.length - 1; left < right; ) {
        if (nums[left] === lastLeft) {
          lastLeft = nums[left];
          left++;
        } else if (nums[right] === lastRight) {
          lastRight = nums[right];
          right--;
        } else {
          // Only run some logic if the values have changed
          const sum = nums[i] + nums[left] + nums[right];
          const diff = sum > target ? sum - target : target - sum;
          if (diff < smallestDiff) {
            smallestDiff = diff;
            smallestSum = sum;
          }
          if (sum < target) {
            lastLeft = nums[left];
            left++;
          } else if (sum > target) {
            lastRight = nums[right];
            right--;
          } else {
            // The sum is equal to the target;
            // This is as small as it gets
            return target;
          }
        }
      }
    }
  }
  return smallestSum;
};

export default threeSumClosest;
