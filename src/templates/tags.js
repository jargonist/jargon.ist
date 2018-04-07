// @flow

import React from 'react';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';

type Props = {
  pathContext: Object,
};

const Tags = ({ pathContext }: Props) => (
  <div>
    <Helmet>
      <title>Etiketler</title>
    </Helmet>

    <h1>Etiketler</h1>
    <ul>
      {pathContext.tagList.map(tag => (
        <li key={tag.slug}>
          <Link to={`/e/${tag.slug}`}>{tag.title}</Link>
        </li>
      ))}
    </ul>
  </div>
);

export default Tags;
