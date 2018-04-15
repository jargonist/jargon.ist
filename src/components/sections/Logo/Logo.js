// @flow

import React from 'react';
import cx from 'classnames';

import logo from '../../../img/logo.svg';

import './Logo.scss';

type Props = {
  className?: string,
};

const Logo = ({ className }: Props) => (
  <span className={cx('c-logo', className)}>
    <img src={logo} alt="Jargon.ist" height="24" className="u-img-responsive" />
  </span>
);

Logo.defaultProps = {
  className: '',
};

export default Logo;
