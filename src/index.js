import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";

import store from 'store';
import { checkSession } from 'actions/authActions';

import App from './App';

store.dispatch(checkSession());


ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));
