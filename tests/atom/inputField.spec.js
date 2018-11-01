import React from 'react';
import { shallow } from 'enzyme';

import InputField from 'components/Atom/InputField';

const props = {
  name: 'password',
  type: 'text',
  value: 'fd89ya8sdf',
  onChange: jest.fn(),
  label: 'Password'
}

describe('Button Tests', () => {
  test('it renders successfully', () => {
    const wrapper = shallow(<InputField {...props} />);
    expect(wrapper.exists()).toBe(true);
  })

  test('it matches snapshot', () => {
    const wrapper = shallow(<InputField {...props}/>);

    expect(wrapper).toMatchSnapshot();
  })
})