export type Direction = "N" | "S" | "W" | "E";

export interface Rover {
  x: number;
  y: number;
  facing: Direction;
}

export function turnLeft(facing: Direction): Direction {
  switch (facing) {
    case "N":
      return "W";
    case "W":
      return "S";
    case "S":
      return "E";
    case "E":
      return "N";
    default:
      return facing;
  }
}

export function turnRight(facing: Direction): Direction {
  switch (facing) {
    case "N":
      return "E";
    case "E":
      return "S";
    case "S":
      return "W";
    case "W":
      return "N";
    default:
      return facing;
  }
}

export function move(rover: Rover): Rover {
  switch (rover.facing) {
    case "N":
      return { ...rover, y: rover.y + 1 };
    case "E":
      return { ...rover, x: rover.x + 1 };
    case "S":
      return { ...rover, y: rover.y - 1 };
    case "W":
      return { ...rover, x: rover.x - 1 };
    default:
      return rover;
  }
}

export function processInstructions(rover: Rover, instructions: string): Rover {
  for (const instruction of instructions) {
    switch (instruction) {
      case "L":
        rover.facing = turnLeft(rover.facing);
        break;
      case "R":
        rover.facing = turnRight(rover.facing);
        break;
      case "M":
        rover = move(rover);
        break;
    }
  }
  return rover;
}
