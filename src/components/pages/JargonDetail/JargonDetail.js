// @flow
/* eslint-disable react/no-danger */

import React from 'react';

import { Container, Section } from '../../ui';
import JargonTags from '../../sections/JargonTags';

import { type Jargon } from '../../../types/jargon';

type Props = {
  jargon: Jargon,
};

const JargonDetail = ({ jargon }: Props) => (
  <Section>
    <Container>
      <div className="u-pad-sides-2xlarge@lg-up u-pad-sides-large@md-up u-pad-sides@sm-up">
        <h1 className="u-color-primary u-clear-gap">{jargon.title}</h1>
        {(jargon.tags || []).length > 0 && (
          <JargonTags className="u-gap-top-small" tags={jargon.tags || []} />
        )}
        <div className="u-pad-top" dangerouslySetInnerHTML={{ __html: jargon.html }} />
      </div>
    </Container>
  </Section>
);

export default JargonDetail;

/* eslint-enable react/no-danger */
