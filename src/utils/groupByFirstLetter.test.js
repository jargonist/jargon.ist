// @flow

import groupByFirstLetter from './groupByFirstLetter';

it('runs correctlty', () => {
  const withH = { title: 'Hello world', slug: 'hello-world' };
  const withL = { title: 'Letter', slug: 'letter' };
  const withM = { title: 'Merhaba dünya', slug: 'merhaba-dunya' };
  const withM2 = { title: 'Merhaba', slug: 'merhaba' };

  const items = [withM, withH, withL, withM2];

  const grouped = groupByFirstLetter(items);

  expect(grouped).toEqual([
    { letter: 'H', items: [withH] },
    { letter: 'L', items: [withL] },
    { letter: 'M', items: [withM2, withM] },
  ]);
});
