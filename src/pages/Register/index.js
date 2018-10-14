import React, { Fragment } from 'react';
import './register.css';

const Register = () => {
  return (
    <Fragment>
      <main id="register-page" className="content">
        <div className="overlay" />
        <div className="wrapper">
          <h3>JOIN US</h3>
          <form id="register-form">
            <p className="error-message center-text small" />
            <p className="success-message center-text small" />
            <br />

            <div className="row">
              <div className="field co-xl-6 col-lg-6 co-md-6 co-sm-6 co-xs-12">
                <p className="label small">
                  First Name <span className="error-message" />
                </p>
                <input type="text" placeholder="first name" name="firstname" />
              </div>
              <div className="field co-xl-6 col-lg-6 co-md-6 co-sm-6 co-xs-12">
                <p className="label small">
                  Last Name <span className="error-message" />
                </p>
                <input type="text" placeholder="last name" name="lastname" />
              </div>
              <div className="field co-xl-12 co-lg-12 co-md-12 co-sm-12 co-xs-12">
                <p className="label small">
                  Email <span className="error-message" />
                </p>
                <input type="text" placeholder="email" name="email" />
              </div>
              <div className="field co-xl-6 col-lg-6 co-md-6 co-sm-6 co-xs-12">
                <p className="label small">
                  Username <span className="error-message" />
                </p>
                <input type="text" placeholder="username" name="username" />
              </div>
              <div className="field co-xl-6 col-lg-6 co-md-6 co-sm-6 co-xs-12">
                <p className="label small">
                  Password <span className="error-message" />
                </p>
                <input type="password" placeholder="password" name="password" />
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
};

export default Register;
