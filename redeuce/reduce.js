//https://youtu.be/7NCmJJhIgoE
//https://youtu.be/pl_npYeDsgw
//https://youtu.be/pl_npYeDsgw
//https://youtu.be/__6cYNnqUr4
//https://www.aparat.com/v/1rO7D?playlist=278485
//https://ditty.ir/posts/javascript-reduce-method/XolQJ
//https://roocket.ir/articles/javascript-reduce-in-5-examples
//https://virgool.io/@s.r.nazem/%D8%B4%D8%B1%D8%AD-%DA%A9%D8%A7%D8%B1%D8%A8%D8%B1%D8%AF-%D9%85%D8%AA%D9%88%D8%AF-reduce-%D8%AF%D8%B1-%D8%AC%D8%A7%D9%88%D8%A7-%D8%A7%D8%B3%DA%A9%D8%B1%DB%8C%D9%BE%D8%AA-abih8s6thb01

// Arrow function
reduce((previousValue, currentValue) => {
    /* … */ })
reduce((previousValue, currentValue, currentIndex) => {
    /* … */ })
reduce((previousValue, currentValue, currentIndex, array) => {
    /* … */ })

reduce((previousValue, currentValue) => {
    /* … */ }, initialValue)
reduce((previousValue, currentValue, currentIndex) => {
    /* … */ }, initialValue)
reduce((previousValue, currentValue, currentIndex, array) => {
    /* … */ }, initialValue)

// Callback function
reduce(callbackFn)
reduce(callbackFn, initialValue)

// Inline callback function
reduce(function (previousValue, currentValue) {
    /* … */ })
reduce(function (previousValue, currentValue, currentIndex) {
    /* … */ })
reduce(function (previousValue, currentValue, currentIndex, array) {
    /* … */ })

reduce(function (previousValue, currentValue) {
    /* … */ }, initialValue)
reduce(function (previousValue, currentValue, currentIndex) {
    /* … */ }, initialValue)
reduce(function (previousValue, currentValue, currentIndex, array) {
    /* … */ }, initialValue)



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

console.log("===========**/**/*/*/*/**/======")
var numbers = [1, 2, 3, 4]
var initialValue = 50

var sum2 = numbers.reduce((acc, cur, index) => {
    console.log('Accumulator is:' + acc)
    console.log('currentValue is:' + cur)
    console.log('index is:' + index)

    return acc + cur
}, initialValue)
console.log(sum2)



console.log("===========**/**/*/*/*/**/======")
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

console.log("===========**/**/*/*/*/**/======")
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



console.log("===========**/**/*/*/*/**/======")

var users = ['Ali', 'John', 'Sarah', 'Napleon']

var len = users.reduce((total, current) => {
    return total + current.length
}, 0)

console.log(len) // 19

console.log("===========**/**/*/*/*/**/======")


var chars = ['a', 'a', 'a', 'b', 'b', 'c', 'a']

var repeats = chars.reduce((acc, item) => {
    if (!(item in acc)) {
        acc[item] = 0
    }
    acc[item]++

    return acc
}, {})

console.log(repeats) // { a: 4, b: 2, c: 1 }

console.log("===========**/**/*/*/*/**/======")
var numbers = [1, 2, 3, 4, 4, 1.5]

var doubled = numbers.reduce((output, item, index) => {
    output[index] = item * 2

    return output
}, [])

console.log(doubled) // [ 2, 4, 6, 8, 8, 3 ]


console.log("===========**/**/*/*/*/**/======")


var numbers = [1, 2, 3, 4]

var sum = numbers.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue
})

console.log(sum) // 10
console.log("===========**/**/*/*/*/**/======")


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

console.log("===========**/**/*/*/*/**/======")



const dates = [
    '2019/06/01',
    '2018/06/01',
    '2019/09/01', // This is the most recent date, but how to find it?
    '2018/09/01'
].map(v => new Date(v));
const maxDate = dates.reduce((max, d) => d > max ? d : max, dates[0]);
console.log(maxDate)




console.log("===========**/**/*/*/*/**/======")

const weeklyExpenses = [200, 350, 1500, 5000, 450, 680, 350]
const test55 = weeklyExpenses.reduce(function (first, last) {
    return first + last
})
console.log(test55)
console.log("===========**/**/*/*/*/**/======")

// array.reduce(function (total, currentValue, currentIndex, arr), initialValue)
//  better way to use :

// array.reduce(callback[, initialValue]);

console.log("===========**/**/*/*/*/**/======")



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



console.log("===========**/**/*/*/*/**/======")


console.log("===========**/**/*/*/*/**/======")


console.log("===========**/**/*/*/*/**/======")