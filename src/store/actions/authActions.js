import "babel-polyfill"
import axios from 'axios';
import { ADD_USER, ADD_AUTH_SUCCESS_MSG, ADD_AUTH_ERROR_MSG, DELETE_AUTH_ERROR_MSG, LOG_OUT } from 'constants';
import saveUserInLocalStorage from '../../utils/saveToLocalStorage';



const baseUrl = 'https://ride-m-way.herokuapp.com/api/v1';


export const registerUser = (user) => async dispatch => {
  try {
    const response = await axios.post(`${baseUrl}/auth/signup`, user);

    // PERSIST USER DATA WITH LOCALSTORAGE
    saveUserInLocalStorage(response)

    dispatch({
      type: ADD_USER,
      payload: response.data
    });

    dispatch({
      type: ADD_AUTH_SUCCESS_MSG,
      payload: response.data.message
    })

  } catch (event) {
    dispatch({
      type: ADD_AUTH_ERROR_MSG,
      message: event.response.data.message
    });

  }

};

export const loginUser = (user) => async dispatch => {
  try {
    const response = await axios.post(`${baseUrl}/auth/login`, user);

    // PERSIST USER DATA WITH LOCALSTORAGE
    saveUserInLocalStorage(response)
    dispatch({
      type: ADD_USER,
      payload: response.data
    });

  } catch (error) {
    dispatch({
      type: ADD_AUTH_ERROR_MSG,
      message: error.response.data.message
    });
  }

};

export const deleteAuthErrorMessage = () => {
  return {
    type: DELETE_AUTH_ERROR_MSG
  }
}

export const logOut = () => disptch => {
  localStorage.removeItem('rmwUser');
  localStorage.removeItem('token');

  disptch({
    type: LOG_OUT
  })

}

export const checkSession = () => async dispatch => {
  const user = await JSON.parse(localStorage.getItem('rmwUser'));
  const token = await JSON.parse(localStorage.getItem('token'));

  if (!user && !token) {
    dispatch({
      type: LOG_OUT
    })
  } else {
    dispatch({
      type: ADD_USER,
      payload: {
        user
      }
    });
  }
}
