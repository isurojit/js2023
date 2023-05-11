/*Keyboard Shortcut:
shift-alt+right/left- traverse 
alt+updown-move
shift-alt+up/down- to copy updown
ctrl+D-to select perticular word one by one
ctrl+shift+l -to select perticular word all together
ctrl+b- toggele sidebar
ctrl+~ toggle cmd line
*/
// Varibales
//var
/*var firstName = "Surojit";
var lastName = "Manna";
let fullName = firstName + lastName;
let age = 28;
console.log("Full Name: ", fullName, "\n", "Age: ", age);
*/
// Primitive Data Types
//String
//Number
//Boolean
//Null
//Undefined
//Symbol - Builtin object whose constructor returns unique symbol
/*const id = Symbol("id");
console.log(id, typeof id);
//BigInt
const num = 123456789789451236;
console.log(num, typeof num);*/

//Reference Types
//Objects
//Arrays
//Function

//type conversion

//Change String To Number
// let amount = -999;
//amount = parseInt(amount);
//amount = +amount;
//amount = Number(amount);

//Change String To Number
//amount = amount.toString(); //used temporary wrapper on premitive type
//amount = String(amount);

//cover number to boolean
// amount = Boolean(amount);

// console.log(amount, typeof amount);

//Sting Operations
// let x;
// const str = "John";
// const age = 30;
// x = str + age;

// //String properties and method
// const s = new String("Hello World");
// x = typeof s;
// x = s[1];
// x = s.__proto__;

/*anchor
: 
ƒ anchor()
Depricated
*/
/*
at
: 
ƒ at()
*/
// const arr = ["Ram", "Shyam", "John", "Akbar"];
// let index = 2;
// console.log(`The name in index ${index} is : ${arr.at(index)}`);
/*
big
: 
ƒ big()
blink
: 
ƒ blink()
bold
: 
ƒ bold()
All 3 Are Depricated
*/
/*
charAt
: 
ƒ charAt()
*/
/*const name = "Surojit Manna";
console.log(name.charAt(0));*/
/*
charCodeAt
: 
ƒ charCodeAt()
*/
//it finds the ASCII values
// const name = "Surojit Manna";
// console.log(`The ASCII Value Of ${name.charAt(0)} is ${name.charCodeAt(0)}`);
/*
codePointAt
: 
ƒ codePointAt()
*/
//It finds the Unicode values
/*const name = "☃★♲";
console.log(`The ASCII Value Of ${name.charAt(0)} is ${name.charCodeAt(0)}`);*/
/*
concat
: 
ƒ concat()
*/
//add to strings
// console.log("Hi".concat(" my name is Surojit"));
/*
endsWith
: 
ƒ endsWith()
*/
//check the last string
// const str = "Today is a good day";
// console.log(str.endsWith("day", 19));searchString, endPosition
/*
fixed
: 
ƒ fixed()
fontcolor
: 
ƒ fontcolor()
fontsize
: 
ƒ fontsize()
Above All depricated
*/
/*
includes
: 
ƒ includes()
*/
//check if given word or char is present in string or not
// const str = "this is the end";
// const word = "end";
// console.log(
//   `The word ${word} is ${
//     str.includes(word) ? "present" : "not present"
//   } in the sentence`
// );
/*
indexOf
: 
ƒ indexOf()
*/
/*
const str = "Surojit Manna";
console.log(str.indexOf("M"));*/
/*
isWellFormed
: Not needed
ƒ isWellFormed()
italics
: depricated
ƒ italics()
*/
/*
lastIndexOf
: 
ƒ lastIndexOf()
*/
//it accepts matching last index
/*const str = "moon is bright. moon reflects 5% of sun's light.";
const term = "moon";
console.log(`index of ${term} is ${str.lastIndexOf(term)}`);
*/
/*
length
: 
Finds length of string
*/
/*link
:Depricated 
ƒ link()
localeCompare
: 
ƒ localeCompare()
match
: 
ƒ match()
matchAll
: 
ƒ matchAll()
normalize
: 
ƒ normalize()
padEnd
: 
ƒ padEnd()
padStart
: 
ƒ padStart()
repeat
: 
ƒ repeat()
replace
: 
ƒ replace()
replaceAll
: 
ƒ replaceAll()
search
: 
ƒ search()
slice
: 
ƒ slice()
small
: 
ƒ small()
split
: 
ƒ split()
startsWith
: 
ƒ startsWith()
strike
: 
ƒ strike()
sub
: 
ƒ sub()
substr
: 
ƒ substr()
substring
: 
ƒ substring()
sup
: 
ƒ sup()
toLocaleLowerCase
: 
ƒ toLocaleLowerCase()
toLocaleUpperCase
: 
ƒ toLocaleUpperCase()
toLowerCase
: 
ƒ toLowerCase()
toString
: 
ƒ toString()
toUpperCase
: 
ƒ toUpperCase()
toWellFormed
: 
ƒ toWellFormed()
trim
: 
ƒ trim()
trimEnd
: 
ƒ trimEnd()
trimLeft
: 
ƒ trimStart()
trimRight
: 
ƒ trimEnd()
trimStart
: 
ƒ trimStart()
valueOf
: 
ƒ valueOf()
Symbol(Symbol.iterator)
: 
ƒ [Symbol.iterator]()
*/
// x = s.split("");
// console.log(x);

//Numbers
let x;

const num = new Number(5);
//to string
x = num.toString();
x = num.toString().length;
x = typeof x;
x = num.toPrecision(4);
x = num.toExponential(2);
x = num.toLocaleString("en-IN");
x = num.valueOf();
x = Number.MAX_VALUE;
x = Number.MIN_VALUE;
console.log(x);
