import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../static/images/favicon.png';
import './home.css';

const Home = () => {
  return (
    <Fragment>
      <div className="modal" id="add-offer-modal">
        <div className="modal-content animate">
          <form id="create-offer-form" action="#" method="POST">
            <div className="row">
              <p className="success-message small center-text" />
              <div className="co-xl-12 co-lg-12 co-md-12 co-sm-12">
                <p className="small">
                  Destination
                  <span className="error-message"> </span>
                </p>
                <input type="text" name="destination" />
              </div>

              <div className="co-xl-6 co-lg-6 co-md-6 co-sm-6">
                <p className="small">
                  Date <span className="error-message"> </span>
                </p>
                <input type="date" name="date" />
              </div>

              <div className="co-xl-6 co-lg-6 co-md-6 co-sm-6">
                <p className="small">
                  Time <span className="error-message"> </span>
                </p>
                <input type="time" name="time" />
              </div>

              <div className="co-xl-12 co-lg-12 co-md-12 co-sm-12">
                <p className="small">
                  capacity <span className="error-message"> </span>
                </p>
                <input type="number" name="capacity" />
              </div>

              <div className="co-xl-12 co-lg-12 co-md-12 co-sm-12">
                <p className="small">
                  Takeoff Venue <span className="error-message"> </span>
                </p>
                <input type="text" name="takeoff_venue" />
              </div>

              <div className="co-xl-12 co-lg-12 co-md-12 co-sm-12 right-text">
                <button type="button" className="button button-white close">
                  CLOSE
                </button>
                <button type="submit" className="button button-blue create">
                  CREATE OFFER
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div className="modal" id="detail-modal">
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

            <div className="tile-body driver center-text padded">
              <p className="data-heading small">Driver</p>
              <p className="small driver">Philip Newman</p>
            </div>

            <div className="tile-footer center-text">
              <button className="button button-blue close">CLOSE</button>
              <button
                onClick="joinRide(this)"
                className="button button-white join"
              >
                JOIN
              </button>
            </div>
          </div>
        </div>
      </div>

      <nav className="navigation">
        {/**<!--NAVIGATIONAL BAR STARTS-->**/}
        <div className="navbar wrapper">
          <p className="navbar-toggle small">MENU</p>
          <ul className="nav-items nav-left">
            <li className="nav-item">
              <img src={logo} alt="logo" />
              <Link to="/index">RMW</Link>
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
                  <Link id="first" to="/profile.html">
                    Profile
                  </Link>
                  <Link to="/notifications.html">Notifications</Link>
                  <Link id="logout" to="/index">
                    Logout
                  </Link>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </nav>

      <div className="submenu row">
        {/**<!--SUBMENU BAR STARTS-->**/}
        <Link
          to="/home"
          className="link active co-xl-6 co-lg-6 co-md-6 co-sm-6 co-xs-6 center-text border"
        >
          RIDE OFFERS
        </Link>
        <Link
          to="/requests"
          className="co-xl-6 co-lg-6 co-md-6 co-sm-6 co-xs-6 center-text"
        >
          MY REQUESTS
        </Link>
      </div>

      <main className="wrapper dropdown">
        <div className="row" id="rides-loader">
          <div id="loading" className="center-text">
            Loading ...
          </div>
        </div>
      </main>
    </Fragment>
  );
};

export default Home;
