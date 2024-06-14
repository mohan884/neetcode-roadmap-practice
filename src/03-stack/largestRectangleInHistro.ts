function largestRectangleArea(heights: number[]): number {
  let maxArea = 0;
  const stack: { height: number; index: number }[] = [];

  heights.forEach((height, i) => {
    let widthStart = i;

    while (stack.length && stack[stack.length - 1]?.height! > height) {
      const popped = stack.pop()!;
      maxArea = Math.max(maxArea, popped.height * (i - popped.index));
      widthStart = popped.index;
    }

    stack.push({ height, index: widthStart });
  });

  stack.forEach(({ height, index }) => {
    maxArea = Math.max(maxArea, height * (heights.length - index));
  });

  return maxArea;
}

const input = [2, 1, 5, 6, 2, 3];
console.log(largestRectangleArea(input));
