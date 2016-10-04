
/*
* letter.js should control whether or not a letter appears as 
a "_" or as itself on-screen.
---It reveals 

*/
module.exports = {

	check:function(guess , choice, word){
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

		word.checked = result.join(' '); 
	}

}






