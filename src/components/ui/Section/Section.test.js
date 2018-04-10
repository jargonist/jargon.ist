// @flow

import React from 'react';
import { shallow } from 'enzyme';

import Section from './Section';

it('renders correctly', () => {
  const wrapper = shallow(
    <Section>
      <div>Example content</div>
    </Section>,
  );

  expect(wrapper).toMatchSnapshot();
});
