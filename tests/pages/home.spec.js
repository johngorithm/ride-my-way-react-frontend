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
  
    

    expect(wrapper.find(CreateRideModal).exists()).toBe(false);
    expect(wrapper.find(RideDetailModal).exists()).toBe(false);
  });


  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  // test('should set email on input change', () => {
  //   const event = {
  //     target: {
  //       name: 'email',
  //       value: 'johngorithm@gmail.com'
  //     }
  //   };
  //   const email = wrapper.find('#email-input');
  //   email.simulate('change', event);

  //   expect(wrapper.instance().state.email).toBe('johngorithm@gmail.com');
  // });

  // test('should submit form', () => {
  //   const event = {
  //     preventDefault: mockFn
  //   };
  //   wrapper.setState({
  //     email: 'johngorithm@gmail.com'
  //   });

  //   const form = wrapper.find('form');
  //   form.simulate('submit', event);

  //   expect(wrapper.instance().props.resetPassword).toHaveBeenCalledWith('johngorithm@gmail.com');
  //   expect(wrapper.instance().state.email).toBe('johngorithm@gmail.com');
  // });

  // test('should should spinner when loading', () => {
  //   wrapper.setProps({ isLoading: true });
  //   expect(wrapper.instance().props.isLoading).toBe(true);
  // });
  
});

// describe('ResetPasswords page', () => {
//   beforeEach(() => {
//     const props = {
//       isLoading: false,
//       resetVerifiedUserPassword: mockFn,
//       match: {
//         params: {
//           token: 'k4tkwertlk554kjlkh4235lkjl6ghjgf56fhf352'
//         }
//       },
//       history: {}
//     };
//     wrapper = shallow(<UpdatePassword {...props} />);
//   });

//   test('should contain the following elements', () => {
//     expect(wrapper.exists()).toBe(true);
//     expect(wrapper.find(InputField).exists()).toBe(true);
//     expect(wrapper.find(InputField)).toHaveLength(3);
//     expect(wrapper.find('form').exists()).toBe(true);
//     expect(wrapper.find('h4').exists()).toBe(true);
//     expect(wrapper.find('h4').text()).toEqual('RESET PASSWORD');

//     expect(wrapper.find('#spinner').exists()).toBe(true);
//   });

//   test('should call handleSubmit method on form submit', () => {
//     const event = {
//       preventDefault: mockFn
//     };
//     wrapper.instance().handleSubmit = mockFn;
//     wrapper.update();

//     wrapper.find('form').simulate('submit', event);
//     expect(wrapper.instance().handleSubmit).toHaveBeenCalled();
//   });

//   test('should match snapshot', () => {
//     expect(wrapper).toMatchSnapshot();
//   });

//   test('should set password on input change', () => {
//     const event = {
//       target: {
//         name: 'password',
//         value: 'PassWord'
//       }
//     };
//     const passwordInput = wrapper.find('[name="password"]');
//     passwordInput.simulate('change', event);

//     expect(wrapper.instance().state.userInfo.password).toEqual('PassWord');
//   });

//   test('should submit form', () => {
//     const event = {
//       preventDefault: mockFn
//     };

//     const userInfo = {
//       password: 'PassWord',
//       confirmPassword: 'PassWord'
//     };
//     wrapper.setState({
//       userInfo
//     });

//     const form = wrapper.find('form');
//     form.simulate('submit', event);

//     expect(wrapper.instance().props.resetVerifiedUserPassword).toHaveBeenCalledWith('PassWord', 'k4tkwertlk554kjlkh4235lkjl6ghjgf56fhf352', {});
//     expect(wrapper.instance().state.userInfo.password).toBe('PassWord');
//   });

//   test('should should spinner when loading', () => {
//     wrapper.setProps({ isLoading: true });
//     expect(wrapper.instance().props.isLoading).toBe(true);
//   });
// });