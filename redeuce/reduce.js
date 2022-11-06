//https://javascript.info/array-methods
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
//https://youtu.be/7NCmJJhIgoE
//https://youtu.be/pl_npYeDsgw
//https://youtu.be/pl_npYeDsgw
//https://youtu.be/__6cYNnqUr4
//https://www.aparat.com/v/1rO7D?playlist=278485
//https://ditty.ir/posts/javascript-reduce-method/XolQJ
//https://roocket.ir/articles/javascript-reduce-in-5-examples
//https://virgool.io/@s.r.nazem/%D8%B4%D8%B1%D8%AD-%DA%A9%D8%A7%D8%B1%D8%A8%D8%B1%D8%AF-%D9%85%D8%AA%D9%88%D8%AF-reduce-%D8%AF%D8%B1-%D8%AC%D8%A7%D9%88%D8%A7-%D8%A7%D8%B3%DA%A9%D8%B1%DB%8C%D9%BE%D8%AA-abih8s6thb01

// Arrow function
// reduce((previousValue, currentValue) => {
//     /* … */
// })
// reduce((previousValue, currentValue, currentIndex) => {
//     /* … */
// })
// reduce((previousValue, currentValue, currentIndex, array) => {
//     /* … */
// })

// reduce((previousValue, currentValue) => {
//     /* … */
// }, initialValue)
// reduce((previousValue, currentValue, currentIndex) => {
//     /* … */
// }, initialValue)
// reduce((previousValue, currentValue, currentIndex, array) => {
//     /* … */
// }, initialValue)

// // Callback function
// reduce(callbackFn)
// reduce(callbackFn, initialValue)

// // Inline callback function
// reduce(function (previousValue, currentValue) {
//     /* … */
// })
// reduce(function (previousValue, currentValue, currentIndex) {
//     /* … */
// })
// reduce(function (previousValue, currentValue, currentIndex, array) {
//     /* … */
// })

// reduce(function (previousValue, currentValue) {
//     /* … */
// }, initialValue)
// reduce(function (previousValue, currentValue, currentIndex) {
//     /* … */
// }, initialValue)
// reduce(function (previousValue, currentValue, currentIndex, array) {
//     /* … */
// }, initialValue)



console.log("============================================")
const array = [15, 16, 17, 18, 19];

function reducer(previousValue, currentValue, index) {
    const returns = previousValue + currentValue;
    console.log(
        `previousValue: ${previousValue}, currentValue:
         ${currentValue}, index: ${index}, returns: ${returns}`,
    );
    return returns;
}

array.reduce(reducer);

console.log("==================================")

const myArr2 = [{
        name: "aaa",
        score: 20
    },
    {
        name: "aaa",
        score: 30
    },
    {
        name: "aaa",
        score: 20
    },
    {
        name: "ali",
        score: 50
    }
];
const mrReduce5 = myArr2.reduce((acc, curr) => {
    if (curr.name === "aaa") {
        acc += curr.score;
    }
    return acc
}, 0);
console.log(mrReduce5)


const ages = [12, 43, 52, 34, 25]
const maxAge = ages.reduce((max, age1) => {
    if (age1 > max) {
        return age1
    } else {
        return max
    }
})
console.log("maxAge: ", maxAge)


const colors = ["red", "green", "yellow", "red", "green", "yellow", "red", "green", "yellow"]
const uniqCololrs = colors.reduce((unique, curr) => unique.indexOf(curr) !== -1 ? unique : [...unique, curr], [])
console.log(uniqCololrs)



console.log("===========/*/*/*/*/*/*/**/*/**/=======")
var numbers = [1, 2, 3, 4]

var sum1 = numbers.reduce((acc, cur, index, array) => {
    console.log('Accumulator is:' + acc)
    console.log("/*/*/*/*/*")
    console.log('currentValue is:' + cur)
    console.log("/*/*/*/*/*")
    console.log('index is:' + index)
    console.log("/*/*/*/*/*")
    console.log('array is:' + array)
    console.log("/*/*/*/*/*")

    return acc += cur
})

console.log(sum1)

// console.log("===========**/**/*/*/*/**/======")
var numbers = [1, 2, 3, 4]
var initialValue = 50

