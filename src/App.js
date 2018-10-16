import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from "react-redux";

import 'static/styles/App.css';
import 'static/css/style.css';

import store from 'store';
import NavBar from 'components/NavBar';
import Home from 'pages/Home';
import Landing from 'pages/Landing';
import NotFound from 'pages/NotFound';
import Login from 'pages/Login';
import Register from 'pages/Register';
import Requests from 'pages/Requests';
import Profile from 'pages/Profile';


export class App extends Component {
  render() {
    const loggedIn = true;

    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <NavBar />
            <Switch>
              <Route exact path="/" component={loggedIn ? Landing : null} />
              <Route exact path="/home" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/requests" component={Requests} />
              <Route exact path="/profile" component={Profile} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
