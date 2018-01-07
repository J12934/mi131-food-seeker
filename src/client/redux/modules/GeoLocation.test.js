import reducer, { initialState, updateLocation } from './GeoLocation';

describe('GeoLocation', () => {
    describe('UPDATE_LOCATION', () => {
        it('should set tracking to true', () => {
            expect(initialState.geoLocation.tracking).toBe(false);
            const state = reducer(initialState, updateLocation(10, 10));
            expect(state.geoLocation.tracking).toBe(true);
        });

        it('should set coordinates', () => {
            const state = reducer(initialState, updateLocation(42, 3));
            expect(state.geoLocation.coordinates).toEqual({
                latitude: 42,
                longitude: 3,
            });
        });
    });
});
