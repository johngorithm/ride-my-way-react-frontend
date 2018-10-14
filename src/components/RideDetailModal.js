import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

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
      </Fragment>
    );
  }
}

RideDetailModal.propTypes = {};

export default RideDetailModal;
