import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Comment from '../../components/comment/comment';
import CommentNew from '../../components/comment-new/comment-new';
import Layout from '../../components/layout/layout';
import Post from '../../components/post/post';
import { ActivePostType } from '../../store/types';
import { loadActivePostThunk } from '../../store/api-actions';

interface PostIdProps {
    activePost: ActivePostType;
    loadActivePost: (id: number) => void;
    postId: string;
}

const PostId: React.FC<PostIdProps> = ({ activePost, loadActivePost, postId }) => {
    const idInteger = Number.parseInt(postId);

    useEffect(() => {
        loadActivePost(idInteger);
    }, []);

    if (!activePost) {
        return null;
    } else {
        return (
            <Layout pageTitle={`Post ${postId}`}>
                <StyledContainer>
                    {activePost ? <Post body={activePost.body} title={activePost.title} /> : <p>Loading...</p>}
                    <CommentsContainer>
                        {activePost.comments.length === 0 || !activePost ? (
                            <CommentBody>No comments yet</CommentBody>
                        ) : (
                            activePost.comments.map((comment, i) => <Comment key={i} body={comment.body} />)
                        )}
                        <CommentNew postId={idInteger} />
                    </CommentsContainer>
                </StyledContainer>
            </Layout>
        );
    }
};

const CommentsContainer = styled.div`
    width: 30%;
    margin-bottom: 20px;
    margin-left: auto;
`;

const CommentBody = styled.p`
    margin-top: 40px;
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
    letter-spacing: 1px;
    text-align: center;
`;

const StyledContainer = styled.div`
    width: 50%;
    padding: 30px;
    margin: 0 auto;
    border: 1px solid #eeeeee;
    background-color: white;
`;

const mapStateToProps = ({ posts }) => ({
    activePost: posts.activePost,
});

const mapDispatchToProps = (dispatch) => ({
    loadActivePost(id: number) {
        dispatch(loadActivePostThunk(id));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(PostId);

export const getServerSideProps = async (ctx: any) => {
    const { postId } = ctx.query;
    return {
        props: {
            postId,
        },
    };
};
