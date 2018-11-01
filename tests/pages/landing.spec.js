/* global jest */

import React from 'react';
import { shallow } from 'enzyme';

import  Landing  from 'pages/Landing';


describe('Home Page Tests', () => {
  test('should contain the following elements', () => {
    const wrapper = shallow(<Landing />);
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find('h2').text()).toBe('Welcome');
    expect(wrapper.find('button').exists()).toBe(true)
    expect(wrapper.find('button').text()).toBe('GET STARTED')
    expect(wrapper.find('p').exists()).toBe(true)
  });


  test('should match snapshot', () => {
    const wrapper = shallow(<Landing />);
    expect(wrapper).toMatchSnapshot();
  });

});