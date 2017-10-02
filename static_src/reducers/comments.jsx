import update from 'react-addons-update';
import {
    COMMENT_DELETE_SUCCESS, LOAD_COMMENT, LOAD_COMMENT_SUCCESS, LOAD_COMMENTS,
    LOAD_COMMENTS_SUCCESS
} from '../actions/comments';

const inititalStore = {
    isLoading: false,
    commentList: [],
    comments: {},
};

export default function comments (store = inititalStore, action) {
    if (action.hasOwnProperty('result')) {
        if (action.result.hasOwnProperty('entities')) {
            if (action.result.entities.hasOwnProperty('comment')) {
                store = update(store, {
                    comments: {
                        $merge: action.result.entities.comment,
                    },
                });
            }
        }
    }
    let index = null;
    switch (action.type) {
        case LOAD_COMMENTS:
            return update(store, {
                isLoading: {
                    $set: false,
                },
            });
        case LOAD_COMMENTS_SUCCESS:
            return update(store, {
                isLoading: {
                    $set: true,
                },
                commentList: {
                    $set: action.result.result,
                }
            });
        case LOAD_COMMENT_SUCCESS:
            return update(store, {
                commentList: {
                    $push: [action.result.result],
                },
            });
        case COMMENT_DELETE_SUCCESS:
            index = store.commentList.indexOf(action.id);
            return update(store, {
                commentList: {
                    $splice: [[index, 1]],
                },
            });
        default:
            return store;
    }
}