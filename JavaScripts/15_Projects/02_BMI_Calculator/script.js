const form = document.querySelector("form");
// Some people acess the height and weight value here like 🔻

// const height = parseInt(document.querySelector("#height").value);

// 🔺By this when page load the [empty] value should be store in [height] variable but we want when we [submit] form and get exeict value for this we access values in [event]

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // 🔺 we use this bcz we want that when we [submit] form the default functionality should be prevent i.e [form] give all values to [url] or value go to servor of go where anyone calling  which is not good right now

  // Now we access the value of [height and wight]
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);

  //  🔺 [document.querySelector("#height").value] this will give us value in [string] but we want it to [integer] so for this we use [parseInt()]

  // now we have 3rd element which is [results] we take it too.🔻

  const results = document.querySelector("#results");

  // now we make some checks if these checks should be true then we will show values in our [results] element 🔻

  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = `please give a valid height ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = `please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    // now show the result with condition 🔻
    if (bmi < 18.6) {
      results.innerHTML = `<span>You are Under Weight with : ${bmi} BMI</span>`;
    } else if (bmi > 18.6 && bmi < 24.9) {
      results.innerHTML = `<span>You are Normal Rang of Weight with : ${bmi} BMI</span>`;
    } else {
      results.innerHTML = `<span>You are over Weight with : ${bmi} BMI</span>`;
    }
  }
});
