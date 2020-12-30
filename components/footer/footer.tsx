import React from 'react';
import styled from 'styled-components';

const Footer: React.FC = () => {
    return (
        <StyledFooter>
            <StyledFooterText>2020</StyledFooterText>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    padding: 10px;
    text-align: center;
    border-top: 2px solid lightgray;
`;

const StyledFooterText = styled.p`
    font-family: 'Roboto', sans-serif;
    color: #777777;
    letter-spacing: -0.1px;
    font-size: 22px;
`;

export default Footer;
