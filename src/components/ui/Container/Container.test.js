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
