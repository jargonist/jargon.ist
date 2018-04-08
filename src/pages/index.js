// @flow

import React from 'react';
import { InstantSearch, Index, SearchBox, Hits, Configure } from 'react-instantsearch/dom';

const Home = () => (
  <div>
    <h1>Jargon</h1>
    <InstantSearch
      appId={process.env.GATSBY_ALGOLIASEARCH_APP_ID}
      apiKey={process.env.GATSBY_ALGOLIASEARCH_SEARCH_KEY}
      indexName="jargons"
    >
      <Configure hitsPerPage={5} />
      <SearchBox />
      <Index indexName="jargons">
        <Hits />
      </Index>
      <Index indexName="tags">
        <Hits />
      </Index>
    </InstantSearch>
  </div>
);

export default Home;
