(function () {


	$(document).on('click', function () {
		$('.textarea').focus();
	});


	var textArea = [],
		textAreaLength = 0,
		pictypeArea = $('.pictype-chararea'),
		elementToAppend,
		cursor = $('.cursor');



	// DISABLE ARROWS AND ENTER

	document.onkeydown = preventArrows;
	function preventArrows(e) {
	    e = e || window.event;
	    console.log(e.keyCode); 
	    if (e.keyCode == '37' || e.keyCode == '38' || e.keyCode == '39' || e.keyCode == '40' || e.keyCode == '13' ) {
	    	e.preventDefault();
	    	return false;
	    }
	}


    // $(document).keydown(function(objEvent) {        
    //     if (objEvent.ctrlKey) {          
    //         if (objEvent.keyCode == 65) {                         
    //         	return false;  
    //         }            
    //     }        
    // });




	$('.textarea').on('input', function (e) {

		// checks letter key pressed
		var currentString = $(this).val();

		// creates an array in which to access the different letters
		var currentStringArray = $(this).val().split('');
		var lastChar = currentStringArray[currentStringArray.length - 1];
		var badChar = ['`','0','-','=','[',']',';','.','/','!','@','#','$','%','^','&','*','(',')','_','+','{','}',':','"','<','>','?',"'"];
		
		// returns the invalid letters from the array
		var inArray = isInArray(lastChar, badChar);

	


		// IF INPUT IS SPACE BAR TAKE OUT IMG TAG (CUZ U NEED A DIV TO BE PLACED)
		if (lastChar === ' ') {
			var elementToAppend = '<div class="pictype-char ' + lastChar + '"></div>';
		} 
		
		else if (inArray) {
			// IF LAST CHAR IS BAD CHAR DOES NOT APPEND ANYTHING
			var elementToAppend ='';
		}

		
		else {
			console.log(lastChar);
			// appends the image related to the key, creates a custom time id so that the gif doesnt repeat
			elementToAppend = '<div class="pictype-char ' + lastChar + '"><img src="assets/gif-font/eiji/' + lastChar + '.gif?id=' + Math.random() + '"/></div>';
			// textArea.push(lastChar);
			console.log(textArea);
			console.log(elementToAppend);
		}



		// IF ITEM IS ADDED TO CURRENT STRING APPEND TO PIC TYPE AREA
		if (currentStringArray.length > textAreaLength ) {
			pictypeArea.append(elementToAppend);
			textAreaLength = currentStringArray.length;
			console.log(currentStringArray);
		} 

		else {
			console.log($('.pictype-char').last());
			$('.pictype-char').last().remove();
			textAreaLength = currentStringArray.length;
		}

		// on click event handler that creates a new instance of the gif for that letter and reanimates the letter
		$('.pictype-char').on('click', function (e) {
			var currentCharClass = $(this).context.className.split(' ')[1];
			console.log($(this).children(':first-child').attr('src', 'assets/gif-font/eiji/' + currentCharClass + '.gif?id=' + Math.random()));
		});
			

	});



	// checks wether the 'values' exist in the 'array'
	// returns the invalid keys
	function isInArray(value, array) {
      return array.indexOf(value) > -1;
    }

   // checks the length of the text area for something not sure
   // guessing some type of limit
    $('textarea').keydown(function(){
    	var length = $('textarea').val().length;
    	console.log(length);
    });









})();




// OPTIMIZE FOR MOBILE
	// find way to bring up the mobile keyboard using javascript or the invisible textarea.


// ENTER KEY
	// how is it going to work code wise
	// when you press enter doe the box get bigger? height wise.


// CLICK
	// how is click going to work
	// differentiating between clicking on a lettter or between letters.


//SINGLE WORDS
	// CODE TO RECOGNIZE SINGLE WORDS(WHEN SPACE IS PRESSED)
	// When space key is pressed, will activate function to wrap last chunk of letter into a word


// ARROWS
	// capture the arrow key events and disable them (DONE)
	// create new functions that move the stipe-line to where it should be in pictype
	// once the user starts typing in the middle of words have the letter inputted go into the correct array and visualize it.




































