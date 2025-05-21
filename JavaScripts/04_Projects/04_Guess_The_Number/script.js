// Step # 1

// 💠💠Generate Random Number from [1-100]💠💠

let randomNumber = parseInt(Math.random() * 100 + 1);

// Step # 2

// 💠💠Select All values and take it from document and store them in variables💠💠

const submitBtn = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessesSlot = document.querySelector(".guesses");
const remaningChances = document.querySelector(".lastResult");
const lowOrHiValues = document.querySelector(".lowOrHi");
// in this we uppdate all things and also remaning and guessessSlot too for this we select complete [resultParas] 🔻

const forStartOverGAme = document.querySelector(".resultParas");

// Step # 3

// 💠💠Insert (create) Some Values and inject them in futur to this project for start new Game💠💠

const p = document.createElement("p");

// Step # 4

// 💠💠Now we discuss strategy that what we should required💠💠

let prevGuess = [];

// 🔺 we use this bcz when user guess the value we should show them all his attemps value in this array bcz when he try new attemp then user make sure that he should not use same value which he try already

// Now we track that how much attemps user can attemp and how much remaining for this we use🔻

let numberOfGuesses = 1;

// 🔺 we start it with 1 that this is your 1st guess and when is go to 10 now we disable submit btn that he should not submit and now he re-start the game

// Now we take a varaible 🔻

let playGame = true;

// 🔺 when we desigine games there should be always use this type of variable that should allow us for to play the game now suppose our event should be completed or our coins should be ended or some thing like this then with out checking this condition you should not move to next and by this all games should be desinged

// Step # 5

// 💠💠Now 1st of all check are avalabality for play game or not💠💠

if (playGame) {
  // now if you should be abel to play game then what should you do .then we add event on submit btn

  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    // now we add this {guess} value to validateGuess() function.
    validateGuess(guess);
  });
}

// Step # 6

// 💠💠Now write some function and in this we define that how work should be done💠💠

// 💎1st Function💎

// In this function I need  [validate Guess] ==> in this we take a guess and I will validate it mean in this I check that the user must be pass the number and number should be +ve value and the value should be in b/w our decleared range if he did not pass number according to our requirement then I will give him msg for validation of value 🔻

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("please enter a valid number");
  } else if (guess < 1) {
    alert("please enter a number more then 1");
  } else if (guess > 100) {
    alert("please enter a number less then 100");
  } else {
    // When above all conditions  should not be true then I should be able to play game

    // So first of all I push the [guess] to [prevGuess array]🔻
    prevGuess.push(guess);

    // now after validation then I check that when I push value to array now it is possibilty that this is user last attempt mean [numberOfGuesses === 10] bcz it is possiblity and after that I didnot want to allow user for furthar attemps. For this I will check that is its game over or not. So for this I will check that if the [numberOfGuesses] is equal to 10 then I will disable the submit btn and I will show him the msg that your game is over and you can not play anymore. So for this I will use [endGame()] function 🔻

    if (numberOfGuesses === 10) {
      // Now we push the [guess] to [displayGuess] method.now how to [displayGuess]  this is not our headack this will done in displayGuess() in future of this project🔻
      displayGuess(guess);
      // Now we also call [displayMessage] method.now how to [displayMessage]  this is not our headack this will done in displayMessage() in future of this project 🔻

      displayMessage(`Game Over! The number was ${randomNumber}`);

      // now we also end the game for this we also call [endGame] method. now how to [end the game] this is not our headack this will done in endgame() in futureof this project🔻

      endGame();
    } else {
      // Now when we come into this section it means our [number is > 11] bcz we check it above through condition .So now what we do ? we do to displayGuess bcz we tell them that you set this number and it will go to your guess list.

      displayGuess(guess);
      // now we check that your guess is correct or not for this we call checkGuess() method 🔻
      checkGuess(guess);
      // now we should not there to display displayMessage() method bcz now we do not want to show our message we use it in [checkGuess] method. and there we check and show that our guees is hiorlow
    }
  }
}

