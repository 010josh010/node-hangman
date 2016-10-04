//constants 
const inquirer = require('inquirer'); 

//variables 
var game = require('./game.js');
var word = require('./word.js'); 
var letter = require('./letter.js'); 
var guessesRemaining = 10; 


//
function main(){
	
	if(game.newGame){
		//get a random word 
		game.getWord();

		//initalize new word 
		word.inializeWord(game.random); 
		//shows hidden word 
		letter.showHidden(game.random); 

		game.newGame = false; 
	} 

	
	//prompt for input 
	inquirer.prompt([
	{
		type:'input',
		name:'guess', 
		message:'Choose a letter', 
	}

	]).then(function (answers) {
	   var guess = answers.guess;
	    	
	    	//check the guess 
			if(!word.checkGuess(guess, game.random)){
				guessesRemaining--; 
				console.log('Guesses Remaining:', guessesRemaining); 
			}

			//display the word 
			letter.check(guess, word.checked); 


			//display results
			letter.display(word.checked); 

			//check for a winner 
			word.isItTrue(game.endGame); 

			//check for a loser 
			if(guessesRemaining === 0){
				game.endGame('lose'); 

			}

			//is the game over 
			if(game.finished === true){
				return false; 
			}else{
				//recursively calls the main method 
				main(); 
			}


	});
}

//main program call 
main(); 




