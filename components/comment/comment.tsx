import React from 'react';
import styled from 'styled-components';

interface CommentProps {
    body: string;
}

const Comment: React.FC<CommentProps> = ({ body }) => {
    return (
        <CommentContainer>
            <CommentBody>{body}</CommentBody>
        </CommentContainer>
    );
};

const CommentContainer = styled.div`
    padding: 7px;
    margin: 7px 0;
    border: 1px solid #eeeeee;
    border-radius: 10px;
    font-family: sans-serif;
    box-shadow: -1px 4px 10px 0px rgba(0, 0, 0, 0.2);
    word-wrap: break-word;
`;

const CommentBody = styled.p`
    font-size: 16px;
    letter-spacing: 1px;
    text-align: right;
`;

export default Comment;