// 💎2nd Function💎

// In above fn() we get only validation and by that we did not print any msg from that fn(). So for printing the msg that your value or guessed value is correct or low or high value. So for that checking work should be here. Validation and check both are same name but if we want to change any other name to these fns() it totally depends on you 🔻

function checkGuess(guess) {
  //now there we actuallay check that our guess is this equal or high or low to random value and by this we display them messages
  if (guess === randomNumber) {
    // now we check that if the guess is equal to random number then I will show him the msg that you are correct and also I will show him the random number and also I will call [endGame] method 🔻
    displayMessage(`Congratulations! ${randomNumber} is correct!`);
    // now we end the game bcz when he know the actual value then why we play furtur🔻
    endGame();
  } else if (guess < randomNumber) {
    // now we check that if the guess is less then random number then I will show him the msg that your guess is too low  🔻
    displayMessage("Your guess is too low!");
  } else {
    // now we check that if the guess is greater then random number then I will show him the msg that your guess is too high 🔻
    displayMessage("Your guess is too high!");
  }
}

// 💎3rd Function💎

// This will display all guessess in array and In this we should do that the user input Value should be [empty] bcz user take next guess empty input field and other thing is to add our [guess] in our [innerHTML] and also decrease the [guessess Remaning] by 1. So all DOM Manupluation should be in this function 🔻

function displayGuess(guess) {
  //In this 1st of all we should earase userInput value. For further getting values🔻
  userInput.value = "";
  // now when user give values then we push this value into [guesees] slot mean display them in web page by adding guess into innerHTML like🔻
  guessesSlot.innerHTML += `${guess}, `;
  // now when user give value and we push it to array now we also update numberofGuesses by ++.🔻
  numberOfGuesses++;
  // now we also update the [guessess Remaning] by -1. and this is directly in there bcz JS allow us for this 🔻
  remaningChances.innerHTML = `${11 - numberOfGuesses}`;
}
// 💎4th Function💎

// bcz in checkGuesses fn() we print msgs so, if I want then I dirictly print msgs in that above checkGuesses fn(). but I can create an other fn() that is [displayMessage]. So in this method when we use dispalymessage method in this we take a msg and I will show directly msg to you on webpage bcz this fn() directly interact with [DOM].🔻

function displayMessage(msg) {
  lowOrHiValues.innerHTML = `<h2>${msg}</h2>`;
  lowOrHiValues.style.backgroundColor = "yellow";
  lowOrHiValues.style.color = "black";
  lowOrHiValues.style.padding = "5px";
}

// 💎5th Function💎

// This end Game 🔻

function endGame() {
  // in this we empty the userInput field🔻
  userInput.value = "";
  // now we also disable the submit btn bcz user can not play anymore and user donot add value to it for this we set the attribute to it 🔻
  userInput.setAttribute("disabled", "disabled");

  // now we also add a start btn to start the game again and we also add a class list to the paragrapgh which we create before on above.so that we can style it 🔻
  p.classList.add("button");
  // now we add innerHTML to it

  p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
  p.style.cursor = "pointer";
  p.style.backgroundColor = "green";
  p.style.color = "white";
  p.style.padding = "10px";
  p.style.borderRadius = "5px";

  // now we append this to the [forStartOverGAme] bcz we want to show it in this section 🔻
  forStartOverGAme.appendChild(p);
  // now we false the playGame bcz we do not want to play game anymore 🔻
  playGame = false;

  // now we call newGame() method

  newGame();
}

// 💎6th Function💎

// This will start newGame 🔻

