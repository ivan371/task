import update from 'react-addons-update';
import {
    LOAD_TASK, LOAD_TASK_SUCCESS, LOAD_TASKS, LOAD_TASKS_MORE, LOAD_TASKS_SUCCESS, TASK_DELETE_SUCCESS,
    TASKS_PAGINATE
} from '../actions/tasks';

const inititalStore = {
    isLoading: false,
    isProjectLoading: false,
    isTaskLoading: false,
    taskList: [],
    tasks: {},
    count: 0,
    page: 2,
};

export default function tasks (store = inititalStore, action) {
    if (action.hasOwnProperty('result')) {
        if (action.result.hasOwnProperty('entities')) {
            if (action.result.entities.hasOwnProperty('task')) {
                store = update(store, {
                    tasks: {
                        $merge: action.result.entities.task,
                    },
                });
            }
        }
    }
    let index = null;
    switch (action.type) {
        case TASK_DELETE_SUCCESS:
            index = store.taskList.indexOf(action.id);
            return update(store, {
                taskList: {
                    $splice: [[index, 1]],
                },
            });
        case LOAD_TASKS:
            return update(store, {
                isLoading: {
                    $set: true,
                },
                isProjectLoading: {
                    $set: false,
                },
            });
        case LOAD_TASKS_SUCCESS:
            return update(store, {
                isLoading: {
                    $set: true
                },
                taskList: {
                    $set: action.result.result,
                },
                isProjectLoading: {
                    $set: true,
                },
            });
        case LOAD_TASKS_MORE:
            return update(store, {
                taskList: {
                    $push: action.result.result,
                },
                page: {
                    $set: store.page + 1,
                },
                isProjectLoading: {
                    $set: true,
                },
            });
        case LOAD_TASK:
            return update(store, {
                isTaskLoading: {
                    $set: false,
                },
            });
        case LOAD_TASK_SUCCESS:
            return update(store, {
                taskList: {
                    $push: [action.result.result],
                },
                isTaskLoading: {
                    $set: true,
                },
            });
        case TASKS_PAGINATE:
            return update(store, {
                count: {
                    $set: action.result,
                },
            });
        default:
            return store;
    }
}