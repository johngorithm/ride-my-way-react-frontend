import React from 'react';
import { shallow } from 'enzyme';


import { AcceptOrRejectModal } from 'components/AccptOrRejectModal';



describe('ACCEPT OF REJECT RIDE TESTS', () => {
  const wrapper = shallow(<AcceptOrRejectModal />);

  test('should contain the following elements', () => {
    expect(wrapper.exists()).toBe(true);
  });

  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
})