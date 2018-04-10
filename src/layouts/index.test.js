// @flow

import React from 'react';
import { shallow } from 'enzyme';
import Helmet from 'react-helmet';

import Layout from './';

import Header from '../components/sections/Header';
import Footer from '../components/sections/Footer';

it('renders correctly', () => {
  const wrapper = shallow(<Layout>{() => <h1>Site</h1>}</Layout>);

  expect(wrapper).toMatchSnapshot();
});

it('renders Header', () => {
  const wrapper = shallow(<Layout>{() => <h1>Site</h1>}</Layout>);

  expect(wrapper.find(Header)).toHaveLength(1);
});

it('renders Footer', () => {
  const wrapper = shallow(<Layout>{() => <h1>Site</h1>}</Layout>);

  expect(wrapper.find(Footer)).toHaveLength(1);
});

it('renders Helmet with titleTemplate', () => {
  const wrapper = shallow(<Layout>{() => <h1>Site</h1>}</Layout>);

  expect(wrapper.find(Helmet).prop('titleTemplate')).toContain('%s');
});
