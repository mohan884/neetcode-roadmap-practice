function findMin(nums: number[]): number {
  let min = nums[0]!; // Store the min result

  let lo = 0; // Left pointer
  let hi = nums.length - 1; // Right pointer

  // Until both pointers don't cross each other.
  while (lo <= hi) {
    // if left element is smaller than left, search zone is sorted
    if (nums[lo]! < nums[hi]!) {
      return Math.min(min, nums[lo]!); // return the min
    }

    let mid = Math.trunc(lo + (hi - lo) / 2); // Find the mid point
    min = Math.min(min, nums[mid]!); // Update the min with mid value

    // If mid >= left item, then everthing to the left of mid is sorted.
    if (nums[lo]! <= nums[mid]!) {
      lo = mid + 1; // Reduce search zone to right
    } else {
      hi = mid - 1; // Reduce search zone to left
    }
  }

  return min;
}

const input2 = [3, 4, 5, 1, 2];
const input1 = [4, 5, 6, 7, 0, 1, 2];
const input3 = [11, 13, 15, 17];
const input4 = [2, 1];

console.log(findMin(input2));
console.log(findMin(input1));
console.log(findMin(input3));
console.log(findMin(input4));
