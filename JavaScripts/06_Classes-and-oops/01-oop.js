// ⭐ object Literal ⭐

// what is an object literal?

// An object literal is a way to define an object in JavaScript using a simple syntax.
// It consists of a pair of curly braces containing key-value pairs.

const person = {
  name: "John",
  age: 30,
  isStudent: false,
  greet: function () {
    console.log(`Hello, my name is ${this.name}`);
  },
};

// console.log(person.greet());

// ⭐ Constructor Function ⭐

// 🪐 A constructor function in JavaScript is a special function used to create and initialize objects. When you call it with the new keyword, it creates a new object and sets up properties and methods for that object.

//⚡ it means when we use [date] we use [new] keyword or use [promise] we use [new] keyword and many other concepts where we use [new] keyword all are using [constructor function] if form of [new] keyword. So this [new] keyword is basically [Constructor Function]

// 🪐 This can allow us that we made multiple instance by only one object literal. In simle word you can easily create many objects with the same structure but different values

//🪐 But Sometime situation comes specailly [promise or date] then there we need new instance compulcery rather then effecting old values.SO the [new] keyword is comes in our work for this situation for making new [context] for us and we also call this [new] is our [constructor function]

// ⚡ now look how this [constructor fn() ] comes in our work

// We see this in objects bcz we did't study classes thats why we see it in objeects🔻

function user(username, loginCount, isLoggedIn) {
  // we see most of the time name of variable and passing values name are same so in this situation there should be an issue that how we total that what are varaibales inside the function and what variables you passess for this problem we change our varaibale name this is simple but we didn't want to change name we use same name of both variable and value for this we use [this.username] and [this] keyword shows this is my variable name which I give to username value leet see how 🔻

  this.username = username;

  // 🔺 So in leftHand Side this is our variable  and in right hand side this is the value which we pass

  // bcz we know when we run/log [this] key word in terminal it will give {} empt object . So by using [this.] we will fill up this empty object by passing values

  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  //   now we discuss instersting thing from this if we want then we return [this] keyword🔻

  //   but an intersting thing if we didnot [return this] then it should be implectely [return] bydefault. mean if we did not [return this] then it should also give us value bcz bedafult [this] should be [return]

  //   but good practies is to [return] by own and this concept should clear what should be values comes and from where these values should comes for this we use return by own 🔻

  return this;

  //🔺 after doing this what will happen ==> when we return [this] then that empty object{} that was we had we passOn and now which one play with this that persone should easily access the value from [this] object which was instially empty but we fullfill with user diteal so that person access all user detaile for [this] keyword
}

// Now we see when we make two varaibles and pass our above fn() which is user() so see what happend🔻

// const userOne = user("adil", 34, true);
// const userTwo = user("zono", 2, false);

// console.log(userOne);

/* 🔺 First time when we use or decaler only [userOne] it will give us 🔻

username: 'adil',
loginCount: 34,
isLoggedIn: true

📀 But when we declaer userTwo variable and pass it to user() and this time we change the values in userTwo bcz we use it for other values.There should be problem comes which is when we call [userOne] after declearation of [userTwo] the values of [userOne] are [overwrite ] by [userTwo] value and this is the major problem 

// So to solve this issue we use [Constructor function]. This [cfn()] give us new [instance] mean [new copy] and by using this copy is should be yours and by this orignal should not be effected. So how to do this let see 🔻



*/

const userOne = new user("adil", 34, true);
const userTwo = new user("zono", 2, false);

// console.log(userOne);

// 🔺 This will give us [new instance] and take old instance to it

// console.log(userTwo);

// 🔺 And our [userTwo] has it own [new instance/copy]

// ⭐Now its clear that [constructor fn()] every time give us sepread copy by using this we can do our work old copy did not effected⭐

// ⚡🪐⚡Some Imp lines for [new] keyword⚡🪐⚡

//1) 🪐 When we use [new] keyword then 1st of all [empty object] created and we call it [instance mean object]

//2) 🪐 We call [constructor fn()] by using [new] keyword and this   will pack our all arrguments and give to us

//3) 🪐 In this step our all arguments should be injected in  [this] keyword

//4) 🪐 In this step we will get them in fn() which we see in above example 🔺

// 🥝 Now when we use this then what will happen let see 🔻

console.log(userOne.constructor);

// output : [Function: user] => it means it tell us I am own function mean cunstrorctor is simply a function that we create by this we use [new] keyword which is [constroctor] and we get copy of our function and us this function without effecting orignal fn()
