
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';



export const Protected = ({ component: Component, isAuthenticated, ...configs }) => {
  return (<Route {...configs} render={(props) => (
      isAuthenticated ? <Component {...props} /> : <Redirect to='/login' />
  )} 
  />)
}



const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps
  )(Protected);