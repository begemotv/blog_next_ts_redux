import { ActionType } from './actions';

type CommentType = {
    body: string;
    id: number;
    postId: number;
};

export type ActivePostType = {
    body: string;
    id: number;
    title: string;
    comments: Array<CommentType>;
};

export type PostType = {
    body: string;
    id: number;
    title: string;
};

export type NewPostType = {
    body: string;
    title: string;
};

export type InitialStateType = {
    activePost: null | ActivePostType;
    posts: null | Array<PostType>;
    isFetching: boolean;
};

export type ChangeFetchingStatusActionType = {
    type: typeof ActionType.CHANGE_FETCHING_STATUS;
    payload: boolean;
};

export type LoadPostsActionType = {
    type: typeof ActionType.LOAD_POSTS;
    payload: Array<PostType>;
};

export type LoadActivePostActionType = {
    type: typeof ActionType.LOAD_ACTIVE_POST;
    payload: ActivePostType;
};

export type RedirectToRouteActionType = {
    type: typeof ActionType.REDIRECT_TO_ROUTE;
    payload: string;
};
