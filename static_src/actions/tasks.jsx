import { FetchData, FetchDelete } from './load';
import {zero} from './users';
import {taskNormalize, tasksNormalize} from '../normalizers/tasks';
export const LOAD_TASKS = 'LOAD_TASKS';
export const LOAD_TASKS_SUCCESS = 'LOAD_TASKS_SUCCESS';
export const LOAD_TASKS_MORE = 'LOAD_TASKS_MORE';
export const LOAD_TASKS_ERROR = 'LOAD_TASKS_ERROR';
export const LOAD_TASK = 'LOAD_TASK';
export const LOAD_TASK_SUCCESS = 'LOAD_TASK_SUCCESS';
export const LOAD_TASK_ERROR = 'LOAD_TASK_ERROR';
export const TASKS_PAGINATE = 'TASKS_PAGINATE';
export const TASK_DELETE_SUCCESS = 'TASK_DELETE_SUCCESS';
export const TASK_DELETE_ERROR = 'TASK_DELETE_ERROR';

export function taskFetchData(url) {
    const types = [LOAD_TASKS, LOAD_TASKS_SUCCESS, LOAD_TASKS_ERROR, TASKS_PAGINATE];
    return FetchData(url, types, tasksNormalize, 'get', null);
}

export function taskMoreFetchData(url) {
    const types = [LOAD_TASKS, LOAD_TASKS_MORE, LOAD_TASKS_ERROR, TASKS_PAGINATE];
    return FetchData(url, types, tasksNormalize, 'get', null);
}


export function ownTaskFetchData(url) {
    const types = [LOAD_TASK, LOAD_TASK_SUCCESS, LOAD_TASK_ERROR];
    return FetchData(url, types, taskNormalize, 'get', null, 'simple');
}


export function taskCreate(url, text, description, project_id) {
    const types = [LOAD_TASK, LOAD_TASK_SUCCESS, LOAD_TASK_ERROR];
    return FetchData(url, types, taskNormalize, 'post', JSON.stringify({text, description, status: 1, project_id}), 'simple');
}

export function projectFetchDate(url) {
    const types = [LOAD_TASKS, LOAD_TASKS_SUCCESS, LOAD_TASKS_ERROR, TASKS_PAGINATE];
    return FetchData(url, types, tasksNormalize, 'get', null);
}

export function taskChange(url, text, description, project_id) {
    const types = [LOAD_TASK, LOAD_TASK_SUCCESS, LOAD_TASK_ERROR];
    return FetchData(url, types, taskNormalize, 'put', JSON.stringify({text, description, project_id, status: 1}), 'simple');
}

export function taskDelete(url, id) {
    const types = [TASK_DELETE_SUCCESS, TASK_DELETE_ERROR];
    return FetchDelete(url, types, id);
}