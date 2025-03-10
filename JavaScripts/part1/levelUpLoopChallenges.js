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

let numbers = [1, 2, 3, 4, 5];
let smallNumbers = [];
for (const num of numbers) {
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

let myTeaCollection = ["iced tea", "herbal tea", "chai", "matcha", "earls grey"];

let shortTeas = [];

for (const tea of myTeaCollection) {
  if (tea.length < 10) {
    continue;
  }
  shortTeas.push(tea);
}
console.log(shortTeas);
