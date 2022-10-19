// Functions are the main “building blocks” of the program. They allow the code to be called many times without repetition.

// To create a function we can use a function declaration.
// Syntax:
// function name() {
//     body of the function
// }

// 1.
// console.log();
// Math.random();
// alert();

function printMessage() {
    console.log("this is a function");
}
printMessage();
printMessage();

// ---------##---------
// 2.
// The function has full access to the outer variable. It can modify it as well.

function showMessage() {
    userName = "Bob";
    const message = `Hello ${userName}`;
    console.log(message);
}
let userName = "John";
showMessage();

console.log(userName);
// If a same-named variable is declared inside the function then it shadows the outer one. For instance, in the code below the function uses the local userName.

// console.log(message);   // ReferenceError: message is not defined

// ---------##---------
// Global Scope
// The outer variable is only used if there's no local scope.
// If a same-named variable is declared inside the function, then it shows the outer one.
// Global variables are visible from any function.

// 3.
// A variable declared inside a function is only visible inside that function.

const userName2 = "Jane";

function printHello() {
    const userName2 = "Dpe";
    const message = `Hello ${userName2}`;
    console.log(message);
}

printHello();
console.log(userName2);
// ---------##---------
// A word on naming functions:
// Functions are actions. So their name is usually a verb. It should be brief, as accurate as possible and describe what the function does, so that someone reading the code gets an indication of what the function does.

// It is a widespread practice to start a function with a verbal prefix which vaguely describes the action. There must be an agreement within the team on the meaning of the prefixes.

// For instance, functions that start with "show" usually show something.

// Function starting with…

// "get…" – return a value,
// "calc…" – calculate something,
// "create…" – create something,
// "check…" – check something and return a boolean, etc.


// Function Robot gets us some Milk

function getMilk() {
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveRight");
    console.log("buy");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("gimmeMelk");
}

getMilk();

function lifeInWeeks(age) {
    let yearsRemaining = 90 - age;
    let days = yearsRemaining * 365;
    let weeks = yearsRemaining * 52;
    let months = yearsRemaining * 12;
    console.log("You have", days, weeks, months, "left.");
}

lifeInWeeks(12);

// We can pass arbitrary data to functions using parameters (also called function arguments) .
// Parameters to a function behave like regular bindings, but their initial values are given by the caller of the function, not the code in the function itself.

// 1.

// ---------##---------
// 2.

// ---------##---------
// 3.

// The default values of the parameters are undefined.

// ---------##---------
// 4.

// ---------##---------
// 5.
54
// 2 _Programming - Basics / lc3 / Functions I / 03 _functionExpression.js
// @ @ - 0, 0 + 1, 54 @ @
// tl;dr Function declarations load before any code is executed while Function expressions load only when the interpreter reaches that line of code.

// There is another syntax for creating a function that is called a Function Expression.
// The function is created and assigned to the variable explicitly, like any other value. No matter how the function is defined, it’s just a value stored in the variable sayHi.
// In JavaScript, a function is a value, so we can deal with it as a value.

// Function Expressions have a semicolon ; at the end, but Function Declaration does not.
// A Function Expression is used inside the statement: let sayHi = ...;, as a value. It’s not a code block.
// The semicolon ; is recommended at the end of statements, no matter what is the value.
// So the semicolons are not related to the Function Expressions in any way, they just terminate the statements.

// A function is a value representing an “action”
// Regular values like strings or numbers represent the data.
// A function can be perceived as an action.
// We can pass it between variables and run when we want.

// 1.

// ---------##---------
// 2.

// Please note again: there are no parentheses after sayHi.
// If there were, then func = sayHi() would write the result of the call sayHi() into func, not the function sayHi itself.

// The function can be called as both sayHi() and func().

// ---------##---------
// 3.

// ---------##---------
// 4.

// ---------##---------
// 5.

// ---------##---------

// Function Declaration vs Function Expression

// Function Expression
// A Function Expression is created when the execution reaches it and is usable from then on.
// Once the execution flow passes to the right side of the assignment let sum = function… , the function is created and can be used (assigned, called, etc. ) from now on.
// Function Expressions are created when the execution reaches them.

// Function Declaration
// A Function Declaration is usable in the whole script/code block.
// When JavaScript prepares to run the script or a code block, it first looks for Function Declarations in it and creates the functions. We can think of it as an “initialization stage”.
// After all of the Function Declarations are processed, the execution goes on.
// A function declared as a Function Declaration can be called earlier than it is defined.
// When a Function Declaration is made within a code block, it is visible everywhere inside that block. But not outside of it.

// When should you choose Function Declaration versus Function Expression?
// First consider Function Declaration syntax. It gives more freedom in how to organize our code, because we can call such functions before they are declared.
// Function Declarations are more “eye-catching”.