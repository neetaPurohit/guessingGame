  let randomNumber = parseInt(Math.random() * 100 + 1);

  const submit = document.querySelector('#subt');
  const userInput = document.querySelector('#guessField');
  const guessSlot = document.querySelector('.guesses');
  const remaining = document.querySelector('.lastResult');
  const lowOrHi = document.querySelector('.lowOrHi');
  const startOver = document.querySelector('.resultParas');

  const p = document.createElement('p');

  let prevGuess = []
  let numGuesses = 1;

  let playGame = true;
    
  if(playGame){
    submit.addEventListener('click', function(e){
      e.preventDefault();
      const guess = parseInt(userInput.value);
      console.log(guess);
      validateGuess(guess) 
    })
  }
  function validateGuess(guess){
    //for valid guess

    if(isNaN(guess)){
      alert("please enter a valid Number");
    }else if(guess<1){
      alert("please enter a Number greater than one");
    }else if(guess>100){
      alert("please enter a  Number less than 100");
    }else{
      prevGuess.push(guess);
      if(numGuesses === 11){
        displayGuess(guess);
        displayMessage(`game over. Random number was  ${randomNumber}`)
        endGame();
      }else{
        displayGuess(guess);
        checkGuess(guess);  
      }
    }

  }

  function checkGuess(guess){
    //for check guess
    if(guess=== randomNumber){
      displayMessage("You gussed it right:)");
      endGame();
    }else if(guess < randomNumber){
      displayMessage(`Number is too low`)
      
    }else if(guess > randomNumber){
      displayMessage(`Number is too High`)
    }
  }

  function displayGuess(guess){
  userInput.value = '';
  guessSlot.innerHTML += `<span class = "prev-guess">${guess}</span>,`;
  numGuesses++;
  remaining.innerHTML = `${11-numGuesses}`;
  }
  

  function displayMessage(message){
  lowOrHi.innerHTML = `<h2> ${message}</h2>`;
  
   let lowerCaseMessage = message.toLowerCase().trim(); 
   console.log("Lowercase message:", lowerCaseMessage); 

  if(lowerCaseMessage.includes("too low")){
    lowOrHi.style.color = "blue";
  }else if(lowerCaseMessage.includes("too high")){
    lowOrHi.style.color = "orange";
  }else{
    lowOrHi.style.color = "green";
  }
  }

  function endGame(){
  userInput.value = '';
  userInput.setAttribute('disabled','');

  p.classList.add('new-game-btn');
  p.innerHTML = `<button id="newGame">Start New Game</button>`;
  startOver.appendChild(p);
  playGame= false;
  newGame();
  }

  function newGame(){
  let newGamebtn = document.querySelector('#newGame');
  newGamebtn.addEventListener('click',function(e){
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuesses = 1
    guessSlot.innerHTML = []
    remaining.innerHTML =  `${11-numGuesses}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p)
    
      playGame = true;

  });
  }
