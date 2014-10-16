

(function () {



	var textAreaLength = 0
	var pictypeArea = $('.pictypeArea');
	var lastCharFile;




	$('.textareadiv').keyup(function() {



	


		var currentString = $(this).text(),
		currentStringArray = currentString.split(''),
		lastChar = currentStringArray[currentStringArray.length - 1],
		lastCharNumber;


	

		var alphabetNumbers = {
			a : '0',
			b : '1',
			c : '2',
			d : '3',
			e : '4',
			f : '5',
			g : '6',
			h : '7',
			i : '8',
			j : '9',
			k : '10',
			l : '11',
			m : '12',
			n : '13',
			o : '14',
			p : '15',
			q : '16',
			r : '17',
			s : '18',
			t : '19',
			u : '20',
			v : '21',
			w : '22',
			x : '23',
			y : '24',
			z : '25'		 	
		};


		// GET NUMBER ASSOCIATED TO LETTER
		lastCharNumber = alphabetNumbers[lastChar];
		// console.log(alphabetNumbers[lastChar]);



	
		$.getJSON( "js/data.json", function( json ) { 
			console.log(json.alphabet);
			console.log( "JSON Data: " + json.alphabet[lastCharNumber].file ); 
			lastCharFile = json.alphabet[lastCharNumber].file;
			console.log(lastCharFile);
			init();
		});



		





			// json.alphabet[lastCharNumber].file
			// console.log( "JSON Data: " + json.alphabet[lastCharNumber].file );
			// console.log( "JSON Data: " + json.alphabet[2].file );

	

		





		// console.log(lastChar.character);


		// if ( lastChar === lastChar.character) {
		// 	lastCharNumber = input.number;

		// }




		// if ( lastChar === 'a' ) {
		// 	lastCharNumber = 1;
		// }




		if (lastChar === ' ') {
			var elementToAppend = '<div class="pictype-char ' + lastChar + '"></div>';
		} 

		else {
			// appends the image related to the key, creates a custom time id so that the gif doesnt repeat		
			elementToAppend = '<div class="pictype-char ' + lastChar + '"><img src="assets/gif-font/eiji/' + lastChar + '.gif?id=' + Math.random() + '"/></div>';
		}




		// IF ITEM IS ADDED TO CURRENT STRING APPEND TO PIC TYPE AREA
		if (currentStringArray.length > textAreaLength ) {
			pictypeArea.append(elementToAppend);
			textAreaLength = currentStringArray.length;
			// console.log(currentStringArray);
		} 



		// else {
		// 	console.log($('.pictype-char').last());
		// 	$('.pictype-char').last().remove();
		// 	textAreaLength = currentStringArray.length;
		// }


		// on click event handler that creates a new instance of the gif for that letter and reanimates the letter
		// $('.pictype-char').on('click', function (e) {
		// 	var currentCharClass = $(this).context.className.split(' ')[1];
		// 	console.log($(this).children(':first-child').attr('src', 'assets/gif-font/eiji/' + currentCharClass + '.gif?id=' + Math.random()));
		// });
			

	});






// letter
// file
// width







})();

