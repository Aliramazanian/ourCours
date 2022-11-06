//https://javascript.info/array-methods
//https://blog.faradars.org/array-map-function-in-javascript/
//https://youtu.be/ojIaxvBuK80



//یک ابزار کاربردی است که می‌توان برای تعریف حلقه‌های تکرار روی آرایه، اعمال نوعی تغییر روی هر مقدار و بازگشت دادن یک آرایه جدید با مقادیر تغییر یافته مورد استفاده قرار داد. به بیان کلی‌تر، یک 
//mapping به سادگی نوعی تبدیل یک مقدار به مقدار دیگر است.
// اگر قرار باشد مقدار 10 را گرفته و مقدار 5 را به آن اضافه کنیم، می‌توانیم از تبدیل مقدار 10 به 15 استفاده کنیم. 
//انجام این کار برای همه مقادیر موجود در آرایه و بازگشت دادن یک لیست جدید را می‌توان نوعی نگاشت (mapping) روی لیست تصور کرد.


// myArray.map((value, index, array) => // ... )

function ourMap(transformation, inputArray) {
    // bind an empty array to a variable to hold our transformed   
    // values 

    let outputArray = [];

    // loop over the input array 

    for (let value of inputArray) {
        // apply our transformation here 
    }

    return outputArray
};


const myArray = [2, 4, 7, 10];
const resultArray = myArray.map(x => x * 2);
console.log(resultArray);
//  [4, 8, 14, 20]



const arrayToMapOver = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function timesFive(value) {
    return value * 5
}

const newArray = arrayToMapOver.map(timesFive);

// newArray is now [5, 10, 15, 20, 25, 30, 35, 40, 45, 50] 
// arrayToMapOver is still [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const numbers = [4, 9, 16, 25];

function mapMethod(arr) {
    return arr.map(Math.sqrt);
}
console.log(numbers);
console.log(mapMethod(numbers));

const lengths = ["Hosam", "Enjoy", "Banana"].map((string) => string.length);

console.log(lengths);


console.log("===========*/*/*/*/*/*/*/*=================")
const newArray2 = [{
        key: 1,
        value: 10
    },
    {
        key: 2,
        value: 20
    },
    {
        key: 3,
        value: 30
    },
];

const reformatted = newArray2.map((objParam) => {
    const newObj = {};
    newObj[objParam.key] = objParam.value;
    console.log("newObj", objParam.key);
    console.log("value", objParam.value);
    console.log(newObj);
    return newObj;
});

console.log(reformatted); // [ { '1': 10 }, { '2': 20 }, { '3': 30 } ]

console.log(newArray2);
console.log("===========*/*/*/*/*/*/*/*=================")


const strToArr = "L 2 S 6 L 3 S 4".split(" ");
console.log(strToArr); // [ 'L', '2', 'S', '6', 'L', '3', 'S', '4' ]

const newArr2 = strToArr
    .map((item) => {
        if (item === "L" || item === "S") {
            return item;
        } else {
            return item * 2;
        }
    })
    .join(", ");

console.log(newArr2); // L 4 S 12 L 6 S 8
console.log("===========*/*/*/*/*/*/*/*=================")

const products = [{
        name: "laptop",
        price: 1000,
        count: 5,
    },
    {
        name: "Pc",
        price: 3000,
        count: 2,
    },
    {
        name: "phone",
        price: 700,
        count: 19,
    },
];

const totalProductsValue = products.map((product) => ({
    name: product.name,
    totalValue: product.price * product.count,
}));

console.log(totalProductsValue);


console.log("===========*/*/*/*/*/*/*/*=================")

const studs = [{
        name: "Klaus Stender",
        age: 61,
    },
    {
        name: "Tom Torben",
        age: 50,
    },
    {
        name: "Ali Baba",
        age: 12,
    },
    {
        name: "Hosam Enjoyer",
        age: 30,
    },

    {
        name: "Lea Prem",
        age: "dead inside",
    },
];

function readyToPutInTheDOM(arr) {
    arr = arr.map((str) => `\n<h1>${str.name}</h1>\n<h2>${str.age}</h2>\n`);

    return arr.join(",====, ");
}

console.log(readyToPutInTheDOM(studs));





console.log("===========*/*/*/*/*/*/*/*=================")

console.log("===========*/*/*/*/*/*/*/*=================")



console.log("===========*/*/*/*/*/*/*/*=================")



console.log("===========*/*/*/*/*/*/*/*=================")



console.log("===========*/*/*/*/*/*/*/*=================")



console.log("===========*/*/*/*/*/*/*/*=================")



console.log("===========*/*/*/*/*/*/*/*=================")
const xxx = [1,2,3,4,5,6,7,8,].map(x=> x**2)
console.log(xxx)

for (let i = 0; i < 2; i++) {
    const x = []
    return y= "ich bin ali"
    console.log(y)
    
}
