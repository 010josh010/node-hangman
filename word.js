//word.js 
module.exports =  {
	//compares the guess letter to find a match 
	checkGuess:function(guess , choice){

		for(var i = 0 ; i < choice.length; i++){
			var letter = choice[i]; 
			

			if(guess.toLowerCase() === letter.toLowerCase()){
				return true; 
			}
		}
	}, 

	//creates a new word based on the random selection 
	inializeWord:function(choice){
		
		var word = []; 
		//makes the choice into an array 
		choice = choice.split(''); 

		choice.map(function(letter){

			//creates a new object to hold a letter and creates a show method 
			var newObj = {}; 
			newObj.letter = letter; 
			newObj.show = false; 
			word.push(newObj); 
		})

		this.checked = word; 

	}, 

	//array for letter key value pairs 
	checked:[], 
	
	//checks the word to see if all letters have been guessed 
	isItTrue:function(win){
		var self = this; 

		self.status = true; 

		self.checked.map(function(letter){

			if(letter.show === false){
				self.status = false;
			}
		})

		if(this.status === true){
			win('win'); 
		}
	
	}, 


}







