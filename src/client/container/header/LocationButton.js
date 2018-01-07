import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { Button } from '../../components/form';
import { GPSFixedIcon, GPSNotFixedIcon } from '../../components/icons';

const Message = styled.span`
    margin-left: 8px;
`;

const LocatedMessage = () => {
    return [<GPSFixedIcon />, <Message>Located</Message>];
};

const NotLocatedMessage = () => {
    return [<GPSNotFixedIcon />, <Message>Locating</Message>];
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
