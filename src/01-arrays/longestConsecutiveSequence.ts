function longestConsecutive(nums: number[]): number {
  let longestSequence = 0;
  const set = new Set<number>(nums);

  for (let num of nums) {
    if (!set.has(num - 1)) {
      let length = 0;
      while (set.has(num + length)) {
        length++;
      }
      longestSequence = Math.max(length, longestSequence);
    }
  }

  return longestSequence;
}

const input = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1];
console.log(longestConsecutive(input));
