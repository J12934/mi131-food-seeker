import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { Button } from '../../components/form';
import { GPSFixedIcon, GPSNotFixedIcon, MapIcon } from '../../components/icons';

const Message = styled.span`
    margin-left: 8px;
`;

const GPSLocatedMessage = () => {
    return (
        <Fragment>
            <GPSFixedIcon /> <Message>GPS Fixed</Message>
        </Fragment>
    );
};

const GPSNotLocatedMessage = () => {
    return (
        <Fragment>
            <GPSNotFixedIcon /> <Message>GPS Searching</Message>
        </Fragment>
    );
};

const LocationManuallySet = () => {
    return (
        <Fragment>
            <MapIcon /> <Message>Fixed Location</Message>
        </Fragment>
    );
};

function LocationButton({ locationType, locationFixed }) {
    let text;
    if (locationType === 'manuel') {
        text = <LocationManuallySet />;
    } else if (locationFixed === true) {
        text = <GPSLocatedMessage />;
    } else {
        text = <GPSNotLocatedMessage />;
    }
    return <Button>{text}</Button>;
}

export default connect(state => {
    return {
        locationType: state.geoLocation.locationType,
        locationFixed: state.geoLocation.locationFixed,
    };
})(LocationButton);
