import reducer, {
    initialState,
    updateLocation,
    updateLocationType,
} from './GeoLocation';

describe('GeoLocation', () => {
    describe('UPDATE_LOCATION', () => {
        it('should set locationFixed to true', () => {
            expect(initialState.locationFixed).toBe(false);
            const state = reducer(initialState, updateLocation(10, 10));
            expect(state.locationFixed).toBe(true);
        });

        it('should set coordinates', () => {
            const state = reducer(initialState, updateLocation(42, 3));
            expect(state.coordinates).toEqual({
                latitude: 42,
                longitude: 3,
            });
        });
    });

    describe('UPDATE_LOCATION_TYPE', () => {
        it('should set locationType to specified value', () => {
            expect(initialState.locationType).toBe('gps');
            const state = reducer(initialState, updateLocationType('manuel'));
            expect(state.locationType).toBe('manuel');
        });
    });
});
