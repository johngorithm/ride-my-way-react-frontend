import {
  AUTH_STARTED,
  AUTH_SUCCESS,
  AUTH_FAILED,
  LOG_OUT,
  ADD_USER
} from 'constants'


const initialState = {
  user: {},
  isAuthenticated: false,
  authIsLoading: false
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        isAuthenticated: true,
        user: action.user
      }
    case AUTH_STARTED:
      return {
        ...state,
        authIsLoading: true
      }
    case AUTH_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        user: action.user,
        authIsLoading: true
      }
    case AUTH_FAILED:
      return {
        ...state,
        authIsLoading: false
      }

    case LOG_OUT:
      return {
        ...state,
        user: {},
        isAuthenticated: false
      }
    default:
      return state
  }
}


export default authReducer;