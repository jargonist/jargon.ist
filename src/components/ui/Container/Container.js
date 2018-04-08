// @flow

import React, { type Node } from 'react';
import cx from 'classnames';

import './Container.scss';

type Props = {
  children: Node,
  className?: string,
};

const Container = ({ children, className, ...otherProps }: Props) => (
  <div className={cx('c-container', className)} {...otherProps}>
    {children}
  </div>
);

Container.defaultProps = {
  className: '',
};

export default Container;
