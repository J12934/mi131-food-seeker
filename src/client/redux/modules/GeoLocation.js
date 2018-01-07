// Actions
export const UPDATE_LOCATION = 'food_seeker/geo_location/UPDATE_LOCATION';

// Reducer
export const initialState = {
    geoLocation: {
        tracking: false,
        coordinates: { latitude: null, longitude: null },
    },
};

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case UPDATE_LOCATION:
            return {
                ...state,
                geoLocation: {
                    tracking: true,
                    coordinates: {
                        latitude: action.latitude,
                        longitude: action.longitude,
                    },
                },
            };

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
