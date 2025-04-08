/*

💎 Create Simple Function💎

1. Write a function named `makeTea` that takes one parameter, `typeOfTea`, and returns a string like `"Making green tea"` when called with `"green tea"`.
Store the result in a variable named `"teaOrder"`
*/

function makeTea(typeOfTea) {
  return `Making ${typeOfTea}`;
}
let teaOrder = makeTea("green tea");
// console.log(teaOrder);

/*

💎 Create function within a function and return it in main function💎

2. Create a function named `orderTea ` that takes one parameter, `teaType`. Inside this function, create another Function named `confirmOrder` that return a message like `"Order confirmed for chai"`.
Call `confirmOrder` from within `orderTea` and return the result.
*/

function orderTea(teaType) {
  function confirmOrder() {
    return `Order confirmed for ${teaType}`;
  }
  return confirmOrder();
}

let orderConfarmitaionMessage = orderTea("coffe");

// console.log(orderConfarmitaionMessage);

/*
💎 Arrow Functions💎

3. Write an arrow function named `calculateTotal` that takes two parameters: `price` and `quantity `.The function should return the total cost by multiplying the `price` and `quantity`. 
Store the result in a variable named `totalCost`. 
*/
const calculateTotal = (price, quantity) => {
  return price * quantity;
};

let totalCost = calculateTotal(3, 6);
// console.log(totalCost);

/*
💎 Higher order Functions💎
4.Write a function named `processTeaOrder` that takes another function, `makeTea`, as a parameter and calls it with the argument `"earl grey"`.
Return the result of calling `makeTea`.
*/
function makeTea(typeOfTea) {
  return `make tea : ${typeOfTea}`;
}
function processTeaOrder(teaFn) {
  return teaFn("earl grey");
}
let order = processTeaOrder(makeTea);
// console.log(order);

/*
5.Write a function named `createTeaMaker` that returns another function. the returned function should take one parameter, `teaType`, and return a message like `"Making green tea"`.
Store the returned function in a variable named `teaMaker` and call it with `"green tea"`. 
*/

function createTeaMaker() {
  return function (typeOfTea) {
    return `Making : ${typeOfTea}`;
  };
}

let myTeaMaker = createTeaMaker();
// console.log(myTeaMaker);
// console.log(myTeaMaker());
let result = myTeaMaker("green tea");
// console.log(result);
