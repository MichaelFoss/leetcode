function twoSum(nums: number[], target: number): number[] {
  const isSolution: (num1: number, num2: number, target: number) => boolean = (
    num1,
    num2,
    target
  ) => num1 + num2 === target;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      const [num1, num2] = [nums[i], nums[j]];
      if (isSolution(num1, num2, target)) {
        return [i, j];
      }
    }
  }

  throw new Error("No solution exists");
}

export default twoSum;
