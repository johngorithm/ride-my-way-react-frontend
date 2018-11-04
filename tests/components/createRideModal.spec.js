import React from 'react';
import { shallow } from 'enzyme';


import { CreateRideModal } from 'components/CreateRideModal';


const mockFn = jest.fn();


const props = {
  isCreateRideModalOpen: false,
  closeModal: mockFn,
  createRide: jest.fn(() => Promise.resolve()),
  validateRide: jest.fn(() => ({ isValidData: true })),
  succesMessage: ''
}

const getDate = () => {
  const now = new Date();

  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const day = now.getDate();
  let currentDate = '';

  if (month < 10 && day < 10) {
    currentDate = `${year}-0${month}-0${day}`;
  } else if (month < 10 && day > 9) {
    currentDate = `${year}-0${month}-${day}`;
  } else if (month > 9 && day < 10) {
    currentDate = `${year}-${month}-0${day}`;
  } else {
    currentDate = `${year}-${month}-${day}`;
  }

  return currentDate;
}


describe('CREATE RIDE MODAL', () => {
  const wrapper = shallow(<CreateRideModal {...props} />);

  test('renders without crashing', () => {
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

  test('submits when valid data is provided', () => {
    const wrapper = shallow(<CreateRideModal {...props} />);

    const event = {
      preventDefault: mockFn
    };

    const rideInfo = {
      destination: 'Ojo',
      date: getDate(),
      time: '12:00:00',
      takeOffVenue: 'Oju elegba',
      capacity: '4'
    }

    wrapper.setState({
      rideInfo: rideInfo
    })

    // wrapper.instance().handleSubmit = mockFn;
    // wrapper.update();

    // wrapper.find('form').simulate('submit', event);
    wrapper.instance().handleSubmit(event)
    expect(wrapper.instance().state.rideInfo).toEqual(rideInfo);
    expect(wrapper.instance().props.createRide).toHaveBeenCalledWith(rideInfo);
  });
})