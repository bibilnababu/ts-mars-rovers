import {
  turnRight,
  turnLeft,
  move,
  processInstructions,
  Direction,
  Rover,
} from "./marsrovers";

import readline from "readline";

console.log("Welcome to Mars!!😈");
const plateauUpperRight = { x: 5, y: 5 };
const rover: Rover = { x: 1, y: 2, facing: "N" };
console.log(
  `Initial rover position:x= ${rover.x} y=${rover.y}facing= ${rover.facing}`
);
const newRover = processInstructions(rover, "LMLMLMLMM");
console.log("Instructions:LMLMLMLMM");
console.log("Rover taking the instructions to  move ................");
console.log("new rover position found!");
console.log(
  `New rover position: x=${newRover.x}, y=${newRover.y}, facing=${newRover.facing}`
);
