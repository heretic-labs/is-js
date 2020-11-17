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

    describe('Boolean', function () {
        it('success', function () {
            expect(is.Boolean(true)).toBe(true);
        });

        it('fail', function () {
            expect(is.Boolean('fake')).toBe(false);
        });
    })

    describe('String', function () {
        it('success', function () {
            expect(is.String('foo')).toBe(true);
        });

        it('fail', function () {
            expect(is.String(0)).toBe(false);
        });
    })

    describe('Number', function () {
        it('success', function () {
            expect(is.Number(100)).toBe(true);
        });

        it('fail', function () {
            expect(is.Number('foo')).toBe(false);
        });
    })

    describe('Undefined', function () {
        it('success', function () {
            let foo = 'foo';
            expect(!is.Undefined(foo)).toBe(true);
        });

        it('fail', function () {
            let foo = 'foo';
            expect(is.Undefined(foo)).toBe(false);
        });
    })

    describe('Null', function () {
        it('success', function () {
            expect(is.Null(null)).toBe(true);
        });

        it('fail', function () {
            expect(is.Null('foo')).toBe(false);
        });
    })

    describe('Empty', function () {
        let foo;
        it('success-undefined', function () {
            expect(is.Empty(foo)).toBe(true);
        });

        it('success-null', function () {
            expect(is.Empty(null)).toBe(true);
        });

        it('success-string', function () {
            expect(is.Empty('')).toBe(true);
        });

        it('success-string (whitespace)', function () {
            expect(is.Empty('     ')).toBe(true);
        });

        it('fail', function () {
            expect(is.Empty('foo')).toBe(false);
        });
    })
});