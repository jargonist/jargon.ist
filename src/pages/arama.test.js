// @flow

import React from 'react';
import { shallow } from 'enzyme';
import { navigateTo } from 'gatsby-link';

import SearchPage from './arama';
import SearchResults from '../components/pages/SearchResults';

jest.mock('gatsby-link');

it('renders correctly', () => {
  global.jsdom.reconfigure({
    url: 'http://example.com?q=test',
  });

  const wrapper = shallow(<SearchPage />);

  expect(wrapper).toMatchSnapshot();
});

it('renders title', () => {
  global.jsdom.reconfigure({
    url: 'http://example.com?q=test',
  });

  const wrapper = shallow(<SearchPage />);

  expect(wrapper.find('title')).toHaveLength(1);
});

it('renders SearchResults component', () => {
  global.jsdom.reconfigure({
    url: 'http://example.com?q=test',
  });

  const wrapper = shallow(<SearchPage />);

  expect(wrapper.find(SearchResults)).toHaveLength(1);
});

it('navigates to home if query does not exist', () => {
  global.jsdom.reconfigure({
    url: 'http://example.com?q=',
  });

  shallow(<SearchPage />);

  expect(navigateTo).toHaveBeenCalledWith('/');
});
