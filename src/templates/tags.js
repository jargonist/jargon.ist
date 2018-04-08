// @flow

import React from 'react';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';

import { Container, Section } from '../components/ui';

type Props = {
  pathContext: Object,
};

const Tags = ({ pathContext }: Props) => (
  <Section>
    <Container>
      <Helmet>
        <title>Konular</title>
      </Helmet>

      <h1>Konular</h1>
      <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
        {pathContext.tagList.map(tag => (
          <li key={tag.slug} className="u-gap-bottom-xsmall">
            <Link to={`/k/${tag.slug}`} className="u-text-lowercase">
              {tag.title}
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  </Section>
);

export default Tags;
