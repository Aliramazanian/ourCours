// Global Scope
// const name5 = "Diego";

// function func() {
//     alert(name5); // Diego
// }

// func();
// Global Scope

// function getUser() {
//     // Local Scope

//     const user = "Mario";
//     alert(user);
// }

// getUser(); // Mario
// Global Scope

// function func1() {
//     // Local Scope #1
//     const name = "Mario";

//     function func2() {
//         // Local Scope #2 
//         const lastname = "Doe";

//         alert(`${name} ${lastname}`);
//     }

//     func2();
// }

// func1(); // John Doe

// انواع Scope
// به طور کلی در زبان برنامه نویسی جاوااسکریپت دو نوع Scope داریم.Scopeهای سراسری و محلی.همین طور در این مطلب و ویدیوی آموزشی به طور دقیق Lexical Scope و Block Scope را نیز بررسی خواهیم کرد.

// Scopeهای سراسری
// زمانی که توسعه کدهای جاوااسکریپت را شروع می‌کنیم، در Scope یا Global Scope هستیم.

// تمام کدهایی که در Scope سراسری توسعه می‌دهیم، مانند توابع، متغیرها و… در قسمت‌های مختلف برنامه قابل دسترسی هستند.چرخه حیات متغیرهای سراسری، کاملا وابسته به برنامه اصلی است.به این معنی که اگر برنامه بسته شود، متغیرها هم دیگر قابل استفاده نیستند.

// با توجه به این موضوع، استفاده زیاد از متغیرهای سراسری کار منطقی‌ای نیست.تعریف بیش از اندازه متغیرهای سراسری باعث می‌شود کد برنامه کمتر قابلیت استفاده مجدد را داشته باشد.تا حد امکان این استفاده باید مدیریت شده باشد.

// Scopeهای محلی
// مقادیر محلی در برنامه فقط در جایی قابل دسترسی هستند که تعریف شده‌اند.ساده‌ترین راه تعریف یک Scope محلی، توسعه یک تابع است.در جاوااسکریپت هر تابعی که نوشته می‌شود، یک Scope محلی ایجاد می‌کند.داخل توابع هر متغیری که تعریف شود، به عنوان متغیر محلی در نظر گرفته خواهد شد.طبیعتا متغیرهای محلی فقط در همان Scope قابلیت دسترسی دارند.

// این مثال را بررسی کنید:


var cat = 'Jerry';
console.log(cat); // Jerry
function localScopeExample() {
    var dog = 'Marley';
    console.log(cat); // Jerry
}
console.log(cat); // Jerry

// در این مثال دو متغیر داریم.متغیر cat در Scope سراسری تعریف شده، پس در تمام قسمت‌های برنامه قابل دسترسی است.متغیر دیگر ما که dog است، در تابع localScopeExample تعریف شده.این متغیر را فقط در Scope محلی می‌توان استفاده کرد.اگر بیرون Scope آن را فراخوانی کنیم، برنامه با خطا مواجه خواهد شد.

// اگر از متغیر dog در Scope سراسری استفاده کنیم، خطای Uncaught ReferenceError را خواهیم دید.

// آخرین نکته در استفاده از Scopeهای محلی.این متغیرهای به صورت محلی در توابع تعریف شده‌اند.در نتیجه می‌توانیم از یک نام برای تعریف متغیرهای محلی در توابع مختلف استفاده کنیم.



function func1() {
    var dog = 'Marley';
    console.log(dog); // Marley
}

function func2() {
    var dog = 'Shasta';
    console.log(dog); // Shasta
}


// بررسی Lexical Scope
// Lexical Scope یا Static Scope به معنی توانایی دسترسی تابع داخلی به مقادیر یک تابع اصلی است.این مثال را بررسی کنید:



// *GLOBAL*
var dog = 'Lewis';

function outerFunc() {
    // *SCOPE 1*
    var cat = 'Jerry';

    function innerFunc() {
        // *SCOPE 2*
        console.log(cat); // Jerry
        console.log(dog); // Lewis
    }
}


// در این کد تابع outerFunc به عنوان مقدار Scope سراسری تعریف شده.همین طور تابع innerFunc در داخل Scope تابع outerFunc استفاده شده.به خاطر مفهوم Lexical Scope تمام قسمت‌های Scope2 دسترسی به متغیرها در Scope1 را دارند.

// تعریف مقادیر با استفاده از
// let و
// const
//     تا اینجا برای تعریف تمام متغیرها از دستور
// var استفاده کردیم.زمانی که از دستور
// var استفاده می‌کنیم، تنها توابع به عنوان یک Scope در نظر گرفته می‌شوند.اما Block Scopeهای دیگر مانند دستورات
// if، for و
// while تاثیری بر روی
// var ندارند.

// دستورات
// let و
// const در نسخه‌های جدید جاوااسکریپت ارایه شدند.تعریف مقادیر با این دستورات باعث می‌شود تا تمام Blockها به عنوان یک Scope در نظر گرفته شوند.



