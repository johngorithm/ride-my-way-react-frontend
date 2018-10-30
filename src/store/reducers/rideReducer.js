import {
  GET_RIDES,
  ADD_RIDE,
  CREATE_RIDE_SUCCESS,
  CREATE_RIDE_STARTED,
  CREATE_RIDE_FAILED
} from 'constants';

const initialState = {
  rides: [],
  ride: {},
  isLoading: false,
  failureMessage: '',
  successMessage: ''
};

const rideReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RIDES:
      return {
        ...state,
        rides: action.payload
      };
    case ADD_RIDE:
      return {
        ...state,
        ride: action.payload
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
        failureMessage: action.payload
      }

    default:
      return state;
  }
};

export default rideReducer;