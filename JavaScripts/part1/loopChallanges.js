// challange 1:

let sum = 0;
let i = 1;
while (i <= 5) {
  sum += i;
  i++;
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
