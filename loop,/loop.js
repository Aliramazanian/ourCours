//https://www.programiz.com/javascript/for-loop
//https: //www.programiz.com/javascript/for-loop
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in




// انواع حلقه های تکرار در جاوااسکریپت
// در جاوااسکریپت چندین نوع حلقه تکرار وجود دارد که این حلقه ها به شرح زیر می باشند:

//     For– برای ایجاد حلقه در یک تکه کد بهمراه ارزیابی یک شرط
// For / In– برای ایجاد حلقه در ویژگی های یک شئ
// For / Of– برای ایجاد حلقه در مقادیر یک شئ قابل تکرار مثه آرایه ها
// While– برای ایجاد حلقه تا زمانی که یک شرط درست باشد
// Do / While– اجرای یکبار کد و سپس ایجاد حلقه تا زمانی که شرط درست باشد
// که ان شاالله در جلسات بعدی با همه ی این حلقه های تکرار آشنا خواهیم شد و باهاشون کار خواهیم کرد، یعنی در جلسه بعدی حلقه های
// for و
// for in و
// for of و در جلسه ی بعدترش حلقه های
// while و do
//     while رو با همدیگه بطور کامل کار خواهیم کرد.

// یک حلقه به طور معمول دارای ویژگی‌های زیر است:

//     شمارنده: متغیری که با یک مقدار خاص مقداردهی اولیه می‌شود.این همان نقطه آغاز حلقه است.این ویژگی در تصویر فوق با عبارت« من غذا ندارم» مشخص شده است.
// شرط خروج: که معیاری است که با توجه به آن حلقه متوقف می‌شود و این شرط معمولاً رسیدن شمارنده به یک عدد خاص است.این وضعیت در تصویر فوق با عبارت« آیا غذای کافی دارم؟» مشخص شده است.فرض کنید وی به 10 بسته غذا برای تأمین خوراک خانواده خود نیاز دارد.
// تکرارکننده: که به طور کلی شمارنده را در هر تکرار حلقه به مقدار کوچکی افزایش می‌دهد تا این که به شرط خروج برسد.ما این مورد را به صورت صریح در تصویر فوق نمایش نداده‌ایم؛ اما می‌توانیم تصور کنیم که کشاورز می‌تواند 2 بسته غذا در ساعت انتخاب کند.پس از هر ساعت، مقدار غذای بسته‌بندی شده دو واحد افزایش می‌یابد و کشاورز بررسی می‌کند که آیا غذای کافی دارد یا نه.اگر به عدد 10 برسد(شرط خروج) می‌تواند کار گردآوری را متوقف کند و به خانه برود.
// loop(food = 0; foodNeeded = 10) {
//     if (food >= foodNeeded) {
//         exit loop;
//         // We have enough food; let's go home
//     } else {
//         food += 2; // Spend an hour collecting 2 more food
//         // loop will then run again
//     }
// }



// for (initializer; exit - condition; final - expression) {
//     // code to run
// }

// در این کد موارد زیر را داریم:

//     کلیدواژه
// for که متعاقب آن یک جفت پرانتز آمده است.
// درون این پرانتزها ما سه آیتم داریم که با نقطه‌ویرگول از هم جدا شده‌اند:
//     مقدار اولیه(initializer): این مورد به طور معمول متغیری است که برابر با یک عدد تعیین می‌شود و برای شمارش دفعاتی که حلقه اجرا خواهد شد استفاده می‌شود.همچنین در برخی موارد به عنوان یک« متغیر شمارنده»(counter variable) استفاده می‌شود.
// شرط خروج(exit condition): همان طور که قبل‌تر اشاره کردیم، این مورد به تعریف زمانی می‌پردازد که حلقه باید متوقف شود.این مورد عموماً به صورت یک عملگر مقایسه‌ای است و یک آزمون است که بررسی می‌کند یا شرط خروج برقرار شده است یا نه.«عبارت نهایی»(final - expression): این مورد به طور معمول هر بار که حلقه یک تکرار کامل را اجرا می‌کند ارزیابی یا اجرا می‌شود.این مورد عموماً برای افزایش(با در برخی موارد کاهش) متغیر شمارنده استفاده می‌شود و آن را به مقدار شرط خروجی نزدیک‌تر می‌کند.
// یک جفت آکولاد که شامل بلوک کد هستند و این کد در هر بار تکرار حلقه اجرا خواهد شد.
// در ادامه مثالی واقعی از یک حلقه ارائه کرده‌ایم که موارد مورد اشاره فوق را در عمل نشان می‌دهند:

//     const cats = ['Bill', 'Jeff', 'Pete', 'Biggles', 'Jasmin'];
// let info = 'My cats are called ';
// const para = document.querySelector('p');

for (let i = 0; i < cats.length; i++) {
    info += cats[i] + ', ';
}
console.log(info);
para.textContent = info;
let i = 2;
let len = cars.length;
let text = "";
for (; i < len; i++) {
    text += cars[i] + "<br>";
}

// const cars = ["BMW", "Volvo", "Saab", "Ford"];

// let i = 0;
// let len = cars.length;
// let text = "";

// for (; i < len;) {
//     text += cars[i] + "<br>";
//     i++;
// }
for (let step = 0; step < 5; step++) {
    // Runs 5 times, with values of step 0 through 4.
    console.log('Walking east one step');
}
for ([initialExpression];
    [conditionExpression];
    [incrementExpression])
    statement


function howMany(selectObject) {
    let numberSelected = 0;
    for (let i = 0; i < selectObject.options.length; i++) {
        if (selectObject.options[i].selected) {
            numberSelected++;
        }
    }
    return numberSelected;
}

const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    const musicTypes = document.selectForm.musicTypes;
    console.log(`You have selected ${howMany(musicTypes)} option(s).`);
});

// let i = 0;
// do {
//     i += 1;
//     console.log(i);
// } while (i < 5);

while (condition)
    statement

let n = 0;
let x = 0;
while (n < 3) {
    n++;
    x += n;
}




for (let i = 0; i < 10; i++) {
    // const element = array[i];
    console.log("hi");
    
}
let ali16 = "ali16"
for (let i = 0; i < ali16.length; i++) {
    // const element = array[i];
    console.log("ali2");
}


for ( let i = 0; i <= 4 ; i++) {
    console.log(i);
}


let anyting;
for (anyting =0 ; anyting <= 2 ;anyting++ ){
    console.log("khar");
}

let sum15 = "hello"
for ( let i= 0 ; i <=5 ; i++){
sum15 = sum15 + 2
console.log( ` sum = ${sum15}`);
console.log( ` i = ${i}`);
}
console.log(`final sum = ${sum15} `);


const string = "ali akbar";
for (let i = 0; i < string.length ; i++  ) {
    console.log(`the index of ${string[i]} is ${i} `);
}

let string2 = "heute is gut";
let newter = "";
for (let index = 0 ; index < string2.length; index++  ) {
    let s = string2[index]
    newter = newter + s;
    console.log(newter);
    // console.log(`that is ${string2[index]} is ${index} ` );
}
