
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

  	//alert('new' + compGuess);




   	$('#guessButton')
		.on('click', function(event) {  
  		var guessValue = $('#userGuess').val();
  		//alert(guessValue);

  		var tempObj = getTemp(guessValue, compGuess); // set this up to return an object for fun

  		//addFeedback(tempObj.guessColor)

  		//alert(tempObj.guessColor);

  		$('#feedback').empty();
 		$('#feedback').append(tempObj.guessColor);



  		guessCount = guessCount + 1;

  		$('#count').empty();
 		$('#count').append(guessCount);

  		//alert(guessCount);

  		
  		//alert(guessValue);
  		//alert(compGuess);
  		//alert(myTemp);
  		event.preventDefault();
  		//event.stopPropagation;

  		
	});

});

function addFeedback(guessColor){// this not working

	$('#feedback').replaceWith( "<h2>" + guessColor + "</h2>" ); // this isn't updating - check event delegation - event default below may prevent 
};

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

function getRand(){
  var myRand = Math.floor((Math.random() * 100) + 1); // changing this to make it easier to test equals
 // alert(myRand);
  return myRand;
  	};



/* while guess != random pick
get guess 
checkNum function - cold or warm or eaul nested ifs
increment counter

replaceWith removes the element from the dom - try
 $('#listdata').empty();
 $('#listdata').append(results);
*/
