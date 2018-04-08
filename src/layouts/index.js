// @flow

import React, { type Node, Fragment } from 'react';
import Helmet from 'react-helmet';

import { Header, Footer } from '../components/sections';

import '../styles/index.scss';

type Props = {
  children: () => Node,
};

const TemplateWrapper = ({ children }: Props) => (
  <Fragment>
    <Helmet
      title="Jargon.ist"
      meta={[
        {
          name: 'description',
          content:
            'Jargon.ist, bilgisayar bilimleri alanında kullanılan bazı jargonların topluluk tarafından Türkçe olarak açıklanmasını sağlayan bir web uygulamasıdır.',
        },
      ]}
      defaultTitle="Jargon"
      titleTemplate="%s - Jargon.ist"
    />

    <Header />
    <main className="o-main">{children()}</main>
    <Footer />
  </Fragment>
);

export default TemplateWrapper;
