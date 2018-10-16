import { combineReducers } from "redux";
import rideRiducer from 'reducers/rideReducer';
import modalReducer from 'reducers/modalReducer';
import authReducer from 'reducers/authReducer';

export default combineReducers({
  ride: rideRiducer,
  modal: modalReducer,
  auth: authReducer
});
