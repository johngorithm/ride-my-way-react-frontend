import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'


import { loginUser } from 'actions/authActions';

import './login.css';

export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        username: '',
        password: '',
      },
      errors: {}
    }
  }



  handleChange(e) {
    const user = { ...this.state.userInfo };
    user[`${e.target.name}`] = e.target.value;
    this.setState({
      userInfo: user
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    const errors = {};
    let isValidData = true;

    Object.entries(this.state.userInfo).forEach((field) => {
      const [fieldName, fieldData] = field;

      if (fieldData.trim() === '') {
        errors[fieldName] = `${fieldName} is required`;
        isValidData = false;
      } else if (fieldName === 'password' && fieldData.length < 6) {
        errors[fieldName] = 'password must NOT be less than 6 characters';
        isValidData = false;
      }
    });

    if (isValidData) {
      this.setState({
        errors: {}
      })
      // Login Action
      this.props.loginUser(this.state.userInfo).then(() => {
        this.props.history.push('/home');
      })

    } else {
      this.setState({
        errors: errors
      })
    }
  }


  render() {
    return (
      <Fragment>
        <main id="login-page" className="content">
          <div className="overlay" />
          <div className="wrapper">
            <h3>LOGIN</h3>
            <form onSubmit={this.handleSubmit.bind(this)} >
              <p className="error-message" />
              <p className="success-message" />
              <input
                type="text"
                placeholder="Enter Username"
                name="username"
                required
                onChange={this.handleChange.bind(this)}
              />{this.state.errors.username ? <span className="error-message">{this.state.errors.username}</span> : null}
              <br />
              <input
                type="password"
                placeholder="Enter Password"
                name="password"
                required
                onChange={this.handleChange.bind(this)}
              />{this.state.errors.password ? <span className="error-message">{this.state.errors.password}</span> : null}
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
  loginUser: PropTypes.func.isRequired,
  history: PropTypes.any.isRequired,
}

export default connect(
  null,
  { loginUser }
)(Login);
