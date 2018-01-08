import React from 'react';
import { connect } from 'react-redux';

import {
    updateLocation,
    updateLocationType,
} from '../../redux/modules/GeoLocation';

import Page from '../../components/structure/Page';
import LocationChooser from '../../components/map/LocationChooser';

const FullSizePage = Page.extend`
    padding: 0;
`;

const ConnectedLocationChooser = connect(
    state => {
        return {
            coordinates: state.geoLocation.coordinates,
        };
    },
    dispatch => {
        return {
            updateLocation: (latitude, longitude) =>
                dispatch(updateLocation(latitude, longitude)),
            updateLocationType: type => dispatch(updateLocationType(type)),
        };
    }
)(LocationChooser);

export default function LocationChooserScreen() {
    return (
        <FullSizePage>
            <ConnectedLocationChooser />
        </FullSizePage>
    );
}
