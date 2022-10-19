//Arten von functions in Javascript : 

// Function Expression ==>Funktionsausdruck
/*  const demo = function(){              
    console.log('first art') 
 }
  */
// Function declaration ==>Funktionsdeklaration
/*  function demo2(){
    console.log('second art')
 }
  */

//Arrow function =>>> Pfeilfunktion // nach 2015
//1 rund klamme mit meherer Zeilen geht nicht =>>> curlyBrace
// return vs console.log
// return =>> Stop
// 2 console.log ==> undefined


/// function mit  retun 
/*  const demo3 =(a,b )=>{
     let c = a+b
    return c
    }
console.log(demo3(1,2))  */



/// function mit  console.log()
/* const demo3 =(a,b )=>{
    let c = a+b
  console.log(c)
   }
    

demo3(1,2)  */



// Array methods

//split() ,slice() , splice()

// split()

//Die Methode split() nimmt ein String und teilt das String in eine geordnete Liste von Teilstrings,
//indem sie nach einem Muster sucht, fügt diese Teilstrings in ein Array ein und gibt das Array zurück.

// Split string ==> Array  =>>> array benutzen
// tpyeof Array ist ein object
// split macht ein kopie meiner original string
//const string = 'The quick brown fox jumps over the lazy dog.'
//console.log(string.split(' '))    // 90% split(' ')   // array 

//console.log(typeof string)   /// object 


/// ist split() methode functioniert mit array ?????  ==> nur String : str => array const arr = [1,2,3,4]
//const string = 'The quick brown fox jumps over the lazy dog.'
//const arr = [1,2,3,4]
// split method akzeptiert kein Array
//console.log(string.split(' '))   //  arr.split is not a function  ==>>> arr hat ein problem



//slice method()
//Die Slice()-Methode gibt eine flache Kopie eines Teils eines Arrays in ein neues Array-Objekt zurück, das von Anfang bis Ende (Ende nicht eingeschlossen) ausgewählt wurde, 
//wobei Start und Ende den Index der Elemente in diesem Array darstellen. Das ursprüngliche Array wird nicht geändert.

//0      1      2         3     4
/* const Autos= ['BMW','Seat','Renault','Audi','VW']; */
/* const string = 'The quick brown fox jumps over the lazy dog.' */
// slice(start,end)   // ausgibt kein end
// slice akzeptiert negative werte ????? richtig
// slice akzeptiert kein dritte param
// slice macht ein kopie =>> edit nicht mein original Array
// slice funktioniert mit  string
//console.log('sliced Array =>>>', Autos.slice(0,4))  // array
//console.log('sliced Array =>>>', string.slice(0,4))  // String

//console.log(Autos.slice(-3))




// splice method

//Die Methode splice() ändert den Inhalt eines Arrays, 
//indem sie vorhandene Elemente entfernt oder ersetzt und/oder neue Elemente an Ort und Stelle hinzufügt.
// Splice editiert mein  original Array
// splice akzeptiert unbegrenzt element
// splice(wo, wievielement entfernt ,ersetztelemente) <==== wichtig
// splice akzeptiert kein String
// splice addiert ein Array

// 0      1        2        3     4 
/* const Autos= ['BMW','Seat','Renault','Audi','VW'];
const Autos2= ['BMW','Seat','Renault','Audi','VW']; */


//const string = 'The quick brown fox jumps over the lazy dog.'


/* Autos.splice(4,0,Autos2) // unbegrenzt elemente
console.log(Autos)   // original array */



// join() methode 
//Die Methode join() erstellt eine neue Zeichenfolge und gibt sie zurück, indem sie alle Elemente in einem Array (oder einem Array-ähnlichen Objekt) verkettet,
//getrennt durch Kommas oder eine angegebene Trennzeichenfolge. 
//Wenn das Array nur ein Element enthält, wird dieses Element ohne Verwendung des Trennzeichens zurückgegeben.
// join() array => String
// join() editiert die originale Array nicht
// join akzeptiert kein string
// join akzeptiert kein object

/*  const persons = ['John', 'Max','Alex' ,'Etienne']; //  => John Max Alex Etienne
 const string = 'The quick brown fox jumps over the lazy dog.'

 const obj = {
    firstName: 'John',
    lastName: 'Doe'
 }
console.log(persons.join(''))  */ //John Max Alex Etienne

//console.log(persons.join(' # '))  // John # Max # Alex # Etienne

//console.log(string.join()) // string.join is not a function 

//console.log(obj.join())  // obj.join is not a function