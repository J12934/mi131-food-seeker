import React from 'react';
import styled from 'styled-components';

import { Button } from '../form';
import LocationButton from '../../container/header/LocationButton';

import { Link } from 'react-router-dom';

const PositioningWrapper = styled.div`
    position: relative;
`;

const ButtonRow = styled.div`
    position: absolute;
    bottom: -66px;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 16px;
`;

export default function HeaderButtons() {
    return (
        <PositioningWrapper>
            <ButtonRow>
                <Link to="/map">
                    <LocationButton>Location</LocationButton>
                </Link>
                <Button>Categories</Button>
            </ButtonRow>
        </PositioningWrapper>
    );
}
