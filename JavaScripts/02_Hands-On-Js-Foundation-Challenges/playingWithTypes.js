/*
// 💢💠💢Playing with Types💢💠💢

💎Task 1 💎:

Write a function stringToNumber that takes a string input and tries to convert it to a number. If the conversion fails, return "Not a number".
*/

function stringToNumber(input) {
  let result = parseFloat(input);
  return isNaN(result)
    ? `your input ${input} is not a number`
    : `your input ${input} is a number : ${result}`;
}
// console.log(stringToNumber("123"));
// console.log(stringToNumber("hello"));

/* 💠💠💠Here's an explanation of how the function works:💠💠💠

1. The parseFloat() function attempts to convert the input string to a floating-point number.
2. The isNaN() function checks if the result is "Not a Number" (NaN).
3. If the result is NaN, the function returns the string "Not a Number".
4. If the result is not NaN, the function returns the converted number.
 */

/* 


💎Task #2💎
Write a function 'flipBoolean' that takes any input and converts it to its boolean equivalent, then flips it. For example, true becomes false, 0 becomes true, etc.
*/

function flipBoolean(input) {
  return !Boolean(input);
}
// console.log(flipBoolean(true));
// console.log(flipBoolean(false));
// console.log(flipBoolean("hi"));
// console.log(flipBoolean(0));
// console.log(flipBoolean(null));
// console.log(flipBoolean(undefined));

/* 💠💠💠Here's an explanation of how the function works:💠💠💠

1. The Boolean() function converts the input to its boolean equivalent.
    - For example, Boolean("hello") returns true, while Boolean(0) returns false.
2. The ! operator flips the boolean value.
    - For example, !true returns false, while !false returns true.

*/
/* 
💎Task #3💎
Write a function 'whatAmI' that takes an input and returns a string describing its type after conversion. If it's a number, return "I'm a number", if it's a string return " I'm a string "
*/
function whatAmI(input) {
  let type = typeof input;
  if (type === "number") {
    return `I'm a number`;
  } else if (type === "string") {
    return `I'm a string`;
  } else {
    return `I'm a ${type}`;
  }
}

// console.log(whatAmI("123"));
// console.log(whatAmI(123));
// console.log(whatAmI("hi"));
// console.log(whatAmI(true));
// console.log(whatAmI(null));
// console.log(whatAmI(undefined));

/* 💠💠💠Here's an explanation of how the function works:💠💠💠

1. The typeof operator returns the type of the input as a string.
2. We check if the type is "number" or "string" and return the corresponding string.
3. If the type is neither "number" nor "string", we return a string that includes the actual type.


*/

/* 
💎Task #4💎
Write a function 'isItTruthy' that takes an input and returns "it's truth!" If the value is truthy in JavaScript, or "it's falsey! " If it's falsey
*/
function isItTruthy(input) {
  return input ? `It's truthy!` : `It's falsey`;
}
console.log(isItTruthy(123));
console.log(isItTruthy("hi"));
console.log(isItTruthy(true));
console.log(isItTruthy({}));
console.log(isItTruthy([]));
console.log(isItTruthy(0));
console.log(isItTruthy(""));
console.log(isItTruthy(false));
console.log(isItTruthy(null));
console.log(isItTruthy(undefined));
console.log(isItTruthy(NaN));

/* 💠💠💠Here's an explanation of how the function works:💠💠💠

1. The function uses the conditional (ternary) operator ? :.
2. The condition is simply the input value.
3. In JavaScript, truthy values are those that evaluate to true in a boolean context, such as non-zero numbers, non-empty strings, objects, and arrays.
4. Falsey values are those that evaluate to false, such as 0, "", null, undefined, and NaN.
5. If the input value is truthy, the function returns "it's truthy!".
6. If the input value is falsey, the function returns "it's falsey!".

*/

// 💢💠💠💠💠💠💢 Playing with Variables 💢💠💠💠💠💢

/*
💎💎Tasks:💎💎

Perform the following mathematical operations
on the provided variables a and b



1) Add

2) Subtract

3) Multiply

4) Divide

5) Increment

6) Decrement

7) Reminder

*/

// **** DO NOT CHANGE the values *****
const a = 18;
const b = 24;

// Addition of two values
function add() {
  let result = a + b;
  return result;
}

// Subtract small value from larger one
function subtract() {
  let result = b - a;
  return result;
}
function multiply() {
  let result = a * b;
  return result;
}

// Divide larger value by small
function divide() {
  let result = b / a;
  return result;
}

// Increase value of a by 1
function increment() {
  let result = a;
  result += 1;
  return result;
}

// Decrease value of b by 1
function decrement() {
  let result = b;
  result -= 1;
  return result;
}

// Divide larger value by small to find the reminder
function reminder() {
  let result = b % a;
  return result;
}

