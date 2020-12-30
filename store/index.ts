import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { MakeStore, createWrapper } from 'next-redux-wrapper';
import { composeWithDevTools } from 'redux-devtools-extension';

import { rootReducer } from './reducers';

type RootState = ReturnType<typeof rootReducer>;

const store: MakeStore<RootState> = () => createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export const wrapper = createWrapper<RootState>(store);
