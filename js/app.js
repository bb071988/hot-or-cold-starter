
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	var compGuess = getRand();
  	var guessCount= 0;

  	
    /* Most of the functionality is called from this function.  Function is called when a user
    clicks the guess button. */

   	$('#guessButton')
		.on('click', function(event) {  
  		var guessValue = $('#userGuess').val();
  		
  		var tempObj = getTemp(guessValue, compGuess); // set this up to return an object for fun

      /* clear out the feedback div on the form and set to guess color */
  		$('#feedback').empty();
      $('#feedback').append(tempObj.guessColor);


      /* increment the guessCount and display in the count div */
  		guessCount = guessCount + 1;
      $('#count').empty();
      $('#count').append(guessCount);


      /* withouth prefentDefault the click event bubbles up and a new random number is generated
      for each guess */

  		event.preventDefault();
  		  		
	});


 /* Function for the new game button.  Reset the relevant divs and reset the form.  If we don't reset
 the form the Placeholder text doesn't come back. */

  $('.new')
    .on('click', function(event) {

      $('#feedback').empty();
      $('#feedback').append("Make your guess!");

      $('#count').empty();
      
      var guessCount= 0;
      $('#count').append(guessCount);

      var compGuess = getRand();


      $('#myForm').trigger("reset"); // had to add the myForm ID to html naming form to reset it here

    }); // end new on click

}); // end document load 


/* leaving this in as a reminder - this function is not used.  Tried using replaceWith.  Believe this 
replaces the #feedback div when called.  Worked for the first guess but would not update on 
subsequent guesses.  Swapped for .empty() followed by .append() 

function addFeedback(guessColor){// this not working

	$('#feedback').replaceWith( "<h2>" + guessColor + "</h2>" );
}; */



/* this function takes user's guess and the random number generated by the game and compares.  It returns
an object comprising color and value associated with the absolute value difference between user's guess
and the random number as an object.  Probably don't need an object here but wanted to try returning one
and then referencing the individual values for fun. */

function getTemp(guessValue, compGuess){

	var absDiff = Math.abs(guessValue - compGuess);

	if(absDiff === 0){
		var guessColor ='Match'
		}

	else if(absDiff > 50)
		{
		var guessColor = 'Arctic';
		}

	else if(absDiff <51 && absDiff > 25)
		{
			var guessColor = 'Really Cold';
		}

	else if(absDiff < 25 && absDiff >10)
		{
			var guessColor ='Cold';
		}

	else 
		{guessColor = 'Warm';}


//return an object for fun
	return {
        guessColor: guessColor,
       	absDiff: absDiff,
		};
	};

/* This function generates the random number the user needs to guess */

function getRand(){
  var myRand = Math.floor((Math.random() * 100) + 1); // changing this to make it easier to test equals
  return myRand;
  	};
