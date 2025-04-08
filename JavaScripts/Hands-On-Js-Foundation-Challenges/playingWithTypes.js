/* 
💎Task #1💎

write a function 'stringToNumber' that take string input and tries to convert it to a number. If the conversation fails, return not a number
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
console.log(isItTruthy('hi'));
console.log(isItTruthy(true));
console.log(isItTruthy({}));
console.log(isItTruthy([]));
console.log(isItTruthy(0));
console.log(isItTruthy(''));
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
