import {commentNormalize, commentsNormalize} from '../normalizers/comments';
import {FetchData} from './load';

export const LOAD_COMMENTS_SUCCESS = 'LOAD_COMMENTS_SUCCESS';
export const LOAD_COMMENTS_ERROR = 'LOAD_COMMENTS_ERROR';
export const LOAD_COMMENTS = 'LOAD_COMMENTS';
export const LOAD_COMMENT_SUCCESS = 'LOAD_COMMENT_SUCCESS';
export const LOAD_COMMENT_ERROR = 'LOAD_COMMENT_ERROR';
export const LOAD_COMMENT = 'LOAD_COMMENT';
export const COMMENTS_PAGINATE = 'COMMENTS_PAGINATE';

export function commentsFetchData(url) {
    const types = [LOAD_COMMENTS, LOAD_COMMENTS_SUCCESS, LOAD_COMMENTS_ERROR, COMMENTS_PAGINATE];
    return FetchData(url, types, commentsNormalize, 'get', null);
}

export function commentCreate(url, text, task) {
    const types = [LOAD_COMMENT, LOAD_COMMENT_SUCCESS, LOAD_COMMENT_ERROR];
    return FetchData(url, types, commentNormalize, 'post', JSON.stringify({text, task}), 'simple');
}