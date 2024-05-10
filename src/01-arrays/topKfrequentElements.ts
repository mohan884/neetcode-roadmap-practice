// TODO: Medium Problem

/* 

Given an int arr[] and int k, return the K most frequent elements.
- One approach of doing is is with a hashmap and the other with a map and a bucket
- Idea for the hashmap is to first get count or frequency of all the numbers in the list.
    - We then iterate over all KV pairs and sort them based on their # of occurrences.
    - Sorting will give us the numbers in ascending order which can be sliced till the K values to get our results.
- The map and bucket approach still involves the hashmap from above
    - After getting the frequency count, we create buckets with count as index and numbers as list of values

*/
/* ---------------------------- Hashmap approach ---------------------------- */
function topKFrequentHashMap(nums: number[], k: number): number[] {
    let frequency = new Map<number, number>(); // Create a hashmap for storing frequency

    for (let i = 0; i < nums.length; i++) { // Iterate over all items in the list.
        if (frequency.has(nums[i]!)) { // If the hashmap has the current number
            const curr = frequency.get(nums[i]!)!; // Get the current count for the number 
            frequency.set(nums[i]!, curr + 1); // Update the frequency by 1
        } else { // Otherwise if there is no entry for the current number 
            frequency.set(nums[i]!, 1); // Set the count to 1 in hashmap
        }
    }

    const values: number[] = [...frequency.entries()] // Iterate over the KV pairs (key: number, value: count)
        .sort((pairA, pairB) => pairB[1] - pairA[1]) // sort the pair based on their frequency
        .map((pair) => pair[0]) // Get the corresponding number after sorting the list
        .slice(0, k); // Only include the first K elements from the sorted number list.
    return values;
}

/* -------------------------- Bucket List Approach -------------------------- */

function topKFrequent(nums: number[], k: number): number[] {
    if (nums.length === k) return nums; // The list is already made of top K elements

    const freq: Map<number, number> = new Map(); // For storing the frequency { number: count }
    const buckets: Array<Array<number>> = new Array(nums.length + 1); // Stores list of nums and values and uses count as index
 
    for (let i = 0; i < nums.length; i++) { // Count frequency for each number in nums
        freq.set(nums[i]!, (freq.get(nums[i]!) || 0) + 1);
    }

    for (const [num, count] of freq) { // Create buckets with count as index and numbers as list of values
        if (!buckets[count]) buckets[count] = []; // If there is no bucket for current index, create one
        buckets[count]!.push(num); // Push the number to the bucket.
    }
 
    const res: number[] = []; // Store the top k elements

    for (let i = buckets.length - 1; i >= 0; i--) { // loop over all buckets
        const values = buckets[i]!; // Get all values for current bucket
        if (!values) continue; // If there is no bucket for the count, move to the next one,

        // Until there are values in the bucket, and the result array doesn't have K items, iterate.
        for (let j = 0; j < values.length && res.length !== k; j++) {
            res.push(values[j]!); // Push the values from the current bucket to the array
        }
    }

    return res;
}

/* ------------------------------- Test Cases ------------------------------- */

const nums = [3, 0, 1, 0];
const k = 1;
console.log(topKFrequent(nums, k));
