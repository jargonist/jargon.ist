// @flow

import React from 'react';
import { shallow } from 'enzyme';

import jargonsFixture from '../../../../__fixtures__/jargons';

import JargonTags from '../../sections/JargonTags';

import JargonDetail from './JargonDetail';

it('renders correctly', () => {
  const wrapper = shallow(<JargonDetail jargon={jargonsFixture[0]} />);

  expect(wrapper).toMatchSnapshot();
});

it('renders link to tags', () => {
  const wrapper = shallow(<JargonDetail jargon={jargonsFixture[0]} />);

  expect(wrapper.find(JargonTags)).toHaveLength(1);
});
