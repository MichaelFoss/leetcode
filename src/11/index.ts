const maxArea: (heights: number[]) => number = (heights) => {
  let left = 0;
  let right = heights.length - 1;
  let maxArea = 0;

  while (left < right) {
    const height = Math.min(heights[left], heights[right]);
    const width = right - left;
    const area = height * width;

    maxArea = Math.max(maxArea, area);

    // Move the pointer pointing to the shorter pillar
    if (heights[left] < heights[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxArea;
};

export default maxArea;
