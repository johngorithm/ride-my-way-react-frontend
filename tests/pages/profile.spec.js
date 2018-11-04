import React from 'react';
import { shallow } from 'enzyme';
import {Profile} from 'pages/Profile';

import CreateRideModal from 'components/CreateRideModal';
import RideDetailModal from 'components/RideDetailModal';


const props = {
  isCreateRideModalOpen: true,
  isRideDetailModalOpen: true
}
describe('USER PROFILE TEST', () => {
  const wrapper = shallow(<Profile {...props} />);
  
  test('renders successfully', () => {
    expect(wrapper.exists()).toBe(true);
  });

  test('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('does not rendr modals when not require', () => {
    wrapper.setProps({
      isCreateRideModalOpen: false,
      isRideDetailModalOpen: false
    });

    expect(wrapper.find(<CreateRideModal />).exists()).toBe(false);
    expect(wrapper.find(<RideDetailModal />).exists()).toBe(false);
  })
});