import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'



import { registerUser } from 'actions/authActions';
import './register.css';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        firstname: '',
        lastname: '',
        email: '',
        username: '',
        password: ''
      },
      errors: {
        firstname: '',
        lastname: '',
        email: '',
        username: '',
        password: '',
      }
    }
  }

  handleChange(e) {
    const newUserInfo = { ...this.state.userInfo };
    newUserInfo[`${e.target.name}`] = e.target.value;
    this.setState({
      userInfo: newUserInfo
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
      } else if (fieldName === 'email') {
        const regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!regEx.test(fieldData)) {
          errors[fieldName] = 'email address is invalid';
          isValidData = false;
        }
      }
    });

    if (isValidData) {
      this.setState({
        errors: {}
      })
      this.props.registerUser(this.state.userInfo).then(() => {
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
        <main id="register-page" className="content">
          <div className="overlay" />
          <div className="wrapper">
            <h3>JOIN US</h3>
            <form id="register-form" onSubmit={this.handleSubmit.bind(this)}>
              <br />

              <div className="row">
                <div className="field co-xl-6 col-lg-6 co-md-6 co-sm-6 co-xs-12">
                  <p className="label small">
                    First Name {this.state.errors.firstname ? <span className="error-message">{this.state.errors.firstname}</span> : null}
                  </p>
                  <input type="text" placeholder="first name" name="firstname" onChange={this.handleChange.bind(this)} />
                </div>
                <div className="field co-xl-6 col-lg-6 co-md-6 co-sm-6 co-xs-12">
                  <p className="label small">
                    Last Name {this.state.errors.lastname ? <span className="error-message">{this.state.errors.lastname}</span> : null}
                  </p>
                  <input type="text" placeholder="last name" name="lastname" onChange={this.handleChange.bind(this)} />
                </div>
                <div className="field co-xl-12 co-lg-12 co-md-12 co-sm-12 co-xs-12">
                  <p className="label small">
                    Email {this.state.errors.email ? <span className="error-message">{this.state.errors.email}</span> : null}
                  </p>
                  <input type="text" placeholder="email" name="email" onChange={this.handleChange.bind(this)} />
                </div>
                <div className="field co-xl-6 col-lg-6 co-md-6 co-sm-6 co-xs-12">
                  <p className="label small">
                    Username {this.state.errors.username ? <span className="error-message">{this.state.errors.username}</span> : null}
                  </p>
                  <input type="text" placeholder="username" name="username" onChange={this.handleChange.bind(this)} />
                </div>
                <div className="field co-xl-6 col-lg-6 co-md-6 co-sm-6 co-xs-12">
                  <p className="label small">
                    Password {this.state.errors.password ? <span className="error-message">{this.state.errors.password}</span> : null}
                  </p>
                  <input type="password" placeholder="password" name="password" onChange={this.handleChange.bind(this)} />
                </div>
              </div>

              <br />
              <div className="panel-footer right-text">
                <button
                  id="register-btn"
                  type="submit"
                  className="button button-blue"
                >
                  REGISTER
                  </button>
              </div>
            </form>
          </div>
        </main>
      </Fragment>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  history: PropTypes.any.isRequired
}



export default connect(
  null,
  { registerUser }
)(Register);
