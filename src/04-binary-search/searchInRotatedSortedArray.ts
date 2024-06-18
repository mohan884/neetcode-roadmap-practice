function search(nums: number[], target: number): number {
  // Set the pointers
  let lo = 0;
  let hi = nums.length - 1;

  // Loop until the pointers cross each other.
  while (lo <= hi) {
    let mid = Math.trunc(lo + (hi - lo) / 2);

    if (target === nums[mid]) return mid; // If we've found the value, return.

    // Left portion is properly sorted
    if (nums[lo]! <= nums[mid]!) {
      // Search rightwards if target less than leftmost or greater than mid.
      if (target > nums[mid]! || target < nums[lo]!) lo = mid + 1;
      // Search leftwards if target more than rightmost or less than mid.
      else hi = mid - 1;
    }

    // Right portion is properly sorted
    else {
      // Search leftwards if target more than rightmost or less than mid.
      if (target < nums[mid]! || target > nums[hi]!) hi = mid - 1;
      // Search rightwards if target less than leftmost or greater than mid.
      else lo = mid + 1;
    }
  }

  return -1;
}

const input = [4, 5, 6, 7, 0, 1, 2];
const target = 2;

console.log(search(input, target));
