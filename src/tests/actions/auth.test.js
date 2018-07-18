import { login, logout } from '../../actions/auth';

test('should set up correctly login object', () => {
    const uid = 'asdf';
    const action = login(uid);
    expect(action).toEqual({
        type: 'LOGIN',
        uid
    });
});

test('should set up logout object correctly' , () => {
    const action = logout();
    expect(action).toEqual({
        type: 'LOGOUT'
    })
});

