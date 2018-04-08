// @flow

import React, { type Node } from 'react';
import Link from 'gatsby-link';
import cx from 'classnames';

import '../Button/Button.scss';

type Props = {
  children: Node,
  primary?: boolean,
  className?: string,
  to: string,
};

const Button = ({ primary, className, children, ...otherProps }: Props) => (
  <Link className={cx('c-button', { 'c-button--primary': primary }, className)} {...otherProps}>
    {children}
  </Link>
);

Button.defaultProps = {
  primary: false,
  className: '',
};

export default Button;
