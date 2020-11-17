'use strict';

const Is = require('../src/is');

describe('IS Library', function () {
    let is;

    beforeAll(function () {
        is = new Is();
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

    describe('Is.True', function () {

        describe('boolean', function () {
            it('success', function () {
                expect(is.True(true)).toBe(true);
            });

            it('fail', function () {
                expect(is.True(false)).toBe(false);
            });
        })

        describe('string', function () {
            it('success', function () {
                expect(is.True('true')).toBe(true);
            });

            it('fail', function () {
                expect(is.True('false')).toBe(false);
            });
        })

        describe('int', function () {
            it('success', function () {
                expect(is.True(1)).toBe(true);
            });

            it('fail', function () {
                expect(is.True(0)).toBe(false);
            });
        })

    })
});