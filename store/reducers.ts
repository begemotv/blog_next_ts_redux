import { combineReducers } from 'redux';

import { ActionType } from './actions';
import { InitialStateType } from './types';

const initialState: InitialStateType = {
    activePost: null,
    posts: null,
    isFetching: false,
};

export const postsReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case ActionType.CHANGE_FETCHING_STATUS:
            return {
                ...state,
                isFetching: action.payload,
            };
        case ActionType.LOAD_POSTS:
            return {
                ...state,
                posts: action.payload,
            };
        case ActionType.LOAD_ACTIVE_POST:
            return {
                ...state,
                activePost: action.payload,
            };
        default:
            return state;
    }
};

export const rootReducer = combineReducers({
    posts: postsReducer,
});
