import { combineReducers } from 'redux';

import { default as geoLocationReducer } from './GeoLocation';

export default combineReducers({
    geoLocationReducer,
});
