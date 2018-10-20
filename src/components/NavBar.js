import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'


import { openModal } from 'actions/modalActions';
import { logOut } from 'actions/authActions';
import logo from '../static/images/favicon.png';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDropDownVisible: false,
      isMobileNavVisible: false
    };
  }


  toggleDropdown(e) {
    e.preventDefault();
    this.setState({
      isDropDownVisible: !this.state.isDropDownVisible
    })
  }

  toggleMobileNav(e) {
    e.preventDefault();
    this.setState({
      isMobileNavVisible: !this.state.isMobileNavVisible
    })
  }

  openCreateRideModal(e) {
    e.preventDefault();
    this.props.openModal('CreateRideModal');
  }

  handleLogOut(e) {
    e.preventDefault();
    this.props.logOut();
    window.location.href = '/'
  }

  render() {
    if (!this.props.isAuthenticated) {
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
            <p className="navbar-toggle small" onClick={this.toggleMobileNav.bind(this)}>MENU</p>
            <ul className="nav-items nav-left">
              <li className="nav-item">
                <img src={logo} alt="logo" /> <Link to="/">RMW </Link>
              </li>
            </ul>
            <ul className="nav-items nav-right" style={this.state.isMobileNavVisible ? { display: 'block' } : null}>
              <li className="nav-item">
                <Link to="/home">Dashboard</Link>
              </li>
              <li id="offer-ride-btn" className="nav-item">
                <Link to="#" onClick={this.openCreateRideModal.bind(this)}>Offer A Ride</Link>
              </li>
              <li id="dropdown-nav" className="nav-item">
                <Link to="#" onClick={this.toggleDropdown.bind(this)}>
                  <span>{this.props.isAuthenticated ? this.props.user.username : 'ANONYMOUS'}</span> <i className="fas fa-chevron-down" />
                </Link>
                {this.state.isDropDownVisible ? (
                  <div className="droppy">
                    <span className="pointer" />
                    <div className="dropdown-nav">
                      <Link id="first" to="/profile">
                        Profile
                    </Link>
                      <Link to="/notifications">Notifications</Link>
                      <Link id="logout" to="#" onClick={this.handleLogOut.bind(this)}>
                        Logout
                    </Link>
                    </div>
                  </div>
                ) : null}

              </li>
            </ul>
          </div>
        </nav>
      )
    }
  }
}

NavBar.propTypes = {
  openModal: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  user: PropTypes.object,
  logOut: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user
})

export default connect(
  mapStateToProps,
  { openModal, logOut }
)(NavBar);
