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
      <div className="c-header__inner">
        <Link to="/" className="c-header__logo">
          <Logo />
        </Link>

        <Search />

        <Menu />
      </div>
    </Container>
  </header>
);

export default Header;
