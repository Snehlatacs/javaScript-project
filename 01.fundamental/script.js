/*console.log( 45+56-34-10);

console.log("jonas");

const variable = "like container where we store the actual value";

console.log(variable);
let age = 40;
age = 41;
console.log(age);

const birthYear = 1983;
// birthYear = 1990; // This will throw an error because we cannot reassign a const variable

const job = "teacher";
const firstName = "Jonas";
const lastName = "Schmedtmann";

const jonas = {
  firstName: firstName,
  lastName: lastName,
  age: age,
  job: job,
};
console.log(jonas);

console.log("Data types in JS");
console.log(typeof 23); // number
console.log(typeof "Jonas"); // string
console.log(typeof true); // boolean
console.log(typeof undefined); // undefined
console.log(typeof null); // object (this is a known bug in JS)
console.log(typeof []); // object (arrays are also objects in JS)
console.log(typeof {}); // object (objects are also objects in JS)
console.log(typeof function () {}); // function (functions are also objects in JS)
console.log(typeof Symbol("symbol")); // symbol (ES6 feature)
console.log(typeof BigInt(123456789012345678901234567890)); // bigint (ES11 feature)
console.log(typeof NaN); // number (this is a known bug in JS)
console.log(typeof Infinity); // number (this is a known bug in JS)
console.log(typeof -Infinity); // number (this is a known bug in JS)   
console.log(typeof /regex/); // object (regexes are also objects in JS)

console.log("let, const and var");
// let and const are block scoped, var is function scoped
// let and const are not hoisted, var is hoisted
// let and const are not redeclarable, var is redeclarable  
// let and const are not reassignable, var is reassignable
// let and const are not global, var is global
// let and const are not window properties, var is a window property
// let and const are not global variables, var is a global variable
// let and const are not global objects, var is a global object
// let and const are not global functions, var is a global function 
// let and const are not global constructors, var is a global constructor
// let and const are not global classes, var is a global class
// let and const are not global prototypes, var is a global prototype
// let and const are not global instances, var is a global instance
// let and const are not global methods, var is a global method

console.log(me); // undefined (hoisted)

//what is hoisting? Hoisting is a JavaScript mechanism where variables and function declarations
//are moved to the top of their scope before code execution. This means that you can use variables
//and functions before they are declared in the code. However, only the declarations are hoisted, 
//not the initializations. This is why we get undefined when we log me before it is declared.
var me = "Jonas"; // var is hoisted

//example of let
let job = "teacher"; // let is not hoisted
console.log(job); // teacher (not hoisted)
let age = 30;
age = 31; // Allowed
// let age = 40; // Error: Cannot redeclare 'age'

//example of const
const birthYear = 1990;
// birthYear = 2000; // Error: Assignment to constant variable
// const birthYear = 1985; // Error: Cannot redeclare 'birthYear'

//example of var
var name = "Jonas";
var name = "John"; // Allowed
name = "Jane"; // Allowed

//Basic operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah); // 46 19
console.log(ageJonas * 2, ageSarah / 2, 2 ** 3); // 92 9.5 8 (Exponentiation operator)
console.log(ageJonas > ageSarah); // true
console.log(ageSarah >= 18); // true (greater than or equal to)
console.log(25 - 10 - 5); // 10 (Subtraction operator)
console.log(25 + 10 + 5); // 40 (Addition operator)
console.log(25 * 10 * 5); // 1250 (Multiplication operator)
console.log(25 / 10); // 2.5 (Division operator)
console.log(25 % 10); // 5 (Modulus operator)
console.log(25 ** 2); // 625 (Exponentiation operator)
console.log(25 ** 0.5); // 5 (Square root operator)
console.log(25 ** (1 / 2)); // 5 (Square root operator)
console.log(25 ** (1 / 3)); // 2.924017738212866 (Cube root operator)

//Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 (x is now 25)
x *= 4; // x = x * 4 (x is now 100)
x++; // x = x + 1 (x is now 101)
x--; // x = x - 1 (x is now 100)
x = x + 1; // x = x + 1 (x is now 101)
x = x - 1; // x = x - 1 (x is now 100)
x = x * 2; // x = x * 2 (x is now 200)
x = x / 2; // x = x / 2 (x is now 100)
x = x % 2; // x = x % 2 (x is now 0)
x = x ** 2; // x = x ** 2 (x is now 0)

//opreator precedence
const y = 10 + 5 * 2; // 20 (Multiplication operator has higher precedence than addition operator)
const z = (10 + 5) * 2; // 30 (Parentheses have the highest precedence)
const a = 10 + 5 - 2 * 3; // 15 (Multiplication operator has higher precedence than addition and subtraction operators)
const b = 10 + 5 - 2 / 2; // 14 (Division operator has higher precedence than addition and subtraction operators)
const c = 10 + 5 * 2 - 3; // 22 (Multiplication operator has higher precedence than addition and subtraction operators)
const d = 10 + 5 * 2 / 2; // 20 (Multiplication and division operators have the same precedence, so they are evaluated from left to right)
const e = 10 + 5 * 2 ** 2; // 50 (Exponentiation operator has the highest precedence)

//string concatenation
const firstName = "Jonas";
const lastName = "Schmedtmann";
const fullName = firstName + " " + lastName; // "Jonas Schmedtmann"
console.log(fullName); // "Jonas Schmedtmann"
console.log("Hello, my name is " + fullName + "."); // "Hello, my name is Jonas Schmedtmann."
console.log(`Hello, my name is ${fullName}.`); // "Hello, my name is Jonas Schmedtmann." (Template literals)
console.log(`Hello, my name is ${firstName} ${lastName}.`); // "Hello, my name is Jonas Schmedtmann." (Template literals)
console.log(`Hello, my name is ${firstName} ${lastName}. I am ${ageJonas} years old.`); // "Hello, my name is Jonas Schmedtmann. I am 46 years old." (Template literals)
console.log(`Hello, my name is ${firstName} ${lastName}. I am ${ageJonas} years old. I am a ${job}.`); // "Hello, my name is Jonas Schmedtmann. I am 46 years old. I am a teacher." (Template literals)

//plus operator
console.log("10" + 5); // "105" (String concatenation)// "10" is a string, so 5 is converted to a string and concatenated
console.log("10" - 5); // 5 (Subtraction operator)
console.log("10" * 5); // 50 (Multiplication operator)
console.log("10" / 5); // 2 (Division operator)
console.log("10" % 5); // 0 (Modulus operator)

//string and template literals
const name = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;
const jonas = `I'm ${name}, a ${year - birthYear} years old ${job}!`;
console.log(jonas); // "I'm Jonas, a 46 years old teacher!" (Template literals)
console.log(`String with \n\
multiple \n\ lines`); // "String with multiple lines" (Template literals)


//taking decisions: if / else statements
const age = 15;
const isOldEnough = age >= 18; // true (greater than or equal to)
const isTeenager = age >= 13 && age <= 19; // true (greater than or equal to and less than or equal to)
const isAdult = age >= 18; // true (greater than or equal to)

if(age >= 18) {
    console.log("Sarah can start driving license 🚗"); // "Sarah can start driving license 🚗"
}else { 
    const yearsLeft = 18 - age; // 3 (Subtraction operator)
    console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`); // "Sarah is too young. Wait another 3 years :)"
}

//ternary operator
const drink = age >= 18 ? "wine" : "water"; // "wine" (ternary operator)
console.log(`I like to drink ${drink}`); // "I like to drink wine" (Template literals)
//switch statement
const day = "monday"; // "monday" (string)
switch (day) {
  case "monday":
    console.log("Plan course structure"); // "Plan course structure"
    console.log("Go to coding meetup"); // "Go to coding meetup"
    break; // break statement
  case "tuesday":
    console.log("Prepare theory videos"); // "Prepare theory videos"
    break; // break statement
  case "wednesday":
  case "thursday":
    console.log("Write code examples"); // "Write code examples"
    break; // break statement
  case "friday":
    console.log("Record videos"); // "Record videos"
    break; // break statement
  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend :D"); // "Enjoy the weekend :D"
    break; // break statement
  default:
    console.log("Not a valid day!"); // "Not a valid day!"
}

//using if else statement instead of switch statement
if (day === "monday") {
  console.log("Plan course structure"); // "Plan course structure"
  console.log("Go to coding meetup"); // "Go to coding meetup"
}
else if (day === "tuesday") {
  console.log("Prepare theory videos"); // "Prepare theory videos"
} else if (day === "wednesday" || day === "thursday") {
  console.log("Write code examples"); // "Write code examples"
} else if (day === "friday") {
  console.log("Record videos"); // "Record videos"
} else if (day === "saturday" || day === "sunday") {
  console.log("Enjoy the weekend :D"); // "Enjoy the weekend :D"
} else {
  console.log("Not a valid day!"); // "Not a valid day!"
}

//truthy and falsy values
console.log(Boolean(0)); // false (0 is a falsy value)
console.log(Boolean(undefined)); // false (undefined is a falsy value)
console.log(Boolean("")); // false (empty string is a falsy value)
console.log(Boolean(null)); // false (null is a falsy value)
console.log(Boolean(NaN)); // false (NaN is a falsy value)
console.log(Boolean("Jonas")); // true (non-empty string is a truthy value)
console.log(Boolean({})); // true (object is a truthy value)
console.log(Boolean([])); // true (array is a truthy value)
console.log(Boolean(function () {})); // true (function is a truthy value)
console.log(Boolean(23)); // true (non-zero number is a truthy value)
console.log(Boolean(-1)); // true (non-zero number is a truthy value)


//equality operators
if("1" == 1) {
    console.log("loose equality operator"); // "loose equality operator"
}

//strict equality operator (===) checks for both value and type
if("1" === 1) {
    console.log("strict equality operator"); // "strict equality operator"
}
else {
    console.log("strict equality operator"); // "strict equality operator"
}

//loose inequality operator (!=) checks for value only
if("1" != 1) {
    console.log("loose inequality operator"); // "loose inequality operator"
}
else {
    console.log("strict inequality operator"); // "strict inequality operator"
}

//strict inequality operator (!==) checks for both value and type
if("1" !== 1) {
    console.log("strict inequality operator"); // "strict inequality operator"
}
else {
    console.log("strict equality operator"); // "strict equality operator"
}

//nullish coalescing operator (??) checks for null and undefined only
const age = 0; // 0 (falsy value)
const drink = age >= 18 ? "wine" : "water"; // "water" (ternary operator)
console.log(`I like to drink ${drink}`); // "I like to drink water" (Template literals)


//boolean logic
const hasDriversLicense = true; // true (boolean)
const hasGoodVision = true; // true (boolean)
const isTired = false; // false (boolean)
const shouldDrive = hasDriversLicense && hasGoodVision && !isTired; // true (logical AND operator)
console.log(shouldDrive); // true (logical AND operator)
if (shouldDrive) {
  console.log("Sarah is able to drive!"); // "Sarah is able to drive!"
}
else {
  console.log("Someone else should drive..."); // "Someone else should drive..."
}

//using logical operators to combine multiple conditions
const isWeekend = true; // true (boolean)   
const isWeekday = false; // false (boolean)
const isHoliday = false; // false (boolean)
const isWorkingDay = isWeekday && !isWeekend && !isHoliday; // false (logical AND operator)
console.log(isWorkingDay); // false (logical AND operator)
if (isWorkingDay) {
  console.log("It's a working day!"); // "It's a working day!"
}
else {
  console.log("It's not a working day!"); // "It's not a working day!"
}


//type conversion
const inputYear = "1991"; // "1991" (string)
console.log(Number(inputYear)); // 1991 (number)
console.log(Number(inputYear), inputYear); // 1991 "1991" (number and string)
console.log(Number(inputYear) + 18); // 2009 (number)
console.log(Number("jonas")); // NaN (Not a Number)
console.log(typeof NaN); // number (NaN is a number type)
console.log(String(23), 23); // "23" (string) 
const inputYear2 = 1991; // 1991 (number)

//type coercion
console.log("I am " + 23 + " years old"); // "I am 23 years old" (string concatenation)
console.log("23" - "10" - 3); // 10 (subtraction operator)
console.log("23" * "2"); // 46 (multiplication operator)`
console.log("23" / "2"); // 11.5 (division operator)

let n = "1" + 1; // "11" (string concatenation)
n = n - 1; // 10 (subtraction operator)
console.log(n); // 10 (number)
console.log("10" - "4" - "3" - 2 + "5"); // "105" (string concatenation)

//type conversion and coercion example and how it works in JS defintion
//type conversion is the process of converting a value from one data type to another.
// In JavaScript, this can be done using built-in functions like Number(), String(), Boolean(), etc.
// For example, if you have a string "123" and you want to convert it to a number, you can use the Number() function like this:
// const str = "123";
// const num = Number(str); // num is now 123 (number)
// console.log(num); // 123 (number)
// console.log(typeof num); // number (number type)
// console.log(typeof str); // string (string type)
// console.log(str + 1); // "1231" (string concatenation)
// console.log(num + 1); // 124 (number addition)
// console.log(str - 1); // NaN (Not a Number)
// console.log(num - 1); // 122 (number subtraction)

//type coercion is the process of automatically converting a value from one data type to another.
// In JavaScript, this can happen when you use operators that expect a certain data type.
// For example, if you use the + operator with a string and a number, JavaScript will automatically convert the number to a string and concatenate them:
// const str = "123";
// const num = 123; // number
// console.log(str + num); // "123123" (string concatenation)
// console.log(str - num); // 0 (number subtraction)
// console.log(str * num); // 15129 (number multiplication)
// console.log(str / num); // 1 (number division)

//best practices for type conversion and coercion
//1. Always use strict equality (===) and strict inequality (!==) operators to avoid unexpected type coercion.
//2. Use Number(), String(), and Boolean() functions for explicit type conversion when needed.
//3. Be careful with the + operator, as it can cause unexpected type coercion when used with strings and numbers.
//4. Use parseInt() and parseFloat() functions for converting strings to integers and floating-point numbers, respectively.
//5. Use toString() method for converting numbers to strings.
//6. Use template literals for string interpolation instead of concatenation to avoid type coercion issues.
//7. Use the typeof operator to check the data type of a value before performing operations on it.

*/
