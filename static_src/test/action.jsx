import {
    current,
    LOAD_USER,
    LOAD_USER_SUCCESS,
    LOAD_USER_ERROR
} from '../actions/users';
import configureMockStore from 'redux-mock-store';
import 'isomorphic-fetch';
import nock from 'nock';
import expect from 'expect';
import {apiMiddleware} from 'redux-api-middleware';
import {userNormalize} from '../normalizers/users';
const middlewares = [apiMiddleware];
const mockStore = configureMockStore(middlewares);
const Data = {
    "id": 3,
    "username": "Ivan",
    "email": "nagaiko.ivan@gmail.com",
    "first_name": "Ivani",
    "last_name": "Nagaiko",
    "avatar": "http://138.197.187.175/media/avatars/1948783_mem-chelovek-s-rukoi-na-lbu_bOXch2D.jpg"
};


describe('action tests', () => {
    expect.extend({
        checkTasksEqual(received, argument) {
            return received === argument;

        }
    });

    describe('simple action', () => {
        afterEach(() => {
            nock.cleanAll()
        });
        test('async action test', () => {
            nock('http://138.197.187.175/')
                .get('/api/users/current/')
                .reply(200, Data);
            const store = mockStore({
                users: {},
                user: null,
                isLoading: false,
            });
            const expectedActions = [
                { type: LOAD_USER },
                { type: LOAD_USER_SUCCESS, payload: userNormalize(Data) }
            ];

            return store.dispatch(current('http://138.197.187.175/api/users/current/')).then(() => {
                store.getActions().forEach((item, index) => {
                    expect(item.type).toEqual(expectedActions[index].type);
                    if (expectedActions[index ].payload){
                        expect(item.payload).toEqual(expectedActions[index ].payload);
                    }
                })
            })
        })
    })
});

