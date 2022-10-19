// General introduction
// PROGRAM SUBMODULE
// What is the normal flow of a program?

// From top to bottom! Normally!
// From left to right "LTR"
// let number = 5;
// console.log(++number);

// Logical Thinking
// What is a program also called?
// Algorithm
// Specific flow of instructions
// How input is transferred into output
// INPUT => ALGORITHM => OUTPUT

// Analyze Problems: What is the input? What is the output?
// Think about before starting to program
// What if I want to make a lasagna?
// What are the steps?

// 0. Grocery Shopping
// 1. INPUT: Ingredients? Pasta, Vegetables, Bechamel Sauce, Ragout
// 2. Start the oven, preheat
// 3. Cook ragout
// 4. Cook Bechamel
// 5. Make layers with Pasta, Bechamel and ragout
// 6. Put the pasta in the oven
// 7. Wait 30 minutes
// 8. OUTPUT: LASAGNA
// 9. Eat it!

// Order is important, we need to tell the computer each single step
// he doesn't know anything !!! we can google :D but the computer cannot..
// if you don't how exactly to do a lasagna, search for a recipe! => get the algorithm!

// Lets make DUMPLINGS :D
// INPUT: Flour, Yeast, Vegetables, Spring Onion, Carrots, Mince, Spices (Salt, Pepper, Sugar, Soya Sauce...)
// 1. Make the dough (500g + 340g of Water + 3g Yeast + 5g Salt + 15g Sugar )
// 2. Let it sit half an hour...
// 3. Meanwhile Chop vegetables
// 4. Mix Spices with vegetables everything together
// 5. Grab small ball of dough, make it flat, put ingredients in, wrap it up!
// 6. Let is sit again for half an hour...
// 7. Cook: Put all dumplings in a flat pan with water 0.5cm, close the lid => Steam cooking
// 8. Make it hot!!! 7-6
// 9. Cook it for 15-20 minutes
// 10. Until water is gone => Fork Test => Ready?
// OUTPUT: Dumplings

// Come up with solutions: We will face a lot of problems
// How can we achieve something? => writing algorithms
// A RECIPE IS LIKE A ALGORITHM
// BE AS PRECISE AS POSSIBLE !

// BEST PRACTICES
// Don't repeat yourself => DRY Principle

// Input  => Algorithm => Output
// 2, 5	  => Blackbox  =>  5
// 0, 100 => Blackbox  => 100
// 52, 35 => Blackbox  => 52

// Let a be the first input.
// Let b be the second input.
// If a is greater than b, print a.
// If b is greater than a, print b.

// General rule ?
// Finding the biggest
// How can we find out the biggest number?

// Solution Pseudo Code for Blackbox Number 1:
//  If the first number is bigger than the second number,
//      give me first number.
//  Otherwise
//      give me the second number.

// 2 _Programming - Basics / lc2 / program / 02 _conditionals.js

// Conditional Statements if-else

// Logical Thinking:
// //Sunny
// 1. if sunny dress in shorts and light top
// 2. if sunny wear a face cap or hat
// //Rainy
// 1. if rainy take along an umbrella
// 2. if rainy wear a raincoat
// 3. if rainy use a car where possible
// // Cloudy
// 1. if cloudy  dress in your finest as possible
// 2. if cloudy  wear any shoes of your choice
// // Snow
// 1. if snow wear a winter jacket or mantle
// 2. if snow wear a snow boot
// 3. if snow check the traffic before going out

let weather = "Sunny";

if (weather === "Sunny") {
    console.log("Bring your sun glasses."); // Bring your sun glasses.
}

if (weather === "Rainy") {
    console.log("Carry an umbrella.");
}

if (weather === "Snowy") {
    console.log("Wear a snow jacket");
}

// Sometimes, we need to perform different actions based on different conditions.
// The if(...) statement evaluates a condition in parentheses and, if the result is true, executes a block of code.

// 1.
// Input: 21 and 3.
// if 21 is divisible by 3 then print- Yes, 21 is a multiple of 3
// if 21 is not divisible by 3 then print- No, 21 is not a multiple of 3

// ---------###--------
// 2.
// Input: varA and varB
// if varA is not equal to varB, print- Booleans are not equal to strings!
// else, print- Booleans are equal to strings!

// Booleans are not equal to strings!

// ---------###--------
// 3.
// We can also pass a pre-evaluated boolean value to if, like this:

// Input: year and cond
// If the condition is true, then print - Yes, it is 2020.
// else, print- You are not up to date.

// You are not up to date!

// ---------###--------
// 4.
// Sometimes, we need to assign a variable depending on a condition.

// Input: age
// if age is grater than 18, then allow access (accessAllowed is true)
// else deny access (accessAllowed is false)

// The if (…) statement evaluates the expression in its parentheses and converts the result to a boolean.

// ---------###--------
// 5.

// ---------###--------
// 6.

// Input: company, language, statementTrue and statementFalse
// if the company is Netscape, print true statement
// else print false statement

// ---------###--------
// 7.

// Inputs:
// weather
// tan

// Possible Outputs:
// "Don't forget your sunglasses!"
// "Don't forget your sunblocker"
// "enjoy!"
// "Don't forget your umbrella!"

// if weather is sunny OR weather is snowy, print - "Don't forget your sunglasses!"
// if you don't want a tan, print "Don't forget your sunblocker", else print "enjoy!"
// else print "Don't forget your umbrella!"

// ---------###-----------------###--------
// Several conditions: “else if”

// 1.

// Input:
// time2

// If time is less than 10, greeting is "Good morning!", print greeting.
// If time is grater than/equal to 10 AND less than 20, greeting is "Good day!", print greeting.
// Else greeting is "Good evening!", print greeting.

// ---------###--------
// 2.
// let firstName = "John";
// let agE = 25;

// Input: first name and age

// If age is less than 13, print ${firstname} is a kid.
// If age is grater than/equal to 13 AND less than 20, print ${firstname} is a teenager.
// If age is grater than/equal to 20 AND less than 30, print ${firstname} is a young man.
// Else print ${firstname} is a man.

// ---------###--------
// 3.

// Inputs:
// weather
// tan

// Possible Outputs:
// "Don't forget your sunglasses!"
// "Don't forget your sunblocker"
// "enjoy!"
// "Don't forget your umbrella!"

// if weather is sunny, print - "Don't forget your sunglasses!"
// if weather is sunny and you don't want a tan, print "Don't forget your sunblocker", else print "enjoy!"
// if weather is snowy, print - "Don't forget your coat!"
// else print "Don't forget your umbrella!"