import "babel-polyfill"
import axios from 'axios';
import { ADD_USER, POST_REGISTRATION_ERROR, DELETE_REGISTRATION_ERROR } from 'constants';

const baseUrl = 'https://ride-m-way.herokuapp.com/api/v1';


export const registerUser = (user) => async dispatch => {
  try {
    const response = await axios.post(`${baseUrl}/auth/signup`, user);

    dispatch({
      type: ADD_USER,
      payload: response.data
    });
  } catch (e) {
    dispatch({
      type: POST_REGISTRATION_ERROR,
      message: e.response.data.message
    });

  }

};

export const loginUser = (user) => async dispatch => {
  const response = await axios.post(`${baseUrl}/auth/login`, user);

  dispatch({
    type: ADD_USER,
    payload: response.data
  });

};

export const deleteAuthErrorMessage = () => {
  return {
    type: DELETE_REGISTRATION_ERROR
  }
}