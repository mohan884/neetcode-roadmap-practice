class MinStack {
  stack: number[]; // Regular Stack
  minStack: number[]; // Stores min value on each push
  min: number;

  constructor() {
    this.stack = []; // Empty stack
    this.minStack = []; // Empty min stack
    this.min = Infinity; // Bigger than any other number
  }

  push(val: number): void {
    this.stack.push(val); // Simple push operation
    const minValue = this._topMinStack(); // Recent min value
    // Push the min of val, and minValue or infinity if min doesn't exist
    this.minStack.push(Math.min(val, minValue ?? Infinity));
  }

  pop(): void {
    // remove from both the stacks
    this.stack.pop();
    this.minStack.pop();
  }

  top(): number {
    // Return the top value of the regular stack
    if (this.stack.length === 0) return Infinity;
    return this.stack[this.stack.length - 1]!;
  }

  _topMinStack(): number {
    // Return the top value of the min Stack or Infinity if stack empty
    if (this.minStack.length === 0) return Infinity;
    return this.minStack[this.minStack.length - 1]!;
  }

  getMin(): number {
    return this._topMinStack(); // Recent min value
  }
}

const obj = new MinStack();
obj.push(-2);
obj.push(0);
obj.push(-3);
console.log("getMin: ", obj.getMin());
obj.pop();
console.log("top: ", obj.top());
console.log("getMin: ", obj.getMin());
