// @flow

import React, { type Node } from 'react';
import cx from 'classnames';

import './Box.scss';

type Props = {
  children: Node,
  className?: string,
};

const Box = ({ children, className }: Props) => (
  <div className={cx('c-box', className)}>{children}</div>
);

Box.defaultProps = {
  className: '',
};

export default Box;
