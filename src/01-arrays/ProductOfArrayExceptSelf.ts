// TODO: Medium problem

/* 

Given an int arr, return an arr such that arr[i] === prod of all list items except current one.
The challenge is to wrtie an algorithm with time complexity of O(n) and memory of O(1).
- One approach is to use prefix and postfix product arrays.
- if the array is [1, 2, 3, 4], then prefix = [1, 2, 6, 24], and postfix = [24, 24, 12, 4]
- The result is [24, 12, 8, 6]
- Now when we walk over the array again, we can just multiply the element before and after to get the results
- But we don't need extra arrays for storing the prefix and postfix operations.
- When we're on the either end of the array, we find ourselves just using the product from element before and after.
- For the elements in between we tend to multiply it, so why not just copy the original array into the res array
- So at the either end, we will just put 1 for both prefix and postfix operation. we also need a variable for keeping prefix/postfix data
- This prefix/postfix data will be multiplied by both the original array elements and the resulting array from the previous step.
*/

function productExceptSelf(nums: number[]): number[] {
    const res: number[] = new Array(nums.length).fill(1); // Initialize the array with some values.
    let prefix = 1; // Initially, prefix starts with a value 1
    let postfix = 1; // Initially, postfix also starts with a value 1

    // First pass - Prefix
    for (let i = 0; i < nums.length; i++) {
        res[i] = prefix; // Add the prefix product value to the resulting array first
        prefix *= nums[i]!; // multiply the next item from the original array to get the prefix to that point.
    }

    // Second pass - Postfix
    for (let i = nums.length - 1; i >= 0; i--) {
        res[i] = postfix; // Add the postfix product value to the resulting array first
        postfix *= nums[i]!; // multiply the previous item from the original array to get the postfix till that point.
    }

    return res;
}

/* ------------------------------- Test Cases ------------------------------- */

const arr = [1, 2, 3, 4];
console.log(productExceptSelf(arr));
