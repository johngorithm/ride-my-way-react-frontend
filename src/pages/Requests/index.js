import React from 'react';
import SubMenu from 'components/SubMenu';
import AcceptOrRejectModal from 'components/AccptOrRejectModal'
import CreateRideModal from 'components/CreateRideModal';


const Requests = () => {
  return (
    <div id="requests-body">
      <CreateRideModal />
      <AcceptOrRejectModal />
      <SubMenu />
      <main className="dropdown center-text" id="request-loader">
        <p id="loading">LOADING ...</p>
      </main>
    </div>
  );
};

export default Requests;
