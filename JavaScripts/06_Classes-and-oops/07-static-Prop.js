// ⭐In this file we study static properties of classess⭐

class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`USERNAME is ${this.username}`);
  }

  //   now I want when a [user] create and then instantaly this [user] get a unique [ID].

  // when we made user in [DB] then [MongoDB] automatically attach    [ _ID ] so suppose we made that functionality there 🔻

  //   we already study we can access all method of class by this like Line # 30

  // now most of the time we have many situation where  did not give an access of that fn() which produce [unique ID] to every that [object] which is [instatiate] from this [class] which is in our case is [User] for this thing we simply use [static]  keyword infront of that method name . and this [keyword] stop the access of that method  like 🔻

  static createId() {
    let id = Math.floor(Math.random() * 100 + 1);
    return id;
  }

  //   🔺 now this will give an error on Line#30 which is ==> adil.createId is not a function ===> which means we donot access that method now
}

const adil = new User("adil");

// console.log(adil.createId());

// now check can we use [inhertance] then we access the [createID] method let see 🔻

class Teacher extends User {
  constructor(username, email) {
    super(username);
    this.email = email;
  }
}

// now we access the [method] bcz [Teacher class] extends with [User]

const iPhone = new Teacher("iPhone", "iPhone@apple.com");

console.log(iPhone);

// 🔺output :  Teacher { username: 'iPhone', email: 'iPhone@apple.com' }

// now try to access [logMe] method

iPhone.logMe();

// 🔺output : USERNAME is iPhone

// now try to access [createId] method

// console.log(iPhone.createId());

//   🔺 now this will also give an error  which is ==> iPhone.createId is not a function ===> which means we donot access that method now bcz it is [static]
