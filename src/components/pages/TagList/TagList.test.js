// @flow

import React from 'react';
import { shallow } from 'enzyme';
import Link from 'gatsby-link';

import tagsFixture from '../../../../__fixtures__/tags';

import TagList from './TagList';

it('renders correctly', () => {
  const wrapper = shallow(<TagList tags={tagsFixture} />);

  expect(wrapper).toMatchSnapshot();
});

it('renders link to tag details', () => {
  const wrapper = shallow(<TagList tags={tagsFixture} />);

  tagsFixture.forEach(tag => {
    expect(wrapper.find(Link).find(`[to='/k/${tag.slug}']`)).toHaveLength(1);
  });
});
