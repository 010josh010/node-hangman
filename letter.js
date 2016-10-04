//letter.js 
module.exports = {

	//checks the word to decide whether to show it or not 
	check:function(guess , word){
		
		word.filter(function(letter){
			
			if(guess.toLowerCase() === letter.letter.toLowerCase() || letter.letter === ' '){
				letter.show = true; 
	
			} 
		})

	},

	//displays the word to the screen 
	display:function(word){
		//creates a new string 
		var str = ''; 

		word.map(function(letter){
			if(letter.show === true){
				str += letter.letter+' '; 

			}else{
				str+= '_ '; 
			}
		})

		console.log(str); 
	}, 

	//shows an encrypted string for the user to make a guess 
	showHidden:function(choice){
		var hiddenStr = '';
		var space = ' '; 

		for(var i = 0 ; i < choice.length; i++){
			var letter = choice[i]; 
			if(letter === space){
				hiddenStr += ' '; 
			} else{
				hiddenStr += '_ ';
			}
		} 

		console.log(hiddenStr); 
	},



}





