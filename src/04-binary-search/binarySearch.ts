function search(nums: number[], target: number): number {
  let lo = 0;
  let hi = nums.length - 1;
  let mid = Math.floor(lo + (hi - lo) / 2);

  while (lo <= hi) {
    if (nums[mid] === target) return mid;
    if (target < nums[mid]!) hi = mid - 1;
    if (target > nums[mid]!) lo = mid + 1;
    mid = Math.floor(lo + (hi - lo) / 2);
  }

  return -1;
}
