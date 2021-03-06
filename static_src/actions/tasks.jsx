import {apiLoad, FetchData, FetchDelete} from './load';
import {zero} from './users';
import {taskNormalize, tasksNormalize} from '../normalizers/tasks';
import { normalize } from 'normalizr';
import {CALL_API, getJSON} from 'redux-api-middleware';
export const LOAD_TASKS = 'LOAD_TASKS';
export const LOAD_TASKS_SUCCESS = 'LOAD_TASKS_SUCCESS';
export const LOAD_TASKS_MORE = 'LOAD_TASKS_MORE';
export const LOAD_TASKS_ERROR = 'LOAD_TASKS_ERROR';
export const LOAD_TASK = 'LOAD_TASK';
export const LOAD_TASK_SUCCESS = 'LOAD_TASK_SUCCESS';
export const LOAD_TASK_ERROR = 'LOAD_TASK_ERROR';
export const TASKS_PAGINATE = 'TASKS_PAGINATE';
export const TASK_DELETE = 'TASK_DELETE';
export const TASK_DELETE_SUCCESS = 'TASK_DELETE_SUCCESS';
export const TASK_DELETE_ERROR = 'TASK_DELETE_ERROR';

export const taskFetchData = (url) => {
    const types = [LOAD_TASKS, LOAD_TASKS_SUCCESS, LOAD_TASKS_ERROR, TASKS_PAGINATE];
    return apiLoad(url, 'GET', types, null, tasksNormalize, false);
};


export function taskMoreFetchData(url) {
    const types = [LOAD_TASKS, LOAD_TASKS_MORE, LOAD_TASKS_ERROR, TASKS_PAGINATE];
    return apiLoad(url, 'GET', types, null, tasksNormalize, false);
}


export function ownTaskFetchData(url) {
    const types = [LOAD_TASK, LOAD_TASK_SUCCESS, LOAD_TASK_ERROR];
    return apiLoad(url, 'GET', types, null, taskNormalize, true);
}


export function taskCreate(url, text, description, project_id) {
    const types = [LOAD_TASK, LOAD_TASK_SUCCESS, LOAD_TASK_ERROR];
    return apiLoad(url, 'POST', types, JSON.stringify({text, description, status: 1, project_id}), taskNormalize, true);
}

export function projectFetchDate(url) {
    const types = [LOAD_TASKS, LOAD_TASKS_SUCCESS, LOAD_TASKS_ERROR, TASKS_PAGINATE];
    return apiLoad(url, 'GET', types, null, tasksNormalize, false);
}

export function taskChange(url, text, description, project_id) {
    const types = [LOAD_TASK, LOAD_TASK_SUCCESS, LOAD_TASK_ERROR];
    return apiLoad(url, 'PUT', types, JSON.stringify({text, description, status: 1, project_id}), taskNormalize, true);
}

export function taskDelete(url, id) {
    const types = [TASK_DELETE_SUCCESS, TASK_DELETE_ERROR];
    return FetchDelete(url, types, id);
}