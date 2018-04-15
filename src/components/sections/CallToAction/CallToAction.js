// @flow

import React from 'react';

import {} from '../../ui/LinkButton';

const CallToAction = () => (
  <div className="u-text-center">
    <h1 className="u-color-primary u-clear-gap">
      <span className="u-hidden@sm-down">sen de </span>katkıda bulun
    </h1>

    <p className="u-color-comet u-gap-top-xsmall u-gap-bottom ">
      Yeni bir jargon eklemek için sadece bir markdown dosyası hazırlaman yeterli.
    </p>

    <a
      href={`${process.env.GATSBY_REPO_URL || ''}/blob/master/CONTRIBUTING.md`}
      target="_blank"
      rel="noopener noreferrer"
      className="c-button c-button--primary"
    >
      Yeni Jargon Ekle
    </a>
  </div>
);

export default CallToAction;
