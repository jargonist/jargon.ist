// @flow

import React, { Fragment } from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'graphql';

import JargonDetail from '../components/pages/JargonDetail';

import { type JargonFrontmatter } from '../types/jargon';
import { type Tag } from '../types/tag';

type Props = {
  data: {
    markdownRemark: {
      html: string,
      frontmatter: JargonFrontmatter,
      fields: {
        slug: string,
        tagList: Array<Tag>,
      },
    },
  },
};

export const Jargon = ({ data }: Props) => {
  const { markdownRemark } = data;
  const { frontmatter, html, fields } = markdownRemark;
  return (
    <Fragment>
      <Helmet>
        <title>{frontmatter.title}</title>
        <meta name="keywords" content={(frontmatter.tags || []).join(', ')} />
        <meta property="og:title" content={frontmatter.title} />
        <meta property="twitter:title" content={frontmatter.title} />
      </Helmet>

      <JargonDetail
        jargon={{
          html,
          title: frontmatter.title,
          slug: fields.slug,
          tags: (fields.tagList || []).sort((a, b) => a.title.localeCompare(b.title)),
        }}
      />
    </Fragment>
  );
};

export const pageQuery = graphql`
  query JargonBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fields {
        tagList {
          title
          slug
        }
      }
      frontmatter {
        title
        tags
      }
    }
  }
`;

export default Jargon;
