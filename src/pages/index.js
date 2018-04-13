// @flow

import React, { Fragment } from 'react';

import Hero from '../components/sections/Hero';

import { Container, Section } from '../components/ui';

const Home = () => (
  <Fragment>
    <Section>
      <Container>
        <Hero />
      </Container>
    </Section>
  </Fragment>
);

export default Home;
