// @flow
/* eslint-disable react/no-danger */

import React, { Fragment } from 'react';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import { graphql } from 'graphql';

import { Container, Section } from '../components/ui';

type Props = {
  data: Object,
};

const Jargon = ({ data }: Props) => {
  const { markdownRemark } = data;
  const { frontmatter, html, fields } = markdownRemark;
  return (
    <Section>
      <Container>
        <Helmet>
          <title>{frontmatter.title}</title>
          {(frontmatter.tags || []).length > 0 && (
            <meta name="keywords" content={frontmatter.tags.join(', ')} />
          )}
        </Helmet>

        <h1 className="u-text-lowercase">{frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: html }} />

        {(frontmatter.tags || []).length > 0 && (
          <Fragment>
            <hr className="u-gap-top-medium" />

            <div>
              {fields.tagList.map(tag => (
                <Link
                  key={tag.slug}
                  to={`/k/${tag.slug}`}
                  className="u-gap-right-small u-text-lowercase"
                >
                  {tag.title}
                </Link>
              ))}
            </div>
          </Fragment>
        )}
      </Container>
    </Section>
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
