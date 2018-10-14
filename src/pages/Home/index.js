import React, { Fragment } from 'react';
import SubMenu from 'components/SubMenu';
import CreateRideModal from 'components/CreateRideModal';
import RideDetailModal from 'components/RideDetailModal';

import './home.css';

const Home = () => {
  return (
    <Fragment>
      <CreateRideModal />
      <RideDetailModal />
      <SubMenu />

      <main className="wrapper dropdown">
        <div className="row" id="rides-loader">
          <div id="loading" className="center-text">
            Loading ...
          </div>
        </div>
      </main>
    </Fragment>
  );
};

export default Home;
