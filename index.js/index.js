//Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. 
// For numbers divisible by 3, 
// print "Fizz" instead of the number, 
// and for numbers divisible by 5 (and not 3),
//  print "Buzz" instead.

// When you have that working, modify your program to print "FizzBuzz" for numbers that are
//  for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).

// Solution

for (let i = 1; i <= 100; i++) {
    if (i%3==0 && i%5==0)
      console.log("FizzBuzz");
    else if (i%3==0) 
      console.log("Fizz");
    else if (i%5==0) 
      console.log("Buzz");
    else 
      console.log(i);
  }

  for (let i = 1; i <= 100; i++) {
    var output = "";
    if (i%3==0) 
      output = "Fizz";
    if (i%5==0) 
      output += ("Buzz");
    console.log(output || i);
  }

// Chess board
// Write a program that creates a string that represents an 8×8 grid
// using newline characters to separate lines.
// At each position of the grid there is either a space or a "#" character.
// The characters should form a chess board.

// Solution
let gridSize = Number(prompt("Enter size of grid", "8"));
let totalSize = (gridSize * gridSize) + gridSize;
let grid = "";

for (i = 0; i < totalSize; i++) {
    if (i % (gridSize + 1) == 0)
      grid += "\n";
    else if (i % 2 == 0)
      grid += "#";
    else
      grid += " ";
  }
  console.log(grid);
