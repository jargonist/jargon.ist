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
      href={`${process.env.GATSBY_REPO_URL || ''}/blob/master/CONTRIBUTING.md`}
      target="_blank"
      rel="noopener noreferrer"
      className="c-button c-button--primary"
    >
      Katkıda Bulun
    </a>
  </nav>
);

export default Menu;
