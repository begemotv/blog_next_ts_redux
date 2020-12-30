import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';

import Header from '../header/header';
import Footer from '../footer/footer';

interface LayoutProps {
    pageTitle: string;
    isNewPost?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ pageTitle, isNewPost = false, children }) => {
    return (
        <React.Fragment>
            <Head>
                <title>{pageTitle}</title>
            </Head>
            <div>
                <Header isNewPost={isNewPost} />
                <StyledMain>{children}</StyledMain>
                <Footer />
            </div>
        </React.Fragment>
    );
};

const StyledMain = styled.main`
    background-color: #fffefc;
`;

export default Layout;
