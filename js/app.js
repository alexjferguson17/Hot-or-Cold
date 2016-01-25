
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

    var randomNumber;
    var numberStore;
    var guessCount = 0;
    var listGuesses = [];

    

    $('#guessButton').on('click', function(){

    numberStore = $('#userGuess').val()
    numberGuessPositive();
    guessCount = guessCount + 1;
    $('#count').text(guessCount);
    listGuesses.push(numberStore);
    $('#guessList').text(listGuesses);     

  });

    var numberGuessPositive = function(){//Add a variable to store the difference.

      var numberDifference = (randomNumber - numberStore);
      var possitiveNumber = Math.abs(numberDifference);

         if( numberStore == randomNumber){
          $('#feedback').text("You guessed the number!");
        }else if(possitiveNumber > 50){
          $('#feedback').text("You are Ice Cold!");
        }else if(possitiveNumber > 40){
          $('#feedback').text("You are aren't Ice cold, but still Cold!");
        }else if(possitiveNumber > 30){
          $('#feedback').text("You are getting warmer");
        }else if(possitiveNumber > 20){
          $('#feedback').text("It's getting hot in here");
        }else if(possitiveNumber > 10){
          $('#feedback').text("I'm sweating bulletes now!");
        }else if(possitiveNumber < 10){
          $('#feedback').text("I'm melting now!");
        }

      
}//Ends numberGuessPositive Function


    $('ul').on('click', '.new', function(){

      newGame();


    })//Ends the on/click function.

  	function newGame(){//A Function that will run commands when a new game starts.

  			randomNumber = Math.floor((Math.random()* 100) +1);
  			console.log(randomNumber);//Test Random Number.
        $('#userGuess').val("");
        $('#count').text("");   
        $('#guessList').text("");
        guessCount = 0;
        listGuesses = [];

  	}//Ends the newGame function.

     $('form').submit(function(event){

        event.preventDefault();
        return false;

    });

  	newGame();//Calls the New game Function.


});//End of Document Ready.


