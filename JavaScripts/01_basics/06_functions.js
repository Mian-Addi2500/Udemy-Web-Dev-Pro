// Simple function

// function defination 🔻

function addTwoNumbers(num1, num2) {
  console.log(num1 + num2);
}

// now how to exicute a function 🔻

addTwoNumbers;

// 🔺this will nothing to output bcz we should give only referance of the function

// addTwoNumbers(2, 3);

// 🔺output : 5 => this will give us output bcz we exicute the function by using () after function name

// now can we store 🔺 into a variable ? let see 🔻

// const result = addTwoNumbers(2, 4);

// 🔺output : 6 => so it means we store it to a variable too

// now we check what is the value in 🔺result variable ? 🔻
// console.log("Result :", result);

// 🔺output : Result : undefined => In result the value should be [undefined]. How in result value should be [undefined]? This is the big instersting consept that what we return back from the function? Sometime people think that (6) should b return bcz we should[console.log] so this value should be return ! No no this is the [major mistake].It is not mean to [print] the [console] the [fuction] should also return the same value like [console] this is wrong concept

// [Return] is another Concept and [console] is simply to print the console value. Now we write a function with another way to understand the [return ]concept 🔻

// let see how return works 🔻

function subTwoNumbers(num1, num2) {
  // 1st way 🔻
  //   let sub = num1 - num2;
  //   return sub;
  //   this return means when function when exicute after that return me this [sub]

  //   2nd way 🔻

  return num1 - num2;

  //   console.log("adil");
  //🔺after return statement function donot do any think yes before return we should do everything
}
// now we check out the value in result1 🔻

const result = subTwoNumbers(8, 2);
// console.log("Result :", result);

// 🔺output : Result : 6 => now the value in [result] should be actual value
// 🔺 but donot print anything bcz we don't say him for [console.log] should do

// Now how to take diff method of passing parameter in to function🔻

function loginUserMessage(username) {
  return `${username} just loggedIn`;
}
// now exicute this function 🔻
loginUserMessage("adil");

// 🔺Nothing comes in output why? bcz function exicuted but that function returns the values bcz we say in function defination that return the value so the function return the value but we donot say anywhere that to print value or store in any variable

// So we print the value by raping function into console.log 🔻

// console.log(loginUserMessage("adil"));

// 🔺output : adil just loggedIn => now that value which returns I give instructions to print it so now it should b print

// now if anyone donot give value to function then what will happend🔻

// console.log(loginUserMessage());

// 🔺 output : [undefined] just loggedIn => then undefined should comes not null comes ok

// let see brefe example if no one can give value to function 🔻

// 1st example 🔻
function logIn(usernmae) {
  if (!usernmae) {
    console.log("please enter username");
    return;
  }
  return `hellow ${usernmae}`;
}

// 2nd example in this we give by default parameter value bcz if anyone donot give any parameter then it will take by default parameter value 🔻

function logInFn(username = "sam") {
  return `${username} just logIn`;
}
// console.log(logInFn());
// 🔺output : sam just logIn

// console.log(logInFn("zono"));

// 🔺output : zono just logIn => this will over write value

// 💢💠Now learn about [shopping cart] concept 🔻

// In future we make projects and in that projects mostly a shopping cart concept use in e-commerse app in shopping cart user add tings one by one so we do not know how many number of items comes we just add price of all items. So, this situation is most common where we do not know how many items(argument) comes So according to this we should ready our parameters. In above function🔺 like addtwonumber() we know to add 2 numbers but in shopping cart this is not conform so, let see how to tackel this 🔻

function calculateCartPrice(...num1) {
  return num1;
}

// console.log(calculateCartPrice(200, 500, 400));

// 🔺output : [ 200, 500, 400 ] => we use [rest operator ...] and this operator can take our all values into an array

// ⏳👁‍🗨 [...] is used for both [Rest and Sepred] operator

// now understand concept of passing object into function🔻

const user = {
  username: "adil",
  price: 999,
};

function handelObject(anyObject) {
  return `usernmae is ${anyObject.username} and price is ${anyObject.price}`;
}

// console.log(handelObject(user));

// 🔺output : usernmae is adil and price is 999 => In this we pass object in our function i.e [handelObject(user)]  then it will take all properties of object and now [anyObject.username] and [anyObject.price] should work

// Now this is not nessasary to create object seprately we directly pass object to function too. 🔻

// console.log(
//   handelObject({
//     username: "mian",
//     price: 799,
//   })
// );

// 🔺 output : usernmae is mian and price is 799

// now understand concept of passing Array into function🔻

const myNewArr = [101, 299, 32, 466, 555];

function returnSecondValueFromArray(getArray) {
  return getArray[1];
}
// console.log(returnSecondValueFromArray(myNewArr));
// 🔺 output : 299

// Now we directly pass array like object to function too. 🔻

// console.log(returnSecondValueFromArray([200, 300, 500, 99]));
// 🔺 output : 300

// 💢💠 Now understand [Arrow functions] and [This] keyword 🔻

// 💢💠💢 1st understand [this keyword]🔻

const myUser = {
  username: "adil",
  price: 599,
  welcomeMessage: function () {
    console.log(`${this.username} , welcome to website`);
    // when we reffer current contex which is in our case now is [complete myUser].so if we reffer [current context] [currentContext means simple values mean the variables in our object and what these variables should hold the values this is our current context like usernmae or price]. So for this we use [this] keyword like [this.username] or [this.price]
  },
};

