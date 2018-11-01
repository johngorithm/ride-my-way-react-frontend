import React from 'react';
import { shallow } from 'enzyme';


import { CreateRideModal } from 'components/CreateRideModal';



describe('ACCEPT OF REJECT RIDE TESTS', () => {
  const wrapper = shallow(<CreateRideModal />);

  test('should contain the following elements', () => {
    expect(wrapper.exists()).toBe(true);
  });

  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
})