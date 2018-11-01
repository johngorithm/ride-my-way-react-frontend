import React from 'react';
import { shallow } from 'enzyme';


import { CreateRideModal } from 'components/CreateRideModal';

const mockFn = jest.fn();


const props = {
  isCreateRideModalOpen: false,
  closeModal: mockFn,
  createRide: mockFn,
  validateRide: jest.fn(() => ({ isValidData: true })),
  succesMessage: ''
}
describe('ACCEPT OF REJECT RIDE TESTS', () => {
  const wrapper = shallow(<CreateRideModal {...props} />);

  test('should contain the following elements', () => {
    expect(wrapper.exists()).toBe(true);
  });

  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should call handleSubmit method on form submit', () => {
    const event = {
      preventDefault: mockFn
    };
    wrapper.instance().handleSubmit = mockFn;
    wrapper.update();

    wrapper.find('form').simulate('submit', event);
    expect(wrapper.instance().handleSubmit).toHaveBeenCalled();
  });

  test('should set password on input change', () => {
    const event = {
      target: {
        name: 'destination',
        value: 'Ojo'
      }
    };
    const destinationInput = wrapper.find('[name="destination"]');
    destinationInput.simulate('change', event);

    expect(wrapper.instance().state.rideInfo.destination).toEqual('Ojo');
  });

  test('should should freeze when loading', () => {
    wrapper.setProps({ isLoading: true });
    expect(wrapper.instance().props.isLoading).toBe(true);
  });

  test('should return succesMessage when available', () => {
    wrapper.setProps({ succesMessge: 'Ride Successfully created' });
    expect(wrapper.instance().props.succesMessge).toBe('Ride Successfully created');
  });

  test('should close modal when CLOSE button is clicked', () => {
    const event = {
      preventDefault: mockFn
    };
    wrapper.instance().closeModal = mockFn;
    wrapper.update();

    wrapper.find('#add-offer-modal [text="CLOSE"]').simulate('click', event);
    expect(wrapper.instance().closeModal).toHaveBeenCalled();
  });
})