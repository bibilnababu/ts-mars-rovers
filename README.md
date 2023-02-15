# TypeScript Mars Rover Program

# Introduction

This is a program to move rovers around the surface of Mars!The surface of Mars is represented by a Plateau.

Plateau is a square grid for the purpose of this task.

Rovers navigate the Plateau 🦾 to collect samples back to Planet Earth 🌏

# Little description on how Mars Rover Work?

The Plateau is divided into a grid. A Rover’s position is represented by x and y co-ordinates and the letters N, S, W, E to represent North, South, West, East (the four
cardinal compass points) respectively.

Example
0 0 N
This means the Rover is at the bottom-left corner facing in the North direction.
N.B. Assume that the square directly North from (x, y) is (x, y+1), and the square directly
East from (x, y) is (x + 1, y)

# 🗺Instructing a Rover to Move Around the Plateau
Letter & Action

L Spins the Rover 90 degrees Left withoutmoving from the current coordinate point

R Spins the Rover 90 degrees Rightwithout moving from the current coordinate point

M Moves the Rover forward by one grid point, maintaining the sameheading/orientation

# ⌨️ Inputs into the Program
First Line of Input to the Program
The first line inputted into the program represents the upper-right coordinates of the
Plateau.

5 5
This Plateau has maximum (x, y) co-ordinates of (5, 5).

Subsequent Lines of Input into the Program - Input to Rovers
This represents the instructions to move the rovers.
Each rover receives two lines of input.

<!-- First Line of Input to a Rover
The Rover’s position is represented by two integers representing the X and Y
coordinates and a letter representing where the Rover is facing (its orientation). -->

<!-- 1 2 N
Second Line of Input to a Rover
A string of letters representing the instructions to move the Rover around the Plateau. -->

📏 Movement Rules
Rovers move sequentially, this means that the first Rover needs to finish moving first
before the next one can move.

➡️ Output
For each Rover, the output represents its final position (final coordinates and where it is
facing).

# Example Test Case

Lines of Input to the Program:
5 5

1 2 N

LMLMLMLMM

3 3 E

MMRMMRMRRM

# Expected Output:
1 3 N

5 1 E

## Instructions

-clone the repository to your local repository

-Run npm install for the all the dependencies

-Initialize the plateau upper-right coordinates.

-Created two instances of the Rover (ie,rover 1 and rover 2).

-Call the processInstructions function to move the rovers. And have described function turnright and turn left which will provide the new orientation after turning.

-The final position of each rover will be returned .

