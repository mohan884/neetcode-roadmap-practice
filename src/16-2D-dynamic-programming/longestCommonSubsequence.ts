// TODO: Medium Problem

/* 

Given an unsorted array of int, return the length of unsorted longest consecutive elements
You must write an algorithm that runs in O(n) time.

Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

One way of solving this would be to just sort which would give us all the consecutive values in O(NlogN)
But to do this in O(N) time, we need to get creative.

If we were to visualize the array's elements in a number line we'd notice 
- All the sequences start without an element to their left.
- The sequence continues until we can't go to the right.
- Next sequence will start some x elements after the others.
- We can't start a sequence if an element to the left is found.

With all this in mind, the solution would be to just use a set.
- We can iterate over each of the set's elements.
    - We will start with checking if each number has a left neighbor.
    - If it doesn't we'll start our sequence until our set doesn't have a right neighbor.
    - While moving through the sequence we'll keep track of it and compare it to the length of previous sequence.

*/

function longestConsecutive(nums: number[]): number {
    const set = new Set<number>(nums); // Create a new set
    let length = 0; // We assume that the array could be empty.

    set.forEach((num) => { 
        let currLength = 1; // If there is a number in the array, length must be at least 1 so we start with that.

        if (!set.has(num - 1)) { // If set doesn't have a left neighbor
            while (set.has(num + 1)) { // Start sequence until a right neighbor isn't found in the set.
                num++; // Move one number ahead consecutively.
                currLength++; // Increment the length
            }
        }

        length = Math.max(length, currLength); // Compare and update the length based on the prev one.
    });

    return length; 
}

/* ------------------------------- Test Cases ------------------------------- */

const arr = [100, 4, 200, 1, 3, 2];
// const arr = [0,3,7,2,5,8,4,6,0,1]
// const arr: number[] = [];
// const arr = [0];
console.log(longestConsecutive(arr));
