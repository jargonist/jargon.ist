// @flow

import React from 'react';
import { shallow } from 'enzyme';

import { Tag } from './tag';

import TagDetail from '../components/pages/TagDetail';

const data = {
  allMarkdownRemark: {
    totalCount: 0,
    edges: [
      {
        node: {
          fields: {
            slug: 'hello',
          },
          frontmatter: { title: 'hello' },
        },
      },
    ],
  },
};

it('renders correctly', () => {
  const wrapper = shallow(<Tag data={data} pathContext={{ tag: 'tag1' }} />);

  expect(wrapper).toMatchSnapshot();
});

it('renders title', () => {
  const wrapper = shallow(<Tag data={data} pathContext={{ tag: 'tag1' }} />);

  expect(wrapper.find('title')).toHaveLength(1);
});

it('renders TagDetail component', () => {
  const wrapper = shallow(<Tag data={data} pathContext={{ tag: 'tag1' }} />);

  expect(wrapper.find(TagDetail)).toHaveLength(1);
});
