import React, { Fragment } from 'react';
import NavBar from '../../components/NavBar';
import './login.css';

const Login = () => {
  return (
    <Fragment>
      <NavBar />
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
};

export default Login;
