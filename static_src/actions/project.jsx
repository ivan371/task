import { FetchData, FetchDelete } from './load';

import {zero} from './users';
import {projectNormalize, projectsNormalize} from '../normalizers/project';
export const LOAD_PROJECTS = 'LOAD_PROJECTS';
export const LOAD_PROJECTS_SUCCESS = 'LOAD_PROJECTS_SUCCESS';
export const LOAD_PROJECTS_ERROR = 'LOAD_PROJECTS_ERROR';
export const LOAD_PROJECT = 'LOAD_PROJECT';
export const LOAD_PROJECT_SUCCESS = 'LOAD_PROJECT_SUCCESS';
export const LOAD_PROJECT_ERROR = 'LOAD_PROJECT_ERROR';
export const LOAD_NEW_PROJECT = 'LOAD_NEW_PROJECT';
export const LOAD_NEW_PROJECT_SUCCESS = 'LOAD_NEW_PROJECT_SUCCESS';
export const LOAD_NEW_PROJECT_ERROR = 'LOAD_NEW_PROJECT_ERROR';
export const PROJECTS_PAGINATE = 'PROJECTS_PAGINATE';

export function projectsFetchData(url) {
    const types = [LOAD_PROJECTS, LOAD_PROJECTS_SUCCESS, LOAD_PROJECTS_ERROR, PROJECTS_PAGINATE];
    return FetchData(url, types, projectsNormalize, 'get', null);
}

export function projectCreate(url, name) {
    const types = [LOAD_PROJECT, LOAD_PROJECT_SUCCESS, LOAD_PROJECT_ERROR];
    return FetchData(url, types, projectNormalize, 'post', JSON.stringify({name}), 'simple');
}

export function projectChange(url, name) {
    const types = [LOAD_NEW_PROJECT, LOAD_NEW_PROJECT_SUCCESS, LOAD_NEW_PROJECT_ERROR];
    return FetchData(url, types, projectNormalize, 'put', JSON.stringify({name}), 'simple');
}