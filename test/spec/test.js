/*global describe, it, expect, beforeEach*/
(function () {
    'use strict';

    describe('Give it some context', function () {
        describe('maybe a bit more context here', function () {
            it('should run here few assertions', function () {
                expect(true).toBe(true);
            });
        });
    });

    describe('Cell', function () {
        beforeEach(function () {
            var cell = new Cell({x: 1, y:1});
        });

        it('should have valid coordinates', function () {
            expect(cell.get('x')).toBe(1);
            expect(cell.get('y')).toBe(1);
        });
    });
})();
