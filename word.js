
/* 
* word.js should contain all of the methods which will check 
the letters guessed versus the random word selected.
---It compares 

*/

module.exports =  {
	//compares the guess letter to find a match 
	checkGuess:function(guess , choice){

		for(var i = 0 ; i < choice.length; i++){
			var letter = choice[i]; 

			if(guess === letter){
				return true; 
			}
		}
	}
}

module.exports.checkGuess('a', 'apple'); 





