// @flow

import React from 'react';
import { shallow } from 'enzyme';

import ExampleJargon from './ExampleJargon';

it('renders correctly', () => {
  const wrapper = shallow(<ExampleJargon />);

  expect(wrapper).toMatchSnapshot();
});
