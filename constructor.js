// var inquirer = require('inquirer');


//Create Constructor - Basic FlashCard
function BasicCard(front, back){
	this.front = front;
	this.back = back;
}

var presidentQuestion = new BasicCard("Who was the first president?","George Washington");
var animalQuestion = new BasicCard("What animal does make a moo sound?","Cows");

// console.log(presidentQuestion);

//Create Constructor - ClozeCard
function ClozeCard(text, cloze){
	this.text = text;
	this.cloze = cloze;
	this.partial = function(){
		var textSplit = this.text.split(" ");
		var clozeSplit = this.cloze.split(" ");
		for(var i = 0; i < textSplit.length; i++){
			for(var j = 0; j < clozeSplit.length; j++){
				if(textSplit[i] === clozeSplit[j]){
					textSplit.splice(i, 1);
					textSplit.splice(i, 0, "...");
				}
			}
		}

		console.log(textSplit.join(" "));
	}
}

var javascriptQuestion = new ClozeCard("Variables declare the value of an item","Variables");
var functionQuestion = new ClozeCard("When you call a function the method is run","function");

javascriptQuestion.partial();
functionQuestion.partial();