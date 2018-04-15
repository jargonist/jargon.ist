// @flow

import React, { Fragment } from 'react';
import Helmet from 'react-helmet';

import TagList from '../components/pages/TagList';

import { type Tag } from '../types/tag';

type Props = {
  pathContext: {
    tagList: Array<Tag>,
  },
};

export const Tags = ({ pathContext }: Props) => (
  <Fragment>
    <Helmet>
      <title>Konular</title>
    </Helmet>

    <TagList tags={pathContext.tagList} />
  </Fragment>
);

export default Tags;
