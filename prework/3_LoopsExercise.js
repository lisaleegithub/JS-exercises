// Week 2 - Loops

// In the following exercises, you will need to place your code or answer underneath each
// exercise prompt.

// First try answering these without using references or looking up any information.
// Then, check your answer by using references and/or running your code.
// You can run your JS code using the Chrome or Firefox Developer tools, or by using Node.js.
// Feel free to update your answers if you got them wrong at first -- this exercise is for your own learning.
// But make sure you understand why the correct answer is right.

// Exercise 1. Write a 'while' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).
var i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}
// Exercise 2. Write a 'do while' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).
var i = 1;
do {
  console.log(i);
  i++;
}
while (i <= 5);

// Exercise 3. Write a 'for' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// Exercise 4. Now we want a loop that prints the integers
// counting DOWN from 10 to 1 (inclusive). Write three loops that do this, to practice
// writing loops in all 3 ways -- as a 'while', 'do while', and 'for' loop.
var i = 10;
while (i >= 1) {
  console.log(i);
  i--;
}

var i = 10;
do {
  console.log(i);
  i--;
}
while (i >= 1);

for (let i = 10; i >= 1; i--) {
  console.log(i);
}

// Exercise 5. Write a loop that prints the integers from 7 to 27. Write this
// loop in all 3 ways -- as a 'while', 'do while', and 'for' loop.
var i = 7;
while (i <= 27) {
  console.log(i);
  i++;
}

var i = 7;
do {
  console.log(i);
  i++;
}
while (i <= 27);

for (var i = 7; i <= 27; i++) {
  console.log(i);
}

// Exercise 6. Write a loop that prints numbers between 0 and 100, counting by tens.
// I.e. it will print 10, then 20, then 30, etc.
// Write this loop in all 3 ways -- as a 'while', 'do while', and 'for' loop.
var i = 10;
while (i <= 100) {
  console.log(i);
  i += 10;
}

var i = 10;
do {
  console.log(i);
  i += 10;
} 
while (i <= 100);

for (var i = 10; i <= 100; i += 10) {
  console.log(i);
}

// Exercise 7. Add a comment as to why the following loop is an infinite loop (will
// run without ever stopping). Then fix the loop so that it stops when
// counterFour is equal to -100.

// The reason for an infinite loop in this case is 
// because the variable counterFour starts at 1 and after each loop, 
// it is decreased by 1 which is always less than 2. 
// In other words, the the condition set in this while loop is always true 
// resulting in an infinite loop.
let counterFour = 1;
while (counterFour >= -100) {
  console.log("HELP ME!");
  counterFour--;
}

// Exercise 8. Make a variable that contains your favorite integer. Write a loop
// (your choice which type) that prints the integers from 0 to that number.
// favorte integer is 2
for (var i = 0; i <= 2; i++) {
  console.log(i);
}

// Exercise 9. Make a variable that contains your favorite integer (this time make sure it's
// less than 100). Write a loop (your choice which type) that prints the integers from 0 to 100.
// Next to each number it should print "not my favorite number". But next to your favorite
// number it should print "my favorite number!". Example output (if your favorite number was 2):
// 0 not my favorite number
// 1 not my favorite number
// 2 my favorite number!
// 3 not my favorite number
// ...
// (Hint - use an if statement in your loop)
var faveNum = 2;
for (var i = 0; i <= 100; i++) {
  if (i === faveNum) {
    console.log(i + " my favorite number!")
  } else {
    console.log(i + " not my favorite number")
  }
}

// Exercise 10. In some of the exercises above, we had you write all 3 types of loops, for practice.
// But in real life, how would you decide which type of loop to use? You might not have an
// exact answer, but spend a few minutes thinking about the different types of loops and/or
// doing some research and write down your thoughts in a comment below:

// First of all, a 'for' loop is a more structured version of a 'while' loop so a 'for' loop can always be
// re-writte as a 'while' loop. 'For' loop is great to use when the number of interations is known and
// in real life, that is when I want to iterate over an array.
// 'While' loop and 'do while' loop are more flexible in a senese that the number of iterations is not
// specified and both loops stop when the condition fails. One big difference between a 'while' and 'do while' loops
// is that a 'do while' loop is always executed once even if the condiiton is false but a 'while' loop isn't executed
// unless the condition is true. 'While' loop would be useful when asking for user input but
// I can't think of a scenario where I would need to use a 'do while' loop.


// Exercise 11. Now we'll practice using nested loops (a loop inside another loop)!
// Update the nested loops below to so that for each value of outsideCounter,
// the inside loop will show a countdown

/*
counting down from 0
*********************************** 
counting down from 1
inside 1
*********************************** 
counting down from 2
inside 2
inside 1
*********************************** 
counting down from 3
inside 3
inside 2
inside 1
*********************************** 
*/
for (let outsideCounter = 0; outsideCounter <= 3; outsideCounter++) {
  console.log("counting down from", outsideCounter);
  for (let insideCounter = outsideCounter; insideCounter > 0; insideCounter--) {
    console.log("inside", insideCounter);
  }
  console.log("***********************************");
}

// Congrats, you made it to the end!
// Did you find this easy or hard? If you used references, which ones helped you?
// Please answer in a comment below.
// I struggled with defining the condition for the first couple problems 
// because I didn't use the correct comparison operator but I quickly realized 
// what I needed to do for the other problems. The last problem was the hardest 
// but the rest were easy after I figured out the first couple problems. 
// I used w3school, TutorialRepublic, BetterProgramming, and stackoverflow for explanations on types of loops.

// Email your file to us or commit your file to GitHub and email us a link.
