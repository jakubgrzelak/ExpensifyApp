import authReducer from '../../reducers/auth';

test('should set login object with uid', () => {
    const action = {
        type: 'LOGIN',
        uid: '1234'
    };
    const state = authReducer(undefined, action);
    expect(state).toEqual({
        uid: '1234'
    })
});

test('should set logout object empty', () => {
    const action = {
        type: 'LOGOUT'
    };
    const state = authReducer({uid: '1234'}, action);
    expect(state).toEqual({})
});