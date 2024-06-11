function evalRPN(tokens: string[]): number {
  const stack: number[] = []; // Store operands

  for (const token of tokens) {
    const parsedNumber = Number(token); // Try parsing the number.
    if (!isNaN(parsedNumber)) {
      stack.push(parseInt(token)); // Valid number? push to stack
    } else {
      const second: number = stack.pop()!; // Get 1st Operand
      const first: number = stack.pop()!; // Get 2nd Operand

      // Perform operation based on the operator.
      switch (token) {
        case "+":
          stack.push(first + second);
          break;
        case "-":
          stack.push(first - second);
          break;
        case "*":
          stack.push(first * second);
          break;
        case "/":
          stack.push(Math.trunc(first / second));
          break;
      }
    }
  }
  return stack[0]!;
}
