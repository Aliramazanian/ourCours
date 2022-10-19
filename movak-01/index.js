//Schleifen sind ein grundlegender Bestandteil der Anwendungsentwicklung. 
// Sie helfen uns, eine Aufgabe oder eine Reihe von Anweisungen mehrmals zu wiederholen

/// vor 2015 , nach 2015 =>>> ECm6

//Code einfach , klar , kurz  ,schnell
// loop ist auf den meisten websites verwendet



/* for (Initialisierer; Bedingung; increment){
  Aussage //loop body
}
 */

/// For loop
/* for(let i=0 ; i<5;i++){
  
console.log('i love loop',i);
}
 */
// while 

/*  let i=0;
while(i<5){  
  console.log('i love while loop')
  i++;
}  */


// do while
/* let i=0;
do{
  console.log('i love do while');
  i++
}while(i<5);

 */


// for in

const array = ['bmw', 'renault', 'opel'];

//console.log(array.length)
/* 
console.log(array[0])
console.log(array[1])
console.log(array[2]) */

/* console.log('________for in ______________')
 for(let i in array){
  console.log(array[i])
}
 

 console.log('________for loop ______________')

for(let i=0; i<3; i++){
  console.log(array[i])
}
 

console.log('first')
console.log(5+6)
 */
//ctr + shift + p 



// if anweisung vs ternary operator
//Code einfach , klar , kurz  ,schnell

// if anweisung  
/* const tag ='Saturday'
if (tag == 'monady') {
  console.log('work')
} else if(tag=='Saturday'){
  console.log('vacation')
}else if( tag=='Sunday '){
  console.log('vacation')
}else{
  console.log('kein Ahnung')
}
 */
// ternary operator 2015 =>  React

//if                //else           //if                    //else         if                      //else
/* tag=='monday'?console.log('work'):
tag=='Saturday'?console.log('vacation'): 
tag=='Sunday'?console.log('vacation'):
console.log('kein ahnung') 
 */



// Scope =>>>>> {scope}
/// Block scope
/// globale variable
// functional scope 

//let a = 5 /// globale variable kann man irgendwo benutzeng


/* {
  let x = 2;

  console.log(a) ///?????
}
  */
//console.log(x)

//{} // Block

/* function myName(){
  let firstname='xman'  // functional scope
  console.log(a) /// ?????
}
/* console.log(firstname); */
//myName()



/// 2015 =>>> let ,const 
/* {
  let c = 'password'
}

console.log(c) */


// lexical scope
/* let vorname='Max' ;


function displayName(){

function displayVorname(){

function inner (){
console.log(vorname)
}
inner()
}
displayVorname()
}

displayName() */


// fizzBuzz

//if anweisung benutzen kann

let x = 'xman';

/* if (x=='xman') {
  console.log('FizzBuzz')
} else if (x=='John'){
  console.log('Buzz')
}else if (x =='max'){
  console.log('Fizz')
}
else{
  console.log('Error message')
} */

// ternary operator
console.log(x == 'xman' ? 'FizzBuzz' : x == 'John' ? 'Buzz' : x == 'max' ? 'Fizz' : 'Error message')