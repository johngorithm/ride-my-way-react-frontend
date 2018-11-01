import React from 'react';
import { shallow } from 'enzyme';

import InputGroup from 'components/Atom/InputGroup';

const props = {
  lable: 'Password',
  error: 'this field is required',
  name: 'password',
  type: 'text',
  value: 'fd89ya8sdf',
  onChange: jest.fn()
}

describe('Button Tests', () => {
  test('it renders successfully', () => {
    const wrapper = shallow(<InputGroup {...props} />);
    expect(wrapper.exists()).toBe(true);
  })

  test('it matches snapshot', () => {
    const wrapper = shallow(<InputGroup {...props}/>);
    expect(wrapper).toMatchSnapshot();
  })

  test('it does not render error message when error is undefined', () => {
    const attr = { lable: 'Name', error: undefined }
    const wrapper = shallow(<InputGroup { ...attr } />);
    expect(wrapper).toMatchSnapshot();
  })
})