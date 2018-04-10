// @flow

import React from 'react';
import { shallow } from 'enzyme';

import { Tags } from './tags';

import TagList from '../components/pages/TagList';

it('renders correctly', () => {
  const wrapper = shallow(<Tags pathContext={{ tagList: [] }} />);

  expect(wrapper).toMatchSnapshot();
});

it('renders title', () => {
  const wrapper = shallow(<Tags pathContext={{ tagList: [] }} />);

  expect(wrapper.find('title')).toHaveLength(1);
});

it('renders TagList component', () => {
  const wrapper = shallow(<Tags pathContext={{ tagList: [] }} />);

  expect(wrapper.find(TagList)).toHaveLength(1);
});
