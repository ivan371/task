import { FetchData, FetchDelete } from './load';
import {userNormalize} from '../normalizers/users';
export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const REGISTRATION = 'REGISTRATION';
export const REGISTRATION_SUCCESS = 'REGISTRATION_SUCCESS';
export const REGISTRATION_ERROR = 'REGISTRATION_ERROR';
export const LOAD_USER = 'LOAD_USER';
export const LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS';
export const LOAD_USER_ERROR = 'LOAD_USER_ERROR';
export const LOGOUT = 'LOGOUT';
export const MODAL_OPEN = 'MODAL_OPEN';

export function zero(result) {
    return result;
}

export function openModal(isOpen) {
    return {
        type: MODAL_OPEN,
        isOpen,
    };
}

export function login(url, username, password) {
    const types = [LOGIN, LOGIN_SUCCESS, LOGIN_ERROR];
    return FetchData(url, types, zero, 'post',  JSON.stringify({username, password}), 'simple');
}

export function logout() {
    return {
        type: LOGOUT,
    }
}

export function registration(url, username, password, email, first_name, last_name) {
    const types = [REGISTRATION, REGISTRATION_SUCCESS, REGISTRATION_ERROR];
    return FetchData(url, types, zero, 'post',  JSON.stringify({username, password, email, first_name, last_name}), 'simple');
}

export function current(url) {
    const types = [LOAD_USER, LOAD_USER_SUCCESS, LOAD_USER_ERROR];
    return FetchData(url, types, userNormalize, 'get', null, 'simple');
}