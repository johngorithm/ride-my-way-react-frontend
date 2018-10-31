import React, { Fragment } from 'react';
import Button from 'components/Atom/Button';

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
                <Button 
                  classes="button button-blue close"
                  text="CLOSE" 
                />
                <Button
                  // onClick="acceptOrRejectRequest(this)"
                  classes="button button-white yes-btn"
                
                  text = "YES"
                />
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
