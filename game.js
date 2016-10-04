
/*
* Your game.js file will randomly select a word for the player.
main.js will contain the logic of your app. Running it in
 Terminal/Bash will start the game.

*/

//data 
var list = ['Turkey Burger', 'Caesar Salad', 'Pizza']; 

module.exports = {

	getWord:function(){
		var rand = Math.floor(Math.random() * list.length) + 0;  

		this.random= list[rand]; 

				
	},

	endGame:function(result){

		switch(result){

			case 'win':
				console.log('you win'); 
				break; 
			case 'lose':
				console.log('you lose'); 
				break; 
		}
	}

}













