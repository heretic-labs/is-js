'use strict';


describe('IS Library', function () {

    beforeAll(function () {
        console.log('Starting tests');
    });

    afterAll(function () {
        console.log('done');
    });

    beforeEach(function () {
        console.log('starting new test');
    });

    afterEach(function () {
        console.log('test finished.');
    });

    it('is true', function () {
        expect(isTrue(true).toBe(true));
    });
    it('is true(string)', function () {
        expect(isTrue('true').toBe(true));
    });
    it('is true(int)', function () {
        expect(isTrue(1).toBe(true));
    });
    it('is false', function () {
        expect(isTrue(false).toBe(false));
    });
    it('is false(string)', function () {
        expect(isTrue('false').toBe(false));
    });
    it('is false(int)', function () {
        expect(isTrue(0).toBe(false));
    });
});