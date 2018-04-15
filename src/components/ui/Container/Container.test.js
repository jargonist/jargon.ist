// @flow

import React from 'react';
import { shallow } from 'enzyme';

import Container from './Container';

it('renders correctly', () => {
  const wrapper = shallow(
    <Container>
      <div>Example content</div>
    </Container>,
  );

  expect(wrapper).toMatchSnapshot();
});

it('passes classname to wrapper', () => {
  const wrapper = shallow(
    <Container className="example-classname">
      <div>Example content</div>
    </Container>,
  );

  expect(wrapper.find('.example-classname').exists()).toEqual(true);
});
