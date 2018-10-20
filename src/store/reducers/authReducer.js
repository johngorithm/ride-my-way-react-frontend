

import {
  ADD_USER,
  ADD_AUTH_ERROR_MSG,
  DELETE_AUTH_ERROR_MSG,
  LOG_OUT,
  ADD_AUTH_SUCCESS_MSG
} from 'constants'


const initialState = {
  welcomeMessage: '',
  token: null,
  user: {},
  isAuthenticated: false,
  errorMessage: ''
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user
      }
    case ADD_AUTH_SUCCESS_MSG:
      return {
        ...state,
        welcomeMessage: action.payload.message
      }

    case ADD_AUTH_ERROR_MSG:
      return {
        ...state,
        errorMessage: action.message
      }

    case DELETE_AUTH_ERROR_MSG:
      return {
        ...state,
        errorMessage: ''
      }

    case LOG_OUT:
      return {
        ...state,
        token: null,
        user: {},
        isAuthenticated: false
      }
    default:
      return state
  }
}


export default authReducer;