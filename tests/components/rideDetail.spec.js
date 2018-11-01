import React from 'react';
import { shallow } from 'enzyme';


import { RideDetailModal } from 'components/RideDetailModal';

const mockFn = jest.fn();


const props = {
  closeModal: mockFn,
  ride: {
    destination: 'Ojo',
    date: '2018-10-20',
    time: '12:00:00',
    takeOffVenue: 'ET',
    capacity: '4'
}
}
describe('ACCEPT OF REJECT RIDE TESTS', () => {
  const wrapper = shallow(<RideDetailModal {...props} />);

  test('should contain the following elements', () => {
    expect(wrapper.exists()).toBe(true);
  });

  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should close modal when CLOSE button is clicked', () => {
    wrapper.find('#detail-modal [text="CLOSE"]').simulate('click');
    expect(wrapper.instance().props.closeModal).toHaveBeenCalled();
  });
})