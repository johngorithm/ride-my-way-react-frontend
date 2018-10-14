import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import logo from '../static/images/favicon.png';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoginIn: false
    };
  }
  render() {
    if (!this.state.isLoginIn) {
      return (
        <nav className="navigation">
          <div className="navbar wrapper">
            <p className="navbar-toggle small">MENU</p>
            <ul className="nav-items nav-left">
              <li className="nav-item">
                <img src={logo} alt="logo" />
                <Link to="/">RMW</Link>
              </li>
            </ul>
            <ul className="nav-items nav-right">
              <li className="nav-item">
                <Link to="/login">LOGIN</Link>
              </li>
              <li className="nav-item">
                <Link to="/register">REGISTER</Link>
              </li>
            </ul>
          </div>
        </nav>
      );
    } else {
      return (
        <nav className="navigation">
          <div className="navbar wrapper">
            <p className="navbar-toggle small">MENU</p>
            <ul className="nav-items nav-left">
              <li className="nav-item">
                <img src={logo} alt="logo" /> <Link to="./index">RMW </Link>
              </li>
            </ul>
            <ul className="nav-items nav-right">
              <li className="nav-item">
                <Link to="/home">Dashboard</Link>
              </li>
              <li id="offer-ride-btn" className="nav-item">
                <Link to="#">Offer A Ride</Link>
              </li>
              <li id="dropdown-nav" className="nav-item">
                <Link to="#">
                  <span>User</span> <i className="fas fa-chevron-down" />
                </Link>
                <div className="droppy">
                  <span className="pointer" />
                  <div className="dropdown-nav">
                    <Link id="first" to="/profile">
                      Profile
                    </Link>
                    <Link to="/notifications">Notifications</Link>
                    <Link id="logout" to="/index">
                      Logout
                    </Link>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      )
    }
  }
}

NavBar.propTypes = {};

export default NavBar;
