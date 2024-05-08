// TODO: Easy problem

/* 

Checking if array contains at least one duplicate item.
- There can be multiple approaches such as the bruteforce, the sorting and the hashSet method.
- If we just iterate through all items for each items we can do the job in O(n^2) time and O(1) space
- If we sort the array first and then find the duplicate in just one pass, that'd bring down the time to O(n.log.n)
- If we sacrifice some time for space, then we can add items to hashSet which sets and gets value in O(1) time.
    - If you don't want to check each item using get(item) call, then 
      after adding all elements, we can compare the length of set to original array.

*/

// We need to return true if there is a duplicate element in the array and false otherwise.
function containsDuplicate(nums: number[]): boolean {
    const set = new Set<number>(nums); // Construct a set from an array.
    return nums.length !== set.size; // Check if the length isn't same (for checking duplicates).
}
