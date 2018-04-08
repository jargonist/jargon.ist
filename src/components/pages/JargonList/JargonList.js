// @flow

import React, { Fragment } from 'react';
import Link from 'gatsby-link';

import { type Jargon } from '../../../types/jargon';

type Props = {
  jargons: Array<Jargon>,
};

const JargonList = ({ jargons }: Props) => (
  <Fragment>
    <h1>Dizin</h1>
    <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
      {jargons.map(jargon => (
        <li key={jargon.slug || ''} className="u-gap-bottom-xsmall">
          <Link to={`/${jargon.slug || ''}`} className="u-text-lowercase">
            {jargon.title}
          </Link>
        </li>
      ))}
    </ul>
  </Fragment>
);

export default JargonList;
