import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../static/images/favicon.png';

const Requests = () => {
  return (
    <div id="requests-body">
      <div className="modal" id="add-offer-modal">
        {/**<!--ADD OFFER MODAL STARTS-->*/}
        <div className="modal-content animate">
          <form id="create-offer-form" action="#" method="POST">
            <div className="row">
              <p className="success-message small center-text" />
              <div className="co-xl-12 co-lg-12 co-md-12 co-sm-12">
                <p className="smaller">
                  Destination <span className="error-message"> </span>
                </p>
                <input type="text" name="destination" />
              </div>

              <div className="co-xl-6 co-lg-6 co-md-6 co-sm-6">
                <p className="smaller">
                  Date <span className="error-message"> </span>
                </p>
                <input type="date" name="date" />
              </div>

              <div className="co-xl-6 co-lg-6 co-md-6 co-sm-6">
                <p className="smaller">
                  Time <span className="error-message"> </span>
                </p>
                <input type="time" name="time" />
              </div>

              <div className="co-xl-12 co-lg-12 co-md-12 co-sm-12">
                <p className="smaller">
                  capacity <span className="error-message"> </span>
                </p>
                <input type="number" name="capacity" />
              </div>

              <div className="co-xl-12 co-lg-12 co-md-12 co-sm-12">
                <p className="smaller">
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
      {/*<!--OFFER A RIDE MODAL END-->*/}
      <div className="modal" id="reject-ride-request-modal">
        {/**<!--REJECT OFFER MODAL STARTS-->**/}
        <div className="modal-content animate">
          <div className="tile">
            <div className="tile-body center-text">
              <p className="confirm-msg small">
                Are you sure you want to <strong>ACCEPT</strong> a ride request
                from <span>John</span>
              </p>
              <p className="error-message smaller" />
            </div>

            <div className="tile-footer center-text">
              <button className="button button-blue close">CLOSE</button>
              <button
                onClick="acceptOrRejectRequest(this)"
                className="button button-white yes-btn"
              >
                YES
              </button>
            </div>
          </div>
        </div>
      </div>
      {/**<!--REJECT OFFER MODAL ENDS-->**/}
      <nav className="navigation">
        <div className="navbar wrapper">
          <p className="navbar-toggle small">MENU</p>
          <ul className="nav-items nav-left">
            <li className="nav-item">
              <img src={logo} alt="logo" /> <Link to="/index">RMW</Link>
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
      <div className="submenu row">
        <Link
          to="/home"
          className="co-xl-6 co-lg-6 co-md-6 co-sm-6 co-xs-6 center-text border"
        >
          RIDE OFFERS
        </Link>
        <Link
          to="/requests"
          className="link active co-xl-6 co-lg-6 co-md-6 co-sm-6 co-xs-6 center-text"
        >
          MY REQUESTS
        </Link>
      </div>
      <main className="dropdown center-text" id="request-loader">
        <p id="loading">LOADING ...</p>
      </main>
    </div>
  );
};

export default Requests;
