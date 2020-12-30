import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Layout from '../components/layout/layout';
import PostList from '../components/post-list/post-list';
import { PostType } from '../store/types';
import { loadPostsThunk } from '../store/api-actions';

interface HomeProps {
    posts: Array<PostType>;
    loadPosts: () => void;
}

const Home: React.FC<HomeProps> = ({ posts, loadPosts }) => {
    useEffect(() => {
        loadPosts();
    }, []);

    console.log(posts);

    return (
        <Layout pageTitle="Home">
            <PostList posts={posts} />
        </Layout>
    );
};

const mapStateToProps = ({ posts }) => ({
    posts: posts.posts,
});

const mapDispatchToProps = (dispatch) => ({
    loadPosts() {
        dispatch(loadPostsThunk());
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
