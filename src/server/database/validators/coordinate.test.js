const validateCoords = require('./coordinate');

describe('SearchModel', () => {
    describe('validateCoords()', () => {
        it('should return true when a valid coord pair is passed', () => {
            expect(validateCoords([10, 10])).toBe(true);
        });

        it('should fail if a non array type is passed', () => {
            expect(validateCoords({ foo: 'bar' })).toBe(false);
        });

        it('should enforce two array items', () => {
            expect(validateCoords([10])).toBe(false);
        });

        it('should enforce array members are numbers', () => {
            expect(validateCoords([10, 'test'])).toBe(false);
        });

        it('should enforce lng to be between -180 and 180', () => {
            expect(validateCoords([-180, 0])).toBe(true);
            expect(validateCoords([180, 0])).toBe(true);

            expect(validateCoords([-181, 0])).toBe(false);
            expect(validateCoords([181, 0])).toBe(false);
        });

        it('should enforce lat to be between -90 and 90', () => {
            expect(validateCoords([0, -90])).toBe(true);
            expect(validateCoords([0, 90])).toBe(true);

            expect(validateCoords([0, -91])).toBe(false);
            expect(validateCoords([0, 91])).toBe(false);
        });
    });
});
