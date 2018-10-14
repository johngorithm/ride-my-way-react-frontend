import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import logo from '../static/images/favicon.png';

const NavBar = () => {
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
};

NavBar.propTypes = {};

export default NavBar;
