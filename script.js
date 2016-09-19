document.getElementsByTagName('title')[0].innerHTML = "0070 - TowerOfHanoi_Demo";

alert ("Js is WORKING!!  Lets do this!!")
var body = document.getElementsByTagName('body')[0];
var print = function ( text ) {

	if ( text === undefined )
		text = "";

	text = addHTMLWhitespaces( text );
	text = justifyText( text, 200 );

	body.innerHTML += text;
}
var println = function ( text ) {

	if ( text === undefined )
		text = "";

	print( text + '</br>' );
}
String.prototype.format = function() {

	var result = this;

	for ( i = 0; i < arguments.length; i++ ) {

		var pattern = new RegExp("\\{" + i + "\\}", "g" );
		result = result.replace( pattern, arguments[i] );
	}

	return result;
}
var addHTMLWhitespaces = function ( text ) {

	var pattern = new RegExp(" ", "g" );
	return text.replace( pattern, '&nbsp;' );
}
var justifyText = function ( text, inlineChars ) {

	var result = "";

	for ( var i = 0, counter = 1; i < text.length; i++ ) {

		if ( counter == inlineChars ) {

			if ( text[ i ] == " " || text[ i ] == "&" && isWhiteSpaceCode( text, i ) ) {

				result += "</br>";
				counter = 1;
			}
		}
		else {
			counter++;
		}
		result += text[ i ];
	}

	return result;
}
var isWhiteSpaceCode = function ( text, index ) {

	var result = true;

	var code = "&nbsp;";
	if ( ( index + code.length ) <= text.length ) {

		for ( var i = 0; result && i < code.length; )
			if ( text[ index++ ] != code[ i++ ] )
				result = false;
	}

	return result;
}
var run = function () {

	solveTowerOfHanoi( 4 );
}

function solveTowerOfHanoi( pieces ) {

	_solveTowerOfHanoi( pieces, 1, 3 );
}

var stack = "ABC";
function _solveTowerOfHanoi( pieces, startStack, endStack ) {

	if ( pieces == 0 ) return;

	var middleStack = 6 - startStack - endStack;
	_solveTowerOfHanoi( pieces - 1, startStack, middleStack );

	var text = "Move {0} from {1} to {2}"
						.format( pieces, stack[ startStack - 1 ], stack[ endStack - 1 ] );
	println( text );

	_solveTowerOfHanoi( pieces - 1, middleStack, endStack );
}


run();
