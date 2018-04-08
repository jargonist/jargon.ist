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
        <title>Dizin</title>
      </Helmet>

      <h1>Dizin</h1>
      <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
        {pathContext.jargonList.map(jargon => (
          <li key={jargon.slug} className="u-gap-bottom-xsmall">
            <Link to={`/${jargon.slug}`} className="u-text-lowercase">
              {jargon.title}
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  </Section>
);

export default Tags;
