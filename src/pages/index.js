// @flow

import React, { Fragment } from 'react';

import Hero from '../components/sections/Hero';
import Features from '../components/sections/Features';
import ExampleJargon from '../components/sections/ExampleJargon';
import CallToAction from '../components/sections/CallToAction';

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

    <Section className="u-bg-cinder">
      <Container>
        <ExampleJargon />
      </Container>
    </Section>

    <Section>
      <Container>
        <CallToAction />
      </Container>
    </Section>
  </Fragment>
);

export default Home;
