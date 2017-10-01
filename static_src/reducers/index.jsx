import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import users from './users';
import tasks from './tasks';
import project from './project';
import comments from './comments';

export default combineReducers({
    routing: routerReducer,
    users,
    tasks,
    project,
    comments,
});