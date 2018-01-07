import React from 'react';
import styled from 'styled-components';

import Logo from './Logo';
import HeaderButtons from './HeaderButtons';
import { Input } from '../form';

const HeaderContainer = styled.div`
    background: linear-gradient(#f5a623, #fbcf3c);
    padding: 24px;
    padding-bottom: 48px;
`;

export default function Header() {
    return (
        <HeaderContainer>
            <div>
                <Logo />
                <Input placeholder="Search" />
                <HeaderButtons />
            </div>
        </HeaderContainer>
    );
}
