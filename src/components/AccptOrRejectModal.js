import React, { Fragment } from 'react';

class AcceptOrRejectModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <div className="modal" id="reject-ride-request-modal">
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
      </Fragment>
    );
  }
}

AcceptOrRejectModal.propTypes = {};

export default AcceptOrRejectModal;
