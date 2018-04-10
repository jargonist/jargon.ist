// @flow

import { type Tag } from './tag';

export type JargonFrontmatter = {
  title: string,
  sameWith?: Array<string>,
  tags?: Array<string>,
};

export type Jargon = {
  html: string,
  title: string,
  slug: string,
  tags?: Array<Tag>,
  sameWith?: Array<string>,
};
