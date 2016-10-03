
//get random word and prompt the user for input 
//check weather the input was valid 
//display results 
//make use of constructors in the letter.js and word.js files
/* 
describe -----

* Both letter.js and word.js should be constructor files:

* word.js should contain all of the methods which will check 
the letters guessed versus the random word selected.
---It compares 

* letter.js should control whether or not a letter appears as 
a "_" or as itself on-screen.
---It 

* Your game.js file will randomly select a word for the player.
main.js will contain the logic of your app. Running it in
 Terminal/Bash will start the game.

The app should end when a player guesses the correct 
word or runs out of guesses.

-----------------------
*/ 

//constants 
const inquirer = require('inquirer'); 

//variables 
var game = require('./game.js');
var word = require('./word.js'); 
var letter = require('./letter.js'); 
var guess = 'a'; 


//get a random word 

game.getWord(); 


//check the guess 
word.checkGuess(guess, game.random); 

//display the word 
letter.display(word.checked); 





