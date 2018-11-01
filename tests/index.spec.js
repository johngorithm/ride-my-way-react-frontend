import React from 'react';
import { shallow } from 'enzyme';
import App from '../src/App';

/**
 *  CONFIGURES ENZYME TO BE COMPACTIBLE WITH VERSION 16 OF REACT
 *  WHICH IS WHAT WE ARE USING
 */

describe('App TESTS', () => {
  test('App renders', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.exists()).toBe(true);
  });
});
