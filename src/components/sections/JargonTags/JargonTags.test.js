// @flow

import React from 'react';
import { shallow } from 'enzyme';
import Link from 'gatsby-link';

import tagsFixture from '../../../../__fixtures__/tags';

import JargonTags from './JargonTags';

it('renders correctly', () => {
  const wrapper = shallow(<JargonTags tags={tagsFixture} />);

  expect(wrapper).toMatchSnapshot();
});

it('renders link to tags', () => {
  const wrapper = shallow(<JargonTags tags={tagsFixture} />);

  tagsFixture.forEach(tag => {
    expect(wrapper.find(Link).find(`[to='/k/${tag.slug}']`)).toHaveLength(1);
  });
});

it('slices the tags if exists more than max', () => {
  const tags = [
    { title: 'tag1', slug: 'tag1' },
    { title: 'tag2', slug: 'tag2' },
    { title: 'tag3', slug: 'tag3' },
    { title: 'tag4', slug: 'tag4' },
    { title: 'tag5', slug: 'tag5' },
    { title: 'tag6', slug: 'tag6' },
    { title: 'tag7', slug: 'tag7' },
    { title: 'tag8', slug: 'tag8' },
  ];

  const wrapper = shallow(<JargonTags tags={tags} max={3} />);

  expect(wrapper.text()).toContain('5 tane daha');
});
