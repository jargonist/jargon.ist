// @flow

import React from 'react';
import { shallow, mount } from 'enzyme';
import { navigateTo } from 'gatsby-link';

import jargonsFixture from '../../../../__fixtures__/jargons';
import tagsFixture from '../../../../__fixtures__/tags';

import { SearchResultsWrapper } from './SearchResults';

jest.mock('gatsby-link');

beforeEach(() => {
  navigateTo.mockClear();
});

it('renders correctly', () => {
  const allSearchResults = {
    jargons: {
      query: 'p',
      hits: jargonsFixture,
    },
    tags: {
      query: 'p',
      hits: tagsFixture,
    },
  };

  const wrapper = shallow(<SearchResultsWrapper allSearchResults={allSearchResults} />);

  expect(wrapper).toMatchSnapshot();
});

it('navigates to related jargon if it is the only result', () => {
  const allSearchResults = {
    jargons: {
      query: 'Example Jargon 1',
      hits: [
        {
          html: '<p>Hello world</p>',
          title: 'Example Jargon 1',
          slug: 'example-jargon-1',
          tags: [{ title: 'tag1', slug: 'tag1' }, { title: 'tag2', slug: 'tag2' }],
          sameWith: ['sameWith1', 'sameWith2'],
        },
      ],
    },
    tags: {
      query: 'Example Jargon 1',
      hits: [],
    },
  };

  mount(<SearchResultsWrapper allSearchResults={allSearchResults} />);

  expect(navigateTo).toHaveBeenCalledWith('/example-jargon-1');
});

it('navigates to related tag if it is the only result', () => {
  const allSearchResults = {
    jargons: {
      query: 'Tag 1',
      hits: [],
    },
    tags: {
      query: 'Tag 1',
      hits: [
        {
          title: 'tag 1',
          slug: 'tag-1',
        },
      ],
    },
  };

  mount(<SearchResultsWrapper allSearchResults={allSearchResults} />);

  expect(navigateTo).toHaveBeenCalledWith('/k/tag-1');
});
