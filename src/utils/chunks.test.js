// @flow

import chunks from './chunks';

it('runs correctly', () => {
  const arr = [1, 2, 3, 4, 5];

  expect(chunks(arr, 2)).toEqual([[1, 2], [3, 4], [5]]);
});

it('does nothing for empty array', () => {
  expect(chunks([], 4)).toEqual([]);
});
