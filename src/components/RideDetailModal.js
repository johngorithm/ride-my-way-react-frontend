import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { closeModal } from 'actions/modalActions';
import Button from 'components/Atom/Button';

export class RideDetailModal extends React.Component {

  state = {};


  convertTimeTo12HoursFormat = (time)  => {
    time = time.toString().match (/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];
  
    if (time.length > 1) {
      time = time.slice (1);
      time[5] = +time[0] < 12 ? ' AM' : ' PM';
      time[0] = +time[0] % 12 || 12;
    }
    return time.join ('');
  }

  render() {
    const { ride } = this.props;
    return (
      <Fragment>
        <div className="modal" id="detail-modal">
          <div className="modal-content animate">
            <div className="tile">
              <div className="tile-heading center-text">
                <h4>
                  RIDE TO <span>{ride.destination}</span>
                </h4>
                <p className="smaller">
                  <strong>from: </strong>
                  <span>{ride.take_off_venue}</span>
                </p>
                <span className="message smaller" />
              </div>

              <div className="tile-body">
                <div className="row">
                  <div className="co-xl-6 co-lg-6 co-md-6 co-sm-6 co-xs-6 center-text border">
                    <p className="data-heading small">Date</p>
                    <p className="small date">{(new Date(ride.date)).toDateString().slice(4, 15)}</p>
                  </div>
                  <div className="co-xl-6 co-lg-6 co-md-6 co-sm-6 co-xs-6 center-text">
                    <p className="data-heading small">Time</p>
                    <p className="small time">{this.convertTimeTo12HoursFormat(ride.time.slice(0, 5))}</p>
                  </div>
                </div>
              </div>

              <div id="capacity-info" className="tile-body not-first center-text">
                <p className="left">
                  capacity<span className="badge" id="capacity">{ride.capacity}</span>

                </p>
                <p className="right">
                  occupied<span className="badge" id="space-occupied"> {ride.space_occupied}</span>
                </p>
              </div>

              <div className="tile-body driver center-text padded">
                <p className="data-heading small">Driver</p>
                <p className="small driver">{ride.creator}</p>
              </div>

              <div className="tile-footer center-text">
                <Button 
                  onClick={() => this.props.closeModal('RideDetailModal')} 
                  classes="button button-blue close" 
                  text="CLOSE"
                />
                <Button
                  //onClick="joinRide(this)"
                  classes="button button-white join"
                  text="JOIN"
                />
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
