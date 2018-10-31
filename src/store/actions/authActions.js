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

export const logOut = () => async disptch => {
  await localStorage.removeItem('rmwUser');
  await localStorage.removeItem('token');

  return disptch({
    type: LOG_OUT
  })

}

export const checkSession = () =>  dispatch => {
  const user =  JSON.parse(localStorage.getItem('rmwUser'));
  const token =  JSON.parse(localStorage.getItem('token'));

  if (!user && !token) {
    return dispatch({
      type: LOG_OUT
    })
  }
  
  return dispatch({
    type: ADD_USER,
    payload: {
      user
    }
  });
}
