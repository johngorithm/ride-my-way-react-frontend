import React from 'react';
import { shallow } from 'enzyme';
import { Login } from 'pages/Login';



const props = {
  loginUser: jest.fn(() => Promise.resolve()),
  history: {}
}
const mockFn = jest.fn();
describe('USER LOGIN TEST', () => {
  const wrapper = shallow(<Login {...props} />);
  
  test('renders successfully', () => {
    expect(wrapper.exists()).toBe(true);
  });

  test('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should call handleSubmit method on form submit', () => {
    const event = {
      preventDefault: mockFn
    };
    wrapper.setState({
      userInfo: {
        password: 'Pass',
        username: ''
      }
    })
    wrapper.instance().handleSubmit = mockFn;
    wrapper.update();

    wrapper.find('form').simulate('submit', event);
    expect(wrapper.instance().handleSubmit).toHaveBeenCalled();
  });

  test('submits when valid data is provided', () => {
    const wrapper = shallow(<Login {...props} />);

    const event = {
      preventDefault: mockFn
    };

    const userInfo = { 
      username: 'johngorithm',
      password: 'Passwordfgds'
    }

    wrapper.setState({
      userInfo: userInfo
    })

    // wrapper.instance().handleSubmit = mockFn;
    // wrapper.update();

    // wrapper.find('form').simulate('submit', event);
    wrapper.instance().handleSubmit(event)
    expect(wrapper.instance().state.errors).toEqual({});
    expect(wrapper.instance().state.userInfo).toEqual(userInfo);
    expect(wrapper.instance().props.loginUser).toHaveBeenCalledWith(userInfo);
  });

  test('should set input change', () => {
    const event = {
      target: {
        name: 'username',
        value: 'johngorithm'
      }
    };
    const usernameInput = wrapper.find('[name="username"]');
    usernameInput.simulate('change', event);

    expect(wrapper.instance().state.userInfo.username).toEqual('johngorithm');
  });
});