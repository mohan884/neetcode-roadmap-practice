function minEatingSpeed(piles: number[], h: number): number {
  // Get the largest element
  let max = -Infinity;
  piles.forEach((pile) => (max = Math.max(max, pile)));

  // set up pointers
  let hi = max;
  let lo = 1;
  
  // Store the min eating speed
  let res = hi

  // Narrow down until pointer cross each other
  while (lo <= hi) {
    let mid = Math.trunc(lo + (hi - lo) / 2);
    let totalHours = 0;

    // Calculate the total hours for eating pile based on mid value
    for (let p of piles) {
      let hour = Math.ceil(p / mid);
      totalHours += hour;
    }

    // If total hours required is 
    if (h <= totalHours) {
      res = Math.min(res, mid);
      hi = mid - 1;
    } else {
      lo = mid + 1;
    }
  }

  return res;
}

const piles = [3, 6, 7, 11];
const h = 8;

console.log(minEatingSpeed(piles, h)); // 4
