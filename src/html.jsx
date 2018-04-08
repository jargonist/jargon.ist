// @flow
/* eslint-disable react/no-danger */

import React, { type Node } from 'react';

import favicon from './img/favicon.png';

type Props = {
  body: string,
  headComponents: Node | Array<Node>,
  postBodyComponents: Node | Array<Node>,
};

const HTML = ({ body, headComponents, postBodyComponents }: Props) => {
  let css;

  if (process.env.NODE_ENV === 'production') {
    let inlinedStyles = '';
    if (process.env.NODE_ENV === 'production') {
      try {
        /* eslint-disable global-require, import/no-webpack-loader-syntax, import/no-unresolved */
        /* $FlowIgnoreNextLine */
        inlinedStyles = require('!raw-loader!../public/styles.css');
        /* eslint-enable global-require, import/no-webpack-loader-syntax, import/no-unresolved */
      } catch (e) {
        // eslint-disable-next-line no-console
        console.log(e);
      }
    }

    css = <style id="gatsby-inlined-css" dangerouslySetInnerHTML={{ __html: inlinedStyles }} />;
  }

  return (
    <html lang="tr">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {headComponents}
        <script
          defer
          src="https://use.fontawesome.com/releases/v5.0.9/js/all.js"
          integrity="sha384-8iPTk2s/jMVj81dnzb/iFR2sdA7u06vHJyyLlAd4snFpCl/SnyUjRrbdJsw1pGIl"
          crossOrigin="anonymous"
        />
        <link rel="shortcut icon" href={favicon} />
        {css}
      </head>
      <body>
        <div id="___gatsby" className="o-root" dangerouslySetInnerHTML={{ __html: body }} />
        {postBodyComponents}
      </body>
    </html>
  );
};

export default HTML;

/* eslint-enable react/no-danger */
