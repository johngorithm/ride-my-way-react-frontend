import {
  GET_RIDES_SUCCESS,
  GET_RIDES_STARTED,
  GET_RIDES_FAILED,
  ADD_RIDE,
  CREATE_RIDE_SUCCESS,
  CREATE_RIDE_STARTED,
  CREATE_RIDE_FAILED
} from 'constants';

const initialState = {
  rides: [],
  ride: {},
  isLoading: false,
  successMessage: '',
  failureMessage: '',
};

const rideReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RIDES_STARTED:
      return {
        ...state,
        isLoading: true,
      }
    case GET_RIDES_SUCCESS:
      return {
        ...state,
        rides: action.rides,
        isLoading: false
      };
    case GET_RIDES_FAILED:
      return {
        ...state,
        isLoading: false
      };
    case ADD_RIDE:
      return {
        ...state,
        ride: action.ride
      };
    case CREATE_RIDE_STARTED:
      return {
        ...state,
        isLoading: true
      }
    case CREATE_RIDE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        rides: [ action.ride, ...state.rides ],
        successMessage: action.message
      }
    case CREATE_RIDE_FAILED:
      return {
        ...state,
        isLoading: false,
        failureMessage: action.message
      }

    default:
      return state;
  }
};

export default rideReducer;