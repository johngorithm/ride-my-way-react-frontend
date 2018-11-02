import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

import InputGroup from 'components/Atom/InputGroup';
import Button from 'components/Atom/Button';

import { closeModal } from 'actions/modalActions';
import { createRide } from 'actions/rideActions';
import validateRide from 'utils/validateRide'

export class CreateRideModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rideInfo: {
        destination: '',
        date: '',
        time: '',
        takeOffVenue: '',
        capacity: ''
      },
      errors: {
        destination: '',
        date: '',
        time: '',
        takeOffVenue: '',
        capacity: ''
      }
    };
  }

  handleChange = (e) => {
    const { rideInfo } = this.state;
    const newRideData = { ...rideInfo };

    newRideData[`${e.target.name}`] = e.target.value;

    this.setState({
      rideInfo: newRideData
    });
  }

  closeModal(e) {
    e.preventDefault();
    this.props.closeModal(this.props.modalName)
  }

  handleSubmit = event => {
    event.preventDefault();
    const { rideInfo } = this.state;

    const { errors, isValidData } = validateRide(rideInfo);

    if (isValidData) {
      this.setState({
        errors: {
          destination: '',
          date: '',
          time: '',
          takeOffVenue: '',
          capacity: ''
        }
      })
      return this.props.createRide(rideInfo).then(() => {
        this.props.closeModal(this.props.modalName)
        this.props.history.push('/home');
      })
    } else {
      this.setState({
        errors
      });
    }
  }

  render() {
    const { destination, date, time, capacity, takeOffVenue } = this.state.rideInfo;
    const { errors } = this.state;
    const { succesMessge, isLoading } = this.props;
    return (
      <Fragment>
        <div className="modal" id="add-offer-modal">
          <div className="modal-content animate">
            <form id="create-offer-form" onSubmit={this.handleSubmit}>
              <div id="form-header" className="co-xl-12 co-lg-12 co-md-12 co-sm-12" >
                  <h3 id="form-header-title" className ="center-text">OFFER A RIDE</h3>
                  {succesMessge ? (<p className="success-message small center-text">{succesMessge}</p>) : null}
                  
              </div>
              <div className="row">
                <InputGroup  
                  classes="co-xl-12 co-lg-12 co-md-12 co-sm-12"
                  label="Destination"
                  error={errors.destination}
                  type="text"
                  name="destination"
                  placeholder="where are you goin?"
                  value={destination}
                  onChange={this.handleChange}
                />

                <InputGroup  
                  classes="co-xl-6 co-lg-6 co-md-6 co-sm-6"
                  label="Date"
                  error={errors.date}
                  type="date"
                  name="date"
                  value={date}
                  onChange={this.handleChange}
                />

                <InputGroup  
                  classes="co-xl-6 co-lg-6 co-md-6 co-sm-6"
                  label="Time"
                  error={errors.time}
                  type="time"
                  name="time"
                  value={time}
                  onChange={this.handleChange}
                />

                <InputGroup  
                  classes="co-xl-12 co-lg-12 co-md-12 co-sm-12"
                  label="Capacity"
                  error={errors.capacity}
                  type="number"
                  name="capacity"
                  max="100"
                  placeholder="max: 100"
                  value={capacity}
                  onChange={this.handleChange}
                />

                <InputGroup  
                  classes="co-xl-12 co-lg-12 co-md-12 co-sm-12"
                  label="Takeoff Venue"
                  error={errors.takeOffVenue}
                  type="text"
                  name="takeOffVenue"
                  placeholder="where will your journey start?"
                  value={takeOffVenue}
                  onChange={this.handleChange}
                />

                <div className="co-xl-12 co-lg-12 co-md-12 co-sm-12 right-text">
                  <Button 
                    text="CLOSE" 
                    type="button" 
                    onClick={this.closeModal.bind(this)}
                    classes="button button-white close"
                  />
                  {" "}

                  <Button
                    text="CREATE OFFER"
                    type="submit"
                    style={ isLoading ? {opacity: 0.4, cursor: 'forbidden'} : null}
                    classes="button button-blue create" 
                    disabled={ isLoading ? true : false}
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </Fragment>
    );
  }
}

CreateRideModal.defaultProps = {
  modalName: 'CreateRideModal'
}

CreateRideModal.propTypes = {
  isCreateRideModalOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  createRide: PropTypes.func.isRequired,
  modalName: PropTypes.string.isRequired,
  succesMessge: PropTypes.string,
  history: PropTypes.objectOf(PropTypes.any),
  isLoading: PropTypes.bool.isRequired
}


const mapStateToProps = (state) => ({
  isCreateRideModalOpen: state.modal.isCreateRideModalOpen,
  isLoading: state.ride.isLoading,
  succesMessge: state.ride.successMessge
});

export default withRouter(connect(
  mapStateToProps,
  { closeModal, createRide }
)(CreateRideModal));
