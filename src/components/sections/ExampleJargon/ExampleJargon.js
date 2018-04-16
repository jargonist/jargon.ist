// @flow

import React from 'react';

import { LinkButton } from '../../ui';

import jargonIllustration from '../../../img/jargon.svg';

const ExampleJargon = () => (
  <div className="row u-align-items-center">
    <div className="col--lg-6 u-hidden@md-down u-text-center">
      <img src={jargonIllustration} alt="örnek jargon" width="400" className="u-img-fluid" />
    </div>
    <div className="col--lg-6 u-pad-sides-xsmall@md-down">
      <h6 className="u-uppercase u-clear-gap u-color-white u-font-weight-bold">Örnek Jargon</h6>
      <h1 className="u-clear-gap u-color-primary">mutation</h1>
      <p className="u-color-comet u-gap-bottom">
        Mutation, programlama dillerinde bir veri tipini oluşturma aşamasından sonra uygulamanın
        herhangi bir anında modifiye etmek anlamına gelir. JavaScript özelinde bakacak olursak
        herhangi bir diziye bir eleman <i>push</i>'lamak mutation yaratır. Yine JavaScript özelinde
        primitive tipler immutable iken <code>Array</code> ve <code>Object</code> tipleri
        mutable'dır.
      </p>

      {/* It is embarrassing but works anyway :) */}
      {/* eslint-disable react/no-danger */}
      <div
        className="u-gap-bottom-large"
        dangerouslySetInnerHTML={{
          __html: `
<div class="gatsby-highlight">
  <pre class="language-js"><code class="language-js"><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  user<span class="token punctuation">:</span> <span class="token string">'user1'</span><span class="token punctuation">,</span>
  email<span class="token punctuation">:</span> <span class="token string">'user1@example.com'</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// obj objesini mutate ediyoruz.</span>
obj<span class="token punctuation">.</span>country <span class="token operator">=</span> <span class="token string">'TR'</span><span class="token punctuation">;</span></code></pre>
</div>
          `,
        }}
      />
      {/* eslint-enable react/no-danger */}

      <LinkButton to="/konular" primary className="u-full-width@md-down">
        Konuları Görüntüle
      </LinkButton>
    </div>
  </div>
);

export default ExampleJargon;
