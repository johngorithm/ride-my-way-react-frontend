import { combineReducers } from "redux";
import rideRiducer from 'reducers/rideReducer';
import modalReducer from 'reducers/modalReducer';

export default combineReducers({
  ride: rideRiducer,
  modal: modalReducer
});
