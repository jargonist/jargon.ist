// @flow

import React, { Fragment } from 'react';
import Link from 'gatsby-link';
import cx from 'classnames';

import { type Tag } from '../../../types/tag';

import './JargonTags.scss';

type Props = {
  tags: Array<Tag>,
  className?: string,
  max?: number,
};

const JargonTags = ({ tags, className, max = 6 }: Props) => (
  <div className={cx('c-jargon-tags', className)}>
    <Fragment>
      {tags.slice(0, max).map(tag => (
        <Link key={tag.slug} to={`/k/${tag.slug}`} className="c-jargon-tags__tag u-gap-right-small">
          {tag.title}
        </Link>
      ))}
      {tags.length > max && (
        <span className="c-jargon-tags__more">ve {tags.length - max} tane daha</span>
      )}
    </Fragment>
  </div>
);

JargonTags.defaultProps = {
  className: '',
  max: 6,
};

export default JargonTags;
