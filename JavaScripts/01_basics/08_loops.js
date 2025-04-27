//💠💠➖➖➖➖💢🔰 For loop 🔰💢➖➖➖➖💠💠

/* 
syntax 🔻

for (let i = 0; i < array.length; i++) {
    const element = array[i];
    
}

*/

for (let i = 1; i < 5; i++) {
  const element = i;
  if (element == 3) {
    // console.log(`Number 3 is best number`);
  }
  //   console.log(element);
}
/* 
 🔺output 🔻
1
2
Number 3 is best number
3
4
*/

for (let i = 0; i <= 5; i++) {
  //   console.log(`outer loop I is: ${i}`);

  for (let j = 0; j < 5; j++) {
    // console.log(`Inner loop J is: ${j} and inner loop I is: ${i}`);
    // console.log(`${i} * ${j} = ${i}*${j}`);
  }
}

// now for loop on Array 🔻

const myHeros = ["am", "me", "my"];
for (let i = 0; i < myHeros.length; i++) {
  const element = myHeros[i];
  //   console.log(element);
}

// now we understands some keywords in loop 🔻

// this concept is used when we start loop it does not mean that should finish compelet loop mean if we have data of 1000 books and we want to show them on web pages but we donot want to show them in one page we should show 20 books on one page and 20 on second page and so on, So for this we have special keywords in Loops 1)break 2)continue let see how it work 🔻

for (let i = 1; i < 5; i++) {
  // now I want when [i = 3 ] then break the loop and push me out from the loop this [break] keyword use
  if (i === 3) {
    // console.log(`dected 3`);
    break;
  }
  //   console.log(`value of i is : ${i}`);
}
for (let i = 1; i < 5; i++) {
  // now I want when [i = 3 ] then contineu the loop and skip 3rd value only and continue by using [continue]
  if (i === 3) {
    // console.log(`dected 3`);
    continue;
  }
  // console.log(`value of i is : ${i}`);
}

//💠💠➖➖➖➖💢🔰 While loop 🔰💢➖➖➖➖💠💠

/*

Syntex 🔻
let i = 0 
while (i<=4) {
  i++
}
*/

let i = 0;
while (i <= 4) {
  // console.log(`Value of i is ${i}`);
  i++;
}

// Now apply [While] loop of an Array Let see how 🔻

let myArray = ["adil", "kamil", "zono"];
let arr = 0;
while (arr < myArray.length) {
  // console.log(`value is ${myArray[arr]}`);
  arr++;
}

//💠💠➖➖➖➖💢🔰 do - While loop 🔰💢➖➖➖➖💠💠

// In this loop condition at end mean in this 1st work done then condition check mean at leaste on time this loop should run
/*

syntaxt 🔻

do {
  
} while (condition);

*/

let score = 1;

do {
  // console.log(`score is ${score}`);

  // score++
  // same 🔻 like above 🔺
  score = score + 1;
} while (score <= 4);

// now we check if scoreTwo is 5 and condition should be      scoreTwo <= 4 then check what will [dowhile loop] can do and this is [special case] of [dowhile loop]🔻

let scoreTwo = 5;
do {
  // console.log(`score is ${score}`);
  score++;
} while (scoreTwo <= 4);

// 🔺output : score is 5 => it means in 1st log print the score value and then condition check which is false so loop should be end but at leaste 1 time it should be run

//💠💠➖➖➖➖💢🔰 Array specific loops 🔰💢➖➖➖➖💠💠

// now we disscuse Array special loops these are specially made for array let see what types of these loop are 🔻

//💠💠➖➖➖➖💢🔰 for of loop 🔰💢➖➖➖➖💠💠
/*
syntaxt🔻

for (const element of object) {
  
}

*/

const myArr = [1, 2, 3, 4];

for (const element of myArr) {
  // console.log(element);
}

// now try this loop on string🔻

let myName = "Adil Mian";
for (const element of myName) {
  // if (element == " ") continue;
  // 🔺if sapce detect b/w names then I want to not show space then use [contine] sapce donot shown
  // console.log(element);
}

// now try this loop on object🔻

