import { createStore, combineReducers, applyMiddleware, compose} from 'redux';
import initReducers from './reducers/index';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {logger} from './middleware/logger';


export default function initStore() {
    const innitialStore = {};

    return createStore(
        initReducers,
        innitialStore,
        composeWithDevTools(applyMiddleware(logger, thunk)),
    );
}
