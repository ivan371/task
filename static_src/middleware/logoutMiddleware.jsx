import {LOGOUT, LOGOUT_START} from '../actions/users';
import {CALL_API} from 'redux-api-middleware';

export const logoutMiddleware = token => store => next => (action) => {
    if (action.type === LOGOUT_START){
        action[CALL_API]['headers'] = { 'Authorization': `token ${token}` };
    }
    return next(action);
};