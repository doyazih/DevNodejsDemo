
require('./03_Answer.js');
var assert = require('assert');


describe('Test Order', function() {
	it('Test 1', function () {
		assert.ok(order('is2 Thi1s T4est 3a') == 'Thi1s is2 3a T4est', 'This is a Test');
    })

    it('Test 2', function() {
        assert.ok(order('4of Fo1r pe6ople g3ood th5e the2') == 'Fo1r the2 g3ood 4of th5e pe6ople', 'For the good of the people');
	})

	it('Test 3', function () {
		assert.ok(order('') == '', 'Empty');
	})
})
