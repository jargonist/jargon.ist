// @flow

import React, { PureComponent } from 'react';
import { navigateTo } from 'gatsby-link';
import { connectAutoComplete } from 'react-instantsearch/connectors';
import Autosuggest from 'react-autosuggest';

import { type Jargon } from '../../../types/jargon';
import { type Tag } from '../../../types/tag';

type IndexType = 'jargons' | 'tags';
type Hit = (Jargon | Tag) & { index: IndexType };

type Section = {
  index: IndexType,
  hits: Array<Jargon | Tag>,
};

type Props = {
  hits: Array<Jargon | Tag>,
  currentRefinement: string,
  refine: string => void,
};

export class AutoCompleteWrapper extends PureComponent<Props> {
  titles: { [string]: string };

  constructor(props: Props) {
    super(props);

    this.titles = {
      jargons: 'Jargonlar',
      tags: 'Konular',
    };
  }

  handleChange = (event: any, { newValue, method }: { newValue: string, method: string }) => {
    if (['click', 'enter'].indexOf(method) > -1) {
      navigateTo(newValue);
    }
  };

  handleSuggestionsFetchRequested = ({ value }: any) => {
    this.props.refine(value);
  };

  handleSuggestionsClearRequested = () => {
    this.props.refine('');
  };

  getSuggestionValue = (hit: Hit) => {
    const prefix = hit.index === 'jargons' ? '' : '/k';

    return `${prefix}/${hit.slug}`;
  };

  getSectionSuggestions = (section: Section) =>
    section.hits.map(hit => ({ ...hit, index: section.index }));

  renderSuggestion = (hit: Hit) => hit.title;

  renderSectionTitle = (section: Section) =>
    section.hits.length > 0 && (
      <h4 className="c-search__suggestions-section-title">{this.titles[section.index]}</h4>
    );

  render() {
    const { hits, currentRefinement } = this.props;

    return (
      <Autosuggest
        suggestions={hits}
        multiSection
        onSuggestionsFetchRequested={this.handleSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.handleSuggestionsClearRequested}
        getSuggestionValue={this.getSuggestionValue}
        getSectionSuggestions={this.getSectionSuggestions}
        renderSuggestion={this.renderSuggestion}
        inputProps={{
          placeholder: 'Jargon veya konu ara',
          value: currentRefinement,
          onChange: this.handleChange,
        }}
        renderSectionTitle={this.renderSectionTitle}
        theme={{
          input: 'c-search__input',
          suggestionsContainer: 'c-search__suggestions-container',
          suggestionsContainerOpen: 'c-search__suggestions-container--open',
          suggestionsList: 'c-search__suggestions-list',
          suggestion: 'c-search__suggestion',
          suggestionHighlighted: 'c-search__suggestion--highlighted',
        }}
      />
    );
  }
}

export default connectAutoComplete(AutoCompleteWrapper);
