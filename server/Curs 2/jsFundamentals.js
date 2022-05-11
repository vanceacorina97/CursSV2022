// 2nd Course - Javascript fundamentals
// PRIMITIVES & OPERATORS
// Number https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
let age = 24;

// String https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
let nameCourse = "JavaScript";

//Boolean https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean
var javaSciptIsFun = true;

// undefined https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined
let children;
children = 3;

// null https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null
let course = null;

let children2 = 3;
children2 = 'Trei';

const nan = Number("a23");
console.log(isNaN(nan));

//Operatorii matematici
// +, -, *, /, **
const now = 2022;
const calcAge = now - 1991;
console.log(calcAge);

const firstName = 'Pop';
const lastName = 'David';
console.log(firstName + ' ' + lastName);
console.log(calcAge * 2, calcAge / 2, 2 ** 3);

//Operatorii de atribuire
let x = 20 + 5; // 25

x += 10; // x = x + 10
x *= 4; // x = x * 4;
x++; // x = x+1

//Operatorii de comparatie
// <, >=, <=
console.log(calcAge > 25);

// Not operator => ! https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_NOT
let hasDriverLicence = true;
// !hasDriverLicence = false

// Strict equality => === https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality
console.log(1 === 1);
console.log(1 === '1');

// == https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Equality
console.log(2 == 2);
console.log(2 == '2');

//const https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const
const birthYear = 1995;
//birthYear = 1998; throws error

// var https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var
console.log(javaScriptIsFun); // undefined
// Obs: var is function scoped and hoisted
var javaScriptIsFun = 'yes!';
javaScriptIsFun = "Sometimes...";

// Structuri logice
// if https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else
const age1 = 20;
if (age1 <= 18) {
   console.log("Can't start driving licence!");
} else {
   console.log("Can start driving licence!");
}
// while https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while
let n = -1;
while (n < 3) {
   console.log(n++); // n = 0
}
// do...while https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/do...while
let i = 0;
do {
   console.log(i++);
} while (i < 3);

// switch https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch
const day = 'monday';

switch (day) { // day === 'monday'
    case 'monday':
        console.log('Cardio');
        break;
    case 'tuesday':
        console.log('abs');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Stretch');
        break;
    case 'friday':
        console.log('upper body');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Rest day');
        break;
    default:
        console.log('Not a valid day');
}
// Ternary operator https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
age1 <= 18 ? console.log("Can't start driving licence!") : console.log("Can start driving licence!");

// Functions https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions
// Function declarations https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function

logger(); // Hoisted

function logger() {
    console.log("Javascript is fun");
}
logger();

function calcAge1(birthYear) {
    return 2022 - birthYear;
}
const age2 = calcAge1(1999);
console.log(age2);

// Function expression https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function
const calcAge2 = function(birthYear) {
   return 2022 - birthYear;
}

// First class function https://developer.mozilla.org/en-US/docs/Glossary/First-class_Function
function sayHello() {
  return function() {
     console.log("Hello!");
  }
}
sayHello();

// Arrow functions https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
const calcAge3 = (birthYear, firstName) =>  2022 - birthYear;

// IIFE
(() => {
    let firstVariable = 1000000;
    let secondVariable = 200000;
    console.log(firstVariable, secondVariable);
})();
// Scoping: global scope, function scope, block scope https://developer.mozilla.org/en-US/docs/Glossary/Scope
// Global scope: variables and functions declared outside any block/function

const globalVar = "My global variable is global";

// function scope: varibles and functions declared inside of a function
function calcAge5(birthYear) {
    const fnNow = 2022;
    const fnAge = fnNow - birthYear;
    return fnAge;
}
//console.log("nooow", fnNow); ReferenceError: fnNow is not defined

// block scope: varibles and functions declared inside of a block

{
  const blockScoped = "Accessible only inside of the current block";
  var functionScoped = "Accessible only inside of the current function";
}
console.log(functionScoped);
// console.log(blockScoped) ReferenceError: blockScoped is not defined

// ARRAYS https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

// - What are arrays?
// * Arrays store a collection of primitives consecutively in memory
// * Array elements are accessed using indexes (starting from 0 for the first item)
// * Because of their structure, they are fast data structures

// - Creating arrays -
// - Array literals:
const animals = ["monkey", "tiger", , "crocodile"]
console.log(animals[2], animals[3]) // displays "undefined" & "crocodile"

// - Array constructor:
const myArr = new Array(5); // new Array(size_of_array)

// - Properties: length - returns the array length

// - Useful methods:
const array = [1,2,3,4,5];
console.log(array.length) // Displays 5
console.log(array.pop()); // Displays '5' https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop
console.log(array.shift()); // Displays '1' https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift
console.log(array.indexOf(2)); // Displays 0 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
console.log(array.includes(2)); // Displays true https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
console.log(array.filter((element) => element > 2)); // Displays [3,4] https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
console.log(array.map((element) => element * 2)); // Displays [4,6,8] https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