let myobj = {
  name: "adil",
  age: 22,
};

for (const element of Object.values(myobj)) {
  // console.log(element);
}

// 🔺 object are not itrateable therefore first we convert them in array then Loop through them other wise [Objects are not itterate] in [forof loop]

//💠💠➖➖➖➖💢🔰 Map Datatype 🔰💢➖➖➖➖💠💠

// Now There is an other Datatype in Js which also itrateable and many time we itrate on them which is [Maps]🔻

// What are maps? => maps are is like array but there should be little bit itration diffrence and in further we see it in our exercises now we see that in [map] how values should be set 🔻

// there is not a dificult in [map] it should b unique value only 🔻

// now create map🔻

// 1st we create map🔻
const map = new Map();

//now we set values in [map] by using [.] notation bcz [Map] (apny ap mn aik object h waps sy Js mn sub kuch hi object h )
map.set("PK", "Pakistan");
map.set("IN", "india");
map.set("Fr", "France");
map.set("PK", "Pakistan");

// 🔺It like [Object] but main thing it [ doesnot repeate values].  i.e in our case [map.set("PK", "Pakistan");] is repeate 2 time use but in output it will give only 1 time this value. let see the output by printing it 🔻

// console.log(map);

// 🔺output : Map(3) { 'PK' => 'Pakistan', 'IN' => 'india', 'Fr' => 'France' } => see [map] is unique value mean use 1 time value only and in which order we add values the order should not b change mean when we add [pk] at 1st line and then add [pk] at last line it should take 1st line mean use order of inputs. In furthur when we study [dataStructurs] then there it should be used

// Now main thing is that can I [Loop] through it if I loop through then how ? let see 🔻

for (const key of map) {
  // console.log(key);
}

/*
🔺output  🔻
[ 'PK', 'Pakistan' ]
[ 'IN', 'india' ]
[ 'Fr', 'France' ]

🔺when we print we get complete [array] but I donot want to print it I want to print seprate values mean seprate [keys] and seprate [values].


*/
// So if we want seprate Values then we have a [shortcut] for this let see 🔻

for (const [key, value] of map) {
  // console.log(`Key is : ${key} and Value is ${value}`);
}

/*
🔺output  🔻

Key is : PK and Value is Pakistan
Key is : IN and Value is india
Key is : Fr and Value is France

🔺 So in this [array de-structure] concept use and we get [key and values] seprately

*/

//💠💢 Let see if we have [Object] and can we iterate it by same as like [map] concept in [for of loop]💢💠

let myGame = {
  game1: "NFC",
  game2: "Gta vice city",
  game3: "spiderman",
};

// for (const [key, value] of myGame) {
//   console.log(key);
// }

// 🔺output : TypeError: myGame is not [iterable ] => So it means this concept is not work on [object]

//💠💠➖➖➖➖💢🔰 For-In loop🔰💢➖➖➖➖💠💠

// now problem is that our [for-of loop] doesnot work on our [object] it works on [maps] but don't on [object]. So for looping [Object] we have an other loop which is [for-in loop]

// Now it is not nesseary that [for-in loop] is always for [object] no it is not we use it for other tasks also.

// now we see the syntext and working of [for-in loop]🔻

/*
syntaxt 🔻

for (const key in object) {
  if (Object.prototype.hasOwnProperty.call(object, key)) {
    const element = object[key];
    
  }
}

*/

const myLang = {
  cpp: "c++",
  py: "python",
  js: "javaScript",
};

for (const key in myLang) {
  // console.log(
  //   `My object key is : "${key}" and my Object value is : "${myLang[key]}"`
  // );
}

/*

🔺output  🔻

My object key is : "cpp" and my Object value is : "c++"
My object key is : "py" and my Object value is : "python"
My object key is : "js" and my Object value is : "javaScript"

it mean we get easily [key] from object and when we get [keys] of our [object] now it is easy to get [object]values form this by using keys like [object[key]] 

*/

//💠💢 Now can [for-in loop] use for [Array] 💢💠

