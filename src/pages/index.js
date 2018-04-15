// @flow

import React, { Fragment } from 'react';

import Hero from '../components/sections/Hero';
import Features from '../components/sections/Features';

import { Container, Section } from '../components/ui';

const Home = () => (
  <Fragment>
    <Section>
      <Container>
        <Hero />
      </Container>
    </Section>

    <Section>
      <Container>
        <Features />
      </Container>
    </Section>
  </Fragment>
);

export default Home;
