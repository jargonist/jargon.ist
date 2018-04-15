// @flow

import React, { Fragment } from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'graphql';

import TagDetail from '../components/pages/TagDetail';

import { type JargonFrontmatter } from '../types/jargon';

type Props = {
  data: {
    allMarkdownRemark: {
      totalCount: number,
      edges: Array<{
        node: {
          fields: {
            slug: string,
          },
          frontmatter: JargonFrontmatter,
        },
      }>,
    },
  },
  pathContext: {
    tag: string,
  },
};

export const Tag = ({ data, pathContext }: Props) => {
  const { allMarkdownRemark: { totalCount, edges: jargons } } = data;

  return (
    <Fragment>
      <Helmet>
        <title>{`${pathContext.tag} konulu jargonlar`}</title>
      </Helmet>

      <TagDetail
        tag={pathContext.tag}
        totalCount={totalCount}
        jargons={jargons.map(jargon => ({
          html: '',
          title: jargon.node.frontmatter.title,
          slug: jargon.node.fields.slug,
        }))}
      />
    </Fragment>
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

export default Tag;
