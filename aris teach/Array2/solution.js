//mechaell
// Array Methods

const {
    default: test
} = require("node:test");

const newArray = [42, 27, 11, 8, "hotpink", "sieben"];

// pop()

let x = newArray.pop();
console.log(newArray);

// bestimmte items auswählen

let y = newArray[1];
console.log(y);

// push() um am Ende des Arrays ein Element hinzuzufügen

newArray.push("neunundsechzig");
console.log(newArray);

// shift() um das erste Element des Arrays zu entfernen

newArray.shift();
console.log(newArray);

// unshift() um am Anfang des Arrays ein Element hinzuzufügen

newArray.unshift("beteigeuze");
console.log(newArray);

// splice([Startindex], [Wieviele Einträge gelöscht werden sollen], Elemente die den Inhalt ersetzen sollen)

let z = newArray.splice(1, 3, 69, 30, 12, "zehn", 20, "harry");
console.log(newArray);
console.log("z =", z);

const evenNewerArray = ["schneemann", "weihnachtsmann", "osterhase"];

// concat() um mehrere Arrays zusammenzufügen

const combined = newArray.concat(evenNewerArray);
console.log(combined);

// reverse() dreht die Reihenfolge des Arrays um

// test = String(combined);
// console.log(test);
// test.reverse();
// console.log(test);

combined.reverse();
console.log(combined);

// indexOf([Element/Number/String/etc]) gibt die Position im Array an

let a = combined.indexOf("beteigeuze");
console.log(a);

// includes([Element / Number / String /etc]) gibt aus, ob das Element im Array ist

let b = combined[0].includes("e");
console.log(b);

let c = combined.includes("zehn");
console.log(c);

// join([string]) verbindet die einzelnen Array Elemente mit dem angegebenen String

let d = combined.join(", ");
console.log(d);

console.log(combined.length);

// sort() sortiert den Array von zahlen 0 - 9 dann Großbuchstaben (A - Z) und dann kleine Buchstaben (a - z)

let e = combined.sort();
console.log(e);