let myArr2 = [4, 5, 6];
for (const key in myArr2) {
  // console.log(
  //   `My array key is : "${key}" and myarr value is : "${myArr2[key]}"`
  // );
}
/*

🔺output  🔻
My array key is : "0" and myarr value is : "4"
My array key is : "1" and myarr value is : "5"
My array key is : "2" and myarr value is : "6"

*/

//💠💢 Now can [for-in loop] use for [String] 💢💠

let mystr = "zono";

for (const key in mystr) {
  // console.log(key);
  // console.log(typeof key);
  // console.log(mystr[key]);
  // console.log(typeof mystr[key]);
}

//💠💢 Now can [for-in loop] use for [Map] 💢💠

const myCountryMap = new Map();
myCountryMap.set("PK", "Pakistan");
myCountryMap.set("IN", "india");
myCountryMap.set("Fr", "France");
myCountryMap.set("PK", "Pakistan");

for (const [key, value] in myCountryMap) {
  // console.log(key);
}

// 🔺 We couldn't itrate the [map] in for-In loop

// ⏳👁‍🗨 Now we see if we want to loop through on [Object] then we use [For-in loop] and when we loop through on [Arrays] then we use [for-of loop] but it is not we use moslty but many other loop on [array] mostly used which are below

//💠💠➖➖➖➖💢🔰 ForEach loop 🔰💢➖➖➖➖💠💠

// Now this is an instring loop which is we [mostly use] on [array] many of time by the 2 type of loops which are mostly use on array 1)foreach loop 2)map. we study [map] in next lec but now discuse [foreach loop] 🔻
/*
syntax 🔻

array.forEach(element => {
  
});
*/

const coding = ["js", "ruby", "cpp", "py"];

// most of time the loop we use in our work is [forEach]. Actually some [loops] are directly add in properties. Means when we see [prototypes] of [array] in [console of browser] we have 2 loop in the property of [array]. 1)forEach 2)Map.These are 2 parameters of [loop] which are bydefault inject in  [Array] bcz everyOne know if [arrays] comes then it should be nesseary to [loop] on [Array] for getting values of that array. So, for this most of the time we use this in our work🔻

// now to take it in our work is very easy but it is littel bit a [highr-order function]. let discuse what is [higher-order function] in forEach  🔻

// We see in our previous loops [for-of and for-in] we automatically goes to our [array and objects] we do not tell them the length or anything. So like that now in our [forEach loop]  these      [function how much big is that [array] and what is it's lenght and I start from 0. these all things function knows. we just give function and talk with him like 🔻
coding.forEach((item) => {
  // console.log(item);
});

/*

🔺output  🔻

js
ruby
cpp
py

*/

// 🔺This is our base. Now made him more instring 🔻

function printMe(item) {
  // console.log(item);
}
coding.forEach(printMe);

// 🔺This is also work same like above in this we simply right function first and then refer it to [forEach]

// now see more instresting things about [ForEach] it has not only access of [item] it also have 2 more things in his access🔻

coding.forEach((item, index, array) => {
  // console.log(item, index, array);
});

/*

🔺output  🔻

js 0 [ 'js', 'ruby', 'cpp', 'py' ]
ruby 1 [ 'js', 'ruby', 'cpp', 'py' ]
cpp 2 [ 'js', 'ruby', 'cpp', 'py' ]
py 3 [ 'js', 'ruby', 'cpp', 'py' ]

*/

// 💠💢Now if we have condition in which [objects is in an array]💢💠

// [{},{},{}] => let see how to take this condition 🔻

const myCoding = [
  {
    langName: "javaScript",
    langFileName: "Js",
  },
  {
    langName: "python",
    langFileName: "py",
  },
  {
    langName: "Cpp",
    langFileName: "c++",
  },
];

myCoding.forEach((item) => {
  // console.log(item.langName);
});

// 🔺this concept is mostly used in [Database] concept bcz when Data comes from [Database] it should be in this formate. [{},{},{}]

// Now we see that the [forEach loop has a callback function] so can this callback can return any thing ? let see by storing it in to a variable then see 🔻

const coding2 = ["js", "cpp", "py"];