// myUser.welcomeMessage();

// 🔺output : adil , welcome to website

// if someone change username value then what will happens🔻

myUser.username = "zono";
// myUser.welcomeMessage();

// 🔺output : zono , welcome to website => now current context mean values in variable should changed so we see [zono] rather then [adil]

// now we understand if I print this in our function 1st let see what should b print 🔻

const myObj = {
  username: "kamil",
  price: 599,
  welcomeMessage: function () {
    console.log(`${this.username} , welcome to website`);
    console.log(this);
  },
};

// myObj.welcomeMessage();

/*
🔺output is 🔻

kamil , welcome to website
{
  username: 'kamil',
  price: 599,
  welcomeMessage: [Function: welcomeMessage]
}


*/

// now when we change the current context from [kamil] to [tehmina] now let see what should comes in [this]🔻

myObj.username = "tehmina";
// myObj.welcomeMessage();

/*
🔺output is 🔻

tehmina , welcome to website
{
  username: 'tehmina',
  price: 599,
  welcomeMessage: [Function: welcomeMessage]
}

*/

// now let see what shoul be the value of [this] mean now what is current context right now 🔻

// console.log(this);

//⏳👁‍🗨 🔺output : {} => bcz we are in [node enviorment] so our [this] keyword reffer to an empty object bcz there is no context in globle right now therefor it is an empty

// ⏳👁‍🗨 but In [browser] the globle object is [window] object and in browser the value of [this] should be [Window object]

// Now let see if we print [this] keyword in function then what should happend? 🔻

function chai() {
  console.log(this);
}
// chai();
/*
🔺output is🔻

<ref *1> Object [global] {
  global: [Circular *1],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  structuredClone: [Getter/Setter],
  atob: [Getter/Setter],
  btoa: [Getter/Setter],
  performance: [Getter/Setter],
  fetch: [Function: fetch],
  navigator: [Getter],
  crypto: [Getter]
}

*/
//🔺 so when we print [this] in any [function ]in [node enviornment] then we get many values it mean [this] has some thing inside in it

// now let see if I use [this] keyword concept in function rather then object so what will happend ? 🔻
function myFn() {
  let username = "adil";
  console.log(this.username);
}
// myFn();
// 🔺output : undefined => It means [this] keyword concept only work in object but i do not use this in function right now

// 💢💠💢 now we should discuse [Arrow function]. This is 2nd way of function decleration🔻

const addTwo = (num1, num2) => {
  return num1 + num2;
};
// console.log(addTwo(3, 7));
// 🔺 output : 10

// now understand concept of [Implesent Return] in arrow function🔻

// 1st way of [Implesent Return]🔻

const addThree = (num1, num2, num3) => num1 + num2 + num3;
// console.log(addThree(1, 5, 3));

// 🔺 output : 9 => Mean in this we have 1 line of code so we don't use [return] keyword and directly write code in 1 line

//💢💠 2nd way of [Implesent Return]🔻

const subTwo = (num1, num2) => num1 - num2;
// console.log(subTwo(8, 1));
// 🔺 output : 7 => Mean in this we have 1 line of code so we don't use [return] keyword and directly write code in 1 line by using this syntext of arrow function ()=>()

// What if when we return [Object] in arrow function ? 🔻

const myNewObj = (num1, num2) => ({ username: "adil" });
// console.log(myNewObj());
//🔺 output : { username: 'adil' }

//💠💠➖➖➖➖➖➖💢🔰 IIFE 🔰💢➖➖➖➖➖➖💠💠

// now we understand concept of [Immediately Invoked Function Expression (IIFE)] 🔻

// what is IIFE means ? => It when we write function we immediatly run this function

// There should b a question also that there are many methods of running the function then why we need this concept [IIFE]? => Mostly we write things that have to write a file in which only a [database] connection and we want when our app strt then immdeatly our [database] connection start in our file.

// And 1 more reson for this [iife] is that many time in our [globle scope] there are some variables dicleared and some it's happen we right some thing in that function and we don't want that in our function our [golbal] create some problems bcz [global scope] always available. that's why which we decleared in our function mostly [plouted] with [global scope].

// So these are 2 resons 🔺 1) that's we don't need ploution from [global scope] that's why we create our seprate scope bcz in function scope automaticaly created and 2) I want that the function immdeatly exicute there

// now how write [iffe] 🔻

// syntext => ()(); => this is [iife] and note that 💠[;]💠 at the end of [iffe] must other wise if we write next fuction or [iffe] too but it give us error so don't forget this [;] at the end of [iffe] let see how it work 🔻

(function connection() {
  console.log(`DB Connected`);
})();

// 🔺 output : DB Connected => this is also calle [named iffe] bcz it has [connection] as a name

// now let see when we use [arrow function] then [iffe] work or not ? Let see 🔻

(() => {
  console.log(`DB Connected Two`);
})();

// 🔺 output : DB Connected Two => This is called [simple iffe] bczit has no name

// now how to give parameter to [iffe] 🔻

((name) => {
  console.log(`DB Connected ${name}`);
})("adil");

// 🔺 output : DB Connected Adil
