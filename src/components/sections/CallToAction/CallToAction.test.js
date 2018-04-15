// @flow

import React from 'react';
import { shallow } from 'enzyme';

import CallToAction from './CallToAction';

it('renders correctly', () => {
  const wrapper = shallow(<CallToAction />);

  expect(wrapper).toMatchSnapshot();
});

it('contains a button to contribution document', () => {
  const wrapper = shallow(<CallToAction />);

  expect(wrapper.find('a').prop('href')).toContain('CONTRIBUTING.md');
});
