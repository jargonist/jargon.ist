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
      <ul className="c-jargon-tags__list">
        {tags.slice(0, max).map(tag => (
          <li key={tag.slug} className="c-jargon-tags__tag">
            <Link to={`/k/${tag.slug}`} className="c-jargon-tags__link">
              {tag.title}
            </Link>
          </li>
        ))}
      </ul>
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
