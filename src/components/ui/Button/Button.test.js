// @flow

import React from 'react';
import { shallow } from 'enzyme';

import Button from './Button';

it('renders correctly default button', () => {
  const wrapper = shallow(<Button>Example button</Button>);

  expect(wrapper).toMatchSnapshot();
});

it('renders correctly primary button', () => {
  const wrapper = shallow(<Button primary>Example button</Button>);

  expect(wrapper).toMatchSnapshot();
});
