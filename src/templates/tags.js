// @flow

import React from 'react';
import Helmet from 'react-helmet';

import { Container, Section } from '../components/ui';

import TagList from '../components/pages/TagList';

import { type Tag } from '../types/tag';

type Props = {
  pathContext: {
    tagList: Array<Tag>,
  },
};

export const Tags = ({ pathContext }: Props) => (
  <Section>
    <Container>
      <Helmet>
        <title>Konular</title>
      </Helmet>

      {/* $FlowIgnoreNextLine */}
      <TagList tags={pathContext.tagList.sort((a, b) => a.title > b.title)} />
    </Container>
  </Section>
);

export default Tags;
