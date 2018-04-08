// @flow

import React, { type Node } from 'react';
import cx from 'classnames';

import './Button.scss';

type Props = {
  children: Node,
  primary?: boolean,
  className?: string,
};

const Button = ({ primary, className, children, ...otherProps }: Props) => (
  <button className={cx('c-button', { 'c-button--primary': primary }, className)} {...otherProps}>
    {children}
  </button>
);

Button.defaultProps = {
  primary: false,
  className: '',
};

export default Button;
