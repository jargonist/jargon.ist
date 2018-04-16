// @flow

import React, { Fragment, PureComponent } from 'react';
import Link, { navigateTo } from 'gatsby-link';
import { connectStateResults } from 'react-instantsearch/connectors';

import { Container, Section } from '../../ui';

import { type Jargon } from '../../../types/jargon';
import { type Tag } from '../../../types/tag';

type Props = {
  allSearchResults?: {
    jargons?: {
      query: string,
      hits: Array<Jargon>,
    },
    tags?: {
      query: string,
      hits: Array<Tag>,
    },
  },
};

export class SearchResultsWrapper extends PureComponent<Props> {
  componentDidMount() {
    this.navigateIfNecessary();
  }

  componentDidUpdate() {
    this.navigateIfNecessary();
  }

  navigateIfNecessary = () => {
    if (!this.props.allSearchResults) {
      return;
    }

    const { jargons, tags } = this.props.allSearchResults;

    if (!jargons || !tags) {
      return;
    }

    if (
      jargons.hits.length === 1 &&
      tags.hits.length === 0 &&
      jargons.query.toLocaleLowerCase() === jargons.hits[0].title.toLocaleLowerCase()
    ) {
      navigateTo(`/${jargons.hits[0].slug}`);
    }

    if (
      jargons.hits.length === 0 &&
      tags.hits.length === 1 &&
      tags.query.toLocaleLowerCase() === tags.hits[0].title.toLocaleLowerCase()
    ) {
      navigateTo(`/k/${tags.hits[0].slug}`);
    }
  };

  render() {
    const { jargons, tags } = this.props.allSearchResults || {};

    return (
      <Fragment>
        <Section className="u-bg-steel-gray">
          <Container>
            <h1 className="u-color-primary u-clear-gap">Arama Sonuçları</h1>
          </Container>
        </Section>
        <Section>
          <Container>
            <div className="row">
              <div className="col col--lg-6 u-gap-bottom-xlarge@md-down">
                <h2 className="u-color-primary u-clear-gap-top">Jargonlar</h2>
                {jargons &&
                  jargons.hits.length > 0 &&
                  jargons.hits.map(jargon => (
                    <div key={jargon.slug} className="u-gap-bottom-2xsmall">
                      <Link to={`/${jargon.slug}`} className="c-link-secondary">
                        {jargon.title}
                      </Link>
                    </div>
                  ))}
                {jargons && jargons.hits.length === 0 && <p>Herhangi bir jargon bulunamadı.</p>}
              </div>

              <div className="col col--lg-6">
                <h2 className="u-color-primary u-clear-gap-top">Konular</h2>
                {tags &&
                  tags.hits.length > 0 &&
                  tags.hits.map(tag => (
                    <div key={tag.slug} className="u-gap-bottom-2xsmall">
                      <Link to={`/k/${tag.slug}`} className="c-link-secondary">
                        {tag.title}
                      </Link>
                    </div>
                  ))}
                {tags && tags.hits.length === 0 && <p>Herhangi bir konu bulunamadı.</p>}
              </div>
            </div>
          </Container>
        </Section>
      </Fragment>
    );
  }
}

export default connectStateResults(SearchResultsWrapper);
