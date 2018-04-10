// @flow

import React from 'react';
import { shallow } from 'enzyme';
import { InstantSearch } from 'react-instantsearch/dom';

import AutoComplete from './AutoComplete';
import Search from './Search';

it('renders correctly', () => {
  const wrapper = shallow(<Search />);

  expect(wrapper).toMatchSnapshot();
});

it('renders Autocomple with InstantSearch', () => {
  const wrapper = shallow(<Search />);

  expect(wrapper.find(AutoComplete)).toHaveLength(1);
  expect(wrapper.find(InstantSearch)).toHaveLength(1);
});
