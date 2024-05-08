// TODO: Medium Problem

/* 

Given a list of strings, identify and group anagrams together and return in any order.
- To solve this problem one way could be to just sort each string.
    - Since all the anagrams would be having the same sorted string, we can easily group them.
- Another and more efficient way could be to just use a hashmap.
    - We could create a hashmap where the key is a list of chars for each letter in the alphabet
    - The value is the actual string itself.
    - The idea is that two anagroams would be having the same alphabet frequency list which could allow grouping of anagrams together.

*/

function groupAnagrams(strs: string[]): string[][] {
    const anagrams = new Map<string, string[]>(); // Store the alphabet array as key and list of strings as value.

    for (let str of strs) { // Iterate over each string in the list
        const charCount = new Array(26).fill(0); // Create an alphabet array with 0 as initial value.

        for (let char of str) { // Get the alphabet array for each of the string.
            const code = char.charCodeAt(0) - "a".charCodeAt(0); // Calculate the character code for each char in string,
            charCount[code]++; // If the character appears in the string, increment the value in the array.
        }

        const charCountString = charCount.join(","); // Since JS can't compare 2 strings by their elements, we need to convert it into string.
        if (anagrams.has(charCountString)) { // Check if the alphabet array is already in the map
             // set the key as alphabet array and value as list of strings after fetching list of strings first.
            anagrams.set(charCountString, [ ...anagrams.get(charCountString)!, str]);
        } else { // If there is no matching alphabet array, then add a single element to the correspoinding key.
            anagrams.set(charCountString, [str]);
        }
    }

    return [...anagrams.values()]; // We're required to return just the values.
}

/* ------------------------------- Test Cases ------------------------------- */

const s = ["eat", "tea", "tan", "ate", "nat", "bat"];

console.log(groupAnagrams(s));
