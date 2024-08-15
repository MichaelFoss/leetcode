const threeSum = (...args: Array<any>): Array<[number, number, number]> => {
  let nums: Array<number> = args[0].sort((a: number, b: number) =>
    a < b ? -1 : 0
  );
  const result: Array<[number, number, number]> = [];
  for (
    let i = 0, lastLeft: number = undefined, lastRight: number = undefined;
    i < nums.length - 2;
    i++, lastLeft = undefined, lastRight = undefined
  ) {
    if (i === 0 || nums[i] !== nums[i - 1]) {
      for (let left = i + 1, right = nums.length - 1; left < right; ) {
        if (nums[left] === lastLeft) {
          left++;
        } else if (nums[right] === lastRight) {
          right--;
        } else if (nums[i] + nums[left] + nums[right] === 0) {
          result.push([nums[i], nums[left], nums[right]]);
          lastLeft = nums[left];
          lastRight = nums[right];
        } else if (nums[i] + nums[left] + nums[right] < 0) {
          left++;
        } else {
          right--;
        }
      }
    }
  }
  return result;
};

export default threeSum;
