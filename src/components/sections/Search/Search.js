// @flow

import React from 'react';

import { Configure, InstantSearch, Index } from 'react-instantsearch/dom';

import AutoComplete from './AutoComplete';

import './Search.scss';

const Search = () => (
  <div className="c-search">
    <InstantSearch
      appId={process.env.GATSBY_ALGOLIASEARCH_APP_ID}
      apiKey={process.env.GATSBY_ALGOLIASEARCH_SEARCH_KEY}
      indexName="jargons"
    >
      <Configure hitsPerPage={3} />
      <Index indexName="jargons">
        <Configure hitsPerPage={5} />
      </Index>
      <Index indexName="tags">
        <Configure hitsPerPage={5} />
      </Index>
      <AutoComplete />
    </InstantSearch>
  </div>
);

export default Search;
