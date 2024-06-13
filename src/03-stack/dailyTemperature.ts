function dailyTemperatures(temperatures: number[]): number[] {
  const res: number[] = [...new Array(temperatures.length).fill(0)];
  const stack: { temp: number; idx: number }[] = [];

  temperatures.forEach((temp, i) => {
    console.log("current : ", temp, i);
    while (stack.length && temp > stack[stack.length - 1]?.temp!) {
      const { idx, temp: t } = stack.pop()!;
      console.log("popped : ", t, idx);
      res[idx] = i - idx;
    }
    stack.push({ temp: temp, idx: i });
    console.log("pushed : ", temp, i);
  });

  return res;
}

const input = [73, 74, 75, 71, 69, 72, 76, 73];
console.log(dailyTemperatures(input));
