import users from '../reducers/users';
import { LOGIN_ERROR } from './../actions/users';

const initialState = {
    isLogin: true,
    isFalied: false,
};

describe('action tests', () => {
    describe('simple reducer', () => {
        test('test set false', () => {
            const newState = {
                isLogin: false,
                isFalied: true,
            };
            const action = {
                type: LOGIN_ERROR
            };
            expect(users(initialState, action)).toEqual(newState)
        })
    })
});