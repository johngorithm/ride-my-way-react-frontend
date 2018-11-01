import "babel-polyfill"
import axios from 'axios';
import toastr from 'toastr';


import { ADD_USER, AUTH_STARTED, AUTH_SUCCESS, AUTH_FAILED, LOG_OUT } from 'constants';
import saveUserInLocalStorage from '../../utils/saveToLocalStorage';



const baseUrl = 'https://ride-m-way.herokuapp.com/api/v1';


export const registerUser = (user) => async dispatch => {
  dispatch({
    type: AUTH_STARTED
  })
  try {
    const response = await axios.post(`${baseUrl}/auth/signup`, user);

    // PERSIST USER DATA WITH LOCALSTORAGE
    saveUserInLocalStorage(response)
    toastr.success('Your successfully created');

    dispatch({
      type: AUTH_SUCCESS,
      user: response.data.user
    })

  } catch (error) {
    toastr.error(error.response.data.message);
    dispatch({
      type: AUTH_FAILED
    });
  }

};

export const loginUser = (user) => async dispatch => {
  dispatch({
    type: AUTH_STARTED
  })

  try {
    const response = await axios.post(`${baseUrl}/auth/login`, user);
    // PERSIST USER DATA WITH LOCALSTORAGE
    saveUserInLocalStorage(response)
    
    toastr.success(response.data.message)

    return dispatch({
      type: AUTH_SUCCESS,
      user: response.data.user
    })


  } catch (error) {
    toastr.error(error.response.data.message);
    return dispatch({
      type: AUTH_FAILED
    });
  }

};

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
    user: user
  });
}
