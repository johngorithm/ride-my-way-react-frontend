import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { closeModal } from 'actions/modalActions';

class RideDetailModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <div className="modal" id="detail-modal">
          <div className="modal-content animate">
            <div className="tile">
              <div className="tile-heading center-text">
                <h4>
                  RIDE TO <span>{this.props.ride.destination}</span>
                </h4>
                <p className="smaller">
                  <strong>from: </strong>
                  <span>{this.props.ride.takeOffVenue}</span>
                </p>
                <span className="message smaller" />
              </div>

              <div className="tile-body">
                <div className="row">
                  <div className="co-xl-6 co-lg-6 co-md-6 co-sm-6 co-xs-6 center-text border">
                    <p className="data-heading small">Date</p>
                    <p className="small date">{this.props.ride.date}</p>
                  </div>
                  <div className="co-xl-6 co-lg-6 co-md-6 co-sm-6 co-xs-6 center-text">
                    <p className="data-heading small">Time</p>
                    <p className="small time">{this.props.ride.time}</p>
                  </div>
                </div>
              </div>

              <div id="capacity-info" className="tile-body not-first center-text">
                <p className="left">
                  capacity<span className="badge" id="capacity">{this.props.ride.capacity}</span>

                </p>
                <p className="right">
                  occupied<span className="badge" id="space-occupied"> {this.props.ride.occupied}</span>
                </p>
              </div>

              <div className="tile-body driver center-text padded">
                <p className="data-heading small">Driver</p>
                <p className="small driver">{this.props.ride.driver}</p>
              </div>

              <div className="tile-footer center-text">
                <button onClick={() => this.props.closeModal('RideDetailModal')} className="button button-blue close">CLOSE</button>
                <button
                  //onClick="joinRide(this)"
                  className="button button-white join"
                >
                  JOIN
                </button>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

RideDetailModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  ride: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  ride: state.ride.ride
})

export default connect(
  mapStateToProps,
  { closeModal }
)(RideDetailModal);
