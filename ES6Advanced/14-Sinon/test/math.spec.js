const assert = require('assert');
const Math = require('../src/math.js');
const expect = require('chai').expect;
const sinon = require('sinon');

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
            expect(value).to.equal(10);
            done();
        })
        assert.equal(math.sum(5,5), 10);

    });
    //it.only ('Multiple two numbers', function() {
    it ('Multiple two numbers', function() {
        const math = new Math();
        const obj = {
            name: 'Eduardo Monteiro'
        };
        const obj2 = {
            name: 'Eduardo Monteiro'
        };
        expect(obj)
            .to.have.property('name')
            .equal('Eduardo Monteiro');
        expect(math.multiply(value, 5)).to.equal(0);

        expect(obj).to.deep.equal(obj2);
    });

    it.only('Calls req with sum and index values', function() {
        const req = {};
        const res = {
            load: sinon.spy()
        };
        const math = new Math();
        math.printSum(req, res,  5, 5);
        expect(res.load.calledOnce).to.be.false;

    })
})