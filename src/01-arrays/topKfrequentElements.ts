// TODO: Medium Problem

/* 

Given an int arr[] and int k, return the K most frequent elements.
- One approach could be to start with 2 pointers from the left side at position 0.
    - The leftmost pointer only moves forward when the right one encounters a new element

*/
/* ---------------------------- Hashmap approach ---------------------------- */
function topKFrequentHashMap(nums: number[], k: number): number[] {
    let frequency = new Map();

    for (let i = 0; i < nums.length; i++) {
        if (frequency.has(nums[i])) {
            let curr = frequency.get(nums[i]);
            frequency.set(nums[i], curr + 1);
        } else {
            frequency.set(nums[i], 1);
        }
    }

    const values = [...frequency.entries()]
        .sort((pairA, pairB) => pairB[1] - pairA[1])
        .map((freq) => freq[0])
        .slice(0, k);
    return values;
}

/* -------------------------- Bucket List Approach -------------------------- */

/* ------------------------------- Test Cases ------------------------------- */

const nums = [4, 1, -1, 2, -1, 2, 3];
const k = 2;
console.log(topKFrequentHashMap(nums, k));
