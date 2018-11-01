import React from 'react';
import { shallow } from 'enzyme';


import { RideCard } from 'components/RideCard';

const mockFn = jest.fn();


const props = {
  openModal: mockFn,
  addRide: mockFn,
  ownership: '',
  ride: {
    destination: 'Ojo',
    date: '2018-10-20',
    time: '12:00:00',
    takeOffVenue: 'ET',
    capacity: 4,
    space_occupied: 2
}
}
describe('ACCEPT OF REJECT RIDE TESTS', () => {
  const wrapper = shallow(<RideCard {...props} />);

  test('should contain the following elements', () => {
    expect(wrapper.exists()).toBe(true);
  });

  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should close modal when CLOSE button is clicked', () => {
    wrapper.instance().handleRideView = mockFn;
    wrapper.update();

    wrapper.find('.tile-footer [text="VIEW"]').simulate('click');
    expect(wrapper.instance().handleRideView).toHaveBeenCalled();
  });
})