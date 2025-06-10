// ⭐In this we understand about classes⭐

class User {
  //⚡ in [classess] we use all things means [object,fn,array etc]

  //⚡ when [constructor] call ?
  //⚡ jessy hi class sy aik object insitilize hoga mean jo wo [new] keyword h wo jessy hi hm kam mn lean gy wesy hi [constructor] apny app call ho jata h

  constructor(username, email, password) {
    // in this we also write [context] too otherwise this will not work

    this.username = username;
    this.email = email;
    this.password = password;
  }

  //   🔺 this is our basic [constructor] by the way every time it is not nessary to write [constructor] but if classes gives us oppurtunaty so take it.

  // now after [constructor] we have an other method to [encriptPassword]

  encryptPassword() {
    return `${this.password}abc`;
  }
  changeUsername() {
    return `${this.username.toUpperCase()}`;
  }
}

// now we made a user from this 🔻

const chai = new User("chai", "g@g.com", "123");
console.log(chai); //User { username: 'chai', email: 'g@g.com', password: '123' }

console.log(chai.encryptPassword()); //123abc
console.log(chai.changeUsername()); //CHAI

// ⭐Behind the sceen⭐

// ⚡ how the above code write when we have not the [class] keyword in js let see 🔻

function User1(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}
User1.prototype.encryptPassword = function () {
  return `${this.password}abc`;
};
User1.prototype.changeUsername = function () {
  return `${this.username.toUpperCase()}`;
};

const tea = new User1("tea", "g@g.com", "456");
console.log(tea); //User { username: 'tea', email: 'g@g.com', password: '456' }

console.log(tea.encryptPassword()); //456abc
console.log(tea.changeUsername()); //TEA

// it means if I have not proprty of [class] keyword then there should be not a problem we can do in this way without using [class]

// And we know [user] is a [fn] but it behave like [object] bcz we study in previous lec that's why we inject [prototype] in this fn()
