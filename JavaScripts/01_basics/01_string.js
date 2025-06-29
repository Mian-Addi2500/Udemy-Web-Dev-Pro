const myName = "Adil";
// console.log(myName);

// another way of declearing strings

const gameName = new String("Hitesh-hc");

// console.log(gameName);
//console.log(gameName[0]);
//console.log(gameName.__proto__); //this will give us object
//console.log(gameName.toUpperCase());

const newString = gameName.substring(0, 4); //in this only use +ve range values
// console.log(newString);

const anotherString = gameName.slice(-8, 4); // in this we use +ve as well as -ve value too

//console.log(anotherString);

const stringOne = "       adil     ";

//console.log(stringOne);
//console.log(stringOne.trim()); // this method use to avoide extra spaces

const url = "https://adil.com/adil%30mian";

//console.log(url.replace("%30", "_")); //this will replace our %30 to '_' in our url

//we also question to our string too

//console.log(stringOne.includes("adil")); // answer is 'true'
//console.log(stringOne.includes("zono")); // answer is 'false'

//if i want change my string to array based on any thing like in our case is '-' so we also do it let see how!

const myString = "adil-mian-2500";

//console.log(myString.split("-")); //output is : [ 'adil', 'mian', '2500' ]
