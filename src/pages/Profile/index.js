import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import CreateRideModal from '../../components/CreateRideModal';
import logo from '../../static/images/favicon.png';
import './profile.css';

const Profile = () => {
  return (
    <Fragment>
      <CreateRideModal />
      <div className="modal" id="detail-modal">
        {/**<!--RIDE DETAIL MODAL STARTS-->**/}
        <div className="modal-content animate">
          <div className="tile">
            <div className="tile-heading center-text">
              <h4>
                RIDE TO <span>OLANDO</span>
              </h4>
              <p className="smaller">
                <strong>from: </strong>
                <span>5, Main str. ketu</span>
              </p>
              <span className="message smaller" />
            </div>

            <div className="tile-body">
              <div className="row">
                <div className="co-xl-6 co-lg-6 co-md-6 co-sm-6 co-xs-6 center-text border">
                  <p className="data-heading small">Date</p>
                  <p className="small date">13/6/18</p>
                </div>
                <div className="co-xl-6 co-lg-6 co-md-6 co-sm-6 co-xs-6 center-text">
                  <p className="data-heading small">Time</p>
                  <p className="small time">12:30 PM</p>
                </div>
              </div>
            </div>

            <div className="tile-body center-text padded">
              <p className="data-heading small">Driver</p>
              <p className="small driver">Philip Newman</p>
            </div>

            <div id="capacity-info" className="tile-body not-first center-text">
              <p className="left">
                <span className="badge" id="capacity" />
                capacity
              </p>
              <p className="right">
                <span className="badge" id="space-occupied" />
                occupied
              </p>
            </div>

            <div className="tile-footer center-text">
              <button className="button button-blue close">CLOSE</button>
              <button className="button button-white join">JOIN</button>
            </div>
          </div>
        </div>
      </div>

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

      <main id="profile-loader">
        <p id="general-message" />

        <header id="profile-header">
          <div id="user-info" className="row">
            <p id="user-loader">Loading ...</p>
          </div>
        </header>

        <section id="ride-details">
          <div className="row wrapper">
            <div className="co-xl-6 co-lg-6 co-md-6 co-sm-12">
              <div className="square">
                <p>RIDES OFFERED</p>
                <h1 id="offered">Loading...</h1>
              </div>
            </div>

            <div className="co-xl-6 co-lg-6 co-md-6 co-sm-12">
              <div className="square">
                <p>RIDES TAKEN</p>
                <h1 id="taken">Loading...</h1>
              </div>
            </div>
          </div>
        </section>

        <section id="rides-offered" className="hori-display">
          <div className="wrapper">
            <h5 className="section-intro center-text">RIDES OFFERED</h5>
            <div className="container center-text">
              <p id="rides-offered-loader " className="loading">
                Loading ...
              </p>
            </div>
          </div>
        </section>

        <section id="rides-taken" className="hori-display">
          <div className="wrapper">
            <h5 className="section-intro center-text">RIDES TAKEN</h5>
            <div className="container center-text">
              <p id="rides-taken-loader" className="loading">
                Loading ...
              </p>
            </div>
          </div>
        </section>
      </main>
    </Fragment>
  );
};

export default Profile;
