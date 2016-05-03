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
require('./01_Quiz.js');
var assert = require('assert');

describe('Test:Order', function() {
	it('Case 1', function () {
		assert.ok(order('is2 Thi1s T4est 3a') == 'Thi1s is2 3a T4est', 'This is a Test');
    })

    it('Case 2', function() {
        assert.ok(order('4of Fo1r pe6ople g3ood th5e the2') == 'Fo1r the2 g3ood 4of th5e pe6ople', 'For the good of the people');
	})

	it('Case 3', function () {
		assert.ok(order('') == '', 'Empty');
	})
})
