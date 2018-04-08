// @flow

import React from 'react';

import { Container, Section, LinkButton } from '../components/ui';

const Home = () => (
  <Section>
    <Container>
      <h1>Jargon.ist</h1>
      <p className="u-half-width u-gap-bottom">
        Jargon.ist, bilgisayar bilimleri alanında kullanılan bazı jargonların topluluk tarafından
        Türkçe olarak açıklanmasını sağlayan bir web uygulamasıdır.
      </p>

      <LinkButton to="/dizin" primary>
        Dizini Görüntüle
        <span className="u-pad-left-2xsmall">⟶</span>
      </LinkButton>
    </Container>
  </Section>
);

export default Home;
