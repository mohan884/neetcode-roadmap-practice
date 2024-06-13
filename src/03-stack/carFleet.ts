function carFleet(target: number, position: number[], speed: number[]): number {
  const cars: { pos: number; speed: number }[] = [];
  const stack: number[] = [];

  // Store the car's details in a list.
  for (let i = 0; i < position.length; i++) {
    cars.push({ pos: position[i]!, speed: speed[i]! });
  }

  // Sort the cars in descending order based on their positions
  cars.sort((a, b) => b.pos - a.pos); // The head car will be first element.

  cars.forEach((car) => {
    const time = (target - car.pos) / car.speed; // Reaching time
    stack.push(time); // Head car will be at the bottom

    // If there's only one car then it is the only fleet.
    if (stack.length >= 2) {
      const top = stack[stack.length - 1]!;
      const beforeTop = stack[stack.length - 2]!;

      // If a previous could reach before the one ahead, it'll make a fleet.
      if (beforeTop >= top) {
        stack.pop(); // Car ahead will take more time, so it doesn't matter.
      }
    }
  });

  return stack.length;
}

const target = 12;
const pos = [10, 8, 0, 5, 3];
const speed = [2, 4, 1, 1, 3];

console.log(carFleet(target, pos, speed));
