import { fetchPosts, fetchActivePost, uploadActivePost, uploadComment } from '../services/api';
import { loadPosts, loadActivePost } from './actions';

export const loadPostsThunk = () => (dispatch: any) => {
    fetchPosts().then(({ data }) => {
        console.log(data);
        const filteredPosts = data.filter((item) => item.body);
        dispatch(loadPosts(filteredPosts));
    });
};

export const loadActivePostThunk = (id: number) => (dispatch: any) => {
    fetchActivePost(id).then(({ data }) => {
        console.log(data);
        dispatch(loadActivePost(data));
    });
};

export const uploadPostThunk = (title: string, body: string) => (dispatch: any) => {
    uploadActivePost(title, body)
        .then(({ data }) => {
            console.log(data);
            dispatch(loadActivePost(data));
        })
        .then(() => dispatch(loadPostsThunk()));
};

export const uploadCommentThunk = (postId: number, body: string) => (dispatch: any) => {
    uploadComment(postId, body).then(({ data }) => {
        console.log(data);
        dispatch(loadActivePostThunk(postId));
    });
};
