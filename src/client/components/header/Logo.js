import React from 'react';
import styled from 'styled-components';

const Headline = styled.h1`
    color: #fafafa;
    font-size: 36px;
    text-align: center;
    margin: 0;
    margin-bottom: 24px;
`;

export default function Logo() {
    return <Headline>Food Seeker</Headline>;
}