let values = coding2.forEach((item) => {
  // console.log(item);
  return item;
});

// console.log(values);

// 🔺 output: undefined => so it means [forEach] should not return anything. if I manually [return item] then the result should also be same [undefined]. So, it means that this [forEach] sould [not return] anything if you want or not but it should not return any value.

// but always it is not nessasery that we take some values form array and we want to print them or use them. it maybe possible I want some other thing form it like for now I give him temprary condition that suppose if it's name is [cpp] then [return] it otherwise not. So for this case what will I do ? For this case our [forEach loop] should not work which was we confident on it that if I have an array then I will do it easily with [forEach loop] but in this condition our all confident should be down at this situation. So for this case should we go back to our traditional [for loop] ? no for this situation [Js] have another concept of loop. let explore it with an other example 🔻

//💠💠➖➖➖➖💢🔰 filter operation🔰💢➖➖➖➖💠💠

const myNums = [1, 2, 3, 4, 5, 6, 7, 8];

let newNums = myNums.filter((num) => {
  return num > 4;
});

// console.log(newNums);

// 🔺output : [ 5, 6, 7, 8 ] =>It mean it will [return] our value which we did not get in [forEach]. It mean we understand when we use [filter]. In filter we have [callback like forEach] and in this callback every value each access but after that we give [condition(num > 4)] and then where where the conditions should be true there all values should be [return] otherwise [not return]. This is called [basics of filter].

// Now if I want this work in [forEach] rather then using [filter]. How can I do ? 🔻

const myNewNum = [];

newNums.forEach((num) => {
  if (num > 4) {
    myNewNum.push(num);
  }
});

// console.log(myNewNum);

// 🔺output : [ 5, 6, 7, 8 ] => this is also same but this is lengthy process but bhot methods are same its no doubt that which method is best both are best the main goal end result should be your desire result .

//💢💠💢 Now we explore [database  like Data] to understand more about [filter] 💢💠💢

const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];

// now user want to add a filter on his webpage and we have exersice that user whould say what you should search for him and print it 🔻

// now if we want books that having [genre: "History"] let see how to get in filter 🔻

let userBooks = books.filter((bk) => bk.genre === "History");

// now user want give me books which are publish after [2000]

userBooks = books.filter((bk) => bk.publish >= 2000);

// now user want give me books which are publish after [1995] and its [genre: "History"]

userBooks = books.filter((bk) => bk.genre === "History" && bk.publish >= 1995);

// console.log(userBooks);

//💠💠➖➖➖➖💢🔰 Map operation🔰💢➖➖➖➖💠💠

const myNumber = [1, 2, 3, 4, 5, 6];

// I want to add 10 in every value using [map]

// [Map] is a good competator of [ForEach]. This is also take a [callback]. The good thing is [map] automatically return the values🔻

const newNumbers = myNumber.map((num) => {
  return num + 10;
});

// console.log(newNumbers);

//🔺output : [ 11, 12, 13, 14, 15, 16 ] => But there also same story apply which basically apply in [filter].In [map] it should iterate on every value but in [filter] it should iterate on [conditional] values.

//💢💠💢 Now undersatnd the concept of [chaning 🔗🔗] 💢💠💢

// in this we use multiple [map and filter] with one operation
const myNewNums = myNumber
  .map((num) => num * 10)
  .map((num) => num + 1)
  .filter((num) => num >= 40);

// console.log(myNewNums);

//💠💠➖➖➖➖💢🔰 Reduce operation🔰💢➖➖➖➖💠💠

// This concept is used most of the time mostly when we use [shoping cards] e.t.c

/*
const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);

console.log(sumWithInitial);
// Expected output: 10

*/
// 1) In this we take an [array]
// 2) We get an [initial Value] which is equal to [0]
// 3)Now when we apply [reduce method] on [array] in this [reduce] method we have same [callback] but we have 2 new values [accumulator] and [currentValue]

// now what is [currentValue ]? this is the value of array which should be in itration

