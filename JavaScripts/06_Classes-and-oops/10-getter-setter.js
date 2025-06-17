//            ⭐⭐⭐⭐ 1st Method⭐⭐⭐⭐

// 💢💢we call him [class base] syntaxt💢💢💢

class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }
  //after reading below untill Line# 21 now we read here
  //[getter and setter are comes in every class byDefault]

  //   now apply geter and seter on our props and when we aplly getter and setter on props these props becomes [methods] like 🔻

  // for [getter] we use keyword [ get ]

  get password() {
    return `${this._password}adil`;
    // return this._password.toUpperCase();
  }

  //   now we use [setter] bcz when we declear [getter] then now it is compulesery to decler [setter] other wise it will give an [error] which is [ TypeError: Cannot set property password of #<User> which has only a [getter] at new User ] to overcome this [ERROR] we will define [setter]. let see how 🔻

  set password(value) {
    this._password = value;
    //   🔺 when we do this , it will give us [error] also which is  ===>[RangeError: Maximum call stack size exceeded] bcz of we set [password] in [constructor] like [this.password = password] and aslo set [password] in [setter] too like [ this.password = value] that why it will give us an error bcz when we set [value] in setter then there should be problem that undering setting the value the [constructor] should call again and again bcz we set value in [constructor] and [setter] too that why they strt race   b/w each other

    // now how to overcome this ERROR 🔻

    // for this we made [new property] during [setting password] bcz now actually there should be not effected that what should user give you and what we call him in [constructor] . for this we go to line# 20 and use [this._pasword] and be this we almost made a new variable and that pasword/variable set our [values].
    // now by doing this our work should not be completed bcz we [set] value but when we [get] value it will create problem bcz our [getter] also tell us that give me [pasword] too. for this we also do this by also giving [this._pasword] into [get] at line#14

    // in this we understand an intersting case that user give us a value but we will give him our customize value on that we say work this value mean user give us data we control by our own desire this is an intersting snerio
  }
  // we also do this for [email] too like 🔻
  get email() {
    return this._email.toUpperCase();
  }
  set email(value) {
    this._email = value;
  }

  // ⚡⚡ now go to line#49 for further study
}

// const adil = new User("adil@adil.ai", "123");
const adil = new User("adil@adil.ai", "abc");

console.log(adil.password);
console.log(adil.email);

// ⭐What is the purpose of [getter and setter]⭐

//⚡ some time we want fine grain control that if anyone want to get my password and i will return that i will not tell you password or return the encripted password to it so many cases there where we made a [class] and we have some [props] in this class and we did not want to give access of these props to everyone accept some peoples or if someOne want to get access then you will put you customise code in it . So this type of many secenerios comes and for this our [getter and setters ] actually comes .

// ⚡ now what are getter and setters

// let suppose i will not give access of [password] to anyone for this how we will give the [error] for this we use [geter and seter]

// go to Line # 6 for [getter and setter]

// welocme back

//                    💢💢💢💢

// 🪐Imp note🪐

// name of [constructor] prop and [get and set method should be same ]

// when we write [getter] it is compulsery to write [setter] too.

// [getter] always return values

// [setter] does not return any value this will set the value by passing variable .

// when we set email by [this.email] there should be a race start   b/w constructor and [getter and setter] there for we use [this._email] and also for password too.

//                    💢💢💢💢

//            ⭐⭐⭐⭐ 2nd Method⭐⭐⭐⭐

// 💢💢 We also call him [function base] syntaxt 💢💢💢

// the above syntax is the [ES6] syntax for [getter and setter] but we can also use the old syntax like 🔻

// in this we see how we define [getter and setter] through properties in [class]  🔻

// we didinot call him old syntax bcz it is not old syntax it is the [ES5] syntax and we can use this syntax in [ES6] too and it is also the [ES6] syntax too but we did not use this syntax in [ES6] bcz it is not the [clean code] and it is not the [readable code] so we use the above syntax which is the [ES6] syntax and it is also the [clean code] and also the [readable code] too. so we use this syntax 🔻

// but today we will see many of code file use this syntax so we will see this syntax too 🔻

// we know earily day we didnot have [classes] we have only [function] so we use this syntax in [function]  like🔻

function newUser(email, password) {
  this._email = email;
  this._password = password;
  // 🔺 we understand this

  // but early days how we use [getter and setter] in [function]? bcz now we have [get and set] methods bcz we have [class] now availabe. so now let see how we use in [functions] 🔻
  //   now we use [getter and setter] in this function like 🔻

  //   we use [Object.defineProperty] to define the [getter and setter] in this function like 🔻

  // in this we 1st give him the [current context] which is [this]  bcz it did not have its own [context] there for we use [this] and 2nd what property we want to overwrite . suppose we want to overwirte [email] for this we directly write ['email'] in doublecots. it is not nessasery to write [_email] bcz it will byown check it that it is the [email] prop and it will overwrite it. so we write ['email'] in doublecots and then we give him the 3rd argument which is the [object] and in this object we give him the [get] and [set] methods like 🔻

  Object.defineProperty(this, "password", {
    get: function () {
      return `${this._password}adil`;
    },
    set: function (value) {
      this._password = value;
    },
  });

  Object.defineProperty(this, "email", {
    // now this is our [getter] method
    get: function () {
      return this._email.toUpperCase();
    },
    // now this is our [setter] method
    set: function (value) {
      this._email = value;
    },
  });
}

// now we made an object and we see how it work

const adil2 = new newUser("adil@ai.com", "89567");

console.log(adil2.email);

//            ⭐⭐⭐⭐ 3rd Method⭐⭐⭐⭐

// 💢💢We also call him [object base] syntaxt 💢💢💢

const newUser2 = {
  //   now we made an object and we see how it work
  // we use hard coded values in this object bcz without hard coded value we did not make [object] but 1 way is possible we use [object.create] mean use [factory fn()] to give values to object but now we only use 'hard coded ' value🔻
  _email: "a@ai.ai",
  _password: "12ab45cd",

  // now I now I made a object that have values and I did not want that everyone can access these values so I will use [getter and setter] in this object for my requirement let see how we can do this 🔻

  // now we define [getter] 1st

  get email() {
    return this._email.toUpperCase();
  },

  // now we define [setter]

  set email(value) {
    this._email = value;
  },
};

const tea = Object.create(newUser2);

console.log(tea.email); // this will give us the value of email in upper case

//      🪐🪐🪐🪐 IMP NOTS 🪐🪐🪐🪐🪐

// we use 90% [class base syntaxt] in our code and 10% [function base syntaxt] and now rarely use [object base syntaxt]

// but we can use all 3 syntaxt in our code and we can use them in our code as per our requirement

//                        💢⭐🪐💢
