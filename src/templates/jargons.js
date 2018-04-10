// @flow

import React from 'react';
import Helmet from 'react-helmet';

import { Container, Section } from '../components/ui';

import JargonList from '../components/pages/JargonList';

import { type Jargon } from '../types/jargon';

type Props = {
  pathContext: {
    jargonList: Array<Jargon>,
  },
};

export const Jargons = ({ pathContext }: Props) => (
  <Section>
    <Container>
      <Helmet>
        <title>Dizin</title>
      </Helmet>

      {/* $FlowIgnoreNextLine */}
      <JargonList jargons={pathContext.jargonList.sort((a, b) => a.title > b.title)} />
    </Container>
  </Section>
);

export default Jargons;
