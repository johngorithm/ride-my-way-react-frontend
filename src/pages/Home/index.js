import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'

import { openModal } from 'actions/modalActions';
import SubMenu from 'components/SubMenu';
import CreateRideModal from 'components/CreateRideModal';
import RideDetailModal from 'components/RideDetailModal';

import './home.css';

class Home extends React.Component {
  render() {
    return (
      <Fragment>
        {this.props.isCreateRideModalOpen ? <CreateRideModal /> : null}
        {this.props.isRideDetailModalOpen ? <RideDetailModal /> : null}

        <SubMenu />

        <main className="wrapper dropdown">
          <div className="row" id="rides-loader">
            <div id="loading" className="center-text">
              Loading ...
              </div>
          </div>
        </main>
      </Fragment>
    )
  }
}

Home.propTypes = {
  isCreateRideModalOpen: PropTypes.bool.isRequired,
  isRideDetailModalOpen: PropTypes.bool.isRequired,
  openModal: PropTypes.func.isRequired
}


const mapStateToProps = (state) => ({
  isCreateRideModalOpen: state.modal.isCreateRideModalOpen,
  isRideDetailModalOpen: state.modal.isRideDetailModalOpen,
})



export default connect(
  mapStateToProps,
  { openModal }
)(Home);