//game.js 

module.exports = {

	//data 
	list: ['Turkey Burger', 'Caesar Salad', 'Pizza'],  

	//selects aw word from the list 
	getWord:function(){
		var rand = Math.floor(Math.random() * this.list.length) + 0;  

		this.random=  this.list[rand]; 

				
	},

	//ends the game with either a win or a loss 
	endGame:function(result){

		switch(result){

			case 'win':
				console.log('you win');
				game.finished = true; 
				break; 
			case 'lose':
				console.log('you lose');
				game.finished = true;  
				break; 
		}
	},

	//tells the program that this is a new game 
	newGame:true, 

	//tells the program that the game is finished 
	finished:false 

}













