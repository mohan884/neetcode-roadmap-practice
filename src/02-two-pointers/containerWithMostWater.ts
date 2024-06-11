function maxArea(height: number[]): number {
  let area = 0; // Store maxArea

  // Place pointers at the start and end.
  let lo = 0;
  let hi = height.length - 1;

  // Move pointers until they don't cross each other
  while (lo < hi) {
    const local = (hi - lo) * Math.min(height[hi]!, height[lo]!); // Local area

    // Move hi or lo depending on which is smaller.
    if (height[lo]! < height[hi]!) lo++;
    else hi--;

    area = Math.max(local, area); // Update maxarea
  }

  return area;
}

const input = [1, 1];
console.log(maxArea(input));
