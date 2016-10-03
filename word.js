
/* 
* word.js should contain all of the methods which will check 
the letters guessed versus the random word selected.
---It compares 

*/

module.exports =  {
	//compares the guess letter 
	checkGuess:function(guess , choice){
		var result = [];
		var space = ' ';  
		//loops through the random word to find matches 
		for(var i = 0 ; i < choice.length; i++){
			var letter = choice[i];
			if(guess === letter){
				result.push(letter)
			}else if(letter === space){
				result.push(space)
			} else{
				result.push('_');
			}
		}

		this.checked = result.join(' '); 
	}
}

module.exports.checkGuess('a', 'apple'); 