// what is [accumulator] ? acctually this [acc] should be an empty [variable] given to us but the [initialValue] 1st time should go to [acc] so [intialValue = 0]. So when 1st time loop itrate so in this time [acc] value should be [0] and after that we should give [curruntValue] to it So, [acc + currentValue => mean 0 + 1] so in 1st time result should be [1] now the [result] go to [acc] mean 1st time [initialValue] should go to [acc] but after that every time[result] should go to [acc] and this will countinue till loop end

// So the final [sum] collectivaly add to [acc for final sum]

// let explore how it work using basic [function] 🔻

const myRupes = [1, 2, 3];

/*
const myTotal = myRupes.reduce(function(acc, curval){
  console.log(`acc : ${acc} and  curval : ${curval}`);

  return acc + curval;
}, 0);

*/

/*
output 🔺

acc : 0 and  curval : 1
acc : 1 and  curval : 2
acc : 3 and  curval : 3

myTotal output 🔻

6
*/

// let explore how it work using basic [arrow => function] 🔻

let myTotal = myRupes.reduce((acc, curr) => acc + curr, 0);
// console.log(myTotal);

// 🔺output : 6

// Let see another Example of [reduce] 🔻

let shoppingCart = [
  {
    itemName: "js course",
    price: 2999,
  },
  {
    itemName: "py course",
    price: 999,
  },
  {
    itemName: "mobile course",
    price: 4999,
  },
];

// In this we want to add prices which are  avalible in [object within an Array]. We have many methods to add it but it is realy common funcationality syntax where we have some values in an [array] or some values in an [object] and we want to [add] them. So for that we should use [reduce]

// Let see how it work🔻

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0);

// console.log(priceToPay);

// 🔺output : 8997

//💠💠➖➖➖➖➖➖➖➖💢🔰 U-Demy 🔰💢➖➖➖➖➖➖➖➖💠💠

// challange 1:

let sum = 0;
let v = 1;
while (v <= 5) {
  sum += v;
  v++;
}
// console.log(sum);

// challange 2:

let countdown = [];
let a = 5;

while (a >= 1) {
  countdown.push(a);
  a--;
}
// console.log(countdown);

// challange 3:

/*

let teaCollection = [];
let tea;
do {
  tea = prompt(`Enter your fav tea (type 'stop' to finish)`);
  if (tea !== "stop") {
    teaCollection.push(tea);
  }
} while (tea !== "stop");
// console.log(teaCollection);
*/
// challange 4:

let total = 0;
let b = 1;
do {
  total += b;
  b++;
} while (b <= 3);
// console.log(total);

// challange 5:

let multiplyNumber = [];
let numbers = [2, 4, 6];
for (let i = 0; i < numbers.length; i++) {
  let getnumber = numbers[i] * 2;
  multiplyNumber.push(getnumber);
}
// console.log(multiplyNumber);

// challange 6:

let cities = ["Paris", "Tokyo", "Mailsi", "BWP"];
let cityList = [];
for (let i = 0; i < cities.length; i++) {
  cityList.push(cities[i]);
}
// console.log(cityList);

// challange 1:

let teas = ["green tea", "black tea", "chai", "oolong tea"];

let selectedTeas = [];
for (let i = 0; i < teas.length; i++) {
  if (teas[i] === "chai") {
    break;
  }
  selectedTeas.push(teas[i]);
}
// console.log(selectedTeas);

// challange 2:

let myCities = ["London", "New York", "Paris", "Berline"];
let visitedCities = [];

for (let i = 0; i < myCities.length; i++) {
  if (myCities[i] === "Paris") {
    continue;
  }
  visitedCities.push(myCities[i]);
}
// console.log(visitedCities);

// challange 3:

let myOwnNumbers = [1, 2, 3, 4, 5];
let smallNumbers = [];
for (const num of myOwnNumbers) {
  if (num === 4) {
    break;
  }
  smallNumbers.push(num);
}
// console.log(smallNumbers);

// challange 4:

let myTea = ["chai", "iced tea", "herbal tea", "matcha", "earl grey"];

let preferredTea = [];

for (const tea of myTea) {
  if (tea === "herbal tea") {
    continue;
  }
  preferredTea.push(tea);
}
// console.log(preferredTea);

