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

it('passes classname to wrapper', () => {
  const wrapper = shallow(<Button className="example-classname">Example Button</Button>);

  expect(wrapper.find('.example-classname').exists()).toEqual(true);
});
