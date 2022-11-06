//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach



// Arrow function
forEach((element) => {
    /* … */ })
forEach((element, index) => {
    /* … */ })
forEach((element, index, array) => {
    /* … */ })

// Callback function
forEach(callbackFn)
forEach(callbackFn, thisArg)

// Inline callback function
forEach(function (element) {
    /* … */ })
forEach(function (element, index) {
    /* … */ })
forEach(function (element, index, array) {
    /* … */ })
forEach(function (element, index, array) {
    /* … */ }, thisArg)

const a = ["a", "b", "c"];
a.forEach((element) => {
    console.log(element);
});

const ages = [20, 28, 19, 56];
const newAges = [];

ages.forEach((age) => newAges.push(age + 5));

console.log(newAges);
// Output: [25, 33, 24, 61]

//https://blog.faradars.org/foreach-%D8%AF%D8%B1-%D8%AC%D8%A7%D9%88%D8%A7-%D8%A7%D8%B3%DA%A9%D8%B1%DB%8C%D9%BE%D8%AA/
const ages2 = [20, 28, 19, 56];
const newAges2 = [];

ages.forEach((age) => {
    newAges2.push(age + 5);
});

console.log(newAges2); //(4) [25, 33, 24, 61]
// 0: 25
// 1: 33
// 2: 24
// 3: 61

const languages = ['C++', 'C#', 'JS', 'Python'];

languages.forEach(function (languages, index) {
    console.log(index + ': ' + languages);
});


//0: C++
// 1: C#
// 2: JS
// 3: Python


const languages3 = ['C++', 'C#', 'JS', 'Python'];

languages3.forEach(function (languages, index, array) {
    console.log(array);
});

// (4)["C++", "C#", "JS", "Python"]
// (4)["C++", "C#", "JS", "Python"]
// (4)["C++", "C#", "JS", "Python"]
// (4)["C++", "C#", "JS", "Python"]



const students = [{
        firstName: 'Ali',
        lastName: 'Ahmadi'
    },
    {
        firstName: 'Zahra',
        lastName: 'Amini'
    },
    {
        firstName: 'Naser',
        lastName: 'Rasoli'
    },
];

students.forEach((student) => {
    console.log(`${student.firstName} ${student.lastName}`);
});
// Ali Ahmadi
// Zahra Amini
// Naser Rasoli

const students3 = [{
        firstName: 'Ali',
        lastName: 'Ahmadi',
        tuition: 5000
    },
    {
        firstName: 'Zahra',
        lastName: 'Amini',
        tuition: 7500
    },
    {
        firstName: 'Naser',
        lastName: 'Rasoli',
        tuition: 6000
    },
];
sum = 0;

students3.forEach((student) => {
    sum += student.tuition;
});
console.log(sum);  // 18500




// forEach(ES5 + only; spec | MDN)(or its relatives some and such) - not async -friendly(but see details)
theArray.forEach(element => {
    // ...use `element`...
});
// a simple old - fashioned
// for loop - async -friendly
for (let index = 0; index < theArray.length; ++index) {
    const element = theArray[index];
    // ...use `element`...
}
// (rarely) for - in with safeguards - async -friendly
for (const propertyName in theArray) {
    if ( /*...is an array element property (see below)...*/ ) {
        const element = theArray[propertyName];
        // ...use `element`...
    }
}

const logArrayElements = (element, index /*, array */ ) => {
    console.log(`a[${index}] = ${element}`);
};

// Notice that index 2 is skipped, since there is no item at
// that position in the array.
[2, 5, , 9].forEach(logArrayElements);
// Logs:
// a[0] = 2
// a[1] = 5
// a[3] = 9

class Counter {
    constructor() {
        this.sum = 0;
        this.count = 0;
    }
    add(array) {
        // Only function expressions will have its own this binding
        array.forEach(function countEntry(entry) {
            this.sum += entry;
            ++this.count;
        }, this);
    }
}

const obj = new Counter();
obj.add([2, 5, 9]);
console.log(obj.count); // 3
console.log(obj.sum); // 16

const copy = (obj) => {
    const copy = Object.create(Object.getPrototypeOf(obj));
    const propNames = Object.getOwnPropertyNames(obj);
    propNames.forEach((name) => {
        const desc = Object.getOwnPropertyDescriptor(obj, name);
        Object.defineProperty(copy, name, desc);
    });
    return copy;
};

const obj1 = {
    a: 1,
    b: 2
};
const obj2 = copy(obj1); // obj2 looks like obj1 now
