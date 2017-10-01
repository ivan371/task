import update from 'react-addons-update';
import {LOAD_NEW_PROJECT_SUCCESS, LOAD_PROJECT_SUCCESS, LOAD_PROJECTS, LOAD_PROJECTS_SUCCESS} from '../actions/project';
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
        }
    }
    switch (action.type) {
        case LOAD_PROJECTS:
            // return store.set('isLoading', true);
            return update(store, {
                isLoading: {
                    $set: true
                },
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

        default:
            return store;
    }
}