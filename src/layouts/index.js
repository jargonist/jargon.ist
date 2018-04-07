// @flow

import React, { type Node } from 'react';
import Helmet from 'react-helmet';

type Props = {
  children: () => Node,
};

const TemplateWrapper = ({ children }: Props) => (
  <div>
    <Helmet
      title="Jargon"
      meta={[{ name: 'description', content: 'TODO' }, { name: 'keywords', content: 'TODO' }]}
      defaultTitle="Jargon"
      titleTemplate="%s | Jargon"
    />

    {children()}
  </div>
);

export default TemplateWrapper;
