// @flow

import React from 'react';
import { shallow } from 'enzyme';

import { Jargons } from './jargons';

import JargonList from '../components/pages/JargonList';

it('renders correctly', () => {
  const wrapper = shallow(<Jargons pathContext={{ jargonList: [] }} />);

  expect(wrapper).toMatchSnapshot();
});

it('renders title', () => {
  const wrapper = shallow(<Jargons pathContext={{ jargonList: [] }} />);

  expect(wrapper.find('title')).toHaveLength(1);
});

it('renders JargonList component', () => {
  const wrapper = shallow(<Jargons pathContext={{ jargonList: [] }} />);

  expect(wrapper.find(JargonList)).toHaveLength(1);
});
