import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { mainReducer } from './reducers/mainReducer';

const rootReducer = combineReducers({
    main: mainReducer,
});

const middleware = applyMiddleware(thunk);
export const store = createStore(rootReducer, middleware);
export type RootState = ReturnType<typeof rootReducer>;
