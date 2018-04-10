// @flow

import React from 'react';
import { shallow } from 'enzyme';

import LinkButton from './LinkButton';

it('renders correctly default button', () => {
  const wrapper = shallow(<LinkButton to="/">Example button</LinkButton>);

  expect(wrapper).toMatchSnapshot();
});

it('renders correctly primary button', () => {
  const wrapper = shallow(
    <LinkButton to="/" primary>
      Example button
    </LinkButton>,
  );

  expect(wrapper).toMatchSnapshot();
});
