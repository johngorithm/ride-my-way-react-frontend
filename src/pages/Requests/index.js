import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'

import SubMenu from 'components/SubMenu';
import AcceptOrRejectModal from 'components/AccptOrRejectModal'
import CreateRideModal from 'components/CreateRideModal';


class Requests extends React.Component {
  render() {
    return (
      <div id="requests-body">
        {this.props.isCreateRideModalOpen ? <CreateRideModal /> : null}
        {this.props.isRequestOperationModalOpen ? <AcceptOrRejectModal /> : null}

        <SubMenu />
        <main className="dropdown center-text" id="request-loader">
          <p id="loading">LOADING ...</p>
        </main>
      </div>
    );
  }
}

Requests.propTypes = {
  isCreateRideModalOpen: PropTypes.bool.isRequired,
  isRequestOperationModalOpen: PropTypes.bool.isRequired,
}


const mapStateToProps = state => ({
  isCreateRideModalOpen: state.modal.isCreateRideModalOpen,
  isRequestOperationModalOpen: state.modal.isRequestOperationModalOpen
});


export default connect(
  mapStateToProps
)(Requests);
