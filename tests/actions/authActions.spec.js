import moxios from 'moxios';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';

import { registerUser, loginUser, logOut, checkSession } from 'actions/authActions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const initialState = {
  user: {},
  isAuthenticated: false,
  authIsLoading: false
};
const email = 'jensmith@gmail.com';
const password = 'Password';
const user = {
  user_id: 1,
  username: 'johngorithm',
  firstname: 'John'
}
const newUser = {
  username: 'johngorithm',
  firstname: 'John',
  lastname: 'Obi',
  password,
  email
}
const token = 'kl87s9a4akslid898ds8a8f78sda97dsaa';

describe('USER SIGNUP ACTION TESTS', () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  test('should dispatch AUTH_SUCCESS actions', () => {
    
    moxios.stubRequest('/auth/signup', {
      status: 200,
      response: {
          message: 'Signup successful',
          user,
          token
      }
    });


    // actions expected to be fired
    const expectedActions = [
      { type: 'AUTH_STARTED' },
      { type: 'AUTH_SUCCESS', user }
    ];

    const store = mockStore(initialState);
    store.dispatch(registerUser(newUser))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });

  test('should dispatch AUTH_FAILED on server error', () => {
    moxios.stubRequest('/auth/signup', {
      status: 400,
      response: {
        message: 'Invalid credential supplied'
      }
    });

    // actions expected to be fired
    const expectedActions = [
      { type: 'AUTH_STARTED' },
      { type: 'AUTH_FAILED'}
    ];

    const store = mockStore(initialState);
    store.dispatch(registerUser(newUser))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});



describe('USER LOGIN ACTION TESTS', () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  test('should dispatch AUTH_SUCCESS actions', () => {
    
    moxios.stubRequest('/auth/login', {
      status: 200,
      response: {
          message: 'Login successful',
          user,
          token
      }
    });


    // actions expected to be fired
    const expectedActions = [
      { type: 'AUTH_STARTED' },
      { type: 'AUTH_SUCCESS', user }
    ];

    const store = mockStore(initialState);
    store.dispatch(loginUser(newUser))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });

  test('should dispatch AUTH_FAILED on server error', () => {
    moxios.stubRequest('/auth/login', {
      status: 400,
      response: {
        message: 'Invalid credential supplied'
      }
    });

    // actions expected to be fired
    const expectedActions = [
      { type: 'AUTH_STARTED' },
      { type: 'AUTH_FAILED'}
    ];

    const store = mockStore(initialState);
    store.dispatch(loginUser({
      username:'johngorithm',
      password: 'Password'
    }))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});


describe('LOGOUT ACTION TESTS', () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  test('should dispatch LOG_OUT actions', () => {
    // actions expected to be fired
    const expectedActions = [
      { type: 'LOG_OUT' }
    ];

    const store = mockStore(initialState);
    store.dispatch(logOut())
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});

describe('CHECK SESSION ACTION TESTS', () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  test('should dispatch LOG_OUT actions', () => {
    // actions expected to be fired
    const expectedActions = [
      { type: 'LOG_OUT' }
    ];

    const store = mockStore(initialState);
    store.dispatch(checkSession())
    expect(store.getActions()).toEqual(expectedActions);
  });
});
