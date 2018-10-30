import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'

import { openModal } from 'actions/modalActions';
import { getRides } from 'actions/rideActions';
import { checkSession } from 'actions/authActions';
import SubMenu from 'components/SubMenu';
import CreateRideModal from 'components/CreateRideModal';
import RideDetailModal from 'components/RideDetailModal';
import RideCard from 'components/RideCard';

import './home.css';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.checkSession().then(() => {
      if (!this.props.isAuthenticated) {
        return this.props.history.push('/login');
      } else {
        this.props.getRides();
      }
    });
  }

  checkOwnership = (ride, user) => {
    let ownership = '';
    if (ride.creator_id === user.user_id ) {
      return ownership = 'yours';
    }
    return ownership
  }

  render() {
    const { rides } = this.props;

    return (
      <Fragment>
        {this.props.isCreateRideModalOpen ? <CreateRideModal /> : null}
        {this.props.isRideDetailModalOpen ? <RideDetailModal /> : null}

        <SubMenu />

        <main className="wrapper dropdown">
          <div className="row" id="rides-loader">
            {
              rides ? rides.map(ride => {
                const user = JSON.parse(localStorage.getItem('rmwUser'));
                const ownership = this.checkOwnership(ride, user);
                return <RideCard key={ride.ride_id} ride={ride} ownership={ownership} />
              }) : (<div id="loading" className="center-text">
              <p>LOADING ...</p>
            </div>)
            }

          </div>
        </main>
      </Fragment>
    )
  }
}

Home.propTypes = {
  isCreateRideModalOpen: PropTypes.bool.isRequired,
  isRideDetailModalOpen: PropTypes.bool.isRequired,
  openModal: PropTypes.func.isRequired,
  rides: PropTypes.array.isRequired,
  getRides: PropTypes.func.isRequired,
  history: PropTypes.any,
  isAuthenticated: PropTypes.bool.isRequired,
  checkSession: PropTypes.func.isRequired
}


const mapStateToProps = (state) => ({
  isCreateRideModalOpen: state.modal.isCreateRideModalOpen,
  isRideDetailModalOpen: state.modal.isRideDetailModalOpen,
  rides: state.ride.rides,
  isAuthenticated: state.auth.isAuthenticated
})



export default connect(
  mapStateToProps,
  { openModal, getRides, checkSession }
)(Home);
