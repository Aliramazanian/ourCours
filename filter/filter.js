//https://javascript.info/array-methods
//https://virgool.io/@farzaneh.parvar/%D9%85%D8%AA%D8%AF%D9%87%D8%A7%DB%8C-map-%D9%88-filter-%D8%AF%D8%B1-%D8%AC%D8%A7%D9%88%D8%A7%D8%A7%D8%B3%DA%A9%D8%B1%DB%8C%D9%BE%D8%AA-py2876cqjkbb
//https://ditty.ir/posts/javascript-useful-array-methods-part-1-map-filter-find/nPgb5
//https://errorweb.ir/%D9%85%D8%AA%D8%AF-filter-%D8%AF%D8%B1-%D8%AC%D8%A7%D9%88%D8%A7%D8%A7%D8%B3%DA%A9%D8%B1%DB%8C%D9%BE%D8%AA/





//متد filter چگونه کار می کند؟
//این متد هم مانند map یک تابع callback دریافت می کند که شامل 3 پارامتر است، پارامتر اول مقدار فعلی حلقه، پارامتر دوم ایندکس فعلی و پارامتر سوم آرایه ای است که متد filter روی آن اعمال شده است.

const filteredItems = items.filter((item, index, array) => {
    return true / false;
});

let newArray = arr.filter(function (element, index, arr) {

})

const numbers5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const oddNumbers = numbers5.filter(function (number) {
    return number % 2 !== 0;
});

let numbers2 = [29, 5, 10, 11, 35];

let filtered2 = numbers2.filter(item => item > 10);
// [29, 11, 35]

// let numbers = [29, 5, 10, 11, 35];

// let filtered = numbers.filter((number, index, array) {
//     console.log(index)
//     console.log(array)

//     return number > 10
// });
// 0  [29, 5, 10, 11, 35]
// 1  [29, 5, 10, 11, 35]
// 2  [29, 5, 10, 11, 35]
// 3  [29, 5, 10, 11, 35]
// 4  [29, 5, 10, 11, 35]


const users = [{
        name: 'Chris',
        color: 'Brown'
    },
    {
        name: 'Napoleon',
        color: 'Green'
    },
    {
        name: 'David',
        color: 'Blue'
    },
    {
        name: 'Michael',
        color: 'Green'
    },
];

const greenLovers = users.filter(
    user => user.color === 'Green'
)

console.log(greenLovers)

/*
[
  { name: 'Napoleon', color: 'Green' },
  { name: 'Michael', color: 'Green' }
]
*/