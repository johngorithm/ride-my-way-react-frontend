

import { ADD_USER, POST_REGISTRATION_ERROR, DELETE_REGISTRATION_ERROR } from 'constants'

const initialState = {
  welcomeMessage: null,
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
        welcomeMessage: action.payload.messasge,
        isAuthenticated: true,
        user: action.payload.user,
        token: action.payload.token,
      }

    case POST_REGISTRATION_ERROR:
      return {
        ...state,
        errorMessage: action.message
      }

    case DELETE_REGISTRATION_ERROR:
      return {
        ...state,
        errorMessage: ''
      }
    default:
      return state
  }
}

export default authReducer;