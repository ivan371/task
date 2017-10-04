import { FetchData, FetchDelete } from './load';
import {userNormalize, usersNormalize} from '../normalizers/users';
export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const REGISTRATION = 'REGISTRATION';
export const REGISTRATION_SUCCESS = 'REGISTRATION_SUCCESS';
export const REGISTRATION_ERROR = 'REGISTRATION_ERROR';
export const LOAD_USER = 'LOAD_USER';
export const LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS';
export const LOAD_USER_ERROR = 'LOAD_USER_ERROR';
export const LOAD_USERS = 'LOAD_USERS';
export const USERS_UNMOUNT = 'USERS_UNMOUNT';
export const LOAD_USERS_SUCCESS = 'LOAD_USERS_SUCCESS';
export const LOAD_USERS_ERROR = 'LOAD_USERS_ERROR';
export const USERS_PAGINATE = 'USERS_PAGINATE';
export const LOGOUT = 'LOGOUT';
export const MODAL_OPEN = 'MODAL_OPEN';

export function zero(result) {
    return result;
}

export function openModal(isOpen, modal) {
    return {
        type: MODAL_OPEN,
        isOpen,
        modal,
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

export function userChange(url, username, first_name, last_name, email, avatar) {
    const types = [LOAD_USER, LOAD_USER_SUCCESS, LOAD_USER_ERROR];
    let data = new FormData();
    // console.log(JSON.parse(data.serializeArray()));
    data.append('username', username);
    data.append('email', email);
    data.append('first_name', first_name);
    data.append('last_name', last_name);
    if(avatar !== null) {
        data.append('avatar', avatar);
    }
    return FetchData(url, types, userNormalize, 'put', data, 'multi');
}

export function usersFetchData(url) {
    const types = [LOAD_USERS, LOAD_USERS_SUCCESS, LOAD_USERS_ERROR, USERS_PAGINATE];
    return FetchData(url, types, usersNormalize, 'get', null);
}

export function usersUnMount() {
    return {
        type: USERS_UNMOUNT,
    }
}

function fileCoding(file) {
    console.log(File.read(file));
    let base64_image = new Buffer(File.read(file)).toString('base64');;
    return "data:image/jpg;base64," + base64_image;
}