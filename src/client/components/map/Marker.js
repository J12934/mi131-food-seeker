import React from 'react';
import styled from 'styled-components';

import { MarkerIcon } from '../icons';

const SIZE = 32;

// Ensuring the marker is centered around the top left corner
const Wrapper = styled.div`
    position: relative;
`;

const Centerer = styled.div`
    position: absolute;
    top: -${SIZE / 2}px;
    left: -${SIZE / 2}px;
`;

export default function Marker() {
    return (
        <Wrapper>
            <Centerer>
                <MarkerIcon size={SIZE} color="#FB7468" />
            </Centerer>
        </Wrapper>
    );
}
