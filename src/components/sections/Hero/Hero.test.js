// @flow

import React from 'react';
import { shallow } from 'enzyme';

import Hero from './Hero';

it('renders correctly', () => {
  const wrapper = shallow(<Hero />);

  expect(wrapper).toMatchSnapshot();
});
