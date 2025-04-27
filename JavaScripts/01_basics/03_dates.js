let myDate = new Date();
//console.log(myDate);
//output => 2025-04-07T06:23:57.619Z => this is our date object which is not easily understandable

//to understand date object clearly with many method of conversion of date and check them one by one

//try Date to convert in string

//console.log(myDate.toString());
//output => Mon Apr 07 2025 11:33:05 GMT+0500 (Pakistan Standard Time) => now this is tiny bit ok rather then 2025-04-07T06:23:57.619Z

// now explore other methods one by one which print date but in diff formate we use them according to our requirement
/*
console.log(myDate.toDateString()); //output => Mon Apr 07 2025
console.log(myDate.toLocaleString()); //output => 4/7/2025, 11:41:00 AM
console.log(myDate.toLocaleDateString()); //output => 4/7/2025
console.log(myDate.toLocaleTimeString()); //output => 11:41:00 AM
console.log(myDate.toISOString()); //output => 2025-04-07T06:41:00.628Z
console.log(myDate.toJSON()); //output => 2025-04-07T06:41:00.628Z
console.log(myDate.toTimeString()); //output => 11:41:00 GMT+0500 (Pakistan Standard Time)
console.log(myDate.toUTCString()); //output => Mon, 07 Apr 2025 06:41:00 GMT
*/
// what is the type of date

console.log(typeof myDate); // typeof date is : 'Object'

// now if we want new specific date which we decleare

// let myCreatedDate = new Date(2025, 0, 25);

// another formate of geting date as input

// let myCreatedDate = new Date(2025, 0, 25, 5, 3);

//console.log(myCreatedDate.toLocaleString());
//1/25/2025, 5:03:00 AM => by this we understand that month start from 0 in js
// let myCreatedDate = new Date("2023-01-14");
let myCreatedDate = new Date("01-14-2025");
//console.log(myCreatedDate.toLocaleString());

//Now [Time Stamp] concept in dates

//this concept is used we specially we desigine quizez in js and also when we desigin Polls and check which one give fastes poll made him winner for this situations we use timeStamps

let myTimeStamp = Date.now();
//console.log(myTimeStamp);

//1744033614990 =>this will come in milli secondes and this milisecond from [1 jan 1970 to now ] tak ka milli second value h

//now from this mil/sec to find out value this is dificult problem. for this we use example like we use above [myCreatedDate]. from this we find our mil/sec bcz specially when we book rooms like we made a hotel app or making any poll then there are every time we compare dates. for this what we do let see 🔻

//console.log(myCreatedDate);
//🔺 Abhi hm is ko run krty hn to hm ko exect date milti h => 2025-01-13T19:00:00.000Z

//console.log(myCreatedDate.getTime());

//🔺 we know Date is object so we use [.] and use [getTime()] and this will do that what we declear our date is ok and this will give use values in milli/sec

//if we want to convert it into seconds then we do 🔻

//console.log(Math.floor(Date.now() / 1000));

//🔺 by this we get sec and use [Math.floor] to get exect value not desimel value

//💠Now we check other methods which comes with date easily 🔻

let newDate = new Date();
//console.log(newDate.getDay());
//console.log(newDate.getMonth() + 1);
// 🔺 we use +1 bcz month start from 0 so the end user don't b confused so we use +1

//💠 if we want to get day or month full name or in differ formate we should be customize or date like 🔻


console.log(
  newDate.toLocaleString("default", {
    weekday: "long",
    month: "long",
  })
);


//🔺 output : April Monday => this means we customize our date object
