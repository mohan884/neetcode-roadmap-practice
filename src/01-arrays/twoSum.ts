// TODO: Easy Problem

/* 

Given array of int, return index of 2 nums such that both add to a specified target.
- As usual, we can apply either bruteforce, two pointer approach or the hashmap
- In two pointers, we would need to first sort the array which is going to take NlogN time
    - After sorting, we can move through the array in N time with 2 pointers at each ends
    - We increase the left pointer if the target value is bigger.
    - We decrease the right pointer if the target value is smaller.
- In the hashmap approach, we use a map to guarantee that until an index i, we have seen all the previous elements which can be added to get the target.
    - Suppose if arr = [2, 1, 4, 3] and target is 4, then we move through each item of the array.
    - When we go to 2, we check if 4-2 is in the seen map, which it is not, so it adds 2 to itself.
    - Then we see if 4-1 is in the seen map which it is not, and we add 1 to it.
    - At some point we get to 3 where 4-3 is indeed present the seen array, so we return the value of index for each items using get(prev) and i for curr item.

*/

/* -------------------------- Two pointer Approach -------------------------- */
function twoSum(nums: number[], target: number): number[] {
    const arr = [...nums]; // Clone the array
    arr.sort((a, b) => a - b); // Sort the array, nothing too special, just JS being JS.

    let lo = 0; // Set one pointer to the left of the array
    let hi = arr.length - 1; // Set other pointer to the right

    let pair: [number, number] = [-1, -1]; // Initialize default value of pair (not found, not found)

    do {
        const currLo = arr[lo] as number; // Get the current leftmost element
        const currHi = arr[hi] as number; // Get the current rightmost element

        if (target === currLo + currHi) { // If the target value is equal to the sum, we've found the pairs.
            if (currLo === currHi) { // If the values are actually similar, they must be near the opposite ends somewhere.
                pair = [nums.indexOf(currLo), nums.lastIndexOf(currHi)]; // Return the first and last index of the number;
                break;
            }

            pair = [nums.indexOf(currLo), nums.indexOf(currHi)]; // If the low & high items are not same, return their indices
            break;
        }

        if (target > currLo + currHi) lo++; // increment left pointer if target is larger
        if (target < currLo + currHi) hi--; // decrement right pointer if target is smaller.
    } while (hi > lo); // Do this till left and right pointers cross each other.

    return pair; // Return the resultant pair.
}

/* ---------------------------- Hashmap Approach ---------------------------- */
function twoSumHashmap(nums: number[], target: number): number[] {
    const seen = new Map<number, number>(); // Create a new map

    for (let i = 0; i < nums.length; i++) { // For each item in the array
        const curr: number = nums[i] as number; // Get the current element
        const difference = target - curr; // Calculate the difference between the target and current value
        if (seen.has(difference)) { // If the hashmap has an element which is equal to the difference
            const prev = seen.get(difference) as number; // Get the index of the element which equals difference
            return [prev, i]; // Return the pair of number at i and the diff element
        }
        seen.set(curr, i); // If there isn't an element which equals to the difference, add current item to it.
    }

    return [];
}

/* -------------------------------- Test Case ------------------------------- */
const nums = [2, 7, 11, 15];
const target = 9;

console.log(twoSum(nums, target));
console.log(twoSumHashmap(nums, target));
