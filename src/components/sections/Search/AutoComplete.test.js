// @flow

import React from 'react';
import { shallow } from 'enzyme';
import { navigateTo } from 'gatsby-link';

import { AutoCompleteWrapper } from './AutoComplete';

jest.mock('gatsby-link');

beforeEach(() => {
  navigateTo.mockClear();
});

it('renders correctly', () => {
  const wrapper = shallow(<AutoCompleteWrapper hits={[]} currentRefinement="" refine={() => {}} />);

  expect(wrapper).toMatchSnapshot();
});

it('renders sections title if has some hits', () => {
  const wrapper = shallow(<AutoCompleteWrapper hits={[]} currentRefinement="" refine={() => {}} />);

  expect(wrapper.instance().renderSectionTitle({ hits: [] })).toBeFalsy();
  expect(wrapper.instance().renderSectionTitle({ hits: [{}] })).toBeTruthy();
});

it('adds index to hits for suggestion sections', () => {
  const wrapper = shallow(<AutoCompleteWrapper hits={[]} currentRefinement="" refine={() => {}} />);

  const section = {
    index: 'index1',
    hits: [{ title: 'title 1', slug: 'title-1' }],
  };

  const sectionSuggestions = [
    {
      title: 'title 1',
      slug: 'title-1',
      index: 'index1',
    },
  ];

  expect(wrapper.instance().getSectionSuggestions(section)).toEqual(sectionSuggestions);
});

it('navigates to related detail when click to result', () => {
  const wrapper = shallow(<AutoCompleteWrapper hits={[]} currentRefinement="" refine={() => {}} />);

  wrapper.instance().handleChange(undefined, { newValue: 'hello', method: 'click' });
  expect(navigateTo).toHaveBeenCalled();
});

it('does nothing on handleChange if event is not click or enter', () => {
  const wrapper = shallow(<AutoCompleteWrapper hits={[]} currentRefinement="" refine={() => {}} />);

  wrapper.instance().handleChange(undefined, { newValue: 'hello', method: 'type' });
  expect(navigateTo).not.toHaveBeenCalled();
});

it('creates proper links for details', () => {
  const wrapper = shallow(<AutoCompleteWrapper hits={[]} currentRefinement="" refine={() => {}} />);

  const jargonHit = {
    index: 'jargons',
    title: 'jargon 1',
    slug: 'jargon-1',
  };

  const tagHit = {
    index: 'tags',
    title: 'tag 1',
    slug: 'tag-1',
  };

  expect(wrapper.instance().getSuggestionValue(jargonHit)).toEqual(`/${jargonHit.slug}`);
  expect(wrapper.instance().getSuggestionValue(tagHit)).toEqual(`/k/${tagHit.slug}`);
});

it('renders title as suggestion item', () => {
  const wrapper = shallow(<AutoCompleteWrapper hits={[]} currentRefinement="" refine={() => {}} />);

  const hit = {
    index: 'tags',
    title: 'tag 1',
    slug: 'tag-1',
  };

  expect(wrapper.instance().renderSuggestion(hit)).toEqual(hit.title);
});
