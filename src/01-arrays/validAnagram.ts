// TODO: Easy problem

/* 

Anagram: word/phrase made by rearranging letters of different word/phrase using all original letters ONCE.A
- This can be done either using a bruteforce, sorting method or a map
- In the bruteforce method, we can just iterate for each item over all elements and see what doesn't add up.
- When sorted alphabetically, both strings should be the same.
- When using a map, we can store char as key and track how many letters it has
    - Then we can just do the same for the other string and compare both maps.

*/

function isAnagram(s: string, t: string): boolean {
    const mapS = new Map<string, number>(); // Create a map for string s
    const mapT = new Map<string, number>(); // Create a map for string t

    if (s.length !== t.length) return false; // If both strings aren't same length they're not anagrams.

    for (let i = 0; i < s.length; i++) {
        const currS = s[i] as string; // Store each character of s in map
        const currT = t[i] as string; // Store each character of t in map

        const getCurrS = mapS.get(currS); // Get value of current char of s from the map
        const getCurrT = mapT.get(currT); // Get value of current char of t from the map

        mapS.set(currS, (getCurrS || 0) + 1); // If curr char isn't in mapS, set value to 1 else increment it.
        mapT.set(currT, (getCurrT || 0) + 1); // If curr char isn't in mapT, set value to 1 else increment it.
    }

    let isAnagram = true; // By default, let's assume that these strings are anagrams.

    mapS.forEach((val, key) => { // Iterate over the first map's items
        if (mapT.get(key) !== val) { // If the item from mapS doesn't have the same value in mapT
            isAnagram = false; // It is not an anagram
        }
    });

    return isAnagram; // This will be true by default, but will become false if any discrepancy found.
}

/* -------------------------------- Test Case ------------------------------- */
const s = "anagram";
const t = "nagaram";
console.log(isAnagram(s, t));
