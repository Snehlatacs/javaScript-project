//Guess my number --[game] -- with retro design --goal of this project is simply guess the secret number which is between 1 and 20
'use strict';
/*
//                           ***Selecting and Manipulating Elements:***

document.querySelector('.message');//this query selector is a method that available in the document object. And into the  method we need to pass a selector here as 'message'.
console.log(document.querySelector('.message'));//output:<p class="message">Start guessing...</p>

console.log(document.querySelector('.message').textContent);//.querySelector('.message')- this part select the elment from document and then .textContent- this part read the content of the selected elment from the document. o/p:Start guessing...

//for setting the content for something else from it's original value on the web page:
document.querySelector('.message').textContent = '🎉Correct number';
//still the console value doesn't changed for that:🎉Correct number.
console.log(document.querySelector('.message').textContent);//o/p:

//doing same with different element..........
document.querySelector('.number').textContent = 19; 
document.querySelector('.score').textContent = 13;

//doing same with input field...
console.log(document.querySelector('.guess').value);//o/p:blank in console as no user input value yet neither we set any value.
document.querySelector('.guess').value = 23;// set the input value as like we have written it our selves in web page.
console.log(document.querySelector('.guess').value);//o/p:23.



//Handling click events : Event Listener.

//In order to listen for events we first need to select the element where the event should happen, and in our 
//game we need to first select check! button bcs when we click this button something should happen.
document.querySelector('.check').addEventListener('click', function() {
  const guess = Number(document.querySelector('.guess').value);//whenever we get something from user interface for example in input field, it always a string, so we have to convert it into a number so we can compare a number from a number.
  console.log(typeof guess, guess);
});

*/
//Start Implementing game logic.....

/* There is 3-senerio in the game is user guess the number:
   1.guess number is correct.
   2.guess number is lower.
   3.guess number is heigher.
*/

//defining the secret number at the begining at once
let num = Math.trunc(Math.random() * 20) + 1; //state variable: change when web page loaded and part of application.
//document.querySelector('.number').textContent = num;
let score = 20; //state variable:part of application.
let highScore = 0;

const displayMessage = function(message){
 document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess, guess);

  // first thing we do is to check if there is a value by user or not if not show message 'No Number.
  if (!guess) {
    // this condition here is true as guess = 0 which is falsy value but we change it using NOT operator so it become true the block of code runs.
    if (score > 1) {
      displayMessage('🚫No Number');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥You Lose The Game';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess === num) {
    displayMessage('🎉Correct number');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = num;
    highScore = Math.max(score,highScore);
    document.querySelector('.highscore').textContent = highScore;
  }  else if (guess !== num) {
    if (score > 1) {
      displayMessage(guess > num ? '📈 Too high':'📉 Too low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {displayMessage('💥You Lose The Game');
      
      document.querySelector('.score').textContent = 0;
    }
  }/*else if (guess > num) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too high';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥You Lose The Game';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < num) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too Low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥You Lose The Game';
      document.querySelector('.score').textContent = 0;
    }
  }*/
});

/* onclick event handler for Again! button.....
   1. Select element with the Again! class, and add even listener with click event.
   2. In the event handler function, restore the score and secret number.
   3. Restore the initial condition of the message, number, score and guess input field.
   4. Also restore the original background color (#222) and number width (15rem).
*/

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  num = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});


