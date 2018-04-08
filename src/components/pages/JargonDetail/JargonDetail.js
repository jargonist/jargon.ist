// @flow
/* eslint-disable react/no-danger */

import React, { Fragment } from 'react';
import Link from 'gatsby-link';

import { type Jargon } from '../../../types/jargon';

type Props = {
  jargon: Jargon,
};

const JargonDetail = ({ jargon }: Props) => (
  <Fragment>
    <h1 className="u-text-lowercase">{jargon.title}</h1>
    <div dangerouslySetInnerHTML={{ __html: jargon.html }} />

    {(jargon.tags || []).length > 0 && (
      <Fragment>
        <hr className="u-gap-top-medium" />

        <div>
          {(jargon.tags || []).map(tag => (
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
  </Fragment>
);

export default JargonDetail;

/* eslint-enable react/no-danger */
