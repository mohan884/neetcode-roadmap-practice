// TODO: Easy problem

/* 

Check if a string is a palindrome (reads the same from LTR or RTL);
There are multiple ways of solving this, we can use regex to sanitize the unnecessary chars, and compare it with reverse string
Or we could use the 2 pointer approach which would be the most optimal.
- We will start with hi and lo pointer at the end and the start.
- Each pointer checks if the current char is alnum, if it is alnum then it compares both chars at hi and lo positions
- If one of the chars at hi or lo is not alnum, then that pointer is moved

*/

function isAlphanumeric(s: string): boolean {
    return (s >= "0" && s <= "9") || (s >= "a" && s <= "z");
}

function isPalindrome(s: string): boolean {
    let lo = 0; // Start one pointer at the first index
    let hi = s.length - 1; // Start another pointer at the end

    while (lo <= hi) {  // Loop until hi and lo beocmes equal 
        const charLo = s[lo]!.toLowerCase(); // Convert lo to lowercase
        const charHi = s[hi]!.toLowerCase(); // Convert hi to lowercase

        if (!isAlphanumeric(charLo)) lo++; // check if char lo is not alphanumeric, and move pointer ahead
        else if (!isAlphanumeric(charHi)) hi--; // check if char lo is not alphanumeric and move pointer back
        else {
            if (charLo !== charHi) return false; // If both chars are different, string is not a palindrome
            lo++; // Move lo ahead
            hi--; // Move hi back
        }
    }

    return true;
}

/* ------------------------------- Test Cases ------------------------------- */

const s = "A man, a plan, a canal: Panama";
console.log(isPalindrome(s));
