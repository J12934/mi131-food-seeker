import React from 'react';
import styled from 'styled-components';

import Logo from './Logo';
import HeaderButtons from './HeaderButtons';
import SearchForm from '../../container/header/SearchForm';

const HeaderContainer = styled.div`
    background: linear-gradient(#f5a623, #fbcf3c);
    padding: 24px;
    padding-bottom: 48px;
    z-index: 20;
`;

export default function Header() {
    return (
        <HeaderContainer>
            <div>
                <Logo />
                <SearchForm />
                <HeaderButtons />
            </div>
        </HeaderContainer>
    );
}
