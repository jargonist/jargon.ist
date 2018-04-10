// @flow

import React from 'react';
import { shallow } from 'enzyme';

import Logo from '../Logo';

import Footer from './Footer';

it('renders correctly', () => {
  const wrapper = shallow(<Footer />);

  expect(wrapper).toMatchSnapshot();
});

it('renders logo', () => {
  const wrapper = shallow(<Footer />);

  expect(wrapper.find(Logo)).toHaveLength(1);
});

it('renders angolia logo', () => {
  const wrapper = shallow(<Footer />);

  expect(wrapper.find('img').prop('src')).toContain('algolia');
});
