# Mars Rover

Mars Rover is developed by React Hooks, ES6, CSS/SCSS.

## Installation

Use the package manager [npm install](https://github.com/) to install Mars Rover.

```bash
npm install
```
and then
```bash
npm start
```

unit test
```bash
npm test
```

## Usage

```react
import React, {useRef} from 'react';
import Compass from './components/compass';
import Canvas from './components/canvas';
import Mars from './components/mars';
import './App.css';
```

## Problem
A squad of robotic rovers are to be landed by NASA on a plateau on Mars. This plateau, which is curiously rectangular, must be navigated by the rovers so that their on-board cameras can get a complete map of the surrounding terrain to send back to Earth.

A rover's position and location are represented by a combination of x and y coordinates and a letter representing one of the four cardinal compass points. The plateau is divided up into a grid to simplify navigation. 

An example position might be 0, 0, N, which means the rover is in the bottom left corner and facing North.
In order to control a rover, NASA sends a simple string of letters. The possible letters are 'L', 'R' and 'M'. 'L' and 'R' makes the rover spin 90 degrees left or right respectively, without moving from its current spot. 'M' means move forward one grid point and maintain the same heading.
Assume that the square directly North from (x, y) is (x, y+1).

## Input
The first value of input is the upper-right coordinates of the plateau, the lower-left coordinates are assumed to be 0,0.

The rest of the input is information pertaining to the rovers that have been deployed. Each rover has one lines of input. The first and second and third values give the rover’s position, and then next values  is a series of instructions telling the rover how to explore the plateau.

The position is made up of two integers and a letter separated by spaces, corresponding to the x and y co-ordinates and the rover’s orientation.
****************************************
Movements File (For Reference)

```bash
1 2 N|LMLMLMLMM
```
```bash
3 3 E|MMRMMRMRRM
```

Please make sure to update tests as appropriate.
