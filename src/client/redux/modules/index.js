import { combineReducers } from 'redux';

import { default as geoLocation } from './GeoLocation';
import { default as searchParameter } from './SearchParameter';

export default combineReducers({
    geoLocation,
    searchParameter,
});
