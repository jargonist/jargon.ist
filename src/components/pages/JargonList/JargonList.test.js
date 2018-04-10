// @flow

import React from 'react';
import { shallow } from 'enzyme';
import Link from 'gatsby-link';

import jargonsFixture from '../../../../__fixtures__/jargons';

import JargonList from './JargonList';

it('renders correctly', () => {
  const wrapper = shallow(<JargonList jargons={jargonsFixture} />);

  expect(wrapper).toMatchSnapshot();
});

it('renders link to details', () => {
  const wrapper = shallow(<JargonList jargons={jargonsFixture} />);

  jargonsFixture.forEach(jargon => {
    expect(wrapper.find(Link).find(`[to='/${jargon.slug}']`)).toHaveLength(1);
  });
});
