import {
    ActivePostType,
    PostType,
    ChangeFetchingStatusActionType,
    LoadPostsActionType,
    LoadActivePostActionType,
} from './types';

export const ActionType = {
    CHANGE_FETCHING_STATUS: `CHANGE_FETCHING_STATUS`,
    LOAD_POSTS: `LOAD_POSTS`,
    LOAD_ACTIVE_POST: `LOAD_ACTIVE_POST`,
    REDIRECT_TO_ROUTE: `REDIRECT_TO_ROUTE`,
};

export const changeFetchingStatus = (status: boolean): ChangeFetchingStatusActionType => ({
    type: ActionType.CHANGE_FETCHING_STATUS,
    payload: status,
});

export const loadPosts = (posts: Array<PostType>): LoadPostsActionType => ({
    type: ActionType.LOAD_POSTS,
    payload: posts,
});

export const loadActivePost = (post: ActivePostType): LoadActivePostActionType => ({
    type: ActionType.LOAD_ACTIVE_POST,
    payload: post,
});
