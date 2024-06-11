function threeSum(nums: number[]): number[][] {
  nums = nums.sort((a, b) => a - b); // Ascending order

  const result: [number, number, number][] = [];

  for (let i = 0; i < nums.length; i++) {
    // Skip duplicate i values. This speeds things up a lot.
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    // Set two pointers between the rest of the nums and the end
    let lo = i + 1;
    let hi = nums.length - 1;

    while (lo < hi) {
      const sum = nums[i]! + nums[lo]! + nums[hi]!;

      if (sum > 0) hi--; // Sum too large? Decrease it.
      else if (sum < 0) lo++; // Sum too small? Increase it.
      else {
        // Skip duplicate left and right values
        while (lo < hi && nums[lo] === nums[lo + 1]) lo++;
        while (lo < hi && nums[hi] === nums[hi - 1]) hi--;

        result.push([nums[i]!, nums[lo]!, nums[hi]!]);
        lo++; // Increment left to keep looking for more combinations.
      }
    }
  }

  return result;
}

const input = [-1, 0, 1, 2, -1, -4];
console.log(threeSum(input));
