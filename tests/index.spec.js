import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../src/App';

/**
 *  CONFIGURES ENZYME TO BE COMPACTIBLE WITH VERSION 16 OF REACT
 *  WHICH IS WHAT WE ARE USING
 */
Enzyme.configure({ adapter: new Adapter() });

describe('App TESTS', () => {
  test('App renders', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.exists()).toBe(true);
  });
});
