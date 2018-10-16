import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { openModal } from 'actions/modalActions'
import { addRide } from 'actions/rideActions'

class RideCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleRideView() {
    this.props.addRide(this.props.ride);
    this.props.openModal('RideDetailModal');
  }

  render() {
    const { time, date, destination, capacity, occupied } = this.props.ride
    return (
      <Fragment>
        <div className="co-xl-3 co-lg-4 co-md-6 co-sm-6">
          <div className="tile">
            <div className="tile-heading center-text">
              <p className="${(ownership ? 'tag' : '')}"></p>
              <h4>RIDE TO<br></br><span>{destination}</span></h4>
            </div>

            <div className="tile-body">
              <div className="row">
                <div className="co-xl-6 co-lg-6 co-md-6 co-sm-6 co-xs-6 center-text border">
                  <p className="data-heading small">Date</p>
                  <p className="small info">{date}</p>
                </div>
                <div className="co-xl-6 co-lg-6 co-md-6 co-sm-6 co-xs-6 center-text">
                  <p className="data-heading small">Time</p>
                  <p className="small info">{time}</p>
                </div>
              </div>
            </div>
            <div className="tile-body not-first left-text">
              <p className="left"><span className="badge">{capacity}</span>capacity</p>
              <p className="right"><span className="badge">{occupied}</span>occupied</p>
            </div>

            <div className="tile-footer center-text">
              <button onClick={this.handleRideView.bind(this)} data-ownership="{(ownership === 'yours') ? 'true' : 'false'}" data-ride='${JSON.stringify(ride)}' className="button button-blue view">VIEW</button>
            </div>
          </div>
        </div>
      </Fragment >
    );
  }
}

RideCard.propTypes = {
  openModal: PropTypes.func.isRequired,
  ride: PropTypes.object.isRequired,
  addRide: PropTypes.func.isRequired
};


export default connect(
  null,
  { openModal, addRide }
)(RideCard);
