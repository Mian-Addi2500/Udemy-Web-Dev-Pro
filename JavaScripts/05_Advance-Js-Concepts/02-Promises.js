// ⭐We study How to make promises in JS and then we study how to consume the promises too⭐

// ⚡ What is promise in js ?⚡

// 🪐 A promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. It allows you to write asynchronous code in a more manageable way, avoiding callback hell and making it easier to handle errors

// 🪐 Promises have three states: pending, fulfilled, and rejected. When a promise is created, it starts in the pending state. It can transition to the fulfilled state when the asynchronous operation completes successfully or to the rejected state if an error occurs during the operation

// 🪐 Promises are a powerful feature in JavaScript that allow you to work with asynchronous operations in a more structured and readable way. They help you avoid callback hell and make your code easier to understand and maintain.

// ⭐⭐ In this class we study the following things ⭐⭐

// 💢💢💢💢💢💢💢💢💢💢💢💢💢💢💢💢💢

// 1. Creating a Promise
// 2. Consuming a Promise
// 3. Handling the resolved promise by giving it a value

// 💢💢💢💢💢💢💢💢💢💢💢💢💢💢💢💢💢

//⚡ 1. Creating a Promise ⚡

// ☔🌠☔ 1st way to create a promise ☔🌠☔

const promiseOne = new Promise((resolve, reject) => {
  // ⚡  Promises have 2 parts

  // 1. resolve - This is called when the promise is fulfilled

  // 2. reject - This is called when the promise is rejected

  // 🪐 now we discuss what type of works should be there

  //  ⚡ we can DO an asynchronous task like 🔻

  //  🪐 DB operation, cryptography(mean password incript etc) , network call, etc

  // ⚡ now we shuold not uses these concepts 🔺 we use there an other method which we discuse already many time which is setTimeout() method . let see how it should work 🔻

  setTimeout(() => {
    // 🪐 after 1 second we resolve the promise
    console.log(`Async task is completed`);

    resolve();
  }, 1000);
});

// 🔺 this is the creation of promises

// ⭐ now we will see how to consume the promises

// 2. Consuming a Promise

// 🪐 we can consume the promise using .then() and .catch() methods

// ⭐ What is .then() and .catch()  and .finally()methods?⭐

/*
  ⚡⚡⚡

  🪐 .then(), .catch(), and .finally() are methods used to handle Promises in JavaScript:

  🪐 .then(): Runs when the Promise is fulfilled (resolved successfully). Use it to handle the successful result.

  🪐 .catch(): Runs when the Promise is rejected (an error occurs). Use it to handle errors.

  🪐 .finally(): Runs after the Promise is settled, whether it was fulfilled or rejected. Use it for cleanup or code that should always run.

  🌞 Example: 🌞

        myPromise
        .then((result) => {
        // Runs if promise is fulfilled
        console.log(result);
        })
        .catch((error) => {
        // Runs if promise is rejected
        console.log(error);
        })
        .finally(() => {
        // Runs no matter what (fulfilled or rejected)
        console.log('Promise is settled');
        });

  ☔🌠☔.finally() is useful for actions that should happen regardless of success or failure, like hiding a loading spinner.☔🌠☔


  💠 This makes it easier to manage asynchronous operations and handle errors.💠

*/
promiseOne.then(() => {
  // 🪐 this is called when the promise is fulfilled mean resolved

  console.log(`Promise is fulfilled `);
});

//   ☔🌠☔ 2nd way to create promises mean without storing promise in a variable  ☔🌠☔

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log(`Async task 2 is completed`);
    resolve();
  }, 1000);
}).then(function () {
  console.log(`Promise 2 is fulfilled`);
});

// 🪐 we use direct [.then] in this concept

// ⭐⭐ 3. Handling the resolve promise by giving him a value ⭐⭐

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(() => {
    // this time we assepct an object should be passess
    resolve({ username: "adil", userEmail: "adil@gmail.com" });
  }, 1000);
});

// now we attach this promise  with [.then] and give it's function to value bcz we use or add data to [resolve method] directly so we access this data in [.then]. let see how 🔻

promiseThree.then(function (user) {
  console.log(user);
});

// ⭐⭐ 4. Handling the chaning of [.then] promise  ⭐⭐

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    // now this time we have an error in promise then how promise should work let see 🔻

    let error = false;
    if (!error) {
      // suppose we go to file this should be either possible [DB] too bcz [DB] is also a file and we also access file
      resolve({ userName: "zono", password: "123" });
    } else {
      reject("ERROR: Something went wrong");
    }
  }, 1000);
});

// now ho to consume this promise 🔺 let see how we can and see the chaning of [.then]🔻

