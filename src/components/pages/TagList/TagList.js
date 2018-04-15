// @flow

import React, { Fragment, PureComponent } from 'react';
import Link from 'gatsby-link';

import { Container, Section } from '../../ui';

import groupByFirstLetter, { type GroupedItem } from '../../../utils/groupByFirstLetter';
import createChunks from '../../../utils/chunks';

import { type Tag } from '../../../types/tag';

type Props = {
  tags: Array<Tag>,
};

type State = {
  chunks: Array<Array<GroupedItem<Tag>>>,
};

class TagList extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);

    const groupedJargons = groupByFirstLetter(props.tags, letter => letter.toLocaleUpperCase());

    this.state = {
      chunks: createChunks(groupedJargons, 4),
    };
  }

  render() {
    const { chunks } = this.state;

    return (
      <Fragment>
        <Section className="u-bg-steel-gray">
          <Container>
            <h1 className="u-color-primary u-clear-gap-top u-gap-bottom-small">Konular</h1>
            <p className="u-color-comet u-half-width@md-up u-full-width@md-down">
              Belli konular için gruplanmış jargonları görüntüleyin.
            </p>
          </Container>
        </Section>

        <Section className="u-pad-bottom-large">
          <Container>
            <div className="row">
              {chunks.map((chunk, index) => (
                /* eslint-disable-next-line react/no-array-index-key */
                <div key={index} className={`col col--lg-${12 / chunks.length}`}>
                  {chunk.map(group => (
                    <div key={group.letter} className="u-pad-bottom-large">
                      <h2 className="u-color-primary u-clear-gap-top">{group.letter}</h2>
                      {group.items.map(tag => (
                        <div key={tag.slug} className="u-gap-bottom-2xsmall">
                          <Link to={`/k/${tag.slug}`} className="c-link-secondary">
                            {tag.title}
                          </Link>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </Container>
        </Section>
      </Fragment>
    );
  }
}

export default TagList;
