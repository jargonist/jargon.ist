// @flow

import React from 'react';
import { shallow } from 'enzyme';

import Menu from './Menu';

it('renders correctly', () => {
  const wrapper = shallow(<Menu />);

  expect(wrapper).toMatchSnapshot();
});
