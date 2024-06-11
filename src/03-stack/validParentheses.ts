function isValid(s: string): boolean {
  const stack = []; // Store parenthesis

  // For checking corresponding opening brackets
  const closeToOpen = new Map<string, string>();
  closeToOpen.set(")", "(");
  closeToOpen.set("]", "[");
  closeToOpen.set("}", "{");

  // Loop through each bracket
  for (const bracket of s) {
    // If current bracket is not closing, push it to stack.
    if (!closeToOpen.has(bracket)) {
      stack.push(bracket);
      continue;
    }

    // Get the most recent opening bracket
    const top = stack[stack.length - 1]!;

    // Check if the current bracket is a pair of the opening bracket.
    const isMatchingPair = closeToOpen.get(bracket) === top;

    // If brackets match, remove the last bracket from stack.
    if (isMatchingPair) {
      stack.pop();
      continue;
    }

    return false; // If pairs don't match, string is invalid.
  }

  // If stack is empty, brackets are valid else invalid.
  return stack.length === 0; 
}

const input = "()[]{}";
console.log(isValid(input));
