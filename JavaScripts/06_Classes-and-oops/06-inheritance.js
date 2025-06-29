// ⭐In this we study [inheritance] in [class] | we study in prevoius lec little bit but in this we study in detail ⭐

// let create a class with name of user

// this is a basic [class] that is create a [username] and it also has a method in it which is [logme]

class User {
  // we study when class strt constructor should be made but it depends on you that you want to make it or not but most of the time [constructor] should be made

  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`USERNAME is ${this.username}`);
  }
}

// 🔺 this is basic calss of [user] but now if we want to make [LMS or e-commers] then sometime we made this user [admin or teacher or student] and for this we set [username] for [everyOne] in our projects requriement . So what we can do for this 🔻

// suppose we made him teacher in [LMS] project. So for this we want to get data from [user class] and we study we perform [inhertance] to get all data access

// in previuos lec we study to inherantance through [prototype] which is like [teacher.__proto__ = user]

// but now in classess there should be an easy step to perform [inheretance behaviou] in classess

// for this we simply use a keyword [extends] and that should be inherate with our class easily and acces all data of other class like 🔻

class Teacher extends User {
  // now it depends on it if you want to [not overwrite constructor] in this class  but most of the time we [overwrite] it bcz teacher have tachniquly a seprate [constructor]

  // now in [teacher creation] constructor there should be Obviously  we definitay get [username] from [User] and we also get [emeil and password too]

  constructor(username, email, password) {
    // now there should be a problem to access [the username] bcz it is in [user class] and we are in [teacher class] how to access it ?

    // we study in previous [call file] we use [call mehod] to get [data] from other [fn()] but in [class] the story is diff that why now a day no one can use [call method] bcz now we have class syntax and [class] give us an easy way to access [username] by using [super keyword] and in this we do not pass [this,username] like [call method] it will auto get [context of username ] by checking which class I should be [extend] and it will go to that class and get data from it's [constructor] and give it to [teacher class]. let see how 🔻

    super(username);

    // now to set email and password is an easy task like 🔻
    this.email = email;
    this.password = password;
  }

  //   now we also have a funcationality in teacher class is [addCourse]

  addCourse() {
    console.log(`A new course was added by ${this.username}`);
  }
}

// now we made an [object] from this teacher 🔺 let see 🔻

const chai = new Teacher("chai", "chai@g.com", "123");

chai.addCourse();

// 🔺output ==> A new course was added by chai

// now we access or try to create object through [user class]

const maslaChai = new User("masalaChai");

console.log(maslaChai); // User { username: 'masalaChai' }

maslaChai.logMe(); // USERNAME is masalaChai

chai.logMe(); //USERNAME is chai

// maslaChai.addCourse(); // ERROR : maslaChai.addCourse is not a function

console.log(chai === maslaChai); //false

// now we made chai from teacher now check is these both are equal?

console.log(chai === Teacher);

// 🔺 output is => false ==> bcz [chai] is come from his [instance] not equal to [teacher]

// now we check [instance of teacher]

console.log(chai instanceof Teacher);

// 🔺 now output is => true

// now [teacher] is also an instance of [user] so can [chai] is instance of [user]? let see 🔻

console.log(chai instanceof User);

// 🔺 output is => true