// let xxx = 1; {
//     let xxx = 2;
//     console.log(x); // 2
// }
// console.log(x); // 1


// همین طور که مشاهده می‌کنید، استفاده از bracket باعث شده تا بتوانیم متغیر محلی داشته باشیم.با این که به نظر می‌رسد ما فقط یک متغیر x داریم، اما اینطور نیست.یکی از متغیرها با مقدار۱ به عنوان متغیر سراسری تعریف شده.متغیر دیگر با مقدار۲ یک متغیر محلی است.

// جاوااسکریپت در زمان تفسیر، ابتدا متغیرهای داخلی را پردازش می‌کند.اگر متغیری را پیدا نکند، به ترتیب Blockهای بیرونی را پردازش خواهد کرد.

// دقیقا همین موضوع برای سایر Block Scopeها مانند
// if، for و
// while نیز وجود دارد.



// let xxxx = 1;
// if (xxxx !== 2) {
//     let xxxx = 2;
//     console.log(x); // 2
// }
// console.log(x); // 1


// توجه داشته باشید که شما نمی‌توانید متغیرهای هم نام را در یک Block مشخص تعریف و استفاده کنید.



// {
//     let x5 = 1;
//     let x6 = 2;
// }
// Uncaught SyntaxError: Identifier 'x6'
// has already been declared



// معادل فارسی اسکوپ محدوده هست که مشخص می کنه هر متغیر در این زبان در چه محدوده ای قابل استفادست.
// یعنی نمیشه همه جای محیط برنامه به یه سری متغیر ها دسترسی پیدا کرد.

// خب ما در کل توی جاوااسکریپت چهار نوع اسکوپ:
//     Global scope
// Function scope(local scope)
// Lexical scope
// Block scope(ES6)
// خب هر کدوم از این scope ها قواعد و ویژگی های مخصوص خودشون رو دارند، که به ترتیب توضیح میدم

// Global scope
// این اسکوپ تمام اسکوپ های برنامه رو در بر می گیره، به عبارتی هر اسکوپی که شما می سازید زیر مجموعه این اسکوپ قرار می گیره

// میشه گفت شهری که شما داخلش زندگی می کنید یه گلوبال اسکوپه و تمام خونه ها و مغازه های داخل شهر سایر اسکوپ ها هستند

// در برنامه نویسی سمت کلاینت object window اسکوپ گلوبال محسوب میشه

// نکته: object document گلوبال نیست و جزو زیر مجموعه window محسوب میشه
// Block scope
// ما با ساختن هر کدوم از این موارد یه block scope ساختیم:

//     If,
//     else statement
// Block scope {}
// Labled scope
// Try,
// catch
// اگر متغیری رو با
// const یا
// let داخل بلاک اسکوپ تعریف(declare کردن) کنیم، داخل گلوبال اسکوپ قابل استفاده نیستند!
//     اما اگر متغیر ها رو تعریف نکنیم(مستقیما یه مقدار به متغیر بدیم بدون استفاده از
//         var,
//         let یا
//         const) یا اون رو با
// var تعریف کنیم اون ها در گلوبال اسکوپ قابل استفاده هستند.

// مثل لوازم خونه شما می مونه همه مردم شهر نمی تونند از لوازمی که توی خونه شما هست استفاده کنن اما اعضای خونه می تونن

// نکته: اگر strict mode رو فعال کنید باید حتما متغیر ها رو تعریف کنید و نمی تونید مستقیم به اون ها یه مقدار بدین
// Function scope(local scope)
// خب این اسکوپ یکی از تفاوت هایی که داره اینه که توی این اسکوپ متغیر
// var متغیر گلوبال محسوب نمیشه اما شما می تونید متغیر رو بیرون این اسکوپ تعریف کنید(توی محیط برنامه، گلوبال اسکوپ) و داخل اسکوپ به اون یه مقدار بدین و از اون توی اسکوپ گلوبال استفاده کنید

// یا

// می تونید متغیر رو تعریف نکنید(از
//     var,
//     let,
//     const استفاده نکنید) و مستقیما داخل تابع بهش یه مقدار بدید

// نکته: برای استفاده از متغیر های
// function scope باید اول فانکشن رو صدا بزنید تا برنامه اون فانکشن رو اجرا کنه وگرنه هیچ متغیری وجود نخواهد داشت
// Lexical scope
// این ویژگی باعث میشه که هر اسکوپی به تمام متغیر های اسکوپ های بالا تر از خودش(اسکوپ هایی که خود اسکوپ زیر مجموعه اون حساب میشن) دسترسی پیدا کنه

// مثال: هر عضو از خونه شما می تونه به امکاناتی که در شهر وجود داره دسترسی پیدا کنه



// برای این که اسکوپ ها رو بفهمید باید خودتون کد های مختلف در اسکوپ های مختلف بنویسید و اسکوپ ها رو