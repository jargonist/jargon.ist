// @flow

import React, { Fragment } from 'react';
import Link from 'gatsby-link';

import { type Tag } from '../../../types/tag';

type Props = {
  tags: Array<Tag>,
};

const TagList = ({ tags }: Props) => (
  <Fragment>
    <h1>Konular</h1>
    <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
      {tags.map(tag => (
        <li key={tag.slug} className="u-gap-bottom-xsmall">
          <Link to={`/k/${tag.slug}`} className="u-text-lowercase">
            {tag.title}
          </Link>
        </li>
      ))}
    </ul>
  </Fragment>
);

export default TagList;
