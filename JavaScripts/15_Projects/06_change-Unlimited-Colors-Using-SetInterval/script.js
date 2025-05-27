// Generate a random Color

const randomColor = function () {
  let hex = "0123456789ABCDEF";

  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

// Now add click event on start button and change the bgColor in every second continoiusly

// also learn the approch of writting the function outside from event and inside to event both approches we can study here 

//write a function outside to event for start

let intervalId;
const startClickBtn = function () {
    // we use this if condtion which clear at the end 🔻 so study there
  if(!intervalId){
    intervalId = setInterval(() => {
      document.body.style.backgroundColor = randomColor();
    }, 1000);
  }
  
};

document.querySelector("#start").addEventListener("click", startClickBtn);

// write a function inside to event 

document.querySelector("#stop").addEventListener("click", function () {
  clearInterval(intervalId);

//   this is extra thing if we do not make it [null] it should work but this is best practise to make it [null] and when we give it value first we give safty check that if(!intervalId) ya aesy b check lg skyta h [if(intervalId === null)] both same hn.  then do work

  intervalId = null;
});
