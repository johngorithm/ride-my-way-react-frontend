
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import toastr from 'toastr';



export const Protected = ({ component: Component, isAuthenticated, ...configs }) => {
  return (<Route {...configs} render={(props) => {
      if (isAuthenticated) {
        return <Component {...props} /> 
      }
      toastr.warning('Please, Login to continue');
      return <Redirect to='/login' />
  }}
  />);
}



const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps
  )(Protected);