// Example # 1

document
  .getElementById("changeTextButton")
  .addEventListener("click", function () {
    document.getElementById("myParagraph").innerHTML = "Text has been changed!";
  });

// Example # 2

document
  .querySelector("#highlightFirstCity")
  .addEventListener("click", function () {
    const cityList = document.querySelector("#citiesList");
    cityList.firstElementChild.classList.add("highlight");
  });

// Example # 3
document.querySelector("#changeOrder").addEventListener("click", function () {
  let coffeeType = document.querySelector("#coffeeType");
  coffeeType.textContent = "Espresso";
  coffeeType.style.backgroundColor = "brown";
  coffeeType.style.padding = "10px";
});

// Example # 4

document.getElementById("addNewItem").addEventListener("click", function () {
  let newItem = document.createElement("li");
  newItem.textContent = "chai";

  document.getElementById("shoopingList").appendChild(newItem);
});

// Example # 5

document
  .getElementById("removeLastTask")
  .addEventListener("click", function () {
    document.querySelector(".taskList").lastElementChild.remove();
  });

// Example # 6

// document.getElementById("clickMeButton").addEventListener("click", function () {
//   alert("Click Event Run!");
// });

// document
//   .getElementById("clickMeButton")
//   .addEventListener("mouseover", function () {
//     alert("Mouse Over Event run");
//   });

document
  .getElementById("clickMeButton")
  .addEventListener("dblclick", function () {
    alert("Double CLick Event run");
  });

// Example # 7

document.querySelector("#teaList").addEventListener("click", function (event) {
  if (event.target && event.target.matches(".teaItem")) {
    alert(`You clicked on : ${event.target.textContent}`);
  }
});

// Example # 8
document
  .querySelector("#feedbackForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission
    const feedBack = document.querySelector("#feedbackInput").value;
    document.querySelector(
      "#feedbackDisplay"
    ).innerHTML = `FeedBack is : ${feedBack}`;
    // console.log(document.querySelector("label").textContent);
  });

// Example # 9

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("domStatus").textContent =
    "DOM is fully loaded and parsed";
});

// Example # 10

document
  .querySelector("#toggleHighlight")
  .addEventListener("click", function () {
    const discriptionText = document.querySelector("#descriptionText");
    discriptionText.classList.toggle("highlight");
  });

  
