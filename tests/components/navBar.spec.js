import React from 'react';
import { shallow } from 'enzyme';


import { NavBar } from 'components/NavBar';

const mockFn = jest.fn();

const props = {
  isAuthenticated: false,
  openModal: mockFn,
  logOut: jest.fn(() => Promise.resolve()),
  history: { push: jest.fn() },
  handleLogOut: mockFn,
  user: {
    user_id: 1,
    username: 'johngorithm',
    firstname: 'John'
  }
}
describe('NAVBAR TEST', () => {
  const wrapper = shallow(<NavBar {...props} />);

  test('should render without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });

  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('shows mobile nav', () => {
    wrapper.setState({
      isMobileNavVisible: true
    })
    expect(wrapper.find('[to="/login"]').exists()).toBe(true);
  });

  test('shows logged in nav', () => {
    wrapper.setProps({
      isAuthenticated: true
    })
    expect(wrapper.find('#offer-ride-btn').exists()).toBe(true);
  });

  test('shows dropdown user nav', () => {
    wrapper.setProps({
      isAuthenticated: true
    })
    wrapper.setState({
      isDropDownVisible: true
    })
    expect(wrapper.find('.droppy').exists()).toBe(true);
  });
  
  test('logs out a user', () => {
    wrapper.setProps({
      isAuthenticated: true
    })
    wrapper.setState({
      isDropDownVisible: true
    })
    expect(wrapper.find('#logout').exists()).toBe(true);
    const event = {
      preventDefault: mockFn
    };
    wrapper.instance().handleLogOut = mockFn;
    wrapper.update();

    wrapper.find('#logout').simulate('click', event);
    expect(wrapper.instance().props.logOut).toHaveBeenCalled()
  });

  test('opens create-ride-modal', () => {
    wrapper.setProps({
      isAuthenticated: true
    })

    expect(wrapper.find('#open-create-ride-modal').exists()).toBe(true);
    const event = {
      preventDefault: mockFn
    };

    wrapper.find('#open-create-ride-modal').simulate('click', event);
    expect(wrapper.instance().props.openModal).toHaveBeenCalledWith('CreateRideModal');
  });

  test('toggles dropdown nav', () => {
    wrapper.setProps({
      isAuthenticated: true
    })
    wrapper.setState({
      isDropDownVisible: true
    })
    expect(wrapper.find('#dropdown-toggle').exists()).toBe(true);
    const event = {
      preventDefault: mockFn
    };

    wrapper.find('#dropdown-toggle').simulate('click', event);
    expect(wrapper.instance().state.isDropDownVisible).toBe(false);
  });

  test('toggles mobile dropdown nav', () => {
    wrapper.setProps({
      isAuthenticated: true
    })
    wrapper.setState({
      isMobileNavVisible: true
    })
    expect(wrapper.find('#toggle-mobile-nav').exists()).toBe(true);
    const event = {
      preventDefault: mockFn
    };

    wrapper.find('#toggle-mobile-nav').simulate('click', event);
    expect(wrapper.instance().state.isMobileNavVisible).toBe(false);
  });

  test('switches between navs', () => {
    wrapper.setProps({
      isAuthenticated: false
    })

    // expect(wrapper.find('#toggle-mobile-nav').exists()).toBe(true);
    const event = {
      preventDefault: mockFn
    };

    wrapper.instance().changeLink = mockFn;
    wrapper.update();

    wrapper.find('[to="/login"]').simulate('click', event);
    expect(wrapper.instance().changeLink).toHaveBeenCalled();
  });
})