// @flow

import React from 'react';
import { shallow } from 'enzyme';

import Features from './Features';

it('renders correctly', () => {
  const wrapper = shallow(<Features />);

  expect(wrapper).toMatchSnapshot();
});
