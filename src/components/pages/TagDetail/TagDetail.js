// @flow

import React, { Fragment, PureComponent } from 'react';
import Link from 'gatsby-link';

import { Container, Section } from '../../ui';

import groupByFirstLetter, { type GroupedItem } from '../../../utils/groupByFirstLetter';
import createChunks from '../../../utils/chunks';

import { type Jargon } from '../../../types/jargon';

type Props = {
  tag: string,
  jargons: Array<Jargon>,
  totalCount: number,
};

type State = {
  chunks: Array<Array<GroupedItem<Jargon>>>,
};

class TagDetail extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);

    const groupedJargons = groupByFirstLetter(props.jargons, letter => letter.toUpperCase());

    this.state = {
      chunks: createChunks(groupedJargons, 4),
    };
  }

  render() {
    const { tag, totalCount } = this.props;
    const { chunks } = this.state;

    return (
      <Fragment>
        <Section className="u-bg-steel-gray">
          <Container>
            <h1 className="u-color-primary u-clear-gap-top u-gap-bottom-small">{tag}</h1>
            <p className="u-color-comet u-half-width@md-up u-full-width@md-down">
              {tag} konusu hakkında <strong>{totalCount} jargon</strong> bulunuyor.
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
                      {group.items.map(jargon => (
                        <div key={jargon.slug} className="u-gap-bottom-2xsmall">
                          <Link
                            to={`/${jargon.slug}`}
                            className="c-link-secondary u-font-family-secondary"
                          >
                            {jargon.title}
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

export default TagDetail;
