// @flow

import React from 'react';
import { shallow } from 'enzyme';
import Link from 'gatsby-link';

import jargonsFixture from '../../../../__fixtures__/jargons';

import JargonDetail from './JargonDetail';

it('renders correctly', () => {
  const wrapper = shallow(<JargonDetail jargon={jargonsFixture[0]} />);

  expect(wrapper).toMatchSnapshot();
});

it('renders link to tags', () => {
  const wrapper = shallow(<JargonDetail jargon={jargonsFixture[0]} />);

  const { tags } = jargonsFixture[0];

  tags.forEach(tag => {
    expect(wrapper.find(Link).find(`[to='/k/${tag.slug}']`)).toHaveLength(1);
  });
});