var sum2 = numbers.reduce((acc, cur, index) => {
    console.log('Accumulator is:' + acc)
    console.log('currentValue is:' + cur)
    console.log('index is:' + index)

    return acc + cur
}, initialValue)
console.log(sum2)



// console.log("===========**/**/*/*/*/**/======")
var users = [{
    age: 10
}, {
    age: 20
}, {
    age: 30
}]
var initialValue = 0

var ages2 = users.reduce((total, item) => {
    return total + item.age
}, initialValue)

console.log(ages2) // 60

// console.log("===========**/**/*/*/*/**/======")
var arrays = [
    [1, 2],
    [3, 4],
    [5, 6]
]

var flatten = arrays.reduce((acc, arr) => {
    return acc.concat(arr)
    // or
    // return [...acc, ...arr] not recommended
}, [])

console.log(flatten) // [ 1, 2, 3, 4, 5, 6 ]



// console.log("===========**/**/*/*/*/**/======")

var users = ['Ali', 'John', 'Sarah', 'Napleon']

var len = users.reduce((total, current) => {
    return total + current.length
}, 0)

console.log(len) // 19

// console.log("===========**/**/*/*/*/**/======")


var chars = ['a', 'a', 'a', 'b', 'b', 'c', 'a']

var repeats = chars.reduce((acc, item) => {
    if (!(item in acc)) {
        acc[item] = 0
    }
    acc[item]++

    return acc
}, {})

console.log(repeats) // { a: 4, b: 2, c: 1 }

// console.log("===========**/**/*/*/*/**/======")
var numbers = [1, 2, 3, 4, 4, 1.5]

var doubled = numbers.reduce((output, item, index) => {
    output[index] = item * 2

    return output
}, [])

console.log(doubled) // [ 2, 4, 6, 8, 8, 3 ]


// console.log("===========**/**/*/*/*/**/======")


var numbers = [1, 2, 3, 4]

var sum = numbers.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue
})

console.log(sum) // 10
// console.log("===========**/**/*/*/*/**/======")


const lineItems = [{
        description: 'Eggs (Dozen)',
        quantity: 1,
        price: 3,
        total: 3
    },
    {
        description: 'Cheese',
        quantity: 0.5,
        price: 5,
        total: 2.5
    },
    {
        description: 'Butter',
        quantity: 2,
        price: 6,
        total: 12
    }
];
let testReduce = lineItems.reduce((sum, li) => sum + li.price, 0); // 17.5
let testReduce2 = lineItems.map(li => li.total).reduce((sum, val) => sum + val, 0);
console.log(testReduce)
console.log(testReduce2)

// console.log("===========**/**/*/*/*/**/======")



const dates = [
    '2019/06/01',
    '2018/06/01',
    '2019/09/01', // This is the most recent date, but how to find it?
    '2018/09/01'
].map(v => new Date(v));
const maxDate = dates.reduce((max, d) => d > max ? d : max, dates[0]);
console.log(maxDate)




// console.log("===========**/**/*/*/*/**/======")

const weeklyExpenses = [200, 350, 1500, 5000, 450, 680, 350]
const test55 = weeklyExpenses.reduce(function (first, last) {
    return first + last
})
console.log(test55)
console.log("===========**/**/*/*/*/**/======")

// array.reduce(function (total, currentValue, currentIndex, arr), initialValue)
//  better way to use :

// array.reduce(callback[, initialValue]);

// console.log("===========**/**/*/*/*/**/======")



const list = [{
        name: "Nigeria",
        position: "1st",
        points: 43
    },
    {
        name: "England",
        position: "2nd",
        points: 37
    },
    {
        name: "USA",
        position: "3rd",
        points: 35
    },
    {
        name: "South Africa",
        position: "4th",
        points: 30
    },
    {
        name: "Brazil",
        position: "5th",
        points: 27
    },
    {
        name: "Korea",
        position: "6th",
        points: 23
    }
]
const totalPoints = list.reduce((acc, currTeam) => acc + currTeam.points, 0);
console.log(totalPoints) // Prints 195


console.log("===========**/**/*/*/*/**/======")

// const getMax = (a, b) => Math.max(a, b);

// // callback is invoked for each element in the array starting at index 0
// [1, 100].reduce(getMax, 50); // 100
// [50].reduce(getMax, 10); // 50

// // callback is invoked once for element at index 1
// [1, 100].reduce(getMax); // 100

