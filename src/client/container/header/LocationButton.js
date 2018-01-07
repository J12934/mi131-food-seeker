import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { Button } from '../../components/form';
import { GPSFixedIcon, GPSNotFixedIcon } from '../../components/icons';

const Message = styled.span`
    margin-left: 8px;
`;

const LocatedMessage = () => {
    return (
        <Fragment>
            <GPSFixedIcon /> <Message>Located</Message>
        </Fragment>
    );
};

const NotLocatedMessage = () => {
    return (
        <Fragment>
            <GPSNotFixedIcon /> <Message>Locating</Message>
        </Fragment>
    );
};

function LocationButton({ gpsActive }) {
    return (
        <Button>
            {gpsActive ? <LocatedMessage /> : <NotLocatedMessage />}
        </Button>
    );
}

export default connect(state => {
    return {
        gpsActive: state.geoLocation.tracking,
    };
})(LocationButton);
