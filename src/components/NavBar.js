import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types'


import { openModal } from 'actions/modalActions';
import { logOut } from 'actions/authActions';
import logo from '../static/images/favicon.png';

export class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDropDownVisible: false,
      isMobileNavVisible: false
    };
  }

  changeLink(link, event){
    event.preventDefault();
    this.setState({
      isDropDownVisible: false,
      isMobileNavVisible: false
    });
    this.props.history.push(link);
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
    this.setState({
      isDropDownVisible: false,
      isMobileNavVisible: false
    });
    this.props.openModal('CreateRideModal');
  }

  handleLogOut(e) {
    e.preventDefault();
    this.setState({
      isDropDownVisible: false,
      isMobileNavVisible: false
    });
    this.props.logOut().then(() => {
      this.props.history.push('/');
    });
  }

  render() {
    if (!this.props.isAuthenticated) {
      return (
        <nav className="navigation">
          <div className="navbar wrapper">
            <p className="navbar-toggle small" onClick={this.toggleMobileNav.bind(this)} >MENU</p>
            <ul className="nav-items nav-left">
              <li className="nav-item">
                <img src={logo} alt="logo" />
                <Link onClick={this.changeLink.bind(this, '/')}  to="/">RMW</Link>
              </li>
            </ul>
            <ul className="nav-items nav-right" style={this.state.isMobileNavVisible ? { display: 'block' } : null} >
              <li className="nav-item">
                <Link onClick={this.changeLink.bind(this, '/login')}  to="/login">LOGIN</Link>
              </li>
              <li className="nav-item">
                <Link onClick={this.changeLink.bind(this, '/register')}  to="/register">REGISTER</Link>
              </li>
            </ul>
          </div>
        </nav>
      );
    } else {
      return (
        <nav className="navigation">
          <div className="navbar wrapper">
            <p id="toggle-mobile-nav" className="navbar-toggle small" onClick={this.toggleMobileNav.bind(this)}>MENU</p>
            <ul className="nav-items nav-left">
              <li className="nav-item">
                <img src={logo} alt="logo" /> <Link onClick={this.changeLink.bind(this, '/')}  to="/">RMW </Link>
              </li>
            </ul>
            <ul className="nav-items nav-right" style={this.state.isMobileNavVisible ? { display: 'block' } : null}>
              <li className="nav-item">
                <Link onClick={this.changeLink.bind(this, '/home')}  to="/home">Dashboard</Link>
              </li>
              <li id="offer-ride-btn" className="nav-item">
                <Link id="open-create-ride-modal" to="#" onClick={this.openCreateRideModal.bind(this)}>Offer A Ride</Link>
              </li>
              <li id="dropdown-nav" className="nav-item">
                <Link id="dropdown-toggle" to="#" onClick={this.toggleDropdown.bind(this)}>
                  <span>{this.props.user.username}</span> <i className="fas fa-chevron-down" />
                </Link>
                {this.state.isDropDownVisible ? (
                  <div className="droppy">
                    <span className="pointer" />
                    <div className="dropdown-nav">
                      <Link onClick={this.changeLink.bind(this, '/profile')} id="first" to="/profile">
                        Profile
                    </Link>
                      <Link onClick={this.changeLink.bind(this, '/notification')} to="/notifications">Notifications</Link>
                      <Link id="logout" to="#" onClick={this.handleLogOut.bind(this)}>
                        Logout
                    </Link>
                    </div>
                  </div>
                ) : null }

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
  history: PropTypes.objectOf(PropTypes.any)
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user
})

export default withRouter(connect(
  mapStateToProps,
  { openModal, logOut }
)(NavBar));