promiseFour
  .then((user) => {
    console.log(user);
    // now can I access the [username] ?

    // 1st way is [object - DeStrutcher]

    // 2nd way is retun the username in this [.then]

    return user.userName;

    //   now when we store this 1st [.then]in variable and check the [return] value it will give us [error]

    // SO what is the method to get the [return] value

    // for this chaning concept comes [means the return value go to next chane of [.then]]

    //   let see how 🔻
  })
  .then((userName) => {
    console.log(userName);
  });

// ⭐⭐ 4. Handling the rejection of promise  ⭐⭐

const promiseFive = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: "fatima", age: "1" });
    } else {
      reject("ERROR : Something went wrong !");
    }
  }, 1000);
});

promiseFive
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((error) => {
    console.log(error);
    // error comes
    // now we study another thing in it is [finally]
    // so what we do in [finally] ?

    // In this we see that the error comes ok or promise resolved then it should be ok but many time I want that please tell me that you work that should you doing should be done ? for this we use [finally]

    // this should be nessesary to run almost we can call it default behavior of [promise] {ky ya to hoga hi hoga }

    // SO how can we write this let see 🔻
  })
  .finally(() => {
    console.log(`The promise is either Resolved  or Rejected`);
  });

//   ⭐⭐ Now we discuss an instersting Things ⭐⭐

// 🥝🪐🥝 We want to use [async and await] method rather then using [.then and .catch] 🥝🪐🥝

// ⭐⭐What is async and await ? ⭐⭐

/*
⚡⚡⚡
[Async and await] are keywords in JavaScript that make working with Promises easier and your asynchronous code look more like synchronous code.

🪐 async is used to declare a function as asynchronous. This means the function always returns a Promise.

🪐 await is used inside an async function to pause the execution until a Promise is resolved or rejected.

🌞 Example: 🌞

async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

💠This helps you avoid chaining .then() and .catch(), making code easier to read and maintain.💠


⚡⚡⚡


*/

// let explore it 🔻

const promiseSix = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: "javaScript", age: "1" });
    } else {
      reject("ERROR : JS went wrong !");
    }
  }, 1000);
});

// In [async and await ] it should wait some time and then if promise resolve it go next otherwise it directly give an [error] mean we don't need seprate thing like [catch] in [then and catch] concept

async function consumePromiseSix() {
  // we use here [try and catch] concept bcz if resolve then code of [try] should run and if [error] then the code of [catch] should run

  //   both concept of [.then and .catch] and [async and awit] is ok it's depends on you what should you use

  // ⭐What is try and catch concept in js ? ⭐
  /*

  ⚡⚡⚡
  
  🚩 In JavaScript, [try and catch] are used for error handling.

  🪐 The try block contains code that might throw an error.

  🪐 If an error occurs, the code in the catch block runs, allowing you to handle the error gracefully

  🌞 Example: 🌞

  try {
  // Code that may throw an error
  let result = riskyFunction();
  console.log(result);
  } catch (error) {
  // Code to handle the error
  console.log('An error occurred:', error);
  }

  💠This helps prevent your program from crashing and lets you manage errors in a controlled way.💠




  ⚡⚡⚡

*/

  try {
    const responce = await promiseSix;

    console.log(responce);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseSix();

// ⭐⭐ Now we do JSON responce in promises using [async and await] methods⭐⭐

// we study in our last lec [01-apiRequest-without-fecth] we do [jason Responce] but this time we do [api request with [fetch] method]

// ⭐What is fetch method?⭐


//  🪐 fetch() is a built-in JavaScript function that allows you to make network requests to retrieve resources from a server. It returns a Promise that resolves to the Response object representing the response to the request. You can use it to fetch data from APIs, load files, or perform other network operations.

// 🪐 The fetch() function is a modern way to make HTTP requests in JavaScript, replacing the older XMLHttpRequest method. It provides a more powerful and flexible feature set for working with network requests.





// 🪐 This is prepration of next class which we study in next lec

// ⭐ 1st way using try catch⭐

// Now we try our code in [try and catch ] concept and let see how it work 🔻

async function getAllUsers(params) {
  try {
    const responce = await fetch("https://jsonplaceholder.typicode.com/users");

    // now we change our responce to [json] bcz now the above [responce] comes in [string] as we know that. and by this we didnot abel to get any values from it that why we convert it to [json]

    const data = await responce.json();

    console.log(data);
  } catch (error) {
    console.log(`ER: ${error}`);
  }
}
// getAllUsers();

// ⭐ 2nd way using .then()and .catch()⭐

fetch("https://jsonplaceholder.typicode.com/users")
  .then((responce) => {
    return responce.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log(error));


