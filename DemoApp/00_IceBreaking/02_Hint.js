/*
 * Quiz "Your order, please"
 * 
 * Instruction
 *	Your task is to sort a given string. Each word in the String will contain a single number. 
 *	This number is the position the word should have in the result.
 *	Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).
 *	If the input String is empty, return an empty String. 
 *	The words in the input String will only contain valid consecutive numbers.
 *	For an input: "is2 Thi1s T4est 3a" the function should return "Thi1s is2 3a T4est"
 * 
 *	JavaScript runs on Node v0.10.21. 
 *	All code is ran through BabelJS (ES 2015 supported)
 * 
 */

order = function(words) {
	
	if (!words || words == '')
		return '';

	var result = new Array();

	words.split(' ').map((word) => {
		result[parseInt(word.replace(******, ''))] = word;  // ****** 로 표시된 곳에 들어갈 정규식 6자리 문자
	});

	return result.reduce((a,b) => {
		return a + ' ' + b;
	}).trim();
}

