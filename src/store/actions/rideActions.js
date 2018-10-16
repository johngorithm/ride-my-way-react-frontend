// import axios from 'axios';

// import {
//   GET_RIDES
// } from 'constants';

// export const getRides = () => async dispatch => {
//   const res = await axios.get(`https://ride-m-way.herokuapp.com/api/v1/rides`);

//   dispatch({
//     type: GET_RIDES,
//     payload: res.data
//   });
// };



import {
  GET_RIDES,
  ADD_RIDE
} from 'constants';

export const addRide = (ride) => ({
  type: ADD_RIDE,
  payload: ride
});

export const getRides = (rides) => ({
  type: GET_RIDES,
  payload: rides
});