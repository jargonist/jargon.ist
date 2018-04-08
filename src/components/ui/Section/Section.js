// @flow

import React, { type Node } from 'react';
import cx from 'classnames';

import './Section.scss';

type Props = {
  children: Node,
  className?: string,
};

const Section = ({ children, className, ...otherProps }: Props) => (
  <section className={cx('c-section', className)} {...otherProps}>
    {children}
  </section>
);

Section.defaultProps = {
  className: '',
};

export default Section;
