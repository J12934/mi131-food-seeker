import React from 'react';
import styled from 'styled-components';

import { Button } from '../form';

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
                <Button>Location</Button>
                <Button>Categories</Button>
            </ButtonRow>
        </PositioningWrapper>
    );
}
