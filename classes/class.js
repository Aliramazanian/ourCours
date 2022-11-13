// Classes
// Classes are a template
// for creating objects.They encapsulate data with code to work on that data.Classes in JS are built on prototypes but also have some syntax and semantics that are not shared with ES5 class - like semantics.

// Defining classes
// Classes are in fact "special functions", and just as you can define
// function expressions and
// function declarations, the class syntax has two components: class expressions and class declarations.

// Class declarations
// One way to define a class is using a class declaration.To declare a class, you use the class keyword with the name of the class("Rectangle"
//     here).
// Hoisting
// An important difference between
// function declarations and class declarations is that
// while functions can be called in code that appears before they are defined, classes must be defined before they can be constructed.

// Class expressions
// A class expression is another way to define a class.Class expressions can be named or unnamed.The name given to a named class expression is local to the class 's body. However, it can be accessed via the name property.

// unnamed
let Rectangle1 = class {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
};
console.log(Rectangle1.name); // "Rectangle1"

// named
Rectangle1 = class Rectangle2 {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
};
console.log(Rectangle1.name); // "Rectangle2"

// Constructor
// The constructor method is a special method
// for creating and initializing an object created with a class.There can only be one special method with the name "constructor" in a class.A SyntaxError will be thrown
// if the class contains more than one occurrence of a constructor method.

// A constructor can use the super keyword to call the constructor of the super class.

// Static initialization blocks
// Class static initialization blocks allow flexible initialization of class static properties including the evaluation of statements during initialization, and granting access to private scope.

// Multiple static blocks can be declared, and these can be interleaved with the declaration of static properties and methods(all static items are evaluated in declaration order).

// Prototype methods

class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    // Getter
    get area() {
        return this.calcArea();
    }
    // Method
    calcArea() {
        return this.height * this.width;
    }
}

const square = new Rectangle(10, 10);

console.log(square.area); // 100

class Polygon {
    constructor(...sides) {
        this.sides = sides;
    }
    // Method
    * getSides() {
        for (const side of this.sides) {
            yield side;
        }
    }
}

const pentagon = new Polygon(1, 2, 3, 4, 5);

console.log([...pentagon.getSides()]); // [1,2,3,4,5]


// Static methods and properties
// The static keyword defines a static method or property
// for a class.Static members(properties and methods) are called without instantiating their class and cannot be called through a class instance.Static methods are often used to create utility functions
// for an application, whereas static properties are useful
// for caches, fixed - configuration, or any other data you don 't need to be replicated across instances.
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static displayName = "Point";
    static distance(a, b) {
        const dx = a.x - b.x;
        const dy = a.y - b.y;

        return Math.hypot(dx, dy);
    }
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);
p1.displayName; // undefined
p1.distance; // undefined
p2.displayName; // undefined
p2.distance; // undefined

console.log(Point.displayName); // "Point"
console.log(Point.distance(p1, p2)); // 7.0710678118654755

// Binding this with prototype and static methods
// When a static or prototype method is called without a value
// for this, such as by assigning the method to a variable and then calling it, the this value will be undefined inside the method.This behavior will be the same even
// if the "use strict"
// directive isn 't present, because code within the class body'
// s syntactic boundary is always executed in strict mode.

// class Animal {
//     speak() {
//         return this;
//     }
//     static eat() {
//         return this;
//     }
// }

// const obj = new Animal();
// obj.speak(); // the Animal object
// const speak = obj.speak;
// speak(); // undefined

// Animal.eat() // class Animal
// const eat = Animal.eat;
// eat(); // undefined

// If we rewrite the above using traditional
// function -based syntax in non– strict mode, then this method calls are automatically bound to the initial this value, which by
// default is the global object.In strict mode, autobinding will not happen;
// the value of this remains as passed.
function Animal() {}

Animal.prototype.speak = function () {
    return this;
}

Animal.eat = function () {
    return this;
}

const obj = new Animal();
const speak = obj.speak;
speak(); // global object (in non–strict mode)

const eat = Animal.eat;
eat(); // global object (in non-strict mode)

// Public field declarations
// With the JavaScript field declaration syntax, the above example can be written as:
class Rectangle3 {
    height = 0; //We don't need keywords like let, const, or var to declare fields.
    width;
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}
const myresult = new Rectangle3()
console.log(myresult);


// Sub classing with extends
// The extends keyword is used in class declarations or class expressions to create a class as a child of another class.


// class Animal {
//     constructor(name) {
//         this.name = name;
//     }

//     speak() {
//         console.log(`${this.name} makes a noise.`);
//     }
// }
// class Dog extends Animal {
//     constructor(name) {
//         super(name); // call the super class constructor and pass in the name parameter
//     }

//     speak() {
//         console.log(`${this.name} barks.`);
//     }
// }

// const d = new Dog('Mitzie');
// d.speak(); // Mitzie barks.

// If there is a constructor present in the subclass, it needs to first call super() before using "this".

// One may also extend traditional
// function -based "classes":
function Animal(name) {
    this.name = name;
}

Animal.prototype.speak = function () {
    console.log(`${this.name} makes a noise.`);
}

class Dog extends Animal {
    speak() {
        console.log(`${this.name} barks.`);
    }
}

const d = new Dog('Mitzie');
d.speak(); // Mitzie barks.

// For similar methods, the child's method takes precedence over parent's method



// Note that classes cannot extend regular(non - constructible) objects.If you want to inherit from a regular object, you can instead use Object.setPrototypeOf():
class Person {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
let john = new Person("John Doe");
// objectName.methodName(args)
let name = john.getName();
console.log(name); // "John Doe"
// console.log(typeof Person); // function
