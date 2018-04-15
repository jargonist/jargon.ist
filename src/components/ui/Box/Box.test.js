// @flow

import React from 'react';
import { shallow } from 'enzyme';

import Box from './Box';

it('renders correctly', () => {
  const wrapper = shallow(
    <Box>
      <div>Example content</div>
    </Box>,
  );

  expect(wrapper).toMatchSnapshot();
});

it('passes classname to wrapper', () => {
  const wrapper = shallow(
    <Box className="example-classname">
      <div>Example content</div>
    </Box>,
  );

  expect(wrapper.find('.example-classname').exists()).toEqual(true);
});
