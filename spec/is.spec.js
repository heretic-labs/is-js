'use strict';

const Is = require('../src/is');

describe('IS Library', function () {
    const is = new Is();

    beforeAll(function () {
        //console.log('Starting tests');
    });

    afterAll(function () {
        //console.log('done');
    });

    beforeEach(function () {
        //console.log('starting new test');
    });

    afterEach(function () {
        //console.log('test finished.');
    });

    it('is true', function () {
        expect(is.True(true).toBe(true));
    });
    it('is true(string)', function () {
        expect(is.True('true').toBe(true));
    });
    it('is true(int)', function () {
        expect(is.True(1).toBe(true));
    });
    it('is false', function () {
        expect(is.True(false).toBe(false));
    });
    it('is false(string)', function () {
        expect(is.True('false').toBe(false));
    });
    it('is false(int)', function () {
        expect(is.True(0).toBe(false));
    });
});