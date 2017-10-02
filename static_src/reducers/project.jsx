import update from 'react-addons-update';
import {
    LOAD_NEW_PROJECT_SUCCESS, LOAD_PROJECT_MEMBER_SUCCESS, LOAD_PROJECT_MEMBERS, LOAD_PROJECT_MEMBERS_SUCCESS,
    LOAD_PROJECT_SUCCESS, LOAD_PROJECTS,
    LOAD_PROJECTS_MORE,
    LOAD_PROJECTS_SUCCESS,
    PROJECT_DELETE_ERROR, PROJECT_DELETE_SUCCESS, PROJECT_MEMBERS_PAGINATE, PROJECTS_PAGINATE
} from '../actions/project';
import { Map, List, fromJS } from 'immutable';

const inititalIMStore = fromJS(Map({
    isLoading: false,
    projectList: List([]),
    projects: Map({}),
}));

const inititalStore = {
    isLoading: false,
    projectList: [],
    projects: {},
    count: 0,
    page: 2,
    members: {},
    membersList: {},
    isMembersLoading: false,
    memberCount: 0,
};

export default function project (store = inititalStore, action) {
    if (action.hasOwnProperty('result')) {
        if (action.result.hasOwnProperty('entities')) {
            if (action.result.entities.hasOwnProperty('project')) {
                // store = store.updateIn(['projects'], project => project.merge(action.result.entities.project));
                // store.projects = store.projects.merge(store.projects, action.result.entities.project);
                store = update(store, {
                    projects: {
                        $merge: action.result.entities.project,
                    },
                });
            }
            if (action.result.entities.hasOwnProperty('projectMember')) {
                store = update(store, {
                    members: {
                        $merge: action.result.entities.projectMember,
                    },
                });
            }
        }
    }
    let index = null;
    switch (action.type) {
        case PROJECT_DELETE_SUCCESS:
            index = store.projectList.indexOf(action.id);
            return update(store, {
                projectList: {
                    $splice: [[index, 1]],
                },
            });
        case LOAD_PROJECTS:
            // return store.set('isLoading', true);
            return update(store, {
                isLoading: {
                    $set: true
                },
            });
        case PROJECTS_PAGINATE:
            return update(store, {
                count: {
                    $set: action.result,
                }
            });
        case LOAD_PROJECTS_SUCCESS:
            // return store.set('isLoading', true).set('projectList', action.result.result);
            return update(store, {
                isLoading: {
                    $set: true
                },
                projectList: {
                    $set: action.result.result,
                }
            });
        case LOAD_PROJECT_SUCCESS:
            // return store.push('projectList', [action.result.result]);
            return update(store, {
                projectList: {
                    $push: [action.result.result],
                }
            });
        case LOAD_PROJECTS_MORE:
            return update(store, {
                projectList: {
                    $push: action.result.result,
                },
                page: {
                    $set: store.page + 1,
                },
            });
        case LOAD_PROJECT_MEMBERS:
            return update(store, {
                isMembersLoading: {
                    $set: false,
                }
            });
        case LOAD_PROJECT_MEMBER_SUCCESS:
            return update(store, {
                membersList: {
                    $push: [action.result.result],
                },
                memberCount: {
                    $set: store.memberCount + 1,
                }
            });
        case LOAD_PROJECT_MEMBERS_SUCCESS:
            return update(store, {
                isMembersLoading: {
                    $set: true,
                },
                membersList: {
                    $set: action.result.result,
                }
            });
        case PROJECT_MEMBERS_PAGINATE:
            return update(store, {
                memberCount: {
                    $set: action.result,
                },
            });
        default:
            return store;
    }
}