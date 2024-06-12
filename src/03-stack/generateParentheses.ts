function walk(
  stack: string[],
  res: string[],
  closeN: number,
  openN: number,
  n: number
) {
  if (openN === closeN && openN === n) {
    res.push(stack.join(""));
    return;
  }

  if (openN > closeN) {
    stack.push(")");
    walk(stack, res, closeN + 1, openN, n);
    stack.pop();
  }

  if (openN < n) {
    stack.push("(");
    walk(stack, res, closeN, openN + 1, n);
    stack.pop();
  }
}

function generateParenthesis(n: number): string[] {
  const stack: string[] = [];
  const res: string[] = [];

  walk(stack, res, 0, 0, n);

  return res;
}

const input = 3;
console.log(generateParenthesis(input))