// @flow

import React from 'react';
import cx from 'classnames';

import './Logo.scss';

type Props = {
  className?: string,
};

const Logo = ({ className }: Props) => (
  <span className={cx('c-logo', className)}>
    <strong>jargon</strong>ist
  </span>
);

Logo.defaultProps = {
  className: '',
};

export default Logo;
