// //LOGICAL OPERATORS
// // && - and
// // || - or
// // ! - not

// const firstVar = 10;
// const secondVar = 20;

// console.log(firstVar < secondVar && firstVar == secondVar);
// console.log(firstVar < secondVar || firstVar == secondVar);

// console.log(firstVar < secondVar); // true
// console.log(!(firstVar < secondVar)); //false
// console.log(!(firstVar > secondVar)); //true

// const thridVar = 20;

// console.log(
//     (firstVar > secondVar && firstVar == secondVar) || secondVar === thridVar
// ); // true



// // 36 lines(22 sloc) 583 Bytes

// // TEMPLATE LITERALS

// const myName = "Ari";

// const city = "Berlin";

// const guestList = "Guests:\n - John\n - Peter\n - Den";

// // console.log(guestList);

// // console.log("My guest list is" + " " + guestList);

// const quote = "It's sunny today!";

// // ES6 - 2015

// const country = `Germany`;

// const multiLineString = `Guests:
// - John
// - Peter
// - Den`;
// console.log(multiLineString);

// // Expressions
// const user = "Hosam";

// console.log(`Hello ${user}`);
// console.log("Hello ${user}");

// const price = 20;
// const tax = 1.05;

// const total = `The total price is ${price * tax}`;

// console.log(total);


// //LOGICAL OPERATORS
// // && - and
// // || - or
// // ! - not

// const firstVar = 10;
// const secondVar = 20;

// console.log(firstVar < secondVar && firstVar == secondVar);
// console.log(firstVar < secondVar || firstVar == secondVar);

// console.log(firstVar < secondVar); // true
// console.log(!(firstVar < secondVar)); //false
// console.log(!(firstVar > secondVar)); //true

// const thridVar = 20;

// console.log(
//     (firstVar > secondVar && firstVar == secondVar) || secondVar === thridVar
// ); // true


// console.log("1" > 2);

// //to string

// const myNum = 20;
// const coersedNum = String(myNum);
// console.log(myNum);
// console.log(coersedNum);
// console.log(coersedNum === myNum);

// // to Number
// // const myString = +"20";
// const myString = "20";
// console.log(typeof myString);
// const coersedString = Number(myString);
// console.log(typeof coersedString);

// // const myString = +"sadd";
// // console.log("NAN her", myString);
// // console.log(typeof myString);
// // const coersedString = Number(myString);
// // console.log("HERE", typeof coersedString);
// // console.log(coersedString);

// // to Boolean
// const myNum2 = 0;
// const coersedNum2 = Boolean(myNum2);
// console.log(typeof coersedNum2);
// console.log(coersedNum2);
// // TEMPLATE LITERALS

// const myName = "Ari";

// const city = "Berlin";

// const guestList = "Guests:\n - John\n - Peter\n - Den";

// // console.log(guestList);

// // console.log("My guest list is" + " " + guestList);

// const quote = "It's sunny today!";

// // ES6 - 2015

// const country = `Germany`;

// const multiLineString = `Guests:
// - John
// - Peter
// - Den`;
// console.log(multiLineString);

// // Expressions
// const user = "Hosam";

// console.log(`Hello ${user}`);
// console.log("Hello ${user}");

// const price = 20;
// const tax = 1.05;

// const total = `The total price is ${price * tax}`;

// console.log(total);
// //Object

// const pets = {
//     petName: "Luna",
//     age: 15,
//     race: "cat",
//     likes: ["Food", "Hunting", "maybe Ari"],
//     adress: {
//         street: "abcv",
//         houseNo: "babsab",
//         city: "Alsheim",
//     },
// };

// console.log(pets.adress.city);
// console.log(pets.likes[1]);

// //Array

// const laundry = ["Shirt", "Pants", "underwear", 23, pets.petName];

// console.log(laundry[0]);
// console.log(laundry[0][2], laundry[1][1], laundry[3]);

// [
//     [],
//     [],
//     []
// ];

// // const users = {
// //   Micha: {
// //     id: 1,
// //     firstName: "abcv",
// //     age: 12,
// //     eMail: "babsab",
// //     city: "Alsheim",
// //   },
// //   user2: {
// //     id: 2,
// //     firstName: "abcv",
// //     eMail: "babsab",
// //     city: "Alsheim",
// //   },
// //   user3: {
// //     id: 3,
// //     firstName: "abcv",
// //     eMail: "babsab",
// //     city: "Alsheim",
// //   },
// // };
// // Boolean Expressions: Comparison Operators
// // <, <=, >, >=, ==,===, !=, !==

// console.log(1 < 5); // true
// console.log(1 <= 1); //true

// console.log(1 > 5); //false
// console.log(7 >= 7); //true

// console.log("1" > 2); //false

// console.log(1 == "1"); //true
// console.log(1 === "1"); //false

// console.log(1 != "1"); //false
// console.log(1 !== "1"); //true

// console.log(NaN == NaN);
// console.log(10 % 3);

// // Operand: is what operators are applied to.
// let varOne = 8;
// console.log(varOne); // 8
// // reassignment of varOne
// varOne = -varOne; //unary
// console.log(varOne); // -8

// // 5 * 2 : 2 operands 5 and 2.

// const varTwo = 5;
// const varThree = 8;
// const sum = varThree + varTwo;
// console.log(sum); //13
// // operator: +
// // operands: 5 and 8
// // operation: binary because two operands are involved

// // exponentiation- **
// console.log(2 ** 2);
// console.log(20 ** 100);

// // String concatenation with binary

// // Mathematical expressions:
// // +, -, *, /, modulo- %, exponentiation- **

// console.log(1 + 1); //2
// console.log("1 + 100"); // 1 + 100
// console.log(1 + 100); //101

// // concatenation
// console.log("Hello", "World");
// console.log("2" + " " + "3");
// console.log("Good morning" + "Class" + 32);

// // console.log("350: func timeout", Function());

// // modulo: %
// // returns the remainder
// console.log(10 % 3);

// // Operand: is what operators are applied to.
// let varOne = 8;
// console.log(varOne); // 8
// // reassignment of varOne
// varOne = -varOne; //unary
// console.log(varOne); // -8

// // 5 * 2 : 2 operands 5 and 2.
// const varTwo = 5;
// const varThree = 8;
// const sum = varThree + varTwo;
// console.log(sum); //13
// // operator: +
// // operands: 5 and 8
// // operation: binary because two operands are involved

// // exponentiation- **
// console.log(2 ** 2);
// console.log(20 ** 100);

// // String concatenation with binary

// let strOne = "Hello";
// let strTwo = "World";

// console.log(strOne + " " + strTwo); // Hello World

// console.log("2" + 1); // "21"
// console.log(1 + "2"); //"12"
// console.log(2 + 2 + "1"); //"41"
// console.log("2" + 2 + 1); //"221"
// console.log(2 + 1 + "2"); //"32"
// console.log("2" + (2 + 1)); //"23"

// let bababooey = "2" + (2 + 1);

// console.log(typeof bababooey);

// // BODMAS: 2 + (1 * 5) / 4
// // Bracket
// // Open
// // Divide
// // Multiply
// // Add
// // Subtract
// // ----------X---------

// // Declaration

// // Reassignment

// // increment ++
// // decrement --

// let counter = 2;
// // counter = 6;
// console.log(counter++);
// // 2 + 1
// console.log(counter);
// // 1 + 3
// console.log(++counter);

// let counter2 = 2;

// console.log(counter2--);
// console.log(counter2);
// console.log(--counter2);

// // const lifePoints = 100;

// // let damaged = lifePoints - 20;

// // console.log(damaged);