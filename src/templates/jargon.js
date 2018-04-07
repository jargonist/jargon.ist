// @flow
/* eslint-disable react/no-danger */

import React, { Fragment } from 'react';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import { graphql } from 'graphql';

type Props = {
  data: Object,
};

const Jargon = ({ data }: Props) => {
  const { markdownRemark } = data;
  const { frontmatter, html, fields } = markdownRemark;
  return (
    <div>
      <Helmet>
        <title>{frontmatter.title}</title>
        <meta name="keywords" content={frontmatter.tags.join(', ')} />
      </Helmet>

      <h1>{frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <hr />
      <div>
        <strong>Etiketler:</strong>
        {fields.tagList.map((tag, index) => (
          <Fragment key={tag.slug}>
            <Link to={`/e/${tag.slug}`}>{tag.title}</Link>
            {index < fields.tagList.length - 1 && <span>, </span>}
          </Fragment>
        ))}
      </div>
    </div>
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

/* eslint-enable react/no-danger */
