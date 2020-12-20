# Random Joke Generator
> With learning how to use Github and Github flow, I'm creating a Javascript program that outputs a random joke every time it is run in Node.js.

## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Status](#status)
* [Inspiration](#inspiration)

## General info
The program will log a random string, each of which is a different joke, from an array to the console using Node.js.

## Technologies
* VS Code - Version 1.52.0
* git version 2.29.2.windows.2
* Node.js

## Setup
Running the program in Node.js will output a random joke to the console from an array containing 20 unique strings of bad jokes.

## Code Examples
const randomJoke = arr => {
    console.log(arr[Math.floor(Math.random()*arr.length)]);
};

## Features
List of features ready and TODOs for future development
* Includes a list of 20 jokes

To-do list:
* Write Javascript code that outputs random jokes whenever the script is run.

## Status
Project is: _in progress_

## Inspiration
This project is based on Codecademy's assignment "Mixed Messages" for the Full Stack Developer course.
