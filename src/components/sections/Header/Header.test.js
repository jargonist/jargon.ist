// @flow

import React from 'react';
import { shallow } from 'enzyme';

import Header from './Header';

it('renders correctly', () => {
  const wrapper = shallow(<Header />);

  expect(wrapper).toMatchSnapshot();
});
