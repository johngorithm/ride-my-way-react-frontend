import React, { Fragment } from 'react';

import CreateRideModal from '../../components/CreateRideModal';
import RideDetailModal from '../../components/RideDetailModal';
import './profile.css';

const Profile = () => {
  return (
    <Fragment>
      <CreateRideModal />
      <RideDetailModal />

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
