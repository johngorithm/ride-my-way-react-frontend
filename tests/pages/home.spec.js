/* global jest */

import React from 'react';
import { shallow } from 'enzyme';

import { Home } from 'pages/Home';
import CreateRideModal from 'components/CreateRideModal';
import RideDetailModal from 'components/RideDetailModal';

let wrapper;
const mockFn = jest.fn();
describe('Home Page Tests', () => {
  beforeEach(() => {
    const props = {
      isCreateRideModalOpen: false,
      isRideDetailModalOpen: false,
      openModal: mockFn,
      rides: [
      ],
      getRides: mockFn,
      history: {},
      isAuthenticated: false,
      checkSession: mockFn
    };

    wrapper = shallow(<Home {...props} />);
    wrapper.instance().checkOwnership = jest.fn(() => 'yours')
    wrapper.update();
  });

  test('should contain the following elements', () => {
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find('main').exists()).toBe(true);
    expect(wrapper.find('#rides-loader').exists()).toBe(true);
    expect(wrapper.find('p').exists()).toBe(true);
  
    

    expect(wrapper.find(<CreateRideModal />).exists()).toBe(false);
    expect(wrapper.find(<RideDetailModal />).exists()).toBe(false);
  });


  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

});