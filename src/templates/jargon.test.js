// @flow

import React from 'react';
import { shallow } from 'enzyme';

import { Jargon } from './jargon';

import JargonDetail from '../components/pages/JargonDetail';

const data = {
  markdownRemark: {
    html: '<p>hello world</p>',
    frontmatter: {
      title: 'hello',
    },
    fields: {
      tagList: [],
    },
  },
};

it('renders correctly', () => {
  const wrapper = shallow(<Jargon data={data} />);

  expect(wrapper).toMatchSnapshot();
});

it('renders title', () => {
  const wrapper = shallow(<Jargon data={data} />);

  expect(wrapper.find('title')).toHaveLength(1);
});

it('renders JargonDetail component', () => {
  const wrapper = shallow(<Jargon data={data} />);

  expect(wrapper.find(JargonDetail)).toHaveLength(1);
});
