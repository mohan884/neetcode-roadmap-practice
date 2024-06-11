// TODO: Medium Problem

/* 

The challenge is to encode a list of strings into a single string and then decode the strings back to the original list.
The stings in the list can contain any UTF character which makes it difficult to just add a delimiter.
- One approach could be to prepend the number of the string followed by a delimter (e.g; for "Code" the delimited string is "4;Code")
- After we're done, we can just traverse the string and add some state to the stateless joined string.

*/

// Encodes an array of strings into a single string.
function encode(input: string[]): string {
  let res = ""; // This will be used for appending the results

  for (const str of input) {
    res += `${str.length}#${str}`; // The length should be prepended before the delimiter
  }

  return res;
}

// Decodes a single encoded string back into an array of strings.
function decode(input: string) {
  const res = []; // This will be used for storing the decoded list of strings.
  let i = 0; // This will be used for tracking the start of each word.

  do {
    let j = i; // Move J to the starting of the new word
    while (input[j] !== ";") j++; // Find the position of the '#' delimiter

    let length = parseInt(input.substring(i, j)); // Before # everything will be a number

    i = j + 1; // Move to the position after the '#' delimiter
    j = i + length; // Calculate the end position of the string
    res.push(input.substring(i, j)); // Extract and push the decoded string into the result array
    i = j; // Move the index to the next starting position for decoding
  } while (i < input.length); // Continue until the end of the encoded string

  return res; // Return the decoded array of strings
}

/* ------------------------------- Test Cases ------------------------------- */

const input = ["nwo", "4life"];

console.log(encode(input));
const res = encode(input);

console.log(decode(res));
const arr = ["23", "4", "2112", "2a"];
