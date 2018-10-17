import axios from 'axios';
import 'babel-polyfill';

import {
  GET_RIDES,
  ADD_RIDE
} from 'constants';

export const getRides = () => async dispatch => {
  const res = await axios.get(`https://ride-m-way.herokuapp.com/api/v1/rides`, { headers: { 'x-access-token': JSON.parse(localStorage.getItem('token')) } });

  dispatch({
    type: GET_RIDES,
    payload: res.data.rides
  });
};

export const addRide = (ride) => ({
  type: ADD_RIDE,
  payload: ride
});
