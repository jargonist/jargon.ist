// @flow

import React from 'react';

import './Search.scss';

const Search = () => (
  <div className="c-search">
    <i className="fas fa-search" />
    <input type="search" className="c-search__input" placeholder="Jargon veya konu ara" />
  </div>
);

export default Search;
