// TODO: Medium Problem

/* 

- In two pointers, we would need to first sort the array which is going to take NlogN time
    - After sorting, we can move through the array in N time with 2 pointers at each ends
    - We increase the left pointer if the target value is bigger.
    - We decrease the right pointer if the target value is smaller.

*/

function twoSum(nums: number[], target: number): number[] {
    const arr = [...nums]; // Clone the array
    arr.sort((a, b) => a - b); // Sort the array, nothing too special, just JS being JS.

    let lo = 0; // Set one pointer to the left of the array
    let hi = arr.length - 1; // Set other pointer to the right

    let pair: [number, number] = [-1, -1]; // Initialize default value of pair (not found, not found)

    do {
        const currLo = arr[lo] as number; // Get the current leftmost element
        const currHi = arr[hi] as number; // Get the current rightmost element

        if (target === currLo + currHi) {
            // If the target value is equal to the sum, we've found the pairs.
            if (currLo === currHi) {
                // If the values are actually similar, they must be near the opposite ends somewhere.
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
