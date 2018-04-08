// @flow

import React from 'react';
import Link from 'gatsby-link';

import './Menu.scss';

const Menu = () => (
  <nav className="c-menu">
    <Link className="c-menu__link" to="/dizin" activeClassName="is-active">
      Dizin
    </Link>

    <Link className="c-menu__link" to="/konular" activeClassName="is-active">
      Konular
    </Link>

    <a
      href="https://github.com/alpcanaydin/jargon.ist"
      target="_blank"
      rel="noopener noreferrer"
      className="c-menu__link"
      to="/konular"
    >
      Katkıda Bulun <i className="fas fa-external-link-alt u-font-size-small" />
    </a>
  </nav>
);

export default Menu;
