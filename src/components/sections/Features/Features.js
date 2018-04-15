// @flow

import React from 'react';

import { Box } from '../../ui';

import read from '../../../img/read.svg';
import learn from '../../../img/learn.svg';
import contribute from '../../../img/contribute.svg';

const Features = () => (
  <div className="row">
    <div className="col col--lg-4 u-gap-bottom@md-down">
      <Box className="u-text-center">
        <figure>
          <img src={read} alt="oku" className="u-img-fluid" />
        </figure>

        <h3 className="u-color-primary u-gap-top-medium u-clear-gap-bottom">oku</h3>
        <p>
          Programlama dilleri veya bilgisayar bilimlerinin temel prensipleri hakkındaki terimleri
          oku.
        </p>
      </Box>
    </div>

    <div className="col col--lg-4 u-gap-bottom@md-down">
      <Box className="u-text-center">
        <figure>
          <img src={learn} alt="öğren" className="u-img-fluid" />
        </figure>

        <h3 className="u-color-primary u-gap-top-medium u-clear-gap-bottom">öğren</h3>

        <p>
          Öğrendiklerin sayesinde Türkçe ya da İngilizce kaynakları okurken konuya daha çabuk hakim
          ol.
        </p>
      </Box>
    </div>

    <div className="col col--lg-4">
      <Box className="u-text-center">
        <figure>
          <img src={contribute} alt="katkıda bulun" className="u-img-fluid" />
        </figure>

        <h3 className="u-color-primary u-gap-top-medium u-clear-gap-bottom">katkıda bulun</h3>

        <p>
          Kendi başına veya topluluktan öğrendiğin jargonları jargon.ist’te paylaş, herkese yardımda
          bulun.
        </p>
      </Box>
    </div>
  </div>
);

export default Features;
