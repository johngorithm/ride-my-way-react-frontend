import moxios from 'moxios';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';

import { getRides, addRide, createRide } from 'actions/rideActions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const initialState = {
  rides: [],
  ride: {},
  isLoading: false,
  successMessage: '',
  failureMessage: '',
};


const ride = {
  destination: 'Ojo',
  time: '14:00:00',
  date: '2018-10-10',
  capacity: '4',
  takeOffVenue: 'Ikeja Along'
}


describe('RIDE ACTION TESTS', () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  test('should dispatch GET_RIDES_SUCCESS actions', () => {
    
    moxios.stubRequest('/rides', {
      status: 200,
      response: {
          rides: []
      }
    });


    // actions expected to be fired
    const expectedActions = [
      { type: 'GET_RIDES_STARTED' },
      { type: 'GET_RIDES_SUCCESS', rides: [] }
    ];

    const store = mockStore(initialState);
    store.dispatch(getRides())
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });

  test('should dispatch GET_RIDES_FAILED on server error', () => {
    moxios.stubRequest('/rides', {
      status: 400,
      response: {
        message: 'Something went wrong, rides could not be fetched'
      }
    });

    // actions expected to be fired
    const expectedActions = [
      { type: 'GET_RIDES_STARTED' },
      { type: 'GET_RIDES_FAILED' }
    ];

    const store = mockStore(initialState);
    store.dispatch(getRides())
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });

  test('should dispatch ADD_RIDE action successfully', () => {
    // actions expected to be fired
    const expectedActions = [
      { type: 'ADD_RIDE', ride: ride }
    ];

    const store = mockStore(initialState);
    store.dispatch(addRide(ride));

    expect(store.getActions()).toEqual(expectedActions);

  })

  test('should dispatch CREATE_RIDE_SUCCESS actions', () => {
    
    moxios.stubRequest('/users/rides', {
      status: 201,
      response: {
        ride,
        message: 'Ride Created Successfully'
      }
    });


    // actions expected to be fired
    const expectedActions = [
      { type: 'CREATE_RIDE_STARTED' },
      { type: 'CREATE_RIDE_SUCCESS', ride, message: 'Ride Created Successfully' }
    ];

    const store = mockStore(initialState);
    store.dispatch(createRide(ride))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });

  test('should dispatch CREATE_RIDE_FAILED on server error', () => {
    moxios.stubRequest('/users/rides', {
      status: 400,
      response: {
        message: 'Something went wrong, rides could not be fetched'
      }
    });

    // actions expected to be fired
    const expectedActions = [
      { type: 'CREATE_RIDE_STARTED' },
      { type: 'CREATE_RIDE_FAILED', message: 'Something went wrong, rides could not be fetched' }
    ];

    const store = mockStore(initialState);
    store.dispatch(createRide(ride))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});
