// @flow

import React from 'react';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import { graphql } from 'graphql';

type Props = {
  data: Object,
  pathContext: Object,
};

const Jargon = ({ data, pathContext }: Props) => {
  const { allMarkdownRemark: { totalCount, edges: jargons } } = data;

  return (
    <div>
      <Helmet>
        <title>{`${pathContext.tag}`} etiketli jargonlar</title>
      </Helmet>
      <h1>
        {pathContext.tag} ({totalCount})
      </h1>
      <ul>
        {jargons.map(jargon => (
          <li key={jargon.node.fields.slug}>
            <Link to={`/${jargon.node.fields.slug}`}>{jargon.node.frontmatter.title}</Link>
          </li>
        ))}
      </ul>
    </div>
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
