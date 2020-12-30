import React from 'react';
import Link, { LinkProps } from 'next/link';
import styled from 'styled-components';

interface AppLinkProps extends LinkProps {
    href: string;
    label: string;
}

const AppLink: React.FC<AppLinkProps> = ({ href, label }) => {
    return (
        <Link href={href}>
            <StyledLink>{label}</StyledLink>
        </Link>
    );
};

const StyledLink = styled.a`
    color: #777777;
    font-size: 22px;
    cursor: pointer;
    letter-spacing: -0.1px;
    padding: 10px 0;
    :hover {
        color: #000000;
    }
`;

export default AppLink;
