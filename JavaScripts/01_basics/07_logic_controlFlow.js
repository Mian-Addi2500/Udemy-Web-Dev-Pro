//💠💠➖➖➖➖💢🔰 If and else statement 🔰💢➖➖➖➖💠💠

// syntx => 🔻
/*

if (condition) {

}else{

}

*/
// now Question is what is ment by [condition] => it means comparision b/w two or more value rather it should be [true] or [false] if comparision is [true] then [if] statment work other wise [else] statment work

// Now we understand that how many types of comparision should be possible 🔻

// there are some comparision operators 🔻

/*
<, >, <=, >=, ==, !=, ===, !==, &&, ||

*/

// now see some examples of [if] statment

const temperator = 41;
if (temperator < 50) {
  //   console.log("less than 50");
} else {
  console.log("temperator is greater than 50");
}

// 🔺output : less than 50

// now short hand notation of [if/else] 🔻

const blnc = 1000;

// if (blnc > 500) console.log("test");

// now check more then 2 conditions in [nested elseif]🔻

if (blnc < 500) {
  console.log(`less than 500`);
} else if (blnc < 750) {
  console.log(`less than 750`);
} else if (blnc < 900) {
  console.log(`less than 900`);
} else {
  //   console.log(`less than 1200`);
}

// 🔺output : less than 1200

// now we understand how we use this [if/else] concept in real life ,like if we have multiple conditions then how we check the condition🔻

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (userLoggedIn && debitCard && 2 == 2) {
  //   console.log(`allow to buy courses`);
}
// 🔺output : allow to buy courses

if (loggedInFromEmail || loggedInFromGoogle) {
  //   console.log(`User Logged in`);
}

// 🔺output : User Logged in

//💠💠➖➖➖➖💢🔰 Switch statement 🔰💢➖➖➖➖💠💠

// syntax
/*
switch (key) {
    case value:
        
        break;

    default:
        break;
}

*/

// In [switch statement] we have key and we check it's multiple values let see how it work 🔻

const month = 3;
switch (month) {
  case 1:
    console.log(`jan`);

    break;
  case 2:
    console.log(`feb`);

    break;
  case 3:
    // console.log(`mar`);

    break;
  case 4:
    console.log(`apr`);

    break;
  case 5:
    console.log(`may`);

    break;

  default:
    console.log(`default case match`);

    break;
}

// 🔺 output : mar

//💠💠➖➖➖➖💢🔰 truthy or falsy values 🔰💢➖➖➖➖💠💠

// Falsy Value 🔻

// fasle, 0, -0, BigInt 0n, "", null, undefined, NaN

// and all other values are truthy rather then these 🔺

//  truthy Value🔻

// "0", 'false', " ", [], {}, function(){}

// now how to check [empty array] in [if] condition 🔻

const emptyArr = [];
if (emptyArr.length === 0) {
  //   console.log(`Array is empty`);
}
// 🔺output : Array is empty

// now how to check [empty object] in [if] condition 🔻

const emptyObj = {};

if (Object.keys(emptyObj).length === 0) {
  //   console.log(`Object is empty `);
}
// 🔺Output : Object is empty => we see in object file that if we use [Object.keys()] and pass [our object name] in [keys]  then we get the [array of keys of our object] . now we have array of keys of an object so we check the length of an array in our [if] condition

// now we also discuse some other [true] conditions 🔻

/*

false == 0   => true

false == ''   => true

0 == ''    => true
*/

//💠💠➖➖💢🔰 Nullish Coalescing Operator (??) 🔰💢➖➖💠💠

// In this all story is on [null and undefined] let see how it work 🔻

// for both values 🔻

let val1;
val1 = 5 ?? 10;

// console.log(val1);
//🔺  output : 5

// For [null] 🔻

let val2;
val2 = null ?? 10;
// console.log(val2);
//🔺  output : 10

// for [undefined] 🔻

let val3;
val3 = undefined ?? 15;

// console.log(val3);
//🔺  output : 15 => this concept is created when we call from [database] or specially use some [fire base] or [app write] then we don't have directly responce. We get 2 values so, there should be a chance that we get [null] response or should [response] doesn't come to me mean [undefined] So in this case our complete code structure should be effected. So for these sitautaions this concept is specially made that we treate value in it that if the value is [null] then assing [null] inside him (ta ky mn us hisab sy case ko adjest kr ln) if [undefined] then ok or if any [value] comes then accessing the [value] to it. So for this special case which study in [database] furthure.

//💠💠➖➖➖➖💢🔰 Terniary Operator (?) 🔰💢➖➖➖➖💠💠

// Syntex

// condition ? true : false;

// let see the example of [terniary operator]

const iceTeaPrice = 100;

// iceTeaPrice <= 80 ? console.log(`less than 80`) : console.log(`more than 80`);

// 🔺ouput : more than 80
