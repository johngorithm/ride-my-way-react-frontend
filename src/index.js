import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import axios from 'axios';
import store from 'store';
import { checkSession } from 'actions/authActions';
import { BASE_URL } from '../url.json';
import App from './App';

axios.defaults.baseURL = BASE_URL;
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';




store.dispatch(checkSession());


ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));
