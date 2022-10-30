// <<<<<<<<<<<<<<<<<<Verschachtelte Schleifen  = nested loop>>>>>>>>>>>>>>>>>>>>>>>><
//variable  condition  increment
// Warum nested loop ????

/*  for (let a = 0;  a<2;a++){  // i++  ===> i = i+1
    console.log('erste loop')  // 2 mal 
    for (let b=0 ; b<3; b++){
        console.log('----b  loop------  ',b)   /// 3 mal   * 2 mal 
        for (let c =0 ; c<2; c++){

            console.log('-------C loop---- ',c)  // 4 mal * 3 mal  * 2 mal
        }
    } 
    
}  */

//  [] notaion =>> array
// nested arrays  ==> man braucht nested loop
/* let arr = [
// index of 1 = 0 
  [1, 2],  // index =0 
  [3, 4],
  //0 1 2 3
  [5, 6,7,8,9],
]; */
//console.log(arr.length)  /// warum arr.length ???
/* console.log(arr[0])
   console.log(arr[1])
   console.log(arr[2])
 */

/* for (let i = 0; i < arr.length; i++) {
  for (let x = 0; x < arr[i].length; x++) {
    // arr[i] => array : loop
    console.log(arr[i][x]);
  }
}
 */

/* console.log(arr[0][0])
console.log(arr[0][1])
console.log(arr[1][0])
console.log(arr[1][1])
console.log(arr[2][0])
console.log(arr[2][1]) */
//console.log(arr[2][3])



////<<<<<<<<<<<<<<object method>>>>>>>>>>>>>>>>>>>>>
// {}Geschweifte Klammern ode Curly brackets bedeutet => object
// punkt notation
// Warum object method ??????
const Auto = { // object
    type: 'Fiat',
    model: 'x200',
    color: 'rot',
    baujahr: 1970,
    preis: {
        newpreis: 1500,
        altePreis: 20000
    },
    demo() { // object method
        console.log('demo function')
    },
    method1() { // object method
        console.log('method1 function')
    },
    method2() { // object method
        console.log('method2 function')
    }
}
/* console.log(Auto.preis.newpreis) */



// <<<<<<<<<<<<<<<<<<Date() concept >>>>>>>>>>>>>>>>>>>>>>

//console.log(new Date().getDate() )   // von 1-31             // object 
//console.log(new Date().getDay())   // von 0- 6 
//console.log(new Date().getFullYear()) //2022
//console.log(new Date().getHours())   // 0- 23
//console.log(new Date().getMilliseconds()) // 0 -999
//console.log(new Date().getMinutes())   //0-59
//console.log(new Date().getMonth()+1)  // 0-11

//console.log(new Date().getHours() + ':'+ new Date().getMinutes()  +  ': '+  new Date().getSeconds())

//console.log(new Date().toLocaleTimeString())

//console.log(new Date().toLocaleString( {timeZone:'America/Los_Angeles'}))
//console.log(new Date().toLocaleString('sp', {timeZone:'Europe/Madrid'}))

/* setInterval(Uhr,1000) */

/*   function Uhr(){
document.getElementById('demo').innerHTML =new Date().toLocaleTimeString()
setTimeout(Uhr,1000)  // 1 second
  }

  Uhr() */
// Lösung Ahmad aufgabe
///console.log((new Date(Date.now() - new Date(1990, 11, 4)).getUTCFullYear()-1970)) 
///console.log((new Date(Date.now() - new Date(1990, 11, 4)).getUTCFullYear()-1970)) 