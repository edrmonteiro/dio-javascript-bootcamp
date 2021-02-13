const assert = require('assert');
const Math = require('../src/math.js');

let value = 0

describe('Math class', function() {
    //hooks before after afterEach
    beforeEach(function() {
        value = 0;
    })
    it('Sum two numbers', function() {
        const math = new Math();
        this.timeout(3000);

        value = 5
        math.sum(value, 5, value => {
            assert.equal(value, 10);
            done();
        })
        assert.equal(math.sum(5,5), 10);

    });
    //it.only ('Multiple two numbers', function() {
    it ('Multiple two numbers', function() {
        const math = new Math();
        assert.equal(math.multiply(value,5), 0);
    });
})