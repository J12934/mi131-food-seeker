import { Component } from 'react';
import { connect } from 'react-redux';

import { updateLocation } from '../redux/modules/GeoLocation';

/**
 * Polls every few seconds for the current geo location and then updates the redux store
 */
class PollGeoLocation extends Component {
    componentDidMount() {
        if (navigator.geolocation) {
            this.updateLocation();
            this.registerPolling();
        } else {
            console.info('Geolocation is not supported by this browser.');
        }
    }

    registerPolling() {
        setInterval(this.updateLocation.bind(this), 15 * 1000);
    }

    updateLocation() {
        const { gpsEnabled } = this.props;
        // Only start gps messurement when gps isnt disabled by the user
        if (!gpsEnabled) return;

        navigator.geolocation.getCurrentPosition(
            ({ coords: { latitude, longitude } }) => {
                // Messurement might have been started before gps was disabled so it needs to be rechecked
                if (gpsEnabled) this.props.updateLocation(latitude, longitude);
            }
        );
    }

    render() {
        return null;
    }
}

export default connect(
    state => {
        return {
            gpsEnabled: state.geoLocation.locationType === 'gps',
        };
    },
    dispatch => {
        return {
            updateLocation: (latitude, longitude) => {
                dispatch(updateLocation(latitude, longitude));
            },
        };
    }
)(PollGeoLocation);
