import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import users from './users';
import tasks from './tasks';
import project from './project';
import comments from './comments';
import SSR from './SSR';

export default combineReducers({
    routerReducer,
    users,
    tasks,
    project,
    comments,
    SSR,
});