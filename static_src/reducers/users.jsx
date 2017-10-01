import update from 'react-addons-update';
import {
    LOAD_USER, LOAD_USER_SUCCESS, LOGIN_ERROR, LOGIN_SUCCESS, LOGOUT, MODAL_OPEN, REGISTRATION,
    REGISTRATION_ERROR
} from '../actions/users';
import {fakeAuth} from '../components/Login';

const inititalStore = {
    isLogin: localStorage.hasOwnProperty("token"),
    isFalied: false,
    users: {},
    user: null,
    isLoading: false,
    isModalOpen: false,
};

export default function users (store = inititalStore, action) {
    if (action.hasOwnProperty('result')) {
        if (action.result.hasOwnProperty('entities')) {
            if (action.result.entities.hasOwnProperty('user')) {
                store = update(store, {
                    users: {
                        $merge: action.result.entities.user,
                    },
                });
            }
        }
    }
    switch (action.type) {

        case MODAL_OPEN:
            return update(store, {
                isModalOpen: {
                    $set: action.isOpen,
                }
            });

        case LOGIN_SUCCESS:
            if(action.result.token !== undefined) {
                localStorage.setItem("token", action.result.token);
                fakeAuth.authenticate();
                return update(store, {
                    isLogin: {
                        $set: true
                    },
                    isFalied: {
                        $set: false,
                    }
                })
            }
            else {
                localStorage.removeItem("token");
                fakeAuth.signout();
                return update(store, {
                    isLogin: {
                        $set: false
                    },
                })
            }
        case LOGIN_ERROR:
            fakeAuth.signout();
            localStorage.removeItem("token");
            return update(store, {
                isLogin: {
                    $set: false,
                },
                isFalied: {
                    $set: true,
                }
            });
        case REGISTRATION_ERROR:
            fakeAuth.signout();
            localStorage.removeItem("token");
            return update(store, {
                isFalied: {
                    $set: true,
                }
            });
        case LOGOUT:
            localStorage.removeItem("token");
            return update(store, {
                isLogin: {
                    $set: false,
                },
            });
        case LOAD_USER:
            return update(store, {
                isLoading: {
                    $set: false
                },
            });
        case LOAD_USER_SUCCESS:
            return update(store, {
                isLoading: {
                    $set: true
                },
                user: {
                    $set: action.result.result,
                }
            });
        default:
            return store;
    }
}