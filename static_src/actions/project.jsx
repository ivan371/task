import { FetchData, FetchDelete } from './load';

import {zero} from './users';
import {
    projectMemberNormalize, projectMembersNormalize, projectNormalize,
    projectsNormalize
} from '../normalizers/project';
export const LOAD_PROJECTS = 'LOAD_PROJECTS';
export const LOAD_PROJECTS_SUCCESS = 'LOAD_PROJECTS_SUCCESS';
export const LOAD_PROJECTS_ERROR = 'LOAD_PROJECTS_ERROR';
export const LOAD_PROJECTS_MORE = 'LOAD_PROJECTS_MORE';
export const LOAD_PROJECT = 'LOAD_PROJECT';
export const LOAD_PROJECT_SUCCESS = 'LOAD_PROJECT_SUCCESS';
export const LOAD_PROJECT_ERROR = 'LOAD_PROJECT_ERROR';
export const LOAD_PROJECT_MEMBERS = 'LOAD_PROJECT_MEMBERS';
export const LOAD_PROJECT_MEMBERS_SUCCESS = 'LOAD_PROJECT_MEMBERS_SUCCESS';
export const LOAD_PROJECT_MEMBERS_ERROR = 'LOAD_PROJECT_MEMBERS_ERROR';
export const LOAD_PROJECT_MEMBER = 'LOAD_PROJECT_MEMBER';
export const LOAD_PROJECT_MEMBER_SUCCESS = 'LOAD_PROJECT_MEMBER_SUCCESS';
export const LOAD_PROJECT_MEMBER_ERROR = 'LOAD_PROJECT_MEMBER_ERROR';
export const PROJECT_MEMBERS_PAGINATE = 'PROJECT_MEMBERS_PAGINATE';
export const LOAD_NEW_PROJECT = 'LOAD_NEW_PROJECT';
export const LOAD_NEW_PROJECT_SUCCESS = 'LOAD_NEW_PROJECT_SUCCESS';
export const LOAD_NEW_PROJECT_ERROR = 'LOAD_NEW_PROJECT_ERROR';
export const PROJECTS_PAGINATE = 'PROJECTS_PAGINATE';
export const PROJECT_DELETE_SUCCESS = 'PROJECT_DELETE_SUCCESS';
export const PROJECT_DELETE_ERROR = 'PROJECT_DELETE_ERROR';


export function projectsFetchData(url) {
    const types = [LOAD_PROJECTS, LOAD_PROJECTS_SUCCESS, LOAD_PROJECTS_ERROR, PROJECTS_PAGINATE];
    return FetchData(url, types, projectsNormalize, 'get', null);
}

export function projectMembersFetchData(url) {
    const types = [LOAD_PROJECT_MEMBERS, LOAD_PROJECT_MEMBERS_SUCCESS, LOAD_PROJECT_MEMBERS_ERROR, PROJECT_MEMBERS_PAGINATE];
    return FetchData(url, types, projectMembersNormalize, 'get', null);
}

export function projectMemberCreate(url, project, user_id, role) {
    const types = [LOAD_PROJECT_MEMBER, LOAD_PROJECT_MEMBER_SUCCESS, LOAD_PROJECT_MEMBER_ERROR];
    return FetchData(url, types, projectMemberNormalize, 'post', JSON.stringify({project, user_id, role}), 'simple');
}


export function projectsMoreFetchData(url) {
    const types = [LOAD_PROJECTS, LOAD_PROJECTS_MORE, LOAD_PROJECTS_ERROR, PROJECTS_PAGINATE];
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

export function projectDelete(url, id) {
    const types = [PROJECT_DELETE_SUCCESS, PROJECT_DELETE_ERROR];
    return FetchDelete(url, types, id);
}