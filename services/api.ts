import axios from 'axios';

import { ApiRoute } from '../const';

const BACKEND_URL = `https://simple-blog-api.crew.red`;
const REQUEST_TIMEOUT = 5000;

const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
    withCredentials: true,
});

export const fetchPosts = () => {
    return api.get(ApiRoute.POSTS);
};

export const fetchActivePost = (id: number) => {
    return api.get(`${ApiRoute.POSTS}/${id}?_embed=comments`);
};

export const uploadActivePost = (title: string, body: string) => {
    return api.post(
        ApiRoute.POSTS,
        {
            title,
            body,
        },
        {
            headers: {
                'Content-Type': 'application/json',
            },
        },
    );
};

export const uploadComment = (postId: number, body: string) => {
    return api.post(
        ApiRoute.COMMENTS,
        {
            postId,
            body,
        },
        {
            headers: {
                'Content-Type': 'application/json',
            },
        },
    );
};
