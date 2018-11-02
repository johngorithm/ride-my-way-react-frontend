import axios from 'axios';
import 'babel-polyfill';
import toastr from 'toastr';

import {
  GET_RIDES_SUCCESS,
  GET_RIDES_STARTED,
  GET_RIDES_FAILED,
  ADD_RIDE,
  CREATE_RIDE_SUCCESS,
  CREATE_RIDE_STARTED,
  CREATE_RIDE_FAILED
} from 'constants';
import { closeModal } from 'actions/modalActions';

export const getRides = () => async dispatch => {
  dispatch({
    type: GET_RIDES_STARTED
  });
  try {
    const res = await axios.get(`https://ride-m-way.herokuapp.com/api/v1/rides`, { headers: { 'x-access-token': JSON.parse(localStorage.getItem('token')) } });

    dispatch({
      type: GET_RIDES_SUCCESS,
      rides: res.data.rides
    });
  } catch (error) {
    toastr.error(error.response.data.message)
    dispatch({
      type: GET_RIDES_FAILED
    });
  }
};

export const addRide = (ride) => ({
  type: ADD_RIDE,
  ride
});

export const createRide = (rideInfo)=> async dispatch => {
  dispatch({
    type: CREATE_RIDE_STARTED
  })
  try {
    const res = await axios.post(`https://ride-m-way.herokuapp.com/api/v1/users/rides`, rideInfo, { headers: { 'x-access-token': JSON.parse(localStorage.getItem('token')) } });
    toastr.success(res.data.message);
    dispatch(closeModal('CreateRideModal'))

    return dispatch({
      type: CREATE_RIDE_SUCCESS,
      ride: res.data.ride,
      message: res.data.message
    });
  } catch (error) {
    try {
      toastr.error(error.response.data.message)
      return dispatch({
        type: CREATE_RIDE_FAILED,
        message: error.response.data.message
      });
    } catch (err) {
      return toastr.error(err.message);
    }
  }
}
