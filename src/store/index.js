import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';


const initialState = {};

let middlewre = [thunk];

const composeArgs = [applyMiddleware(...middlewre)]

// ADD REDUX DEV TOOL IN DEVELOPMENT MODE
if ((process.env.NODE_ENV === 'development') && (window.__REDUX_DEVTOOLS_EXTENSION__)) {
  composeArgs.push(window.__REDUX_DEVTOOLS_EXTENSION__())
}


// 
const store = createStore(
  rootReducer,
  initialState,
  compose(
    ...composeArgs
  )
);

export default store;
