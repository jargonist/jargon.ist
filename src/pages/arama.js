// @flow

import React, { Fragment, PureComponent } from 'react';
import { Configure, InstantSearch, Index } from 'react-instantsearch/dom';
import Helmet from 'react-helmet';

import { navigateTo } from 'gatsby-link';
import qs from 'qs';

import SearchResults from '../components/pages/SearchResults';

type Props = {};

type State = {
  query: string,
};

class SearchPage extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);

    const query = this.getQuery();

    this.state = { query };
  }

  componentDidMount() {
    const { query } = this.state;

    if (!query) {
      navigateTo('/');
    }
  }

  getQuery = () => {
    if (!window) {
      return '';
    }

    const { q = '' } = qs.parse(window.location.search, { ignoreQueryPrefix: true });

    return q;
  };

  render() {
    const { query } = this.state;

    return (
      <Fragment>
        <Helmet>
          <title>Arama Sonuçları</title>
        </Helmet>
        <InstantSearch
          appId={process.env.GATSBY_ALGOLIASEARCH_APP_ID}
          apiKey={process.env.GATSBY_ALGOLIASEARCH_SEARCH_KEY}
          indexName="jargons"
        >
          <Configure hitsPerPage={3} query={query} />
          <Index indexName="jargons">
            <Configure hitsPerPage={5} />
          </Index>
          <Index indexName="tags">
            <Configure hitsPerPage={5} />
          </Index>

          <SearchResults />
        </InstantSearch>
      </Fragment>
    );
  }
}

export default SearchPage;
