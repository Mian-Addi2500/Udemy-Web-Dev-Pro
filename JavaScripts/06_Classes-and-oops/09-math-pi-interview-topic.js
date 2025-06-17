// ⭐This file is Interview Purpose⭐

// In this we see can we change the value  of [Math.PI] ? if yes then how and if not then why ? this is our problem

// we know what is value of [pi]

// let try to change is manually

console.log(Math.PI);

// 🔺output :  3.141592653589793

// now we try to change it by 5

Math.PI = 5;

console.log(Math.PI);

// 🔺output :  3.141592653589793 ===> it means now when we try it will not changed

// let explore why we didnot change it? 🔻

// now suppose we want specially get knowledge about the property about an [object ]  and in our case we want to know about [math] let see how 🔻

const discriptor = Object.getOwnPropertyDescriptor(Math, "PI");

// console.log(discriptor);

/*
🔺Output is 🔻

{
  value: 3.141592653589793,
  writable: false,
  enumerable: false,       
  configurable: false      
}

in this it is clear that we will not rewrite 



*/

// now can we give the same like some [objects] and [props] bcz when some use our library or framwork we will give him hardcoded value to them that should never be changed the answer is [yes]. so let see how we can do 🔻

// now we declear object using factory fn()

const chai = {
  name: "green tea",
  price: 250,
  isAvaliable: true,
};

// 🔺 now check can our [object] have proprty same as [math]? let see 🔻

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

/*
🔺Output is 🔻

{
  value: 'green tea',
  writable: true,
  enumerable: true,
  configurable: true
}

now have same properties but these are [true]

*/

// now I want to control all properties my own let see 🔻

Object.defineProperty(chai, "name", {
  writable: false,
  enumerable: false,
});

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

/*
🔺Output is 🔻

{
  value: 'green tea',
  writable: false,
  enumerable: fasle,
  configurable: true
}

now it means we can change our properties and when ever anyone can want to change it should not be changed

*/
