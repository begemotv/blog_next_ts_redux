import React from 'react';
import styled from 'styled-components';

import PostMini from '../../components/post-mini/post-mini';
import { PostType } from '../../store/types';

interface PostListProps {
    posts: Array<PostType>;
}

const PostList: React.FC<PostListProps> = ({ posts }) => {
    console.log(posts);

    return (
        <PostsContainer>
            {posts ? (
                posts.map((post, i) => <PostMini key={i} id={post.id} title={post.title} body={post.body} />)
            ) : (
                <p>Loading...</p>
            )}
        </PostsContainer>
    );
};

const PostsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 30px;
    padding: 30px 0;
`;

export default PostList;
