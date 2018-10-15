import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'


import CreateRideModal from '../../components/CreateRideModal';
import RideDetailModal from '../../components/RideDetailModal';
import './profile.css';

class Profile extends React.Component {
  render() {
    return (
      <Fragment>
        {this.props.isCreateRideModalOpen ? <CreateRideModal /> : null}
        {this.props.isRideDetailModalOpen ? <RideDetailModal /> : null}

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
  }
}

Profile.propTypes = {
  isCreateRideModalOpen: PropTypes.bool.isRequired,
  isRideDetailModalOpen: PropTypes.bool.isRequired
}

const mapStateToProps = (state) => ({
  isCreateRideModalOpen: state.modal.isCreateRideModalOpen,
  isRideDetailModalOpen: state.modal.isRideDetailModalOpen
});

export default connect(
  mapStateToProps
)(Profile);
