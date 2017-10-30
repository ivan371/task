import { logger } from './logger';
import { apiMiddleware } from 'redux-api-middleware';
import thunk from 'redux-thunk';
import {logoutMiddleware} from './logoutMiddleware';


export const logger2 = store => next => action => {
    console.log('dispatching2', action);
    const result = next(action);
    // console.log('next state', store.getState(result));
    return result;
}


export default [
    logger,
    thunk,
    apiMiddleware,
    // logoutMiddleware,
    // logger2,
];
