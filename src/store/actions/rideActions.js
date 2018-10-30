import axios from 'axios';
import 'babel-polyfill';

import {
  GET_RIDES,
  ADD_RIDE,
  CREATE_RIDE_SUCCESS,
  CREATE_RIDE_STARTED,
  CREATE_RIDE_FAILED
} from 'constants';
import { closeModal } from 'actions/modalActions';
import { ADD_AUTH_ERROR_MSG } from '../constants';

export const getRides = () => async dispatch => {
  try {
    const res = await axios.get(`https://ride-m-way.herokuapp.com/api/v1/rides`, { headers: { 'x-access-token': JSON.parse(localStorage.getItem('token')) } });

    dispatch({
      type: GET_RIDES,
      payload: res.data.rides
    });
  } catch (error) {
    dispatch({
      type: ADD_AUTH_ERROR_MSG,
      payload: error.response.data.message
    });
  }
};

export const addRide = (ride) => ({
  type: ADD_RIDE,
  payload: ride
});

export const createRide = (rideInfo)=> async dispatch => {
  dispatch({
    type: CREATE_RIDE_STARTED
  })
  try {
    const res = await axios.post(`https://ride-m-way.herokuapp.com/api/v1/users/rides`, rideInfo, { headers: { 'x-access-token': JSON.parse(localStorage.getItem('token')) } });
    dispatch(closeModal())
    return dispatch({
      type: CREATE_RIDE_SUCCESS,
      ride: res.data.ride,
      message: res.data.message
    });
  } catch (error) {
    return dispatch({
      type: CREATE_RIDE_FAILED,
      payload: error.response.data.message
    });
  }
}
