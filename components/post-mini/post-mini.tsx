import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

interface PostMini {
    body: string;
    id: number;
    title: string;
}

const PostMini: React.FC<PostMini> = ({ id, body, title }) => {
    return (
        <Link href="/posts/[postid]" as={`/posts/${id}`}>
            <PostThumbLink>
                <StyledPostThumb>
                    <PostThumbTitle>{title}</PostThumbTitle>
                    <PostThumbBody>{body}</PostThumbBody>
                </StyledPostThumb>
            </PostThumbLink>
        </Link>
    );
};

const StyledPostThumb = styled.article`
    min-height: 160px;
    box-sizing: border-box;
    padding: 15px;
    border: 1px solid #eeeeee;
    border-radius: 5px;
    color: #777777;
    font-family: sans-serif;
    transition: all 0.3s ease;
    background-color: white;
    cursor: pointer;
    :hover {
        box-shadow: -1px 4px 10px 0px rgba(0, 0, 0, 0.2);
        color: #000000;
    }
`;

const PostThumbLink = styled.a`
    color: inherit;
`;

const PostThumbTitle = styled.h3`
    margin-bottom: 10px;
    color: #000000;
    font-size: 22px;
`;

const PostThumbBody = styled.p`
    text-align: justify;
`;

export default PostMini;
