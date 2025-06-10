// ⭐ In this file we understand some important things about [new] keyword and [this] keyword and how they work together in JavaScript. and also understand about [function] too. ⭐

//⚡ Every thing in Js i.e [array,string,etc] is [object]

// ⚡ Default behavior of Js is [prototayple] behaviour mean it go to above from child to parent and parent to grand parent untill give us some results. JS donot accept his defeat untill it get [null] value there for we say it go to [prototype] and get the value from there. So we can say that [prototype] is the parent of all objects in Js.

// ⚡ by this behavior our [this] keyword is also work. So when we use [this] keyword it will go to parent and get the value from there. So we can say that [this] keyword is also work like [prototype] and it will give us the value from parent.

// ⚡ thats why many people say that in [arrow function] we did not access [this] keyword. We did not access [this] in arrow fn() bcz prototype comes there.

// ⚡ it means we say that this behaviour give us access of [new] keyword or working of [new] keyword, we should get through this  behaviour, our [clasess] also work by this behaviour and our [this] keyword also wrok through this behaviour and [prototyple inhertance / inhertance in js comes] that also comes through this behaviour too.

// ⚡ So we can say that this behaviour is the main part of Js and it is the main part of Js that we should understand to understand Js.

// ⚡ Now we say in start that everything in JS is end of the day is [object] and we also say the properties [object]  has the same properties also has [string , array and everything in js ] bcz we say that everything in JS is [object] . These properties are useable or not this is the different thing but we study [inhertance] so which things we get from [grand parent] that should also avaliable for [child] it depends on [child] that it use or not.

// ⚡🪐⚡ Now we study an instersting thing that is the [functions] are also [object] or fn() are only functions ? bcz we say everyThing in [js] is object. So what about fn() ? let see 🔻

function multiplyBy5(num) {
  return num * 5;
}

// we know we can run this fn() like 🔻

multiplyBy5(5);

// but we could not do this 🔺 we can do something diff 🔻

multiplyBy5.power = 2;

// so can I do this ? This is an intresting thing that we can declear the function and lable also function but this [.] acess should come with [object] so can we say that IS this function is also an [object] ? the answer is yes.So let check it how the fn() is also an [object] by using console.log()🔻

console.log(multiplyBy5(5));
console.log(multiplyBy5.power); // 2
console.log(multiplyBy5.prototype); // {} empty object
console.log(typeof multiplyBy5); // function
console.log(typeof multiplyBy5.prototype); // object
console.log(typeof multiplyBy5.power); // number

// ⚡ So by this we understand in [js] everthing is an [object] . And the function should be function too and function also an [object] too.

/*

array , string, function ➡➡➡ Object ➡➡➡ null

// ⚡ So we can say that in [js] every thing is an object and object further get [null] reference of prototype

*/

// 🥝 Now write some code to under [This] now 🔻

function createUser(username, score) {
  this.username = username;
  // 🔺 This will create confiusion that which one is mine and which one is comes from parameter. So to overcome this confision we can simply write [this.] keyword with mine [varaiable].

  // ⚡ So by using [this] keyword the [current context] will be set

  this.score = score;
  // 🔺So we can say that [this] keyword is used to set the current context of the function and it will give us the value from parent if it is not avaliable in child.

  // 🥝 Now we can study just before that fn() is also an object. So it possible that if I want to inject some my own funcationality in this function. same as array which also have functaionality like [.length() etc.] bcz fn() is also object endof the day and object have properties and one propety should hold our function same like in array [silce : f slice()] and slice is a property and it hold a function in it and same like this can I declear my own function ?

  //  the answer is yes we can do this. So lets do this 🔻
}

createUser.prototype.increment = function () {
  this.score++;

  // 🔺 So we can say that this function will be available for all the objects which are created by this function. So we can say that this function is available for all the objects which are created by this function.
};
// the Question is why we use [this.score++] rather than [score++] ?

// the answer is🔻

// there should be a problem that when we use fn() which is [createUser] in our case and we pass values in this fn() which are [username] and [score] and now suppose there should be diff users of this fn() like 🔻

// const chai =  createUser("chai", 25);
// const tea =  createUser("tea", 250);

// ⚡ now bcz I inject [increment] in [createUser fn()] through [prototype] but problem is that on which user I proform increment on [score] now ? this should be little bit confiuse interaly.bcz [createUser] donot know that which score I should increse eather [25] 0r [250] bcz it have no context mean have no idea that how I proform increment on values or on which value mean [kis ny mujhy call kia h Q ky ho skta h koi  b call kr ly ]

//🔺 So for this we use [this.score++] bcz of current context mean which one call this [createUser] fn() go to that one and profrom increment for that

// now we understand that we can add our own properties and methods in the function by using [prototype] and we can use [this] keyword to set the current context of the function.

// so we add now another property to it which is this time is [printMe fn()]🔻

createUser.prototype.printMe = function () {
  console.log(`score is : ${this.score}`);
};

// 🪐🪐 vvv Imp 🪐🪐🪐

// when we use [map etc in array] we don't use [array.prototype.map()] we simply use [array.map()] we know !

// now in our case same like [map] in array we have [printMe and increment methods] which we create manully so can we access same as [array.map] concept?

// chai.printMe();

// the answer is yes we can access this method same as [array.map] concept. but there should be a problem when we use [chai.printMe()] it will give us an error that is [undefined] error. To overcome this problem when we transfer values from fn() to [chai] variable on [line#77] on that point we didnot tell him that [ky mery pass ya additionl properties aai hn] which are [printMe and increament]

// This should be tell him and for this to tell him about these properties we use [new] keyword now he know that what should I do on [line#98] bcz now he had all properties injected in it [mean chai and tea both have all the properties which are injected in [createUser fn()]]

// So we can say that [new] keyword is used to create a new object and it will also inject all the properties and methods which are defined in the function by using [prototype] and it will also set the current context of the function to the new object.

// complete code is 🔻

const chai = new createUser("chai", 25);
const tea = new createUser("tea", 250);
chai.printMe();

// 🔺now this code didnot give us any error

// 🪐🥝🪐SOme notes about [new keyword funcationality]🪐🥝🪐

/*

Here's what happens behind the scenes when the new keyword is used:

🪐A new object is created: The new keyword initiates the creation of a new JavaScript object.

🪐A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

🪐The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

🪐The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/
