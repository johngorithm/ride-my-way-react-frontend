import React from 'react';
import { shallow } from 'enzyme';

import SubMenu from 'components/SubMenu';


describe('SUBMENU COMPONENT TESTS', () => {
  const wrapper = shallow(<SubMenu />);

  test('renders without crashing', () => {
    expect(wrapper.find('Link')).toHaveLength(2);
  })

  test('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
})
