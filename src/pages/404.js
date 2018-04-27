// @flow

import React from 'react';

import { Container, Section } from '../components/ui';

const NotFoundPage = () => (
  <Section>
    <Container>
      <h1>Sayfa bulunamadı</h1>
      <p>
        Aradığınız sayfa bulunamadı. Eğer aradığınız şey bir jargon ise, bize{' '}
        <a href={`${process.env.GATSBY_REPO_URL || ''}/blob/master/CONTRIBUTING.md`}>
          katkıda bulunarak
        </a>{' '}
        jargon.ist'e ekleyebilirsin.
      </p>
    </Container>
  </Section>
);

export default NotFoundPage;
