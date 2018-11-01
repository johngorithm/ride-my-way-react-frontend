import React from 'react';
import { shallow } from 'enzyme';

import Button from 'components/Atom/Button';

const props = {
  text: 'SAVE',
  classes: 'button button primary'
}

describe('Button Tests', () => {
  test('it renders successfully', () => {
    const wrapper = shallow(<Button {...props} />);

    expect(wrapper.exists()).toBe(true);
  })

  test('it matches snapshot', () => {
    const wrapper = shallow(<Button {...props} />);

    expect(wrapper).toMatchSnapshot();
  })
})