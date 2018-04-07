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
      <title>Dizin</title>
    </Helmet>

    <h1>Dizin</h1>
    <ul>
      {pathContext.jargonList.map(jargon => (
        <li key={jargon.slug}>
          <Link to={`/e/${jargon.slug}`}>{jargon.title}</Link>
        </li>
      ))}
    </ul>
  </div>
);

export default Tags;
