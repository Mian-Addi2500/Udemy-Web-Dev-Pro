// ⭐In this we understand [call] method⭐

// what is call in js ?

// the [call()] method in JavaScript is used to invoke a function with a specific [this] value and arguments provided individually.

//It allows you to borrow methods from one object and use them for another object.



// In simple words , The [call method] can pass our [current EC] to another function.

// Example:

// in this example we have a fn() [setUsername] in this we pass [userName] and we have another fn() [createUser] and in this we pass [userName,email,password] and all other value comes in our 2nd fn() throgh [this] keyword but for {userName} we call our [setUsername] fn().it mean fn() inside another fn() so how we can tackel this problem of getting [username] which comes from another fn() let explore it 🔻

// 1st fn()🔻

function setUsername(username) {
  // in this fn() we call all DB calls and also use this 🔻

  this.username = username;
  console.log(`call`);
}

// 2nd fn() 🔻
function createUser(userName, email, password) {
  setUsername.call(this, userName);
  this.email = email;
  this.password = password;
}

const chai = new createUser("chai", "chai@fb.com", "123");
console.log(chai);

// 🔺 output ==> createUser { email: 'chai@fb.com', password: '123' }

// 🔺 our [username] donot come so to get user name we use [.call] and also use [this, username] on Line# 28 by this our [call method] which we use in [2nd fn()] can pass our [current EC] to  [1st fn()] by using [this, ] . after this our output should comes 🔻

// createUser { username: 'chai', email: 'chai@fb.com', password: '123' } ===> this time [username] shown