// 💢💠💠💠💠💠💢 Arrays and Methods 💢💠💠💠💠💢

/*
 
 
Utilise the inbuilt methods of arrays in Javascript to solve the below tasks:

*/

/*

💎💎Task 1: Array Filtering 💎💎

Write a function filterNumbers(arr) that returns only numbers from a mixed array

*/

function filterNumbers(arr) {
  // 1st way
  //   let myFilteredArray = arr.filter(Number.isFinite)
  //  return myFilteredArray

  // 2nd way

  let myFilteredArray = arr.filter((item) => typeof item === "number");
  return myFilteredArray;
}

/*

💎💎 Task 2: Array Reversal 💎💎

Write a function reverseArray(arr) that reverses the array

*/

function reverseArray(arr) {
  let myReverseArray = arr.reverse();
  return myReverseArray;
}

/*

💎💎 Task 3: Find Maximum in an Array 💎💎

Write a function findMax(arr) that returns the largest number in the array

*/

function findMax(arr) {
  return Math.max(...arr);
}

/*

💎💎 Task 4: Remove Duplicates from an Array 💎💎

Write a function removeDuplicates(arr) that returns a new array with all duplicates removed
*/

function removeDuplicates(arr) {
  return [...new Set(arr)];
}

/*


💎💎 Task 5: Flatten a Nested Array 💎💎

Write a function flattenArray(arr) that takes a nested array and returns a single flattened array
 
 */

function flattenArray(arr) {
  return arr.flat(Infinity);
}

// 💢💠💠💠💠💠💢 Loops 💢💠💠💠💠💢

/*

💎💎 Task 1: Sum of First N Natural Numbers 💎💎

Write a function sumOfN(n) that returns the sum of the first n natural numbers

*/
function sumOfN(n) {
  return (n * (n + 1)) / 2;
}

/*

💎💎Task 2: Multiplication Table💎💎

Write a function printMultiplicationTable(n) that returns the multiplication table for n. Values return in the array must be of the format 2 * 2 = 4
*/

function printMultiplicationTable(n) {
  let table = [];
  for (var i = 1; i <= 10; i++) {
    table.push(`${n} * ${i} = ${n * i}`);
  }
  return table;
}

/*

💎💎Task 3: Count Vowels in a String 💎💎

Write a function countVowels(str) that returns the number of vowels (in both lower & uppercase) in the given string str.
*/

function countVowels(str) {
  // 1st way
  //   return str.toLowerCase().split('').filter(char => 'aeiou'.includes(char)).length;

  // 2nd way

  let count = 0;
  let vowels = "aeiouAEIOU";
  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}
// 💢💠💠💢 Higher-Order Functions and Arrow Functions 💢💠💠💢


//All the following tasks must be strictly be writtern in arrow functions only.


/*
💎💎 Task 1: Using Array Methods 💎💎

Write a function squareNumbers(arr) using map() and arrow functions


*/
const squareNumbers = (arr) => arr.map((num) => num * num);

/*
💎💎Task 2: Custom Filter Function💎💎

Create a function filterEvenNumbers(arr) using filter() and arrow functions
*/
const filterEvenNumbers = (arr) => arr.filter((num) => num % 2 === 0);

/*
💎💎Task 3: Sum of Positive Numbers💎💎

Write a function sumPositiveNumbers(arr) that takes an array of numbers and returns the sum of all positive numbers using filter() and reduce() with arrow functions

*/
const sumPositiveNumbers = (arr) =>
  arr.filter((num) => num > 0).reduce((sum, num) => sum + num, 0);
/*
💎💎Task 4: Transform Array of Objects💎💎

Write a function getNames(arr) that takes an array of objects where each object has a name property, and returns an array of just the names using map() and arrow functions

*/
const getNames = (arr) => arr.map((item) => item.name);

/*
💎💎Task 5: Find the Longest Word💎💎

Write a function findLongestWord(arr) that takes an array of strings and returns the longest word using reduce() and an arrow function
*/

const findLongestWord = (arr) =>
  arr.reduce(
    (longest, current) => (current.length > longest.length ? current : longest),
    ""
  );


// 💢💠💠💠💠💠💢 Nested Functions and Context 💢💠💠💠💠💢

/*
💎💎Task 1: Using this in Objects💎💎

Create an object person with a method introduce() that uses this

additionally add properties of name & age that will result in Hi, my name is Hitesh and I am 19.5 years old on calling introduce()
*/
const person = {
  name: "Hitesh",
  age: 19.5,
  introduce() {
    return `Hi, my name is ${this.name} and I am ${this.age} years old`;
  },
};
/*
💎💎Task 2: Function within a function💎💎

Write a function outer() that contains another function inner() and returns a value of 'Inner function called' on calling outer()
*/

function outer() {
  function inner() {
    return "Inner function called";
  }

  return inner();
}

