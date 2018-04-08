// @flow

import React from 'react';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import { graphql } from 'graphql';

import { Container, Section } from '../components/ui';

type Props = {
  data: Object,
  pathContext: Object,
};

const Jargon = ({ data, pathContext }: Props) => {
  const { allMarkdownRemark: { totalCount, edges: jargons } } = data;

  return (
    <Section>
      <Container>
        <Helmet>
          <title>{`${pathContext.tag} konulu jargonlar`}</title>
        </Helmet>
        <h1>
          {pathContext.tag} ({totalCount})
        </h1>
        <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
          {jargons.map(jargon => (
            <li key={jargon.node.fields.slug} className="u-gap-bottom-xsmall">
              <Link to={`/${jargon.node.fields.slug}`} className="u-text-lowercase">
                {jargon.node.frontmatter.title}
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
};

export const pageQuery = graphql`
  query JargonsByTag($tag: String!) {
    allMarkdownRemark(limit: 1000, filter: { frontmatter: { tags: { in: [$tag] } } }) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`;

export default Jargon;
