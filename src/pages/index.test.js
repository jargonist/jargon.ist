// @flow

import React from 'react';
import { shallow } from 'enzyme';

import Home from './';

it('renders correctly', () => {
  const wrapper = shallow(<Home />);

  expect(wrapper).toMatchSnapshot();
});
