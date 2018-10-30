
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const ProtectedRoute = ({ component: Component, isAuthenticated, ...configs }) => (
  <Route {...configs} render={(props) => (
      isAuthenticated ? <Component {...props} /> : <Redirect to='/login' />
  )} />
);
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(ProtectedRoute);