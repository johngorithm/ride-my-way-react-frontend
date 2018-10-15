import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { closeModal } from 'actions/modalActions';

class CreateRideModal extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {};
  // }

  closeModal(e) {
    e.preventDefault();
    this.props.closeModal(this.props.modalName)
  }

  render() {
    return (
      <Fragment>
        <div className="modal" id="add-offer-modal">
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
                  <input
                    type="number"
                    name="capacity"
                    max="100"
                    placeholder="max: 100"
                  />
                </div>

                <div className="co-xl-12 co-lg-12 co-md-12 co-sm-12">
                  <p className="smaller">
                    Takeoff Venue <span className="error-message"> </span>
                  </p>
                  <input type="text" name="takeoff_venue" />
                </div>

                <div className="co-xl-12 co-lg-12 co-md-12 co-sm-12 right-text">
                  <button type="button" className="button button-white close" onClick={this.closeModal.bind(this)}>
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
  modalName: PropTypes.string.isRequired
}


const mapStateToProps = (state) => ({
  isCreateRideModalOpen: state.modal.isCreateRideModalOpen
})
// export { CreateRideModal }

export default connect(
  mapStateToProps,
  { closeModal }
)(CreateRideModal);