function newGame() {
  // now 1st of all we get the referance of btuutone which we create in endgame method 🔻

  const newGameBtn = document.querySelector("#newGame");

  // now we add event to it and when user click on it then we will start the game again 🔻
  newGameBtn.addEventListener("click", () => {
    // now 1st of all we generate new random number 🔻
    randomNumber = parseInt(Math.random() * 100 + 1);
    // now we also reset the [numberOfGuesses] to 1 bcz we start the game again and we also reset the [prevGuess] array to empty array bcz we start the game again 🔻
    numberOfGuesses = 1;
    prevGuess = [];
    guessesSlot.innerHTML = "";
    remaningChances.innerHTML = 10;
    // now remove attribute from the userInput field bcz we want to allow user to add value to it 🔻
    userInput.removeAttribute("disabled");
    // now we also remove the [p] element from the [forStartOverGAme] bcz we do not want to show it again and again 🔻
    forStartOverGAme.removeChild(p);
    // now change the playGame to true bcz we want to play game again 🔻
    playGame = true;
  });
}

/*
           💠💠whole code without comments💠💠

           step # 1

           let randomNumber = parseInt(Math.random() * 100 + 1);

            step # 2

            const submitBtn = document.querySelector("#subt");
            const userInput = document.querySelector("#guessField");
            const guessesSlot = document.querySelector(".guesses");
            const remaningChances = document.querySelector(".lastResult");
            const lowOrHiValues = document.querySelector(".lowOrHi");

            step # 3

            const forStartOverGAme = document.querySelector(".resultParas");

            step # 4

            let prevGuess = [];
            let numberOfGuesses = 1;
            let playGame = true;

            step # 5
            if (playGame) {
              submitBtn.addEventListener("click", (e) => {
                e.preventDefault();
                const guess = parseInt(userInput.value);
                validateGuess(guess);
              });
            }

            step # 6

            function validateGuess(guess) {
              if (isNaN(guess)) {
                alert("please enter a valid number");
              } else if (guess < 1) {
                alert("please enter a number more then 1");
              } else if (guess > 100) {
                alert("please enter a number less then 100");
              } else {
                prevGuess.push(guess);
                if (numberOfGuesses === 10) {
                  displayGuess(guess);
                  displayMessage(`Game Over! The number was ${randomNumber}`);
                  endGame();
                } else {
                  displayGuess(guess);
                  checkGuess(guess);
                }
              }
            }
              
            function checkGuess(guess) {
              if (guess === randomNumber) {
                displayMessage(`Congratulations! ${randomNumber} is correct!`);
                endGame();
              } else if (guess < randomNumber) {
                displayMessage("Your guess is too low!");
              } else {
                displayMessage("Your guess is too high!");
              }
            }

            function displayGuess(guess) {
              userInput.value = "";
              guessesSlot.innerHTML += `${guess}, `;
              numberOfGuesses++;
              remaningChances.innerHTML = `${11 - numberOfGuesses}`;
            }

            function displayMessage(msg) {
              lowOrHiValues.innerHTML = `<h2>${msg}</h2>`;
              lowOrHiValues.style.backgroundColor = "yellow";
              lowOrHiValues.style.color = "black";
              lowOrHiValues.style.padding = "5px";
            }

            function endGame() {
              userInput.value = "";
              userInput.setAttribute("disabled", "disabled");
              p.classList.add("button");
              p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
              p.style.cursor = "pointer";
              p.style.backgroundColor = "green";
              p.style.color = "white";
              p.style.padding = "10px";
              p.style.borderRadius = "5px";
              forStartOverGAme.appendChild(p);
              playGame = false;
              newGame();
            }

            function newGame() {
              const newGameBtn = document.querySelector("#newGame");
              newGameBtn.addEventListener("click", () => {
                randomNumber = parseInt(Math.random() * 100 + 1);
                numberOfGuesses = 1;
                prevGuess = [];
                guessesSlot.innerHTML = "";
                remaningChances.innerHTML = 10;
                userInput.removeAttribute("disabled");
                forStartOverGAme.removeChild(p);
                playGame = true;
              });
            }





*/
