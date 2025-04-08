//%%%%%%%%% Part # 1 [Numbers] %%%%%%%

const score = 400; // in this case js automatically dectact that score is a number but some time we want to explactely decleared that we use number. for this we use'new' keyword like 🔻

const balance = new Number(100); //now it is 100% cleared that it is a number no doubet
//console.log(score); //output : 400 => which auto js dectact this is number

//console.log(balance); // output : [Number: 100] => which is spacificaly cast this that this is a 'Number' this is littel bit biff b/w simple and spicifially declear in 'new' keyword

//now method of numbers

//console.log(balance.toString().at.length); // number convert to string now apply all method of string on it

//console.log(balance.toFixed(2)); //output : 100.00 => this will show presition values for specially e-comerise values

const otherNum = 123.89675;

//console.log(otherNum.toPrecision(5)); //output : 123.90 =>this is another way of presition value and in this 'toPrecision' also 'roundof' the values too

const hundreds = 1000000;
//console.log(hundreds.toLocaleString("en-IN"));
//output :10,00,000 =>  this will commos in value by default it is in 'US' stander but when we use ("en-IN") then it convert in to 'Indian' Stander

//%%%%%%%%%%%%%%%%%% Part # 2 [Maths] %%%%%%%%%%%%%%%%

//console.log(Math);
//output : Object [Math] {} =>this is object

//console.log(Math.abs(-4));
//output : 4 =>this willgive us absloute value which means change all -ve value to +ve only

//console.log(Math.round(4.6));
//output : 5 => this will roundofour values

//console.log(Math.ceil(4.2));
//output : 5 =>this will give top value means if .1 is be greter then it chose top value automatically

//console.log(Math.floor(4.6));
//output : 4 =>this will give low value means if [.1 0r .9]  it chose low value automatically mean after '.' no value show

//console.log(Math.sqrt(25));
//output : 5 =>thake saquareroot

//💠these two concepts shows max and min values in array directly
//console.log(Math.max(25, 3, 56, 7)); //output : 56
//console.log(Math.min(25, 3, 56, 7)); //output : 3

//intersting thing where Math library Mostly use

//🎲dise game step by step

console.log(Math.random());
// output : 0.27242753074506765 => this value always changed and also come b/w [0 and 1] and diff everytime from previous

//now we get [random] values b/w [0 and 1] but in our case we have some ranges like if we made a dise game we have range from 1-6 only for this how we manipulate with this random number let see 🔻

console.log(Math.random() * 10);
//output :5.504318758475177 => by this 1 value shift in left

console.log(Math.random() * 10 + 1);
//some time value comes in 0 to avoid it in our dise game we add 1 in our random number now never 0 comes in our random numbers

console.log(Math.floor(Math.random() * 10) + 1);
//output : 9 => this will lowest number and roundof desimel values

//now it is trick or formula for finding any range of numbers like in dise 1-6 range

const min = 1;
const max = 6;

//formula for finding range

// Math.floor(Math.random() * (max - min + 1)) + min;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
