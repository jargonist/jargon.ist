// @flow

import React, { Fragment } from 'react';
import Helmet from 'react-helmet';

import JargonList from '../components/pages/JargonList';

import { type Jargon } from '../types/jargon';

type Props = {
  pathContext: {
    jargonList: Array<Jargon>,
  },
};

export const Jargons = ({ pathContext }: Props) => (
  <Fragment>
    <Helmet>
      <title>Dizin</title>
      <meta name="og:title" content="Dizin" />
      <meta name="twitter:title" content="Dizin" />
    </Helmet>

    <JargonList jargons={pathContext.jargonList} />
  </Fragment>
);

export default Jargons;
