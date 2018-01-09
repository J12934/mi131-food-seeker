import React, { Fragment } from 'react';
import styled from 'styled-components';

import { Button } from '../form';
import { RestaurantIcon } from '../icons';

const Message = styled.span`
    margin-left: 8px;
`;

function LocationButton() {
    return <Button>
        <RestaurantIcon /><Message>Categories</Message>
    </Button>;
}

export default LocationButton;
