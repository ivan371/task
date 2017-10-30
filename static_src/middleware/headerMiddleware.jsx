import { isRSAA, CALL_API } from 'redux-api-middleware';
import {LOGOUT} from '../actions/users';

// создаем функцию принимающую токе и возвращающую мидлварь, что бы добавлять Authorisation хедер к нащим
// запросам от сервера
export const headerMiddleware = token => store => next => (action) => {
    if (isRSAA(action)){
        action[CALL_API]['headers'] = { 'Authorization': `token ${token}` };
    }
    return next(action);
};

