import React from 'react';
import { shallow, mount } from 'enzyme';

import App from '../App';

describe('App component', () => {
  test('match snapshot correctly', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });

  test('match snapshot correctly', () => {
    const wrapper = mount(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});
