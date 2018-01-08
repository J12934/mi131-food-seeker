// Actions
export const UPDATE_LOCATION = 'food_seeker/geo_location/UPDATE_LOCATION';
export const UPDATE_LOCATION_TYPE =
    'food_seeker/geo_location/UPDATE_LOCATION_TYPE';

// Reducer
export const initialState = {
    locationFixed: false,
    locationType: 'gps', //gps || manual
    coordinates: { latitude: 54.1064878, longitude: 10.0003738 },
};

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case UPDATE_LOCATION:
            return {
                ...state,
                locationFixed: true,
                coordinates: {
                    latitude: action.latitude,
                    longitude: action.longitude,
                },
            };
        case UPDATE_LOCATION_TYPE:
            return { ...state, locationType: action.locationType };

        default:
            return state;
    }
}

// Action Creators
/**
 * @param {number} latitude
 * @param {number} longitude
 */
export function updateLocation(latitude, longitude) {
    return { type: UPDATE_LOCATION, latitude, longitude };
}

/**
 * @param {string} locationType (gps|manuel)
 */
export function updateLocationType(locationType) {
    return { type: UPDATE_LOCATION_TYPE, locationType };
}
