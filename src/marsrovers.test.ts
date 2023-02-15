import { Direction,
   Rover, turnLeft, turnRight, move, processInstructions } 
from "./marsrovers";

describe('processInstructions', () => {
  test('should return the final position of the rover after executing the instructions', () => {
    const rover: Rover = { x: 1, y: 2, facing: "N" };
    const instructions = "LMLMLMLMM";
    const expected: Rover = { x: 1, y: 3, facing: "N" };
    const result = processInstructions(rover, instructions);
    expect(result).toEqual(expected);
  });
});