// - spread operator: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
console.log(...array); // displays "1 2 3 4 5"
// Also works with strings:
console.log(..."Javascript"); // J a v a s c r i p t
// - destructuring shorthand: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
const [first, second, ...rest] = array;
console.log(first, second, rest); // Displays 1 2 [3,4,5]

// SETS https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set

// - What are sets?
// Sets store a collection of unique elements, similarly to arrays.
// They are faster than arrays when checking the existance of elements;

// - Creating a set:
const mySet = new Set([1,2,3,4,5]);
const otherSet = new Set();

// - Properties: size - returns the set size

// - Methods:
// * add: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/add
otherSet.add(1); // [1]
otherSet.add(1); // [1]
// * delete: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/delete
mySet.delete(2); // [1,3,4,5]
// * has: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/has
mySet.has(2); // False
// * clear: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/clear
mySet.clear();
console.log(mySet.size); // 0

// MAPS: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map

// - What are maps?: key value collections, similar methods to sets

// - Creating a map:
const myMap = new Map()

// - properties: size - returns the map size

// - Methods:
// * set: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/set
myMap.set("key", "value");
myMap.set("key2", "value2");
// * get: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/get
myMap.get("key"); // value
myMap.get("key2"); // value2
// * delete: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/delete
myMap.delete("key2"); // true
// * has: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/has
myMap.has("key2"); // false

// continue and break keywords
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/continue
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/break
const demoArr = [1,2,3,4,5,6,7,8];
for (let i = 0; i < demoArr.length; i++) { // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for
  if (demoArr[i] === 4) continue; // Skip over 4
  if (demoArr[i] === 7) break; // End loop when we are at element 7
  console.log(demoArr[i]);
}

demoArr.forEach((element) => { // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
  if (element === 4) return; // Skip over 4
  console.log(element);
})

for (const element of demoArr) { // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
  if (element === 4) continue; // Skip over 4
  if (element === 7) break; // End loop when we are at element 7
  console.log(element);
}

// OBJECTS & PROTOTYPES!
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes

// - Creating an object:
// * literals
const obj = {
	key: "value"
}
obj.key2 = "value2"; // Adding a property

// * Object.create() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create
const obj2 = Object.create(obj);
console.log(obj2.__proto__) // Displays obj

// - destructuring shorthand:
const { key } = obj;
console.log(key) // displays "value"

// - typeof, instanceof
const arrayInstance = [1,2,3,4];
console.log(arrayInstance instanceof Array, typeof arrayInstance) // Displays true object

// - call, bind
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind

function incrementThis () { // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment
  console.log(++this.counter)
}

const counterObj = {
  counter: 0
}

const incrementObj = incrementThis.bind(counterObj);

// These do the same thing
incrementThis.call(counterObj);
incrementObj();

// CONSTRUCTOR, CLASS, INHERITANCE
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this

console.log("Object.create() demonstration")
const PersonProto = {
  name: "Ana",
  age: 24,
  sayHello: function () {
    console.log(`Hello, my name is ${this.name}`)
  }
}

const ana = Object.create(PersonProto);
ana.sayHello()
console.log("Is 'ana' an instance of PersonProto? ", "TypeError: Right-hand side of 'instanceof' is not callable")
console.log("Ana's prototype: ", ana.__proto__, '\n')

console.log("Constructor function demonstration")
function PersonConstructor (name, age) {
  this.name = name;
  this.age = age;
}

PersonConstructor.prototype.sayHello = function() {
  console.log(`Hello, my name is ${this.name}`);
}

const alex = new PersonConstructor("Alex", 22);
alex.sayHello();
console.log("Is 'alex' an instance of PersonConstructor? ", alex instanceof PersonConstructor)
console.log("Alex's prototype: ", alex.__proto__, '\n')

console.log("Class demonstration");
class PersonClass {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  showDetails() {
    return {name: this.name, age: this.age}
  }
}

class PersonActions extends PersonClass {
  constructor(name, age) {
    super(name, age)
  }
  
  sleep() {
    console.log("Zzzzzz...");
  }

  sayHello () {
    console.log(`Hello, my name is ${this.name}`)
  }
}

const david = new PersonActions("David", 23)
console.log("David's details:", david.showDetails()); 
david.sayHello()
console.log("Is 'david' an instance of PersonActions? ", david instanceof PersonActions)
console.log("David's prototype: ", david.__proto__)

import { person, Car } from "./jsModule.mjs"; // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules
console.log(person);
const fiesta = new Car("ford", "fiesta", 2017);
fiesta.honk(); // beep beep!

import closure from "./jsModule.mjs"; // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
console.log(closure.publicVar); // my public var
console.log(closure.privateVar); // undefined
console.log(closure.getPrivate); // my private var