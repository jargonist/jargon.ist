// @flow

import React from 'react';

import { LinkButton } from '../../ui';

import hero from '../../../img/hero.svg';

import './Hero.scss';

const Hero = () => (
  <div className="c-hero row u-align-items-center">
    <div className="col col--lg-5">
      <h1 className="u-color-primary u-clear-gap-top u-gap-bottom-small">jargon.ist</h1>
      <p className="u-gap-bottom">
        Jargon.ist, bilgisayar bilimleri alanında kullanılan jargonların topluluk tarafından Türkçe
        olarak açıklanmasını sağlayan bir web uygulamasıdır.
      </p>

      <LinkButton to="/dizin" primary>
        Dizini Görüntüle
        <span className="u-pad-left-2xsmall">⟶</span>
      </LinkButton>
    </div>

    <div className="col col--lg-7 u-hidden@md-down u-text-right">
      <img src={hero} alt="jargon.ist" className="c-hero__img" />
    </div>
  </div>
);

export default Hero;