// // callback is not invoked
// [50].reduce(getMax); // 50
// [].reduce(getMax, 1); // 1

// [].reduce(getMax); // TypeError


console.log("===========**/**/*/*/*/**/======")
const array15 = [15, 16, 17, 18, 19];

function reducer(previousValue, currentValue, index) {
    const returns = previousValue + currentValue;
    console.log(
        `previousValue: ${previousValue}, currentValue: ${currentValue}, index: ${index}, returns: ${returns}`,
    );
    return returns;
}
array15.reduce(reducer,0);
console.log("===========**/**/*/*/*/**/======")
array15.reduce(reducer);

// The callback would be invoked four times, with the arguments and
// return values in each call being as follows:

//               previousValue    currentValue        index Return        value
// First call           15           16                     1               31
// Second call          31           17                     2               48
// Third call           48           18                     3               66
// Fourth call          66           19                     4               85   
// The array parameter never changes through the process— it 's always [15, 16, 17, 18, 19]. The value returned by reduce() would be that of the last callback invocation (85).
//               previousValue(with=0)    currentValue        index Return        value
// First call          0                          15                   0             15
// Second call         15                         16                   1             31
// Third call          31                         17                   2             48
// Fourth call         48                         18                   3             66   
//fifth call           66                         19                   4             85   




console.log("===========**/**/*/*/*/**/======")

// https://javascript.info/array-methods

// The reduce() method executes a reducer function (that you provide) on each member of the array resulting in a single output value.

// When we need to iterate over an array – we can use forEach, for or for..of.

// When we need to iterate and return the data for each element – we can use map.

// The methods 'arr.reduce' and 'arr.reduceRight' are used to calculate a single value based on the array.

// The syntax is:

// const value = arr.reduce(function(previousValue, item, index, array) {
//   // ...
// }, initial);

// Your reducer function's returned value is assigned to the accumulator,
// whose value is remembered across each iteration throughout the array and ultimately becomes the final, single resulting value.

const numbers = [1, 2, 3, 4];

const sumReducer = (acc, cur) => acc + cur;
const sum = numbers.reduce(sumReducer, 5);
console.log(sum);

const rightWay = numbers.reduce((acc, cur) => acc + cur, 5);
console.log(rightWay);

const arr = [1, 2, 3, 4, 5];

const result = arr.reduce((sum, current) => sum + current, 10);
console.log(result);

const findArr = [20, 10, 50, 100, 20, 3];

let findBigBoy = findArr.reduce((acc, cur) => (acc > cur ? acc : cur));
let findBigWithMax = findArr.reduce((acc, cur) => Math.max(acc, cur));
console.log(findBigBoy);
console.log(findBigWithMax)

// const findMax = (acc, cur) => {
//   if (cur > acc) {
//     acc = cur;
//   }
//   return acc;
// };

const products = [{
        name: "Rice",
        price: 5
    },
    {
        name: "Tv",
        price: 500
    },
    {
        name: "Chicken",
        price: 20
    },
    {
        name: "Döner",
        price: 60
    },
    {
        name: "Hosam",
        price: 2
    },
];

const reducedPrice = products.reduce((total, product) => {
    console.log(`Total: ${total}`);
    console.log(`productPrice: ${product.price}`);
    return total + product.price;
}, 0);

console.log(reducedPrice);

const people = [{
        name: "Micha",
        age: 35
    },
    {
        name: "Ali",
        age: 26
    },
    {
        name: "Hosam",
        age: 52
    },
    {
        name: "Sidar",
        age: 52
    },
    {
        name: "Ari",
        age: 26
    },
    {
        name: "Arasdi"
    },
];
console.log(people)

const groupedByAge = people.reduce((groupedPeople, person) => {
    const age = person.age;
    //groupedPeople.person.age
    if (groupedPeople[age] == null) groupedPeople[age] = [];

    groupedPeople[age].push(person);
    return groupedPeople;
}, {});

console.log(groupedByAge);

const input = [1, -4, 12, 0, -3, 29, -150];

input.filter((num) => num > 0).reduce((acc, cur) => acc + cur, 0);

const resul1t = input
    .filter(function (num) {
        return num > 0;
    })
    .reduce(function (acc, cur) {
        return acc + cur;
    }, 0);

console.log(resul1t);

console.log("=============================/*/*/*/*/*/*/*/*=======================")


