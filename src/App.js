
import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import 'static/styles/App.css';
import 'static/css/style.css';


import NavBar from 'components/NavBar';
import Home from 'pages/Home';
import Landing from 'pages/Landing';
import NotFound from 'pages/NotFound';
import Login from 'pages/Login';
import Register from 'pages/Register';
import Requests from 'pages/Requests';
import Profile from 'pages/Profile';

import Protected from 'components/HOC/Protected';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Router basename={process.env.PUBLIC_URL}>
          <div className="App">
            <NavBar />
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <Protected path="/home" component={Home} />
              <Protected exact path="/requests" component={Requests} />
              <Protected exact path="/profile" component={Profile} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </Router>
      </Fragment>
    )
  }
}

export default App;
