import React from 'react';
import styled from 'styled-components';

interface PostProps {
    body: string;
    title: string;
}

const Post: React.FC<PostProps> = ({ body, title }) => {
    return (
        <PostContainer>
            <PostTitle>{title}</PostTitle>
            <PostBody>{body}</PostBody>
        </PostContainer>
    );
};

const PostContainer = styled.div`
    padding: 20px;
    margin: 20px 0;
    border: 1px solid #eeeeee;
    border-radius: 10px;
    font-family: 'Roboto', sans-serif;
    box-shadow: -1px 4px 10px 0px rgba(0, 0, 0, 0.2);
    word-wrap: break-word;
`;

const PostTitle = styled.h3`
    font-size: 22px;
    font-weight: bold;
    margin-bottom: 20px;
`;

const PostBody = styled.p`
    font-size: 16px;
    letter-spacing: 1px;
    text-align: justify;
`;

export default Post;
