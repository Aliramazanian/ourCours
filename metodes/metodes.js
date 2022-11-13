// const obj = {
//     get property() {},
//     set property(value) {},
//     property(parameters) {},
//     * generator(parameters) {},
//     async property(parameters) {},
//     async *generator(parameters) {},

//     // with computed keys
//     get [expression]() {},
//     set [expression](value) {},
//     [expression](parameters) {},
//     *[expression](parameters) {},
//     async [expression](parameters) {},
//     async *[expression](parameters) {},
// };

// const obj2 = {
//     foo: function () {
//         // …
//     },
//     bar: function () {
//         // …
//     }
// }
// const obj3 = {
//     foo() {
//         // …
//     },
//     bar() {
//         // …
//     }
// }
// let user = {
//     name: "John",
//     age: 30,

//     sayHi () {
//         alert(this.name); // "user" instead of "this"
//     }

// };
// console.log(user);
// user.sayHi






// Other Methods we already used
// console.log;
// Math.max;
// String.prototype.toLowerCase;
let user = {
    name: "John",
    age: 30,
     sentence : 'The quick brown fox jumps over the lazy dog.',
    sayHi () {
        alert(this.sentence); // "user" instead of "this"
    },
         sentence () {
            moveBy('The quick brown fox jumps over the lazy dog.')
         } 

};
// console.log(user);
const sentence = 'The quick brown fox jumps over the lazy dog.';

console.log(sentence.toLowerCase());
console.log(sentence.toUpperCase());

// String.prototype.includes;
// Number.prototype.toFixed;

//The toFixed() method formats a number using fixed-point notation.
//toFixed()
//toFixed(digits)

function financial(x) {
    return Number.parseFloat(x).toFixed(2);
}

console.log(financial(123.456));
// expected output: "123.46"

console.log(financial(0.004));
// expected output: "0.00"

console.log(financial('1.23e+5'));
// expected output: "123000.00"
const numObj = 12345.6789;

numObj.toFixed(); // '12346'; rounding, no fractional part
numObj.toFixed(1); // '12345.7'; it rounds up
numObj.toFixed(6); // '12345.678900'; additional zeros

// Boolean.prototype.valueOf;

//The valueOf() method returns the primitive value of a String object.
//valueOf()

const stringObj = new String('foo');

console.log(stringObj);
// expected output: String { "foo" }

console.log(stringObj.valueOf());
// expected output: "foo"
const x = new String("Hello world");
console.log(x.valueOf()); // 'Hello world'


// Array.prototype.join;

// Object.prototype.hasOwnProperty;
//The hasOwnProperty() method returns a boolean indicating whether the object has the specified property as its own property (as opposed to inheriting it).
//hasOwnProperty(prop)
const object1 = {};
object1.property1 = 42;

console.log(object1.hasOwnProperty('property1'));
// expected output: true

console.log(object1.hasOwnProperty('toString'));
// expected output: false

console.log(object1.hasOwnProperty('hasOwnProperty'));
// expected output: false

// ---------##---------

// Object.keys()
// Object.values()
// Object.entries()
// Object.assign()
// Object.freeze()
// Object.seal()
// Object.getPrototypeOf()
// Object.create()



//  binarySearch(arr, l, r, x):
//     if r >= l:
//     mid = l + (r - l)
// if arr[mid] == x:
//     return mid
// elif arr[mid] > x:
//     return binarySearch(arr, l, mid - 1, x)
// else :
//     return binarySearch(arr, mid + 1, r, x)
function reverseArray(arr) {
    let newArr = []
    for (let i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i])
    }
    return newArr
}
// const reversedArray1 = reverseArray([1, 2, 3]) // [3, 2, 1]
// const reversedArray2 = reverseArray([1, 2, 3, 4, 5, 6]) // [6, 5, 4, 3, 2, 1]
console.log(reverseArray([1, 2, 3]));


function multiplyAll(arr1, arr2) {
    if (arr1.length !== arr2.length) return undefined
    let total = 0
    for (let i of arr1) {
        for (let j of arr2) {
            total += i * j
        }
    }
    return total
}
// let result1 = multiplyAll([1, 2], [5, 6]) // 33
// let result2 = multiplyAll([1, 2, 3, 4], [5, 3, 1, 8]) // 170
console.log(multiplyAll([1, 2], [5, 6]));



function linearithmic(n) {
    for (let i = 0; i < n; i++) {
        console.log("ali2");
        for (let j = 1; j < n; j = j * 2) {
            console.log("Hello")
        }
    }
}
console.log(linearithmic(2));