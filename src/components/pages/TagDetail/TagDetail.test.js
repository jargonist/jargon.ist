// @flow

import React from 'react';
import { shallow } from 'enzyme';
import Link from 'gatsby-link';

import jargonsFixture from '../../../../__fixtures__/jargons';

import TagDetail from './TagDetail';

it('renders correctly', () => {
  const wrapper = shallow(<TagDetail tag="tag1" totalCount={3} jargons={jargonsFixture} />);

  expect(wrapper).toMatchSnapshot();
});

it('renders link to jargon details', () => {
  const wrapper = shallow(<TagDetail tag="tag1" totalCount={3} jargons={jargonsFixture} />);

  jargonsFixture.forEach(jargon => {
    expect(wrapper.find(Link).find(`[to='/${jargon.slug}']`)).toHaveLength(1);
  });
});
