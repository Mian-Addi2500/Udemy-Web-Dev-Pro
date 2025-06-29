//💎Array Basics💎

//1st way of creating an array which is mostly used 🔻

const myArr = [11, 12, 13, 14, 15];

// 2nd way of array decleration 🔻

const myArr2 = new Array(21, 22, 23, 24, 25);

// we access the element of array by its index number 🔻

// console.log(myArr[0]);

// 🔺 output : 11

//💠 Array use the approch of [Shallow copy] mean share the same referance point like [Heap] rather then [Stack]. Stack means if something chnges into the array the orignal array should be effected mean changes and vice versa for [Heap]

//💎Array Methods💎

myArr.push(6);
//🔺this method simply add element at the end of array and it is [mostly used]
myArr.pop();
//🔺this method simply remove element at the end of array and it is not required any arrgument
myArr.unshift(0);
//🔺this method simply add element at the start of array and it shift all array values and this is time cunsuming process and our computer should feel load
myArr.shift();
//🔺this method simply remove element at the start of array it is not required any arrgument

// 💠now we see some [questioner method] to array mean we just simply question to an array and it will give us answer in Boolen

// console.log(myArr.includes(9));
//🔺output : false
// console.log(myArr.indexOf(13));
//🔺output : 2 => this means that 13 is at 2 index in our myArr array

// ⚡⚡ This method is mostly used ⚡⚡

const newArr = myArr.join();
// 🔺 this method will [change our array to string] with ',' seprated
// console.log(myArr);
//🔺output :[ 11, 12, 13, 14, 15 ] => this is array
// console.log(newArr);
//🔺output :11,12,13,14,15 => this string with ',' seprated

// 💠Now concept of [Slice and Splice] 🔻

// console.log("A", myArr);
// 🔺 output : A [ 11, 12, 13, 14, 15 ]
// Slice 🔻

let myn1 = myArr.slice(1, 3);
// console.log("B", myArr);
// 🔺 output : B [ 11, 12, 13, 14, 15 ]
// console.log(myn1);
// 🔺 output : [12, 13]
// 🔺In Slice fist Index Range includes and last not includes and [Orignal array does not effected]

// Splice 🔻

let myn2 = myArr.splice(1, 3);

// console.log("C", myArr);
// 🔺 output : C [ 11, 15 ]
// console.log(myn2);
// 🔺 output : [ 12, 13, 14 ]

// 🔺In Splice fist Index Range includes and also last includes but the [Orignal array  effected ] the remining index values remaines in the Orignal array

// 💠Let see another methods of an Array 🔻

const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

// now we want to merge both array into single array so for this we think 1st that we us [.push] method . so let try and see what should comes🔻

// marvel_heros.push(dc_heros);
// console.log(marvel_heros);
// 🔺output : [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ] => which is not we acpected bcz we want to merge our array not array with in an array as element

// let in our above concept if we want to access [flash] what we do let see 🔻

// console.log(marvel_heros[3][1]);

// 🔺 output : flash => this is also work but it is not good practices

// 💠now another way to get our desier output🔻

// ⭐ concat method ⭐

// const all_heros = marvel_heros.concat(dc_heros);

// console.log(all_heros);

// 🔺output : [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ] => now this is what we want and in this concept we also learn that [concat return new array] but [push does not]

// 💠but there is an another easy way to get our desier output which mostly people use is called [seapered operator]🔻

const allNewHeros = [...marvel_heros, ...dc_heros];
//console.log(allNewHeros);

// 🔺output : [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ] =>which give same result like concate but mostly people prefer this, that why we use it mostly

// Now we understand another concept of array which we use [raearly] in future🔻

const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const myRealArray = anotherArray.flat(Infinity);

//console.log(myRealArray);

// 🔺output :[1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5] => by this all values comes in to single array by using [flat] and [flat] also get [depth] that at what depth I should solve the array but we use [infinity] so it automatically take all depth range

// Now we understand another concept of array which we use [Mostly] speacily when we do [data scraping ]form any web page🔻

// when we select the data from any web page then it was come many time in diff formate like [nodelist,objects or string formate ] the data comes but we want an array formate bcz we loop through an array so how we convert this data formate in to an array let see 🔻

//console.log(Array.isArray("Adil"));

// 🔺output : false => so first we Question that is ['adil'] is an array so the answer is [false] bcz it is string not array

// so how to convert this [string] into an array let see 🔻

//console.log(Array.from("Adil"));

// 🔺output : [ 'A', 'd', 'i', 'l' ] => jo b value hm dean gy ya us ko array mn convert kr dy ga

// let see if we give [object] to convert it or array 🔻

