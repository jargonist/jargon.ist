// @flow

import React from 'react';
import Link from 'gatsby-link';

import { Container } from '../../ui';

import Logo from '../Logo';
import Menu from '../Menu';
import Search from '../Search';

import './Header.scss';

const Header = () => (
  <header className="c-header">
    <Container>
      <div className="row u-align-items-center u-pad-ends-xsmall">
        <div className="col col--lg-2 col--xs-4">
          <Link to="/" className="c-header__logo">
            <Logo />
          </Link>
        </div>

        <div className="col col--lg-6 col--xs-8">
          <Search />
        </div>

        <div className="col col--lg-4 u-flex u-hidden@md-down">
          <Menu />
        </div>
      </div>
    </Container>
  </header>
);

export default Header;
