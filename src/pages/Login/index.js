import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'


import { loginUser } from 'actions/authActions';

import './login.css';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        username: '',
        password: '',
      }
    }
  }
  render() {
    return (
      <Fragment>
        <main id="login-page" className="content">
          <div className="overlay" />
          <div className="wrapper">
            <h3>LOGIN</h3>
            <form action="#" method="POST">
              <p className="error-message" />
              <p className="success-message" />
              <input
                type="text"
                placeholder="Enter Username"
                name="username"
                required
              />
              <br />
              <input
                type="password"
                placeholder="Enter Password"
                name="password"
                required
              />
              <br />

              <button id="login-btn" type="submit" className="button button-blue">
                LOGIN
              </button>
            </form>
          </div>
        </main>
      </Fragment>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired
}

export default connect(
  null,
  { loginUser }
)(Login);
