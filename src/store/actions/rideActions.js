import axios from 'axios';
import 'babel-polyfill';

import {
  GET_RIDES,
  ADD_RIDE
} from 'constants';
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