// for-In loop

// challange # 5

let citiesPopulation = {
  london: 8900000,
  "New York": 7900000,
  Mailsi: 3400000,
  Berline: 450000567,
};

let cityNewPopulations = {};

// console.log(Object.values(citiesPopulation));

for (const city in citiesPopulation) {
  // console.log(citiesPopulation[city]);

  if (city === "Berline") {
    break;
  }
  //  key = value

  cityNewPopulations[city] = citiesPopulation[city];
}
// console.log(cityNewPopulations);

// Challange #6

let woldCities = {
  Mailsi: 435789000,
  Isb: 9000000,
  BWP: 3200000,
  MLN: 2200000,
};
let largeCities = {};

for (const city in woldCities) {
  if (woldCities[city] < 3000000) {
    continue;
  }
  largeCities[city] = woldCities[city];
}
// console.log(largeCities);

// forEach loop

// Challange # 7

let teaCollection = ["iced tea", "herbal tea", "chai", "matcha", "earl grey"];
let avalibaleTeas = [];

teaCollection.forEach((tea) => {
  if (tea === "chai") {
    return;
  }
  avalibaleTeas.push(tea);
});
// console.log(avalibaleTeas);

// Challange # 8

let avalibaleCities = ["London", "New York", "Sydeny", "Paris", "Berline"];
let traveldCities = [];

avalibaleCities.forEach((city) => {
  // if (city === "Sydeny") {
  //   return;
  // }
  if (city === "Sydeny") return;
  traveldCities.push(city);
});
// console.log(traveldCities);

// Challange # 9

let myNumbers = [2, 5, 7, 9];

let doubleNumbers = [];

for (let i = 0; i < myNumbers.length; i++) {
  if (myNumbers[i] === 7) {
    continue;
  }
  doubleNumbers.push(myNumbers[i] * 2);
}
// console.log(doubleNumbers);

// Challange # 10

let myTeaCollection = [
  "iced tea",
  "herbal tea",
  "chai",
  "matcha",
  "earls grey",
];

let shortTeas = [];

for (const tea of myTeaCollection) {
  if (tea.length < 10) {
    continue;
  }
  shortTeas.push(tea);
}
// console.log(shortTeas);

// %%%%%%%%%%%%%%% REVISION  %%%%%%%%%%%%%%%%%%

// chl # 1

let myTeas = ["Green tea", "black tea", "chai", "oolong tea"];

let mySelectedTeas = [];

for (let i = 0; i < myTeas.length; i++) {
  if (myTeas[i] === "chai") {
    break;
  }
  mySelectedTeas.push(myTeas[i]);
}
// console.log(mySelectedTeas);

// chnlg # 2

let myNewCities = ["London", "New York", "Sydeny", "Paris", "Berline"];

let myNewVisitedCities = [];

for (let i = 0; i < myNewCities.length; i++) {
  if (myNewCities[i] === "Paris") {
    continue;
  }
  myNewVisitedCities.push(myNewCities[i]);
}
// console.log(myNewVisitedCities);

// chlng # 3

let myNewNumbers = [1, 2, 3, 4, 5, 6];

let myNewSmallNumbers = [];

for (const number of myNewNumbers) {
  if (number === 4) {
    break;
  }
  myNewSmallNumbers.push(number);
}
// console.log(myNewSmallNumbers);

// chlng # 4

let myCitiesPopulation = {
  london: 8900000,
  "New York": 7900000,
  Mailsi: 3400000,
  Berline: 450000567,
};

let myNewCitiesPopulations = {};

for (const city in myCitiesPopulation) {
  if (city === "Berline") {
    break;
  }
  myNewCitiesPopulations[city] = myCitiesPopulation[city];
}
// console.log(myNewCitiesPopulations);

// chlng 5

let myNewTeas = ["Green tea", "black tea", "chai", "oolong tea"];

let myAvalibaleTea = [];

myNewTeas.forEach((tea) => {
  if (tea === "chai") {
    return;
  }
  myAvalibaleTea.push(tea);
});
console.log(myAvalibaleTea);
