// @flow

import React from 'react';

import { Container, Section } from '../components/ui';

const NotFoundPage = () => (
  <Section>
    <Container>
      <h1>Sayfa bulunamadı</h1>
      <p>
        Aradığınız sayfa bulunamadı. Eğer aradıgınız şey bir jargon ise, bize{' '}
        <a href="https://github.com/alpcanaydin/jargon.ist/blob/master/CONTRIBUTING.md">katkıda bulunarak</a> jargon.ist'e
        ekleyebilirsin.
      </p>
    </Container>
  </Section>
);

export default NotFoundPage;
