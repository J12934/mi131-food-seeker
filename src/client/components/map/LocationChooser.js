import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import Marker from './Marker';

export default class LocationChooser extends Component {
    static defaultProps = {
        center: { lat: 53.49, lng: 10.01 },
        zoom: 7,
    };

    setLocation = ({ lat, lng }) => {
        this.props.updateLocationType('manuel');
        this.props.updateLocation(lat, lng);
    };

    render() {
        const { latitude, longitude } = this.props.coordinates;

        return (
            <GoogleMapReact
                defaultCenter={this.props.center}
                defaultZoom={this.props.zoom}
                onClick={this.setLocation}
            >
                <Marker lat={latitude} lng={longitude} />
            </GoogleMapReact>
        );
    }
}
