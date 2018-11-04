import React from 'react';
import { shallow } from 'enzyme';

import NotFound from 'pages/NotFound';

describe('Not Found Page Tests', () => {
  test('renders without crashing', () => {
    const wrapper = shallow(<NotFound />);

    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find('h1').html()).toEqual('<h1>404 <br/> Page Not Found</h1>');
  })
})