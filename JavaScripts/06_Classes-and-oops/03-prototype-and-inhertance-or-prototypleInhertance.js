// ⭐In this we purely discuss about prototype⭐

// Prototype is a mechanism in JavaScript that allows you to add properties and methods to existing objects.
// Every JavaScript object has a prototype, which is itself an object. When you access a property or method on an object, JavaScript first checks the object itself, and if it doesn't find it, it looks at the object's prototype, and so on up the prototype chain.

// ⚡ Now our goal is to understand how prototype works in JavaScript for this we have a [string] variable called myName but we add some extra spaces at the end of the string and we want to remove those spaces without using the built-in trim() method.
// ⚡ We will create a custom trim method which is in our case is [trueLength] using prototype.

// ⚡ let explore how can I do that 🔻

// let myName = "adil     ";

// console.log(myName.length); //10
// console.log(myName.truelength);

// 🔺 we can come to this a after few sec bcz to undersatnd this we should explore an other example which is in [array] bcz we already study [array] in [02-object-understanding-in-advanceOne.js] file. let see  how it work 🔻

let myHeros = ["thor", "spiderman"];

// let suppose now make an object here 🔻

let heroPower = {
  thor: "hamer",
  spiderman: "sling",

  //   now I want to define a method So the Questions is how can I do this?

  getSpiderPower: function () {
    console.log(`spidy power is ${this.spiderman}`);

    // 🔺 [this] comes bcz we are in [heropower object] and that is [current context ] that why [this] comes
  },
};

// now can I have any method access availabity that I can use [heroPower.adil()] ? the answer is [no] but we can inject it by myself bcz we study in previous. let see how 🔻

//  we study in past when we want to add any property we can use for example for object we write like [heropower.prototype.adil = function(){}] but this time I want that when ever any one declear any object this property which i declear should be applied on all object by default.

// bcz we study when we add property we specifically metions the object name and that property only show i that specific obbject but this time I want if any one create new object this property should be shown on that object also and also in [function ,string, array too] bcz we discuss end of the day every thing in JS is [object] and all things also go to object end of the day bcz we study in diagram too [array , string, function ➡➡➡ Object ➡➡➡ null ] it means when we add or write property in [object] it should automatically injected to array , string, fn() too . let see how we can do this 🔻

// now we create/add a prototype

Object.prototype.adil = function () {
  console.log(`Adil is present in all objects`);
};

// we one by one checks in object and array etc. can this property comes are not

// we have an object which is [heroPower] let see can he has this 🔻

// heroPower.adil();

// 🔺 output ==> Adil is present in all objects

// it means this will comes in object

// now we see can we access in array and we also declear an array above . let see 🔻

// myHeros.adil();

// 🔺 output ==> Adil is present in all objects

// it means this will comes in array too and over theory concept is clear that every thing endof the day go through [object]

// now we check another concept which is when we give prop to [object] it can be access by everyone and now we give an other prop to only [array] can our [object] acess this ? according to therory this should not get this prop but we see it in exprement .so check this concept 🔻

// we add prop to [array]

Array.prototype.heyAdil = function () {
  console.log(`hy adil this is array prop`);
};

myHeros.heyAdil();

// 🔺output ==> hy adil this is array prop ===> it means this should work on array now check on object🔻

// heroPower.heyAdil();

// 🔺 this will give us an erorr ==> heroPower.heyAdil is not a function ===> which means this is not possible and also this prop is not available for [string and function too]

// ⭐ Now we little bit discuss on inhertance ⭐

// what is inhertance or prototyple inhertance?

// 🪐In this we can aceess all prop of other objects this is inhertance or prototyple inhertance

// let see an exmaple we understand it 🔻

const user = {
  name: "chai",
  email: "chai@google.com",
};
const teacher = {
  makeVideo: true,
};
const teachingSupport = {
  isAvaliable: false,
};
const TASupport = {
  makeAssingment: "JS assingment",
  fullTime: true,

  // we can use 2 time [ _ ] and then write [proto] and then use 2 time [ _ ] and then assing the object which we want to acess its props for example 🔻

  __proto__: teachingSupport,
};

// we can inherate here outside too like 🔻

teacher.__proto__ = user;

// 🔺now [teacher] have full access of [user] and this is called [inhertance] mean now you can access any other object props

// ⚡The above 🔺 approch is outdated now a days but it does not mean that no one can use this but this is an outdated⚡

// 🪐🥝🪐Now we understand new approch mean [modern syntxt]🪐🥝🪐

// syntax
/*

Object.setPrototypeOf(
  "give object name which acess all prop",
  "give object which share its own prop"
);

*/

// now we want that [teachingSupport] can acess / inherate props of [teacher] let see how ?

Object.setPrototypeOf(teachingSupport, teacher);

// ☔Now we solve our 1st problem which we discuss on Line # 11☔

let anotherUsername = "chaiAurCode     ";

String.prototype.trueLength = function () {
  console.log(`${this}`);
  console.log(`True length is : ${this.trim().length}`);
};

anotherUsername.trueLength();

// 🔺output is 🔻
/*

chaiAurCode  ==> this is current context value of [this] keyword

True length is : 11

*/

"adil".trueLength();

// 🔺output is 🔻
/*

adil  ==> this is current context value of [this] keyword

True length is : 4

*/

"iceTea   ".trueLength();
// 🔺output is 🔻
/*

iceTea  ==> this is current context value of [this] keyword

True length is : 6

*/
