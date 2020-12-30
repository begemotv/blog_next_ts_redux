import React from 'react';
import styled from 'styled-components';

import AppLink from '../app-link/app-link';

interface HeaderProps {
    isNewPost?: boolean;
}

const Header: React.FC<HeaderProps> = ({ isNewPost = false }) => {
    return (
        <StyledHeader>
            <StyledContainer>
                <AppLink href="/" label="Home" />
                {!isNewPost && <AppLink href="/posts/new" label="New Post" />}
            </StyledContainer>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    padding: 15px;
    border-bottom: 2px solid lightgray;
`;

const StyledContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: 'Roboto', sans-serif;
`;

export default Header;