//console.log(Array.from({ name: "adil" }));

// 🔺output : [] =>bcz [.from] do not directly convert object into array for this we first conform that is we want [array of keys or values] then it will give results if it not convert then it will always give an empty array

// now same like above we see another exemple that 🔻

let scor1 = 100;
let scor2 = 200;
let scor3 = 300;

// like this situation also comes that if we have multiple variables or arrays then we also to convert it in to array so we also easily convert it insted of using[.from] we also use [.of] this also returns a new array from a set of elements now set  of elemtns shuold be array or variables e.t.c let see how to converts all elements🔻

//console.log(Array.of(scor1, scor2, scor3));

// 🔺output : [ 100, 200, 300 ]

//💠💠➖➖➖➖➖➖➖➖💢🔰 U-Demy 🔰💢➖➖➖➖➖➖➖➖💠💠

/* 
1. Declare an array named `teaFlavors` that contains the strings `"green tea"`, `"black tea"`, and `"oolong tea"`. 
   Access the first element of the array and store it in a variable named `firstTea`.
*/

const teaFlavors = ["green tea", "black tea", "oolong tea"];
const firstTea = teaFlavors[0];
//console.log(firstTea);

/* 
2. Declare an array named `cities` containing `"London"`, `"Tokyo"`, `"Paris"`, and `"New York"`. 
   Access the third element in the array and store it in a variable named `favoriteCity`.
*/

let cities = ["London", "Tokyo", "Paris", "New York"];
let favoriteCity = cities[2];
//console.log(favoriteCity);

/* 
3. You have an array named `teaTypes` containing `"herbal tea"`, `"white tea"`, and `"masala chai"`. 
   Change the second element of the array to `"jasmine tea"`.
*/

let teaTypes = ["herbal tea", "white tea", "masala chai"];
teaTypes[1] = "jasmine tea";
//console.log(teaTypes);

/* 
4. Declare an array named `citiesVisited` containing `"Mumbai"` and `"Sydney"`. 
   Add `"Berlin"` to the array using the `push` method.
*/

let citiesVisited = ["Mumbai", "Sydney"];
citiesVisited.push("Berlin");
//console.log(citiesVisited);

/* 
5. You have an array named `teaOrders` with `"chai"`, `"iced tea"`, `"matcha"`, and `"earl grey"`. 
   Remove the last element of the array using the `pop` method and store it in a variable named `lastOrder`.
*/

let teaOrders = ["chai", "iced tea", "matcha", "earl grey"];
let lastOrder = teaOrders.pop();
//console.log(lastOrder);
//console.log(teaOrders);

/* 
6. You have an array named `popularTeas` containing `"green tea"`, `"oolong tea"`, and `"chai"`. 
   Create a soft copy of this array named `softCopyTeas`.
*/

let popularTeas = ["green tea", "oolong tea", "chai"];
let softCopyTeas = popularTeas;
popularTeas.pop();
// console.log(softCopyTeas);
// console.log(popularTeas);

/* 
7. You have an array named `topCities` containing `"Berlin"`, `"Singapore"`, and `"New York"`. 
   Create a hard copy of this array named `hardCopyCities`.
*/

let topCities = ["Berlin", "Singapore", "New York"];
let hardCopyCities = [...topCities];
topCities.pop();
// console.log(topCities);
// console.log(hardCopyCities);

/* 
8. You have two arrays: `europeanCities` containing `"Paris"` and `"Rome"`, and `asianCities` containing `"Tokyo"` and `"Bangkok"`. 
   Merge these two arrays into a new array named `worldCities`.
*/
let europeanCities = ["Paris", "Rome"];
let asianCities = ["Tokyo", "Bangkok"];
// 1st way
// let worldCities = [...europeanCities, ...asianCities];
// 2nd way
let worldCities = europeanCities.concat(asianCities);
//console.log(worldCities);

/* 
9. You have an array named `teaMenu` containing `"masala chai"`, `"oolong tea"`, `"green tea"`, and `"earl grey"`. 
   Find the length of the array and store it in a variable named `menuLength`.
*/
let teaMenu = ["masala chai", "oolong tea", "green tea", "earl grey"];
let menuLength = teaMenu.length;
//console.log(menuLength);
/* 
10. You have an array named `cityBucketList` containing `"Kyoto"`, `"London"`, `"Cape Town"`, and `"Vancouver"`. 
    Check if `"London"` is in the array and store the result in a variable named `isLondonInList`.
*/
let cityBucketList = ["Kyoto", "London", "Cape Town", "Vancouver"];
let isLondonInList = cityBucketList.includes("London");
// console.log(isLondonInList);
