const buttons = document.querySelectorAll(".button");
// console.log(buttons);
const body = document.querySelector("body");
buttons.forEach((btn) => {
  //   console.log(btn);
  btn.addEventListener("click", function (e) {
    // console.log(e);
    // console.log(e.target);

    // 💠💠1st method💠💠

    // body.style.backgroundColor = e.target.id;

    // 🔺In this we directly give [e.target.id] to [body.style.backgroundColor] and it take [id] which is equal to color name and automaticaly color should changed

    // 💠💠2nd method with [if] condition💠💠

    /*
    if (e.target.id === "grey") {
      //   body.style.backgroundColor = "grey";
      body.style.backgroundColor = e.target.id;
      //   🔺 both method are same bcz in 1st we use hard coded value but in 2nd we use [e.target.id] which is also equal to [grey] bcz it  will give us [id] and [id] is [grey]
    }

    if (e.target.id === "white") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "blue") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "yellow") {
      body.style.backgroundColor = e.target.id;
    }
      if (e.target.id === "purple") {
      body.style.backgroundColor = e.target.id;
    }
      */

    // 💠💠3rd method with [switch] case💠💠

    const bgColor = e.target.id;
    switch (bgColor) {
      case "grey":
        body.style.backgroundColor = e.target.id;

        break;
      case "yellow":
        body.style.backgroundColor = e.target.id;

        break;
      case "blue":
        body.style.backgroundColor = e.target.id;

        break;
      case "purple":
        body.style.backgroundColor = e.target.id;

        break;

      default:
        body.style.backgroundColor = "white";

        break;
    }
  });
});
